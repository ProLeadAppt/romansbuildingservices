import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

const source = fs.readFileSync(new URL('../src/data/suburbs.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source.replace('const SUBURBS:', 'export const SUBURBS:'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const module = { exports: {} };
new Function('module', 'exports', compiled)(module, module.exports);
const { SUBURBS, getSuburb, SUBURB_SLUGS } = module.exports;
const records = Object.values(SUBURBS);

test('suburb review preserves all 35 identities, parents, services and nearby relations', () => {
  assert.equal(records.length, 35);
  // Snapshot of these immutable fields from base dbb2ceacb37396784763ab2cb5ddd48b56a14fdf.
  const immutable = records.map(({ name, slug, parentAreaName, parentAreaHref, services, nearbySlugs }) =>
    ({ name, slug, parentAreaName, parentAreaHref, services, nearbySlugs }));
  assert.equal(crypto.createHash('sha256').update(JSON.stringify(immutable)).digest('hex'),
    'ab4963c645a2972f175cb7a3c623e69407f0d8f6a6a75ed06f799f0d964765ed');
  for (const slug of SUBURB_SLUGS) {
    assert.equal(getSuburb(slug).nearbySuburbs.length, SUBURBS[slug].nearbySlugs.length);
    for (const nearby of SUBURBS[slug].nearbySlugs) assert.ok(SUBURBS[nearby], `${slug}: ${nearby}`);
  }
});

test('suburb guides avoid unverified job history, fixed prices and repair-life promises', () => {
  for (const record of records) {
    const content = JSON.stringify(record);
    assert.doesNotMatch(content, /\$\d|\b\d+[–-]\d+ years|\b\d+\+ years|we have worked|our .{0,30}(?:jobs|work is mostly)|we work on .{0,30} constantly|almost always a rusting|expands 7x|usually exempt development|Sydney Harbour Foreshore Authority/i, record.slug);
  }
});

test('all guides retain distinct practical introductions and complete FAQ answers', () => {
  assert.equal(new Set(records.map((r) => r.intro.join(' '))).size, 35);
  assert.equal(new Set(records.map((r) => r.housingContext)).size, 35);
  for (const record of records) {
    assert.ok(record.intro.length >= 2, record.slug);
    assert.ok(record.housingContext.length > 100, record.slug);
    assert.equal(record.faqs.length, 3, record.slug);
    for (const faq of record.faqs) assert.ok(faq.answer.length > 100, `${record.slug}: ${faq.question}`);
  }
});

test('high-risk questions require assessment rather than homeowner repair recipes', () => {
  assert.match(SUBURBS.avalon.faqs[2].answer, /site-specific design/);
  assert.match(SUBURBS.manly.faqs[0].answer, /Keep clear/);
  assert.match(SUBURBS.erskineville.faqs[2].answer, /one possibility/);
  assert.match(SUBURBS['surry-hills'].faqs[2].answer, /not|may still require/);
  assert.match(SUBURBS.homebush.faqs[2].answer, /cannot be promised/);
  assert.match(SUBURBS.parramatta.faqs[2].answer, /emergency services/);
});


test('shared suburb quick answer requires property assessment rather than a location diagnosis', () => {
  const template = fs.readFileSync(new URL('../src/components/SuburbPageTemplate.tsx', import.meta.url), 'utf8');
  assert.match(template, /Assessment of the property's construction, condition and access informs the proposed scope/);
  assert.match(template, /age or location alone does not establish the materials, cause of damage or suitable repair/);
  assert.doesNotMatch(template, /common movement or salt-damage patterns|work matched to the suburb/);
  assert.match(template, /Discuss masonry, heritage restoration and structural repair in \{name\}/);
});
