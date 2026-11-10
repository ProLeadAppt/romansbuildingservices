import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';

const source = readFileSync(new URL('../src/components/quote/submitQuote.ts', import.meta.url), 'utf8')
  .replace(/^import .*;$/gm, '')
  .replaceAll('import.meta.env.VITE_QUOTE_WEBHOOK_URL', 'undefined')
  .replaceAll('import.meta.env.PROD', 'true')
  .replaceAll('import.meta.env.DEV', 'false')
  .replaceAll('export ', '');
const data = { name: 'Test', phone: '0400000000', email: 'test@example.com', message: 'Test', service: null, suburb: 'Sydney', urgency: null, photos: [], companyWebsite: '' };
function load(fetch) {
  let expire;
  let clears = 0;
  const submit = vm.runInNewContext(`${stripTypeScriptTypes(source)}; submitQuote`, {
    fetch, AbortController, SERVICE_LABELS: {}, URGENCY_LABELS: {},
    setTimeout: (fn, delay) => { assert.equal(delay, 20_000); expire = fn; return 1; },
    clearTimeout: () => { clears++; },
  });
  return { submit, expire: () => expire(), clears: () => clears };
}
test('a stalled quote returns uncertainty, aborts once and never retries', async () => {
  let calls = 0;
  let signal;
  const runtime = load((_, options) => { calls++; signal = options.signal; return new Promise(() => {}); });
  const pending = runtime.submit(data, '/contact');
  runtime.expire();
  const result = await pending;
  assert.equal(result.ok, false);
  assert.match(result.error, /may have reached Minas/);
  assert.match(result.error, /check before sending again/);
  assert.equal(signal.aborted, true);
  assert.equal(calls, 1);
  assert.equal(runtime.clears(), 1);
  assert.equal(data.message, 'Test');
});
test('a confirmed response preserves success and cleans the deadline', async () => {
  const runtime = load(async () => ({ ok: true }));
  assert.equal((await runtime.submit(data, '/contact')).ok, true);
  assert.equal(runtime.clears(), 1);
});
test('HTTP failures and network rejection retain their existing error paths', async () => {
  for (const fetch of [async () => ({ ok: false, status: 503 }), async () => { throw new Error('offline'); }]) {
    const runtime = load(fetch);
    const result = await runtime.submit(data, '/contact');
    assert.equal(result.ok, false);
    assert.match(result.error, /0414 922 276/);
    assert.equal(runtime.clears(), 1);
  }
});


test('a late successful response cannot replace the timed-out uncertain result', async () => {
  let resolve;
  let calls = 0;
  const runtime = load(() => { calls++; return new Promise((done) => { resolve = done; }); });
  const pending = runtime.submit(data, '/contact');
  runtime.expire();
  const result = await pending;
  resolve({ ok: true });
  await Promise.resolve();
  assert.equal(result.ok, false);
  assert.match(result.error, /may have reached Minas/);
  assert.equal(calls, 1);
  assert.equal(runtime.clears(), 1);
});

test('an abort-aware fetch still reports timeout uncertainty, not confirmed failure', async () => {
  const runtime = load((_, { signal }) => new Promise((_, reject) => {
    signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true });
  }));
  const pending = runtime.submit(data, '/contact');
  runtime.expire();
  const result = await pending;
  assert.equal(result.ok, false);
  assert.match(result.error, /not received confirmation yet/);
  assert.equal(runtime.clears(), 1);
});
