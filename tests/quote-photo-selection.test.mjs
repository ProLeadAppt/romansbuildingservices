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
    if (specifier === './submitQuote') return { submitQuote: async () => { throw new Error('No submissions allowed'); }, trackQuoteEvent: () => {} };
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
async function finish(reader, failure = false) {
  await change(() => { reader.result = 'data:image/png;base64,YQ=='; failure ? reader.onerror() : reader.onload(); });
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
  assert.equal(document.querySelector('button[aria-label="Remove photo"]').disabled, true);
  await finish(readers[2]);
  assert.equal(document.querySelectorAll('img').length, 3);
  assert.match(document.querySelector('[role=alert]').textContent, /no more than 3 photos/);
  await change(() => document.querySelector('button[aria-label="Remove photo"]').click());
  assert.equal(document.querySelectorAll('img').length, 2);
});
