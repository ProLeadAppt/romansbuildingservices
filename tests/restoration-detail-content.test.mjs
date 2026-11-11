import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import ts from 'typescript';

const records = [
  ['building-restoration', 'CompleteRestoration', 'complete-restoration'],
  ['building-restoration', 'DefectRectification', 'defect-rectification'],
  ['building-restoration', 'FacadeRenovation', 'facade-renovation'],
  ['building-restoration', 'HistoricUpgrades', 'historic-upgrades'],
  ['building-restoration', 'InteriorRestoration', 'interior-restoration'],
  ['heritage-restoration', 'HeritageBrickRepairs', 'heritage-brick-repairs'],
  ['heritage-restoration', 'HeritageMasonry', 'heritage-masonry'],
  ['heritage-restoration', 'HeritageStoneRestoration', 'heritage-stone'],
  ['heritage-restoration', 'HistoricStuccos', 'historic-stuccos-renders'],
  ['heritage-restoration', 'PeriodMaterials', 'period-materials'],
  ['heritage-restoration', 'TraditionalStonework', 'traditional-stonework'],
];
const pages = {};
for (const [family, name, slug] of records) {
  const source = readFileSync(new URL(`../src/pages/services/${family}/${name}Page.tsx`, import.meta.url), 'utf8');
  const ast = ts.createSourceFile(`${name}.tsx`, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
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
  test(`${name} retains service identity, image and useful structured guidance`, () => {
    assert.ok(source.includes(`getSiblingServices('${family}', '${slug}')`));
    assert.ok(source.includes(`href: '/services/${family}'`));
    assert.match(source, /siblingServices=\{siblings\}/);
    assert.ok(existsSync(new URL(`../public${props.heroImage.text}`, import.meta.url)));
    assert.match(props.metaDescription.text, /Sydney/);
    for (const [key, min] of Object.entries({ intro: 3, features: 4, whatWeUse: 5, processSteps: 5, faqs: 6 })) {
      assert.ok(ts.isArrayLiteralExpression(props[key]), key);
      assert.ok(props[key].elements.length >= min, key);
    }
    for (const faq of props.faqs.elements) {
      const answer = faq.properties.find(p => p.name.text === 'answer').initializer.text;
      assert.ok(answer.split(/\s+/).length >= 25, `FAQ is too thin: ${answer}`);
    }
  });
  test(`${name} avoids unsupported numeric promises, stock and credential claims`, () => {
    const strings = [];
    function collect(node) {
      if (ts.isStringLiteral(node)) strings.push(node.text);
      ts.forEachChild(node, collect);
    }
    for (const key of ['intro', 'features', 'whatWeUse', 'processSteps', 'faqs']) collect(props[key]);
    const body = strings.join('\n');
    assert.doesNotMatch(body, /\d/);
    assert.doesNotMatch(body, /we have never|stockpile|we hold the access tickets|council-approved|warranted at|lasts the life|hundreds of years|fully cured at|within a week/i);
    assert.match(body, /assess|inspect/i);
    assert.match(body, /scope|specif/i);
    assert.match(body, /sample|trial/i);
  });
}

test('whole-building and defect scopes separate evidence, approval and warranties', () => {
  assert.match(pages.CompleteRestoration, /statutory rights have different terms/);
  assert.match(pages.CompleteRestoration, /does not itself grant permission/);
  assert.match(pages.DefectRectification, /Statutory rights may also apply/);
  assert.match(pages.DefectRectification, /No single warranty period|no single warranty period/);
  assert.doesNotMatch(pages.CompleteRestoration + pages.DefectRectification, /80 percent|6-year|30 years|25 to 40|repair holds for decades/);
});
test('facade access and historic compliance claims require relevant design and confirmation', () => {
  assert.match(pages.FacadeRenovation, /capability and arrangements must be confirmed/);
  assert.match(pages.FacadeRenovation, /Keep clear of falling material/);
  assert.match(pages.HistoricUpgrades, /complete tested or assessed system/);
  assert.match(pages.HistoricUpgrades, /age alone does not establish/);
  assert.match(pages.HistoricUpgrades, /No particular seismic, fire or accessibility outcome/);
  assert.doesNotMatch(pages.HistoricUpgrades, /Brings.*compliance|no visible structural change|FRL 60/i);
});
test('interior work identifies hazardous materials, occupied-room limits and fireplace boundary', () => {
  const source = pages.InteriorRestoration;
  assert.match(source, /lead or asbestos/);
  assert.match(source, /silica dust/);
  assert.match(source, /does not confirm that its flue, hearth or appliance is safe/);
  assert.match(source, /simple dust sheets do not control every hazard/);
  assert.doesNotMatch(source, /neutralised between coats|adjacent rooms remain useable|minimal dust and disruption/i);
});
test('heritage mortar and stone advice avoids recipes and premature metal removal', () => {
  assert.match(pages.HeritageBrickRepairs, /hydraulic lime also sets through hydration/);
  assert.match(pages.HeritageBrickRepairs, /Lintels and ties must not be removed as routine cleaning/);
  assert.match(pages.HeritageMasonry, /not a lifetime guarantee/);
  assert.match(pages.HeritageStoneRestoration, /Damage depth alone is not enough/);
  assert.match(pages.HeritageStoneRestoration, /Do not tap, pull|do not tap, pull/);
  assert.match(pages.HistoricStuccos, /Removing a hard later render can itself damage/);
  assert.doesNotMatch(pages.HistoricStuccos, /each one is around|NHL 3.5|undetectable|last 80/i);
});
test('material sourcing and traditional methods avoid invented stock and hazardous recipes', () => {
  assert.match(pages.PeriodMaterials, /supply-only assistance.*can be included/);
  assert.match(pages.PeriodMaterials, /react.*releases heat|reaction releases heat/);
  assert.match(pages.PeriodMaterials, /Do not attempt mixing from a website description/);
  assert.match(pages.TraditionalStonework, /not universally stronger or more durable/);
  assert.match(pages.TraditionalStonework, /planned lifting system/);
  assert.match(pages.TraditionalStonework, /does not specify every material or exclude all modern techniques/);
  assert.doesNotMatch(pages.TraditionalStonework, /adding to wet sand|slaked on site by|stronger mortar than pre-mixed/);
});
