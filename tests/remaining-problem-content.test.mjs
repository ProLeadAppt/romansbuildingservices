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
// Fixed routing/identity fixtures from dbb2ceacb37396784763ab2cb5ddd48b56a14fdf.
const identities = {
  "failing-retaining-walls": {
    "name": "Failing Retaining Walls",
    "slug": "failing-retaining-walls",
    "metaTitle": "Sydney Failing Retaining Walls | Drainage & Rebuild | Romans",
    "urgency": "high",
    "relatedServices": [
      {
        "title": "Retaining Walls (Masonry)",
        "href": "/services/masonry/retaining-walls"
      },
      {
        "title": "Stone Masonry Repairs",
        "href": "/services/masonry/stone-masonry-repairs"
      },
      {
        "title": "Structural Foundation Repairs",
        "href": "/services/foundation-repairs/structural-foundation"
      }
    ]
  },
  "rising-damp": {
    "name": "Rising Damp",
    "slug": "rising-damp",
    "metaTitle": "Sydney Rising Damp | Signs, Causes & Fix | Romans",
    "urgency": "medium",
    "relatedServices": [
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      },
      {
        "title": "Historic Stuccos & Renders",
        "href": "/services/heritage-restoration/historic-stuccos-renders"
      },
      {
        "title": "Period Materials",
        "href": "/services/heritage-restoration/period-materials"
      }
    ]
  },
  "spalling-render": {
    "name": "Spalling & Falling Render",
    "slug": "spalling-render",
    "metaTitle": "Sydney Render Spalling | Repair & Recoat | Romans",
    "urgency": "medium",
    "relatedServices": [
      {
        "title": "Historic Stuccos & Renders",
        "href": "/services/heritage-restoration/historic-stuccos-renders"
      },
      {
        "title": "Concrete Resurfacing",
        "href": "/services/concrete-repairs/concrete-resurfacing"
      },
      {
        "title": "Facade Renovation",
        "href": "/services/building-restoration/facade-renovation"
      }
    ]
  },
  "crumbling-mortar": {
    "name": "Crumbling Mortar Joints",
    "slug": "crumbling-mortar",
    "metaTitle": "Sydney Crumbling Mortar | Repointing & Repair | Romans",
    "urgency": "low",
    "relatedServices": [
      {
        "title": "Repointing & Brick Pointing",
        "href": "/services/masonry/repointing"
      },
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      },
      {
        "title": "Period Materials",
        "href": "/services/heritage-restoration/period-materials"
      }
    ]
  },
  "foundation-movement": {
    "name": "Foundation Movement & Settlement",
    "slug": "foundation-movement",
    "metaTitle": "Sydney Foundation Movement | Signs, Causes & Repair | Romans",
    "urgency": "high",
    "relatedServices": [
      {
        "title": "Underpinning",
        "href": "/services/foundation-repairs/underpinning"
      },
      {
        "title": "Structural Foundation Repairs",
        "href": "/services/foundation-repairs/structural-foundation"
      },
      {
        "title": "Settlement Stabilisation",
        "href": "/services/foundation-repairs/settlement-stabilisation"
      },
      {
        "title": "Structural Crack Repair",
        "href": "/services/structural-repairs/structural-crack-repair"
      }
    ]
  },
  "chimney-cracks": {
    "name": "Chimney Cracks & Leaks",
    "slug": "chimney-cracks",
    "metaTitle": "Sydney Chimney Cracks & Leaks | Repair | Romans",
    "urgency": "high",
    "relatedServices": [
      {
        "title": "Brick & Block Work",
        "href": "/services/masonry/brick-block-work"
      },
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      },
      {
        "title": "Defect Rectification",
        "href": "/services/building-restoration/defect-rectification"
      }
    ]
  },
  "efflorescence-salt-damage": {
    "name": "Efflorescence & Salt Damage",
    "slug": "efflorescence-salt-damage",
    "metaTitle": "Sydney Salt Damage & Efflorescence | Repair | Romans",
    "urgency": "medium",
    "relatedServices": [
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      },
      {
        "title": "Protective Coatings",
        "href": "/services/concrete-repairs/protective-coatings"
      },
      {
        "title": "Historic Stuccos & Renders",
        "href": "/services/heritage-restoration/historic-stuccos-renders"
      }
    ]
  },
  "leaking-balconies": {
    "name": "Leaking Balconies",
    "slug": "leaking-balconies",
    "metaTitle": "Sydney Leaking Balconies | Waterproofing & Repairs | Romans",
    "urgency": "high",
    "relatedServices": [
      {
        "title": "Concrete Cancer Treatment",
        "href": "/services/concrete-repairs/concrete-cancer"
      },
      {
        "title": "Strata Building Repairs",
        "href": "/services/remedial-building/strata-repairs"
      },
      {
        "title": "Spalling Concrete Repair",
        "href": "/services/concrete-repairs/spalling-repair"
      },
      {
        "title": "Defect Rectification",
        "href": "/services/building-restoration/defect-rectification"
      }
    ]
  },
  "tuckpointing-restoration": {
    "name": "Tuckpointing Restoration",
    "slug": "tuckpointing-restoration",
    "metaTitle": "Sydney Tuckpointing Restoration | Repointing & Lime Mortar | Romans",
    "urgency": "low",
    "relatedServices": [
      {
        "title": "Repointing & Brick Pointing",
        "href": "/services/masonry/repointing"
      },
      {
        "title": "Heritage Masonry",
        "href": "/services/heritage-restoration/heritage-masonry"
      },
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      }
    ]
  },
  "sandstone-weathering": {
    "name": "Sandstone Weathering & Erosion",
    "slug": "sandstone-weathering",
    "metaTitle": "Sydney Sandstone Weathering | Repair & Restoration | Romans",
    "urgency": "medium",
    "relatedServices": [
      {
        "title": "Stone Masonry Repairs",
        "href": "/services/masonry/stone-masonry-repairs"
      },
      {
        "title": "Heritage Stone Restoration",
        "href": "/services/heritage-restoration/heritage-stone"
      },
      {
        "title": "Traditional Stonework",
        "href": "/services/heritage-restoration/traditional-stonework"
      }
    ]
  },
  "damaged-lintels": {
    "name": "Damaged Lintels Above Windows & Doors",
    "slug": "damaged-lintels",
    "metaTitle": "Sydney Damaged Lintels | Rusting Steel & Brick Cracks | Romans",
    "urgency": "high",
    "relatedServices": [
      {
        "title": "Structural Crack Repair",
        "href": "/services/structural-repairs/structural-crack-repair"
      },
      {
        "title": "Load-Bearing Wall Repairs",
        "href": "/services/structural-repairs/load-bearing-walls"
      },
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      },
      {
        "title": "Building Reinforcement",
        "href": "/services/structural-repairs/building-reinforcement"
      }
    ]
  },
  "cavity-wall-tie-failure": {
    "name": "Cavity Wall Tie Failure",
    "slug": "cavity-wall-tie-failure",
    "metaTitle": "Sydney Cavity Wall Tie Failure | Repair | Romans",
    "urgency": "medium",
    "relatedServices": [
      {
        "title": "Structural Crack Repair",
        "href": "/services/structural-repairs/structural-crack-repair"
      },
      {
        "title": "Load-Bearing Wall Repairs",
        "href": "/services/structural-repairs/load-bearing-walls"
      },
      {
        "title": "Building Reinforcement",
        "href": "/services/structural-repairs/building-reinforcement"
      },
      {
        "title": "Repointing & Brick Pointing",
        "href": "/services/masonry/repointing"
      }
    ]
  }
};

for (const [slug, identity] of Object.entries(identities)) {
  test(`${slug}: keeps route, enquiry identity and service destinations`, () => {
    const record = getProblem(slug);
    for (const [key, value] of Object.entries(identity)) assert.deepEqual(record[key], value);
    assert.ok(PROBLEM_SLUGS.includes(slug));
    assert.ok(PROBLEMS_LIST.some(item => item.slug === slug && item.name === record.name));
    for (const key of ['metaDescription', 'heroTagline', 'quickAnswer', 'urgencyNote', 'costBand']) {
      assert.equal(typeof record[key], 'string');
      assert.ok(record[key].length > 40);
    }
    for (const key of ['whatItIs', 'signs', 'causes']) {
      assert.ok(record[key].length >= 3);
      assert.ok(record[key].every(item => typeof item === 'string' && item.length > 10));
    }
    assert.equal(record.howWeFixIt.length, 5);
    assert.ok(record.howWeFixIt.every(item => item.step && item.detail));
    assert.equal(record.faqs.length, 4);
    assert.ok(record.faqs.every(item => item.question && item.answer));
  });
  test(`${slug}: avoids unsupported prices, prescriptive dimensions and fixed outcomes`, () => {
    const copy = JSON.stringify(PROBLEMS[slug]);
    assert.doesNotMatch(copy, /\$\s*\d|\b\d+\s*(?:mm|years?|months?|weeks?|days?)\b|1:100|50–80|40–60|we see a lot|most homes|guaranteed|effectively unlimited/iu);
    assert.doesNotMatch(PROBLEMS[slug].signs.join(' '), /when (?:you|tapped|pushed)|marble test|scratch|straight edge/i);
    assert.match(copy, /assess|investigat/i);
    assert.match(PROBLEMS[slug].costBand, /scope|depends|affect|reflects|influence|determine/i);
  });
}

const text = slug => JSON.stringify(PROBLEMS[slug]);
test('retaining wall guidance does not prescribe homeowner excavation or drainage-only repairs', () => {
  assert.match(PROBLEMS['failing-retaining-walls'].urgencyNote, /Do not dig behind it/);
  assert.match(text('failing-retaining-walls'), /improved drainage does not restore lost support/);
  assert.match(text('failing-retaining-walls'), /height alone is not enough/);
});
test('damp and salts require differential investigation rather than damaging home tests', () => {
  assert.match(text('rising-damp'), /moisture meter reading alone also does not identify the cause/);
  assert.match(text('rising-damp'), /one possible option, not a standard answer/);
  assert.match(text('efflorescence-salt-damage'), /Do not assume an abrasive brush is safe/);
  assert.match(text('efflorescence-salt-damage'), /Deposits alone cannot diagnose corrosion/);
});
test('render and mortar address loose-material hazards rather than reassuring from appearance', () => {
  assert.match(PROBLEMS['spalling-render'].urgencyNote, /Do not tap, scrape or pull/);
  assert.match(PROBLEMS['crumbling-mortar'].urgencyNote, /Do not push bricks or scratch joints/);
  assert.match(text('crumbling-mortar'), /not routine repointing/);
});
test('foundation movement does not imply underpinning or safety after a short monitoring period', () => {
  assert.match(text('foundation-movement'), /Underpinning is not automatically required/);
  assert.match(text('foundation-movement'), /does not prove that movement has permanently stopped/);
  assert.match(PROBLEMS['foundation-movement'].urgencyNote, /Do not wait for a monitoring period/);
});
test('chimney masonry repairs do not certify safe fireplace use', () => {
  assert.match(text('chimney-cracks'), /does not establish safe operation/);
  assert.match(PROBLEMS['chimney-cracks'].urgencyNote, /Do not climb onto the roof/);
});
test('balcony copy avoids automatic membrane diagnosis and strata liability allocation', () => {
  assert.match(text('leaking-balconies'), /does not identify the source/);
  assert.match(text('leaking-balconies'), /strata plan, by-laws/);
  assert.match(text('leaking-balconies'), /Responsibility and insurance coverage cannot be determined/);
});
test('decorative and stone work retain evidence and compatible materials rather than blanket products', () => {
  assert.match(text('tuckpointing-restoration'), /do not prove that this building originally had the same finish/);
  assert.match(text('tuckpointing-restoration'), /financial return cannot be promised/);
  assert.match(text('sandstone-weathering'), /sealing is not a default solution/);
  assert.match(text('sandstone-weathering'), /exact or invisible match cannot be promised/);
});
test('lintel work is specified after assessment with safe support', () => {
  assert.match(PROBLEMS['damaged-lintels'].urgencyNote, /attempt temporary propping yourself/);
  assert.match(text('damaged-lintels'), /whether repair or replacement is appropriate/);
});
test('wall ties distinguish cavity masonry from framed veneer without a DIY installation layout', () => {
  assert.match(text('cavity-wall-tie-failure'), /Cavity masonry has masonry leaves, while brick veneer is tied to a supporting frame/);
  assert.match(text('cavity-wall-tie-failure'), /Tie type, spacing, embedment and installation method must suit/);
  assert.match(text('cavity-wall-tie-failure'), /No indefinite service life should be assumed/);
  assert.match(text('cavity-wall-tie-failure'), /internal as well as external/);
});
