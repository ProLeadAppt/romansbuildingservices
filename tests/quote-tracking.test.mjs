import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';

// Execute the real tracking function without the unrelated Vite submission transport.
const source = readFileSync(new URL('../src/components/quote/submitQuote.ts', import.meta.url), 'utf8');
const trackingSource = source.slice(source.indexOf('export function trackQuoteEvent')).replace('export function', 'function');
const load = (runtime = {}) => vm.runInNewContext(`${stripTypeScriptTypes(trackingSource)}; trackQuoteEvent`, runtime);

test('analytics failures do not interrupt a successfully submitted quote', () => {
  const calls = [];
  const track = load({ window: {
    gtag: () => { throw new Error('GA blocked'); },
    clarity: (...args) => calls.push(args),
  } });
  assert.doesNotThrow(() => track('quote_submitted', { hasPhotos: false }));
  assert.equal(calls.length, 1);
  assert.equal(calls[0][1], 'quote_submitted');
});
test('Clarity failures do not interrupt the quote journey', () => {
  const calls = [];
  const track = load({ window: {
    gtag: (...args) => calls.push(args),
    clarity: () => { throw new Error('Clarity blocked'); },
  } });
  assert.doesNotThrow(() => track('quote_submitted', { hasPhotos: false }));
  assert.equal(calls.length, 1);
  assert.equal(calls[0][1], 'quote_submitted');
});
test('tracking is harmless when optional providers or the browser are absent', () => {
  assert.doesNotThrow(() => load()('quote_opened'));
  assert.doesNotThrow(() => load({ window: {} })('quote_opened'));
});
