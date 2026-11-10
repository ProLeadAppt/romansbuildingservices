import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import ts from 'typescript';

const routes = {
  BrickBlockWork: 'brick-block-work',
  Repointing: 'repointing',
  RetainingWalls: 'retaining-walls',
  StoneMasonryRepairs: 'stone-masonry-repairs',
  StructuralBrickwork: 'structural-brickwork',
};

function readPage(name) {
  const source = readFileSync(new URL(`../src/pages/services/masonry/${name}Page.tsx`, import.meta.url), 'utf8');
  const ast = ts.createSourceFile(`${name}.tsx`, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const props = {};
  function visit(node) {
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText(ast) === 'ServicePageTemplate') {
      for (const attr of node.attributes.properties) {
        if (!ts.isJsxAttribute(attr)) continue;
        props[attr.name.text] = ts.isJsxExpression(attr.initializer) ? attr.initializer.expression : attr.initializer;
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  return { source, props };
}

const pages = Object.fromEntries(Object.keys(routes).map(name => [name, readPage(name)]));

for (const [name, { source, props }] of Object.entries(pages)) {
  test(`${name} retains its route, existing image and service navigation`, () => {
    assert.ok(source.includes(`getSiblingServices('masonry', '${routes[name]}')`));
    assert.match(source, /href: '\/services\/masonry'/);
    assert.match(source, /siblingServices=\{\[\.\.\.siblings,/);
    assert.ok(existsSync(new URL(`../public${props.heroImage.text}`, import.meta.url)));
    assert.match(props.metaTitle.text, /Sydney/);
    assert.match(props.metaDescription.text, /Sydney/);
  });

  test(`${name} gives a substantive assessment, materials, process and customer answers`, () => {
    for (const [key, minimum] of Object.entries({ intro: 3, features: 4, whatWeUse: 5, processSteps: 4, faqs: 6 })) {
      assert.ok(ts.isArrayLiteralExpression(props[key]), `${key} must be structured page data`);
      assert.ok(props[key].elements.length >= minimum, `${key} lacks useful detail`);
    }
    for (const faq of props.faqs.elements) {
      const answer = faq.properties.find(prop => prop.name.text === 'answer').initializer.text;
      assert.ok(answer.split(/\s+/).length >= 25, 'Answers should explain the decision, not just say contact us');
    }
    assert.match(source, /compatib/i);
    assert.match(source, /assess|inspect/i);
    assert.match(source, /engineer|heritage.advi/i);
  });

  test(`${name} avoids unsupported numeric promises and blanket certifications`, () => {
    // Exclude URLs/images and approved business tenure when checking customer copy.
    const copy = [];
    function collectCopy(node) {
      if (ts.isStringLiteral(node)) copy.push(node.text);
      ts.forEachChild(node, collectCopy);
    }
    for (const key of ['intro', 'features', 'whatWeUse', 'processSteps', 'faqs']) collectCopy(props[key]);
    const body = copy.join('\n');
    assert.doesNotMatch(body.replaceAll('1995', ''), /\d/);
    assert.doesNotMatch(body, /lasts a century|hundreds of years|life of the building|patch disappears|repair invisible|we can tell you definitively|all work signed off|full NSW builder|heritage council approved|no minimum job size|six years on structural/i);
    assert.doesNotMatch(body, /type [ns] (?:for|or|structural)|pre-1940|post-1940|every fifth perp|we arrange both/i);
  });
}

test('approval and professional boundaries are explicit', () => {
  for (const name of ['BrickBlockWork', 'RetainingWalls']) {
    assert.match(pages[name].source, /not height alone/);
    assert.match(pages[name].source, /council or (?:a )?certifier/);
  }
  assert.match(pages.RetainingWalls.source, /having a design does not itself grant permission/);
  assert.match(pages.RetainingWalls.source, /no universal amount of lean/);
  assert.match(pages.StructuralBrickwork.source, /Crack stitching is not a general remedy for ongoing foundation movement/);
  assert.match(pages.StructuralBrickwork.source, /appearance and wall thickness alone are not enough/i);
  assert.match(pages.StructuralBrickwork.source, /Keep people clear/);
});

test('stone and pointing advice keeps material decisions property-specific', () => {
  assert.match(pages.Repointing.source, /not enough on its own to choose the mix/);
  assert.match(pages.Repointing.source, /Do not pull out loose masonry/);
  assert.match(pages.StoneMasonryRepairs.source, /not damage depth alone/);
  assert.match(pages.StoneMasonryRepairs.source, /not a substitute for resolving moisture or salt damage/);
  assert.match(pages.StoneMasonryRepairs.source, /relevant authority determines approval/);
});
