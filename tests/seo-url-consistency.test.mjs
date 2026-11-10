import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
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
    const resolved = ['', '.tsx', '.ts'].map(extension => base + extension).find(existsSync);
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
const { toCanonicalPageUrl, toAbsoluteMediaUrl } = loadSource(path.join(root, 'src/lib/seoUrls.ts'));
const { SEOHead } = loadSource(path.join(root, 'src/components/SEOHead.tsx'));
const schemas = loadSource(path.join(root, 'src/components/LocalSEO/StructuredData.tsx'));
const { BreadcrumbSchema } = loadSource(path.join(root, 'src/components/LocalSEO/BreadcrumbSchema.tsx'));
const { StaticRouter } = require('react-router-dom');
const production = 'https://romansbuildingservices.com';

test('canonical pages use production HTTPS and a trailing slash without credentials, query or fragment', () => {
  for (const input of ['/contact', 'contact/', '/contact/?email=private#form',
    'http://user:password@preview.invalid:8080/contact?email=private#form',
    '//preview.invalid/contact', 'https://romansbuildingservices.com/contact////']) {
    assert.equal(toCanonicalPageUrl(input), `${production}/contact/`, input);
  }
  for (const input of ['', '/', '?email=private', '#private', 'http://[invalid', 'javascript:alert(1)']) {
    assert.equal(toCanonicalPageUrl(input), `${production}/`, input);
  }
  assert.equal(toCanonicalPageUrl('/guide.v2'), `${production}/guide.v2/`);
});

test('media URLs preserve files, extensionless endpoints, CDN hosts and transformation queries', () => {
  for (const input of ['/og-image.png?version=2', '/image?width=800#crop', 'gallery/photo.webp']) {
    assert.equal(toAbsoluteMediaUrl(input), `${production}/${input.replace(/^\//, '')}`);
  }
  assert.equal(toAbsoluteMediaUrl('//cdn.example/image?width=800'), 'https://cdn.example/image?width=800');
  assert.equal(toAbsoluteMediaUrl('https://cdn.example/image?width=800#crop'), 'https://cdn.example/image?width=800#crop');
});

test('SEOHead emits consistent canonical, alternates and social URL while preserving media', () => {
  const context = {};
  renderToStaticMarkup(createElement(HelmetProvider, { context }, createElement(SEOHead, {
    title: 'Contact', description: 'Contact the team',
    canonical: 'http://preview.invalid/contact?q=private#form',
    ogImage: '/image?width=1200', preloadHero: 'https://cdn.example/hero?width=1600',
  })));
  const dom = new JSDOM(`<head>${context.helmet.link.toString()}${context.helmet.meta.toString()}</head>`);
  const doc = dom.window.document;
  for (const element of doc.querySelectorAll('link[rel="canonical"], link[hreflang]')) {
    assert.equal(element.getAttribute('href'), `${production}/contact/`);
  }
  assert.equal(doc.querySelector('meta[property="og:url"]').content, `${production}/contact/`);
  assert.equal(doc.querySelector('meta[property="og:image"]').content, `${production}/image?width=1200`);
  assert.equal(doc.querySelector('meta[name="twitter:image"]').content, `${production}/image?width=1200`);
  assert.equal(doc.querySelector('link[rel="preload"]').getAttribute('href'), 'https://cdn.example/hero?width=1600');
  assert.doesNotMatch(doc.head.innerHTML, /preview\.invalid|private/);
  dom.window.close();
});

function renderSchema(Component, props) {
  const dom = new JSDOM(renderToStaticMarkup(createElement(Component, props)));
  const result = [...dom.window.document.querySelectorAll('script')].map(node => JSON.parse(node.textContent));
  dom.window.close();
  return result;
}
test('structured page and collection URLs share the canonical policy', () => {
  const input = 'http://preview.invalid/services?email=private#top';
  const [service] = renderSchema(schemas.ServiceSchema, { service: 'Masonry', url: input });
  assert.equal(service.url, `${production}/services/`);
  assert.equal(service.availableChannel.serviceUrl, service.url);
  assert.equal(service.provider.url, `${production}/`);
  const [fallback] = renderSchema(schemas.ServiceSchema, { service: 'Masonry' });
  assert.equal(fallback.availableChannel.serviceUrl, `${production}/`);
  const [place] = renderSchema(schemas.PlaceSchema, { name: 'Area', url: input });
  assert.equal(place.url, service.url);
  const [collection] = renderSchema(schemas.CollectionPageSchema, {
    name: 'Services', url: input, items: [{ name: 'Masonry', url: '/services/masonry?tracking=1#top' }],
  });
  assert.equal(collection.url, service.url);
  assert.equal(collection.mainEntity.itemListElement[0].url, `${production}/services/masonry/`);
  assert.equal(renderSchema(schemas.ContactPageSchema)[0].url, `${production}/contact/`);
  for (const schema of renderSchema(schemas.LocalBusinessSchema)) assert.equal(schema.url, `${production}/`);
});

test('gallery canonical page URLs and media content URLs follow different rules', () => {
  const [gallery] = renderSchema(schemas.ImageGallerySchema, {
    url: 'http://preview.invalid/gallery?private=1#top',
    images: [{ url: '/gallery/image?width=800' }, { url: 'https://cdn.example/photo.webp?v=2' }],
  });
  assert.equal(gallery.url, `${production}/gallery/`);
  assert.equal(gallery.image[0].contentUrl, `${production}/gallery/image?width=800`);
  assert.equal(gallery.image[0].url, gallery.image[0].contentUrl);
  assert.equal(gallery.image[1].contentUrl, 'https://cdn.example/photo.webp?v=2');
});

test('breadcrumb current-page identity uses the router pathname without preview or query data', () => {
  const html = renderToStaticMarkup(createElement(StaticRouter, { location: '/services/masonry?email=private#quote' },
    createElement(BreadcrumbSchema, { items: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: 'http://preview.invalid/services?tracking=1#list' },
      { label: 'Masonry', href: '' },
    ] })));
  const dom = new JSDOM(html);
  const schema = JSON.parse(dom.window.document.querySelector('script').textContent);
  assert.deepEqual(schema.itemListElement.map((item) => item.item), [
    `${production}/`, `${production}/services/`, `${production}/services/masonry/`,
  ]);
  assert.doesNotMatch(html, /private|preview\.invalid|tracking=|#quote/);
  dom.window.close();
});

test('rendered search serves local guides and advice while remaining noindex', () => {
  const { default: SearchPage } = loadSource(path.join(root, 'src/pages/SearchPage.tsx'));
  for (const [query, expectedHref] of [
    ['North Richmond', '/areas/hawkesbury-western-sydney'],
    ['Kurrajong', '/areas/hawkesbury-western-sydney'],
    ['repair quotes', '/learn/brick-sandstone-repair-quotes-hawkesbury'],
    ['no-matching-topic-987', '/contact'],
  ]) {
    const context = {};
    const html = renderToStaticMarkup(createElement(HelmetProvider, { context },
      createElement(StaticRouter, { location: `/search?q=${encodeURIComponent(query)}` }, createElement(SearchPage))));
    const dom = new JSDOM(`<head>${context.helmet.meta.toString()}${context.helmet.link.toString()}</head><body>${html}</body>`);
    const doc = dom.window.document;
    assert.ok(doc.querySelector(`a[href="${expectedHref}"]`), query);
    assert.equal(doc.querySelector('input[type="search"]').value, query);
    assert.match(doc.querySelector('meta[name="robots"]').content, /noindex/);
    assert.equal(doc.querySelector('link[rel="canonical"]').href, `${production}/search/`);
    assert.equal(doc.querySelectorAll('h1').length, 1);
    assert.ok(doc.querySelector('[role="status"]').textContent.length > 0);
    dom.window.close();
  }
});

test('all area and heritage template schemas use canonical URLs and visible FAQ answers', () => {
  const { ServiceAreaPageTemplate } = loadSource(path.join(root, 'src/components/ServiceAreaPageTemplate.tsx'));
  const { ProblemAreaPageTemplate } = loadSource(path.join(root, 'src/components/ProblemAreaPageTemplate.tsx'));
  const { HeritageEraPageTemplate } = loadSource(path.join(root, 'src/components/HeritageEraPageTemplate.tsx'));
  const { SERVICE_AREA_COMBOS, getServiceData } = loadSource(path.join(root, 'src/data/serviceAreas.ts'));
  const { AREAS, PROBLEM_AREA_COMBOS } = loadSource(path.join(root, 'src/data/areas.ts'));
  const { PROBLEMS } = loadSource(path.join(root, 'src/data/problems.ts'));
  const { HERITAGE_ERAS } = loadSource(path.join(root, 'src/data/heritage.ts'));
  const cases = [
    ...SERVICE_AREA_COMBOS.map((combo) => ({
      Component: ServiceAreaPageTemplate,
      route: `/services/${combo.serviceSlug}/${combo.areaSlug}/`,
      props: { combo, service: getServiceData(combo.serviceSlug), area: AREAS[combo.areaSlug] },
    })),
    ...PROBLEM_AREA_COMBOS().map(({ problem, area }) => ({
      Component: ProblemAreaPageTemplate, route: `/problems/${problem}/${area}/`,
      props: { problem: PROBLEMS[problem], area: AREAS[area], areaNote: AREAS[area].problemNotes[problem] },
    })),
    ...Object.values(HERITAGE_ERAS).map((data) => ({ Component: HeritageEraPageTemplate, route: `/heritage/${data.slug}/`, props: { data } })),
  ];
  assert.equal(cases.length, 45);
  for (const { Component, route, props } of cases) {
    const context = {};
    const html = renderToStaticMarkup(createElement(HelmetProvider, { context },
      createElement(StaticRouter, { location: route }, createElement(Component, props))));
    const dom = new JSDOM(`<head>${context.helmet.meta.toString()}${context.helmet.link.toString()}${context.helmet.script.toString()}</head><body>${html}</body>`);
    const doc = dom.window.document;
    const structured = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap((script) => JSON.parse(script.textContent));
    const faq = structured.find((schema) => schema['@type'] === 'FAQPage');
    assert.ok(faq, `${route}: missing FAQ schema`);
    assert.equal(doc.querySelector('link[rel="canonical"]').href, `${production}${route}`);
    assert.equal(doc.querySelectorAll('h1').length, 1, route);
    for (const schema of structured) {
      if (schema.url) assert.equal(schema.url, `${production}${route}`, route);
      assert.equal(schema.reviewedBy, undefined, 'Do not infer editorial review from a template');
    }
    doc.querySelectorAll('script, style').forEach((element) => element.remove());
    const visibleContent = doc.body.textContent.replace(/\s+/g, ' ');
    for (const question of faq.mainEntity) {
      assert.ok(visibleContent.includes(question.name.replace(/\s+/g, ' ')), `${route}: hidden question`);
      assert.ok(visibleContent.includes(question.acceptedAnswer.text.replace(/\s+/g, ' ')), `${route}: hidden answer`);
    }
    dom.window.close();
  }
});
