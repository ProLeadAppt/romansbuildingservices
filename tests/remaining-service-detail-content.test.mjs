import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const families = ['structural-repairs', 'concrete-repairs', 'remedial-building'];
const pages = {};
for (const family of families) {
  for (const filename of readdirSync(path.join(root, 'src/pages/services', family)).filter(f => f.endsWith('Page.tsx') && !f.startsWith('Emergency'))) {
    const name = filename.replace('Page.tsx', '');
    const source = readFileSync(path.join(root, 'src/pages/services', family, filename), 'utf8');
    const ast = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const props = {};
    function visit(node) {
      if (ts.isJsxSelfClosingElement(node) && node.tagName.getText(ast) === 'ServicePageTemplate') {
        for (const attr of node.attributes.properties) {
          if (ts.isJsxAttribute(attr)) props[attr.name.text] = ts.isJsxExpression(attr.initializer) ? attr.initializer.expression : attr.initializer;
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(ast);
    pages[name] = source;
    test(`${name} preserves its service identity and complete explanatory sections`, () => {
      assert.ok(source.includes(`getSiblingServices('${family}', '`));
      assert.ok(source.includes(`href: '/services/${family}'`));
      assert.match(source, /siblingServices=\{siblings\}/);
      assert.ok(existsSync(path.join(root, 'public', props.heroImage.text)));
      for (const [key, min] of Object.entries({ intro: 3, features: 5, whatWeUse: 5, processSteps: 5, faqs: 6 })) {
        assert.ok(ts.isArrayLiteralExpression(props[key]), key);
        assert.ok(props[key].elements.length >= min, key);
      }
      for (const faq of props.faqs.elements) {
        const answer = faq.properties.find(p => p.name.text === 'answer').initializer.text;
        assert.ok(answer.split(/\s+/).length >= 25, `${name}: ${answer}`);
      }
    });
    test(`${name} avoids numerical promises and unsupported licence or project histories`, () => {
      const copy = [];
      function collect(node) {
        if (ts.isStringLiteral(node)) copy.push(node.text);
        ts.forEachChild(node, collect);
      }
      for (const key of ['intro', 'features', 'whatWeUse', 'processSteps', 'faqs']) collect(props[key]);
      assert.doesNotMatch(copy.join(' '), /\d|full (?:NSW )?builders licence|we have reinforced|we work with most major|all work is signed off|every significant|more than .*percent/i);
      assert.match(copy.join(' '), /assess|inspect/i);
      assert.match(copy.join(' '), /scope|design|specif/i);
    });
  }
}
test('structural advice avoids crack diagnosis by width and automatic reinforcement', () => {
  assert.match(pages.StructuralCrackRepair, /Width and direction alone cannot establish/);
  assert.match(pages.StructuralCrackRepair, /Stitching does not stop ongoing foundation movement/);
  assert.match(pages.LoadBearingWalls, /role cannot be confirmed from thickness or appearance alone/);
  assert.match(pages.LoadBearingWalls, /no universal amount of lean/);
  assert.match(pages.BeamColumn, /do not all deteriorate in the same way/);
  assert.match(pages.BuildingReinforcement, /no universal percentage capacity gain per layer/);
  assert.match(pages.SteelStructureRepairs, /Not every crack near an opening is caused by steel/);
});
test('concrete advice keeps causes, access and specialist boundaries explicit', () => {
  assert.match(pages.ConcreteCancer, /carbonation|Carbonation/);
  assert.match(pages.ConcreteCancer, /chlorides/);
  assert.match(pages.ConcreteCancer, /do not tap or chip suspect areas/i);
  assert.match(pages.SpallingRepair, /impact, fire, material defects/);
  assert.match(pages.SpallingRepair, /including the space below it/);
  assert.match(pages.StructuralConcrete, /post-tensioned/);
  assert.match(pages.StructuralConcrete, /Do not drill or cut a slab without checking/);
  assert.match(pages.ConcreteResurfacing, /No surface is slip-proof/);
  assert.match(pages.ProtectiveCoatings, /Some surfaces are best left uncoated/);
});
test('remedial advice does not substitute trade completion for legal or whole-building certification', () => {
  assert.match(pages.StructuralDefect, /Do not rely on a general age cutoff/);
  assert.match(pages.StructuralDefect, /preserve existing records/);
  assert.match(pages.ComplianceUpgrades, /does not automatically mean every existing building/);
  assert.match(pages.ComplianceUpgrades, /complete tested or assessed systems/);
  assert.match(pages.StrataRepairs, /Common property boundaries/);
  assert.match(pages.StrataRepairs, /No particular management-company relationship/);
});

// Render actual local components with Node/React and inspect the DOM. This is not
// a browser launch or production prerender; no dist HTML is written or substituted.
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
test('all 36 detailed services render one heading, valid canonical and visible schema FAQ answers', () => {
  const { serviceHierarchy } = loadSource(path.join(root, 'src/data/serviceHierarchy.ts'));
  let count = 0;
  for (const service of serviceHierarchy) {
    const folder = path.join(root, 'src/pages/services', service.slug);
    for (const file of readdirSync(folder).filter(f => f.endsWith('Page.tsx'))) {
      const full = path.join(folder, file);
      const source = readFileSync(full, 'utf8');
      const slug = source.match(/getSiblingServices\('[^']+', '([^']+)'\)/)[1];
      const route = `${service.route}/${slug}/`;
      const Component = loadSource(full).default;
      const context = {};
      const html = renderToStaticMarkup(createElement(HelmetProvider, { context }, createElement(StaticRouter, { location: route }, createElement(QuoteModalProvider, null, createElement(Component)))));
      const dom = new JSDOM(`<head>${context.helmet.link.toString()}${context.helmet.script.toString()}</head><body>${html}</body>`);
      const doc = dom.window.document;
      assert.equal(doc.querySelectorAll('h1').length, 1, route);
      assert.equal(doc.querySelector('link[rel="canonical"]').href, `https://romansbuildingservices.com${route}`, route);
      const schemas = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => JSON.parse(s.textContent));
      const faq = schemas.find(s => s['@type'] === 'FAQPage');
      assert.ok(faq, route);
      assert.ok(faq.mainEntity.length >= 6, route);
      doc.querySelectorAll('script,style').forEach(e => e.remove());
      const visible = doc.body.textContent.replace(/\s+/g, ' ');
      for (const item of faq.mainEntity) {
        assert.ok(visible.includes(item.name.replace(/\s+/g, ' ')), `${route}: hidden question`);
        assert.ok(visible.includes(item.acceptedAnswer.text.replace(/\s+/g, ' ')), `${route}: hidden answer`);
      }
      assert.ok([...doc.querySelectorAll('button')].some(b => /Get a Sydney Quote/.test(b.textContent)), `${route}: enquiry action`);
      assert.ok(doc.querySelector('a[href="tel:0414922276"]'), `${route}: phone enquiry`);
      assert.doesNotMatch(visible, /get back to you within 24 hours/i);
      dom.window.close();
      count++;
    }
  }
  assert.equal(count, 36);
});
