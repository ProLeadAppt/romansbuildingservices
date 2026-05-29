// Building-era / heritage style pages.
// These target high-intent informational queries from owners of period
// homes — "federation home restoration sydney", "victorian terrace repointing",
// etc. Each page is hand-written long-form expertise, not templated.

export interface HeritageEraData {
  slug: string;
  name: string;
  era: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  intro: string[];
  characteristics: string[];
  commonIssues: Array<{ title: string; detail: string }>;
  ourApproach: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: Array<{ title: string; href: string }>;
}

export const HERITAGE_ERAS: Record<string, HeritageEraData> = {
  'federation-home-restoration': {
    slug: 'federation-home-restoration',
    name: 'Federation Home Restoration',
    era: '1890 – 1915',
    metaTitle: 'Federation Home Restoration Sydney | Romans Building Services',
    metaDescription:
      'Federation home restoration in Sydney. Tuckpointing, render repair, sandstone work and structural repairs on period homes with correct materials.',
    heroTagline:
      'Restoring Federation-era homes across Sydney with materials and methods matched to the original build.',
    intro: [
      'Federation homes are one of Sydney\'s most distinctive housing styles — built roughly between 1890 and 1915, they sit in suburbs like Haberfield, Strathfield, Mosman, Chatswood and across the leafier streets of the Inner West and North Shore. Decorative brickwork, terracotta tile roofs, leadlight windows and ornamental render and timber detail make them instantly recognisable. They\'re also over a century old, which means almost every one needs work somewhere.',
      'Restoring a Federation home properly means understanding how they were built. The brickwork uses Sydney red brick laid in lime-cement mortars. Original tuckpointing was nearly always applied. Roughcast or smooth render was often run as decorative panels. Internal walls are plastered on timber lath. Skipping any of this and using modern materials in the wrong place is how Federation homes get ruined, even with good intentions.',
      'We\'ve worked on Federation homes across Sydney for 30 years. The work is rewarding because the original craftsmanship is genuinely good — you\'re carrying on something rather than fighting it.',
    ],
    characteristics: [
      'Sydney red brickwork, often with cream brick or rendered detailing as contrast',
      'Original lime tuckpointing — usually painted over or weathered away by now',
      'Roughcast or smooth render panels, often in gables or on porch facings',
      'Terracotta Marseilles-pattern tile roofs',
      'Decorative chimney pots, finials and gable ornaments',
      'Sandstone or rendered window sills, plinths and steps',
      'Internal lime plaster on timber lath',
      'Verandahs with timber detailing and tiled floors',
    ],
    commonIssues: [
      {
        title: 'Painted-over tuckpointing',
        detail:
          'The most common Federation-era loss. Owners through the 1960s–80s painted over the original brickwork and tuckpointing, sometimes multiple times. Stripping back to original brick and re-tuckpointing transforms the look and dramatically lifts the value. The work is slow but it\'s the single biggest visual restoration step on most Federation homes.',
      },
      {
        title: 'Failed cement repointing on lime walls',
        detail:
          'Many Federation walls have been repointed at some stage with hard modern cement mortar. The cement is stronger than the surrounding brick, so as the wall expands and contracts, the brick faces spall around the mortar joints. We see this constantly. Proper fix is full rake-out and re-pointing with matched lime mortar.',
      },
      {
        title: 'Cracked or detached render',
        detail:
          'Original Federation render was lime-based and breathable. Where it\'s been patched with cement render or sealed with acrylic paint, moisture gets trapped and the render bubbles, cracks and detaches in sheets. Replacement uses lime-based render compatible with the original substrate.',
      },
      {
        title: 'Rusted lintels and damp courses',
        detail:
          'Many Federation homes have early steel or wrought iron lintels above doors and windows. After 100+ years they\'re often rusted and pushing the brickwork above them apart. Original slate damp-proof courses commonly fail too, leading to rising damp through ground-floor walls.',
      },
      {
        title: 'Sandstone sill and step erosion',
        detail:
          'Sandstone components — sills, plinths, steps — weather and lose detail over a century. We do dutchman repairs or full replacement with matched stone, depending on the level of damage. Cleaning has to be done with low-pressure methods; high-pressure cleaning destroys soft sandstone.',
      },
    ],
    ourApproach: [
      'Site assessment first — walking the building with the owner, identifying what\'s original and what\'s been altered, and triaging by urgency',
      'Test panels for every visible repair — tuckpointing, render colour, pointing mortar — before committing to whole-wall work',
      'Sourcing matched materials: Sydney red brick from salvage yards, matched sandstone, lime putty mortars mixed on site',
      'Heritage council documentation where required, including for listed properties or those in heritage conservation zones',
      'Sequencing work so the home remains liveable through the job',
    ],
    faqs: [
      {
        question: 'How long does a full Federation home exterior restoration take?',
        answer:
          'It depends on scope. A typical Federation terrace with paint stripping, tuckpointing, render repair and lintel work runs 8–16 weeks. A larger detached Federation home with sandstone work and roof restoration can be 4–6 months. We sequence work so the home stays liveable throughout.',
      },
      {
        question: 'Can you match original mortar and brick colours?',
        answer:
          'Yes. We mix lime putty mortars on site and adjust the colour by adding earth pigments and matching aggregate. Brick matching uses salvaged Sydney red brick of similar age, plus careful selection of face direction so the weathered surface points outward. We always do test panels before committing.',
      },
      {
        question: 'Do I need council approval to restore my Federation home?',
        answer:
          'It depends on the work and whether the property is heritage-listed or in a conservation area. Like-for-like restoration of original materials usually doesn\'t need approval, but anything that changes the appearance or fabric does. We handle the documentation when approval is required.',
      },
      {
        question: 'Is it worth restoring or should we modernise?',
        answer:
          'Restored Federation homes consistently command a premium over similar-size modernised ones, especially in established suburbs. The original detailing — leadlight, decorative brickwork, ornate timber — is almost impossible to replicate authentically. We\'ve never had an owner regret restoring properly.',
      },
    ],
    relatedServices: [
      { title: 'Heritage Brick Repairs', href: '/services/heritage-restoration/heritage-brick-repairs' },
      { title: 'Tuckpointing Restoration', href: '/problems/tuckpointing-restoration' },
      { title: 'Heritage Masonry', href: '/services/heritage-restoration/heritage-masonry' },
      { title: 'Heritage Restoration Services', href: '/services/heritage-restoration' },
    ],
  },

  'victorian-terrace-restoration': {
    slug: 'victorian-terrace-restoration',
    name: 'Victorian Terrace Restoration',
    era: '1840 – 1900',
    metaTitle: 'Victorian Terrace Restoration Sydney | Romans Building Services',
    metaDescription:
      'Victorian terrace restoration across Sydney. Lime mortar repointing, tuckpointing, render repair and structural work in Paddington, Newtown and Surry Hills.',
    heroTagline:
      'Sydney\'s Victorian terraces are 150+ years old and deserve restoration done the right way — with the right materials.',
    intro: [
      'Paddington, Surry Hills, Newtown, Glebe, Erskineville and Balmain are full of Victorian terraces — most built between 1840 and 1900. Single-fronted workers\' cottages, two-storey middle-class terraces, grand three-storey corner blocks — they share a common construction: Sydney red brick on lime mortar, sometimes rendered, with sandstone or cast iron details. They were built for a working harbour city and they\'ve survived a century and a half of weather, traffic and amateur renovations.',
      'Most of the terraces we work on today have had at least one bad intervention in the last 50 years. Cement render slapped over original lime render. Cement mortar repointing on top of lime mortar. Paint over original tuckpointing. Aluminium windows in original openings. Concrete slab additions cutting through original drainage. Untangling these is part of every job.',
      'Done properly, restoration brings the terrace back to something close to original — and dramatically increases value. Done badly, you trap moisture, damage the brick, and undo work that lasted 130 years in less than a decade.',
    ],
    characteristics: [
      'Sydney red brick laid in lime-rich mortar — soft, breathable, designed to flex with the wall',
      'Original tuckpointing (the fine white fillet line on each joint) — usually now hidden under paint',
      'Slate or stone damp-proof course — often failed by now',
      'Lime render on facades, sometimes incised to look like sandstone',
      'Cast iron lacework on balconies and verandahs',
      'Sandstone or bluestone steps, plinths and basement walls',
      'Timber-framed sash windows in original openings',
      'Internal lime plaster on timber lath, ornate ceiling roses and cornices',
    ],
    commonIssues: [
      {
        title: 'Cement render trapping moisture',
        detail:
          'The single most common damage we see. Cement render applied over original lime render or brick traps moisture that can\'t escape, leading to rising damp inside, spalling brick faces, and the render eventually detaching. The fix is removing the cement render and replacing with lime-based render that lets the wall breathe.',
      },
      {
        title: 'Hard cement mortar repointing',
        detail:
          'Cement mortar is harder than Sydney red brick. As the wall expands and contracts, the mortar transfers stress to the brick faces, which spall and crack. After 30–40 years of this, the brick is damaged but the mortar joints are intact — exactly the opposite of how a heritage wall is meant to age. Full rake-out and re-pointing with matched lime mortar is the only proper fix.',
      },
      {
        title: 'Failed damp-proof course',
        detail:
          'Slate DPCs commonly fail after 100+ years through cracking or being bypassed by raised garden beds or render. Rising damp shows as a tidemark up the inside of walls, paint blowing off, and salt bloom at skirting level. Chemical DPC injection plus removal of any moisture-trapping coatings restores the wall.',
      },
      {
        title: 'Cracking from settlement',
        detail:
          'Victorian terraces sit on shallow stone footings, often on reactive clay. Seasonal movement causes cracks — most cosmetic, some real. Every crack needs assessment against actual movement before deciding repair. We use level checks and tell-tales over time where active movement is suspected.',
      },
      {
        title: 'Lost or damaged original detailing',
        detail:
          'Cast iron lacework has often been stripped, sandstone steps worn, original timber details replaced with modern stand-ins. Sourcing and replicating these is part of full restoration. There are still foundries doing matched cast iron work, and we know the salvage networks for sandstone and joinery.',
      },
    ],
    ourApproach: [
      'Heritage-first material selection — lime mortars, breathable renders, matched bricks and stone',
      'Test panels visible from the street before committing to whole-facade work, so you can sign off on colour and texture',
      'Sequencing work to keep the terrace habitable — start at the back, move forward',
      'Heritage council liaison for listed terraces and properties in heritage conservation areas',
      'Honest scope — we tell you what needs doing now and what can wait, with realistic timing on each',
    ],
    faqs: [
      {
        question: 'What\'s the difference between repointing and tuckpointing?',
        answer:
          'Repointing replaces the mortar in the joints. Tuckpointing adds a fine, raised white fillet line in the centre of each joint to make the brickwork look uniform — it was the original Victorian detail. Most of our terrace work involves both: rake out the failed mortar, repoint with matched lime mortar, then run the tuckpointing fillet on top.',
      },
      {
        question: 'My terrace has cement render over the original brick. Should we strip it?',
        answer:
          'If the cement render is causing damp problems inside, yes. If it\'s sound and dry, you have a choice — leave it as a sealed layer or strip back to original brickwork and tuckpoint properly. Stripping is a significant job but it transforms the look of the terrace. We help owners decide based on the wall\'s condition and the look they want.',
      },
      {
        question: 'Can we run modern services through the walls during restoration?',
        answer:
          'Yes. We work alongside electricians and plumbers regularly. The trick is chasing services in carefully and patching with materials that match — never cutting structural masonry without proper consideration.',
      },
      {
        question: 'How much does a Victorian terrace restoration cost?',
        answer:
          'Full external restoration on a single-fronted terrace typically runs $40k–$120k depending on scope, condition and approvals. Larger or worse-condition terraces go higher. We give itemised quotes after walking the building — no fixed price templates.',
      },
    ],
    relatedServices: [
      { title: 'Heritage Brick Repairs', href: '/services/heritage-restoration/heritage-brick-repairs' },
      { title: 'Tuckpointing Restoration', href: '/problems/tuckpointing-restoration' },
      { title: 'Repointing', href: '/services/masonry/repointing' },
      { title: 'Heritage Restoration Services', href: '/services/heritage-restoration' },
    ],
  },

  'colonial-sandstone-buildings': {
    slug: 'colonial-sandstone-buildings',
    name: 'Colonial Sandstone Building Restoration',
    era: '1788 – 1880',
    metaTitle: 'Colonial Sandstone Restoration Sydney | Romans Building Services',
    metaDescription:
      'Colonial sandstone building restoration across Sydney. Stone matching, lime mortar repointing, consolidation and dutchman repairs on Sydney\'s oldest buildings.',
    heroTagline:
      'Sydney\'s colonial sandstone buildings are some of Australia\'s most important structures. Restoration demands materials and methods matched to the 19th century.',
    intro: [
      'Sydney\'s colonial-era sandstone buildings — the ones in The Rocks, around Hyde Park, through Parramatta and Windsor — are part of the country\'s built heritage. Most date from the 1820s through to the 1870s, built from Hawkesbury or Pyrmont sandstone with lime mortar joints. They\'ve survived 150–200 years, but they need ongoing care from trades who understand how they were originally built.',
      'Working on colonial sandstone is technical. The stone is soft. The mortar is lime. The construction details — through-stones, weight transfer, water shedding — are different from modern building. Cement-based repairs and modern abrasive cleaning destroy these buildings. Every repair we do uses materials and methods consistent with the original construction.',
      'We\'ve worked on colonial sandstone properties across Sydney for over 20 years, including heritage-listed buildings. Council and heritage approvals are part of the job, not an obstacle.',
    ],
    characteristics: [
      'Hawkesbury or Pyrmont sandstone, hand-cut and laid in lime mortar',
      'Coursed ashlar walls with through-stones tying back to interior structure',
      'Lime mortar joints — soft, breathable, designed to fail before the stone does',
      'Hand-cut detailing on lintels, sills, quoins and string courses',
      'Slate or timber damp-proof layers — often gone or compromised by now',
      'Iron tie-rods and cramps internal to the stonework — sometimes rusted',
      'Original lime washes or limewash finishes on some buildings',
    ],
    commonIssues: [
      {
        title: 'Sugaring and contour scaling',
        detail:
          'Sandstone weathers by losing the surface in granular form (sugaring) or in flakes parallel to the bedding plane (contour scaling). Salt accelerates both. We see it constantly on coastal-facing facades and at the base of walls where ground moisture rises. Treatment is consolidation with breathable stone consolidants and, where stone is too far gone, dutchman repair or full block replacement.',
      },
      {
        title: 'Failed cement repairs',
        detail:
          'Many colonial buildings have been patched at some point with cement mortar or, worse, Portland-cement render. The cement is harder than the stone and traps moisture against the sandstone, accelerating decay. Removing these and replacing with lime-based mortars is often the first step in serious restoration.',
      },
      {
        title: 'Rusted internal iron',
        detail:
          'Some colonial sandstone buildings have iron tie-rods or cramps embedded internally. After 150 years these have often rusted, expanded, and started cracking the surrounding stone from inside. Treatment requires opening up, replacing or isolating the iron, and rebuilding the stonework. Specialist work.',
      },
      {
        title: 'Eroded mortar joints',
        detail:
          'Lime mortar lasts 80–100 years before needing repointing. Many colonial buildings are well past that. Joints have weathered back, allowing water deep into the wall. Repointing with matched lime mortar — carefully matched to the original — restores weather resistance without putting harder material into a soft wall.',
      },
      {
        title: 'Inappropriate cleaning damage',
        detail:
          'High-pressure water blasting, sand blasting and chemical cleaning all destroy soft sandstone surfaces. We see colonial buildings where the original tool marks and surface patina have been blasted away, dramatically aging the stone. Cleaning must be done with low-pressure methods only.',
      },
    ],
    ourApproach: [
      'Detailed survey of every stone — condition, weathering pattern, original tooling — before any work',
      'Heritage council and Sydney Harbour Foreshore Authority documentation where required',
      'Sourcing matched sandstone from quarries still producing Hawkesbury and Pyrmont stone',
      'Hand-cutting replacement blocks to match original tool marks and weathering',
      'Mortar mix design specific to each building, with test panels approved before work',
      'Low-pressure cleaning methods only — typically water mist and bristle brushes',
    ],
    faqs: [
      {
        question: 'Can you work on Heritage-listed colonial buildings?',
        answer:
          'Yes. We have worked on State Heritage Register and locally-listed colonial properties for over 20 years. We prepare the documentation needed for heritage council approval, including statements of significance, conservation method statements and material samples.',
      },
      {
        question: 'How do you source matching sandstone for repairs?',
        answer:
          'Hawkesbury sandstone is still quarried, as is Pyrmont stone in limited quantities. We work with established quarries and stone yards to source blocks that match grain, colour and density. New stone is patinated before installation so it doesn\'t stand out against weathered surrounding stone.',
      },
      {
        question: 'What\'s a dutchman repair?',
        answer:
          'A dutchman is a patch repair where damaged stone is cut out and a matched piece is inserted and pinned in. It\'s used when the damage is local — a corner, a face, a detail — and replacing the whole block isn\'t justified. Done well, the repair is barely visible. We do a lot of dutchman work on colonial buildings.',
      },
      {
        question: 'Why is cement mortar bad for sandstone?',
        answer:
          'Cement mortar is harder and less permeable than sandstone. As temperature and moisture change, the stone has to absorb all the movement — which it can\'t. The result is cracking and spalling of the stone faces around the cement joints. Cement also blocks moisture from escaping, which accelerates internal decay. Lime mortar is softer, more breathable, and behaves the way the original mortar did.',
      },
    ],
    relatedServices: [
      { title: 'Heritage Stone Restoration', href: '/services/heritage-restoration/heritage-stone' },
      { title: 'Heritage Masonry', href: '/services/heritage-restoration/heritage-masonry' },
      { title: 'Sandstone Weathering', href: '/problems/sandstone-weathering' },
      { title: 'Repointing', href: '/services/masonry/repointing' },
    ],
  },

  'art-deco-building-restoration': {
    slug: 'art-deco-building-restoration',
    name: 'Art Deco Building Restoration',
    era: '1925 – 1945',
    metaTitle: 'Art Deco Building Restoration Sydney | Romans Building Services',
    metaDescription:
      'Art Deco building restoration in Sydney. Render and masonry repair on the Inter-war apartments, cinemas and commercial buildings that define Sydney\'s 1930s architecture.',
    heroTagline:
      'Sydney\'s 1920s–1940s Art Deco apartments, shopfronts and cinemas need restoration that respects the modernist material palette.',
    intro: [
      'Sydney has one of the best collections of Art Deco buildings in the Southern Hemisphere — the inter-war apartment blocks of Potts Point, Elizabeth Bay, Kings Cross and Bondi, the corner shopfronts across the Inner West, the few remaining cinemas and commercial buildings. Built mostly between 1925 and 1945, these buildings represent a distinct construction era using cement renders, terrazzo, structural concrete and decorative stuccowork.',
      'Restoration of Art Deco buildings is different from earlier eras. The materials shifted — Portland cement was now widely used, structural reinforced concrete appeared, render became cement-based rather than lime-based. The repairs that suit a Victorian terrace are wrong for an Art Deco apartment block, and vice versa. Getting this right matters.',
      'We work on Art Deco strata blocks regularly through Potts Point, Elizabeth Bay, Bondi, Manly and other Sydney suburbs. The detailing — chevrons, stepped parapets, geometric patterns in render and brick — needs careful work to preserve.',
    ],
    characteristics: [
      'Smooth Portland cement render finishes with sharp geometric detailing',
      'Decorative stuccowork — chevrons, sunbursts, stylised foliage',
      'Brick or block construction behind the render',
      'Terrazzo entrance floors and steps',
      'Structural reinforced concrete in larger buildings — slabs, lintels, balconies',
      'Stepped parapets, curved corners, porthole windows',
      'Metal-framed casement windows in original openings',
      'Decorative wrought iron balustrading',
    ],
    commonIssues: [
      {
        title: 'Cracked and detached render',
        detail:
          'Art Deco render is cement-based and brittle. After 80+ years of expansion, contraction and minor settlement, cracking is universal. Where water has got behind, render sheets detach from the substrate. Repair means cutting out failed sections, repairing any underlying damage to the brick or block, and re-rendering with matched material and finish.',
      },
      {
        title: 'Concrete cancer in structural elements',
        detail:
          'Reinforced concrete from the inter-war era was often built with insufficient cover over the steel. Combined with carbonation over decades, this leads to widespread concrete cancer in balconies, parapets, lintels and slabs. We see this on most Art Deco strata blocks we assess. Treatment is full cut-back, steel treatment, salt-resistant patch mortar and protective coatings.',
      },
      {
        title: 'Loss of decorative detail',
        detail:
          'Sharp geometric details — chevrons, stepped reveals, sunbursts — soften and lose definition over decades. Render repairs done badly fill in the original sharpness, making the building lose its character. Proper repair uses templates and careful trowelling to maintain original lines.',
      },
      {
        title: 'Steel window frame deterioration',
        detail:
          'Many Art Deco buildings retain original steel casement windows. Where these have rusted, the frames push the surrounding render and brickwork apart. Window restoration is specialist work, but we coordinate with restoration glaziers and repair the masonry damage they cause.',
      },
      {
        title: 'Salt damage on coastal Art Deco',
        detail:
          'Bondi, Manly and the harbourside Art Deco blocks suffer real salt damage on cement render and exposed concrete. Treatment is similar to other coastal masonry — remove failed sections, address salt content in the substrate, re-render with salt-tolerant systems and apply breathable salt-blocking coatings.',
      },
    ],
    ourApproach: [
      'Render specification matched to original — colour, aggregate, finish (smooth, textured, scored)',
      'Geometric detail templates taken from undamaged sections before repair, so original lines are preserved',
      'Strata committee coordination — most Art Deco work involves shared-property approvals',
      'Staged programs for whole-building remediation, typically 1–3 years',
      'Heritage council documentation for State and locally-listed properties',
    ],
    faqs: [
      {
        question: 'Can you match Art Deco render finishes?',
        answer:
          'Yes. Smooth Art Deco render, textured "trowel skim" finishes, and scored "ashlar" finishes can all be matched. We do test panels with the existing render before committing to a whole-wall repair. Colour matching uses pigments added to the render mix, not paint over the top.',
      },
      {
        question: 'My building has concrete cancer in the balconies. What\'s involved in fixing it?',
        answer:
          'Full assessment first — every balcony, sounding for hollows, checking the worst ones first. Then a staged program: cut out failed concrete, treat the steel with a corrosion inhibitor, patch with salt-resistant repair mortar, apply a breathable protective coating. We coordinate with strata committees on the budgeting and timing.',
      },
      {
        question: 'Do you work on heritage-listed Art Deco buildings?',
        answer:
          'Yes. We prepare conservation management documentation and work to council requirements on State Heritage Register and locally-listed Art Deco properties.',
      },
      {
        question: 'How long does Art Deco restoration take?',
        answer:
          'Depends on scope. A single facade repair runs 4–8 weeks. A whole-building strata remediation can be 6–18 months, often staged across 2–3 financial years. We give realistic timelines after the initial assessment.',
      },
    ],
    relatedServices: [
      { title: 'Building Restoration', href: '/services/building-restoration' },
      { title: 'Facade Renovation', href: '/services/building-restoration/facade-renovation' },
      { title: 'Concrete Cancer Treatment', href: '/services/concrete-repairs/concrete-cancer' },
      { title: 'Strata Repairs', href: '/services/remedial-building/strata-repairs' },
    ],
  },

  'inter-war-cottage-restoration': {
    slug: 'inter-war-cottage-restoration',
    name: 'Inter-war Cottage Restoration',
    era: '1918 – 1945',
    metaTitle: 'Inter-war Cottage Restoration Sydney | Romans Building Services',
    metaDescription:
      'Inter-war and California bungalow restoration across Sydney. Brick repointing, render repair, sandstone work and structural repairs on 1920s–1940s homes.',
    heroTagline:
      'Sydney\'s 1920s–1940s cottages and California bungalows are everywhere — and most need work after a century of weather and renovation cycles.',
    intro: [
      'Inter-war housing — the cottages, California bungalows, Spanish Mission homes and Tudor Revivals built between the wars — fills entire suburbs across Sydney. Burwood, Concord, Strathfield, Haberfield, Mosman, Lane Cove, Vaucluse and Bellevue Hill all have streets of them. They\'re typically face brick, sometimes with decorative render or tiles, on substantial timber-framed roofs.',
      'These homes are now 80–100+ years old. Most have been altered, extended, repainted or partially renovated multiple times. Some have been beautifully maintained; many have had bad work done in the 1960s–80s that needs unpicking. Our job on inter-war homes is usually a mix of repair, careful removal of bad alterations, and bringing materials back to where they should be.',
      'The good news: inter-war construction was generally solid. Solid double-brick walls, decent footings, good timber. When the issues are addressed properly, these homes have plenty of life left.',
    ],
    characteristics: [
      'Solid double-brick or brick-veneer construction',
      'Face brick exteriors, often with decorative banding or quoining in contrast brick',
      'Decorative render panels — Spanish Mission stucco, Tudor half-timbering, California bungalow porch detailing',
      'Tile roofs (terracotta or concrete) with deep eaves',
      'Decorative timber porch and verandah structures',
      'Sandstone or concrete plinths and steps',
      'Early Portland cement mortars — harder than Victorian-era lime but softer than modern',
    ],
    commonIssues: [
      {
        title: 'Painted brick faces',
        detail:
          'Many inter-war homes had their original face brick painted at some point — usually a 1970s–80s "modernisation". Stripping paint to expose original brick is a major undertaking but the result is dramatic. Done carefully with chemical strippers (not abrasive blasting), the original brick recovers well.',
      },
      {
        title: 'Cracked render panels',
        detail:
          'Decorative render — especially Spanish Mission stucco and California bungalow porch detailing — cracks over decades. Where the cracking is just surface, we patch and re-finish. Where the render has detached from the substrate, full section replacement is needed.',
      },
      {
        title: 'Failed mortar joints',
        detail:
          'Inter-war mortars were transitioning from lime-rich to harder Portland cement-rich mixes. Many of these mortars have failed at the joint faces, leaving open joints that let water deep into the wall. Repointing with a matched mortar — softer than modern cement, harder than Victorian lime — is the right approach.',
      },
      {
        title: 'Rusted lintels',
        detail:
          'Inter-war steel lintels above doors and windows commonly rust and push the brickwork apart. Replacement with new structurally-rated steel, properly corrosion-protected, plus repair of the surrounding brickwork.',
      },
      {
        title: 'Foundation settlement',
        detail:
          'Inter-war footings were generally shallow concrete or sandstone. On reactive clay soils around the Inner West and Sydney metro suburbs, seasonal movement is normal. Most cracking is cosmetic but should be checked. Where active movement is happening, targeted underpinning may be needed.',
      },
    ],
    ourApproach: [
      'Mortar mix design specific to the building age — not too soft, not too hard',
      'Salvaged or matched face brick for any replacements',
      'Chemical paint stripping where exposing original brick is the goal — never abrasive blasting on inter-war brickwork',
      'Render finish matching with test panels — Spanish Mission texture is particularly hard to fake',
      'Honest assessment of which alterations are worth keeping and which should be reversed',
    ],
    faqs: [
      {
        question: 'Can you strip paint off our inter-war brick exterior?',
        answer:
          'Yes. We use specialist chemical paint strippers designed for masonry, not abrasive blasting which damages the brick face. It\'s slow work — several applications usually needed — and we always do test panels first to confirm the brick underneath is in good condition. The result transforms the look of the home.',
      },
      {
        question: 'Our California bungalow has cracked render around the porch. What\'s the fix?',
        answer:
          'Depends on whether the render has just cracked or has detached. Crack-only damage is patched and re-finished. Detached render needs cutting out, substrate repair, and full re-render with matched texture. We sample existing render to match colour and aggregate.',
      },
      {
        question: 'How do you match decorative brick banding?',
        answer:
          'Salvage yards stock a lot of inter-war brick. We source matched bricks for the contrast banding and quoining. Where exact matches aren\'t available, we make do with the closest match and accept that any new work will be visible up close.',
      },
      {
        question: 'What\'s the cost range for inter-war cottage restoration?',
        answer:
          'External facade restoration typically runs $20k–$80k on a single-storey cottage, depending on scope. Adding paint stripping and full re-pointing pushes it higher. Two-storey or larger homes scale accordingly. We give itemised quotes after walking the property.',
      },
    ],
    relatedServices: [
      { title: 'Heritage Brick Repairs', href: '/services/heritage-restoration/heritage-brick-repairs' },
      { title: 'Repointing', href: '/services/masonry/repointing' },
      { title: 'Building Restoration', href: '/services/building-restoration' },
      { title: 'Cracked Brick Walls', href: '/problems/cracked-brick-walls' },
    ],
  },
};

export const getHeritageEra = (slug: string): HeritageEraData | undefined => HERITAGE_ERAS[slug];

export const getAllHeritageEras = (): HeritageEraData[] => Object.values(HERITAGE_ERAS);
