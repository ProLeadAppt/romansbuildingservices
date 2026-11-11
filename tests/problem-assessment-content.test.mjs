import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../src/data/problems.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { PROBLEMS, getProblem, PROBLEM_SLUGS, PROBLEMS_LIST } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
);
const concrete = PROBLEMS['concrete-cancer'];
const brick = PROBLEMS['cracked-brick-walls'];
const copy = (record) => JSON.stringify(record);

for (const [slug, name, urgency, links] of [
  ['concrete-cancer', 'Concrete Cancer', 'high', [
    ['Concrete Cancer Treatment', '/services/concrete-repairs/concrete-cancer'],
    ['Spalling Concrete Repair', '/services/concrete-repairs/spalling-repair'],
    ['Protective Coatings', '/services/concrete-repairs/protective-coatings'],
    ['Strata Repairs', '/services/remedial-building/strata-repairs'],
  ]],
  ['cracked-brick-walls', 'Cracked Brick Walls', 'medium', [
    ['Structural Crack Repair', '/services/structural-repairs/structural-crack-repair'],
    ['Load-Bearing Wall Repairs', '/services/structural-repairs/load-bearing-walls'],
    ['Foundation Repairs', '/services/foundation-repairs'],
  ]],
]) {
  test(`${slug} preserves identity, routing and template field types`, () => {
    const record = getProblem(slug);
    assert.equal(record.name, name);
    assert.equal(record.slug, slug);
    assert.equal(record.urgency, urgency);
    assert.ok(PROBLEM_SLUGS.includes(slug));
    assert.ok(PROBLEMS_LIST.some(item => item.slug === slug && item.name === name));
    for (const field of ['metaTitle', 'metaDescription', 'heroTagline', 'quickAnswer', 'urgencyNote', 'costBand']) {
      assert.equal(typeof record[field], 'string');
      assert.ok(record[field].length > 0);
    }
    for (const field of ['whatItIs', 'signs', 'causes']) {
      assert.ok(record[field].length >= 3);
      assert.ok(record[field].every(item => typeof item === 'string'));
    }
    assert.equal(record.howWeFixIt.length, 5);
    assert.ok(record.howWeFixIt.every(item => typeof item.step === 'string' && typeof item.detail === 'string'));
    assert.equal(record.faqs.length, 4);
    assert.ok(record.faqs.every(item => typeof item.question === 'string' && typeof item.answer === 'string'));
    assert.deepEqual(record.relatedServices.map(item => [item.title, item.href]), links);
  });

  test(`${slug} avoids fixed prices, duration guarantees and remote safety conclusions`, () => {
    const text = copy(PROBLEMS[slug]);
    assert.doesNotMatch(text, /\$\d|\b\d+\s*(?:mm|years?|months?|weeks?|days?)\b|most common|non-destructive|completely hidden|without re-cracking|anything less fails/i);
    assert.match(text, /written scope|Pricing follows/);
    assert.match(text, /structural engineer/i);
    assert.match(text, /Romans carries out the agreed building work/);
    assert.match(text, /photograph/i);
    assert.match(text, /cannot (?:confirm|establish)/);
    assert.match(PROBLEMS[slug].urgencyNote, /emergency services/);
  });
}

test('concrete explains corrosion conditions and other causes of spalling', () => {
  assert.match(copy(concrete), /Chlorides reaching the reinforcement can disrupt that protection/);
  assert.match(copy(concrete), /carbonation can reduce the concrete’s protective alkalinity/);
  assert.match(copy(concrete), /moisture and oxygen allow corrosion/);
  assert.match(concrete.quickAnswer, /Spalling can also have other causes/);
  assert.match(copy(concrete), /cannot promise a fixed lifespan/);
});

test('concrete observations do not invite tapping or dismiss ground-level hazards', () => {
  assert.match(concrete.urgencyNote, /Do not tap or chip suspect concrete/);
  assert.match(concrete.urgencyNote, /including beside ground-level walls/);
  assert.match(concrete.urgencyNote, /Keep people away/);
  assert.match(concrete.urgencyNote, /space below loose or overhead material/);
  assert.doesNotMatch(concrete.signs.join(' '), /when you tap|hollow sound|probe|hammer/i);
  assert.doesNotMatch(copy(concrete), /you have more time|every year you wait/);
  assert.match(copy(concrete), /These are not homeowner checks/);
});

test('crack guidance avoids width-based diagnosis and universal stitching', () => {
  assert.match(brick.quickAnswer, /Crack width alone cannot establish the cause or confirm safety/);
  assert.match(brick.urgencyNote, /Monitoring is appropriate only where the assessed condition supports it/);
  assert.match(brick.urgencyNote, /Keep people away from loose masonry/);
  assert.match(copy(brick), /Stitching alone does not stop foundation movement/);
  assert.match(copy(brick), /not a single crack measurement/);
  assert.doesNotMatch(copy(brick), /credit card|push a coin|usually just age|For most typical cracks, no|more serious than vertical/);
});
