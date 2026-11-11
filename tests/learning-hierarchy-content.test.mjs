import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const cache = new Map();
function loadSource(file) {
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const source = readFileSync(file, 'utf8').replaceAll('import.meta.env', '({})');
  const code = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
    jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
  } }).outputText;
  const localRequire = specifier => {
    if (!specifier.startsWith('.') && !specifier.startsWith('@/')) return require(specifier);
    const base = specifier.startsWith('@/') ? path.join(root, 'src', specifier.slice(2)) : path.resolve(path.dirname(file), specifier);
    const resolved = ['', '.tsx', '.ts', '/index.tsx', '/index.ts'].map(ext => base + ext).find(p => existsSync(p) && statSync(p).isFile());
    assert.ok(resolved, `Resolve ${specifier}`);
    return loadSource(resolved);
  };
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
  return module.exports;
}
const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { HelmetProvider } = require('react-helmet-async');
const { StaticRouter } = require('react-router-dom');
const { JSDOM } = require('jsdom');
const { QuoteModalProvider } = loadSource(path.join(root, 'src/components/quote/QuoteSurveyContext.tsx'));

for (const [name, route] of [['RepointingSignsPage', '/learn/repointing-signs/'], ['MasonryVsRemedialPage', '/learn/masonry-vs-remedial-building/'], ['../ServicesPage', '/services/']]) {
  test(`${name} renders canonical schema and visible-only FAQs without SEO filler`, () => {
    const Component = loadSource(path.join(root, 'src/pages/learn', `${name}.tsx`)).default;
    const context = {};
    const html = renderToStaticMarkup(createElement(HelmetProvider, { context }, createElement(StaticRouter, { location: route }, createElement(QuoteModalProvider, null, createElement(Component)))));
    const dom = new JSDOM(`<head>${context.helmet.link.toString()}${context.helmet.script.toString()}</head><body>${html}</body>`);
    const doc = dom.window.document;
    const canonical = doc.querySelector('link[rel="canonical"]').href;
    assert.equal(canonical, `https://romansbuildingservices.com${route}`);
    assert.equal(doc.querySelectorAll('h1').length, 1);
    const schemas = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => JSON.parse(s.textContent));
    const article = schemas.find(s => s['@type'] === 'Article');
    if (route.startsWith('/learn/')) {
      assert.ok(article);
      assert.equal(article.url, canonical);
      assert.equal(article.mainEntityOfPage['@id'], canonical);
      assert.equal(article.isPartOf['@id'], 'https://romansbuildingservices.com/learn/');
    }
    doc.querySelectorAll('script,style').forEach(e => e.remove());
    const visible = doc.body.textContent.replace(/\s+/g, ' ');
    for (const faq of schemas.filter(s => s['@type'] === 'FAQPage')) {
      for (const item of faq.mainEntity) {
        assert.ok(visible.includes(item.name));
        assert.ok(visible.includes(item.acceptedAnswer.text));
      }
    }
    assert.doesNotMatch(visible, /SEO|GEO|AEO|search engine|users and search|rub it with your finger|stop(?:s)? moving|certification back|all sorted in one job/);
    assert.match(visible, /assessment|assess/);
    if (name === 'RepointingSignsPage') {
      assert.match(visible, /Do not scrape, probe or rub/);
      assert.match(visible, /condensation/);
      assert.match(visible, /Stay away from bulging walls/);
      assert.ok(doc.querySelector('a[href="tel:0414922276"]'));
      assert.ok(doc.querySelector('a[href="/services/masonry/repointing"]'));
    } else if (name === 'MasonryVsRemedialPage') {
      assert.match(visible, /size of a defect does not establish/);
      assert.match(visible, /who arranges engineering/);
      for (const slug of ['masonry', 'remedial-building']) assert.ok(doc.querySelector(`a[href="/services/${slug}"]`));
    }
    dom.window.close();
  });
}

test('all 43 hierarchy summaries retain identities and align with assessed repair scopes', () => {
  const { serviceHierarchy, getAllServiceRoutes } = loadSource(path.join(root, 'src/data/serviceHierarchy.ts'));
  assert.equal(serviceHierarchy.length, 7);
  assert.equal(getAllServiceRoutes().length, 43);
  assert.equal(new Set(getAllServiceRoutes()).size, 43);
  const summaries = serviceHierarchy.flatMap(c => [c, ...c.subServices]);
  for (const summary of summaries) {
    assert.ok(summary.title && summary.slug && summary.metaTitle && summary.metaDescription);
    assert.doesNotMatch(summary.metaDescription, /council-ready|stop movement|stop further damage|stopping corrosion|restoring structural integrity|proper sign-off|coatings that last/i);
  }
  for (const category of serviceHierarchy) {
    for (const filename of readdirSync(path.join(root, 'src/pages/services', category.slug)).filter(f => f.endsWith('Page.tsx'))) {
      const source = readFileSync(path.join(root, 'src/pages/services', category.slug, filename), 'utf8');
      const slug = source.match(/getSiblingServices\('[^']+', '([^']+)'/)[1];
      // Credential/history wording is preserved for separate owner verification.
      if (['brick-block-work', 'stone-masonry-repairs'].includes(slug)) continue;
      assert.equal(category.subServices.find(s => s.slug === slug).metaDescription, source.match(/metaDescription="([^"]+)"/)[1], slug);
    }
  }
});
