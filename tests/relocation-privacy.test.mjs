import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync('src/components/LocalSEO/StructuredData.tsx', 'utf8');
const home = 'dist/index.html';
const targetAreas = ['North Richmond', 'Richmond', 'Kurmond', 'Kurrajong', 'Penrith', 'Windsor', 'Blacktown'];

test('business identity stays service-area-only, preserving established contact identity', () => {
  assert.doesNotMatch(source, /-33\.8796|151\.0942|postcode: "2135"|GeoCoordinates|PostalAddress/);
  assert.match(source, /romanspropertyservices@gmail\.com/);
  assert.match(source, /RomansBuildingServicesStrathfield/);
  for (const name of targetAreas) assert.ok(source.includes(`"${name}"`));
});

test('rendered business schema does not expose a home address or coordinates', { skip: !fs.existsSync(home) }, () => {
  const html = fs.readFileSync(home, 'utf8');
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m => JSON.parse(m[1]));
  const business = schemas.find(s => [].concat(s['@type']).includes('LocalBusiness'));
  assert.ok(business);
  assert.equal(business.address, undefined);
  assert.equal(business.geo, undefined);
  for (const name of targetAreas) assert.ok(business.areaServed.some(a => a.name === name));
});

test('AI files remove old-base claims while preserving legitimate older area guides', () => {
  for (const file of ['public/llms.txt', 'public/llms-full.txt']) {
    const text = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(text, /(?:base|based in):?\*?\*?\s*Strathfield|Strathfield NSW 2135|streetAddress|\(home base\)/i);
    assert.match(text, /Hawkesbury/);
    assert.match(text, /Blacktown/);
  }
});
