import test from 'node:test';
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
  if (/\.(mp4|webp)$/.test(file)) return file;
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

const { galleryImages } = loadSource(path.join(root, 'src/data/galleryImages.ts'));
const { projectGalleryImages } = loadSource(path.join(root, 'src/data/projectGallery.ts'));
const GalleryPage = loadSource(path.join(root, 'src/pages/ProjectsPage.tsx')).default;
const withheld = [
  'romansstone_1452322412_1158486817214519324_2394650725',
  'romansstone_1452669491_1161398328954149042_2394650725',
  'romansstone_1453101503_1165022313365330508_2394650725',
  'romansstone_1453245919_1166233759147317353_2394650725',
  'romansstone_1572463327_2166301860074648889_2394650725',
];

test('disputed archive entries and their assets remain intact but outside the project selection', () => {
  assert.equal(projectGalleryImages.length, galleryImages.length - withheld.length);
  for (const id of withheld) {
    const archived = galleryImages.find(image => image.id === id);
    assert.ok(archived);
    assert.ok(existsSync(path.join(root, 'public', archived.full)));
    assert.ok(existsSync(path.join(root, 'public', archived.thumb)));
    assert.ok(!projectGalleryImages.some(image => image.id === id));
  }
  assert.deepEqual(projectGalleryImages, galleryImages.filter(image => !withheld.includes(image.id)));
});

test('rendered gallery and schema share the selection and visible FAQ answers', () => {
  const context = {};
  const html = renderToStaticMarkup(createElement(HelmetProvider, { context },
    createElement(StaticRouter, { location: '/gallery/' }, createElement(GalleryPage))));
  const dom = new JSDOM(`<head>${context.helmet.meta.toString()}${context.helmet.link.toString()}</head><body>${html}</body>`);
  const doc = dom.window.document;
  for (const id of withheld) assert.ok(!html.includes(id));
  const buttons = [...doc.querySelectorAll('button[aria-haspopup="dialog"]')];
  assert.deepEqual(buttons.map(b => b.querySelector('img').getAttribute('src')), projectGalleryImages.map(i => i.thumb));
  const schemas = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => JSON.parse(s.textContent));
  const faq = schemas.find(s => s['@type'] === 'FAQPage');
  const gallery = schemas.find(s => s['@type'] === 'ImageGallery');
  assert.ok(gallery);
  for (const image of projectGalleryImages.filter(i => i.featured).slice(0, 20)) assert.ok(JSON.stringify(gallery).includes(image.full));
  assert.equal(doc.querySelectorAll('article').length, 8);
  assert.equal(doc.querySelector('link[rel="canonical"]').href, `${production}/gallery/`);
  assert.ok(doc.querySelector('a[href="tel:0414922276"]'));
  doc.querySelectorAll('script, style').forEach(e => e.remove());
  const visible = doc.body.textContent.replace(/\s+/g, ' ');
  for (const f of faq.mainEntity) {
    assert.ok(visible.includes(f.name));
    assert.ok(visible.includes(f.acceptedAnswer.text));
  }
  assert.match(visible, /Hawkesbury and Western Sydney/);
  assert.match(visible, /Stone sealed with a breathable sealer/);
  assert.match(visible, /same quarry that supplied the original 1890s house/);
  assert.doesNotMatch(html, /Every photo is|Every photo on|newest are from this year|half the weight|Standard waterproof sealers trap|standard mortar in a few years|price scales|real timeframe|same care as/);
  dom.window.close();
});

const { SuburbGallery } = loadSource(path.join(root, 'src/components/SuburbGallery.tsx'));
for (const props of [
  { suburbSlug: 'paddington', suburbName: 'Paddington', areaSlug: 'eastern-suburbs' },
  { suburbSlug: 'mosman', suburbName: 'Mosman', areaSlug: 'north-shore' },
  { suburbSlug: 'richmond', suburbName: 'Richmond', areaSlug: 'greater-sydney' },
  { suburbSlug: 'kurrajong', suburbName: 'Kurrajong', areaSlug: 'unknown' },
]) {
  test(`${props.suburbName} gallery is deterministic, illustrative and excludes held entries`, () => {
    const render = extra => renderToStaticMarkup(createElement(StaticRouter, null, createElement(SuburbGallery, { ...props, ...extra })));
    const html = render();
    assert.equal(html, render());
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    assert.equal(doc.querySelectorAll('img').length, 6);
    for (const img of doc.querySelectorAll('img')) assert.ok(projectGalleryImages.some(i => i.thumb === img.getAttribute('src')));
    assert.match(doc.body.textContent, /not a record of projects in this suburb/);
    assert.ok(doc.body.textContent.includes(props.suburbName));
    assert.ok(doc.querySelector('a[href="/gallery"]'));
    assert.doesNotMatch(html, /Recent work across|same materials, conditions|from real Romans|not stock/);
    // Exhaust the category pool to test the hold, rather than a lucky six-photo sample.
    const fullPool = render({ count: galleryImages.length });
    for (const id of withheld) assert.ok(!fullPool.includes(id));
    dom.window.close();
  });
}
