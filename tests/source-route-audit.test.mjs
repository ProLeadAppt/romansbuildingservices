import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { auditSourceRoutes } from '../scripts/audit-source-routes.mjs';

const inventory = auditSourceRoutes();
const read = (name) => fs.readFileSync(name, 'utf8');

test('all declared indexable static and data-backed routes reconcile with sitemaps', () => {
  assert.equal(inventory.totalRoutes, 167);
  assert.equal(inventory.indexableRoutes, 166);
  assert.equal(inventory.sitemapRoutes, 166);
  assert.deepEqual(inventory.missingFromSitemaps, []);
  assert.deepEqual(inventory.unknownSitemapRoutes, []);
  assert.deepEqual(inventory.duplicateRoutes, []);
  assert.deepEqual(inventory.invalidComboData, []);
  assert.deepEqual(inventory.invalidRedirectTargets, []);
  assert.ok(inventory.routes.find((route) => route.route === '/search/'));
});

test('literal source links and generated navigation data resolve to registered routes', () => {
  assert.deepEqual(inventory.unresolvedSourceLinkCandidates, []);
  assert.deepEqual(inventory.unresolvedDataLinks, []);
});

test('locality expansion remains evidence-gated rather than a service by suburb matrix', () => {
  assert.equal(inventory.counts['service-area'], 10);
  assert.equal(inventory.counts['problem-area'], 30);
  for (const slug of ['north-richmond', 'richmond', 'kurmond', 'kurrajong', 'windsor']) {
    assert.ok(!inventory.routes.some((route) => route.route === `/suburbs/${slug}/`));
  }
  assert.match(read('src/pages/problems/ProblemAreaPage.tsx'), /if \(!areaNote\) return <NotFound \/>/);
  assert.match(read('src/pages/services/ServiceAreaPage.tsx'), /if \(!combo \|\| !service \|\| !area\) return <NotFound \/>/);
});

test('shared area templates do not generate unverified local experience or response promises', () => {
  for (const file of ['ServiceAreaPageTemplate', 'ProblemAreaPageTemplate', 'SuburbPageTemplate']) {
    const content = read(`src/components/${file}.tsx`);
    assert.doesNotMatch(content, /We've worked across|within 24 hours|Urgent assessment available|we see this constantly|site-specific notes/i);
    assert.match(content, /availability/);
  }
  assert.match(read('src/components/AreaProblemLinks.tsx'), /area\.problemNotes\[x\.slug\]/);
  assert.match(read('src/components/ServiceAreaPageTemplate.tsx'), /to="\/learn\/brick-sandstone-repair-quotes-hawkesbury"/);
  assert.match(read('src/components/ProblemAreaPageTemplate.tsx'), /to="\/learn\/brick-sandstone-repair-quotes-hawkesbury"/);
});

test('article schemas do not attribute a review with no recorded review evidence', () => {
  for (const name of ['ProblemPage', 'ProblemAreaPage', 'HeritageEraPage']) {
    const content = read(`src/components/${name}Template.tsx`);
    assert.doesNotMatch(content, /reviewedBy/);
    assert.match(content, /toCanonicalPageUrl/);
  }
  assert.match(read('src/components/CaseStudyTemplate.tsx'), /'@type': 'WebPage'/);
  assert.doesNotMatch(read('src/components/CaseStudyTemplate.tsx'), /contentLocation|cs\.hero|reviewedBy/);
});

test('about and service hubs avoid invented technical outcomes and unsupported mix statistics', () => {
  const about = read('src/pages/AboutPage.tsx');
  assert.doesNotMatch(about, /SEO authority|owner on every job|concrete cancer in twenty|full rebuild in fifteen/i);
  assert.match(about, /since 1995|in 1995/);
  assert.match(about, /Minas remains directly involved/);
  assert.doesNotMatch(read('src/pages/ServicesPage.tsx'), /60 percent|40 percent|full NSW builders licence covering structural masonry/);
  const nav = read('src/utils/navigationData.ts');
  assert.doesNotMatch(nav, /Heritage Certified|483 981 292|href: '\/(?:quote|assessment)'/);
});

test('regional resources use verified official links with property-specific limits', () => {
  const source = read('src/data/hawkesburyResources.ts');
  const urls = [...source.matchAll(/url: '([^']+)'/g)].map((match) => new URL(match[1]));
  assert.equal(urls.length, 4);
  assert.ok(urls.every((url) => url.protocol === 'https:' && url.hostname === 'www.hawkesbury.nsw.gov.au'));
  assert.match(source, /Advice is not approval/);
  assert.match(source, /fees depending/);
  assert.match(source, /confirm the current controls/);
  assert.doesNotMatch(source, /600mm|over 1m|20\s*km|streetAddress|GeoCoordinates/);
  const page = read('src/pages/areas/HawkesburyWesternSydneyPage.tsx');
  assert.match(page, /hawkesburyResources\.map/);
  assert.match(page, /Penrith or Blacktown/);
  assert.match(page, /You do not need to obtain every report/);
});
