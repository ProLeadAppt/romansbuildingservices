import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';

const read = (name) => fs.readFileSync(name, 'utf8');
const evaluate = (file, exports) => vm.runInNewContext(`${stripTypeScriptTypes(read(file).replaceAll('export ', ''))}; ({ ${exports} })`);
const { searchSite, normalizeSearchQuery } = evaluate('src/lib/siteSearch.ts', 'searchSite, normalizeSearchQuery');
const { areaGuides } = evaluate('src/data/areaGuides.ts', 'areaGuides');
const { featuredGuides } = evaluate('src/data/adviceGuides.ts', 'featuredGuides');
const areas = areaGuides.map((area) => ({ type: 'area', title: area.name, description: area.description, href: area.href, keywords: area.places }));

test('confirmed local coverage is discoverable through its existing regional guide', () => {
  for (const query of ['North Richmond', 'Richmond', 'Kurmond', 'Kurrajong', 'Penrith', 'Windsor', 'Blacktown', 'The Slopes']) {
    assert.ok(searchSite(areas, query).results.some((result) => result.href === '/areas/hawkesbury-western-sydney'), query);
  }
  assert.equal(areas.length, 7);
  assert.ok(areas.every((area) => area.href.startsWith('/areas/')), 'Do not invent thin suburb landing pages');
});

test('search handles spacing, accents and hyphens while requiring every query term', () => {
  assert.equal(normalizeSearchQuery('  Nórth—Richmond  '), 'north richmond');
  assert.equal(searchSite(areas, 'Nórth—Richmond').results[0].href, '/areas/hawkesbury-western-sydney');
  assert.equal(searchSite(areas, 'Richmond nonexistent').total, 0);
  for (const query of ['', ' ', '-', '!!', 'a']) assert.equal(searchSite(areas, query).total, 0);
});

test('exact page titles rank first and results deduplicate canonical path variants', () => {
  const entries = [
    ...areas,
    { type: 'suburb', title: 'Richmond', description: 'Example fixture, not a published suburb page.', href: '/example-richmond' },
    { type: 'suburb', title: 'Richmond', description: 'Duplicate fixture.', href: '/example-richmond/' },
  ];
  const matches = searchSite(entries, 'Richmond');
  assert.equal(matches.results[0].href, '/example-richmond');
  assert.equal(matches.total, 2);
  assert.equal(searchSite(entries, 'Richmond', 1).results.length, 1);
  assert.equal(searchSite(entries, 'Richmond', 1).total, 2);
  assert.equal(searchSite(entries, 'Richmond', 0).results.length, 0);
});

test('area and advice directory links are present in the real page sitemaps', () => {
  const xml = fs.readdirSync('public').filter((file) => /^sitemap-.*\.xml$/.test(file)).map((file) => read(`public/${file}`)).join('\n');
  for (const entry of [...areaGuides, ...featuredGuides]) {
    assert.ok(xml.includes(`<loc>https://romansbuildingservices.com${entry.href}/</loc>`), entry.href);
  }
});

test('search is noindex, exposes accessible status and links missing suburbs to enquiry', () => {
  const search = read('src/pages/SearchPage.tsx');
  assert.match(search, /canonical="\/search"\s+noIndex/);
  assert.match(search, /role="search"/);
  assert.match(search, /htmlFor="site-search"/);
  assert.match(search, /role="status" aria-live="polite" aria-atomic="true"/);
  assert.match(search, /keywords: area\.places/);
  assert.match(search, /featuredGuides\.map/);
  assert.match(search, /to="\/contact"/);
  assert.match(search, /setQuery\(initial\)/, 'Back/Forward query changes must update the field');
});

test('area hub uses the same directory for visible cards and collection schema', () => {
  const source = read('src/pages/ServicesAreasPage.tsx');
  assert.match(source, /items=\{areaGuides\.map/);
  assert.match(source, /\{areaGuides\.map/);
  assert.match(source, /aria-label="Breadcrumb"/);
  assert.match(source, /<FAQSchema faqs=\{areasFaqs\}/);
  assert.match(source, /areasFaqs\.map/);
  assert.doesNotMatch(source + read('src/data/areaGuides.ts'), /The six areas|twice as fast|highest concentration|20\s*km/i);
  assert.match(read('src/pages/LearnPage.tsx'), /import \{ featuredGuides \} from '@\/data\/adviceGuides'/);
});
