import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import quoteHandler, { config } from '../netlify/functions/quote-email.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

const validLead = {
  name: 'Test Person',
  phone: '0412 345 678',
  email: 'test@example.com',
  service: 'Heritage Restoration',
  serviceSlug: 'heritage-restoration',
  suburb: 'Paddington 2021',
  urgency: 'This month',
  urgencySlug: 'this-month',
  photos: [],
  companyWebsite: '',
};

const invoke = async ({ method = 'POST', pathname = '/api/quote', body = '' } = {}) => {
  const request = new Request(`https://romansbuildingservices.com${pathname}`, {
    method,
    headers: { 'Content-Type': 'application/json', origin: 'https://romansbuildingservices.com' },
    body: method === 'GET' || method === 'HEAD' ? undefined : body,
  });
  const response = await quoteHandler(request);
  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body: await response.text(),
  };
};

const post = (body) => invoke({
  body: typeof body === 'string' ? body : JSON.stringify(body),
});

const responseBody = (response) => JSON.parse(response.body);

test('quote endpoint rejects malformed JSON as a client error', async () => {
  const response = await post('{not json');
  assert.equal(response.statusCode, 400);
  assert.match(responseBody(response).error, /valid|request/i);
});

test('quote endpoint validates email, service, urgency and attachment type', async (t) => {
  const invalidCases = [
    { label: 'email', lead: { ...validLead, email: 'not-an-email' } },
    { label: 'service', lead: { ...validLead, serviceSlug: 'made-up-service' } },
    { label: 'urgency', lead: { ...validLead, urgencySlug: 'whenever' } },
    {
      label: 'attachment type',
      lead: {
        ...validLead,
        photos: [{ filename: 'payload.html', dataUrl: 'data:text/html;base64,PGgxPk5vdCBhbiBpbWFnZTwvaDE+', sizeBytes: 20 }],
      },
    },
  ];

  for (const { label, lead } of invalidCases) {
    await t.test(label, async () => {
      const response = await post(lead);
      assert.equal(response.statusCode, 400);
    });
  }
});

test('honeypot submissions are discarded without invoking SMTP', async () => {
  const response = await post({ ...validLead, companyWebsite: 'https://spam.example' });
  assert.equal(response.statusCode, 200);
  assert.equal(responseBody(response).ok, true);
});

test('quote endpoint does not expose SMTP configuration details', async () => {
  const response = await post(validLead);
  assert.equal(response.statusCode, 500);
  assert.doesNotMatch(responseBody(response).error, /SMTP_|SMTP|configured/i);
});

test('Netlify function declares an IP-based rate limit on the public quote path', () => {
  assert.equal(config.path, '/api/quote');
  assert.ok(config.rateLimit.windowLimit <= 5);
  assert.ok(config.rateLimit.windowSize >= 60);
  assert.deepEqual(config.rateLimit.aggregateBy, ['ip', 'domain']);
});

test('legacy direct function URL cannot bypass the public-path rate limit', async () => {
  const response = await invoke({
    pathname: '/.netlify/functions/quote-email',
    body: JSON.stringify(validLead),
  });
  assert.equal(response.statusCode, 404);
});

test('quote conversion UI has no undefined motion wrapper or white-on-amber CTA text', () => {
  const survey = read('src/components/quote/QuoteSurvey.tsx');
  assert.doesNotMatch(survey, /<\/?motion\.form/);
  assert.match(survey, /role="alert"/);

  const files = [
    'src/components/Footer.tsx',
    'src/components/ModernContactSection.tsx',
    'src/components/navigation/ModernNavigation.tsx',
    'src/components/RomansPremiumHeroSection.tsx',
  ];
  for (const file of files) {
    assert.doesNotMatch(read(file), /bg-amber[^"'\n]*text-white|text-white[^"'\n]*bg-amber/, file);
  }
});

test('home page speaks to customers rather than exposing search-marketing language', () => {
  const home = read('src/pages/SinglePageApp.tsx');
  assert.doesNotMatch(home, /SEO hub|AI Overviews|answer-first version of the site/i);
  assert.match(home, /HomeProblemNavigator/);
  assert.match(home, /HomeCaseStudiesSection/);
  assert.match(home, /HomeFounderStandardSection/);
  assert.match(home, /HomeCapabilitiesSection/);
});

test('home process schema stays aligned with approved visible claims', () => {
  const schema = read('src/components/LocalSEO/StructuredData.tsx');
  const footer = read('src/components/Footer.tsx');

  assert.doesNotMatch(schema, /4-step process|30 years|free site visit|fixed-price|value:\s*0/i);
  assert.match(schema, /Established in Sydney in 1995/);
  assert.doesNotMatch(footer, /\b\d{2}\s+years\b/i);
});

test('analytics and hero video network providers are deferred beyond initial HTML', () => {
  const shell = read('index.html');
  assert.doesNotMatch(shell, /<script\b[^>]*src="https:\/\/www\.googletagmanager\.com\/gtag\/js/i);
  assert.match(shell, /data-analytics-provider/);

  const hero = read('src/components/RomansPremiumHeroSection.tsx');
  assert.match(hero, /loadVideo\s*&&/);

  const app = read('src/main.tsx');
  assert.match(app, /link_text:\s*'Business phone'/);
  assert.doesNotMatch(app, /link_text:\s*link\.textContent/);
});
