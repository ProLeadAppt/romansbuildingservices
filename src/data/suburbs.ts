import type { SuburbPageProps } from '@/components/SuburbPageTemplate';

type SuburbData = Omit<SuburbPageProps, 'nearbySuburbs'> & {
  nearbySlugs: string[];
};

const SUBURBS: Record<string, SuburbData> = {
  // ===== Sydney CBD area =====
  'the-rocks': {
    name: 'The Rocks',
    slug: 'the-rocks',
    parentAreaName: 'Sydney CBD',
    parentAreaHref: '/areas/sydney-cbd',
    metaTitle: 'The Rocks Masonry & Heritage Restoration | Romans',
    metaDescription:
      'The Rocks masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Colonial sandstone restoration, heritage repointing and masonry repairs in Sydney\'s oldest neighbourhood.',
    intro: [
      'For a sandstone building in The Rocks, begin with the conservation history: earlier repairs, stone replacements and any conservation management plan. Photographs of the whole elevation help distinguish isolated weathering from a wider pattern.',
      'Stone grain, bedding, surface tooling and joint profiles matter when specifying a visible repair. Retaining sound original material may be preferable to replacing a whole block; cleaning and repair trials need to suit the particular stone.',
    ],
    housingContext:
      'Historic sandstone, brick infill and later alterations can behave differently within one wall. Assess the existing mortar and moisture sources rather than choosing a mix from the age or address alone.',
    services: [
      'Sandstone restoration and cleaning',
      'Heritage repointing with lime mortar',
      'Stone block replacement and matching',
      'Heritage facade repair',
      'Structural crack stitching on sandstone walls',
      'Council and heritage approval documentation',
    ],
    faqs: [
      {
        question: 'Can you work on heritage-listed buildings in The Rocks?',
        answer:
          'A heritage enquiry needs the listing details, conservation documents and proposed repair scope. Confirm the applicable council and Heritage NSW requirements before work; a maintenance exemption has conditions and is not automatic.',
      },
      {
        question: 'Why does my old building need lime mortar instead of cement?',
        answer:
          'Mortar needs to be compatible with the masonry. A hard, dense repair can damage softer historic material, but removing it can also cause damage. A conservation assessment should identify which joints need attention and an appropriate replacement mortar.',
      },
      {
        question: 'Can you match original Hawkesbury sandstone?',
        answer:
          'Matching involves more than colour: grain, bedding direction, texture and dimensions also matter. Suitable supply and a sample should be checked before replacement is agreed; an exact aged match cannot be assumed.',
      },
    ],
    nearbySlugs: ['circular-quay', 'darlinghurst', 'paddington'],
  },
  'circular-quay': {
    name: 'Circular Quay',
    slug: 'circular-quay',
    parentAreaName: 'Sydney CBD',
    parentAreaHref: '/areas/sydney-cbd',
    metaTitle: 'Circular Quay Masonry & Sandstone Restoration | Romans',
    metaDescription:
      'Circular Quay masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Heritage sandstone, historic commercial facades and waterfront masonry repairs at Circular Quay.',
    intro: [
      'A Circular Quay facade enquiry should identify the building manager, public entrances and the affected elevation. Footpaths, loading areas and occupied commercial spaces can constrain access even when the damaged area is small.',
      'For waterfront stonework, record where deposits or flaking occur and whether they follow rain or leaks. Repeated surface treatments without investigating moisture can leave the underlying problem unresolved.',
    ],
    housingContext:
      'Sandstone facades and altered commercial buildings need assessment of both original fabric and later additions. Salt deposits alone do not establish the depth of deterioration or justify stone replacement.',
    services: [
      'Commercial sandstone facade restoration',
      'Salt damage treatment and consolidation',
      'Heritage mortar repointing',
      'Structural crack repair on historic buildings',
      'Stone cleaning and surface restoration',
      'Waterfront building maintenance',
    ],
    faqs: [
      {
        question: 'How do you handle salt damage on waterfront buildings?',
        answer:
          'First investigate moisture pathways, salt sources and the condition of the stone. A conservation specialist can then advise on drainage, mortar repairs or treatment trials. Consolidants and coatings are not a universal salt-damage remedy.',
      },
      {
        question: 'Can you work on commercial buildings while tenants are on site?',
        answer:
          'Occupancy needs a site-specific access and safety plan. Discuss entrances, business hours, noise, dust controls and any temporary exclusion areas with the building manager before agreeing a programme.',
      },
      {
        question: 'Who approves heritage work at Circular Quay?',
        answer:
          'Check the particular building, land ownership and listing rather than relying on the suburb. Council planning requirements and any State Heritage Register requirements must be considered separately, including the conditions of any exemption.',
      },
    ],
    nearbySlugs: ['the-rocks', 'darlinghurst', 'paddington'],
  },
  'darlinghurst': {
    name: 'Darlinghurst',
    slug: 'darlinghurst',
    parentAreaName: 'Sydney CBD',
    parentAreaHref: '/areas/sydney-cbd',
    metaTitle: 'Darlinghurst Masonry & Terrace Restoration | Romans',
    metaDescription:
      'Darlinghurst masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Victorian terrace brick restoration, tuckpointing and heritage masonry across Darlinghurst.',
    intro: [
      'For a Darlinghurst terrace, photograph any surviving decorative pointing before planning repairs. A close view of sheltered joints can be more useful for matching the original finish than a heavily weathered street-facing section.',
      'Where a terrace adjoins another building, describe side access and whether the affected wall is shared. Warehouse conversions need a different scope from decorative terrace facades, particularly around altered openings.',
    ],
    housingContext:
      'Older brickwork may include soft bricks, lime-rich mortar and later cement repairs. The visible finish is only part of the assessment: moisture, joint condition and the risk of damage during removal also matter.',
    services: [
      'Victorian terrace brick restoration',
      'Tuckpointing (traditional decorative pointing)',
      'Lime mortar repointing',
      'Heritage brick replacement and matching',
      'Structural crack repair on terrace walls',
      'Warehouse conversion brick work',
    ],
    faqs: [
      {
        question: 'What is tuckpointing and does my terrace have it?',
        answer:
          'Tuckpointing creates fine decorative lines over a background joint finish. Surviving lines, sheltered areas and historic photographs can help identify it; not every older terrace originally had tuckpointing.',
      },
      {
        question: 'Should I remove the cement pointing and replace it with lime?',
        answer:
          'Not automatically. Check whether the existing pointing is contributing to damage and whether it can be removed without harming the bricks. A compatible mortar and a small trial area should inform any proposed replacement.',
      },
      {
        question: 'Can you match crumbling bricks on a 140-year-old terrace?',
        answer:
          'Replacement options need comparison for size, texture, colour and durability. Send photographs of both damaged and sound areas, but leave removal and sample extraction to the person assessing the repair.',
      },
    ],
    nearbySlugs: ['the-rocks', 'paddington', 'woollahra'],
  },

  // ===== Eastern Suburbs area =====
  'paddington': {
    name: 'Paddington',
    slug: 'paddington',
    parentAreaName: 'Eastern Suburbs',
    parentAreaHref: '/areas/eastern-suburbs',
    metaTitle: 'Paddington Terrace Restoration & Tuckpointing | Romans',
    metaDescription:
      'Paddington masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Victorian terrace brick restoration and tuckpointing across Paddington\'s heritage streetscapes.',
    intro: [
      'A Paddington terrace facade can combine decorative pointing, ironwork and sandstone details within a small frontage. Identify which element is deteriorating so the enquiry does not turn into an unnecessary whole-facade replacement.',
      'For steps and window surrounds, include photographs showing wear, previous patches and nearby drainage. Access to upper facades and protection of neighbouring entrances should be considered alongside the material repair.',
    ],
    housingContext:
      'Terrace brickwork and sandstone may need different repair materials. Surviving details should guide the finish, while condition and exposure guide the scope; building age alone is not a repointing schedule.',
    services: [
      'Victorian terrace repointing with lime mortar',
      'Tuckpointing restoration',
      'Heritage brick and sandstone replacement',
      'Sandstone step and window surround repair',
      'Rust-damaged iron lintel replacement',
      'Retaining wall repair and construction',
    ],
    faqs: [
      {
        question: 'How often does a Paddington terrace need repointing?',
        answer:
          'There is no fixed interval that suits every terrace. Localised open joints, loose mortar and associated damp warrant assessment; sound joints do not need replacement just because they are old.',
      },
      {
        question: 'What should I check before heritage repairs in Paddington?',
        answer:
          'Confirm the property address, council, heritage listing and proposed work first. Check whether consent or an applicable exemption is needed before starting, including any separate State heritage requirements.',
      },
      {
        question: 'Why is my sandstone step flaking and wearing out?',
        answer:
          'Wear, moisture, salts and earlier repairs can all affect sandstone steps. Assess the remaining stone, support and safe use before choosing conservation repair or replacement. Keep people away from loose or unstable steps.',
      },
    ],
    nearbySlugs: ['woollahra', 'bondi', 'double-bay'],
  },
  'woollahra': {
    name: 'Woollahra',
    slug: 'woollahra',
    parentAreaName: 'Eastern Suburbs',
    parentAreaHref: '/areas/eastern-suburbs',
    metaTitle: 'Woollahra Heritage Masonry & Stone Restoration | Romans',
    metaDescription:
      'Woollahra masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Heritage masonry, sandstone restoration and retaining walls across Woollahra\'s period streets.',
    intro: [
      'For a Woollahra property with garden and boundary walls, show how the affected masonry relates to paths, garden levels and adjoining land. A freestanding garden wall and a wall holding back soil need different assessments.',
      'On a period home, record decorative stonework separately from ordinary wall repairs. Columns, copings and window details may require careful matching without replacing sound neighbouring material.',
    ],
    housingContext:
      'Terraces and freestanding homes can contain several generations of brick and stone repair. A visible crack does not establish hillside movement or failed drainage without examining the wall and site.',
    services: [
      'Victorian and Federation terrace restoration',
      'Sandstone retaining wall repair and rebuild',
      'Lime mortar repointing',
      'Heritage brick restoration',
      'Garden wall and boundary wall repair',
      'Chimney repair and rebuild',
    ],
    faqs: [
      {
        question: 'My sandstone retaining wall is bulging. Is that serious?',
        answer:
          'Bulging can indicate instability and needs prompt professional assessment. Keep clear of the wall and the area below it; do not excavate behind it or attempt to push it back. An engineer should consider support, loads and drainage.',
      },
      {
        question: 'Does Woollahra Council need approval for heritage masonry work?',
        answer:
          'Check the address and exact scope with the council before work. Heritage listing or conservation-area status can affect the approval pathway, and minor repair work is not automatically exempt.',
      },
      {
        question: 'Can you match the sandstone on my Federation home?',
        answer:
          'Provide views of the whole feature and close details of sound stone. Matching should consider texture, bedding, finish and dimensions as well as colour, with the proposed sample reviewed before work.',
      },
    ],
    nearbySlugs: ['paddington', 'double-bay', 'bondi'],
  },
  'bondi': {
    name: 'Bondi',
    slug: 'bondi',
    parentAreaName: 'Eastern Suburbs',
    parentAreaHref: '/areas/eastern-suburbs',
    metaTitle: 'Bondi Masonry & Salt Damage Repair | Romans',
    metaDescription:
      'Bondi masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Coastal masonry, salt damage repair and retaining walls across Bondi and Bondi Beach.',
    intro: [
      'For a Bondi apartment or home, identify whether the affected surface is brick, render or reinforced concrete. Similar-looking cracks and flaking can require very different investigations.',
      'An enquiry about a balcony should include the location and any existing engineering or strata reports. Do not go beneath loose concrete to obtain photographs; report falling material or exposed reinforcement promptly to building management.',
    ],
    housingContext:
      'Coastal exposure is relevant to material selection, but it does not prove that every defect is caused by salt. Leaks, detailing, previous repairs and the condition of concealed reinforcement may need investigation.',
    services: [
      'Concrete cancer treatment and repair',
      'Balcony spalling concrete restoration',
      'Salt-resistant rendering',
      'Retaining wall repair and drainage installation',
      'Rusted steel lintel replacement',
      'Coastal-grade masonry repairs',
    ],
    faqs: [
      {
        question: 'What is concrete cancer and why does it happen in Bondi?',
        answer:
          'The term commonly describes deterioration associated with corrosion of steel reinforcement. Spalling or rust stains warrant assessment, but the cause and extent cannot be confirmed from a suburb or photograph alone.',
      },
      {
        question: 'How long does a concrete repair last in a coastal environment?',
        answer:
          'No fixed service life can be promised from location alone. Durability depends on the cause, repair design, workmanship, exposure and maintenance. Ask for the proposed scope, limitations and maintenance requirements in writing.',
      },
      {
        question: 'Why does my render keep falling off?',
        answer:
          'Render can detach for several reasons, including moisture, poor adhesion or movement beneath it. Assess the substrate and water entry before choosing a replacement finish; keep clear of loose overhead sections.',
      },
    ],
    nearbySlugs: ['double-bay', 'paddington', 'woollahra'],
  },
  'double-bay': {
    name: 'Double Bay',
    slug: 'double-bay',
    parentAreaName: 'Eastern Suburbs',
    parentAreaHref: '/areas/eastern-suburbs',
    metaTitle: 'Double Bay Heritage Masonry & Stone Restoration | Romans',
    metaDescription:
      'Double Bay masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Heritage stone restoration, period home masonry and retaining walls across Double Bay and Bellevue Hill.',
    intro: [
      'For a Double Bay stonework enquiry, separate structural features from decorative ones. A retaining wall, porch column and paving surface may share a stone colour but have different loads and repair needs.',
      'If the home has been extended, include drawings or photographs of earlier work where available. Junctions between original masonry and later construction can be important when interpreting cracks or damp.',
    ],
    housingContext:
      'Garden levels, drainage outlets and limited equipment access can shape a stonework project. Record these constraints before comparing repair and rebuilding options.',
    services: [
      'Heritage sandstone restoration',
      'Period home facade repair',
      'Multi-level sandstone retaining walls',
      'Decorative stone element repair (columns, balustrades)',
      'Sandstone paving and stair repair',
      'High-end heritage masonry',
    ],
    faqs: [
      {
        question: 'Can you match aged sandstone on a 100-year-old home?',
        answer:
          'A sample can be compared for grain, colour, texture and tooling, but new stone may remain visibly different from weathered material. The repair approach should preserve sound existing stone wherever practical.',
      },
      {
        question: 'Do you work with architects on heritage restoration projects?',
        answer:
          'Share the architect or consultant scope with the enquiry, including drawings, material specifications and approval conditions. Confirm responsibilities for design, approvals and construction before agreeing the work.',
      },
      {
        question: 'How much does a sandstone retaining wall rebuild cost?',
        answer:
          'A useful quote needs wall dimensions, support conditions, access, drainage requirements and the proposed design. Excavation, disposal and protection of adjoining property can materially affect cost; a suburb-wide rate is not reliable.',
      },
    ],
    nearbySlugs: ['woollahra', 'bondi', 'paddington'],
  },

  // ===== North Shore area =====
  'mosman': {
    name: 'Mosman',
    slug: 'mosman',
    parentAreaName: 'North Shore',
    parentAreaHref: '/areas/north-shore',
    metaTitle: 'Mosman Heritage Masonry & Federation Home Restoration | Romans',
    metaDescription:
      'Mosman masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Federation home restoration, sandstone walls and heritage masonry across Mosman and Cremorne.',
    intro: [
      'For a Mosman home, note whether the enquiry concerns a roof-level chimney, facade or wall beside a sloping garden. These need different access arrangements and may need different specialist input.',
      'Photographs from safe ground level can show a chimney outline or a retaining wall in relation to the house. Include any earlier engineering reports rather than assuming a recurring crack needs another surface patch.',
    ],
    housingContext:
      'Stone garden features and period brickwork should be assessed for material condition as well as movement. A slope alone does not identify why a wall is cracking.',
    services: [
      'Federation home restoration',
      'Sandstone retaining wall rebuild',
      'Heritage brick and stone repointing',
      'Decorative stone restoration (pillars, balustrades)',
      'Chimney repair and rebuild',
      'Garden wall and boundary wall construction',
    ],
    faqs: [
      {
        question: 'My Federation home\'s chimney is cracked. Can you repair it?',
        answer:
          'A chimney assessment should consider stability, brick and mortar condition and the surrounding roof details. Do not climb onto the roof or remove loose masonry. Keep clear of falling material and seek urgent advice if the stack appears unstable.',
      },
      {
        question: 'Do you work on heritage-listed properties in Mosman?',
        answer:
          'Send the listing information and intended scope so the repair can be discussed against the property requirements. Confirm council and any State heritage approvals or exemptions before work begins.',
      },
      {
        question: 'Why does my sandstone retaining wall keep cracking?',
        answer:
          'Possible contributors include support movement, loading and water pressure, but a site assessment is needed to distinguish them. Repeated cracking is a reason to review the wall design and site conditions, not simply repoint again.',
      },
    ],
    nearbySlugs: ['neutral-bay', 'chatswood', 'lane-cove'],
  },
  'neutral-bay': {
    name: 'Neutral Bay',
    slug: 'neutral-bay',
    parentAreaName: 'North Shore',
    parentAreaHref: '/areas/north-shore',
    metaTitle: 'Neutral Bay Masonry & Brick Restoration | Romans',
    metaDescription:
      'Neutral Bay masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Period home masonry, brick restoration and retaining walls across Neutral Bay and Cremorne.',
    intro: [
      'For a Neutral Bay flat or apartment building, explain whether damage is inside an individual lot or on an external shared element. Include the building manager or strata contact when arranging access.',
      'Decorative render needs photographs of surviving profiles and earlier patches, while brick repairs need views of the joints and adjacent openings. Treat a damaged balcony as a structural enquiry rather than a decorative repair.',
    ],
    housingContext:
      'A building can combine original masonry, later render and concrete balconies. The assessment needs to distinguish these materials and any previous alterations before a repair system is selected.',
    services: [
      'Period home brick restoration',
      'Sandstone step and feature repair',
      'Lime mortar repointing',
      'Interwar render repair',
      'Balcony concrete cancer treatment',
      'Retaining wall repair',
    ],
    faqs: [
      {
        question: 'My apartment block has concrete cancer on the balconies. What\'s the process?',
        answer:
          'Notify the strata manager and arrange professional assessment, including engineering input for structural damage. Existing reports, safe access and a defined repair scope help contractors price the same work. Keep people clear of loose concrete.',
      },
      {
        question: 'Can you match Interwar decorative render?',
        answer:
          'Profiles and texture can be recorded and compared with a trial sample. Moisture and the condition of the background need checking first; matching the surface appearance does not resolve an underlying defect.',
      },
      {
        question: 'How do I know if my bricks need repointing?',
        answer:
          'Open or eroded joints, loose mortar and damp near joints are reasons to seek assessment. Do not rake or grind joints to test them. The extent of repair should follow inspection rather than the age of the building.',
      },
    ],
    nearbySlugs: ['mosman', 'chatswood', 'lane-cove'],
  },
  'chatswood': {
    name: 'Chatswood',
    slug: 'chatswood',
    parentAreaName: 'North Shore',
    parentAreaHref: '/areas/north-shore',
    metaTitle: 'Chatswood Masonry & Structural Repairs | Romans',
    metaDescription:
      'Chatswood masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Residential masonry, structural brickwork and concrete repairs across Chatswood and Artarmon.',
    intro: [
      'A Chatswood enquiry may concern an older house, an apartment or an occupied commercial frontage. Identify the building type and which part of the structure has changed before discussing a repair method.',
      'For cracks, note when they appeared and whether doors, windows or adjacent finishes have also changed. Dated photographs taken safely can support an assessment, but they do not identify the soil or establish structural safety.',
    ],
    housingContext:
      'At junctions between brick, concrete and newer additions, movement and detailing need consideration. A stair-step pattern does not by itself prove reactive clay or a need for underpinning.',
    services: [
      'Helical bar crack stitching',
      'Federation home brick restoration',
      'Commercial facade repair',
      'Defect rectification on newer builds',
      'Concrete repair and resurfacing',
      'Retaining wall construction',
    ],
    faqs: [
      {
        question: 'My brick wall has a stair-step crack. Is it serious?',
        answer:
          'The cause and significance need assessment in context, including the wall support, openings and any recent changes. Seek prompt professional advice for new or worsening cracking, bulging or loose material; do not rely on width alone.',
      },
      {
        question: 'What is helical bar stitching and how long does it last?',
        answer:
          'Helical bars are one possible engineered masonry repair. Suitability depends on the cause of cracking, ongoing movement and the wall condition; stitching is not a substitute for addressing a foundation or drainage problem.',
      },
      {
        question: 'Can you do commercial work with tenants still operating?',
        answer:
          'Discuss trading hours, loading access, emergency exits and any areas that may need to close. Occupancy and disruption depend on the assessed risks and agreed staging, not just the size of the visible repair.',
      },
    ],
    nearbySlugs: ['lane-cove', 'mosman', 'neutral-bay'],
  },
  'lane-cove': {
    name: 'Lane Cove',
    slug: 'lane-cove',
    parentAreaName: 'North Shore',
    parentAreaHref: '/areas/north-shore',
    metaTitle: 'Lane Cove Masonry & Home Restoration | Romans',
    metaDescription:
      'Lane Cove masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Home masonry, brick restoration and retaining walls across Lane Cove and Longueville.',
    intro: [
      'For a Lane Cove retaining wall, describe the change in ground level and what sits above and below it. Paths, driveways, neighbouring structures and drainage outlets can all affect the assessment.',
      'For a house with both stone and brick defects, photograph each material separately and show where they meet. Access through side passages or landscaped gardens should be discussed before equipment and material delivery are planned.',
    ],
    housingContext:
      'A wall retaining soil needs assessment of support, loads and drainage as well as its face. Older mortar and replacement stone should be specified from the existing material rather than from a standard suburban recipe.',
    services: [
      'Period home brick restoration',
      'Sandstone retaining wall repair',
      'Lime mortar repointing',
      'Chimney repair and rebuild',
      'Stone garden feature restoration',
      'Structural crack stitching',
    ],
    faqs: [
      {
        question: 'Do I need council approval for a retaining wall repair?',
        answer:
          'Requirements depend on the site, wall, proposed work and planning controls. Check with the council or an appropriate certifier before work and obtain engineering advice where structural adequacy is in question; do not rely on a single height threshold.',
      },
      {
        question: 'How long does a brick repoint take on an average Lane Cove home?',
        answer:
          'Duration depends on the amount of joint repair, access, preparation, weather and curing needs. Ask for a site-specific programme that states assumptions and any areas that will be unavailable during the work.',
      },
      {
        question: 'Can you do stonework and brickwork on the same job?',
        answer:
          'Include both elements in the enquiry so their relationship can be assessed. The eventual scope should distinguish materials, repair methods and any engineering requirements rather than treating every surface with the same mortar.',
      },
    ],
    nearbySlugs: ['chatswood', 'mosman', 'neutral-bay'],
  },

  // ===== Northern Beaches area =====
  'manly': {
    name: 'Manly',
    slug: 'manly',
    parentAreaName: 'Northern Beaches',
    parentAreaHref: '/areas/northern-beaches',
    metaTitle: 'Manly Coastal Masonry & Salt Damage Repair | Romans',
    metaDescription:
      'Manly masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Coastal masonry, salt damage treatment and concrete cancer repair across Manly and Fairlight.',
    intro: [
      'For a Manly balcony or external facade, describe the exposure and any recurring leaks as well as the visible damage. Building age alone does not establish the condition of concrete or reinforcement.',
      'Strata enquiries are easier to scope with the available condition report, affected elevations and access restrictions. Use existing photographs or safe ground-level views rather than approaching loose overhead material.',
    ],
    housingContext:
      'Marine exposure may be relevant to brick, render and reinforced concrete in different ways. A repair specification needs to address the actual defect and water pathways rather than relying on a coastal-labelled product.',
    services: [
      'Concrete cancer treatment and repair',
      'Salt-resistant rendering',
      'Balcony and parapet restoration',
      'Rusted lintel replacement',
      'Brick repointing with lime mortar',
      'Coastal-grade masonry repairs',
    ],
    faqs: [
      {
        question: 'My apartment balcony has crumbling concrete. How serious is it?',
        answer:
          'Crumbling balcony concrete may present falling-material and structural risks. Keep clear of the affected balcony and the area below, alert building management and arrange prompt professional assessment. Call emergency services if there is immediate danger.',
      },
      {
        question: 'What matters when planning concrete repairs in Manly?',
        answer:
          'The repair design should follow investigation of the deterioration, reinforcement and water entry. Material choice, preparation, protective details and maintenance all matter; a patch alone does not establish that the underlying problem is resolved.',
      },
      {
        question: 'Can you work on strata-managed apartment buildings?',
        answer:
          'Send the strata contact, existing reports and proposed scope with the enquiry. Confirm approvals, design responsibilities, resident access and safety restrictions before contracting the work.',
      },
    ],
    nearbySlugs: ['dee-why', 'avalon', 'mosman'],
  },
  'dee-why': {
    name: 'Dee Why',
    slug: 'dee-why',
    parentAreaName: 'Northern Beaches',
    parentAreaHref: '/areas/northern-beaches',
    metaTitle: 'Dee Why Concrete Cancer & Coastal Masonry | Romans',
    metaDescription:
      'Dee Why masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Concrete cancer repair, coastal masonry and apartment block restoration across Dee Why and Collaroy.',
    intro: [
      'For a Dee Why apartment building, distinguish damage at balconies, slab edges and render surfaces. A condition report and a marked-up elevation can make the scope clearer than isolated close-up photographs.',
      'If residents need to remain on site, identify entrances, parking and areas below the proposed work. A quotation should explain access and protection allowances as well as the visible repairs.',
    ],
    housingContext:
      'Coastal position is one exposure factor, not a diagnosis. Inspection should consider leaks, previous patches and the condition of the affected material before deciding on local repair or broader work.',
    services: [
      'Concrete cancer assessment and repair',
      'Apartment balcony restoration',
      'Strata-compliant masonry work',
      'Salt-resistant rendering',
      'Retaining wall repair',
      'Parapet and column repair',
    ],
    faqs: [
      {
        question: 'How do strata committees get a proper concrete cancer quote?',
        answer:
          'Obtain an appropriate condition assessment and defined scope, with engineering input where structural elements are affected. Give each contractor the same documents and ask them to identify access allowances, exclusions and uncertain quantities.',
      },
      {
        question: 'What is the difference between spalling and concrete cancer?',
        answer:
          'Spalling describes material breaking away from a surface. Concrete cancer is an informal term often used for reinforcement-corrosion damage. Spalling can have other causes, so the terms do not replace an assessment.',
      },
      {
        question: 'Do you provide warranties on concrete repair work?',
        answer:
          'Ask for any proposed contractual warranty, exclusions and maintenance requirements in writing before acceptance. A marketing statement should not substitute for the contract or applicable statutory rights, and no specific warranty is promised here.',
      },
    ],
    nearbySlugs: ['manly', 'avalon', 'chatswood'],
  },
  'avalon': {
    name: 'Avalon',
    slug: 'avalon',
    parentAreaName: 'Northern Beaches',
    parentAreaHref: '/areas/northern-beaches',
    metaTitle: 'Avalon Retaining Walls & Coastal Masonry | Romans',
    metaDescription:
      'Avalon masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Retaining walls, sandstone work and coastal masonry across Avalon, Palm Beach and Newport.',
    intro: [
      'For an Avalon wall or stone garden feature, show the slope, access route and nearby structures in the enquiry. Narrow or stepped access can affect excavation, material handling and protection of landscaping.',
      'A leaning retaining wall needs assessment before choosing between repair and rebuilding. Do not dig behind it to investigate drainage or add loads near the edge while its stability is uncertain.',
    ],
    housingContext:
      'Ground conditions, retained height, water management and loads influence retaining-wall design. Neither sandstone selection nor footing depth can be determined from the suburb alone.',
    services: [
      'Sandstone retaining wall construction',
      'Drainage and ag pipe installation',
      'Stone garden and pool surround work',
      'Coastal masonry repair',
      'Render repair and salt treatment',
      'Sandstone paving repair',
    ],
    faqs: [
      {
        question: 'My retaining wall is leaning. Can it be fixed without full demolition?',
        answer:
          'Possibly, but stability and the cause of movement must be assessed first. An engineer should consider the wall, footings, drainage and loads before deciding whether repair is viable. Keep people clear of an unstable wall.',
      },
      {
        question: 'What\'s the right stone for an Avalon retaining wall?',
        answer:
          'Stone selection should follow the wall design, exposure and desired finish. Size, strength, bedding and compatible construction details matter alongside appearance; a supplier sample is not a structural design.',
      },
      {
        question: 'How deep does a retaining wall footing need to be?',
        answer:
          'Footing dimensions require site-specific design considering ground conditions, wall geometry, loads and drainage. Do not use a generic depth or excavate beside an existing wall without appropriate professional advice.',
      },
    ],
    nearbySlugs: ['dee-why', 'manly', 'lane-cove'],
  },

  // ===== Inner West area =====
  'newtown': {
    name: 'Newtown',
    slug: 'newtown',
    parentAreaName: 'Inner West',
    parentAreaHref: '/areas/inner-west',
    metaTitle: 'Newtown Terrace Restoration & Brick Repointing | Romans',
    metaDescription:
      'Newtown masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Victorian terrace restoration, tuckpointing and heritage brick repair across Newtown and Enmore.',
    intro: [
      'For a Newtown terrace, identify which elevations can be accessed and whether the damaged wall adjoins another property. Front-facade work may be straightforward to photograph while side and rear conditions remain unknown.',
      'Surviving pointing, sill details and earlier repair patches help establish a suitable scope. Do not strip paint or remove mortar to uncover the original finish before the material and heritage implications have been considered.',
    ],
    housingContext:
      'A narrow terrace can contain different bricks and mortar from successive alterations. Repair choices should reflect those differences and the condition of each wall, not assume a single original mix throughout.',
    services: [
      'Victorian terrace lime mortar repointing',
      'Tuckpointing restoration',
      'Heritage brick replacement',
      'Sandstone sill and surround repair',
      'Iron lintel replacement',
      'Chimney repair',
    ],
    faqs: [
      {
        question: 'How much does repointing a Newtown terrace cost?',
        answer:
          'Cost depends on joint condition, access, decorative finishes and the extent of brick replacement. Provide elevations and any conservation scope, then compare written quotes with the same inclusions rather than relying on a typical terrace price.',
      },
      {
        question: 'Does Inner West Council need approval for terrace repointing?',
        answer:
          'Confirm the responsible council for the address and check the heritage status and work proposed. Like-for-like repointing is not automatically exempt; obtain any required confirmation before work starts.',
      },
      {
        question: 'Can you fix crumbling bricks without replacing them?',
        answer:
          'Some damaged faces may be conserved, while other bricks need replacement. The decision depends on depth of decay, structural role and moisture sources. A surface coating or filler should not be assumed to restore a failing brick.',
      },
    ],
    nearbySlugs: ['marrickville', 'leichhardt', 'balmain'],
  },
  'balmain': {
    name: 'Balmain',
    slug: 'balmain',
    parentAreaName: 'Inner West',
    parentAreaHref: '/areas/inner-west',
    metaTitle: 'Balmain Heritage Masonry & Sandstone Restoration | Romans',
    metaDescription:
      'Balmain masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Heritage terrace masonry, sandstone work and brick restoration across Balmain and Rozelle.',
    intro: [
      'For a Balmain cottage or terrace, show sandstone details in relation to adjoining brickwork. Damp at a wall base, a weathered sill and a cracked retaining wall are separate issues even if they occur on the same property.',
      'Where access is through the house or a narrow side passage, mention that early. Repair planning should account for occupants, shared boundaries and protection of original finishes.',
    ],
    housingContext:
      'Stone, brick and later cement patches may respond differently to moisture. Visible salts need investigation of the moisture source before cleaning, coatings or replacement materials are selected.',
    services: [
      'Heritage terrace brick restoration',
      'Sandstone retaining and feature walls',
      'Lime mortar repointing',
      'Sandstone step and sill repair',
      'Salt damage treatment on waterfront homes',
      'Chimney and flue work',
    ],
    faqs: [
      {
        question: 'My Balmain terrace has salt damage. What can be done?',
        answer:
          'Identify where moisture and salts are entering before selecting a treatment. A conservation assessment can guide drainage and compatible material repairs. Avoid abrasive cleaning or sealing the surface as an assumed cure.',
      },
      {
        question: 'Can you match sandstone on a 140-year-old Balmain workers cottage?',
        answer:
          'Compare sound existing stone for grain, texture, tooling and dimensions. A sample and the proposed repair detail should be reviewed before replacement is agreed; retaining sound original stone may be the better option.',
      },
      {
        question: 'How do I know if my terrace needs structural work or just cosmetic?',
        answer:
          'A photograph cannot establish whether damage is cosmetic. New or changing cracks, displaced masonry or loose material need professional assessment, particularly around openings and supports. Keep clear if a wall appears unstable.',
      },
    ],
    nearbySlugs: ['newtown', 'leichhardt', 'marrickville'],
  },
  'marrickville': {
    name: 'Marrickville',
    slug: 'marrickville',
    parentAreaName: 'Inner West',
    parentAreaHref: '/areas/inner-west',
    metaTitle: 'Marrickville Terrace & Warehouse Masonry | Romans',
    metaDescription:
      'Marrickville masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Terrace restoration, warehouse masonry and brick repointing across Marrickville and Dulwich Hill.',
    intro: [
      'A Marrickville warehouse enquiry should identify the intended use and any changes to openings or internal walls. Exposing brick for appearance is different from altering masonry that supports floors or roof elements.',
      'For an occupied shop or workshop, note delivery access, dust-sensitive areas and operating hours. For a terrace renovation, coordinate masonry assessment with proposed windows, services and drainage changes.',
    ],
    housingContext:
      'Older industrial brickwork can include repairs and alterations that are not obvious beneath finishes. Cleaning trials and structural review should precede assumptions about the finished surface or suitability for conversion.',
    services: [
      'Terrace lime mortar repointing',
      'Warehouse structural brick repair',
      'Commercial facade restoration',
      'Tuckpointing restoration',
      'Heritage brick matching and replacement',
      'Concrete repair and resurfacing',
    ],
    faqs: [
      {
        question: 'Can old warehouse brickwork be restored for residential conversion?',
        answer:
          'It may be possible, but a conversion needs assessment of the structure, condition and applicable approvals. Cleaning and repointing are only part of the scope; altered openings and changes of use need separate design consideration.',
      },
      {
        question: 'Do you do commercial masonry on buildings in operation?',
        answer:
          'An enquiry should set out operating hours, access restrictions and activities that cannot tolerate dust or noise. Safe occupancy and staging need agreement before work, and some areas may require temporary closure.',
      },
      {
        question: 'Is repointing worth it on a terrace that needs a full reno?',
        answer:
          'Assess the masonry before finalising the renovation scope. Necessary weatherproofing or structural work may affect other trades, while sound joints can be retained. Repointing is not automatically needed across the entire building.',
      },
    ],
    nearbySlugs: ['newtown', 'leichhardt', 'balmain'],
  },
  'leichhardt': {
    name: 'Leichhardt',
    slug: 'leichhardt',
    parentAreaName: 'Inner West',
    parentAreaHref: '/areas/inner-west',
    metaTitle: 'Leichhardt Terrace Restoration & Masonry | Romans',
    metaDescription:
      'Leichhardt masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Victorian terrace restoration, heritage repointing and tuckpointing across Leichhardt and Annandale.',
    intro: [
      'For a Leichhardt facade, photograph surviving fine-line pointing and sheltered joints before discussing restoration. Small intact sections can be useful references for the pattern and joint profile.',
      'If only one elevation is affected, identify where a staged repair could finish naturally. Changes in brick, previous patches and adjoining properties can influence how a new section will read.',
    ],
    housingContext:
      'Tuckpointing is a decorative finish rather than a cure for unstable or damp masonry. Assess brick condition and moisture first, then decide what original detail can be retained and what needs repair.',
    services: [
      'Tuckpointing restoration',
      'Lime mortar repointing',
      'Heritage brick replacement',
      'Sandstone sill, surround and step repair',
      'Iron lintel replacement',
      'Chimney repair and rebuild',
    ],
    faqs: [
      {
        question: 'What exactly is tuckpointing and how is it different from normal pointing?',
        answer:
          'Ordinary repointing renews deteriorated mortar joints. Tuckpointing adds a fine decorative line over a background joint finish. The appropriate treatment depends on the original detail and the condition of the wall.',
      },
      {
        question: 'How do I know if my terrace originally had tuckpointing?',
        answer:
          'Look for surviving lines in sheltered areas and older photographs without scraping or grinding the wall. A specialist can assess whether traces are original and whether a restoration sample is justified.',
      },
      {
        question: 'Can tuckpointing be done in sections or does the whole facade need doing?',
        answer:
          'Localised work may be suitable where surrounding masonry is sound. Agree the stopping points and compare a sample first, because colour and weathering differences can remain visible between stages.',
      },
    ],
    nearbySlugs: ['newtown', 'balmain', 'marrickville'],
  },

  // ===== Sydney Metro area =====
  'parramatta': {
    name: 'Parramatta',
    slug: 'parramatta',
    parentAreaName: 'Sydney Metro',
    parentAreaHref: '/areas/greater-sydney',
    metaTitle: 'Parramatta Commercial & Heritage Masonry | Romans',
    metaDescription:
      'Parramatta masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Commercial masonry, heritage restoration and structural repairs across Parramatta and Westmead.',
    intro: [
      'A Parramatta enquiry should distinguish a historic stone building from a later commercial facade or suburban brick home. Each needs a scope based on its construction and present condition.',
      'For commercial repairs, provide available reports and identify public access beneath the affected area. For historic fabric, include listing information and any conservation plan before discussing replacement or cleaning.',
    ],
    housingContext:
      'Cracks and surface deterioration can have several causes. The age of the building or its location does not determine whether a repair needs mortar work, structural design or investigation of moisture.',
    services: [
      'Heritage colonial sandstone restoration',
      'Commercial facade repair',
      'Concrete cancer treatment',
      'Structural crack stitching',
      'Heritage lime mortar repointing',
      'Retaining wall construction',
    ],
    faqs: [
      {
        question: 'Do you work on City of Parramatta Council heritage properties?',
        answer:
          'Provide the address, listing information and repair proposal. Confirm the relevant council and Heritage NSW requirements before work, including whether any exemption conditions apply to the particular scope.',
      },
      {
        question: 'My commercial building needs concrete cancer repair. How do we start?',
        answer:
          'Start with a condition assessment and engineering input for affected structural elements. Share reports and access requirements so a proposed scope can distinguish investigation, safety measures and the proposed repairs.',
      },
      {
        question: 'Can you do emergency structural work?',
        answer:
          'Do not wait for a routine quote if there is immediate danger: move away from unstable masonry and contact emergency services. For non-immediate structural concerns, arrange prompt professional assessment. Emergency attendance or availability is not promised on this page.',
      },
    ],
    nearbySlugs: ['strathfield', 'chatswood', 'lane-cove'],
  },
  'strathfield': {
    name: 'Strathfield',
    slug: 'strathfield',
    parentAreaName: 'Sydney Metro',
    parentAreaHref: '/areas/greater-sydney',
    metaTitle: 'Strathfield Masonry & Heritage Home Restoration | Romans',
    metaDescription:
      'Strathfield masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Brick repointing, sandstone and heritage masonry repair enquiries in Strathfield. Discuss materials, access and scope with Romans Building Services.',
    intro: [
      'For a Strathfield period home, show columns, balustrades and retaining walls separately from ordinary facade joints. A decorative appearance does not mean an element has no structural or safety role.',
      'Include earlier repair drawings or specifications where available. A replacement stone sample should be considered alongside the support detail and any conservation requirements.',
    ],
    housingContext:
      'Large features can contain concealed fixings and earlier repairs. Assess stability and material condition before deciding whether conservation, partial replacement or a more extensive intervention is appropriate.',
    services: [
      'Federation and Interwar home restoration',
      'Sandstone column and balustrade repair',
      'Heritage repointing',
      'Retaining wall construction',
      'Chimney rebuild',
      'Decorative stonework restoration',
    ],
    faqs: [
      {
        question: 'Can I enquire about a repair in Strathfield?',
        answer:
          'Send the suburb, photographs taken safely and a description of the affected masonry. Include access restrictions and any reports so assessment, scope and availability can be discussed.',
      },
      {
        question: 'Do you work on Strathfield Council heritage-listed homes?',
        answer:
          'Share the property listing and intended work, then confirm applicable approvals or exemption conditions before starting. A suburb guide cannot establish consent requirements for an individual property.',
      },
      {
        question: 'Can you restore decorative sandstone columns and balustrades?',
        answer:
          'An assessment should consider the stone, joints, fixings and structural role. Do not lean on a loose balustrade or disturb a cracked column; restrict access where stability is uncertain and seek professional advice.',
      },
    ],
    nearbySlugs: ['parramatta', 'newtown', 'chatswood'],
  },

  // ===== Sydney CBD area (additional) =====
  'pyrmont': {
    name: 'Pyrmont',
    slug: 'pyrmont',
    parentAreaName: 'Sydney CBD',
    parentAreaHref: '/areas/sydney-cbd',
    metaTitle: 'Pyrmont Masonry & Warehouse Conversion Work | Romans',
    metaDescription:
      'Pyrmont masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Warehouse conversion brickwork, heritage sandstone and apartment concrete work across Pyrmont and Darling Harbour.',
    intro: [
      'For a Pyrmont warehouse conversion, separate the wish to expose brick from any structural alterations. Original openings, later infill and finishes can affect what can safely be retained or revealed.',
      'Apartment enquiries should include the strata contact, available condition reports and the affected level or elevation. Balcony and facade access can be a major part of the scope.',
    ],
    housingContext:
      'Historic masonry and newer reinforced concrete need different assessment methods. Proximity to the water is relevant to exposure but does not prove corrosion or establish a repair method.',
    services: [
      'Warehouse conversion brick restoration',
      'Heritage sandstone repair (Pyrmont Point)',
      'Concrete cancer treatment on apartment blocks',
      'Structural brick repointing with matched mortar',
      'Steel lintel replacement in older buildings',
      'Strata-managed remedial work',
    ],
    faqs: [
      {
        question: 'Can old Pyrmont warehouse brickwork be exposed as a feature?',
        answer:
          'Potentially, following assessment of the brick, finishes and wall function. A small specialist cleaning trial can inform the finish; aggressive blasting or unplanned coating removal can damage original material and create hazardous dust.',
      },
      {
        question: 'Do you work with strata committees in Pyrmont?',
        answer:
          'Include the manager or committee contact and any approved investigation scope. Clarify who can authorise work, arrange access and obtain any required design or approval documents before a programme is agreed.',
      },
      {
        question: 'How serious is concrete cancer on a 20-year-old Pyrmont apartment?',
        answer:
          'Building age does not establish severity. Rust staining, exposed reinforcement or loose concrete should be assessed promptly, with engineering input for structural elements. Keep people clear of the affected area and falling material.',
      },
    ],
    nearbySlugs: ['ultimo', 'the-rocks', 'balmain'],
  },
  'ultimo': {
    name: 'Ultimo',
    slug: 'ultimo',
    parentAreaName: 'Sydney CBD',
    parentAreaHref: '/areas/sydney-cbd',
    metaTitle: 'Ultimo Terrace & Warehouse Masonry | Romans',
    metaDescription:
      'Ultimo masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Victorian terrace brick, warehouse masonry and heritage repointing across Ultimo and Chippendale.',
    intro: [
      'For an Ultimo terrace or converted warehouse, describe street access and whether the ground floor remains in commercial use. Frontage work may need to account for residents, customers and deliveries at the same time.',
      'If the budget is limited, identify the immediate concern and ask for a scope that separates necessary repairs from optional appearance work. A partial facade repair should still address relevant moisture and structural issues.',
    ],
    housingContext:
      'Mixed-use buildings can contain several phases of brickwork and repair. Review the existing material and heritage status before specifying removal of pointing, render or paint.',
    services: [
      'Victorian terrace repointing',
      'Tuckpointing restoration',
      'Warehouse conversion brick work',
      'Sandstone sill and surround repair',
      'Heritage brick replacement',
      'Structural lintel replacement',
    ],
    faqs: [
      {
        question: 'Is my Ultimo terrace heritage-listed?',
        answer:
          'Check the property address against council heritage mapping and the State Heritage Register. A building can be affected by conservation-area controls without being individually listed; confirm the proposed work requirements before starting.',
      },
      {
        question: 'Can you do just the front facade repointing if budget is tight?',
        answer:
          'A staged scope may be appropriate if the remaining masonry is sound and urgent defects are addressed. Discuss stopping points, access costs and the appearance of repaired sections rather than assuming the front is the only area needing attention.',
      },
      {
        question: 'How long does repointing an Ultimo terrace facade take?',
        answer:
          'Timing depends on joint condition, access, protection, weather and curing requirements. Ask for a programme based on inspection and the agreed scope, including any restrictions on using entrances or windows.',
      },
    ],
    nearbySlugs: ['pyrmont', 'newtown', 'darlinghurst'],
  },

  // ===== Eastern Suburbs area (additional) =====
  'coogee': {
    name: 'Coogee',
    slug: 'coogee',
    parentAreaName: 'Eastern Suburbs',
    parentAreaHref: '/areas/eastern-suburbs',
    metaTitle: 'Coogee Concrete Cancer & Coastal Masonry | Romans',
    metaDescription:
      'Coogee masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Concrete cancer, salt damage and coastal masonry restoration across Coogee, Clovelly and Bronte.',
    intro: [
      'For a Coogee coastal-facing wall, show the pattern of cracking or flaking across the whole elevation. Include a note about rain-related leaks and earlier repairs rather than assuming salt is the only cause.',
      'Apartment balcony concerns should go to building management with existing reports or safe photographs. Access below overhead defects needs to be controlled before close inspection.',
    ],
    housingContext:
      'Render, masonry and reinforced concrete may deteriorate for different reasons. Exposure, moisture paths and substrate condition should inform the specification instead of a single product recommendation for the suburb.',
    services: [
      'Concrete cancer repair on apartment blocks',
      'Balcony and parapet restoration',
      'Salt-resistant rendering',
      'Retaining wall repair and drainage',
      'Coastal-grade masonry work',
      'Strata-managed remedial programs',
    ],
    faqs: [
      {
        question: 'How common is concrete cancer in Coogee apartment blocks?',
        answer:
          'No local prevalence figure is established here. A condition inspection is more useful than building age or location for assessing a particular block. Rust stains, loose concrete and exposed reinforcement warrant prompt professional attention.',
      },
      {
        question: 'Can you work on strata-managed buildings in Coogee?',
        answer:
          'Send the strata contact, condition report and affected elevations with the enquiry. A proposed scope should address resident access, design requirements and any approval conditions before work is authorised.',
      },
      {
        question: 'Why does my render keep falling off on the ocean-facing wall?',
        answer:
          'Water entry, salts, poor adhesion and movement are possible contributors. Assess the wall and existing coating before choosing a replacement finish; breathable products alone do not resolve every cause of detachment.',
      },
    ],
    nearbySlugs: ['bondi', 'randwick', 'bellevue-hill'],
  },
  'randwick': {
    name: 'Randwick',
    slug: 'randwick',
    parentAreaName: 'Eastern Suburbs',
    parentAreaHref: '/areas/eastern-suburbs',
    metaTitle: 'Randwick Masonry & Heritage Home Restoration | Romans',
    metaDescription:
      'Randwick masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Federation home restoration, heritage brick and retaining walls across Randwick and Kensington.',
    intro: [
      'For a Randwick house with cracks, include the affected openings and any changes to adjoining paving or drainage. Mention recent renovations and when the change was first noticed.',
      'Retaining-wall enquiries need views of both the wall and the ground it supports, taken from a safe location. Nearby trees and buildings are relevant to assessment but should not be assumed to be the cause of movement.',
    ],
    housingContext:
      'Period masonry, additions and garden structures can have different support conditions. A repair decision should consider those relationships rather than treating every stepped crack as the same foundation problem.',
    services: [
      'Federation home brick restoration',
      'Sandstone detail and step repair',
      'Heritage repointing with lime mortar',
      'Retaining wall rebuild with drainage',
      'Helical bar crack stitching',
      'Chimney repair',
    ],
    faqs: [
      {
        question: 'My Randwick Federation home has stair-step cracks. What causes it?',
        answer:
          'Possible causes include support movement, thermal movement or issues around openings, among others. A professional assessment should identify the likely cause and whether engineering or ground investigation is needed before selecting a repair.',
      },
      {
        question: 'Do you work on heritage-listed properties in Randwick?',
        answer:
          'Include the property listing, conservation documents and intended scope. Confirm the applicable consent or exemption pathway before work; matching materials does not by itself establish that approval is unnecessary.',
      },
      {
        question: 'How much does a retaining wall rebuild cost in Randwick?',
        answer:
          'The quote needs a defined scope, site levels, access and design information. Drainage, excavation, disposal and protection of nearby structures can affect cost, so a general per-metre figure is not a reliable project price.',
      },
    ],
    nearbySlugs: ['coogee', 'bondi', 'woollahra'],
  },
  'bellevue-hill': {
    name: 'Bellevue Hill',
    slug: 'bellevue-hill',
    parentAreaName: 'Eastern Suburbs',
    parentAreaHref: '/areas/eastern-suburbs',
    metaTitle: 'Bellevue Hill Heritage Stone & Masonry | Romans',
    metaDescription:
      'Bellevue Hill masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Heritage stone restoration, period home masonry and multi-level retaining walls across Bellevue Hill and Rose Bay.',
    intro: [
      'For a Bellevue Hill property with extensive stonework, identify which features need assessment: a retaining wall, porch, balustrade or paving. Photograph the relationship between the feature and surrounding ground levels.',
      'Earlier alterations can affect drainage and support at the junction of old and new work. Drawings, repair records and the architect or consultant scope can help avoid specifying a cosmetic repair over a wider problem.',
    ],
    housingContext:
      'Weathered stone varies across sheltered and exposed faces. A matching sample needs to be considered alongside the structural detail and the amount of original fabric that can be retained.',
    services: [
      'Heritage sandstone restoration',
      'Multi-level retaining wall rebuild',
      'Decorative stone repair (columns, balustrades)',
      'Period home facade work',
      'Sandstone paving and stair repair',
      'High-end heritage masonry',
    ],
    faqs: [
      {
        question: 'Can you work with architects on heritage Bellevue Hill projects?',
        answer:
          'Provide the consultant brief, drawings and material requirements with the enquiry. Agree responsibilities for assessment, design, approvals and construction before committing to a repair programme.',
      },
      {
        question: 'How do you match weathered sandstone on a 100-year-old home?',
        answer:
          'Compare grain, bedding, texture, dimensions and tooling as well as colour. Trial samples help set realistic expectations; new stone may remain distinguishable from the surrounding weathered fabric.',
      },
      {
        question: 'My sandstone retaining wall is moving. Can it be saved?',
        answer:
          'An engineer needs to assess the cause and stability before deciding whether repair is viable. Keep clear of moving or bulging sections and avoid excavation or additional loads near the wall while it is being assessed.',
      },
    ],
    nearbySlugs: ['woollahra', 'double-bay', 'randwick'],
  },

  // ===== North Shore area (additional) =====
  'cremorne': {
    name: 'Cremorne',
    slug: 'cremorne',
    parentAreaName: 'Lower North Shore',
    parentAreaHref: '/areas/north-shore',
    metaTitle: 'Cremorne Heritage Masonry & Brick Restoration | Romans',
    metaDescription:
      'Cremorne masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Federation home restoration, heritage brick and retaining walls across Cremorne and Cammeray.',
    intro: [
      'For a Cremorne chimney enquiry, provide a safe ground-level view showing the stack and roofline. Close photographs are useful only if they already exist; do not climb to obtain them.',
      'For facade mortar repairs, include sheltered joints and visible earlier patches. Where a garden wall is also involved, describe levels and access separately so it is not treated as ordinary facade repointing.',
    ],
    housingContext:
      'Chimneys, brick walls and sandstone features need different assessment of exposure and support. Colour matching alone does not establish mortar compatibility or the extent of repair required.',
    services: [
      'Federation home repointing',
      'Sandstone retaining wall rebuild',
      'Heritage brick and stone restoration',
      'Chimney repair and rebuild',
      'Decorative stone repair',
      'Helical bar crack stitching',
    ],
    faqs: [
      {
        question: 'How do I know if my chimney needs repair?',
        answer:
          'Visible leaning, loose masonry, open joints or new cracks warrant assessment. Keep clear of any falling-material risk and seek urgent advice if the stack appears unstable; roof access should be left to appropriately equipped professionals.',
      },
      {
        question: 'Does North Sydney Council need approval for heritage repair work?',
        answer:
          'Check the address, listing status and proposed scope with the council before work. Heritage exemptions have conditions, and State-listed items may have additional requirements. Do not assume minor repairs are automatically exempt.',
      },
      {
        question: 'Can you match the original mortar colour on a 110-year-old Cremorne home?',
        answer:
          'Colour, texture, aggregate and joint profile should be compared with sound existing work. A trial panel can inform the choice, but compatibility with the brick and exposure is as important as the visual match.',
      },
    ],
    nearbySlugs: ['neutral-bay', 'mosman', 'lane-cove'],
  },
  'st-leonards': {
    name: 'St Leonards',
    slug: 'st-leonards',
    parentAreaName: 'North Shore',
    parentAreaHref: '/areas/north-shore',
    metaTitle: 'St Leonards Commercial Masonry & Facade Repair | Romans',
    metaDescription:
      'St Leonards masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Commercial facade work, concrete cancer and remedial masonry across St Leonards and Crows Nest.',
    intro: [
      'For a St Leonards commercial facade, identify entrances, loading bays and areas beneath the affected elevation. Access and protection can be significant even for a small patch high on the building.',
      'Supply any condition report and distinguish investigation from an agreed repair scope. Tenant hours, dust-sensitive uses and emergency exits should be part of planning rather than an afterthought.',
    ],
    housingContext:
      'Concrete, render and brickwork need separate assessment. A surface defect does not show the full extent of concealed deterioration, so quotations should identify assumptions and how additional findings would be handled.',
    services: [
      'Commercial facade restoration',
      'Concrete cancer repair',
      'Render removal and replacement',
      'Apartment balcony restoration',
      'Structural brick repair',
      'Strata remedial work',
    ],
    faqs: [
      {
        question: 'Can you do commercial facade work without disrupting tenants?',
        answer:
          'A disruption-free outcome cannot be assumed. Discuss staging, temporary exclusions, noise and dust controls with management and tenants before agreeing the work; some activities may need areas to close.',
      },
      {
        question: 'How do you price commercial remedial work?',
        answer:
          'A defined scope, measured areas, access requirements and design documents support a useful quote. Ask for clear allowances, exclusions and a process for additional defects found during investigation or opening up.',
      },
      {
        question: 'Do you work after-hours on commercial properties?',
        answer:
          'Discuss the required hours with the enquiry. Availability, building rules, consent conditions, noise restrictions and safe access all need confirmation before any after-hours programme is agreed.',
      },
    ],
    nearbySlugs: ['chatswood', 'lane-cove', 'neutral-bay'],
  },

  // ===== Northern Beaches area (additional) =====
  'collaroy': {
    name: 'Collaroy',
    slug: 'collaroy',
    parentAreaName: 'Northern Beaches',
    parentAreaHref: '/areas/northern-beaches',
    metaTitle: 'Collaroy Coastal Masonry & Concrete Cancer | Romans',
    metaDescription:
      'Collaroy masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Concrete cancer, salt damage and coastal masonry across Collaroy and Narrabeen.',
    intro: [
      'For a Collaroy beachfront property, mention recent storm damage, water entry and changes since earlier inspections. Show the affected element and surrounding area only from a safe position.',
      'Balconies, parapets and exposed slab edges need attention to falling-material risk as well as appearance. Where damage follows a storm, professional assessment should come before routine patching or coating.',
    ],
    housingContext:
      'Exposure varies with orientation, shelter and building details. A beachfront address alone does not identify the cause or severity of concrete, render or retaining-wall damage.',
    services: [
      'Concrete cancer assessment and repair',
      'Balcony and parapet restoration',
      'Salt-resistant render replacement',
      'Coastal masonry repointing',
      'Retaining wall repair',
      'Strata-managed remedial programs',
    ],
    faqs: [
      {
        question: 'How bad is salt damage in beachfront Collaroy apartments?',
        answer:
          'The extent needs inspection of the particular building. Exposure history, leaks and previous repairs are useful context; they do not replace assessment of loose concrete, reinforcement and structural condition.',
      },
      {
        question: 'What is the right render for a Collaroy beachfront home?',
        answer:
          'The render and coating specification should suit the substrate, exposure and moisture behaviour. Investigate why an existing finish failed before choosing another, rather than assuming a particular binder or paint is suitable everywhere.',
      },
      {
        question: 'How often should a Collaroy apartment block have a condition inspection?',
        answer:
          'Ask the building professional to set an inspection programme based on condition, exposure and repair history. New cracks, loose material or storm damage need attention when they appear rather than waiting for a calendar interval.',
      },
    ],
    nearbySlugs: ['dee-why', 'manly', 'avalon'],
  },
  'freshwater': {
    name: 'Freshwater',
    slug: 'freshwater',
    parentAreaName: 'Northern Beaches',
    parentAreaHref: '/areas/northern-beaches',
    metaTitle: 'Freshwater Coastal Masonry & Heritage Home Restoration | Romans',
    metaDescription:
      'Freshwater masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Heritage home restoration, coastal masonry and concrete work across Freshwater and Harbord.',
    intro: [
      'For a Freshwater home, describe which elevation faces the weather and whether the concern is mortar, render or stone steps. Shelter and drainage can differ considerably around one property.',
      'A step repair enquiry should show the whole flight, edges and adjoining paving. Keep off loose or unstable steps and use another safe route while their condition is assessed.',
    ],
    housingContext:
      'Material selection should follow the existing substrate, exposure and defect. Distance from the beach alone is not enough to prescribe a render system or decide how much masonry needs replacement.',
    services: [
      'Federation home brick restoration',
      'Coastal concrete repair',
      'Lime mortar repointing',
      'Retaining wall rebuild with drainage',
      'Salt-resistant rendering',
      'Chimney repair',
    ],
    faqs: [
      {
        question: 'Do I need the same materials as beachfront Manly for my Freshwater home?',
        answer:
          'Not necessarily. The actual exposure, substrate and moisture conditions should guide the specification. A sheltered brick wall and an exposed concrete balcony can need different treatment even on the same property.',
      },
      {
        question: 'Can you repair sandstone steps on a Freshwater Federation home?',
        answer:
          'The assessment should consider remaining stone, support, wear and safe use. Conservation repair or partial replacement may be possible, but the method cannot be selected from appearance alone.',
      },
      {
        question: 'How long does a Freshwater coastal render job last?',
        answer:
          'There is no dependable suburb-wide lifespan. The underlying cause, preparation, compatible materials, exposure and maintenance all affect performance. Ask for the proposed specification and maintenance advice rather than a fixed-years promise.',
      },
    ],
    nearbySlugs: ['manly', 'dee-why', 'collaroy'],
  },

  // ===== Inner West area (additional) =====
  'glebe': {
    name: 'Glebe',
    slug: 'glebe',
    parentAreaName: 'Inner West',
    parentAreaHref: '/areas/inner-west',
    metaTitle: 'Glebe Victorian Terrace Restoration | Romans',
    metaDescription:
      'Glebe masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Victorian terrace restoration, tuckpointing and heritage repointing across Glebe and Forest Lodge.',
    intro: [
      'For a Glebe terrace, record surviving decorative joints, sandstone sills and earlier repairs before preparing a facade scope. Sheltered sections can help establish the original appearance without disturbing the surface.',
      'If repointing and sandstone repairs are both proposed, ask for them to be distinguished in the scope. Access, protection of entrances and the setting of any trial panels also need planning.',
    ],
    housingContext:
      'Older terrace walls can include sound original mortar alongside local deterioration. Repair should respond to condition and compatible materials rather than assume every joint needs replacement.',
    services: [
      'Victorian terrace repointing',
      'Tuckpointing restoration',
      'Heritage brick replacement',
      'Sandstone sill and step repair',
      'Iron lintel replacement',
      'Chimney repair',
    ],
    faqs: [
      {
        question: 'How much does full tuckpointing restoration cost in Glebe?',
        answer:
          'Cost depends on the extent of deteriorated joints, decorative detail, brick repairs and access. Request a measured scope and sample requirements before comparing quotes; a frontage price alone can omit important work.',
      },
      {
        question: 'What is the best time of year to repoint in Sydney?',
        answer:
          'Suitable conditions depend on the specified mortar and protection arrangements. Heat, rain and drying conditions affect planning and curing, so agree the programme around the repair requirements rather than a fixed seasonal rule.',
      },
      {
        question: 'Can you match the original dark-and-white tuckpointing on my Glebe terrace?',
        answer:
          'A sample can be compared with surviving lines for colour, width and profile. Establish the original detail first, and agree the trial before extending decorative work across the facade.',
      },
    ],
    nearbySlugs: ['newtown', 'balmain', 'leichhardt'],
  },
  'surry-hills': {
    name: 'Surry Hills',
    slug: 'surry-hills',
    parentAreaName: 'Inner West',
    parentAreaHref: '/areas/inner-west',
    metaTitle: 'Surry Hills Terrace & Warehouse Masonry | Romans',
    metaDescription:
      'Surry Hills masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Victorian terrace restoration, warehouse masonry and heritage brickwork across Surry Hills and Redfern.',
    intro: [
      'For a Surry Hills terrace or warehouse, describe the frontage, lane access and building use. A repair above a shop entrance needs different protection and staging from work in an unoccupied courtyard.',
      'If exposed interior brick is the goal, include the existing finish and proposed use of the space. Removing coatings can reveal earlier alterations or fragile surfaces, so a trial should precede a whole-wall cleaning decision.',
    ],
    housingContext:
      'Terrace facades and warehouse walls can differ in structural role and finish. Access, original material and later alterations need to be understood before choosing a repair or cleaning method.',
    services: [
      'Victorian terrace repointing',
      'Tuckpointing restoration',
      'Warehouse conversion brick work',
      'Heritage brick replacement',
      'Sandstone sill and surround repair',
      'Structural brickwork repair',
    ],
    faqs: [
      {
        question: 'How do you handle tight access on Surry Hills terrace work?',
        answer:
          'Identify delivery routes, scaffold space and public access early. The contractor and relevant authorities need to confirm suitable access arrangements and any permits; a narrow street does not establish which system is safe or available.',
      },
      {
        question: 'Can you do warehouse brick cleaning for an exposed-brick interior?',
        answer:
          'Discuss the brick condition, coatings and intended finish first. Specialist trials can identify an appropriate method; abrasive blasting or uncontrolled grinding can damage brick and generate hazardous dust.',
      },
      {
        question: 'Does my Surry Hills terrace need council approval for repointing?',
        answer:
          'Confirm heritage status and the scope with the council before work. Like-for-like work may still require an exemption request or other approval, and State heritage requirements may also apply.',
      },
    ],
    nearbySlugs: ['darlinghurst', 'newtown', 'paddington'],
  },
  'erskineville': {
    name: 'Erskineville',
    slug: 'erskineville',
    parentAreaName: 'Inner West',
    parentAreaHref: '/areas/inner-west',
    metaTitle: 'Erskineville Terrace Restoration & Repointing | Romans',
    metaDescription:
      'Erskineville masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Victorian terrace restoration, heritage repointing and tuckpointing across Erskineville and Alexandria.',
    intro: [
      'For an Erskineville cottage or terrace, show the affected wall and the openings around it. Small frontages can still need careful access and protection of adjoining entrances.',
      'Cracks above a window should be assessed with the support detail and wider wall in view. Do not remove mortar, bricks or a lintel to investigate the cause yourself.',
    ],
    housingContext:
      'Older brick, later additions and replacement lintels may coexist within one house. A repair should reflect the actual construction rather than assume the same mortar or support detail throughout.',
    services: [
      'Victorian terrace repointing',
      'Workers cottage restoration',
      'Tuckpointing restoration',
      'Heritage brick replacement',
      'Rusted lintel replacement',
      'Sandstone sill repair',
    ],
    faqs: [
      {
        question: 'Are Erskineville workers cottages heritage-listed?',
        answer:
          'Check the address against the relevant council mapping and State Heritage Register. Individual listing and conservation-area status are different, and either may affect proposed work. Confirm the applicable requirements before starting.',
      },
      {
        question: 'How much does repointing an Erskineville worker cottage cost?',
        answer:
          'A quote needs the affected elevations, condition, access and any decorative pointing or replacement bricks. A smaller cottage is not automatically a simple repair; ask for the scope and exclusions in writing.',
      },
      {
        question: 'Why do my bricks crack above the window?',
        answer:
          'Lintel corrosion is one possibility, but support movement and other causes need consideration. Arrange assessment before choosing lintel replacement or crack repair, and keep clear if masonry appears loose or displaced.',
      },
    ],
    nearbySlugs: ['newtown', 'marrickville', 'glebe'],
  },

  // ===== Sydney Metro area (additional) =====
  'burwood': {
    name: 'Burwood',
    slug: 'burwood',
    parentAreaName: 'Sydney Metro',
    parentAreaHref: '/areas/greater-sydney',
    metaTitle: 'Burwood Masonry & Heritage Home Restoration | Romans',
    metaDescription:
      'Burwood masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Federation home restoration, heritage repointing and retaining walls across Burwood and Croydon.',
    intro: [
      'For a Burwood period-home repair, include the whole elevation and any decorative columns, sills or garden walls involved. Show earlier patches and explain whether cracks or damp have changed recently.',
      'If foundation movement is suspected, share existing reports and recent drainage or renovation history. Monitoring can contribute to investigation, but photographs or a short observation period do not prove that movement has ended.',
    ],
    housingContext:
      'Brickwork and stone features may have different supports and repair histories. Neither the suburb nor a stair-step crack identifies the soil type or establishes a need for crack stitching or underpinning.',
    services: [
      'Federation home repointing',
      'Heritage chimney repair',
      'Retaining wall rebuild with drainage',
      'Helical bar crack stitching',
      'Sandstone step and detail repair',
      'Structural brick restoration',
    ],
    faqs: [
      {
        question: 'Can I enquire about a repair in Burwood?',
        answer:
          'Send the suburb, safe photographs and a description of the repair. Mention access restrictions, existing reports and any listing information so assessment, scope and availability can be discussed.',
      },
      {
        question: 'Do you work on Burwood Council heritage-listed homes?',
        answer:
          'Provide the listing information and proposed scope for discussion. Confirm council and any State heritage requirements before work, including the conditions of any claimed maintenance exemption.',
      },
      {
        question: 'My Burwood home has stair-step cracks. Is it reactive clay?',
        answer:
          'Reactive soil is one possibility, not a diagnosis from the crack pattern. Professional assessment may need information on drainage, footings and ground conditions. Monitoring duration and any further investigation should be set for the particular property.',
      },
    ],
    nearbySlugs: ['strathfield', 'concord', 'homebush'],
  },
  'concord': {
    name: 'Concord',
    slug: 'concord',
    parentAreaName: 'Sydney Metro',
    parentAreaHref: '/areas/greater-sydney',
    metaTitle: 'Concord Masonry & Period Home Restoration | Romans',
    metaDescription:
      'Concord masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Federation and Interwar home restoration, repointing and retaining walls across Concord and Five Dock.',
    intro: [
      'For a Concord home, describe whether the concern is in the original building, an extension or a separate garden wall. Connections between these elements can help explain where investigation should start.',
      'If doors stick or cracks change with weather, record the dates and relevant conditions without attempting to alter the structure. Existing plans and drainage repairs are useful context for the assessor.',
    ],
    housingContext:
      'Period brickwork and sandstone details need assessment of both material condition and support. Repointing may address deteriorated joints, but it does not resolve every cause of cracking or damp.',
    services: [
      'Heritage lime mortar repointing',
      'Federation home chimney repair',
      'Retaining wall repair with drainage',
      'Helical bar crack stitching',
      'Sandstone restoration',
      'Brick replacement with matched stock',
    ],
    faqs: [
      {
        question: 'How do I check heritage requirements for a Concord property?',
        answer:
          'Requirements depend on the address, listing and proposed work rather than a general description of council strictness. Confirm the consent or exemption pathway with the council before repair starts.',
      },
      {
        question: 'How do I know if my Concord home has reactive clay?',
        answer:
          'Seasonal symptoms alone cannot establish soil type or the cause of movement. An appropriate professional can advise whether geotechnical investigation or monitoring is needed and how the findings should inform any repair.',
      },
      {
        question: 'Can you work with my architect or heritage consultant?',
        answer:
          'Share the consultant scope, drawings and approval conditions with the enquiry. Agree who is responsible for design, material samples, approvals and construction before proceeding.',
      },
    ],
    nearbySlugs: ['strathfield', 'burwood', 'homebush'],
  },
  'homebush': {
    name: 'Homebush',
    slug: 'homebush',
    parentAreaName: 'Sydney Metro',
    parentAreaHref: '/areas/greater-sydney',
    metaTitle: 'Homebush Masonry & Home Restoration | Romans',
    metaDescription:
      'Homebush masonry repair guidance. Discuss property condition, materials, access and assessment with Romans Building Services.',
    heroTagline:
      'Heritage home restoration, brick repointing and retaining walls across Homebush and Homebush West.',
    intro: [
      'For a Homebush masonry enquiry, show the affected facade, nearby openings and any sandstone details. Note whether the issue is isolated or also appears in an extension or boundary wall.',
      'If the house will be occupied, describe access routes and rooms alongside the proposed work. Scaffold, dust, noise and temporary restrictions need to be considered when agreeing the scope.',
    ],
    housingContext:
      'Brick, mortar and stone repairs should follow assessment of condition and moisture. Soil-related movement cannot be diagnosed by address, and underpinning should not be treated as the automatic next step for an active crack.',
    services: [
      'Heritage repointing',
      'Chimney repair and rebuild',
      'Retaining wall construction',
      'Helical bar crack stitching',
      'Federation home restoration',
      'Sandstone step and detail repair',
    ],
    faqs: [
      {
        question: 'Can I enquire about a repair in Homebush?',
        answer:
          'Send the suburb, photographs taken safely and a short description of the affected area. Include access restrictions and any existing reports so the assessment, scope and availability can be discussed.',
      },
      {
        question: 'How much does heritage repointing cost on a Homebush Federation home?',
        answer:
          'Price depends on the extent of repair, access, brick or stone replacement and any decorative finish. Ask for a written scope following assessment rather than using a standard front-facade or whole-house price.',
      },
      {
        question: 'Can you do the work while we are living in the house?',
        answer:
          'Possibly, but this depends on the work and site risks. Agree safe access, dust and noise controls and any exclusion areas before work. Some rooms or external areas may be unavailable, and continued occupancy cannot be promised in advance.',
      },
    ],
    nearbySlugs: ['strathfield', 'burwood', 'concord'],
  },
};

export function getSuburb(slug: string): SuburbPageProps | undefined {
  const data = SUBURBS[slug];
  if (!data) return undefined;
  const nearby = data.nearbySlugs
    .map((s) => SUBURBS[s])
    .filter(Boolean)
    .map((s) => ({ name: s.name, href: `/suburbs/${s.slug}` }));
  const { nearbySlugs: _unused, ...rest } = data;
  void _unused;
  return { ...rest, nearbySuburbs: nearby };
}

export const SUBURB_SLUGS = Object.keys(SUBURBS);

export function getAllSuburbs(): Array<{ name: string; slug: string; parentAreaName: string; metaDescription: string }> {
  return Object.values(SUBURBS).map((s) => ({
    name: s.name,
    slug: s.slug,
    parentAreaName: s.parentAreaName,
    metaDescription: s.metaDescription
  }));
}

// Convenience export: suburbs grouped by parent area slug (without the /areas/ prefix)
export function getSuburbsForArea(parentHref: string): Array<{ name: string; slug: string }> {
  return Object.values(SUBURBS)
    .filter((s) => s.parentAreaHref === parentHref)
    .map((s) => ({ name: s.name, slug: s.slug }));
}
