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
    if (specifier === '@/components/quote') return { QuoteCTAButton: ({children}) => React.createElement('button', null, children) };
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


const { ModernNavigation } = loadSource(path.join(directory, 'src/components/navigation/ModernNavigation.tsx'));
const { MemoryRouter } = require('react-router-dom');
let root;
let desktop = false;
const listeners = new Set();
window.matchMedia = query => {
  assert.equal(query, '(min-width: 1024px)');
  return {
    get matches() { return desktop; },
    addEventListener: (name, fn) => { assert.equal(name, 'change'); listeners.add(fn); },
    removeEventListener: (name, fn) => { assert.equal(name, 'change'); listeners.delete(fn); },
  };
};
async function change(fn) { await act(async () => { fn(); }); }
async function mount(overflow = '') {
  document.body.innerHTML = '<div id="mount"></div>';
  document.body.style.overflow = overflow;
  root = createRoot(document.getElementById('mount'));
  await change(() => root.render(React.createElement(MemoryRouter, null,
    React.createElement(React.StrictMode, null, React.createElement(ModernNavigation)))));
}
async function open() { await change(() => document.querySelector('button[aria-label="Open menu"]').click()); }
async function resize(value) {
  await change(() => { desktop = value; for (const fn of listeners) fn(); });
}
afterEach(async () => {
  if (root) { await change(() => root.unmount()); root = undefined; }
  desktop = false;
  document.body.style.overflow = '';
});
after(() => {
  dom.window.close();
  for (const [key, descriptor] of saved) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor);
    else delete globalThis[key];
  }
});
test('idle menu preserves an existing body overflow style', async () => {
  await mount('clip');
  assert.equal(document.body.style.overflow, 'clip');
});
test('desktop resize closes hidden overlay and restores scrolling', async () => {
  await mount('scroll');
  await open();
  assert.equal(document.body.style.overflow, 'hidden');
  await resize(true);
  assert.equal(document.body.style.overflow, 'scroll');
  assert.ok(document.querySelector('button[aria-label="Open menu"]'));
  assert.equal(document.querySelector('button[aria-label="Close menu"]'), null);
  await resize(false);
  assert.equal(document.querySelector('button[aria-label="Close menu"]'), null);
  await open();
  assert.equal(document.body.style.overflow, 'hidden');
});
test('manual close restores the exact prior overflow', async () => {
  await mount('auto');
  await open();
  await change(() => document.querySelector('button[aria-label="Close menu"]').click());
  assert.equal(document.body.style.overflow, 'auto');
});
test('unmount while open restores overflow and removes breakpoint listener', async () => {
  await mount('clip');
  assert.equal(listeners.size, 1);
  await open();
  await change(() => root.unmount());
  root = undefined;
  assert.equal(document.body.style.overflow, 'clip');
  assert.equal(listeners.size, 0);
});
test('a hidden desktop hamburger cannot activate a scroll lock', async () => {
  desktop = true;
  await mount('auto');
  await open();
  assert.equal(document.body.style.overflow, 'auto');
  assert.equal(document.querySelector('button[aria-label="Close menu"]'), null);
});
test('route navigation closes the mobile menu and restores overflow', async () => {
  await mount('scroll');
  await open();
  const overlay = document.querySelector('div.fixed.inset-0');
  const contact = Array.from(overlay.querySelectorAll('a')).find(a => a.getAttribute('href') === '/contact');
  await change(() => contact.click());
  assert.equal(document.body.style.overflow, 'scroll');
  assert.equal(document.querySelector('button[aria-label="Close menu"]'), null);
});
