// Existing regional guide data. Routes and relationships are preserved.
// Regional context helps prepare an enquiry; it does not establish a defect
// rate, local project history or the correct treatment for a property.

export interface AreaProfile {
  slug: string;
  name: string;
  shortName: string;
  href: string;
  housingProfile: string;
  suburbs: string[];
  // Existing guide topics for this area; this is not a prevalence ranking.
  // Use slugs from PROBLEMS in src/data/problems.ts.
  topProblems: string[];
  // Property-assessment context; not proof of local projects or a diagnosis.
  problemNotes: Record<string, string>;
}

export const AREAS: Record<string, AreaProfile> = {
  "hawkesbury-western-sydney": {
    "slug": "hawkesbury-western-sydney",
    "name": "Hawkesbury and Western Sydney",
    "shortName": "Hawkesbury and Western Sydney",
    "href": "/areas/hawkesbury-western-sydney",
    "housingProfile": "Repair scope depends on the individual building, material, access, drainage and any heritage or engineering requirements. Share photographs and existing reports before an assessment.",
    "suburbs": [],
    "topProblems": [],
    "problemNotes": {}
  },
  "sydney-cbd": {
    "slug": "sydney-cbd",
    "name": "Sydney CBD",
    "shortName": "the CBD",
    "href": "/areas/sydney-cbd",
    "housingProfile": "For an older shopfront, warehouse conversion or commercial facade in the CBD, start with the building’s records and existing fabric. Public footpaths, neighbouring tenancies, loading access and any heritage controls need consideration alongside the repair itself. The exact property and proposed work determine the permissions and protection required.",
    "suburbs": [
      "the-rocks",
      "circular-quay",
      "darlinghurst",
      "pyrmont",
      "ultimo"
    ],
    "topProblems": [
      "tuckpointing-restoration",
      "sandstone-weathering",
      "crumbling-mortar",
      "damaged-lintels",
      "rising-damp"
    ],
    "problemNotes": {
      "tuckpointing-restoration": "For a facade in The Rocks, Pyrmont or Ultimo, identify whether the visible joints are original tuckpointing, later repointing or a painted finish before planning restoration. Surviving details and historic photographs can help establish an appropriate joint profile. Discuss a small trial and material compatibility with a heritage adviser where needed. Confirm the property’s approval requirements before stripping coatings or altering significant fabric.",
      "sandstone-weathering": "On a CBD shopfront or street-facing stone facade, the first question is whether loose material could fall onto people below. Keep clear of affected areas and arrange professional assessment. Stone condition, water paths and earlier repairs guide the scope. Cleaning, consolidation and replacement are different options; none should be selected simply because the stone looks discoloured. Access and pedestrian protection need planning before work at height.",
      "crumbling-mortar": "Open joints on a warehouse facade or older commercial wall need inspection for water entry, movement and the condition of the surrounding masonry. A colour match alone does not establish a suitable replacement mortar. Retain sound material where appropriate and agree the joint profile and repair extent before work. For shared or street-facing walls, include occupant access, protection and any heritage requirements in the written scope.",
      "damaged-lintels": "Cracking above a CBD shopfront or warehouse opening may involve its lintel, but a photograph cannot establish the load path or cause. An engineer should assess structural concerns and any temporary support before masonry is disturbed. Existing drawings, previous alterations and access to the inside of the opening are useful. The design and heritage context determine whether repair, strengthening or replacement is appropriate.",
      "rising-damp": "Damp at the base of an older CBD wall can involve several moisture sources. Record whether it changes after rain and share information about gutters, drains, plumbing, basement use and past coatings. Assessment should distinguish ground moisture from leaks, condensation or other causes before choosing a treatment. Chemical injection or render removal is not an automatic solution, particularly where significant original finishes would be affected."
    }
  },
  "eastern-suburbs": {
    "slug": "eastern-suburbs",
    "name": "Eastern Suburbs",
    "shortName": "the Eastern Suburbs",
    "href": "/areas/eastern-suburbs",
    "housingProfile": "Enquiries across Paddington, Woollahra, Bondi, Coogee and surrounding suburbs can involve terraces, houses, apartments or retaining walls. Record the actual wall material, exposure, previous repairs and access. A coastal address does not establish the cause of deterioration, and a period appearance does not establish heritage status. Check the individual property before choosing a repair.",
    "suburbs": [
      "paddington",
      "woollahra",
      "bondi",
      "double-bay",
      "bellevue-hill",
      "coogee",
      "randwick"
    ],
    "topProblems": [
      "concrete-cancer",
      "sandstone-weathering",
      "efflorescence-salt-damage",
      "cracked-brick-walls",
      "tuckpointing-restoration"
    ],
    "problemNotes": {
      "concrete-cancer": "For an apartment balcony or facade in Bondi, Coogee or Randwick, send the strata manager’s reports and photographs taken from a safe position. Cracking, rust staining and loose concrete warrant assessment of deterioration and falling-material risks. Exposure, moisture paths and reinforcement condition inform the repair specification. Agree investigation access, engineering responsibilities and resident protection before setting a staged programme; the suburb alone cannot determine urgency.",
      "sandstone-weathering": "Sandstone steps, gateposts and facade details need different assessments because their loads, water exposure and consequences of failure differ. For a property in Paddington, Woollahra or the coastal suburbs, show where the damaged stone sits and whether loose fragments have appeared. Avoid aggressive cleaning before its condition is understood. Any replacement should be assessed for compatibility and appearance, with heritage advice where the fabric is significant.",
      "efflorescence-salt-damage": "White deposits on an Eastern Suburbs wall should be considered alongside moisture entry, drainage, existing coatings and the material beneath. Proximity to Bondi or Coogee is useful context, but it does not identify the salts or their source. Record when the marks appear and whether the surface is also flaking. Ask for assessment before repeated washing or a new coating obscures the evidence.",
      "cracked-brick-walls": "For a terrace in Paddington or Woollahra, photographs of the whole wall, adjoining openings and any corresponding internal damage are more useful than a close-up alone. Include when the crack appeared and any recent building, drainage or landscaping work. Its width cannot by itself establish safety or the correct repair. Structural concerns require professional assessment before stitching, opening the wall or investigating foundations.",
      "tuckpointing-restoration": "On an older terrace facade, check for surviving fillet lines, earlier pointing and paint layers before deciding what restoration should reproduce. The brick condition and mortar compatibility matter as much as colour. A carefully agreed trial can help compare the finish without committing the whole facade. Check heritage requirements and the effect of coating removal first; restoration is not a promise of a particular increase in property value."
    }
  },
  "north-shore": {
    "slug": "north-shore",
    "name": "North Shore",
    "shortName": "the North Shore",
    "href": "/areas/north-shore",
    "housingProfile": "For North Shore enquiries, identify the property type and the element needing repair: a house wall, apartment balcony, chimney, step or retaining wall. Harbour exposure, vegetation, drainage and access vary between sites. Share available drawings and reports, and check any heritage or strata requirements before defining the work.",
    "suburbs": [
      "mosman",
      "neutral-bay",
      "chatswood",
      "lane-cove",
      "cremorne",
      "st-leonards"
    ],
    "topProblems": [
      "concrete-cancer",
      "sandstone-weathering",
      "leaking-balconies",
      "efflorescence-salt-damage",
      "cracked-brick-walls"
    ],
    "problemNotes": {
      "concrete-cancer": "An apartment-building enquiry in Chatswood, St Leonards, Mosman or Neutral Bay benefits from a clear record of affected levels and earlier repairs. An engineer can assess structural concerns and help distinguish urgent protection from longer-term repair planning. A staged budget must follow the assessed risk, rather than postponing an unsafe area. Confirm how residents, entrances and neighbouring property will be protected during investigation and work.",
      "sandstone-weathering": "For a North Shore sandstone wall, gatepost or set of steps, note whether the affected stone carries load, retains ground or sits above a path. Moisture, drainage, past repairs and vegetation are useful assessment details. Surface staining alone does not show how sound the stone is. The scope should distinguish care of retained fabric from structural repair, and identify any engineering or heritage input before cleaning or replacement.",
      "leaking-balconies": "For a balcony leak in a North Shore apartment building, include the location of the stain below, its relationship to rainfall and any earlier waterproofing work. Drains, thresholds, wall junctions and the slab may all need investigation. The visible stain does not locate the entry point. Coordinate access with strata and affected occupants, and let the findings determine whether a local repair or wider replacement is appropriate.",
      "efflorescence-salt-damage": "A harbour-facing wall and a sheltered wall can show different symptoms even on the same North Shore property. Record the wall’s position, drainage, coatings and when deposits return. Salt staining needs assessment with the moisture source and masonry condition; it is not enough to select a product from the suburb name. Discuss a suitable trial before cleaning or treating significant stone or brickwork.",
      "cracked-brick-walls": "North Shore crack enquiries should include previous alterations, any nearby excavation and the movement history, alongside photographs of the wall and openings. Ground conditions cannot be assumed from a broad regional description. Chimneys, retaining walls and ordinary house walls carry different risks and may need different specialists. If movement is sudden or masonry is unstable, keep away from the affected area and seek prompt professional safety advice."
    }
  },
  "northern-beaches": {
    "slug": "northern-beaches",
    "name": "Northern Beaches",
    "shortName": "the Northern Beaches",
    "href": "/areas/northern-beaches",
    "housingProfile": "For a Northern Beaches property, record actual exposure and access rather than assuming all damage is salt-related. A beachfront apartment, sheltered house and retaining wall need different investigations. Photographs of the affected element, drainage and previous repairs help establish the next step. Strata coordination, safe access and any planning constraints should be discussed early.",
    "suburbs": [
      "manly",
      "dee-why",
      "avalon",
      "collaroy",
      "freshwater"
    ],
    "topProblems": [
      "concrete-cancer",
      "efflorescence-salt-damage",
      "sandstone-weathering",
      "leaking-balconies",
      "spalling-render"
    ],
    "problemNotes": {
      "concrete-cancer": "On a balcony or facade near the coast, exposure is one factor in an assessment of cracking, corrosion and loose concrete. For Manly, Dee Why or Collaroy strata enquiries, share existing engineering reports and the location of affected areas. Keep people away from falling-material hazards. Testing and structural assessment inform the repair scope; neither the building’s age nor a regional label proves that every slab has the same defect.",
      "efflorescence-salt-damage": "For a wall between Manly and Avalon, show both the deposits and the wider setting, including drains, ground levels and nearby water paths. Salts can affect appearance and material condition, but white staining alone does not establish structural damage. Assessment should identify the moisture mechanism and suitable treatment. Avoid choosing a generic “salt-blocking” coating before its compatibility and effect on drying have been considered.",
      "sandstone-weathering": "A sandstone retaining wall, garden feature and facade detail need separate repair decisions. At a Northern Beaches property, explain whether the stone is shedding fragments, leaning or supporting ground, and whether a path or neighbour lies below. Cleaning and surface treatments cannot correct a structural defect. Retain sound original fabric where appropriate and have proposed repairs assessed for compatibility, access and any required engineering.",
      "leaking-balconies": "For a Northern Beaches balcony, record whether water appears after wind-driven rain, routine rain or another event, and which rooms or units are affected. Existing drainage, thresholds, junctions and previous repairs help guide investigation. Do not assume a complete membrane replacement is always needed or that a surface patch will solve the problem. Agree diagnostic access and the repair specification with the relevant specialists and strata representatives.",
      "spalling-render": "Loose render above a Northern Beaches entrance, balcony or public path needs attention to the risk of falling material before its appearance. Moisture, adhesion, the substrate and earlier coatings can all influence the investigation. Avoid knocking off material to test it. The repair scope should identify safe access, treatment of the underlying defect and a compatible finish, rather than promise a lifespan based only on coastal exposure."
    }
  },
  "inner-west": {
    "slug": "inner-west",
    "name": "Inner West",
    "shortName": "the Inner West",
    "href": "/areas/inner-west",
    "housingProfile": "For a terrace, cottage, shopfront or converted building in the Inner West, original fabric and later alterations may need different treatment. Party walls, narrow side access, occupied neighbours and heritage requirements can affect the scope. Confirm the property’s local authority and actual condition; a suburb-wide description cannot establish its mortar, foundations or repair needs.",
    "suburbs": [
      "newtown",
      "balmain",
      "marrickville",
      "leichhardt",
      "glebe",
      "surry-hills",
      "erskineville"
    ],
    "topProblems": [
      "tuckpointing-restoration",
      "cracked-brick-walls",
      "crumbling-mortar",
      "rising-damp",
      "foundation-movement"
    ],
    "problemNotes": {
      "tuckpointing-restoration": "For a terrace in Newtown, Balmain or Erskineville, surviving joints and early photographs can help identify the intended facade finish. Paint removal should be assessed before it becomes part of the scope, because it may affect the masonry beneath. Discuss colour, joint profile and a small trial with the appropriate adviser. Check current heritage requirements for the property; a restored finish does not establish a financial return.",
      "cracked-brick-walls": "For an Inner West terrace or cottage, include the location of any party wall, recent alterations and changes noticed at doors or windows. Drainage and movement history may help an investigation, but neither building age nor the suburb identifies the cause. Share earlier reports if available. Structural concerns and work near adjoining buildings need the appropriate professional assessment before repair or opening-up is planned.",
      "crumbling-mortar": "On an older Inner West facade, some joints may remain sound while others have deteriorated or been changed in earlier repairs. The condition of the brick or stone and the existing mortar guides the repair extent and replacement mix. Agree test work and the joint finish where appropriate. Avoid treating every wall as a full rake-out job; disturbance of fragile fabric needs care and any relevant heritage advice.",
      "rising-damp": "For damp in a terrace or cottage, show where the marks appear and note rainfall, plumbing changes, external levels and ventilation. A tidemark or peeling finish can have more than one cause. Investigation should establish the moisture path before selecting injection, drainage changes or removal of coatings. Party walls and significant finishes may affect access and permissions, so include these in the scope discussion.",
      "foundation-movement": "For a property in Marrickville, Leichhardt or nearby suburbs, gather any survey, engineering or drainage reports before deciding on foundation work. Record when movement was noticed and whether neighbouring excavation or alterations may be relevant. Soil type and footing depth need site evidence. An engineer can advise on investigation, monitoring and any repair; the approach should also consider adjoining buildings and safe access."
    }
  },
  "greater-sydney": {
    "slug": "greater-sydney",
    "name": "Sydney Metro",
    "shortName": "Sydney metro",
    "href": "/areas/greater-sydney",
    "housingProfile": "The existing Sydney metro guide includes enquiries from Strathfield, Burwood, Concord, Homebush and Parramatta. Houses, strata buildings and commercial properties have different access, ownership and assessment needs. Include the suburb, building type and affected material when discussing availability. Foundation conditions and repair requirements need property-specific evidence.",
    "suburbs": [
      "parramatta",
      "strathfield",
      "burwood",
      "concord",
      "homebush"
    ],
    "topProblems": [
      "cracked-brick-walls",
      "foundation-movement",
      "failing-retaining-walls",
      "crumbling-mortar",
      "rising-damp"
    ],
    "problemNotes": {
      "cracked-brick-walls": "For a home in Strathfield, Burwood or Concord, provide a view of the full wall, the crack and any matching internal symptoms. Note when changes began, recent works and relevant plumbing or drainage issues. Stepped cracking does not by itself prove a particular foundation problem. An assessment should determine whether monitoring, masonry repair or further structural investigation is needed before a method is quoted.",
      "foundation-movement": "For foundation concerns across Sydney metro suburbs, existing drawings, movement records and drainage information can help the assessment. Visible cracking alone does not establish soil conditions or justify underpinning. Engineering and any geotechnical investigation should guide the options and monitoring plan. Do not remove trees, excavate beside footings or alter drainage as an experiment; these changes can affect the building or neighbouring property.",
      "failing-retaining-walls": "For a retaining wall in Burwood, Concord or another Sydney suburb, explain what it retains and whether a driveway, building, boundary or public path is nearby. Leaning, cracking or sudden change calls for assessment of stability and access restrictions. Drainage may be relevant, but drilling holes or excavating behind the wall without a plan can create risks. The design, ownership and approval requirements need confirmation before work.",
      "crumbling-mortar": "For brickwork in an older Strathfield, Burwood or Homebush home, identify whether deterioration is localised or affects a larger wall. Previous repairs, moisture and the condition of the bricks are useful details. Mortar composition cannot be established from the suburb or building age alone. Discuss a compatible repair mix, retained sound joints and the intended finish before committing to extensive repointing.",
      "rising-damp": "For damp walls in Strathfield, Burwood or Parramatta, start with the pattern of moisture and any changes to plumbing, paving, gardens or ventilation. An assessment should consider different sources before assuming a failed damp-proof course. Injection and removal of render are options only where suitable to the findings and fabric. External level changes also need attention to services, foundations and neighbouring drainage."
    }
  }
};

export const getArea = (slug: string): AreaProfile | undefined => AREAS[slug];

export const getAllAreas = (): AreaProfile[] => Object.values(AREAS);

// Reverse lookup: which areas have a hand-written page for this problem?
// Used by the problem-hub page to link down to its area-specific variants.
export const getAreasForProblem = (problemSlug: string): AreaProfile[] =>
  getAllAreas().filter((a) => a.topProblems.includes(problemSlug) && !!a.problemNotes[problemSlug]);

// All (problem, area) combinations that should be prerendered.
// Preserve the existing published route set. New combinations require their
// own useful evidence and review rather than automatic multiplication.
export const PROBLEM_AREA_COMBOS = (): Array<{ problem: string; area: string }> => {
  const combos: Array<{ problem: string; area: string }> = [];
  for (const area of getAllAreas()) {
    for (const problem of area.topProblems) {
      combos.push({ problem, area: area.slug });
    }
  }
  return combos;
};
