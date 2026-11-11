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
  const source = readFileSync(file, 'utf8').replaceAll('import.meta.env', '({})');
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

const { QuoteModalProvider } = loadSource(path.join(directory, 'src/components/quote/QuoteSurveyContext.tsx'));
const { QuoteSurveyModal } = loadSource(path.join(directory, 'src/components/quote/QuoteSurveyModal.tsx'));
const { QuoteCTAButton } = loadSource(path.join(directory, 'src/components/quote/QuoteCTAButton.tsx'));
const { MemoryRouter } = require('react-router-dom');
let root;
async function change(fn) { await act(async () => { fn(); }); }
async function settle() { await act(async () => { await new Promise(resolve => setTimeout(resolve, 30)); }); }
const button = text => Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === text);
async function click(b, focus = true) { await change(() => { if (focus) b.focus(); b.click(); }); }
async function escape() {
  await change(() => document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })));
  await settle();
}
async function render({ showCTA = true, showModal = true } = {}) {
  await change(() => root.render(React.createElement(React.StrictMode, null,
    React.createElement(MemoryRouter, null, React.createElement(QuoteModalProvider, null,
      showCTA && React.createElement(QuoteCTAButton, { id: 'header-quote' }, 'Get a Quote'),
      React.createElement(QuoteCTAButton, { id: 'service-quote', initialService: 'stonework' }, 'Stonework quote'),
      showModal && React.createElement(QuoteSurveyModal))))));
}
async function mount() {
  document.body.innerHTML = '<button id="outside">Outside</button><div id="mount"></div>';
  root = createRoot(document.getElementById('mount'));
  await render();
}
async function input(id, value) {
  await change(() => {
    const field = document.getElementById(id);
    Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(field, value);
    field.dispatchEvent(new Event('input', { bubbles: true }));
  });
}
async function contact() {
  await click(button('Stonework or Stone Walls'));
  await input('qs-suburb', 'Sydney');
  await click(button('This month'));
  await click(button('Next'));
  assert.match(document.activeElement.textContent, /How do we reach/);
}
afterEach(async () => { if (root) await change(() => root.unmount()); await settle(); });
after(() => {
  dom.window.close();
  for (const [key, descriptor] of saved) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor);
    else delete globalThis[key];
  }
});
for (const dismissal of ['Escape', 'Close']) {
  test(`${dismissal} after service/location/contact steps restores the invoking CTA`, async () => {
    await mount();
    const opener = button('Get a Quote');
    await click(opener);
    await contact();
    await click(button('Back'));
    assert.equal(document.getElementById('qs-suburb').value, 'Sydney');
    assert.equal(button('This month').getAttribute('aria-checked'), 'true');
    await click(button('Next'));
    if (dismissal === 'Escape') await escape();
    else { await click(button('Close')); await settle(); }
    assert.equal(document.querySelector('[role="dialog"]'), null);
    assert.ok(document.activeElement === opener, 'focus returns to the invoking CTA');
    await click(opener);
    assert.match(document.querySelector('[role="dialog"]').textContent, /What needs doing/);
    await escape();
    assert.ok(document.activeElement === opener, 'focus returns to the invoking CTA');
  });
}
test('pointer activation without browser focus returns to the actual CTA and preserves its prefill', async () => {
  await mount();
  const outside = document.getElementById('outside');
  outside.focus();
  const opener = button('Stonework quote');
  await click(opener, false);
  assert.ok(document.getElementById('qs-suburb'));
  assert.equal(button('Stonework or Stone Walls'), undefined);
  await escape();
  assert.ok(document.activeElement === opener, 'focus returns to the invoking CTA');
  await click(button('Get a Quote'), false);
  assert.ok(button('Stonework or Stone Walls'));
  await escape();
  assert.ok(document.activeElement === button('Get a Quote'));
});
test('removed invoking CTA is never focused after dismissal', async () => {
  await mount();
  const opener = button('Get a Quote');
  await click(opener);
  await render({ showCTA: false });
  assert.equal(opener.isConnected, false);
  let focusCalls = 0;
  opener.focus = () => { focusCalls++; };
  await escape();
  assert.equal(focusCalls, 0);
});
test('route-style modal unmount does not pull focus back to the old CTA', async () => {
  await mount();
  await click(button('Get a Quote'));
  await render({ showModal: false });
  const outside = document.getElementById('outside');
  outside.focus();
  await settle();
  assert.ok(document.activeElement === outside, 'deliberate outside focus survives');
});
test('delayed close autofocus does not override deliberate focus or a reopened dialog', async () => {
  await mount();
  await click(button('Get a Quote'));
  await click(button('Close'));
  const outside = document.getElementById('outside');
  outside.focus();
  await settle();
  assert.ok(document.activeElement === outside, 'deliberate outside focus survives');
  await click(button('Get a Quote'));
  await click(button('Close'));
  await click(button('Stonework quote'));
  await settle();
  assert.ok(document.querySelector('[role="dialog"]').contains(document.activeElement));
  await escape();
  assert.ok(document.activeElement === button('Stonework quote'));
});
