import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import ts from 'typescript';

const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
const baseline = JSON.parse(read('tests/fixtures/regional-guide-identities.json'));
const loaded = new Map();
function loadData(file) {
  if (loaded.has(file)) return loaded.get(file).exports;
  const module = { exports: {} };
  loaded.set(file, module);
  const code = ts.transpileModule(read(file), { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
  } }).outputText;
  new Function('require', 'module', 'exports', code)((specifier) => {
    assert.ok(specifier.startsWith('@/data/'), specifier);
    return loadData(`src/${specifier.slice(2)}.ts`);
  }, module, module.exports);
  return module.exports;
}
const { AREAS, PROBLEM_AREA_COMBOS } = loadData('src/data/areas.ts');
const { SERVICE_AREA_COMBOS, SERVICE_AREA_ROUTES } = loadData('src/data/serviceAreas.ts');
const legacyAreas = Object.values(AREAS).filter((area) => area.slug !== 'hawkesbury-western-sydney');
const notes = legacyAreas.flatMap((area) => Object.values(area.problemNotes));

test('regional edits preserve every area identity, route relationship and Hawkesbury record', () => {
  const identities = Object.fromEntries(Object.entries(AREAS).map(([key, value]) => {
    const { housingProfile, problemNotes, ...identity } = value;
    assert.ok(housingProfile);
    return [key, { ...identity, problemKeys: Object.keys(problemNotes) }];
  }));
  assert.deepEqual(identities, baseline.areas);
  assert.deepEqual(AREAS['hawkesbury-western-sydney'], baseline.hawkesbury);
  assert.deepEqual(SERVICE_AREA_COMBOS.map((combo) => [combo.serviceSlug, combo.areaSlug]), baseline.servicePairs);
  assert.equal(PROBLEM_AREA_COMBOS().length, 30);
  assert.equal(SERVICE_AREA_ROUTES().length, 10);
});

test('all thirty regional problem notes and ten service contexts give distinct substantive guidance', () => {
  assert.equal(notes.length, 30);
  assert.equal(new Set(notes).size, 30);
  assert.equal(new Set(SERVICE_AREA_COMBOS.map((combo) => combo.context)).size, 10);
  for (const text of [...notes, ...SERVICE_AREA_COMBOS.map((combo) => combo.context)]) {
    assert.ok(text.split(/\s+/).length >= 45, text);
    assert.match(text, /assess|investigat|scope|repair|inspect|condition|identify|trial/i);
    assert.doesNotMatch(text, /highest .*in Sydney|we(?:'ve| have) (?:worked|restored|repaired|staged)|we (?:do this constantly|routinely|see this constantly)|every job|\$\d|\d+\s*(?:percent|%)|Leichhardt Council|Sydney Harbour Foreshore Authority/i);
    assert.doesNotMatch(text, /\b\d+\s*(?:mm|metres|years|months|weeks)\b/i);
  }
});

test('regional crack, foundation and loose-material guidance does not diagnose from location or dimensions', () => {
  assert.match(AREAS['eastern-suburbs'].problemNotes['cracked-brick-walls'], /width cannot by itself establish safety/);
  assert.match(AREAS['inner-west'].problemNotes['foundation-movement'], /Soil type and footing depth need site evidence/);
  assert.match(AREAS['north-shore'].problemNotes['cracked-brick-walls'], /keep away/);
  assert.match(AREAS['northern-beaches'].problemNotes['spalling-render'], /Avoid knocking off material/);
  assert.match(AREAS['northern-beaches'].problemNotes['concrete-cancer'], /Keep people away from falling-material hazards/);
  assert.match(SERVICE_AREA_COMBOS.find((c) => c.serviceSlug === 'foundation-repairs').context, /cannot determine whether underpinning is needed/);
});

test('heritage and moisture guidance requires diagnosis and property-specific permissions', () => {
  assert.match(AREAS['sydney-cbd'].problemNotes['rising-damp'], /Chemical injection or render removal is not an automatic solution/);
  assert.match(AREAS['northern-beaches'].problemNotes['leaking-balconies'], /Do not assume a complete membrane replacement is always needed/);
  assert.match(AREAS['inner-west'].problemNotes['crumbling-mortar'], /Avoid treating every wall as a full rake-out job/);
  for (const combo of SERVICE_AREA_COMBOS.filter((c) => c.serviceSlug === 'heritage-restoration')) {
    assert.match(combo.context, /property|council|requirements/i);
    assert.match(combo.context, /assess|check|confirm/i);
    assert.doesNotMatch(combo.context, /part of every job|working relationships|we handle .*approval|period-correct by default/i);
  }
});

// North Shore metadata baseline excludes the unsupported licence/insurance assertion.
test('six regional hubs preserve reviewed metadata, layout, services, links and CTAs', () => {
  for (const [file, expected] of Object.entries(baseline.hubSkeletons)) {
    const source = read(file);
    const skeleton = source.replace(/(<p\b[^>]*>)[\s\S]*?(<\/p>)/g, '$1PARAGRAPH_TEXT$2');
    assert.equal(createHash('sha256').update(skeleton).digest('hex'), expected, file);
    assert.match(source, /QuoteCTAButton/);
    assert.match(source, /AreaProblemLinks/);
    assert.match(source, /AreaServiceLinks/);
  }
});
