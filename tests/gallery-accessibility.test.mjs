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
const { GalleryGrid } = loadSource(path.join(directory, 'src/components/GalleryGrid.tsx'));
const { GalleryLightbox } = loadSource(path.join(directory, 'src/components/GalleryLightbox.tsx'));
const { galleryImages, categories } = loadSource(path.join(directory, 'src/data/galleryImages.ts'));
const fixtures = galleryImages.slice(0, 3);
let root;
const tick = () => new Promise(resolve => setTimeout(resolve, 0));
async function change(callback) {
  await act(async () => { callback(); });
  // FocusScope restores focus in a task scheduled after React's unmount commit.
  await act(async () => { await tick(); });
}
async function mount(element) {
  document.body.innerHTML = '<button id="outside">Outside control</button><div id="mount"></div>';
  document.querySelector('#outside').focus();
  root = createRoot(document.querySelector('#mount'));
  await change(() => root.render(element));
}
const dialog = () => document.querySelector('[role="dialog"]');
const button = (label) => [...document.querySelectorAll('button')].find(node => node.getAttribute('aria-label') === label || node.textContent.trim() === label);
async function activate(node) { assert.ok(node, 'control exists'); node.focus(); await change(() => node.click()); }
async function key(node, value, options = {}) {
  const event = new KeyboardEvent('keydown', { key: value, bubbles: true, cancelable: true, ...options });
  await change(() => node.dispatchEvent(event));
  return event;
}
function LightboxHarness({ images = fixtures, initialIndex = 1 }) {
  const [index, setIndex] = React.useState(initialIndex);
  return index === null ? null : React.createElement(GalleryLightbox, {
    images, currentIndex: index, onNavigate: setIndex, onClose: () => setIndex(null),
  });
}
afterEach(async () => {
  if (root) await change(() => root.unmount());
  root = undefined;
  document.body.innerHTML = '';
  document.body.removeAttribute('style');
});
after(() => {
  dom.window.close();
  for (const [key, descriptor] of saved) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor);
    else delete globalThis[key];
  }
});

test('every gallery image is a named native button and its original asset/alt is preserved', async () => {
  await mount(React.createElement(GalleryGrid, { images: galleryImages }));
  const triggers = [...document.querySelectorAll('button[aria-haspopup="dialog"]')];
  assert.equal(triggers.length, galleryImages.length);
  triggers.forEach((trigger, index) => {
    const original = galleryImages[index];
    assert.equal(trigger.type, 'button');
    assert.ok(trigger.getAttribute('aria-label').includes(original.alt));
    assert.equal(trigger.querySelector('img').getAttribute('src'), original.thumb);
    assert.equal(trigger.querySelector('img').alt, original.alt);
    assert.ok(existsSync(path.join(directory, 'public', original.thumb)));
    assert.ok(existsSync(path.join(directory, 'public', original.full)));
  });
});

test('filters expose selection and retain exact image order and content', async () => {
  await mount(React.createElement(GalleryGrid, { images: galleryImages }));
  assert.ok(document.querySelector('[role="group"][aria-label="Filter project images"]'));
  for (const category of categories) {
    const filter = button(category.label);
    await activate(filter);
    assert.equal(filter.type, 'button');
    assert.equal(filter.getAttribute('aria-pressed'), 'true');
    assert.equal(document.querySelectorAll('button[aria-pressed="true"]').length, 1);
    const expected = category.value === 'all' ? galleryImages : galleryImages.filter(image => image.category === category.value);
    assert.deepEqual([...document.querySelectorAll('button[aria-haspopup="dialog"] img')].map(image => image.getAttribute('src')), expected.map(image => image.thumb));
  }
});

test('opening a thumbnail names/describes the modal and puts focus on Close', async () => {
  await mount(React.createElement(GalleryGrid, { images: fixtures }));
  await activate(document.querySelectorAll('button[aria-haspopup="dialog"]')[1]);
  const modal = dialog();
  assert.ok(modal);
  assert.equal(document.getElementById(modal.getAttribute('aria-labelledby')).textContent, 'Image lightbox');
  assert.ok(document.getElementById(modal.getAttribute('aria-describedby')).textContent.includes(fixtures[1].alt));
  assert.equal(modal.querySelector('img').getAttribute('src'), fixtures[1].full);
  assert.equal(modal.querySelector('img').alt, fixtures[1].alt);
  assert.ok(document.activeElement === button('Close lightbox'), 'expected focused control');
});

test('pointer activation returns to its thumbnail even when the browser did not focus it', async () => {
  await mount(React.createElement(GalleryGrid, { images: fixtures }));
  const trigger = document.querySelectorAll('button[aria-haspopup="dialog"]')[1];
  assert.ok(document.activeElement === document.querySelector('#outside'));
  // JSDOM click() intentionally does not focus: models Safari pointer behavior.
  await change(() => trigger.click());
  await activate(button('Close lightbox'));
  assert.ok(document.activeElement === trigger, 'return to the actual pointer opener');
});

test('Radix wraps Tab at both edges and keeps focus/background outside the modal unavailable', async () => {
  await mount(React.createElement(LightboxHarness, {}));
  const close = button('Close lightbox'), next = button('Next image');
  close.focus(); await key(close, 'Tab', { shiftKey: true });
  assert.ok(document.activeElement === next, 'expected focused control');
  await key(next, 'Tab');
  assert.ok(document.activeElement === close, 'expected focused control');
  const outside = document.querySelector('#outside');
  assert.equal(outside.getAttribute('aria-hidden'), 'true');
  outside.focus();
  assert.ok(document.activeElement === close, 'expected focused control');
});

test('navigation announces position, retains boundary-button focus and handles only dialog arrow keys', async () => {
  await mount(React.createElement(LightboxHarness, {}));
  const next = button('Next image');
  await activate(next);
  assert.ok(document.activeElement === next, 'expected focused control');
  assert.equal(next.getAttribute('aria-disabled'), 'true');
  const status = dialog().querySelector('[aria-live="polite"][aria-atomic="true"]');
  assert.ok(status.textContent.includes('3 of 3'));
  assert.ok(status.textContent.includes(fixtures[2].alt));
  await activate(next);
  assert.equal(dialog().querySelector('img').getAttribute('src'), fixtures[2].full);
  const left = await key(next, 'ArrowLeft');
  assert.equal(left.defaultPrevented, true);
  assert.equal(dialog().querySelector('img').getAttribute('src'), fixtures[1].full);
  await key(document, 'ArrowLeft');
  assert.equal(dialog().querySelector('img').getAttribute('src'), fixtures[1].full);
  await key(next, 'ArrowLeft', { altKey: true });
  assert.equal(dialog().querySelector('img').getAttribute('src'), fixtures[1].full);
  await key(next, 'ArrowLeft');
  const previous = button('Previous image');
  assert.equal(previous.getAttribute('aria-disabled'), 'true');
  await activate(previous);
  assert.equal(dialog().querySelector('img').getAttribute('src'), fixtures[0].full);
});

for (const dismissal of ['close', 'escape', 'backdrop']) {
  test(`${dismissal} dismissal restores the exact opener and allows reopening another image`, async () => {
    await mount(React.createElement(GalleryGrid, { images: fixtures }));
    const triggers = [...document.querySelectorAll('button[aria-haspopup="dialog"]')];
    await activate(triggers[1]);
    if (dismissal === 'close') await activate(button('Close lightbox'));
    if (dismissal === 'escape') await key(button('Close lightbox'), 'Escape');
    if (dismissal === 'backdrop') await change(() => dialog().click());
    assert.equal(Boolean(dialog()), false, 'lightbox is closed');
    assert.ok(document.activeElement === triggers[1], 'expected focused control');
    assert.equal(document.querySelector('#outside').getAttribute('aria-hidden'), null);
    assert.equal(document.body.style.pointerEvents, '');
    await activate(triggers[0]);
    assert.equal(dialog().querySelector('img').getAttribute('src'), fixtures[0].full);
    assert.ok(document.activeElement === button('Close lightbox'), 'expected focused control');
  });
}

test('image and caption clicks stay inside the lightbox', async () => {
  await mount(React.createElement(LightboxHarness, {}));
  await change(() => dialog().querySelector('img').click());
  assert.ok(dialog());
  await change(() => [...dialog().querySelectorAll('p')].find(node => node.textContent === fixtures[1].alt).click());
  assert.ok(dialog());
});

test('one-image lightbox has no navigation controls and returns original scroll style on close', async () => {
  await mount(React.createElement('div'));
  document.body.style.overflow = 'scroll';
  await change(() => root.render(React.createElement(LightboxHarness, { images: fixtures.slice(0, 1), initialIndex: 0 })));
  assert.equal(button('Previous image'), undefined);
  assert.equal(button('Next image'), undefined);
  await activate(button('Close lightbox'));
  assert.equal(Boolean(dialog()), false, 'lightbox is closed');
  assert.equal(document.body.style.overflow, 'scroll');
});

for (const invalid of [-1, 5, NaN]) {
  test(`invalid index ${invalid} never opens an invisible modal or locks scrolling`, async () => {
    await mount(React.createElement('div'));
    document.body.style.overflow = 'scroll';
    await change(() => root.render(React.createElement(LightboxHarness, { initialIndex: invalid })));
    assert.equal(Boolean(dialog()), false, 'lightbox is closed');
    assert.equal(document.body.style.overflow, 'scroll');
    assert.equal(document.querySelector('#outside').getAttribute('aria-hidden'), null);
  });
}

test('an emptied gallery releases an already-open modal, scroll lock and focus', async () => {
  const props = { images: fixtures, currentIndex: 1, onClose() {}, onNavigate() {} };
  await mount(React.createElement(GalleryLightbox, props));
  button('Close lightbox').focus();
  await change(() => root.render(React.createElement(GalleryLightbox, { ...props, images: [] })));
  assert.equal(Boolean(dialog()), false, 'lightbox is closed');
  assert.equal(document.querySelector('#outside').getAttribute('aria-hidden'), null);
  assert.ok(document.activeElement === document.querySelector('#outside'), 'expected focused control');
  assert.equal(document.body.style.overflow, '');
});
