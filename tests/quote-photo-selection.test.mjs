import test, { after, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import ts from 'typescript';
import { JSDOM } from 'jsdom';

// Real React and Radix mounted in a DOM, with no provider scripts or network.
// JSDOM does not establish native keyboard defaults, layout or browser support.
const directory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'https://gallery-test.invalid/', pretendToBeVisual: true,
});
const saved = new Map();
for (const key of ['window', 'document', 'navigator', 'HTMLElement', 'HTMLInputElement', 'Element', 'Node', 'NodeFilter', 'Document', 'DocumentFragment', 'CustomEvent', 'Event', 'KeyboardEvent', 'MouseEvent', 'MutationObserver', 'getComputedStyle', 'requestAnimationFrame', 'cancelAnimationFrame']) {
  saved.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
  const value = ['getComputedStyle', 'requestAnimationFrame', 'cancelAnimationFrame'].includes(key)
    ? dom.window[key].bind(dom.window) : dom.window[key];
  Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
}
saved.set('IS_REACT_ACT_ENVIRONMENT', Object.getOwnPropertyDescriptor(globalThis, 'IS_REACT_ACT_ENVIRONMENT'));
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
const React = require('react');
const { act } = React;
const { createRoot } = require('react-dom/client');

// Compile the complete components, resolving local imports without mocking hooks,
// React DOM, portals, focus scopes, dismissal or scroll-lock implementation.
let submitMock = async () => { throw new Error('No submissions allowed'); };
const loaded = new Map();
function loadSource(file) {
  if (loaded.has(file)) return loaded.get(file).exports;
  const module = { exports: {} };
  loaded.set(file, module);
  const source = readFileSync(file, 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
    jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
  } }).outputText;
  const localRequire = (specifier) => {
    if (specifier === './submitQuote') return { submitQuote: (...args) => submitMock(...args), trackQuoteEvent: () => {} };
    if (!specifier.startsWith('.') && !specifier.startsWith('@/')) return require(specifier);
    const base = specifier.startsWith('@/')
      ? path.join(directory, 'src', specifier.slice(2)) : path.resolve(path.dirname(file), specifier);
    const resolved = ['', '.tsx', '.ts', '.js'].map(extension => base + extension).find(existsSync);
    assert.ok(resolved, `Resolve local component import ${specifier}`);
    return loadSource(resolved);
  };
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
  return module.exports;
}

const { QuoteSurvey } = loadSource(path.join(directory, 'src/components/quote/QuoteSurvey.tsx'));
const { MemoryRouter } = require('react-router-dom');
let root;
let readers = [];
globalThis.FileReader = class {
  readAsDataURL(file) { this.file = file; readers.push(this); }
};
async function change(fn) { await act(async () => { fn(); }); }
async function mount() {
  readers = [];
  submitMock = async () => { throw new Error('No submissions allowed'); };
  document.body.innerHTML = '<div id="mount"></div>';
  root = createRoot(document.getElementById('mount'));
  await change(() => root.render(React.createElement(MemoryRouter, null,
    React.createElement(QuoteSurvey, { variant: 'inline', headingLevel: 'h2', initialService: 'stonework' }))));
}
async function select(files) {
  const input = document.querySelector('input[type=file]');
  Object.defineProperty(input, 'files', { configurable: true, value: files });
  await change(() => input.dispatchEvent(new Event('change', { bubbles: true })));
}
async function finish(reader, failure = false, dataUrl = 'data:image/png;base64,YQ==') {
  await change(() => { reader.result = dataUrl; failure ? reader.onerror() : reader.onload(); });
}
const photo = (name, size = 100) => ({ name, size, type: 'image/png' });
afterEach(async () => { if (root) await change(() => root.unmount()); });
after(() => {
  dom.window.close();
  delete globalThis.FileReader;
  for (const [key, descriptor] of saved) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor);
    else delete globalThis[key];
  }
});
test('photo selection stays serialized while a file is being read', async () => {
  await mount();
  await select([photo('one.png')]);
  assert.equal(document.querySelector('input[type=file]').disabled, true);
  await select([photo('overlap.png')]);
  assert.equal(readers.length, 1);
  const next = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Next');
  assert.equal(next.disabled, true);
  await finish(readers[0]);
  assert.equal(document.querySelector('input[type=file]').disabled, false);
  assert.equal(document.querySelectorAll('img').length, 1);
});
test('a valid photo does not erase a rejected-photo explanation', async () => {
  await mount();
  await select([photo('oversize.png', 3 * 1024 * 1024), photo('good.png')]);
  await finish(readers[0]);
  assert.match(document.querySelector('[role=alert]').textContent, /oversize.png is too large/);
  assert.equal(document.querySelectorAll('img').length, 1);
});
test('failed reads release the picker and keep the error visible', async () => {
  await mount();
  await select([photo('broken.png')]);
  await finish(readers[0], true);
  assert.match(document.querySelector('[role=alert]').textContent, /Could not read broken.png/);
  assert.equal(document.querySelector('input[type=file]').disabled, false);
  await select([photo('retry.png')]);
  await finish(readers[1]);
  assert.equal(document.querySelector('[role=alert]'), null);
});
test('three-photo limit rejects excess and stays within total byte budget', async () => {
  await mount();
  await select([photo('one.png', 2 * 1024 * 1024), photo('two.png', 2 * 1024 * 1024), photo('three.png'), photo('four.png')]);
  await finish(readers[0]);
  await finish(readers[1]);
  assert.equal(readers.length, 2);
  assert.equal(document.querySelectorAll('img').length, 2);
  assert.match(document.querySelector('[role=alert]').textContent, /no more than 3 photos/);
  assert.match(document.querySelector('[role=alert]').textContent, /total under 4 MB/);
});
test('later selections respect existing photos and removal is blocked during reads', async () => {
  await mount();
  await select([photo('one.png'), photo('two.png')]);
  await finish(readers[0]);
  await finish(readers[1]);
  await select([photo('three.png'), photo('four.png')]);
  assert.equal(readers.length, 3);
  assert.equal(document.querySelector('button[aria-label^="Remove photo "]').disabled, true);
  await finish(readers[2]);
  assert.equal(document.querySelectorAll('img').length, 3);
  assert.match(document.querySelector('[role=alert]').textContent, /no more than 3 photos/);
  await change(() => document.querySelector('button[aria-label^="Remove photo "]').click());
  assert.equal(document.querySelectorAll('img').length, 2);
});
test('photo picker has a focusable button, help text and read/count announcements', async () => {
  await mount();
  const picker = [...document.querySelectorAll('button')].find(b => b.textContent.includes('Add photos'));
  assert.ok(picker);
  assert.equal(picker.tabIndex, 0);
  assert.match(document.getElementById(picker.getAttribute('aria-describedby')).textContent, /2 MB each/);
  let opens = 0;
  document.querySelector('input[type=file]').addEventListener('click', () => { opens++; });
  await change(() => { picker.focus(); picker.click(); });
  assert.equal(opens, 1);
  assert.equal(document.activeElement, picker);
  await select([photo('wall.png')]);
  assert.match(document.querySelector('[role=status]').textContent, /Reading photos/);
  await finish(readers[0]);
  assert.match(document.querySelector('[role=status]').textContent, /1 of 3/);
  const remove = document.querySelector('button[aria-label^="Remove photo "]');
  assert.equal(remove.getAttribute('aria-label'), 'Remove photo 1: wall.png');
  await change(() => remove.click());
  assert.match(document.querySelector('[role=status]').textContent, /0 of 3/);
});
test('empty and unsupported photo files are rejected before file reading', async () => {
  await mount();
  await select([photo('empty.png', 0), { name: 'notes.txt', size: 20, type: 'text/plain' }]);
  assert.equal(readers.length, 0);
  assert.match(document.querySelector('[role=alert]').textContent, /empty.png is empty/);
  assert.match(document.querySelector('[role=alert]').textContent, /notes.txt is not a supported photo/);
});
test('timeline radios use a single tab stop and wrap with arrow keys', async () => {
  await mount();
  const radios = [...document.querySelectorAll('[role=radio]')];
  assert.deepEqual(radios.map(r => r.tabIndex), [0, -1, -1, -1]);
  await change(() => {
    radios[0].focus();
    radios[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, cancelable: true }));
  });
  assert.equal(document.activeElement, radios[3]);
  assert.equal(radios[3].getAttribute('aria-checked'), 'true');
  assert.deepEqual(radios.map(r => r.tabIndex), [-1, -1, -1, 0]);
  for (const key of ['ArrowRight', 'ArrowDown', 'ArrowUp']) {
    const before = radios.indexOf(document.activeElement);
    await change(() => document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true })));
    const expected = (before + (key === 'ArrowUp' ? -1 : 1) + 4) % 4;
    assert.equal(document.activeElement, radios[expected]);
    assert.equal(radios[expected].getAttribute('aria-checked'), 'true');
  }
});
test('coexisting quote forms have unique IDs and local label/picker targets', async () => {
  await mount();
  await change(() => root.render(React.createElement(MemoryRouter, null,
    ...['inline', 'modal'].map(variant => React.createElement(QuoteSurvey, { key: variant, variant, headingLevel: 'h2', initialService: 'stonework' })))));
  const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const label of document.querySelectorAll('label[for]')) {
    assert.ok(document.getElementById(label.htmlFor));
  }
  const inputs = [...document.querySelectorAll('input[type=file]')];
  const clicks = [0, 0];
  inputs.forEach((input, i) => input.addEventListener('click', () => clicks[i]++));
  const pickers = [...document.querySelectorAll('button')].filter(b => b.textContent.includes('Add photos'));
  await change(() => pickers[1].click());
  assert.deepEqual(clicks, [0, 1]);
});
test('removing focused photos preserves focus on another removal control or the picker', async () => {
  await mount();
  await select([photo('one.png'), photo('two.png')]);
  await finish(readers[0]);
  await finish(readers[1]);
  const removals = () => [...document.querySelectorAll('button[aria-label^="Remove photo "]')];
  await change(() => { removals()[1].focus(); removals()[1].click(); });
  assert.equal(document.activeElement, removals()[0]);
  await change(() => { removals()[0].click(); });
  assert.match(document.activeElement.textContent, /Add photos of the job/);
});
test('each advertised photo MIME type is accepted, while missing and SVG types are rejected', async () => {
  await mount();
  for (const type of ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']) {
    const before = readers.length;
    await select([{ name: 'sample', size: 100, type }]);
    assert.equal(readers.length, before + 1, type);
    await finish(readers[before]);
    await change(() => document.querySelector('button[aria-label^="Remove photo "]').click());
  }
  await select([{ name: 'missing-type', size: 100, type: '' }, { name: 'vector.svg', size: 100, type: 'image/svg+xml' }]);
  assert.equal(readers.length, 5);
  assert.match(document.querySelector('[role=alert]').textContent, /missing-type is not a supported photo/);
  assert.match(document.querySelector('[role=alert]').textContent, /vector.svg is not a supported photo/);
});
test('per-file boundary accepts exactly 2 MiB and rejects one byte over', async () => {
  await mount();
  await select([photo('over.png', 2 * 1024 * 1024 + 1), photo('exact.png', 2 * 1024 * 1024)]);
  assert.equal(readers.length, 1);
  assert.equal(readers[0].file.name, 'exact.png');
  await finish(readers[0]);
  assert.match(document.querySelector('[role=alert]').textContent, /over.png is too large/);
  assert.equal(document.querySelectorAll('img').length, 1);
});
test('combined boundary includes earlier selections and accepts exactly 4 MiB', async () => {
  await mount();
  await select([photo('one.png', 2 * 1024 * 1024)]);
  await finish(readers[0]);
  await select([photo('two.png', 2 * 1024 * 1024)]);
  await finish(readers[1]);
  await select([photo('one-byte.png', 1)]);
  assert.equal(readers.length, 2);
  assert.equal(document.querySelectorAll('img').length, 2);
  assert.match(document.querySelector('[role=alert]').textContent, /total under 4 MB/);
});
test('three files are accepted but a repeated stale selection cannot exceed the count', async () => {
  await mount();
  await select([photo('one.png'), photo('two.png'), photo('three.png')]);
  await select([photo('stale.png')]);
  assert.equal(readers.length, 1);
  await finish(readers[0]);
  await finish(readers[1]);
  await finish(readers[2]);
  assert.equal(document.querySelectorAll('img').length, 3);
  await select([photo('four.png')]);
  assert.equal(readers.length, 3);
  assert.equal(document.querySelectorAll('img').length, 3);
  assert.match(document.querySelector('[role=alert]').textContent, /no more than 3 photos/);
  await select(null);
  assert.equal(readers.length, 3);
});
test('the same photo can be selected again after removal', async () => {
  await mount();
  const same = photo('same.png');
  await select([same]);
  await finish(readers[0]);
  await change(() => document.querySelector('button[aria-label^="Remove photo "]').click());
  await select([same]);
  assert.equal(readers.length, 2);
  await finish(readers[1]);
  assert.equal(document.querySelectorAll('img').length, 1);
  assert.equal(document.querySelector('input[type=file]').value, '');
});
test('image error replaces only the failed preview and keeps its filename and remove control', async () => {
  await mount();
  await select([{ name: 'rainbow.heic', type: 'image/heic', size: 7080 }, photo('wall.png')]);
  await finish(readers[0], false, 'data:image/heic;base64,YQ==');
  await finish(readers[1]);
  const previews = [...document.querySelectorAll('img')];
  await change(() => previews[1].dispatchEvent(new Event('load')));
  await change(() => previews[0].dispatchEvent(new Event('error')));
  assert.equal(document.querySelectorAll('img').length, 1);
  assert.equal(document.querySelector('img').alt, 'wall.png');
  assert.match(document.body.textContent, /rainbow.heic/);
  assert.match(document.body.textContent, /Preview unavailable; photo attached./);
  assert.ok(document.querySelector('button[aria-label="Remove photo 1: rainbow.heic"]'));
  assert.equal(document.querySelector('[role=alert]'), null);
  assert.match(document.querySelector('[role=status]').textContent, /2 of 3 photos attached/);
});
test('removal and reselection clear failed preview state without affecting neighboring PNGs', async () => {
  await mount();
  const heic = { name: 'rainbow.heic', type: 'image/heic', size: 7080 };
  await select([heic, photo('wall.png')]);
  await finish(readers[0]);
  await finish(readers[1]);
  await change(() => document.querySelector('img[alt="rainbow.heic"]').dispatchEvent(new Event('error')));
  const remove = document.querySelector('button[aria-label="Remove photo 1: rainbow.heic"]');
  await change(() => { remove.focus(); remove.click(); });
  assert.equal(document.activeElement.getAttribute('aria-label'), 'Remove photo 1: wall.png');
  assert.equal(document.querySelector('img').alt, 'wall.png');
  assert.doesNotMatch(document.body.textContent, /Preview unavailable/);
  await select([heic]);
  await finish(readers[2]);
  assert.equal(document.querySelectorAll('img').length, 2);
  assert.ok(document.querySelector('img[alt="rainbow.heic"]'));
  await change(() => document.querySelector('img[alt="rainbow.heic"]').dispatchEvent(new Event('error')));
  assert.equal(document.querySelector('img').alt, 'wall.png');
  assert.match(document.body.textContent, /Preview unavailable/);
});
test('removing a successful neighbor does not transfer or clear the failed photo state', async () => {
  await mount();
  await select([photo('wall.png'), { name: 'rainbow.heic', type: 'image/heic', size: 7080 }]);
  await finish(readers[0]);
  await finish(readers[1]);
  await change(() => document.querySelector('img[alt="rainbow.heic"]').dispatchEvent(new Event('error')));
  await change(() => document.querySelector('button[aria-label="Remove photo 1: wall.png"]').click());
  assert.equal(document.querySelectorAll('img').length, 0);
  assert.match(document.body.textContent, /Preview unavailable; photo attached/);
  assert.ok(document.querySelector('button[aria-label="Remove photo 1: rainbow.heic"]'));
});
test('preview failure preserves original attachment bytes through an intercepted submission', async () => {
  await mount();
  const original = 'data:image/heic;base64,aGVpYy10ZXN0LWJ5dGVz';
  await select([{ name: 'rainbow.heic', type: 'image/heic', size: 15 }]);
  await finish(readers[0], false, original);
  await change(() => document.querySelector('img').dispatchEvent(new Event('error')));
  const setField = async (name, value) => change(() => {
    const field = document.querySelector(`input[name="${name}"]`);
    Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(field, value);
    field.dispatchEvent(new Event('input', { bubbles: true }));
  });
  await setField('suburb', 'Windsor');
  await change(() => document.querySelector('[role=radio]').click());
  const button = text => [...document.querySelectorAll('button')].find(b => b.textContent.trim() === text);
  await change(() => button('Next').click());
  await setField('name', 'Synthetic Test');
  await setField('phone', '0400000000');
  await setField('email', 'synthetic@example.invalid');
  let captured;
  submitMock = async data => { captured = structuredClone(data); return { ok: true }; };
  await change(() => document.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
  assert.deepEqual(captured.photos, [{ filename: 'rainbow.heic', dataUrl: original, size: 15 }]);
  assert.match(document.body.textContent, /Enquiry submitted/);
  await change(() => button('Send another enquiry').click());
  assert.doesNotMatch(document.body.textContent, /Preview unavailable/);
});
