import test from 'node:test';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const loaded = new Map();
function loadSource(file) {
  if (loaded.has(file)) return loaded.get(file).exports;
  const module = { exports: {} };
  loaded.set(file, module);
  // Supply only Vite's build-time env object. Components and URL helpers run intact.
  const source = readFileSync(file, 'utf8').replaceAll('import.meta.env', '({})');
  const code = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
    jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
  } }).outputText;
  const localRequire = specifier => {
    if (!specifier.startsWith('.') && !specifier.startsWith('@/')) return require(specifier);
    const base = specifier.startsWith('@/')
      ? path.join(root, 'src', specifier.slice(2)) : path.resolve(path.dirname(file), specifier);
    const resolved = ['', '.tsx', '.ts', '/index.tsx', '/index.ts'].map(extension => base + extension).find(candidate => existsSync(candidate) && statSync(candidate).isFile());
    assert.ok(resolved, `Resolve ${specifier}`);
    return loadSource(resolved);
  };
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
  return module.exports;
}
const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { HelmetProvider } = require('react-helmet-async');
const { JSDOM } = require('jsdom');
const { StaticRouter } = require('react-router-dom');
const production = 'https://romansbuildingservices.com';

const { caseStudies } = loadSource(path.join(root, 'src/data/caseStudies.ts'));
const { CaseStudyTemplate } = loadSource(path.join(root, 'src/components/CaseStudyTemplate.tsx'));
const { QuoteModalProvider } = loadSource(path.join(root, 'src/components/quote/QuoteSurveyContext.tsx'));
const fixture = JSON.parse(readFileSync(path.join(root, 'tests/fixtures/case-study-records.json'), 'utf8'));
const sha = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');

// Snapshot now covers reference-page records; historical project assertions were intentionally withheld.
test('reference review preserves legacy URLs and reviewed general FAQs without project assertions', () => {
  assert.deepEqual(caseStudies.map(c => c.slug), fixture.map(c => c.slug));
  for (const [index, cs] of caseStudies.entries()) {
    const { faqs, ...unchanged } = cs;
    const baseline = fixture[index];
    assert.equal(sha(unchanged), baseline.unchangedHash, cs.slug);
    assert.deepEqual(faqs.map(f => f.question), baseline.questions);
    assert.deepEqual(Object.keys(cs).sort(), ['slug', 'metaTitle', 'metaDescription', 'primaryService', 'primaryServiceHref', 'relatedServices', 'faqs'].sort());
    assert.ok(cs.metaDescription.length > 80);
    for (const { answer } of faqs) {
      assert.ok(answer.split(/\s+/).length >= 35);
      assert.doesNotMatch(answer, /\$\d|\b\d+\s*(?:mm|m|kg|hours|days|weeks|years)\b|typically no|almost always|will carry that|before any maintenance|standard approach|will outlast/i);
    }
  }
});

test('fireplace, concrete, underpinning, seawall and damp FAQs require the appropriate assessment', () => {
  const bySlug = Object.fromEntries(caseStudies.map(c => [c.slug, c]));
  const answers = slug => bySlug[slug].faqs.map(f => f.answer).join(' ');
  assert.match(answers('stone-veneer-fireplace-inner-west'), /plywood thickness alone does not establish capacity/);
  assert.match(answers('stone-veneer-fireplace-inner-west'), /Finished masonry is not permission to light a fire/);
  assert.match(answers('concrete-cancer-repair-strata-north-shore'), /Neither by itself establishes steel loss or load capacity/);
  assert.match(answers('concrete-cancer-repair-strata-north-shore'), /not a general grant/);
  assert.match(answers('foundation-underpinning-heritage-terrace-inner-west'), /Do not apply a standard bay size or curing period/);
  assert.match(answers('foundation-underpinning-heritage-terrace-inner-west'), /Do not remove trees or alter drainage/);
  assert.match(answers('sandstone-seawall-restoration-mosman'), /does not automatically make seawall work exempt/);
  assert.match(answers('sandstone-chimney-rebuild-eastern-suburbs'), /does not certify the flue or fireplace/);
  assert.match(answers('brick-repointing-victorian-terrace-paddington'), /not a diagnosis for every terrace/);
});

for (const cs of caseStudies) {
  test(`${cs.slug} renders its visible safety context and all three FAQs consistently with schema`, () => {
    const route = `/case-studies/${cs.slug}/`;
    const context = {};
    const html = renderToStaticMarkup(createElement(HelmetProvider, { context },
      createElement(StaticRouter, { location: route }, createElement(QuoteModalProvider, null, createElement(CaseStudyTemplate, { cs })))));
    const dom = new JSDOM(`<head>${context.helmet.meta.toString()}${context.helmet.link.toString()}</head><body>${html}</body>`);
    const doc = dom.window.document;
    const schemas = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => JSON.parse(s.textContent));
    const faq = schemas.find(s => s['@type'] === 'FAQPage');
    assert.equal(doc.querySelectorAll('h1').length, 1);
    assert.equal(doc.querySelector('link[rel="canonical"]').href, `${production}${route}`);
    assert.equal(schemas.find(s => s['@type'] === 'WebPage').url, `${production}${route}`);
    assert.ok(schemas.every(s => !s.contentLocation && !s.datePublished));
    assert.equal(doc.querySelectorAll('img').length, 0);
    assert.match(doc.body.textContent, /not a completed-project record/);
    assert.doesNotMatch(doc.body.textContent, /weeks on site|Completed 202|What the client got|38%|signed off the work/);
    assert.match(doc.querySelector('aside[aria-label="Project-specific repair guidance"]').textContent, /not a repair specification for another property/);
    assert.ok(doc.querySelector('a[href="tel:0414922276"]'));
    assert.equal(faq.mainEntity.length, 3);
    doc.querySelectorAll('script, style').forEach(e => e.remove());
    const visible = doc.body.textContent.replace(/\s+/g, ' ');
    for (const f of faq.mainEntity) {
      assert.ok(visible.includes(f.name));
      assert.ok(visible.includes(f.acceptedAnswer.text));
    }
    dom.window.close();
  });
}

for (const [file, name, count] of [
  ['src/pages/case-studies/CaseStudiesIndexPage.tsx', 'default', 8],
  ['src/components/home/HomeCaseStudiesSection.tsx', 'HomeCaseStudiesSection', 3],
]) {
  test(`${file} links to the neutral references without restoring project claims`, () => {
    const Component = loadSource(path.join(root, file))[name];
    const context = {};
    const html = renderToStaticMarkup(createElement(HelmetProvider, { context },
      createElement(StaticRouter, { location: '/case-studies' }, createElement(QuoteModalProvider, null, createElement(Component)))));
    const doc = new JSDOM(html).window.document;
    assert.equal(doc.querySelectorAll('article').length, count);
    assert.equal(doc.querySelectorAll('article img').length, 0);
    assert.doesNotMatch(doc.body.textContent, /Real results|Real projects|Sydney CBD|Mosman|Completed 20|no AI renders/i);
    for (const cs of caseStudies.slice(0, count)) {
      assert.ok(doc.querySelector(`a[href="/case-studies/${cs.slug}"]`));
      assert.ok(doc.body.textContent.includes(cs.metaTitle));
    }
    for (const schema of doc.querySelectorAll('script[type="application/ld+json"]')) {
      const data = JSON.parse(schema.textContent);
      if (data['@type'] === 'CollectionPage') {
        assert.deepEqual(data.mainEntity.itemListElement.map(item => item.name), caseStudies.map(cs => cs.metaTitle));
      }
    }
    doc.defaultView.close();
  });
}

test('referring guides and the release quote check use the reference-page wording', () => {
  const read = file => readFileSync(path.join(root, file), 'utf8');
  assert.doesNotMatch(read('src/pages/learn/RepointingSignsPage.tsx'), /Proof pages|real jobs/);
  assert.doesNotMatch(read('src/pages/heritage/HeritageHubPage.tsx'), /existing project case study|published project account/);
  const checks = read('scripts/verify-quote-prefills.mjs');
  assert.doesNotMatch(checks, /Get a quote for similar work/);
  assert.match(checks, /\['\/case-studies\/heritage-church-brick-restoration-sydney-cbd\/', 'Get a quote', '2'\]/);
});
