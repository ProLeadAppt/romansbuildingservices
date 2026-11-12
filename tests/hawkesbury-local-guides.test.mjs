import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { JSDOM } from 'jsdom';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const require = createRequire(import.meta.url);
const loaded = new Map();
function load(file) {
  if (loaded.has(file)) return loaded.get(file).exports;
  const module = { exports: {} }; loaded.set(file, module);
  const source = read(file).replace('const SUBURBS:', 'export const SUBURBS:').replaceAll('import.meta.env', '({})');
  const code = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
  } }).outputText;
  const localRequire = specifier => {
    if (!specifier.startsWith('.') && !specifier.startsWith('@/')) return require(specifier);
    const base = specifier.startsWith('@/') ? 'src/' + specifier.slice(2) : path.join(path.dirname(file), specifier);
    const resolved = ['.tsx', '.ts', '.js', '/index.ts'].map(ext => base + ext).find(p => fs.existsSync(path.join(root, p)));
    assert.ok(resolved, `resolve ${specifier}`); return load(resolved);
  };
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
  return module.exports;
}
const slugs = ['north-richmond', 'richmond', 'kurmond', 'kurrajong', 'windsor'];
const { SUBURBS, getSuburb, getSuburbsForArea } = load('src/data/suburbs.ts');
const { AREAS } = load('src/data/areas.ts');

test('five reviewed localities extend without altering any legacy suburb record', () => {
  const legacy = Object.fromEntries(Object.entries(SUBURBS).filter(([slug]) => !slugs.includes(slug)));
  assert.equal(Object.keys(legacy).length, 35);
  assert.equal(crypto.createHash('sha256').update(JSON.stringify(legacy)).digest('hex'), '3cde3e677b05b7ec57293ee14d8dd0c77be51e409cdf64679c5a3e597255e06f');
  assert.deepEqual(getSuburbsForArea('/areas/hawkesbury-western-sydney').map(s => s.slug), slugs);
  assert.deepEqual(AREAS['hawkesbury-western-sydney'].suburbs, slugs);
  assert.deepEqual(AREAS['hawkesbury-western-sydney'].topProblems, []);
  assert.deepEqual(AREAS['hawkesbury-western-sydney'].problemNotes, {});
});

test('new locality copy is sourced, distinct and excludes private geocoding and unsupported claims', () => {
  const normalized = new Set();
  for (const slug of slugs) {
    const r = getSuburb(slug); assert.ok(r, slug);
    assert.equal(r.parentAreaHref, '/areas/hawkesbury-western-sydney');
    assert.equal(r.placeLabel, `${r.name}, NSW`);
    assert.ok(r.localResources.length >= 2, slug);
    for (const resource of r.localResources) {
      const u = new URL(resource.url);
      assert.equal(u.protocol, 'https:');
      assert.ok(u.hostname.endsWith('.nsw.gov.au'), resource.url);
      assert.equal(u.search, '', 'No private query strings');
      assert.ok(resource.title && resource.description.length > 80);
    }
    const text = JSON.stringify(r);
    assert.doesNotMatch(text, /streetAddress|GeoCoordinates|latitude|longitude|20\s*(?:km|kilomet)|licen[cs]ed|insured|we(?:'ve| have) (?:repaired|restored)|our local (?:office|team)|guaranteed|same.day|within 24 hours/i, slug);
    assert.doesNotMatch(text, /\b\d{1,5}\s+(?:[A-Z][a-z]+\s+){1,3}(?:Road|Rd|Street|St)\b/);
    assert.doesNotMatch(text, /[-+]\d{2,3}\.\d{4,}/, 'No precise coordinates');
    const namePattern = new RegExp(r.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    normalized.add(r.intro.join(' ').replace(namePattern, '[locality]').toLowerCase());
    assert.ok(r.nearbySuburbs.every(n => slugs.some(s => n.href === `/suburbs/${s}`)));
  }
  assert.equal(normalized.size, 5, 'Introductions must not be name substitutions');
});

// Actual React templates rendered in-process, not a browser or prerender substitute.
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { MemoryRouter } = require('react-router-dom');
const { HelmetProvider } = require('react-helmet-async');
const { QuoteModalProvider } = load('src/components/quote/QuoteSurveyContext.tsx');
const { SuburbPageTemplate } = load('src/components/SuburbPageTemplate.tsx');
const { PlaceSchema } = load('src/components/LocalSEO/StructuredData.tsx');
for (const slug of slugs) test(`${slug}: actual template renders metadata, local resources, FAQs and enquiry controls`, () => {
  const data = getSuburb(slug); const helmetContext = {};
  const body = renderToStaticMarkup(React.createElement(HelmetProvider, {context: helmetContext},
    React.createElement(MemoryRouter, {initialEntries:[`/suburbs/${slug}/`]},
      React.createElement(QuoteModalProvider, null, React.createElement(SuburbPageTemplate, data)))));
  const head = helmetContext.helmet.title.toString() + helmetContext.helmet.meta.toString() + helmetContext.helmet.link.toString();
  const dom = new JSDOM(`<!doctype html><html><head>${head}</head><body>${body}</body></html>`);
  const doc = dom.window.document;
  assert.equal(doc.querySelectorAll('h1').length, 1);
  assert.equal(doc.title, data.metaTitle);
  assert.equal(doc.querySelector('link[rel="canonical"]').href, `https://romansbuildingservices.com/suburbs/${slug}/`);
  for (const resource of data.localResources) assert.ok([...doc.querySelectorAll('a')].some(a => a.href === resource.url), resource.url);
  const schema = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => JSON.parse(s.textContent));
  const place = schema.find(s => s['@type'] === 'Place'); assert.ok(place);
  assert.equal(place.name, `${data.name}, NSW`);
  assert.equal(place.containedInPlace['@type'], 'State');
  assert.equal(place.containedInPlace.name, 'New South Wales');
  assert.equal(place.geo, undefined); assert.equal(place.address, undefined);
  const faq = schema.find(s => s['@type'] === 'FAQPage'); assert.equal(faq.mainEntity.length, 3);
  for (const f of data.faqs) { assert.ok(doc.body.textContent.includes(f.question)); assert.ok(doc.body.textContent.includes(f.answer)); }
  assert.match(doc.body.textContent, /not a record of projects in this suburb/);
  assert.ok(doc.querySelector('a[href="tel:0414922276"]'));
  assert.ok([...doc.querySelectorAll('button')].some(b => /quote|enquir|discuss/i.test(b.textContent)));
  assert.doesNotMatch(body, /streetAddress|GeoCoordinates|searchatlas\.com/);
  dom.window.close();
});

test('default place containment remains unchanged for legacy callers', () => {
  const html = renderToStaticMarkup(React.createElement(PlaceSchema, {name:'Example, Sydney'}));
  const dom = new JSDOM(html); const place = JSON.parse(dom.window.document.querySelector('script').textContent);
  assert.equal(place.containedInPlace['@type'], 'City');
  assert.equal(place.containedInPlace.name, 'Sydney');
  dom.window.close();
});
