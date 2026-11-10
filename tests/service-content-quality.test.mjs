import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const names = ['Masonry', 'HeritageRestoration', 'StructuralRepairs', 'BuildingRestoration', 'ConcreteRepairs', 'FoundationRepairs', 'RemedialBuilding'];
const pages = Object.fromEntries(names.map(name => [name, readFileSync(new URL(`../src/pages/services/${name}Page.tsx`, import.meta.url), 'utf8')]));

for (const [name, source] of Object.entries(pages)) {
  test(`${name} has useful local scope and seven customer answers`, () => {
    assert.match(source, /Hawkesbury/);
    assert.match(source, /Western Sydney/);
    assert.match(source, /wider Sydney/);
    assert.equal((source.match(/question:/g) || []).length, 7);
    assert.match(source, /getSubServiceRoutes\(/);
    assert.match(source, /childServices=\{childServices\}/);
    assert.doesNotMatch(source, /exact masonry searcher|page you want to land on|600mm|all pre-1930|essentially permanent|Permanent fix|stops the movement for good|safe to live in throughout|no surprise add-ons|adds decades|another 30 years/);
  });
}

test('masonry and heritage answers defer approvals and compatible mortar selection', () => {
  assert.match(pages.Masonry, /not height alone/);
  assert.match(pages.Masonry, /not simply the age of the building/);
  assert.match(pages.HeritageRestoration, /heritage adviser can prepare specialist assessments/);
  assert.match(pages.HeritageRestoration, /one mix does not suit every heritage building/);
});

test('structural and foundation guidance avoids diagnosis from crack size and occupancy guarantees', () => {
  assert.match(pages.StructuralRepairs, /Crack width alone cannot tell you/);
  assert.match(pages.FoundationRepairs, /None of these signs alone confirms foundation failure/);
  assert.match(pages.FoundationRepairs, /temporary relocation/);
  assert.match(pages.BuildingRestoration, /temporary relocation/);
  assert.match(pages.FoundationRepairs, /insurer’s assessment/);
});

test('urgent repair answers do not promise emergency availability', () => {
  assert.match(pages.RemedialBuilding, /current availability/);
  assert.match(pages.RemedialBuilding, /contact emergency services rather than waiting/);
  assert.match(pages.ConcreteRepairs, /Do not tap or chip suspect concrete/);
  assert.doesNotMatch(pages.RemedialBuilding, /mobilise quickly|50 or more units/);
});
