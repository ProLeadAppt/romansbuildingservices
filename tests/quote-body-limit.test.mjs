import test, { mock } from 'node:test';
import assert from 'node:assert/strict';
import nodemailer from 'nodemailer';
import handler from '../netlify/functions/quote-email.mjs';

const limit = 5_750_000;
const oversizedMessage = 'The quote request is too large. Please attach fewer or smaller photos.';
const encoder = new TextEncoder();
mock.method(nodemailer, 'createTransport', () => { throw new Error('No external SMTP in tests'); });

const requestFor = (stream) => new Request('https://romansbuildingservices.com/api/quote', {
  method: 'POST', body: stream, duplex: 'half',
});

test('rejects oversized stream before reading trailing chunks without waiting for cancellation', async () => {
  let pulls = 0;
  let cancelled = false;
  const stream = new ReadableStream({
    pull(controller) {
      pulls++;
      if (pulls === 1) controller.enqueue(new Uint8Array(limit + 1));
      else controller.error(new Error('Trailing body must not be read'));
    },
    cancel() { cancelled = true; return new Promise(() => {}); },
  }, { highWaterMark: 0 });
  const response = await Promise.race([
    handler(requestFor(stream)),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Size rejection stalled')), 500)),
  ]);
  assert.equal(response.status, 400);
  assert.equal((await response.json()).error, oversizedMessage);
  assert.equal(pulls, 1);
  assert.equal(cancelled, true);
  assert.equal(stream.locked, false);
  assert.equal(nodemailer.createTransport.mock.callCount(), 0);
});

test('preserves split unicode decoding', async () => {
  const body = encoder.encode(JSON.stringify({companyWebsite: 'café'}));
  const split = body.indexOf(0xc3) + 1;
  const stream = new ReadableStream({start(c) { c.enqueue(body.slice(0, split)); c.enqueue(body.slice(split)); c.close(); }});
  const response = await handler(requestFor(stream));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {ok: true});
  assert.equal(stream.locked, false);
});

test('accepts exact byte limit and rejects one byte over across chunks', async () => {
  for (const extra of [0, 1]) {
    const prefix = encoder.encode('{"companyWebsite":"bot"}');
    const stream = new ReadableStream({start(c) { c.enqueue(prefix); c.enqueue(encoder.encode(' '.repeat(limit - prefix.length + extra))); c.close(); }});
    const response = await handler(requestFor(stream));
    assert.equal(response.status, extra ? 400 : 200);
    if (extra) assert.equal((await response.json()).error, oversizedMessage);
  }
});

test('cancellation rejection does not replace the size response', async () => {
  const stream = new ReadableStream({
    pull(c) { c.enqueue(new Uint8Array(limit + 1)); },
    cancel() { return Promise.reject(new Error('Cancellation failed')); },
  }, {highWaterMark: 0});
  const response = await handler(requestFor(stream));
  assert.equal(response.status, 400);
  assert.equal((await response.json()).error, oversizedMessage);
  assert.equal(stream.locked, false);
  await new Promise(resolve => setImmediate(resolve));
});

test('null body keeps existing validation response', async () => {
  const response = await handler(new Request('https://romansbuildingservices.com/api/quote', {method: 'POST'}));
  assert.equal(response.status, 400);
  assert.equal((await response.json()).error, 'Service is required.');
});

 test('size limit uses encoded bytes for multibyte input', async () => {
  const body = encoder.encode('é'.repeat(Math.floor(limit / 2) + 1));
  const response = await handler(new Request('https://romansbuildingservices.com/api/quote', {method: 'POST', body}));
  assert.equal(response.status, 400);
  assert.equal((await response.json()).error, oversizedMessage);
});
