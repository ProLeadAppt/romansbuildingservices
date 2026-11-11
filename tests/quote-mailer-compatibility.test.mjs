import test from 'node:test';
import assert from 'node:assert/strict';
import nodemailer from 'nodemailer';

// Compile real MIME messages in memory. Never open an SMTP connection or use
// actual server credentials, even if the runner has them in its environment.
const createTransport = nodemailer.createTransport.bind(nodemailer);
const environmentKeys = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'SMTP_PORT', 'SMTP_SECURE', 'SMTP_FROM', 'QUOTE_TO_EMAIL'];
const lead = {
  serviceSlug: 'stonework', urgencySlug: 'this-month', name: 'Synthetic Test',
  phone: '0400000000', email: 'synthetic+quote@example.test', suburb: 'Test suburb',
  message: '<script>test</script>', photos: [],
};
const requestFor = (changes = {}) => new Request('https://example.test/api/quote', {
  method: 'POST', body: JSON.stringify({ ...lead, ...changes }),
});

test('quote handler remains compatible with real offline Nodemailer composition', async (t) => {
  const originalEnvironment = Object.fromEntries(environmentKeys.map(key => [key, process.env[key]]));
  Object.assign(process.env, {
    SMTP_HOST: 'smtp.example.test', SMTP_USER: 'sender@example.test', SMTP_PASS: 'synthetic-not-a-secret',
    SMTP_PORT: '587', SMTP_SECURE: 'false', SMTP_FROM: 'Website <sender@example.test>',
    QUOTE_TO_EMAIL: 'quotes@example.test',
  });
  t.after(() => {
    for (const [key, value] of Object.entries(originalEnvironment)) {
      if (value === undefined) delete process.env[key]; else process.env[key] = value;
    }
  });
  const compiled = [];
  const options = [];
  t.mock.method(nodemailer, 'createTransport', configuration => {
    options.push(configuration);
    const offline = createTransport({ streamTransport: true, buffer: true, newline: 'windows' });
    return { async sendMail(message) {
      const result = await offline.sendMail(message);
      compiled.push(result);
      return result;
    } };
  });
  // Import after synthetic recipient configuration, because TO_EMAIL is read at
  // module initialization, matching a function cold start.
  const { default: handler } = await import('../netlify/functions/quote-email.mjs');

  await t.test('preserves fixed routing, reply-to, multipart content and photo bytes', async () => {
    const response = await handler(requestFor({ photos: [{
      filename: 'synthetic.png', dataUrl: 'data:image/png;base64,iVBORw0KGgo=',
    }], to: 'ignored@example.test', host: 'ignored.example.test' }));
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true });
    assert.deepEqual(options[0], {
      host: 'smtp.example.test', port: 587, secure: false,
      auth: { user: 'sender@example.test', pass: 'synthetic-not-a-secret' },
    });
    assert.deepEqual(compiled[0].envelope, { from: 'sender@example.test', to: ['quotes@example.test'] });
    const mime = compiled[0].message.toString();
    assert.match(mime, /^Reply-To: synthetic\+quote@example\.test\r?$/m);
    assert.match(mime, /multipart\/mixed/);
    assert.match(mime, /text\/plain/);
    assert.match(mime, /text\/html/);
    assert.match(mime, /&lt;script&gt;test&lt;\/script&gt;/);
    assert.match(mime, /Content-Disposition: attachment; filename=synthetic\.png/);
    assert.match(mime, /iVBORw0KGgo=/);
  });

  await t.test('supports configured implicit TLS without changing SMTP configuration', async () => {
    process.env.SMTP_PORT = '465'; process.env.SMTP_SECURE = 'true';
    assert.equal((await handler(requestFor())).status, 200);
    assert.equal(options.at(-1).port, 465);
    assert.equal(options.at(-1).secure, true);
    assert.deepEqual(compiled.at(-1).envelope.to, ['quotes@example.test']);
  });

  await t.test('rejects header line breaks, structured input and overlong reply-to before transport', async () => {
    const before = options.length;
    for (const email of ['a@example.test\r\nBcc: other@example.test', [['a@example.test']], `${'a'.repeat(243)}@example.test`]) {
      assert.equal((await handler(requestFor({ email }))).status, 400);
    }
    assert.equal(options.length, before);
  });

  await t.test('retains server failure response without sending an email', async () => {
    const before = options.length;
    delete process.env.SMTP_PASS;
    t.mock.method(console, 'error', () => {});
    const response = await handler(requestFor());
    assert.equal(response.status, 500);
    assert.equal((await response.json()).ok, false);
    assert.equal(options.length, before);
  });
});
