import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import ts from 'typescript';

const entries = [
  ['remedial-building', 'EmergencyRepairs', 'emergency-repairs'],
  ['remedial-building', 'EmergencyStructuralSupport', 'emergency-structural'],
  ['foundation-repairs', 'Underpinning', 'underpinning'],
  ['foundation-repairs', 'PierBeam', 'pier-beam'],
  ['foundation-repairs', 'FoundationStone', 'foundation-stone'],
  ['foundation-repairs', 'SettlementStabilisation', 'settlement-stabilisation'],
  ['foundation-repairs', 'StructuralFoundation', 'structural-foundation'],
];
const pages = {};
for (const [family, name, slug] of entries) {
  const source = readFileSync(new URL(`../src/pages/services/${family}/${name}Page.tsx`, import.meta.url), 'utf8');
  pages[name] = source;
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
  test(`${name} preserves its service architecture and substantive customer guidance`, () => {
    assert.ok(source.includes(`getSiblingServices('${family}', '${slug}')`));
    assert.ok(source.includes(`href: '/services/${family}'`));
    assert.ok(existsSync(new URL(`../public${props.heroImage.text}`, import.meta.url)));
    for (const [key, min] of Object.entries({ intro: 3, features: 5, whatWeUse: 5, processSteps: 5, faqs: 6 })) {
      assert.ok(ts.isArrayLiteralExpression(props[key]));
      assert.ok(props[key].elements.length >= min);
    }
    for (const faq of props.faqs.elements) {
      const answer = faq.properties.find(p => p.name.text === 'answer').initializer.text;
      assert.ok(answer.split(/\s+/).length >= 25);
    }
  });
  test(`${name} avoids unsupported rates, equipment inventories and response promises`, () => {
    assert.doesNotMatch(source, /within (?:hours|2 to 4 hours|24 hours)|\d[\d,]* to [\d,]+ dollars|hundreds of times|stock (?:of|kept)|engineer on call|most major Australian insurers|no excavation, no vibration/i);
    assert.doesNotMatch(source, /\b\d+\s*(?:mm|metres|kN|MPa|weeks|months)\b/);
    assert.match(source, /scope/i);
    assert.match(source, /structural/i);
  });
}
test('emergency pages put safety and design ahead of contractor attendance or propping', () => {
  for (const name of ['EmergencyRepairs', 'EmergencyStructuralSupport']) {
    const page = pages[name];
    assert.match(page, /call 000/);
    assert.match(page, /availability/i);
    assert.match(page, /does not (?:make|establish|automatically)/);
    assert.doesNotMatch(page, /Engineers cannot safely assess|Engineer involvement \(if needed\)|Tightened until|Engineer called if|building can now be considered safe/i);
  }
  assert.match(pages.EmergencyRepairs, /SES on 132 500/);
  assert.match(pages.EmergencyRepairs, /Do not disturb suspect debris/);
  assert.match(pages.EmergencyStructuralSupport, /not a step to improvise before the structure has been assessed/);
  assert.match(pages.EmergencyStructuralSupport, /qualified assessment determines the response/);
});
test('underpinning does not diagnose from symptoms or promise safe occupancy and outcomes', () => {
  const page = pages.Underpinning;
  assert.match(page, /symptoms alone do not establish/);
  assert.match(page, /council or certifier/);
  assert.match(page, /Do not cut roots or remove a tree/);
  assert.match(page, /arboricultural advice/);
  assert.match(page, /does not automatically close or repair cracks/);
  assert.doesNotMatch(page, /Usually yes|hit and miss|stops the movement|we underpin three ways|council-approved/i);
});

test('pier and beam guidance avoids unsafe timber, loading and lifting shortcuts', () => {
  const page = pages.PierBeam;
  assert.match(page, /H3 treatment is for above-ground exposure, not ground contact/);
  assert.match(page, /specified strength before loading/);
  assert.match(page, /Do not crawl beneath a suspect floor/);
  assert.match(page, /site-specific sequence/);
  assert.match(page, /responsible professionals should confirm restrictions/);
  assert.doesNotMatch(page, /H3 for in-ground|Cures in 7 days|5 to 10mm|one bay per day|Yes, most homeowners/);
});

test('remaining foundation guidance keeps material, excavation and movement decisions site-specific', () => {
  assert.match(pages.FoundationStone, /single rule for every heritage foundation/);
  assert.match(pages.FoundationStone, /before masonry is removed or excavation takes place/);
  assert.match(pages.FoundationStone, /neither an invisible repair nor a fixed weathering period/i);
  assert.match(pages.SettlementStabilisation, /Monitor only where the assessed risk allows/);
  assert.match(pages.SettlementStabilisation, /council controls or approvals may apply/);
  assert.match(pages.StructuralFoundation, /no single approval route applies/);
  assert.match(pages.StructuralFoundation, /below a footing without assessment can compromise support/);
  for (const page of [pages.FoundationStone, pages.SettlementStabilisation, pages.StructuralFoundation]) {
    assert.doesNotMatch(page, /NHL 3.5|locked in place|within 5 to 10 metres|most expensive|Almost always, yes|full development approval|life of the building/);
  }
});
test('contact answers avoid unverified credential and payment promises', () => {
  const page = readFileSync(new URL('../src/pages/ContactPage.tsx', import.meta.url), 'utf8');
  assert.match(page, /current licence and insurance details/);
  assert.match(page, /contracting business named on the quote/);
  assert.match(page, /agreed in the written quote or contract/);
  assert.doesNotMatch(page, /NSW masonry contractor licence|with every quote|does not have a minimum|small deposit secures|Bank transfer, credit card or cash/);
  assert.match(page, /QuoteSurvey/);
  assert.match(page, /tel:0414922276/);
});
