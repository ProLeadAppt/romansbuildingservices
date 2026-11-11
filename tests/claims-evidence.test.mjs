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
const { JSDOM } = require('jsdom');

const { LocalBusinessSchema } = loadSource(path.join(root, 'src/components/LocalSEO/StructuredData.tsx'));
const { caseStudies } = loadSource(path.join(root, 'src/data/caseStudies.ts'));
const { ServiceFAQSection } = loadSource(path.join(root, 'src/components/ServiceFAQSection.tsx'));

test('rendered business schema makes no unverified credential, review or rating claim', () => {
  const html = renderToStaticMarkup(createElement(LocalBusinessSchema));
  const doc = new JSDOM(html).window.document;
  const schema = JSON.parse(doc.querySelector('script[type="application/ld+json"]').textContent);
  assert.equal(schema.name, 'Romans Building Services');
  for (const key of ['hasCredential', 'aggregateRating', 'review']) assert.ok(!(key in schema), key);
  assert.doesNotMatch(schema.description, /licen[cs]ed|insured/i);
});

test('FAQ quick facts render neutral contact and scope copy instead of ratings or credentials', () => {
  const html = renderToStaticMarkup(createElement(ServiceFAQSection, { serviceName: 'Masonry', faqs: [] }));
  const doc = new JSDOM(html).window.document;
  assert.match(doc.body.textContent, /Speak with Minas/);
  assert.match(doc.body.textContent, /Confirm scope and credentials/);
  assert.doesNotMatch(doc.body.textContent, /4\.9|Customer Rating|Fully Certified|Licen[cs]ed & Insured/i);
});

test('case studies do not publish inherited testimonials without source proof', () => {
  for (const study of caseStudies) assert.equal(study.testimonial, undefined, study.slug);
});

test('visible copy, metadata and crawler summaries omit unsupported affirmative claims', () => {
  const paths = [
    'src/components/RomansPremiumHeroSection.tsx', 'src/components/ModernContactSection.tsx',
    'src/components/ServiceFAQSection.tsx', 'src/data/serviceHierarchy.ts',
    'src/pages/ServicesPage.tsx', 'src/pages/areas/NorthShorePage.tsx',
    'public/llms.txt', 'public/llms-full.txt',
  ];
  for (const file of paths) {
    const source = readFileSync(path.join(root, file), 'utf8');
    assert.doesNotMatch(source, /4\.9|38 reviews|Fully Certified|Licen[cs]ed (?:and|&amp;|&) insured[.'<]|Licensed NSW masonry contractor|current NSW Masonry Contractor licensing|Full insurance,|full insurance cover|performed by licenced/i, file);
  }
});

test('consumer licence and insurance checks remain available', () => {
  for (const file of ['src/pages/ContactPage.tsx', 'src/pages/ServicesPage.tsx', 'src/components/ServiceAreaPageTemplate.tsx', 'public/llms.txt', 'public/llms-full.txt']) {
    assert.match(readFileSync(path.join(root, file), 'utf8'), /(?:current )?licence and insurance details/i, file);
  }
});
