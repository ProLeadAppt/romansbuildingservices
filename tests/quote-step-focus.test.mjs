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
let submitMock = async () => ({ ok: true });
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
async function change(fn) { await act(async () => { fn(); }); }
async function mount(variant = 'inline', initialService) {
  document.body.innerHTML = '<button id="outside">Outside</button><div id="mount"></div>';
  document.getElementById('outside').focus();
  root = createRoot(document.getElementById('mount'));
  await change(() => root.render(React.createElement(MemoryRouter, null,
    React.createElement(React.StrictMode, null, React.createElement(QuoteSurvey, { variant, headingLevel: 'h3', initialService })))));
}
const button = text => Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === text);
async function click(b) { await change(() => { b.focus(); b.click(); }); }
async function input(id, value) {
  const field = document.getElementById(id);
  await change(() => {
    Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(field, value);
    field.dispatchEvent(new Event('input', { bubbles: true }));
  });
}
async function contact() {
  await input('qs-suburb', 'Sydney');
  await click(button('This month'));
  await click(button('Next'));
}
afterEach(async () => { if (root) await change(() => root.unmount()); });
after(() => {
  dom.window.close();
  for (const [key, descriptor] of saved) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor);
    else delete globalThis[key];
  }
});
test('mount preserves existing focus and service selection moves focus to next heading', async () => {
  await mount();
  assert.equal(document.activeElement.id, 'outside');
  await click(button('Stonework or Stone Walls'));
  assert.equal(document.activeElement.tagName, 'H3');
  assert.equal(document.activeElement.tagName, 'H3');
  assert.match(document.activeElement.textContent, /Where/);
  await click(button('Back'));
  assert.equal(document.activeElement.tagName, 'H3');
  assert.match(document.activeElement.textContent, /What needs doing/);
});
test('Next and Back focus the new step, but ordinary typing does not steal focus', async () => {
  await mount('modal', 'stonework');
  assert.equal(document.activeElement.id, 'outside');
  await contact();
  assert.equal(document.activeElement.tagName, 'H3');
  assert.match(document.activeElement.textContent, /How do we reach/);
  document.getElementById('qs-name').focus();
  await input('qs-name', 'Test Person');
  assert.equal(document.activeElement.id, 'qs-name');
  await click(button('Back'));
  assert.equal(document.activeElement.tagName, 'H3');
  assert.match(document.activeElement.textContent, /Where/);
});
async function ready() {
  await mount('inline', 'stonework');
  await contact();
  await input('qs-name', 'Test Person');
  await input('qs-phone', '0400000000');
  await input('qs-email', 'test@example.com');
}
async function submit() {
  await change(() => {
    document.querySelector('button[type=submit]').focus();
    document.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });
}
test('confirmed success and reset focus their new headings', async () => {
  submitMock = async () => ({ ok: true });
  await ready();
  await submit();
  assert.match(document.activeElement.textContent, /Enquiry submitted/);
  assert.match(document.body.textContent, /check receipt or discuss timing/);
  assert.doesNotMatch(document.body.textContent, /within 24 hours|has been emailed|will call you back/);
  assert.equal(document.activeElement.tagName, 'H2');
  await click(button('Send another enquiry'));
  assert.equal(document.activeElement.tagName, 'H3');
  assert.match(document.activeElement.textContent, /Where/);
});
test('failed submission retains the current control and input values', async () => {
  submitMock = async () => ({ ok: false, error: 'Offline' });
  await ready();
  await submit();
  assert.equal(document.activeElement.type, 'submit');
  assert.equal(document.getElementById('qs-name').value, 'Test Person');
  assert.equal(document.querySelector('[role=alert]').textContent, 'Offline');
});
test('late success does not steal focus deliberately moved outside the survey', async () => {
  let resolve;
  submitMock = () => new Promise(r => { resolve = r; });
  await ready();
  await submit();
  document.getElementById('outside').focus();
  await change(() => resolve({ ok: true }));
  assert.equal(document.activeElement.id, 'outside');
});
