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
      'Sandstone restoration, heritage repointing and masonry repairs in The Rocks. Romans works on colonial sandstone buildings and heritage-listed properties.',
    heroTagline:
      'Colonial sandstone restoration, heritage repointing and masonry repairs in Sydney\'s oldest neighbourhood.',
    intro: [
      'The Rocks has some of the oldest sandstone buildings in Australia. Many of them date back to the 1820s, and most are heritage-listed. Working here means understanding how colonial stonemasons built things, what lime mortars they used, and how to repair damage without destroying what makes these buildings important.',
      'We have worked in The Rocks for over two decades. Whether it\'s a terrace on Playfair Street, a sandstone pub facade, or a warehouse that\'s been converted into apartments, the job is always the same: match what\'s there, repair properly, and leave it looking as if nothing happened.',
      'Council and heritage approvals in The Rocks are strict. We handle the paperwork, the sourcing of matching sandstone, and the mortar mix design. You don\'t have to chase us for compliance — it\'s part of the job.',
    ],
    housingContext:
      'Buildings in The Rocks are almost all sandstone or sandstone with brick infill. Mortar is soft lime-based — using modern cement-based mortar on these buildings will trap moisture and destroy the stone over time. We mix traditional lime mortars on site, matched to the original. Sandstone here is typically Hawkesbury or Pyrmont stone, both with distinct grain and colour that need careful matching for any replacement blocks.',
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
          'Yes. We have worked on heritage-listed sandstone buildings in The Rocks for over 20 years. We understand Sydney Harbour Foreshore Authority requirements and prepare the documentation needed for approval.',
      },
      {
        question: 'Why does my old building need lime mortar instead of cement?',
        answer:
          'Old sandstone and brick buildings were built to breathe. Cement mortar is too rigid and traps moisture, which accelerates damage to the stone. Lime mortar is softer, flexes with the building, and allows moisture to escape. Using the wrong mortar can halve the life of a heritage wall.',
      },
      {
        question: 'Can you match original Hawkesbury sandstone?',
        answer:
          'Yes. We source Hawkesbury sandstone from quarries that still supply it and match the grain, colour and finish to the existing stone. For heritage work, we also patina new stone so it blends with weathered surrounding stone.',
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
      'Heritage masonry, sandstone restoration and commercial facade repairs in Circular Quay. Romans handles historic buildings and waterfront properties.',
    heroTagline:
      'Heritage sandstone, historic commercial facades and waterfront masonry repairs at Circular Quay.',
    intro: [
      'Circular Quay is where Sydney began, and the buildings here show it. From the Customs House to the warehouses along the waterfront, almost everything is sandstone, brick, or a mix of both. Salt air and foot traffic take their toll on masonry, and regular maintenance is the difference between a building that stands for another 150 years and one that needs major intervention.',
      'We do a lot of sandstone facade work at Circular Quay. Salt efflorescence, spalling, mortar erosion — these are normal on waterfront buildings, and they\'re all fixable if you catch them early. We also handle structural cracks, which are common in older commercial buildings that have been renovated multiple times.',
      'Tight access, tourist foot traffic and strict heritage rules mean Circular Quay jobs take planning. We coordinate with building management, council and heritage authorities so the work gets done without disruption.',
    ],
    housingContext:
      'Commercial sandstone buildings dominate the area. Many have been extended or altered over 150 years, which creates complex structural situations. Salt crystallisation is a constant issue — stone at the base of buildings often needs replacement every few decades. We use breathable lime-based consolidants to slow salt damage and hand-cut replacement blocks where stone is beyond repair.',
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
          'Salt damage needs breathable materials. We use lime-based mortars and breathable consolidants so moisture can escape the stone rather than crystallising inside it. Where stone is too damaged, we cut it out and replace with matching sandstone.',
      },
      {
        question: 'Can you work on commercial buildings while tenants are on site?',
        answer:
          'Yes. We stage work, use containment where needed and work around tenant hours. Most commercial masonry jobs in Circular Quay are done without tenants noticing much beyond the scaffold.',
      },
      {
        question: 'Who approves heritage work at Circular Quay?',
        answer:
          'Depending on the building, it could be Sydney Harbour Foreshore Authority, City of Sydney Council, or the NSW Heritage Council. We handle the applications and work to the approved scope.',
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
      'Victorian terrace restoration, brick repointing and heritage masonry in Darlinghurst. Romans works on period homes and converted warehouses.',
    heroTagline:
      'Victorian terrace brick restoration, tuckpointing and heritage masonry across Darlinghurst.',
    intro: [
      'Darlinghurst is one of the most architecturally rich suburbs in inner Sydney. Victorian terraces, Federation-era buildings and old warehouses sit next to each other, and each one has its own quirks. A lot of our Darlinghurst work is brick repointing — the original lime mortar in these terraces has been crumbling for decades, and cement patches made things worse.',
      'We also handle a lot of tuckpointing restoration in Darlinghurst. That\'s the decorative fine-line pointing you see on higher-end Victorian terraces — black mortar with a thin white line running through it. When it\'s done well, it\'s one of the most beautiful brickwork finishes there is. When it\'s done badly, it ruins the whole facade.',
      'If you own a terrace in Darlinghurst, the best thing you can do is get the brickwork properly assessed. We\'ll tell you what actually needs doing, what can wait, and roughly what it should cost.',
    ],
    housingContext:
      'Darlinghurst is dominated by Victorian terraces from the 1870s-1890s and Federation buildings from 1900-1915. Most were built with soft handmade bricks and lime mortar. Many have been incorrectly repointed with cement mortar over the decades, which traps moisture and damages the bricks. Proper restoration means removing the bad cement mortar, matching the original lime mix and repointing to the correct profile — often tuckpointed for higher-end terraces.',
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
          'Tuckpointing is a decorative technique where a dark mortar is applied to the joints, then a thin fillet of white putty is run through the centre to create the illusion of very fine, precise brickwork. Many Darlinghurst Victorian terraces have it — if your brickwork has fine white lines running through dark joints, that\'s tuckpointing.',
      },
      {
        question: 'Should I remove the cement pointing and replace it with lime?',
        answer:
          'Usually, yes. Cement mortar on old soft brick causes moisture to sit in the bricks and accelerates decay. Removing the cement and repointing with lime is one of the most effective long-term things you can do for a Victorian terrace.',
      },
      {
        question: 'Can you match crumbling bricks on a 140-year-old terrace?',
        answer:
          'Yes. We source reclaimed handmade bricks or cut old bricks to match. For bricks that need to be visible, matching is critical — we colour-match and test samples before any work starts.',
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
      'Victorian terrace restoration, tuckpointing and heritage masonry in Paddington. Romans handles period brick and sandstone across the Eastern Suburbs.',
    heroTagline:
      'Victorian terrace brick restoration and tuckpointing across Paddington\'s heritage streetscapes.',
    intro: [
      'Paddington has some of the most photographed terrace streetscapes in Australia. Five Ways, Underwood Street, the rows along Hargrave Street — these terraces are the reason Paddington looks the way it does. Looking after them properly takes patience and the right materials.',
      'We work on Paddington terraces constantly. The big jobs are repointing and tuckpointing restoration. The bricks are usually handmade and soft, and the original lime mortar has weathered out of most joints. Many terraces had cement pointing done in the 70s and 80s, which locks moisture into the bricks and accelerates decay. Removing that cement and repointing properly is one of the most common jobs we do here.',
      'We also handle sandstone repairs on the grander terraces — steps, window surrounds, decorative details. And retaining walls are common in the hilly sections, especially around the eastern edge of the suburb.',
    ],
    housingContext:
      'Paddington is almost entirely Victorian terraces from 1870-1900, most with cast-iron lacework, sandstone detailing and tuckpointed brickwork. The bricks are soft handmade Sydney sand-struck bricks. Most terraces have had at least one bad repointing attempt — usually cement mortar that traps moisture. Correct restoration means lime mortar matched to the original, and tuckpointed where appropriate. Iron lintel rust and sandstone step wear are common.',
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
          'Properly done lime repointing lasts 40-60 years. If you\'re looking at a Paddington terrace that still has its original lime mortar, it might be ready now. Cement-pointed terraces often need it sooner because the cement causes brick damage that needs fixing too.',
      },
      {
        question: 'Do you work on Paddington Council heritage-listed properties?',
        answer:
          'Yes. We work to Woollahra Council and NSW Heritage requirements. We\'ll prepare documentation, use approved materials and source matching bricks and sandstone.',
      },
      {
        question: 'Why is my sandstone step flaking and wearing out?',
        answer:
          'Sandstone wears from foot traffic and weathers from rain. For steps that are still structurally sound, we can consolidate and repair. For steps that have lost too much stone, we cut and install replacement stone matched to the original.',
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
      'Heritage terrace restoration, sandstone and brick masonry in Woollahra. Romans works on period homes and retaining walls across the Eastern Suburbs.',
    heroTagline:
      'Heritage masonry, sandstone restoration and retaining walls across Woollahra\'s period streets.',
    intro: [
      'Woollahra has some of Sydney\'s best-preserved Victorian and Federation streetscapes. Queen Street, Moncur Street, Ocean Street — these streets are full of terraces and freestanding period homes that need careful work to stay in shape. Council takes heritage seriously here, and so do we.',
      'Our Woollahra work is a mix of heritage repointing, sandstone repair, and retaining walls. A lot of properties sit on sloped blocks, which means retaining walls have been a feature of this suburb for over a century. Many of the old walls are failing and need rebuilding with proper drainage.',
      'Where a Paddington terrace is often a squeezed row job, a Woollahra property is more likely to be a freestanding home with boundary walls, garden walls and outbuildings. Each one adds complexity and character.',
    ],
    housingContext:
      'Woollahra has a mix of Victorian terraces, large freestanding Federation homes and some interwar Georgian revival houses. Many properties have significant sandstone retaining walls and garden features. Brick is a mix of handmade and early pressed. Repointing usually requires lime mortar. Sandstone sourcing for repairs is important — we match to the grain and weathering of existing stone. Hillside movement is a common issue that shows up as cracks in boundary walls.',
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
          'Bulging retaining walls usually mean the drainage behind has failed and water pressure is pushing the wall out. It can be serious if left — walls can collapse. We assess the drainage, check the footing, and rebuild or stabilise the wall as needed.',
      },
      {
        question: 'Does Woollahra Council need approval for heritage masonry work?',
        answer:
          'For most heritage properties, yes. Exempt and complying development covers minor work, but anything that changes the appearance of a heritage building usually needs a development application. We help with documentation.',
      },
      {
        question: 'Can you match the sandstone on my Federation home?',
        answer:
          'Yes. Most Eastern Suburbs Federation homes used Sydney sandstone, which is still quarried. We match the grain and tool-marks of the original stone and weather-match where needed for visible repairs.',
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
      'Coastal masonry repairs, salt damage treatment and retaining walls in Bondi. Romans handles apartment blocks and homes across Sydney\'s east.',
    heroTagline:
      'Coastal masonry, salt damage repair and retaining walls across Bondi and Bondi Beach.',
    intro: [
      'Bondi is tough on buildings. The salt air eats mortar, rusts lintels and cracks render. We see a lot of spalling concrete on apartment blocks along Campbell Parade, failing retaining walls in the streets running down to the beach, and crumbling brickwork on older homes in North Bondi.',
      'The biggest issue is concrete cancer. Apartment blocks built in the 60s and 70s are the worst. The steel reinforcement inside the concrete rusts because of salt, expands, and cracks the concrete off the steel. Left alone, it gets serious. We cut out the damaged concrete, treat the steel, and patch with salt-resistant mortar so it holds up.',
      'We also do a lot of retaining wall work around Bondi. The hilly blocks mean walls are everywhere, and many are tilting or leaning because the drainage has failed. Proper drainage and ag pipes behind the wall is what makes them last.',
    ],
    housingContext:
      'Bondi has a mix of older Federation homes, 1960s-70s apartment blocks, and newer builds. Salt damage affects everything: steel lintels in older homes, reinforced concrete in apartments, and mortar in brickwork. Render is often spalling on coastal-facing walls. Concrete cancer on apartment balconies is a very common job. Retaining walls on sloped streets frequently fail due to drainage issues behind them.',
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
          'Concrete cancer is when steel reinforcement inside concrete rusts, expands, and pushes the concrete off. Salt air speeds it up dramatically — most Bondi apartment blocks built before 1990 will have it somewhere. We cut out the damaged concrete, treat the steel with a corrosion inhibitor, and repair with salt-resistant mortar.',
      },
      {
        question: 'How long does a concrete repair last in a coastal environment?',
        answer:
          'Done properly with anti-corrosion treatment and salt-resistant mortars, 20-30 years is realistic. Done poorly, it can fail in 5 years. The quality of the steel treatment and the patch mortar matters more than anything else.',
      },
      {
        question: 'Why does my render keep falling off?',
        answer:
          'Salt crystallising inside the wall pushes render off from the inside. The fix is to remove the failed render, treat the underlying brick or block, and re-render with a salt-resistant mix. Painting over it just traps more salt.',
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
      'Heritage stone restoration, period home masonry and retaining walls in Double Bay. Romans works on high-end properties in Sydney\'s east.',
    heroTagline:
      'Heritage stone restoration, period home masonry and retaining walls across Double Bay and Bellevue Hill.',
    intro: [
      'Double Bay and the surrounding streets — Bellevue Hill, Point Piper, Rose Bay — have some of the most significant period homes in Sydney. These properties need tradespeople who understand heritage work and who can be trusted on site. We\'ve been working in these suburbs for over 20 years.',
      'Our Double Bay work is mostly heritage restoration on Federation and Interwar homes. Sandstone detailing is big here — columns, window surrounds, steps, retaining walls. A lot of it is badly weathered or has been repaired incorrectly in the past.',
      'We also do significant retaining wall work. The sloped blocks down to the harbour mean many properties have multiple levels of stone retaining walls. When one fails, it can affect the whole property. We rebuild properly with correct drainage and footings so the job doesn\'t come back.',
    ],
    housingContext:
      'Double Bay and surrounds have Federation, Interwar and some Victorian homes. Most are freestanding on large blocks with significant stonework — retaining walls, garden walls, columned porches. Sandstone is the dominant material, usually Sydney sandstone. Many properties have been renovated multiple times, sometimes badly, which creates layered problems. Heritage conservation areas are strict on what\'s allowed.',
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
          'Yes. We source Sydney sandstone and weather-match visible repairs so they blend with the aged stone. For non-visible structural repairs, standard new stone is fine.',
      },
      {
        question: 'Do you work with architects on heritage restoration projects?',
        answer:
          'Regularly. Many of our Double Bay jobs are run through architects or heritage consultants. We\'re comfortable working to spec, attending site meetings and delivering to the agreed scope.',
      },
      {
        question: 'How much does a sandstone retaining wall rebuild cost?',
        answer:
          'Varies with size, stone sourcing and access, but typically $2,500-4,000 per square metre for heritage-quality work. We quote per job after inspection so you get an accurate figure.',
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
      'Federation home restoration, sandstone masonry and retaining walls in Mosman. Romans works on heritage properties across Sydney\'s Lower North Shore.',
    heroTagline:
      'Federation home restoration, sandstone walls and heritage masonry across Mosman and Cremorne.',
    intro: [
      'Mosman is Federation home country. Big blocks, big houses, lots of sandstone and brick. Many of these properties were built between 1900 and 1930, and most have had multiple rounds of renovation over the decades. That creates layered problems — old damage, newer repairs that didn\'t work, and original features that need proper restoration.',
      'We do a lot of sandstone restoration in Mosman. Feature walls, retaining walls, pillars, steps, window surrounds. The stone is usually Sydney sandstone, and when it\'s weathered badly or been repaired with cement patches, proper restoration means going back to traditional techniques and materials.',
      'Retaining walls are a constant in Mosman. The sloped blocks and harbour views come with walls everywhere, and when they fail, they take the garden with them. We rebuild with correct drainage so the problem doesn\'t come back.',
    ],
    housingContext:
      'Mosman has Federation homes from 1900-1915, Interwar homes from 1920s-40s, and some earlier Victorian houses. Sandstone retaining walls, columns and decorative stonework are common. Brick is typically early pressed. Sloped blocks mean water management is critical — most failures come from bad drainage behind walls. Heritage conservation areas cover much of the suburb.',
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
          'Yes. We rebuild or partially rebuild Federation chimneys using matched brick and lime mortar. We also install new flashing and cowls so water stops being the cause of the cracks.',
      },
      {
        question: 'Do you work on heritage-listed properties in Mosman?',
        answer:
          'Yes. We work to Mosman Council heritage requirements and have done many jobs on heritage-listed homes across the suburb. We prepare the documentation and use matched materials.',
      },
      {
        question: 'Why does my sandstone retaining wall keep cracking?',
        answer:
          'Usually drainage. Water building up behind a wall creates pressure that cracks the stone. The fix is to expose the back of the wall, install ag pipe drainage and a drainage blanket, then rebuild properly. Without drainage, any rebuild will crack again.',
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
      'Period home masonry, brick restoration and retaining walls in Neutral Bay. Romans works on Federation and Interwar homes across the Lower North Shore.',
    heroTagline:
      'Period home masonry, brick restoration and retaining walls across Neutral Bay and Cremorne.',
    intro: [
      'Neutral Bay sits between Mosman and North Sydney, and the building stock reflects that. Federation homes on the leafy streets, Interwar apartment blocks closer to the ferry, and a lot of brick-and-stone terraces and duplexes throughout. Each type has its own issues.',
      'Brick restoration is the big one in Neutral Bay. The handmade bricks used in pre-1940 buildings are soft and need lime mortar to breathe. When those buildings have been repointed with cement, the bricks deteriorate and need attention before they get worse.',
      'We also do a lot of sandstone work — steps, window surrounds, retaining walls. Neutral Bay has some lovely period sandstone that\'s worth restoring properly.',
    ],
    housingContext:
      'Neutral Bay has Federation homes from early 1900s, Interwar flats from 1920s-30s, and some 1960s-70s apartment blocks. Pre-war buildings need lime mortar and careful brick matching. Interwar flats often have decorative render that\'s now cracking. Apartment blocks from the 60s-70s commonly have concrete cancer on balconies.',
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
          'We start with an assessment — how widespread, how deep, how urgent. Then we cut out damaged concrete, treat the exposed steel, and patch with salt-resistant mortar. On a strata property, we coordinate with the committee and building manager.',
      },
      {
        question: 'Can you match Interwar decorative render?',
        answer:
          'Yes. Interwar render patterns — roughcast, bagged, float-finished — all have their own technique. We match the profile and colour so repairs blend in.',
      },
      {
        question: 'How do I know if my bricks need repointing?',
        answer:
          'If you can poke a key into the mortar and it crumbles, the joints are failing. Water stains inside the house, or moss growing on the outside of the wall, are also signs. Get it looked at before water starts causing brick damage.',
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
      'Residential masonry, structural repairs and brickwork in Chatswood. Romans handles homes, apartments and commercial buildings on the Upper North Shore.',
    heroTagline:
      'Residential masonry, structural brickwork and concrete repairs across Chatswood and Artarmon.',
    intro: [
      'Chatswood mixes older Federation and Interwar homes with a lot of newer residential and commercial builds. On the older properties we do repointing, brick replacement and structural work. On newer builds we handle defect rectification — cracked walls, failed lintels, poor drainage issues that show up a few years after completion.',
      'The clay soil in parts of Chatswood causes movement. When soil shifts, brick walls crack. We stitch cracks using helical bars, which hold the wall together without major demolition, and we work out what\'s causing the movement so it can be addressed.',
      'Commercial buildings around the train station and along the Pacific Highway often need facade work, concrete repairs and strata-approved maintenance. We handle the paperwork and the site access coordination so it runs smoothly.',
    ],
    housingContext:
      'Chatswood has a mix of pre-war homes in the quiet streets and modern residential and commercial in the centre. Reactive clay soils in some pockets cause foundation movement, which leads to cracked brick walls. New builds from the past 20 years sometimes have poorly detailed brickwork that fails at the junction of different materials.',
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
          'Stair-step cracks usually mean foundation movement. Small cracks can be monitored and stitched. Large growing cracks may indicate a bigger footing issue — we\'ll assess and advise whether structural engineering input is needed.',
      },
      {
        question: 'What is helical bar stitching and how long does it last?',
        answer:
          'Helical bars are stainless steel spiral bars bedded into horizontal mortar joints across the crack. They hold the wall together while allowing small future movements. Done properly, they\'re a permanent repair — the wall stays together for the life of the building.',
      },
      {
        question: 'Can you do commercial work with tenants still operating?',
        answer:
          'Yes. We stage work around tenant hours, use containment for dust and coordinate with building management. Most commercial masonry work in Chatswood is done without tenants noticing.',
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
      'Home masonry, brick repointing and retaining walls in Lane Cove. Romans handles period homes and concrete repairs across the Lower North Shore.',
    heroTagline:
      'Home masonry, brick restoration and retaining walls across Lane Cove and Longueville.',
    intro: [
      'Lane Cove is mostly residential — Federation and Interwar homes on leafy streets, with pockets of newer development. Our work here is usually on the older housing stock: brick repointing, sandstone step repair, retaining walls and chimney work.',
      'The sloped blocks around Longueville and down toward the river mean retaining walls are a common feature, and many of the older ones are failing. We rebuild with proper drainage so the wall holds up for decades rather than needing repair every few years.',
      'Lane Cove also has a fair amount of sandstone in garden features, fence walls and house detailing. Keeping these in good condition is about catching weathering early and doing targeted repairs before small problems become big ones.',
    ],
    housingContext:
      'Lane Cove has Federation homes from 1900-1915, Interwar homes from 1920s-40s, some Victorian, and newer infill builds. Sandstone retaining walls are common due to sloped blocks. Clay soils in some pockets cause foundation movement. Older buildings use lime mortar and handmade brick that needs careful treatment.',
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
          'For most like-for-like repairs, no. For walls over 600mm or new construction, usually yes. We\'ll tell you what applies to your specific job and handle the documentation if it\'s needed.',
      },
      {
        question: 'How long does a brick repoint take on an average Lane Cove home?',
        answer:
          'Typical single-storey Federation home takes 2-4 weeks depending on size and access. That includes raking out old mortar, cleaning, repointing and curing. We work in stages so the house stays watertight.',
      },
      {
        question: 'Can you do stonework and brickwork on the same job?',
        answer:
          'Yes. Most Lane Cove period homes have both, and we handle the full scope in one engagement — brick repointing, stone step repair, chimney work, retaining walls as needed.',
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
      'Coastal masonry, salt damage treatment and concrete cancer repair in Manly. Romans handles apartment blocks and homes on Sydney\'s Northern Beaches.',
    heroTagline:
      'Coastal masonry, salt damage treatment and concrete cancer repair across Manly and Fairlight.',
    intro: [
      'Manly is tough on buildings. Salt, wind and sun attack mortar, concrete and render constantly. Apartment blocks along the Corso and the beachfront all show signs of coastal wear — spalling concrete on balconies, rusting lintels, crumbling render, crystallised salt on brickwork.',
      'Concrete cancer is the biggest job in Manly. Most apartment buildings from the 1960s-80s have it somewhere, and once it starts, it accelerates. We cut out the damaged concrete, treat the exposed reinforcement, and repair with salt-resistant mortars so the fix holds up in a coastal environment.',
      'We also do a lot of render and brick work on older Federation and Interwar homes around Fairlight and the older parts of Manly. These buildings have been taking salt hits for 100 years — proper restoration with breathable materials is what keeps them in good shape.',
    ],
    housingContext:
      'Manly has a mix of older Federation and Interwar homes, 1960s-80s apartment blocks and newer builds. Coastal exposure is severe. Concrete cancer is common on apartment balconies and parapets. Brickwork suffers from salt crystallisation. Render often fails in patches where salt has built up behind. Steel lintels in older homes rust and cause brick cracking.',
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
          'Depends on how far it\'s progressed. If you can see rusty steel, water in the concrete or large patches spalling off, it needs action soon. We inspect, assess the reinforcement condition, and recommend repair scope.',
      },
      {
        question: 'How do you repair concrete in a way that lasts in Manly\'s salt air?',
        answer:
          'Proper preparation is everything. We cut back to sound concrete, treat the steel with corrosion inhibitor, use salt-resistant patch mortar, and apply a breathable protective coating. Shortcuts on any of those steps means the repair fails in a few years.',
      },
      {
        question: 'Can you work on strata-managed apartment buildings?',
        answer:
          'Regularly. We\'re set up for strata jobs — insurance, WHS documentation, scaffolding, working with building managers and strata committees. Many of our Manly jobs are strata-run.',
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
      'Concrete cancer repair, salt damage treatment and apartment block masonry in Dee Why. Romans works on strata buildings across the Northern Beaches.',
    heroTagline:
      'Concrete cancer repair, coastal masonry and apartment block restoration across Dee Why and Collaroy.',
    intro: [
      'Dee Why has a lot of mid-century apartment blocks, and a lot of them have concrete cancer. It\'s what we spend most of our time on in this suburb. Balconies, parapets, columns — if the concrete is exposed to salt air and hasn\'t been maintained, it\'s cracking somewhere.',
      'Strata committees call us in regularly to assess buildings. We prepare a scope, give a realistic budget and staging plan, and handle the work with all the documentation strata needs. The goal is always to fix properly the first time — salt-resistant materials, correct steel treatment, proper protective coatings.',
      'We also do residential work in Dee Why — retaining walls, brick repointing, render repairs. The hilly sections back from the beach mean retaining walls are a regular job.',
    ],
    housingContext:
      'Dee Why has 1960s-80s apartment blocks, some Interwar homes, and newer residential. Apartment concrete cancer is widespread. Salt air affects everything within a kilometre of the beach. Hillside blocks have retaining walls that need drainage. Brickwork suffers from salt crystallisation in coastal-facing walls.',
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
          'We start with a site inspection — usually free for strata-managed buildings. We identify all visible damage, probe to find hidden damage, and provide a written scope and budget. Many jobs are staged over 2-3 years to spread cost.',
      },
      {
        question: 'What is the difference between spalling and concrete cancer?',
        answer:
          'Spalling is the visible damage — flaking, chunks of concrete falling off. Concrete cancer is the cause — rusting steel reinforcement expanding inside the concrete. Treating spalling without treating the steel means the problem comes back.',
      },
      {
        question: 'Do you provide warranties on concrete repair work?',
        answer:
          'Yes. Standard 5-year workmanship warranty on our repairs. Materials typically have manufacturer warranties of 10-15 years. We document everything so strata has a clear record.',
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
      'Retaining walls, sandstone restoration and coastal masonry in Avalon. Romans handles sloped blocks and period homes on Sydney\'s Northern Beaches.',
    heroTagline:
      'Retaining walls, sandstone work and coastal masonry across Avalon, Palm Beach and Newport.',
    intro: [
      'Avalon and the northern end of the Northern Beaches is retaining wall country. The steep blocks running down to the beaches mean most properties have multiple levels of retaining, and many of the old walls are failing. Salt air plus hilly terrain plus sandy soil is a hard combination for any wall.',
      'We build and repair retaining walls with proper drainage — ag pipes, drainage blankets, weep holes. That\'s what makes the difference between a 50-year wall and a 10-year wall. Stone is our specialty, whether it\'s natural sandstone blocks or engineered block faced with stone veneer.',
      'We also do a lot of coastal masonry repair up here — rendered homes with salt damage, brick walls that have lost their mortar, concrete steps and paths that have failed. The right materials and proper detailing is what makes coastal work last.',
    ],
    housingContext:
      'Avalon has a mix of older homes, newer architect-designed builds and beachfront apartments. Steep, often sandy blocks mean retaining walls are everywhere. Salt air affects everything within a few hundred metres of the beach. Many properties have extensive stonework — retaining, garden walls, pool surrounds, paving.',
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
          'Sometimes. If the foundation is sound and the lean is minor, we can stabilise with drainage improvements and tie-backs. If the wall is badly damaged or poorly founded, rebuilding is more cost-effective long-term.',
      },
      {
        question: 'What\'s the right stone for an Avalon retaining wall?',
        answer:
          'Most properties match the local Sydney sandstone character. We can supply natural sandstone blocks in a range of finishes. For engineered walls, concrete block with a sandstone veneer gives strength plus the right look.',
      },
      {
        question: 'How deep does a retaining wall footing need to be?',
        answer:
          'Depends on wall height and soil. For a 1m wall on stable ground, often 500-700mm. For taller walls or sandy soil, often deeper with wider pads. We engineer each wall for its specific site.',
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
      'Victorian terrace restoration, tuckpointing and heritage brick repair in Newtown. Romans handles period homes across Sydney\'s Inner West.',
    heroTagline:
      'Victorian terrace restoration, tuckpointing and heritage brick repair across Newtown and Enmore.',
    intro: [
      'Newtown is full of Victorian terraces, and most of them need brick work. The original lime mortar has weathered out of the joints on buildings 120+ years old, and many have had cement repointing done badly in the past. Cement mortar on old soft brick causes the bricks to decay faster than they should.',
      'We do a lot of repointing in Newtown. Rake out the old mortar, match the lime mix to the original, and repoint to the correct profile. On higher-end Victorian terraces, that includes tuckpointing — the decorative fine white line in dark mortar that\'s a signature of the period.',
      'Heritage rules are taken seriously here. Inner West Council has strict requirements for anything that changes the appearance of a terrace. We handle the documentation and work to approved materials.',
    ],
    housingContext:
      'Newtown is almost entirely Victorian terraces from 1870-1900, with some Federation buildings. Handmade soft brick and lime mortar are the norm. Many terraces have had incorrect repointing in past decades. Tuckpointed brickwork is common on higher-end terraces. Iron balcony lacework and sandstone detailing on window surrounds and sills are frequent.',
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
          'Front facade of a single-width terrace typically $8,000-15,000 depending on condition, height and whether tuckpointing is involved. Full external repointing usually $20,000-40,000. We quote per job after inspection.',
      },
      {
        question: 'Does Inner West Council need approval for terrace repointing?',
        answer:
          'Exempt development covers like-for-like repairs with matching materials. Anything changing appearance or using different materials usually needs approval. We advise on your specific situation.',
      },
      {
        question: 'Can you fix crumbling bricks without replacing them?',
        answer:
          'For minor surface damage, consolidation treatments can extend brick life. For significantly decayed bricks, replacement with matching reclaimed handmade bricks is the proper fix.',
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
      'Heritage terrace masonry, sandstone and brick restoration in Balmain. Romans handles period homes and waterfront properties across the Inner West.',
    heroTagline:
      'Heritage terrace masonry, sandstone work and brick restoration across Balmain and Rozelle.',
    intro: [
      'Balmain has a rich mix of Victorian terraces, workers cottages and freestanding Federation homes. The peninsula means many properties have waterfront exposure and salt damage on top of normal age-related wear. We see a lot of brick decay, sandstone weathering and mortar erosion from the combination of age and salt.',
      'Most of our Balmain work is heritage brick and sandstone restoration. Repointing with lime mortar, replacing decayed bricks with matched reclaimed ones, and repairing sandstone steps, sills and feature walls. The character of the suburb depends on these details being done properly.',
      'We also handle retaining walls — Balmain has plenty of sloped blocks, and old sandstone walls from the 1800s are common. Many need full or partial rebuild with proper drainage to last another century.',
    ],
    housingContext:
      'Balmain has Victorian terraces, Workers cottages from 1880s-1910s, Federation homes and later conversions. Sandstone feature walls, steps and retaining walls are widespread. Waterfront salt exposure affects the perimeter of the peninsula. Many older buildings have been repointed with cement in past decades, causing ongoing brick decay.',
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
          'Treat the cause, then the symptoms. We remove failed render or pointing, treat salts with breathable consolidants, and rebuild with salt-resistant materials. Cement-based renders trap salt and make the problem worse — we always use breathable lime-based systems on older buildings.',
      },
      {
        question: 'Can you match sandstone on a 140-year-old Balmain workers cottage?',
        answer:
          'Yes. Sydney sandstone is still quarried and we match grain, colour and tooling. For visible repairs we weather-match so the new stone blends in.',
      },
      {
        question: 'How do I know if my terrace needs structural work or just cosmetic?',
        answer:
          'Cracks that are growing, doors and windows that stick, or walls that bulge are signs of structural movement. We assess, and if structural engineering input is needed we bring in an engineer. Cosmetic-only issues — like weathered pointing — we handle directly.',
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
      'Terrace restoration, warehouse conversion masonry and brick repointing in Marrickville. Romans handles period homes and commercial buildings in the Inner West.',
    heroTagline:
      'Terrace restoration, warehouse masonry and brick repointing across Marrickville and Dulwich Hill.',
    intro: [
      'Marrickville has a strong mix of Victorian and Federation terraces plus a lot of old industrial brick buildings that have been converted or are being converted. Warehouse conversions have their own challenges — old structural brickwork that\'s never had proper maintenance, large spans, and heritage considerations.',
      'For residential work, our Marrickville jobs are mostly repointing, brick replacement and sandstone step repair. The terraces here are similar to Newtown — Victorian soft brick, lime mortar originally, often cement repointed in the past and now needing proper restoration.',
      'For the commercial and warehouse buildings, we handle structural brickwork, facade repair, concrete work and full remedial scopes. These buildings are often 100+ years old and need careful work to convert without destroying the character that makes them worth converting.',
    ],
    housingContext:
      'Marrickville has Victorian terraces, Federation homes, Interwar houses and significant industrial/warehouse building stock. Warehouses are typically 1890s-1940s with structural brickwork, timber floors and sawtooth roofs. Residential buildings are mostly soft brick with lime mortar originally. Inner West Council heritage rules apply to many streets.',
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
          'Usually, yes. We clean the brickwork, repoint with appropriate mortar and repair any damaged bricks. Exposed internal brickwork is a strong feature in converted warehouses. We also handle any structural reinforcement needed.',
      },
      {
        question: 'Do you do commercial masonry on buildings in operation?',
        answer:
          'Yes. We stage work, use containment and coordinate with tenants and building management. Most of our commercial jobs happen without operational disruption.',
      },
      {
        question: 'Is repointing worth it on a terrace that needs a full reno?',
        answer:
          'Depends on timing. If the reno is years away, sealing the brickwork now stops further damage. If the reno is imminent, it can be timed together. We advise per situation.',
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
      'Victorian terrace restoration, tuckpointing and heritage masonry in Leichhardt. Romans handles period homes across Sydney\'s Inner West.',
    heroTagline:
      'Victorian terrace restoration, heritage repointing and tuckpointing across Leichhardt and Annandale.',
    intro: [
      'Leichhardt has some of the finest preserved Victorian streetscapes in the Inner West. Long rows of single and two-storey terraces from the 1880s-90s, tuckpointed brick, cast-iron lacework and sandstone detailing. These buildings need specialised care, and the wrong work can destroy their character.',
      'Most of our Leichhardt work is tuckpointing and lime mortar repointing. Tuckpointing is a precise decorative technique that takes time to do properly — the dark base mortar, the white putty fillet run through the centre, matched to the original width and profile. Get it wrong and the facade looks off.',
      'We also do sandstone restoration on steps, window surrounds and garden walls, brick replacement where bricks have decayed past saving, and chimney repairs. The whole point of a Leichhardt terrace is the detail — we keep it intact.',
    ],
    housingContext:
      'Leichhardt is dominated by Victorian terraces from 1880-1900, with some Federation. Handmade soft brick with lime mortar, often originally tuckpointed. Iron lintels, sandstone sills and surrounds, decorative cast-iron lacework. Many terraces have been incorrectly repointed with cement in past decades. Heritage conservation applies to most streets.',
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
          'Tuckpointing is two materials applied in layers — a dark coloured mortar flush with the brick face, with a fine thin fillet of white lime putty run through the centre of each joint. It creates the illusion of very precise, very fine brickwork. Normal pointing is just one mortar filling the joint.',
      },
      {
        question: 'How do I know if my terrace originally had tuckpointing?',
        answer:
          'Look closely at the joints. If you can see traces of a thin white line running through dark mortar, or if the brickwork has a particularly refined look, it was probably tuckpointed originally. Most Victorian-era middle and upper-class terraces in Leichhardt were.',
      },
      {
        question: 'Can tuckpointing be done in sections or does the whole facade need doing?',
        answer:
          'It can be staged. We often do the front facade first, then sides and back as budget allows. Done in stages, it spreads the cost but the work still looks cohesive if we match the mix and profile consistently.',
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
      'Commercial masonry, heritage restoration and structural repairs in Parramatta. Romans handles brick, sandstone and facade repairs across Sydney\'s second CBD.',
    heroTagline:
      'Commercial masonry, heritage restoration and structural repairs across Parramatta and Westmead.',
    intro: [
      'Parramatta is Sydney\'s second CBD and one of the oldest continuously occupied parts of Australia. The mix of heritage colonial buildings, mid-century commercial and modern high-rise creates a wide spread of masonry work. From colonial sandstone at Old Government House to commercial facade repairs on Church Street, we handle it all.',
      'The heritage work in Parramatta is significant. Buildings like Elizabeth Farm, Experiment Farm Cottage and the row of Georgian sandstone buildings in the old civic core need specialised restoration. We work with heritage consultants and council to keep this work to proper conservation standards.',
      'For commercial work, Parramatta has a lot of 1970s-90s buildings now reaching the age where concrete cancer, facade repair and structural remediation become necessary. We handle strata, commercial and council-owned buildings across the area.',
    ],
    housingContext:
      'Parramatta has colonial sandstone heritage, Victorian and Federation suburban homes, mid-century commercial, and modern high-rise. Clay-rich soils cause foundation movement in some areas. Commercial buildings from 1970s-90s commonly need concrete remediation. Heritage buildings need traditional lime mortars and matched materials.',
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
          'Yes. We have worked on heritage-listed buildings in Parramatta and are familiar with council and NSW Heritage requirements. We prepare documentation and work to approved scopes.',
      },
      {
        question: 'My commercial building needs concrete cancer repair. How do we start?',
        answer:
          'Site inspection first. We assess the damage, identify the scope, and provide a written quote. For larger commercial jobs, we often stage the work across multiple visits to manage disruption and budget.',
      },
      {
        question: 'Can you do emergency structural work?',
        answer:
          'Yes. For emergencies — failed lintels, bulging walls, collapsed retaining — we can mobilise quickly to make safe and then assess proper repair.',
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
      'Heritage home restoration, brick repointing and stonework in Strathfield. Romans Building Services is based in Strathfield — local masonry experts since 1995.',
    heroTagline:
      'Heritage home restoration, brick repointing and stonework in Strathfield — our home base since 1995.',
    intro: [
      'Strathfield is our home. Minas has been based here for 30 years and has worked on more homes in this suburb than anywhere else. The Federation and Interwar mansions along The Boulevarde, Homebush Road and the streets around Strathfield Park are the sort of buildings we specialise in.',
      'Heritage repointing, sandstone restoration, retaining walls, chimney rebuilds — these are all everyday jobs for us in Strathfield. Many of the grand homes here have significant decorative stonework: columns, balustrades, window surrounds, entrance porches. Keeping these intact needs the right materials and the patience to match original work.',
      'Being local means we\'re on site faster, we know the council requirements inside out, and we\'ve probably already done work on a house near yours. If you\'re in Strathfield and need masonry work, we\'re the logical call.',
    ],
    housingContext:
      'Strathfield has Federation mansions from 1900-1915, Interwar homes from 1920s-40s, Victorian and some mid-century builds. Significant stonework is common — columns, balustrades, retaining walls, decorative detailing. Brick is usually handmade or early pressed. Clay soils cause foundation movement in some pockets. Heritage conservation covers many streets.',
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
        question: 'Are you actually based in Strathfield?',
        answer:
          'Yes. Romans has been based in Strathfield since 1995. Minas lives locally. If you\'re in the suburb we can often be on site same-day for inspections.',
      },
      {
        question: 'Do you work on Strathfield Council heritage-listed homes?',
        answer:
          'Regularly. We know the council requirements, the heritage consultants who work in the area, and we prepare documentation to the standard council expects.',
      },
      {
        question: 'Can you restore decorative sandstone columns and balustrades?',
        answer:
          'Yes. We cut replacement stone to match originals, carve details where needed and install with matched mortar. For heavily weathered original stone, we consolidate where possible rather than replacing entire elements.',
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
      'Warehouse conversion brickwork, heritage sandstone and apartment concrete repairs in Pyrmont. Romans handles industrial-era buildings across the inner city.',
    heroTagline:
      'Warehouse conversion brickwork, heritage sandstone and apartment concrete work across Pyrmont and Darling Harbour.',
    intro: [
      'Pyrmont is old industrial Sydney reborn as apartments and offices. A lot of the buildings here are 1890s–1930s warehouses converted to residential and commercial use, and the structural brickwork underneath needs proper care. When these conversions were done in the 90s and 2000s, many of them skipped the proper repointing and structural brick restoration — 20-30 years later, it is catching up.',
      'We work on the heritage sandstone around Pyrmont Point and the older warehouse conversions throughout the peninsula. Structural brick repair, lintel replacement where steel has corroded, repointing with appropriate mortar, and sandstone restoration on the remaining original frontages.',
      'The other big job in Pyrmont is concrete cancer on the newer apartment blocks. Salt air comes up the harbour, and many of the blocks built in the 1990s–2000s have concrete issues on balconies, parapets and exposed slabs.',
    ],
    housingContext:
      'Pyrmont has 1890s–1930s warehouses (many converted), early apartment buildings, and 1990s–present high-density residential. Heritage sandstone along the water edge. Structural brick from the warehouse era often needs repointing with lime-compatible mortar. Newer concrete buildings near the water show early concrete cancer from salt air. Mixed commercial and residential makes strata work common.',
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
          'Yes — it is one of the most sought-after looks in Pyrmont conversions. We clean the brick, repoint with appropriate mortar, and replace any damaged bricks with matched reclaimed stock. Exposed internal brickwork adds character and value if done properly.',
      },
      {
        question: 'Do you work with strata committees in Pyrmont?',
        answer:
          'Regularly. Pyrmont has a lot of strata-managed apartment blocks, and we are set up for the insurance, WHS documentation and staged work programs strata committees need.',
      },
      {
        question: 'How serious is concrete cancer on a 20-year-old Pyrmont apartment?',
        answer:
          'Depends on how close to the water the building is and whether the original concrete cover was adequate. Buildings right on the water edge often show early signs at 15–20 years. Inland Pyrmont blocks tend to last longer. An inspection gives you a real answer rather than a guess.',
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
      'Victorian terrace brick restoration, warehouse conversion masonry and heritage repointing in Ultimo. Romans Building Services works across Sydney\'s inner city.',
    heroTagline:
      'Victorian terrace brick, warehouse masonry and heritage repointing across Ultimo and Chippendale.',
    intro: [
      'Ultimo mixes Victorian terraces, old warehouses and modern apartment blocks in a tight inner-city grid. Our work here is mostly on the pre-war housing stock — terrace rows, converted industrial buildings, and the occasional Federation shopfront. All of it needs proper heritage materials to stay in shape.',
      'We do a lot of repointing in Ultimo terraces, and quite a few tuckpointing restorations on the higher-end rows. The bricks are usually soft handmade Sydney brick, which means lime mortar is the correct material — cement pointing done decades ago has damaged bricks on many houses here.',
      'The warehouse conversions around Harris Street and the industrial blocks toward Chippendale need their own approach. Exposed structural brickwork with proper repointing, new lintels where steel has failed, and careful cleaning to preserve character.',
    ],
    housingContext:
      'Ultimo has Victorian terraces from 1870s–1900s, converted warehouses from 1880s–1920s, Federation shopfronts, and newer apartment blocks. Handmade soft brick with lime mortar is the norm for pre-war work. Incorrectly cement-repointed terraces are common. Mixed-use streets mean both residential and commercial heritage work.',
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
          'Much of Ultimo is in a Heritage Conservation Area under City of Sydney Council, even if individual terraces are not separately listed. Work that changes the appearance of the building usually needs council consent. We handle the documentation.',
      },
      {
        question: 'Can you do just the front facade repointing if budget is tight?',
        answer:
          'Yes. Front facade is the priority on most terraces — it is what is visible and takes the most weather. Sides and rear can be done later in stages without looking disjointed, as long as the mortar mix is matched consistently.',
      },
      {
        question: 'How long does repointing an Ultimo terrace facade take?',
        answer:
          'Typical single-width terrace front facade: 2–3 weeks including rake-out, pointing and curing. Full external: 4–6 weeks. We work in stages so the house stays watertight throughout.',
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
      'Concrete cancer treatment, salt damage repair and coastal masonry in Coogee. Romans handles apartment blocks and homes across Sydney\'s east.',
    heroTagline:
      'Concrete cancer, salt damage and coastal masonry restoration across Coogee, Clovelly and Bronte.',
    intro: [
      'Coogee takes a battering from the ocean. Salt air chews through mortar, rusts reinforcement and destroys render. Most apartment blocks along the beachfront and the side streets running down to it have concrete cancer somewhere — it is the most common job we do in this pocket of Sydney.',
      'The older homes in the back streets around Coogee, Clovelly and Bronte are also showing their age. Salt damage on brickwork, failing render, cracked retaining walls on the steep blocks. We fix these with breathable materials that actually hold up in coastal conditions.',
      'For apartment blocks, we work with strata committees on staged concrete cancer programs — assess the whole building, do the urgent work first, and schedule less urgent repairs for later years to spread cost.',
    ],
    housingContext:
      'Coogee has 1960s–80s apartment blocks dominating the beachfront and side streets, with older Federation and Interwar homes through the residential zones. Heavy salt exposure on every building. Concrete cancer is widespread on mid-century apartment blocks. Render fails regularly on coastal-facing walls. Retaining walls on sloped streets often need drainage remediation.',
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
          'Very common. Most apartment blocks in Coogee built between 1960 and 1990 have concrete cancer on balconies, parapets or columns. Salt air accelerates steel corrosion dramatically. If your block is in this age range, it is worth an inspection.',
      },
      {
        question: 'Can you work on strata-managed buildings in Coogee?',
        answer:
          'Regularly. We carry the insurance, do the WHS documentation, work with building managers, and stage work across multiple years when needed to fit strata budgets.',
      },
      {
        question: 'Why does my render keep falling off on the ocean-facing wall?',
        answer:
          'Salt crystallising behind the render pushes it off from inside. The fix is to remove failed render, treat the substrate, and re-render with a breathable salt-resistant system. Standard cement render and waterproof paint make it worse.',
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
      'Federation home restoration, brick repointing and retaining walls in Randwick. Romans handles period properties across Sydney\'s east.',
    heroTagline:
      'Federation home restoration, heritage brick and retaining walls across Randwick and Kensington.',
    intro: [
      'Randwick has a big mix of building stock — grand Federation homes, Interwar houses, Victorian terraces and newer apartment blocks. The Federation period homes around the racecourse and the higher streets are what we spend most of our time on: sandstone detailing, brick repointing, chimney work, and retaining walls on the hilly blocks.',
      'Randwick is far enough back from the coast that salt damage is less aggressive than Coogee or Bondi, but the mature trees and sloped blocks mean foundation movement is common. We see a lot of stair-step cracks in brickwork caused by reactive clay and tree roots — fixable with proper diagnosis and helical bar stitching.',
      'For heritage properties we work with Randwick Council heritage requirements and use the right materials: lime mortar, matched brick, proper sandstone sourcing. The old homes here deserve better than a cement patch job.',
    ],
    housingContext:
      'Randwick has Federation homes 1900–1915, Victorian terraces 1880–1900, Interwar houses 1920s–40s, and modern apartment blocks. Sloped blocks are common — retaining walls everywhere. Mature trees cause foundation movement on some properties. Building Heritage Conservation Areas cover parts of the suburb. Sandstone detailing on period homes is frequent.',
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
          'Most commonly reactive clay soils moving with seasonal moisture, or tree roots drawing water from under the footings. Both cause gentle differential movement that cracks rigid brickwork. We assess whether movement is active or finished, and repair with helical bar stitching and matched pointing.',
      },
      {
        question: 'Do you work on heritage-listed properties in Randwick?',
        answer:
          'Yes. We work to Randwick Council heritage requirements and handle the documentation for council consent. Matched materials — lime mortar, reclaimed brick, Sydney sandstone — are standard on heritage work.',
      },
      {
        question: 'How much does a retaining wall rebuild cost in Randwick?',
        answer:
          'Heritage sandstone walls typically $2,500–$4,000 per square metre. Engineered block with stone veneer $1,200–$2,500 per sqm. Access affects cost a lot — steep sites with tight access can add 20–30% to the job.',
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
      'Heritage stone restoration, period home masonry and retaining walls in Bellevue Hill. Romans works on high-end Eastern Suburbs properties.',
    heroTagline:
      'Heritage stone restoration, period home masonry and multi-level retaining walls across Bellevue Hill and Rose Bay.',
    intro: [
      'Bellevue Hill has some of the most significant period homes in Sydney — Federation mansions, Interwar Georgian revivals, Mediterranean villas. These properties need tradespeople who understand the scale, the materials, and the standards. We have worked in this area for over 20 years.',
      'The work is mostly sandstone restoration and heritage masonry. Columns, balustrades, window surrounds, steps, garden walls, multi-level retaining walls down to the harbour. A lot of it is weathered original stone that needs consolidation rather than replacement, and careful matching where replacement is unavoidable.',
      'Retaining walls are a constant in Bellevue Hill. Many of the grand homes sit on multiple levels of sandstone retaining — when the drainage fails, whole gardens can shift. We rebuild with proper ag-pipe drainage and engineered footings so the fix lasts.',
    ],
    housingContext:
      'Bellevue Hill has Federation mansions, Interwar Georgian and Mediterranean Revival homes, with some Victorian. Large blocks with significant stonework — retaining walls, columned porches, balustrades, stone paving. Multiple renovations over the decades often create layered problems. Heritage Conservation Areas are strict about appearance.',
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
          'Regularly. Many of our larger Bellevue Hill and Rose Bay jobs are architect-led. We work to spec, attend site meetings, and deliver on scope and programme.',
      },
      {
        question: 'How do you match weathered sandstone on a 100-year-old home?',
        answer:
          'Sydney sandstone is still quarried, so we source matching stone from active quarries. For visible repairs, we weather-match the new stone — either natural aging with time or accelerated patina — so it blends with the surrounding aged stone.',
      },
      {
        question: 'My sandstone retaining wall is moving. Can it be saved?',
        answer:
          'Depends on the footing and the extent of movement. If the footing is sound and drainage is the problem, we can often stabilise with drainage works and tie-backs. If the wall has failed structurally, rebuild with matched stone is the right answer.',
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
      'Federation home restoration, brick repointing and retaining walls in Cremorne. Romans Building Services works across Sydney\'s Lower North Shore.',
    heroTagline:
      'Federation home restoration, heritage brick and retaining walls across Cremorne and Cammeray.',
    intro: [
      'Cremorne is full of beautiful Federation and Interwar homes on leafy streets. Character bricks, sandstone detailing, decorative lacework — all of it needs looking after properly. Most of these homes are 90–120 years old and the mortar, chimneys and sandstone are overdue for attention.',
      'Our Cremorne work is mostly heritage repointing, chimney repair, and sandstone restoration on steps, pillars and garden walls. We also handle retaining walls on the sloped blocks running toward the harbour — many are failing because the drainage behind them has packed up over the decades.',
      'We know the Lower North Shore well and have worked across Cremorne, Cammeray, Neutral Bay and Mosman for over 20 years. If your Federation home needs masonry attention, we are a logical call.',
    ],
    housingContext:
      'Cremorne has Federation homes from 1900–1915 and Interwar houses from 1920s–40s, with some earlier Victorian. Mature trees on many blocks. Sandstone retaining walls on sloped streets. Character brick with lime mortar on pre-war homes. North Sydney Council heritage rules apply in parts of the suburb.',
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
          'Water stains on ceilings near the flue, mortar crumbling at the top, loose bricks, or a visible lean are all signs. If rust stains run down the external brickwork, the internal cramps or flashing may have failed. An inspection gives you a clear scope.',
      },
      {
        question: 'Does North Sydney Council need approval for heritage repair work?',
        answer:
          'For properties in Heritage Conservation Areas or separately listed heritage items, yes. Like-for-like minor repairs are usually exempt but anything changing appearance typically needs consent. We handle the documentation.',
      },
      {
        question: 'Can you match the original mortar colour on a 110-year-old Cremorne home?',
        answer:
          'Yes. We take samples, mix trial batches, and test against the existing before committing to scope. Lime mortar matched to the original colour, texture and profile is standard on heritage work.',
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
      'Commercial facade repair, concrete cancer treatment and remedial masonry in St Leonards. Romans handles office buildings and apartments.',
    heroTagline:
      'Commercial facade work, concrete cancer and remedial masonry across St Leonards and Crows Nest.',
    intro: [
      'St Leonards is commercial high-rise and mid-century apartment country, with pockets of older residential running toward Crows Nest. Our work here is a mix of commercial facade repair, concrete cancer treatment on apartment blocks, and the occasional heritage home in the quieter streets.',
      'The commercial buildings along the Pacific Highway and near the train station often need facade remediation — render repair, concrete work, structural brickwork upgrades. We coordinate with building management so tenants keep operating while we work.',
      'Apartment blocks from the 60s–80s are the other big job. Concrete cancer on balconies and parapets, salt-resistant rendering, and strata-managed programs staged over multiple years.',
    ],
    housingContext:
      'St Leonards has commercial high-rise, mid-century apartment blocks, Interwar houses and some Federation. Commercial facades from the 60s–90s often need concrete and render remediation. Apartment blocks commonly have concrete cancer. Residential work tends to be brick repointing and structural repair on older homes.',
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
          'Yes. We stage work, use containment for dust, and coordinate with building management around tenant hours. Most commercial facade work in St Leonards is done without tenants noticing much beyond the scaffold.',
      },
      {
        question: 'How do you price commercial remedial work?',
        answer:
          'Usually priced against an engineering scope or condition report. If no report exists yet, we inspect and provide a written scoped quote. For larger jobs we often stage the work across multiple years.',
      },
      {
        question: 'Do you work after-hours on commercial properties?',
        answer:
          'When needed — yes. We can do noisy or high-traffic work outside tenant hours. Costs a bit more but sometimes it is the only way to keep operations running.',
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
      'Concrete cancer repair, salt damage treatment and coastal masonry in Collaroy. Romans handles beachfront apartments and homes.',
    heroTagline:
      'Concrete cancer, salt damage and coastal masonry across Collaroy and Narrabeen.',
    intro: [
      'Collaroy is beachfront Northern Beaches country. Salt air is relentless, storm damage is a real thing, and buildings show the wear. Apartment blocks along the beachfront and homes in the sloped streets behind all have the same issues: rusting reinforcement in concrete, render failing in patches, mortar eaten out of brickwork, retaining walls losing their grip.',
      'Concrete cancer is the biggest job in Collaroy — most apartment blocks built before 1990 have it somewhere. We cut back to sound concrete, treat the steel with corrosion inhibitor, patch with salt-resistant mortar, and apply breathable protective coatings that actually hold up in this environment.',
      'We also handle coastal render repair, retaining walls and general masonry across the Narrabeen and Collaroy area. The work that lasts here is the work done with the right materials — breathable, salt-resistant, and properly detailed.',
    ],
    housingContext:
      'Collaroy has beachfront apartment blocks from 1960s–80s, mid-century homes, and newer beach houses. Heavy coastal salt exposure. Concrete cancer common on apartment balconies, parapets and exposed slabs. Sandy soil on some blocks affects retaining walls. Storm damage from big swells can cause structural issues on beachfront properties.',
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
          'Severe. Buildings directly on the beachfront take 2–3x the salt load of inland apartments. Reinforcement concrete cancer is often visible by 15–20 years on beachfront blocks if the original concrete cover was marginal. Regular inspections and proactive repair are the only way to keep ahead of it.',
      },
      {
        question: 'What is the right render for a Collaroy beachfront home?',
        answer:
          'A breathable salt-resistant render — lime-based or polymer-modified, never a rigid cement render with acrylic paint. The render needs to let moisture escape from the wall rather than trapping salt inside.',
      },
      {
        question: 'How often should a Collaroy apartment block have a condition inspection?',
        answer:
          'For blocks within 500m of the beach, we recommend full condition inspections every 5 years. Sooner if concrete cancer has been identified in any section. Between inspections, keep an eye on balconies and parapets — if you see rust stains or cracks, call for a look.',
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
      'Coastal masonry repairs, heritage home restoration and concrete work in Freshwater. Romans handles salt damage and period homes.',
    heroTagline:
      'Heritage home restoration, coastal masonry and concrete work across Freshwater and Harbord.',
    intro: [
      'Freshwater has a mix of older residential — Federation and Interwar homes — plus some apartment blocks and newer builds. The village area and the streets running down to the beach are full of character homes that need proper masonry care.',
      'Our Freshwater work splits between heritage repointing on older homes and concrete cancer treatment on apartment blocks near the beach. Salt exposure is lighter than directly beachfront Manly but still a factor on any building within a few hundred metres of the ocean.',
      'Retaining walls are also common here — the sloped blocks and sandy soil mean walls need proper drainage to last. We build and rebuild with ag-pipe drainage and appropriate footings so the job holds up.',
    ],
    housingContext:
      'Freshwater has Federation homes, Interwar houses, 1960s–80s apartment blocks and newer infill. Moderate coastal salt exposure. Sandy soil on some blocks. Older homes often need lime mortar repointing. Apartment blocks within a few hundred metres of the beach show concrete cancer.',
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
          'Usually yes — Freshwater is close enough to the coast that salt is a factor on any external work. Breathable systems, salt-resistant renders, and lime-based materials on heritage walls are the right call.',
      },
      {
        question: 'Can you repair sandstone steps on a Freshwater Federation home?',
        answer:
          'Yes. For steps that are structurally sound we consolidate and repair. For steps that have lost too much stone, we cut and install replacement sandstone matched to the original.',
      },
      {
        question: 'How long does a Freshwater coastal render job last?',
        answer:
          'With proper specification — breathable render, salt-resistant systems, mineral paint — 20–30 years. With wrong materials (cement render + acrylic paint) it can fail in 5–10 years.',
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
      'Victorian terrace brick restoration, tuckpointing and heritage repointing in Glebe. Romans works on period homes in Sydney\'s Inner West.',
    heroTagline:
      'Victorian terrace restoration, tuckpointing and heritage repointing across Glebe and Forest Lodge.',
    intro: [
      'Glebe is one of Sydney\'s most intact Victorian suburbs. Long rows of terraces, many of them tuckpointed, with sandstone detailing and cast-iron lacework. These streetscapes are what make Glebe what it is, and keeping them in shape means proper heritage work.',
      'Our Glebe jobs are mostly tuckpointing and lime mortar repointing. The original lime has weathered out of joints on most 140-year-old terraces, and many have had badly done cement repointing in past decades. We rake out the bad repair, repoint properly with matched lime mortar, and restore tuckpointing where it was original.',
      'Sandstone restoration is also common — steps, window surrounds, sills, garden walls. Working with Inner West Council heritage requirements, we use the right materials and get the finish right so the repair blends in.',
    ],
    housingContext:
      'Glebe is dominated by Victorian terraces 1870s–1900s, with some Federation. Handmade soft brick, lime mortar originally, often tuckpointed on higher-end rows. Iron lintels, sandstone detailing. Many incorrectly cement-repointed. Conservation Areas cover most streets.',
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
          'Front facade of a single-width tuckpointed terrace typically $10,000–$18,000. Full external $25,000–$45,000 depending on size, condition and access. Every job is different — firm quote after inspection.',
      },
      {
        question: 'What is the best time of year to repoint in Sydney?',
        answer:
          'Autumn and spring are ideal — mild temperatures and humidity, no extreme heat, less rain than winter. Summer heat accelerates lime mortar curing too fast and can weaken the bond. We work year-round with adjusted techniques.',
      },
      {
        question: 'Can you match the original dark-and-white tuckpointing on my Glebe terrace?',
        answer:
          'Yes. Tuckpointing is our specialty — dark pigmented mortar flush, white lime putty fillet through the centre, matched to original width and profile. We take samples and do test panels before committing to scope.',
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
      'Victorian terrace restoration, warehouse conversion masonry and heritage brickwork in Surry Hills. Romans handles period buildings.',
    heroTagline:
      'Victorian terrace restoration, warehouse masonry and heritage brickwork across Surry Hills and Redfern.',
    intro: [
      'Surry Hills is terraces and old warehouse conversions stacked tight on narrow streets. A huge amount of our Inner East work happens here — repointing, tuckpointing, brick restoration, warehouse exposed-brick work, and the occasional heritage facade restoration.',
      'The Victorian terraces in Surry Hills have the classic issues: weathered lime mortar, badly done cement repointing from past decades, soft handmade brick that needs proper care. Tuckpointed terraces on higher-end rows need specialist restoration.',
      'The warehouse conversions around the fringes of Surry Hills and into Redfern are a different job — structural brickwork that has never been properly maintained, new lintels where steel has rusted, interior brick cleaning for exposed-brick features.',
    ],
    housingContext:
      'Surry Hills has Victorian terraces 1870s–1900s, Federation buildings, and converted warehouses. Tight street grid means access is often a factor. Soft handmade brick with lime mortar on pre-war housing. Mixed residential and commercial heritage work. City of Sydney Council heritage rules apply in most of the suburb.',
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
          'Carefully. Many Surry Hills streets are too narrow for full scaffold across the front, so we use tight-access scaffold or split work over stages. Council permits for footpath occupation are arranged up front.',
      },
      {
        question: 'Can you do warehouse brick cleaning for an exposed-brick interior?',
        answer:
          'Yes — we clean structural brickwork with appropriate methods (never sandblasting on soft handmade brick — it damages the brick face), repoint where needed, and replace any damaged bricks with matched reclaimed stock.',
      },
      {
        question: 'Does my Surry Hills terrace need council approval for repointing?',
        answer:
          'Like-for-like repointing with matched materials is usually exempt development. Changes to mortar colour, profile, or appearance typically need consent. We advise per project and handle documentation where needed.',
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
      'Victorian terrace restoration, heritage brick repointing and tuckpointing in Erskineville. Romans handles period homes in Sydney\'s Inner West.',
    heroTagline:
      'Victorian terrace restoration, heritage repointing and tuckpointing across Erskineville and Alexandria.',
    intro: [
      'Erskineville and the surrounding streets are full of Victorian worker cottages and terraces. They were built quick and tight for factory workers in the 1880s–90s, with soft handmade brick and lime mortar. 130 years later, most need proper repointing — and many have been repointed badly with cement, causing brick decay.',
      'We do a lot of repointing in Erskineville. Rake out the old mortar by hand, match the lime mix to the original, repoint to correct profile. On the terraces that originally had tuckpointing, we restore it — the fine white line in dark mortar that defines Victorian streetscapes.',
      'Sandstone sills, iron lintels, brick replacement — all standard on terraces this age. We source matched reclaimed bricks and proper sandstone for visible repairs so the finished work looks right.',
    ],
    housingContext:
      'Erskineville has Victorian terraces and workers cottages 1880s–1900s, Federation buildings, and industrial conversions. Soft handmade brick, lime mortar. Many incorrectly cement-repointed. Iron lintels rust and cause brick cracking above windows. Close to industrial areas means some properties have additional pollution-weathering on stonework.',
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
          'Many are in Heritage Conservation Areas under Inner West Council, even where individual properties are not separately listed. Work changing appearance usually needs council consent. We handle documentation where needed.',
      },
      {
        question: 'How much does repointing an Erskineville worker cottage cost?',
        answer:
          'Single-width cottage front facade typically $5,000–$10,000. Full external $12,000–$25,000. Cheaper than grander terraces because cottages are smaller, but still quality work with lime mortar and matched pointing.',
      },
      {
        question: 'Why do my bricks crack above the window?',
        answer:
          'Almost always a rusting iron lintel. The steel corrodes over decades, expands 7x its volume, and pushes the bricks apart. Replacing the lintel and repairing the brickwork is the fix — ignoring it means the crack grows and eventually the bricks above the window fail.',
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
      'Federation home restoration, brick repointing and retaining walls in Burwood. Romans handles heritage masonry, period homes and structural repairs.',
    heroTagline:
      'Federation home restoration, heritage repointing and retaining walls across Burwood and Croydon.',
    intro: [
      'Burwood is our back yard. We are based in Strathfield and work across Burwood, Croydon, Enfield and the surrounding suburbs constantly. The Federation and Interwar homes along Burwood Road and the leafy streets behind them are exactly the sort of buildings we specialise in.',
      'Our Burwood work is mostly heritage repointing, chimney rebuilds, sandstone restoration on steps and detailing, and retaining walls on sloped blocks. Reactive clay soils in parts of Burwood cause foundation movement on some properties — we stitch cracks with helical bars after diagnosing whether the movement is active or finished.',
      'Being local means we can be on site fast, we know Burwood Council heritage requirements, and we have probably already worked on a home near yours. If your Burwood property needs masonry attention, we are a natural call.',
    ],
    housingContext:
      'Burwood has Federation mansions from 1900s, Victorian homes, Interwar houses, and newer infill. Reactive clay soils cause some foundation movement. Mature gardens mean tree root issues on some blocks. Burwood Council heritage areas cover significant streets. Significant stonework on period homes — columns, balustrades, retaining walls.',
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
        question: 'Are you actually based near Burwood?',
        answer:
          'Yes — Romans Building Services is based in Strathfield, about 10 minutes from Burwood. We work across this area constantly. Same-day inspections are usually possible.',
      },
      {
        question: 'Do you work on Burwood Council heritage-listed homes?',
        answer:
          'Regularly. We know Burwood Council\'s heritage requirements, the typical approval process, and we prepare documentation that meets council standards.',
      },
      {
        question: 'My Burwood home has stair-step cracks. Is it reactive clay?',
        answer:
          'Often yes — reactive clay is common across parts of Burwood. Seasonal moisture change causes the soil to swell and shrink, moving footings and cracking brickwork. Crack monitors over a few months confirm whether movement is active or finished, which decides whether underpinning is needed.',
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
      'Federation home restoration, brick repointing and structural repairs in Concord. Romans Building Services works across Sydney\'s inner west.',
    heroTagline:
      'Federation and Interwar home restoration, repointing and retaining walls across Concord and Five Dock.',
    intro: [
      'Concord is Federation and Interwar territory. Large blocks, big homes, lots of brick and sandstone detailing. Our work here is similar to Burwood and Strathfield — heritage repointing, chimney repair, retaining walls on sloped streets, and structural crack stitching where foundations have moved over the decades.',
      'Concord has good quality original brickwork on most homes, which means proper lime mortar repointing keeps them in shape for another 50+ years. Cement repointing done in past decades is a common problem we reverse — removing the hard cement and repointing with lime that lets the bricks breathe.',
      'We are 15 minutes from our Strathfield base to most parts of Concord, so response is quick and we know the area well.',
    ],
    housingContext:
      'Concord has Federation homes from 1900s, Interwar houses from 1920s–40s, Victorian properties, and newer builds. Reactive clay in some pockets causes foundation movement. Sandstone detailing common on period homes. Canada Bay Council covers the area with its own heritage policies.',
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
        question: 'Does Canada Bay Council have strict heritage rules?',
        answer:
          'For listed heritage items and Conservation Areas, yes. Much of Concord falls under these protections. We prepare documentation and work to approved materials when heritage consent is needed.',
      },
      {
        question: 'How do I know if my Concord home has reactive clay?',
        answer:
          'Signs include doors and windows sticking after rain, stair-step cracks in brickwork, or cracks that open and close with seasons. A geotechnical test confirms soil type; crack monitors over 3–6 months confirm whether movement is ongoing.',
      },
      {
        question: 'Can you work with my architect or heritage consultant?',
        answer:
          'Yes — regularly. Many of our larger jobs are run through architects or heritage consultants who prepare the scope and documentation. We deliver the work to spec.',
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
      'Heritage home restoration, brick repointing and retaining walls in Homebush. Romans Building Services is local — based in neighbouring Strathfield.',
    heroTagline:
      'Heritage home restoration, brick repointing and retaining walls across Homebush and Homebush West.',
    intro: [
      'Homebush is next door to our Strathfield base. We work across Homebush constantly — Federation and Interwar homes on the quieter streets, Victorian terraces in pockets, and the occasional heritage restoration project. Being local means fast response and deep familiarity with the area.',
      'Our Homebush jobs are mostly repointing, chimney repair, sandstone work and retaining walls. The building stock is similar to Strathfield and Burwood — good quality period homes that need proper heritage-grade materials to stay in shape.',
      'Reactive clay soils in parts of Homebush cause foundation movement on some properties. We diagnose with crack monitors, stitch cracks with helical bars, and underpin where the movement is still active.',
    ],
    housingContext:
      'Homebush has Federation and Interwar homes, Victorian pockets, and newer infill. Close proximity to Strathfield means similar building stock and heritage character. Reactive clay in some areas. Strathfield Council covers the area with heritage protections in parts.',
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
        question: 'Are you local to Homebush?',
        answer:
          'Yes — we are based in Strathfield, about 5 minutes from Homebush. Same-day inspections are usually possible and we know the area intimately.',
      },
      {
        question: 'How much does heritage repointing cost on a Homebush Federation home?',
        answer:
          'Single-storey Federation home front facade typically $6,000–$12,000. Full external $15,000–$35,000 depending on size, condition and access. Every job is different — firm quote after inspection.',
      },
      {
        question: 'Can you do the work while we are living in the house?',
        answer:
          'Yes — almost all external masonry work happens with the house fully occupied. Noise and scaffolding are the main disruptions but the house stays habitable throughout.',
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
