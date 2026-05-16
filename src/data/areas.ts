// Area profiles for the Problem × Area programmatic SEO matrix.
// Each area has hand-written notes for the problems most common in that
// area's housing stock + climate. Pages combine these notes with the
// existing rich problem data from problems.ts to stay genuinely unique.

export interface AreaProfile {
  slug: string;
  name: string;
  shortName: string;
  href: string;
  housingProfile: string;
  suburbs: string[];
  // Problems prioritised for this area — first 5 get a programmatic page.
  // Use slugs from PROBLEMS in src/data/problems.ts.
  topProblems: string[];
  // Hand-written context paragraph per problem. ~70–120 words each.
  problemNotes: Record<string, string>;
}

export const AREAS: Record<string, AreaProfile> = {
  'sydney-cbd': {
    slug: 'sydney-cbd',
    name: 'Sydney CBD',
    shortName: 'the CBD',
    href: '/areas/sydney-cbd',
    housingProfile:
      'Sydney CBD is dominated by 19th-century sandstone commercial buildings, Victorian-era warehouses converted to apartments, and pockets of colonial brickwork around The Rocks. Most heritage buildings here use soft lime mortars and Hawkesbury or Pyrmont sandstone. The mix of foot traffic, tight access, and strict heritage controls means jobs need careful planning.',
    suburbs: ['the-rocks', 'circular-quay', 'darlinghurst', 'pyrmont', 'ultimo'],
    topProblems: ['tuckpointing-restoration', 'sandstone-weathering', 'crumbling-mortar', 'damaged-lintels', 'rising-damp'],
    problemNotes: {
      'tuckpointing-restoration':
        "Tuckpointing in the CBD is mostly heritage work — Victorian-era warehouses, terraces near The Rocks, and old commercial buildings around Pyrmont and Ultimo. The original lime tuckpointing on these buildings is usually 100+ years old and the fine white fillet line has worn or flaked away. Modern cementitious tuckpointing on heritage walls is a known failure mode, so we mix traditional lime putty mortars on site. Council and heritage approvals are part of every job here.",
      'sandstone-weathering':
        "Most pre-1900 buildings in the CBD are Hawkesbury or Pyrmont sandstone, and after 130+ years of weather, exhaust fumes and foot traffic, the surface stone is often soft, sugary or flaking. We see this constantly on plinth stones, sills, lintels and ornamental detailing in The Rocks and Circular Quay. Cleaning and consolidation has to be done carefully — high-pressure cleaning destroys soft stone — and any replacement blocks need to match the original quarry and weather in.",
      'crumbling-mortar':
        "Mortar in CBD heritage buildings is almost always lime-based and now over a century old. Years of weather, traffic vibration and previous bad repairs (cement repointing on top of lime mortar) leave joints crumbling and open. Around Pyrmont, Ultimo and the Rocks we routinely find walls where the mortar is so soft you can scrape it out with a key. The fix is full rake-out and repointing with a matched lime mortar — never cement, which destroys the surrounding brick or stone.",
      'damaged-lintels':
        "Older CBD buildings often have sandstone or timber lintels above windows that have failed under decades of load. Rusted steel lintels in early-20th-century commercial buildings are another constant — the steel expands as it rusts and cracks the brickwork above. We see this through the Pyrmont and Ultimo warehouse stock and across heritage shopfronts. Replacement needs structural steel sized to the load and proper corrosion protection so we are not back in 30 years.",
      'rising-damp':
        "CBD heritage buildings predate damp-proof courses, and many of the ones that had retrofitted DPCs have seen those fail. Combined with cement renders trapping moisture in the wall, we see rising damp patterns regularly through The Rocks, Darlinghurst and the older terraces near Pyrmont. The fix needs to allow the wall to breathe — chemical DPC injection plus removal of any cementitious render, followed by a lime-based render that lets moisture escape.",
    },
  },

  'eastern-suburbs': {
    slug: 'eastern-suburbs',
    name: 'Eastern Suburbs',
    shortName: 'the Eastern Suburbs',
    href: '/areas/eastern-suburbs',
    housingProfile:
      "The Eastern Suburbs run from Paddington's Victorian terraces through Bondi's apartment blocks to the period homes of Woollahra, Double Bay and Bellevue Hill. Sandstone, Sydney red brick and stucco render dominate. Salt air from the coast accelerates damage on everything from balconies to lintels — anything within a couple of kilometres of the water sees noticeably faster deterioration.",
    suburbs: ['paddington', 'woollahra', 'bondi', 'double-bay', 'bellevue-hill', 'coogee', 'randwick'],
    topProblems: ['concrete-cancer', 'sandstone-weathering', 'efflorescence-salt-damage', 'cracked-brick-walls', 'tuckpointing-restoration'],
    problemNotes: {
      'concrete-cancer':
        "Concrete cancer is the number-one structural problem in Eastern Suburbs apartment blocks, especially the 1960s–1990s walk-ups in Bondi, Coogee and Randwick. Salt air drives chloride into the concrete, rusting the steel reinforcement and cracking balconies, parapets and facade panels from the inside out. We work on strata buildings here constantly — full inspection, sound concrete removal, salt-resistant patch mortar and a breathable protective coating. Cheap patch jobs fail within a few years in this environment.",
      'sandstone-weathering':
        "Sandstone is everywhere in the Eastern Suburbs — Paddington's plinths and string courses, Woollahra's gateposts and retaining walls, Bondi's older homes — and salt makes it worse. Salt crystallisation inside the stone breaks it apart from within. We see sugaring, contour scaling and surface loss most badly on south-east-facing facades and any stonework within a block of the water. Repair means careful cleaning, consolidation, and dutchman or full-block replacement with matched sandstone.",
      'efflorescence-salt-damage':
        "Walls within a few kilometres of Bondi, Bronte and Coogee carry a constant salt load. Efflorescence — the white powder bloom on brick and stone — is the visible sign, but the real damage is sub-florescence (salt crystallising under the surface) which spalls brick faces and crumbles mortar. We see it most on rendered walls and exposed brickwork on the eastern facades. Treatment is multi-step: removing soluble salts, repairing damaged units, and applying a breathable salt-blocking treatment.",
      'cracked-brick-walls':
        "Paddington and Woollahra terraces are usually 130–150 years old, built before modern footings. Hairline cracks are normal; cracks wider than 5 mm or running in step patterns through the brickwork need investigation. Common causes here are settlement on reactive clay soils, leaking stormwater under footings, or root damage from established street trees. We assess every crack against actual movement before recommending whether it's cosmetic repair, crack stitching or underpinning.",
      'tuckpointing-restoration':
        "Paddington and Surry Hills border terraces are the textbook tuckpointing job — Victorian-era Sydney red brick with the original white fillet line either worn off or never restored. Many were rendered or painted over the original tuckpointing in the 1960s–80s. Stripping back and re-tuckpointing brings the building back to its original look and dramatically lifts the value. We mix proper lime tuckpointing mortar matched to the brick colour.",
    },
  },

  'north-shore': {
    slug: 'north-shore',
    name: 'North Shore',
    shortName: 'the North Shore',
    href: '/areas/north-shore',
    housingProfile:
      "The North Shore mixes Federation and California bungalow homes around Mosman, Neutral Bay and Cremorne with newer apartment stock through Chatswood, St Leonards and Lane Cove. Sandstone retaining walls, brick chimneys and rendered facades are common. Mosman and Neutral Bay sit close enough to the water that salt drives concrete and brick damage; further inland the issues are more about age, mortar failure and settlement.",
    suburbs: ['mosman', 'neutral-bay', 'chatswood', 'lane-cove', 'cremorne', 'st-leonards'],
    topProblems: ['concrete-cancer', 'sandstone-weathering', 'leaking-balconies', 'efflorescence-salt-damage', 'cracked-brick-walls'],
    problemNotes: {
      'concrete-cancer':
        "Concrete cancer hits North Shore strata buildings consistently — Chatswood and St Leonards apartment towers, the 1970s–80s walk-ups across Mosman and Neutral Bay, even the converted commercial buildings around Lane Cove. Balconies and parapets near the water in Mosman and Cremorne are the worst. We've staged whole-building programs for strata committees here, working through the worst areas first and budgeting follow-up stages over 2–3 years.",
      'sandstone-weathering':
        "Mosman and Neutral Bay are full of sandstone retaining walls, gate posts and terrace facings, many over a century old. South-facing and shaded sandstone develops moss and biological growth that holds moisture against the stone and accelerates breakdown. Anywhere within the waterfront streets — Cremorne Point, Mosman Bay — we also see salt-driven sugaring. Treatment is careful cleaning, consolidation and dutchman repairs with matched stone.",
      'leaking-balconies':
        "Strata balconies across Chatswood, St Leonards and Mosman fail at the membrane and at the wall junction. Often the original waterproofing was builder-grade and was never properly upgraded. The leaks show as efflorescence on the soffit below, rust streaks, or paint blowing off the unit below. Repair means lifting the balcony tiles, replacing the membrane properly, addressing the wall-floor junction with a coved fillet, and reinstating — patch-repair from above never lasts.",
      'efflorescence-salt-damage':
        "Waterfront streets in Mosman, Neutral Bay and Cremorne carry the same salt-load profile as the coast. We see efflorescence on south-east-facing walls and the salt crystallisation damage that follows. Even a couple of kilometres back from the water, rising damp combined with cement renders trap salts inside walls and produce the same surface damage. Diagnosis matters here — treating efflorescence without finding the moisture source guarantees it comes back.",
      'cracked-brick-walls':
        "North Shore Federation and California bungalow homes were built on the sandstone shelf in many parts, which is generally stable. Where we see real crack issues it's usually on the clay edges — Lane Cove, parts of Chatswood — or where stormwater has been undermining footings. The other common one: chimney cracks where the chimney has rotated outward from the wall over a century. We assess against actual movement before specifying repair.",
    },
  },

  'northern-beaches': {
    slug: 'northern-beaches',
    name: 'Northern Beaches',
    shortName: 'the Northern Beaches',
    href: '/areas/northern-beaches',
    housingProfile:
      "Manly, Dee Why, Collaroy, Freshwater and Avalon are some of the most salt-exposed neighbourhoods in Sydney. Brick veneer homes, mid-century beach houses, and a heavy stock of 1970s–90s strata blocks dominate. Anything with exposed steel, concrete or untreated brickwork degrades faster here than anywhere else in the metro area. Wind-driven salt also damages render and paint coatings far more aggressively than inland sites.",
    suburbs: ['manly', 'dee-why', 'avalon', 'collaroy', 'freshwater'],
    topProblems: ['concrete-cancer', 'efflorescence-salt-damage', 'sandstone-weathering', 'leaking-balconies', 'spalling-render'],
    problemNotes: {
      'concrete-cancer':
        "The Northern Beaches sees more concrete cancer per kilometre of buildings than any other part of Sydney. Manly, Dee Why, Collaroy — almost every strata building over 20 years old has it somewhere. Beachfront balconies are the textbook case: salt spray drives chloride into the concrete, rusts the reinforcement, and the slab edges spall off. We work on whole-building remediation programs here regularly. Anything less than a full cut-back and salt-resistant repair fails fast in this environment.",
      'efflorescence-salt-damage':
        "Salt damage on the Northern Beaches goes beyond cosmetic — it's structural. Brick faces spall, mortar joints crumble, and rendered walls bubble and lift, especially on south-east-facing aspects through Manly to Avalon. Sub-florescence (salt crystallising inside the wall) does most of the damage you can't see. Proper treatment removes the salt, repairs the substrate, and seals with a salt-blocking system that's still breathable — non-breathable coatings trap moisture and accelerate the next round of damage.",
      'sandstone-weathering':
        "Older sandstone buildings and retaining walls along the Beaches — Manly's original cottages, the sandstone outcrops through Avalon and Collaroy — take a beating from salt and wind. Sugaring, contour scaling and surface loss are routine on exposed faces. Cleaning has to be done with low-pressure methods (high pressure destroys the stone) and consolidation treatments can extend life on stone too far gone to replace economically. Replacement blocks need to match weather pattern and tone, which takes time.",
      'leaking-balconies':
        "Northern Beaches strata buildings have some of the highest balcony leak rates in Sydney because of the combined salt and water exposure. We see failed membranes, deteriorated drainage outlets, and wall-junction failures across blocks in Manly, Dee Why and Collaroy. The leak below is usually the visible symptom — by the time water shows on the soffit, the membrane has been failing for years. Proper repair means full membrane replacement and corrected drainage falls, not patching.",
      'spalling-render':
        "Rendered walls don't last on the Beaches without proper specification. Cementitious render over brick traps salt and moisture, and within 10–20 years the render is bubbling, lifting and falling off in sheets. We see this on whole streetfronts in Dee Why, Collaroy and Freshwater. The fix is to strip the failed render, repair the brick or block substrate properly, and re-render with a breathable, salt-tolerant system specified for marine exposure — not standard render.",
    },
  },

  'inner-west': {
    slug: 'inner-west',
    name: 'Inner West',
    shortName: 'the Inner West',
    href: '/areas/inner-west',
    housingProfile:
      "Newtown, Balmain, Marrickville, Leichhardt, Glebe and Surry Hills are dominated by Victorian and Edwardian terraces, workers' cottages, and converted warehouses. The brickwork is mostly Sydney red brick on lime mortar, often with original tuckpointing under decades of paint or render. Reactive clay soils under many streets cause footing movement, and the age of the housing stock means almost every job involves heritage-appropriate materials.",
    suburbs: ['newtown', 'balmain', 'marrickville', 'leichhardt', 'glebe', 'surry-hills', 'erskineville'],
    topProblems: ['tuckpointing-restoration', 'cracked-brick-walls', 'crumbling-mortar', 'rising-damp', 'foundation-movement'],
    problemNotes: {
      'tuckpointing-restoration':
        "The Inner West is the heartland of Sydney tuckpointing work. Newtown, Balmain, Surry Hills and Erskineville have streets of Victorian-era terraces where the original tuckpointing was painted over in the 1950s–80s. Stripping and re-tuckpointing brings the original detail back and adds real value. We use proper lime putty mortars, mixed and applied the way the original work was done. Matching mortar colour to the brick takes test panels before we commit to the full wall.",
      'cracked-brick-walls':
        "Inner West terraces and cottages were built on shallow stone or brick footings, and many sit on reactive clay or fill. Cracking is common — most of it cosmetic, but enough is real movement that every crack needs assessment. Drought followed by heavy rain causes the worst movement in Newtown, Marrickville and Glebe, where clay soils swell and shrink seasonally. Repair depends on whether the movement is active or settled — there's no point patching cracks until the cause is addressed.",
      'crumbling-mortar':
        "Lime mortar on 100+ year-old Inner West terraces is exhausted. Joints have been raked out by weather, attacked by salts, or — worst case — repointed with hard cement mortar that's now spalling the brick faces around it. We see this constantly through Balmain, Leichhardt and Glebe. Full rake-out and repointing with a matched lime mortar is the only proper fix. Test sections first, then work in panels to keep the wall serviceable through the job.",
      'rising-damp':
        "Inner West terraces and cottages built before about 1920 either had no damp-proof course or had a slate DPC that's failed. Rising damp shows as a tidemark up the inside of skirtings, salt bloom at the wall base, and paint blowing off render. The wrong fix — cement render on the outside, paint on the inside — traps moisture and makes it worse. We do chemical DPC injection plus removal of any non-breathable coatings, then lime-based render that lets the wall dry properly.",
      'foundation-movement':
        "Reactive clay soils through Marrickville, Leichhardt and parts of Newtown drive significant seasonal movement. Combined with old timber or shallow brick footings and broken stormwater, foundation movement is the cause behind many of the cracks we see in the Inner West. Diagnosis matters — sometimes the fix is fixing drainage and waiting, sometimes it's targeted underpinning, sometimes the whole side of the building needs work. We level-check and monitor before specifying.",
    },
  },

  'greater-sydney': {
    slug: 'greater-sydney',
    name: 'Greater Sydney',
    shortName: 'Greater Sydney',
    href: '/areas/greater-sydney',
    housingProfile:
      "Strathfield, Burwood, Concord, Homebush and Parramatta cover the suburbs from the Inner West out toward Western Sydney. Housing here ranges from Federation and inter-war brick homes through to post-war fibro and brick veneer, plus newer apartment stock around the rail corridors. Reactive clay soils are widespread, and many of the older homes have shallow footings that move with seasonal moisture changes.",
    suburbs: ['parramatta', 'strathfield', 'burwood', 'concord', 'homebush'],
    topProblems: ['cracked-brick-walls', 'foundation-movement', 'failing-retaining-walls', 'crumbling-mortar', 'rising-damp'],
    problemNotes: {
      'cracked-brick-walls':
        "Older homes through Strathfield, Burwood and Concord were built on shallow footings over reactive clay. After droughts and heavy rain, the clay swells and shrinks unevenly under the building and cracks appear — usually stepping through the mortar joints, sometimes through bricks. We assess every crack against actual movement using level checks and tell-tales before deciding whether it's cosmetic stitching, structural repair or underpinning.",
      'foundation-movement':
        "Foundation movement is the most common structural issue we see in Greater Sydney. Reactive clay soils, broken stormwater, leaking sewer connections and large established trees all drive it. Strathfield and Homebush in particular sit on clay that moves significantly. We do full diagnosis — soil tests, level surveys, drainage checks — before deciding between drainage rectification, root barriers, or targeted underpinning. Jumping straight to underpinning without diagnosis wastes money.",
      'failing-retaining-walls':
        "Sloping blocks through Strathfield, Burwood and Concord have a lot of retaining walls, many of them 50+ years old and built without proper drainage. Sandstone block, brick or rendered concrete walls bulge, crack or lean as the hydrostatic pressure builds up behind them. Repair depends on the wall type and severity — sometimes weep holes and drainage fix it, sometimes the wall needs partial rebuild, sometimes full replacement with engineered design.",
      'crumbling-mortar':
        "Federation-era and inter-war brick homes through Burwood, Concord and Homebush usually have lime-cement mortars that are 80+ years old. Where the original lime content has weathered out, joints crumble away. We also routinely find walls that were repointed in the 1960s–80s with hard cement mortar — that traps moisture and spalls the brick faces. Proper repair is full rake-out and repointing with a matched lime-based mortar appropriate to the brick.",
      'rising-damp':
        "Older homes in Strathfield, Burwood and Parramatta predate modern damp-proofing or have slate DPCs that have failed. Rising damp is common, especially where landscaping has raised garden beds against the wall, or cement renders have been added that trap moisture. The fix is chemical DPC injection, lowering external ground levels where possible, and stripping any cement render in favour of a breathable lime-based system.",
    },
  },
};

export const getArea = (slug: string): AreaProfile | undefined => AREAS[slug];

export const getAllAreas = (): AreaProfile[] => Object.values(AREAS);

// Reverse lookup: which areas have a hand-written page for this problem?
// Used by the problem-hub page to link down to its area-specific variants.
export const getAreasForProblem = (problemSlug: string): AreaProfile[] =>
  getAllAreas().filter((a) => a.topProblems.includes(problemSlug) && !!a.problemNotes[problemSlug]);

// All (problem, area) combinations that should be prerendered.
// We only ship the top 5 problems per area to keep every page meaningfully
// unique — the other 9 problems per area aren't worth the thin-content risk.
export const PROBLEM_AREA_COMBOS = (): Array<{ problem: string; area: string }> => {
  const combos: Array<{ problem: string; area: string }> = [];
  for (const area of getAllAreas()) {
    for (const problem of area.topProblems) {
      combos.push({ problem, area: area.slug });
    }
  }
  return combos;
};
