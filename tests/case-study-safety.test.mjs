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

test('case FAQ review preserves exact project identities, media, attribution and historical records outside two safety corrections', () => {
  assert.deepEqual(caseStudies.map(c => c.slug), fixture.map(c => c.slug));
  for (const [index, cs] of caseStudies.entries()) {
    const { faqs, result, ...unchanged } = cs;
    const baseline = fixture[index];
    assert.equal(sha(unchanged), baseline.unchangedHash, cs.slug);
    assert.deepEqual(faqs.map(f => f.question), baseline.questions);
    assert.equal(result.length, baseline.resultHashes.length);
    result.forEach((text, i) => { if (baseline.resultHashes[i]) assert.equal(sha(text), baseline.resultHashes[i], `${cs.slug} result ${i}`); });
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
  assert.doesNotMatch(bySlug['stone-veneer-fireplace-inner-west'].result.join(' '), /heat from the fire had cured the mortar harder/);
  assert.doesNotMatch(bySlug['concrete-cancer-repair-strata-north-shore'].result.join(' '), /15\+ years before any maintenance/);
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
    assert.equal(schemas.find(s => s['@type'] === 'Article').mainEntityOfPage['@id'], `${production}${route}`);
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
