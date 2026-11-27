import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { JSDOM } from 'jsdom';

const auditPaths = [
  'areas', 'contact', 'about', 'services/remedial-building',
  'problems/damaged-lintels/sydney-cbd',
  'problems/sandstone-weathering/northern-beaches',
  'problems/foundation-movement/greater-sydney',
  'problems/sandstone-weathering/eastern-suburbs',
  'heritage/art-deco-building-restoration',
];

function readRoute(route) {
  return new JSDOM(fs.readFileSync(route ? `dist/${route}/index.html` : 'dist/index.html', 'utf8'));
}

test('reviewed standalone metadata stays useful and compact before rendering', () => {
  for (const [file, attribute] of [
    ['src/pages/ServicesAreasPage.tsx', 'description'],
    ['src/pages/AboutPage.tsx', 'description'],
    ['src/pages/ContactPage.tsx', 'description'],
    ['src/pages/services/RemedialBuildingPage.tsx', 'metaDescription'],
  ]) {
    const text = fs.readFileSync(file, 'utf8');
    const description = text.match(new RegExp(attribute + '="([^"]+)"'))[1];
    assert.ok(description.length >= 100 && description.length <= 155, file);
    assert.match(description, /Sydney/);
  }
  const about = fs.readFileSync('src/pages/AboutPage.tsx', 'utf8');
  assert.doesNotMatch(about, /based in The Slopes|Based in|Enfield/);
});

test('reported description-length warnings are addressed without changing canonical routes', { skip: !fs.existsSync('dist/areas/index.html') }, () => {
  const descriptions = new Set();
  for (const route of auditPaths) {
    const dom = readRoute(route);
    const doc = dom.window.document;
    const description = doc.querySelector('meta[name="description"]').content;
    assert.ok(description.length >= 100 && description.length <= 155, `${route}: ${description.length}`);
    assert.ok(!descriptions.has(description), route);
    descriptions.add(description);
    assert.equal(doc.querySelector('link[rel="canonical"]').href, `https://romansbuildingservices.com/${route}/`);
    assert.equal(doc.querySelector('meta[property="og:description"]').content, description);
    dom.window.close();
  }
  const guide = readRoute('learn/repointing-signs');
  assert.ok(guide.window.document.title.length <= 60);
  assert.match(guide.window.document.title, /Repointing.*Sydney/i);
  guide.window.close();
});

test('shared gallery navigation bypasses the old /projects redirect', () => {
  for (const path of ['src/components/CaseStudyTemplate.tsx', 'src/components/home/CraftHomeSections.tsx', 'src/utils/navigationData.ts']) {
    const source = fs.readFileSync(path, 'utf8');
    assert.doesNotMatch(source, /['"]\/projects['"]/);
    assert.match(source, /['"]\/gallery['"]/);
  }
  assert.match(fs.readFileSync('netlify.toml', 'utf8'), /from = "\/projects"/);
});

test('structured data uses valid property types and keeps service area identity private', { skip: !fs.existsSync('dist/areas/index.html') }, () => {
  for (const route of ['', 'suburbs/newtown', 'services/remedial-building']) {
    const dom = readRoute(route);
    const schema = [...dom.window.document.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => JSON.parse(s.textContent));
    const walk = value => {
      if (!value || typeof value !== 'object') return;
      const types = [].concat(value['@type'] || []);
      if (types.includes('LocalBusiness')) {
        for (const prop of ['serviceType', 'about', 'address', 'geo']) assert.equal(value[prop], undefined, `${route}: ${prop}`);
      }
      if (types.includes('ServiceChannel')) assert.equal(value.servicePhone['@type'], 'ContactPoint');
      if (types.includes('Offer')) assert.equal(value.availability, undefined, route);
      for (const child of Object.values(value)) walk(child);
    };
    schema.forEach(walk);
    dom.window.close();
  }
});
