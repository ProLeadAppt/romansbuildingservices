import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../src/data/heritage.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { HERITAGE_ERAS, getHeritageEra, getAllHeritageEras } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const expected = [
  {
    "slug": "federation-home-restoration",
    "name": "Federation Home Restoration",
    "era": "1890 – 1915",
    "relatedServices": [
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      },
      {
        "title": "Tuckpointing Restoration",
        "href": "/problems/tuckpointing-restoration"
      },
      {
        "title": "Heritage Masonry",
        "href": "/services/heritage-restoration/heritage-masonry"
      },
      {
        "title": "Heritage Restoration Services",
        "href": "/services/heritage-restoration"
      }
    ],
    "questions": [
      "How long does a full Federation home exterior restoration take?",
      "Can you match original mortar and brick colours?",
      "Do I need council approval to restore my Federation home?",
      "Is it worth restoring or should we modernise?"
    ]
  },
  {
    "slug": "victorian-terrace-restoration",
    "name": "Victorian Terrace Restoration",
    "era": "1840 – 1900",
    "relatedServices": [
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      },
      {
        "title": "Tuckpointing Restoration",
        "href": "/problems/tuckpointing-restoration"
      },
      {
        "title": "Repointing",
        "href": "/services/masonry/repointing"
      },
      {
        "title": "Heritage Restoration Services",
        "href": "/services/heritage-restoration"
      }
    ],
    "questions": [
      "What's the difference between repointing and tuckpointing?",
      "My terrace has cement render over the original brick. Should we strip it?",
      "Can we run modern services through the walls during restoration?",
      "How much does a Victorian terrace restoration cost?"
    ]
  },
  {
    "slug": "colonial-sandstone-buildings",
    "name": "Colonial Sandstone Building Restoration",
    "era": "1788 – 1880",
    "relatedServices": [
      {
        "title": "Heritage Stone Restoration",
        "href": "/services/heritage-restoration/heritage-stone"
      },
      {
        "title": "Heritage Masonry",
        "href": "/services/heritage-restoration/heritage-masonry"
      },
      {
        "title": "Sandstone Weathering",
        "href": "/problems/sandstone-weathering"
      },
      {
        "title": "Repointing",
        "href": "/services/masonry/repointing"
      }
    ],
    "questions": [
      "Can you work on Heritage-listed colonial buildings?",
      "How do you source matching sandstone for repairs?",
      "What's a dutchman repair?",
      "Why is cement mortar bad for sandstone?"
    ]
  },
  {
    "slug": "art-deco-building-restoration",
    "name": "Art Deco Building Restoration",
    "era": "1925 – 1945",
    "relatedServices": [
      {
        "title": "Building Restoration",
        "href": "/services/building-restoration"
      },
      {
        "title": "Facade Renovation",
        "href": "/services/building-restoration/facade-renovation"
      },
      {
        "title": "Concrete Cancer Treatment",
        "href": "/services/concrete-repairs/concrete-cancer"
      },
      {
        "title": "Strata Repairs",
        "href": "/services/remedial-building/strata-repairs"
      }
    ],
    "questions": [
      "Can you match Art Deco render finishes?",
      "My building has concrete cancer in the balconies. What's involved in fixing it?",
      "Do you work on heritage-listed Art Deco buildings?",
      "How long does Art Deco restoration take?"
    ]
  },
  {
    "slug": "inter-war-cottage-restoration",
    "name": "Inter-war Cottage Restoration",
    "era": "1918 – 1945",
    "relatedServices": [
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      },
      {
        "title": "Repointing",
        "href": "/services/masonry/repointing"
      },
      {
        "title": "Building Restoration",
        "href": "/services/building-restoration"
      },
      {
        "title": "Cracked Brick Walls",
        "href": "/problems/cracked-brick-walls"
      }
    ],
    "questions": [
      "Can you strip paint off our inter-war brick exterior?",
      "Our California bungalow has cracked render around the porch. What's the fix?",
      "How do you match decorative brick banding?",
      "What's the cost range for inter-war cottage restoration?"
    ]
  }
];

for (const identity of expected) {
  const page = getHeritageEra(identity.slug);
  test(`${identity.slug} preserves its identity, related links and FAQ questions`, () => {
    assert.equal(page.name, identity.name);
    assert.equal(page.era, identity.era);
    assert.equal(page.slug, identity.slug);
    assert.deepEqual(page.relatedServices, identity.relatedServices);
    assert.deepEqual(page.faqs.map(faq => faq.question), identity.questions);
    assert.equal(page.intro.length, 3);
    assert.ok(page.characteristics.length >= 7);
    assert.equal(page.commonIssues.length, 5);
    assert.ok(page.ourApproach.length >= 5);
    assert.ok(page.metaTitle.includes('Sydney'));
    for (const faq of page.faqs) assert.ok(faq.answer.split(/\s+/).length >= 30);
    for (const issue of page.commonIssues) assert.ok(issue.detail.split(/\s+/).length >= 30);
  });
  test(`${identity.slug} avoids invented history and numeric promises`, () => {
    const copy = JSON.stringify(page);
    assert.doesNotMatch(copy, /we(?:'ve| have) worked|we see (?:this|it) constantly|we do a lot|we work on .*regularly/i);
    assert.doesNotMatch(copy, /\$\d|\d+[–-]\d+ (?:weeks|months|years)|command a premium|dramatically (?:lifts|increases).*value|never had an owner regret/i);
    assert.doesNotMatch(copy, /stays? liveable throughout|keep .*habitable|only proper fix|full rake-out and re-pointing|salt-resistant patch mortar|breathable salt-blocking coatings/i);
    assert.match(copy, /assess|inspect/i);
    assert.match(copy, /significan|heritage/i);
  });
}

test('all five distinct era guides remain addressable and unsupported slugs stay absent', () => {
  assert.equal(getAllHeritageEras().length, 5);
  assert.deepEqual(Object.keys(HERITAGE_ERAS), expected.map(page => page.slug));
  assert.equal(getHeritageEra('unknown-era'), undefined);
  const distinguishingTerms = ['leadlight', 'party walls', 'tooling', 'terrazzo', 'California bungalows'];
  expected.forEach((page, i) => assert.match(JSON.stringify(getHeritageEra(page.slug)), new RegExp(distinguishingTerms[i], 'i')));
});

test('repair guidance keeps diagnosis, retention and approval checks ahead of treatment', () => {
  const federation = JSON.stringify(getHeritageEra('federation-home-restoration'));
  const victorian = JSON.stringify(getHeritageEra('victorian-terrace-restoration'));
  const stone = JSON.stringify(getHeritageEra('colonial-sandstone-buildings'));
  const deco = JSON.stringify(getHeritageEra('art-deco-building-restoration'));
  const cottage = JSON.stringify(getHeritageEra('inter-war-cottage-restoration'));
  assert.match(federation, /Like-for-like work is not automatically exempt/);
  assert.match(federation, /assess the paint for lead/);
  assert.match(victorian, /chemical injection, which is not a universal cure/);
  assert.match(victorian, /sound historic joints retained/);
  assert.match(stone, /Consolidants.*specialist assessment and trials/);
  assert.match(stone, /does not have a fixed service life/);
  assert.match(deco, /engineer should assess structural adequacy/);
  assert.match(deco, /Keep people away from loose concrete/);
  assert.match(cottage, /asbestos may be present/);
  assert.match(cottage, /Underpinning is only one possible intervention/);
});


test('shared era copy does not add unsupported credentials or prescribe by era', () => {
  const template = readFileSync(new URL('../src/components/HeritageEraPageTemplate.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(template, /30 years of heritage|most.*buildings we assess|What we see most often|methods matched to the building era/);
  assert.match(template, /inspection and material assessment, not age alone/);
  assert.match(template, /assessment availability/);
});
