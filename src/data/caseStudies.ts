import type { GalleryImage } from '@/data/galleryImages';
import { galleryImages } from '@/data/galleryImages';

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyFaq {
  question: string;
  answer: string;
}

export interface CaseStudyLink {
  label: string;
  href: string;
}

export interface CaseStudy {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  clientType: string;
  suburbName: string;
  suburbSlug: string;
  locationHref?: string;
  parentAreaName: string;
  parentAreaHref: string;
  completedYear: string;
  durationWeeks: number;
  primaryService: string;
  primaryServiceHref: string;
  relatedServices: CaseStudyLink[];
  hero: CaseStudyImage;
  gallery: CaseStudyImage[];
  problem: string[];
  solution: string[];
  result: string[];
  testimonial?: { quote: string; attribution: string };
  faqs: CaseStudyFaq[];
}

const findImage = (id: string): GalleryImage | undefined =>
  galleryImages.find((img) => img.id === id);

const imageEntry = (id: string, caption?: string): CaseStudyImage => {
  const img = findImage(id);
  if (!img) {
    return {
      src: '/og-image.png',
      alt: caption ?? 'Romans Building Services project photo',
      caption,
    };
  }
  return {
    src: img.full,
    alt: img.alt,
    caption,
  };
};

const HERITAGE_CHURCH_IMG = 'romansstone_1466993917_1281560327394079553_2394650725';
const SEAWALL_IMG = 'romansstone_1572902412_2169985170382604428_2394650725';
const SEAWALL_BLOCKS_IMG = 'romansstone_1573158881_2172136589462153880_2394650725';
const SEAWALL_PROGRESS_IMG = 'romansstone_1569891668_2144729222206594691_2394650725';
const CHIMNEY_IMG = 'romansstone_1617135591_2541039971017938059_2394650725';
const CHIMNEY_MASON_IMG = 'romansstone_1568583636_2133756652208586791_2394650725';
const FIREPLACE_IMG = 'romansstone_1610308835_2483772994075744932_2394650725';
const BATHROOM_IMG = 'romansstone_1625099894_2607849386215395716_2394650725';
const STEPS_IMG = 'romansstone_1571692826_2159838430010564709_2394650725';
const GARDEN_WALL_IMG = 'romansstone_1571599727_2159057455018301350_2394650725';
const RETAINING_WALL_IMG = 'romansstone_1574881936_2186590621387736148_2394650725';
const LINTEL_PROGRESS_IMG = 'romansstone_1569273163_2139540821752764425_2394650725';
const LINTEL_DONE_IMG = 'romansstone_1569273163_2139540821761096050_2394650725';
const STEEL_LINTEL_IMG = 'romansstone_1452415091_1159264269511646168_2394650725';
const DAMP_COURSE_IMG = 'romansstone_1527892303_1792413009266007680_2394650725';
const WATERPROOFING_IMG = 'romansstone_1569789894_2143875479613416787_2394650725';
const FOUNDATION_DEMO_IMG = 'romansstone_1529916671_1809394640694315848_2394650725';
const HERITAGE_BATTLESHIP_IMG = 'romansstone_1571801227_2160747763900813654_2394650725';
const HERITAGE_DECORATIVE_IMG = 'romansstone_1451942270_1155297957273885284_2394650725';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'heritage-church-brick-restoration-sydney-cbd',
    metaTitle: 'Sydney CBD Heritage Brick Restoration | Case Study',
    metaDescription:
      'Sydney CBD heritage church with failing brickwork, lime mortar repointing and facade restoration completed without disturbing services.',
    clientType: 'Heritage-listed Anglican church, Sydney CBD',
    suburbName: 'Sydney CBD',
    suburbSlug: 'sydney-cbd',
    locationHref: '/areas/sydney-cbd/',
    parentAreaName: 'Sydney CBD',
    parentAreaHref: '/areas/sydney-cbd',
    completedYear: '2024',
    durationWeeks: 5,
    primaryService: 'Heritage Brick Repairs',
    primaryServiceHref: '/services/heritage-restoration/heritage-brick-repairs',
    relatedServices: [
      { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
      { label: 'Repointing', href: '/services/masonry/repointing' },
      { label: 'Facade Renovation', href: '/services/building-restoration/facade-renovation' },
    ],
    hero: imageEntry(HERITAGE_CHURCH_IMG, 'Heritage church brick restoration on a Sydney CBD facade'),
    gallery: [
      imageEntry(HERITAGE_DECORATIVE_IMG, 'Decorative stonework also restored on the same facade'),
      imageEntry(HERITAGE_BATTLESHIP_IMG, 'Sandstone block walls finished to match original'),
    ],
    problem: [
      'A heritage-listed sandstone-and-brick church in the Sydney CBD had been letting water in for the better part of a decade. The original lime mortar between the bricks had worn away in sections, and modern cement-based repointing from a 1990s repair was trapping moisture inside the wall.',
      'The parish committee had quotes from two larger heritage contractors who wanted to scaffold the entire facade and replace large sections of brick. Both quotes came in well over their restoration budget. They wanted someone who would only replace what was actually failing and match the period brick.',
      'A heritage consultant was already involved on paperwork. They needed a builder who could read the spec, source matching brick, and not need their hand held through compliance.',
    ],
    solution: [
      'We scaffolded only the south and west elevations where the worst damage was. The north elevation had surface weathering but sound pointing, so it got a soft clean and a lime wash to bring the colour back.',
      'The failing cement pointing was raked out by hand to a depth of 25mm. We never used an angle grinder on heritage brickwork — it shatters the arrises and leaves a tell-tale grey smear on the face of the brick that does not come off.',
      'New bricks were sourced from a yard in Marrickville that still kiln-fires the old Sydney Common sizes. Three batches came in before we got one that matched the texture and firing colour of the originals. The parish committee kept the offcuts.',
      'Repointing was done in three coats of lime putty mortar, hand-mixed on site with crushed Sydney sandstone aggregate. We deliberately stopped each day\'s work on a natural joint line so the curing was even and the colour bands did not show.',
    ],
    result: [
      'The facade is now weathertight without trapping moisture. The parish committee has had two wet seasons since with no new ingress reported.',
      'Heritage consultant signed off the work without a single rework request. We were asked back eighteen months later to quote on the bell tower.',
      'The total came in at 38% under the larger contractors\' quotes. Not because the work was cheaper — the materials were the same — but because we did not replace anything that did not need replacing.',
    ],
    testimonial: {
      quote:
        'Romans came in under budget and did the job properly. The other two contractors wanted to rebuild half the facade. Minas and the team only touched what needed touching, and you cannot see where the new brick goes into the old.',
      attribution: 'Church warden, Sydney CBD',
    },
    faqs: [
      {
        question: 'How long does heritage brick repointing take on a church-sized facade?',
        answer:
          "The programme depends on the surveyed repair extent, scaffold and pedestrian protection, permissions, access around services and the specified mortar’s curing needs. Agree those constraints and any consultant inspections before setting dates. A previous project’s duration is not a schedule for another facade.",
      },
      {
        question: 'Do you handle heritage approval paperwork?',
        answer:
          "Confirm who is responsible for the heritage assessment, application, specifications and approvals before work starts. A heritage adviser may need information from the builder about the proposed materials and method. Discuss what Romans can provide for the agreed scope; do not assume a contractor’s quote replaces the required permission.",
      },
      {
        question: 'What does heritage brick repointing cost per square metre?',
        answer:
          "A useful quote needs the repair area, height, access, masonry condition, proposed materials and any conservation requirements. Scaffold, trial work, specialist advice and disposal can change the total. Ask for an itemised scope and exclusions rather than applying a square-metre rate from a different building.",
      },
    ],
  },
  {
    slug: 'sandstone-seawall-restoration-mosman',
    metaTitle: 'Mosman Sandstone Seawall Restoration | Case Study',
    metaDescription:
      'Mosman waterfront sandstone seawall rebuilt with hand-dressed blocks, salt-resistant mortar and tidal-window staging.',
    clientType: 'Waterfront heritage home, Mosman',
    suburbName: 'Mosman',
    suburbSlug: 'mosman',
    parentAreaName: 'North Shore',
    parentAreaHref: '/areas/north-shore',
    completedYear: '2024',
    durationWeeks: 4,
    primaryService: 'Sandstone Seawall Restoration',
    primaryServiceHref: '/services/masonry/stone-masonry-repairs',
    relatedServices: [
      { label: 'Stone Masonry Repairs', href: '/services/masonry/stone-masonry-repairs' },
      { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
      { label: 'Retaining Walls', href: '/services/masonry/retaining-walls' },
    ],
    hero: imageEntry(SEAWALL_IMG, 'Completed sandstone seawall with Sydney Harbour Bridge backdrop'),
    gallery: [
      imageEntry(SEAWALL_BLOCKS_IMG, 'Cut sandstone blocks prepared for harbour wall restoration'),
      imageEntry(SEAWALL_PROGRESS_IMG, 'Stonemason repointing harbour sandstone seawall'),
    ],
    problem: [
      'The property sat on a sandstone-block seawall built in the 1930s. Salt, tide, and two recent king tides had opened up the mortar joints in three separate runs. Two of the upper courses were visibly leaning.',
      'The owners had been told by a landscaper that they would need to demolish the wall and pour a new concrete one. They did not want that — the sandstone wall was the reason they bought the house, and a concrete wall would have killed the harbour view from the lawn.',
      'Council had flagged the wall as a maintenance issue but not a safety order. There was a window of about four months before the next big southerly swell season, which would have knocked the leaning courses into the harbour.',
    ],
    solution: [
      'We worked strictly in tidal windows. The lower courses were only touched in the four-hour window either side of low tide, and we never left a course open to overnight tide.',
      'The leaning upper courses were taken down by hand — no excavator, no breaker — and stacked on the lawn in order. Each block was inspected. About 60% could go back in. The rest were replaced with hand-dressed Hawkesbury sandstone from a quarry at Maroota.',
      'Mortar was a hot-lime mix with a small hydraulic component, designed to cure in the damp. Standard cement mortar would have failed in two winters against salt splash.',
      'The wall was rebuilt on its original footing profile. No concrete was poured. The drain behind the wall (which had been blocked with silt for years) was rodded out and a new ag-line was laid.',
    ],
    result: [
      'The wall has been through one full southerly season and the 2024 east coast low with no movement. The owners check it themselves after big weather and report back. No new cracks.',
      'The lawn side of the wall now drains properly. The lawn, which had been boggy for years, dried out within a month of the drain being cleared.',
      'Council was sent the photographic record and the material spec. No heritage order was raised — the wall was always on a maintenance footing, not a heritage listing, but the rebuild matched the original closely enough that the heritage advisor did not push for one.',
    ],
    faqs: [
      {
        question: 'Can a sandstone seawall be repaired, or does it have to be replaced?',
        answer:
          "An assessment needs to consider the foundations, retained ground, drainage, stone condition and exposure, not just the visible joints. Sound blocks may be reusable, but that does not establish that the original footing is adequate. A suitably qualified engineer should guide structural options and any temporary protection before dismantling or rebuilding.",
      },
      {
        question: 'Do you need council approval to repair a seawall in Mosman?',
        answer:
          "Check the exact property and proposed work with council and the relevant foreshore or land authority before starting. Coastal, heritage, environmental and landowner requirements may apply alongside planning controls. Like-for-like wording does not automatically make seawall work exempt, and a change in repair scope may change the permissions needed.",
      },
      {
        question: 'How long does a sandstone seawall restoration take?',
        answer:
          "Tidal access, weather, protection of adjoining property, engineering inspections and approval conditions can all affect the programme. Establish the designed repair extent and safe work sequence first, then agree the proposed schedule. Keep any urgent safety measures separate from the date for the full repair.",
      },
    ],
  },
  {
    slug: 'sandstone-chimney-rebuild-eastern-suburbs',
    metaTitle: 'Eastern Suburbs Sandstone Chimney Rebuild | Case Study',
    metaDescription:
      'Federation-era sandstone chimney rebuilt from the flashing up with matched stone and no roof tiles lifted.',
    clientType: 'Federation-era home, Eastern Suburbs',
    suburbName: 'Woollahra',
    suburbSlug: 'woollahra',
    parentAreaName: 'Eastern Suburbs',
    parentAreaHref: '/areas/eastern-suburbs',
    completedYear: '2023',
    durationWeeks: 2,
    primaryService: 'Heritage Stonework',
    primaryServiceHref: '/services/heritage-restoration/traditional-stonework',
    relatedServices: [
      { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
      { label: 'Stone Masonry Repairs', href: '/services/masonry/stone-masonry-repairs' },
      { label: 'Repointing', href: '/services/masonry/repointing' },
    ],
    hero: imageEntry(CHIMNEY_IMG, 'Two stonemasons rebuilding a sandstone chimney on a rooftop'),
    gallery: [
      imageEntry(CHIMNEY_MASON_IMG, 'Minas shaping replacement sandstone with mallet and chisel on site'),
    ],
    problem: [
      'The chimney had been patched three times with cement mortar over the previous twenty years. The cement had trapped moisture, the top courses had spalled, and the chimney pot was sitting on a bed of crumbly sandstone.',
      'A roof plumber had refused to do the flashing replacement until the chimney was sound. The owners could not get any other trade to quote the rebuild — most roofers do not do stonework, and most masons do not do roof work.',
      'The owners did not want to lose the original chimney pot. It was a rare late-Victorian Sydney-make and finding a match would have been near-impossible.',
    ],
    solution: [
      'Two of us on the roof. The chimney was taken down from the flashing up — about nine courses. The original pot was lifted down on a rope and set aside on padded boards on the lawn.',
      'Five of the original sandstone blocks were sound and went back in. The remaining four were replaced with hand-dressed Hawkesbury sandstone, cut on site to match the original coursing and the original rough-faced texture on the front elevation.',
      'Mortar was a 1:1:6 lime-putty, brickies sand and crushed Sydney sandstone mix, matched on the existing wall for colour. The chimney was struck off flush with the original profile.',
      'The pot was re-bedded on a fresh lime bed and the flashing was done by the roof plumber the next morning. No roof tiles were lifted.',
    ],
    result: [
      'The owners kept the original chimney pot. The roof plumber has used us for two more chimney rebuilds in the area since.',
      'No water ingress in the two wet seasons since. The chimney is weathertight and the lime mortar is curing properly — it has gone paler and harder, not darker and softer.',
      'The rebuild matches the original sandstone closely enough that the neighbour walked past for a month before noticing.',
    ],
    faqs: [
      {
        question: 'Can a sandstone chimney be repaired, or does it need to be completely rebuilt?',
        answer:
          "The chimney needs assessment as a whole, including stability, support, masonry, flashing and any effect on adjacent roof areas. Surface deterioration alone cannot determine where a rebuild should stop. Keep clear of loose or leaning masonry and arrange professional advice. Repairing the external stack does not certify the flue or fireplace as safe to use.",
      },
      {
        question: 'How do you match the original sandstone?',
        answer:
          "Compare the original stone’s texture, grain, colour, durability and condition before selecting replacements. A carefully agreed sample may help assess appearance and compatibility, particularly on significant heritage fabric. Availability varies, and new stone will not necessarily weather to an invisible match within a fixed period.",
      },
      {
        question: 'How long does a chimney rebuild take?',
        answer:
          "Height, roof access, scaffolding, the assessed rebuild extent and coordination with roofing or flue specialists affect timing. The programme also needs to allow for specified materials and inspections. Agree the work sequence and any restrictions before starting, including separate confirmation of fireplace readiness where it will be used.",
      },
    ],
  },
  {
    slug: 'stone-veneer-fireplace-inner-west',
    metaTitle: 'Inner West Stone Veneer Fireplace | Case Study',
    metaDescription:
      'Inner West sandstone-veneer fireplace installed in a renovation with lightweight wall mounting and a matching hearth.',
    clientType: 'Renovation of a 1920s California bungalow, Inner West',
    suburbName: 'Marrickville',
    suburbSlug: 'marrickville',
    parentAreaName: 'Inner West',
    parentAreaHref: '/areas/inner-west',
    completedYear: '2024',
    durationWeeks: 1,
    primaryService: 'Stone Veneer Installation',
    primaryServiceHref: '/services/masonry/stone-masonry-repairs',
    relatedServices: [
      { label: 'Masonry', href: '/services/masonry' },
      { label: 'Interior Restoration', href: '/services/building-restoration/interior-restoration' },
    ],
    hero: imageEntry(FIREPLACE_IMG, 'Completed sandstone veneer fireplace surround in a living room'),
    gallery: [
      imageEntry(BATHROOM_IMG, 'Completed sandstone bathroom — same veneer system used on the fireplace'),
      imageEntry(GARDEN_WALL_IMG, 'Sandstone block wall in matching stone for the outdoor firepit area'),
    ],
    problem: [
      'The owners were renovating a 1920s California bungalow and wanted a sandstone fireplace surround as the centrepiece of the new living room. The wall behind it was timber-framed and could not carry a full solid sandstone block wall.',
      'They had been told by one contractor to use cultured stone — a cast concrete product made to look like sandstone. They did not want fake stone. They wanted the real thing, even if it had to be thinner.',
      'The existing chimney breast had been closed off during a previous renovation and was being opened back up. The new flue liner had already been installed by the time we came in.',
    ],
    solution: [
      'We used 30mm sandstone veneer — full-thickness stone, but cut thin enough to sit on a timber frame wall with a steel stud backup. Total weight on the wall was about 75kg per square metre, well within the stud and sheeting capacity.',
      'The veneer was laid in a random-coursed pattern with a tight 8mm lime-mortar joint. We dry-laid the panels on the floor first to plan the coursing and the corner returns before any adhesive went on the wall.',
      'The hearth and mantel were cut from the same batch of sandstone. The mantel was a single piece, 1.6m long, hand-checked on the front edge to give it the rough-dressed look of the original bungalow chimneys.',
    ],
    result: [
      'The fireplace is the centrepiece of the room. The owners sent us a photo six months later with a real fire going in the hearth — the wall had not moved, the stones had not cracked. Fireplace use must follow the applicable installation and commissioning requirements; heat is not a substitute for proper curing.',
      'The same veneer system was used on the outdoor kitchen and the bathroom feature wall by the next contractor on the job. We came back for both.',
      'Total cost was about 40% of what a solid sandstone block fireplace would have been, primarily because the structural wall did not need engineering.',
    ],
    faqs: [
      {
        question: 'Can you put sandstone veneer on a timber-framed wall?',
        answer:
          "Only where the complete wall and fixing system are designed and assessed for the stone, adhesive and substrate loads. Timber framing or plywood thickness alone does not establish capacity. Around a working fireplace, heat exposure, clearances and combustible materials also need specific assessment. Follow the relevant product and appliance installation requirements, with appropriate professional input.",
      },
      {
        question: 'Is stone veneer real stone?',
        answer:
          "Natural stone veneer is real stone cut into thinner facing pieces. Manufactured stone veneer is a different product made to resemble stone. Confirm the actual product, dimensions, backing and installation system in the quote. A natural-stone label does not by itself establish suitability for a particular wall or fireplace.",
      },
      {
        question: 'How long does a stone veneer fireplace take to install?',
        answer:
          "Timing depends on substrate preparation, framing or support work, stone selection, fixings and the required curing periods. Coordination with the appliance or flue installer may be needed. Agree the programme after assessment. Finished masonry is not permission to light a fire; the installation must be ready for use under the applicable requirements.",
      },
    ],
  },
  {
    slug: 'concrete-cancer-repair-strata-north-shore',
    metaTitle: 'North Shore Concrete Cancer Repair | Case Study',
    metaDescription:
      'North Shore strata apartment block concrete cancer repaired with chloride remediation, concrete replacement and anti-carbonation coating.',
    clientType: 'Strata apartment block, North Shore',
    suburbName: 'Chatswood',
    suburbSlug: 'chatswood',
    parentAreaName: 'North Shore',
    parentAreaHref: '/areas/north-shore',
    completedYear: '2023',
    durationWeeks: 6,
    primaryService: 'Concrete Cancer Repair',
    primaryServiceHref: '/services/concrete-repairs/concrete-cancer',
    relatedServices: [
      { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
      { label: 'Protective Coatings', href: '/services/concrete-repairs/protective-coatings' },
      { label: 'Strata Repairs', href: '/services/remedial-building/strata-repairs' },
    ],
    hero: imageEntry(DAMP_COURSE_IMG, 'Completed concrete remediation on a balcony column'),
    gallery: [
      imageEntry(WATERPROOFING_IMG, 'Anti-carbonation coating being applied to the repaired column'),
      imageEntry(FOUNDATION_DEMO_IMG, 'Demolition stage — spalled concrete removed back to sound substrate'),
    ],
    problem: [
      'A 1980s walk-up strata block in Chatswood had visible spalling on the balcony support columns on the north and east elevations. The Owners Corporation had been told by an engineer that the cause was chloride-induced concrete cancer — salt had got into the concrete through the failed waterproofing on the balcony decks above and rusted the reinforcing.',
      'Two of the four affected columns were showing signs of structural concern — visible cracking, displacement of the cover concrete, and rust staining running down the face.',
      'The strata committee needed a builder who could work with the engineer they had already appointed, give a fixed-price quote the committee could take to the AGM, and start within the financial year.',
    ],
    solution: [
      'We broke out all the loose and spalled concrete back to sound substrate. Where the reinforcing was reduced by more than 20%, we cut back further and spliced in new bar. The engineer was on site for each splice sign-off.',
      'The patch was rebuilt with a polymer-modified repair mortar — not a standard cement patch, which would have failed again in two winters. The repair mortar is designed to be compatible with the original concrete\'s thermal movement.',
      'After a 28-day cure, the entire column face was coated with an anti-carbonation coating. This stops CO2 getting into the concrete and starting the corrosion cycle again.',
      'The balcony decks above were re-waterproofed by a separate contractor we introduced. The Owners Corporation had been told for years the decks needed it — we made it part of the same scope.',
    ],
    result: [
      'The engineer signed off the work and the strata committee lodged the long-term maintenance plan revision. Ongoing inspection and maintenance remain part of managing the repaired building.',
      'The Owners Corporation has since asked us back to quote on the south elevation, which was showing early signs of the same problem. They want it fixed before it gets to the same stage.',
      'The AGM quote was approved on the first vote. The committee chair said it was the first remediation quote the owners had seen in five years that was a real number, not a guess.',
    ],
    faqs: [
      {
        question: 'How do you know if concrete spalling is structural?',
        answer:
          "Cracking, rust staining and loose concrete warrant professional assessment, including any immediate falling-material risk. A covermeter helps locate reinforcement and estimate cover; a tap survey can help identify delamination. Neither by itself establishes steel loss or load capacity. An engineer should determine the investigation, any opening-up or testing, and the structural assessment needed.",
      },
      {
        question: 'How long does concrete cancer repair last?',
        answer:
          "Durability depends on the cause and extent of deterioration, the specified repair system, workmanship, exposure and ongoing maintenance. A patch or coating alone does not establish a maintenance-free lifespan. Agree inspection and maintenance requirements with the responsible professionals, and investigate new cracking or rust staining rather than waiting for a fixed anniversary.",
      },
      {
        question: 'Can strata owners get funding help for concrete cancer repairs?',
        answer:
          "An owners corporation should review the repair scope, capital works plan, available funds and any levy decisions with its strata manager and relevant advisers. The Strata Building Bond and Inspections Scheme has eligibility and procedural limits; it is not a general grant for older-building repairs. Check current NSW Government guidance for the particular building.",
      },
    ],
  },
  {
    slug: 'foundation-underpinning-heritage-terrace-inner-west',
    metaTitle: 'Inner West Heritage Terrace Underpinning | Case Study',
    metaDescription:
      'Inner West heritage brick terrace stabilised with traditional underpinning, brick stitching and re-levelling.',
    clientType: 'Late-Victorian terrace, Inner West',
    suburbName: 'Newtown',
    suburbSlug: 'newtown',
    parentAreaName: 'Inner West',
    parentAreaHref: '/areas/inner-west',
    completedYear: '2023',
    durationWeeks: 8,
    primaryService: 'Foundation Underpinning',
    primaryServiceHref: '/services/foundation-repairs/underpinning',
    relatedServices: [
      { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
      { label: 'Structural Crack Repair', href: '/services/structural-repairs/structural-crack-repair' },
      { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
    ],
    hero: imageEntry(STEEL_LINTEL_IMG, 'Steel lintel installation above new opening on the heritage terrace'),
    gallery: [
      imageEntry(LINTEL_PROGRESS_IMG, 'Structural opening formed with new lintel support'),
      imageEntry(LINTEL_DONE_IMG, 'Brickwork stitched back into the heritage facade above the new lintel'),
    ],
    problem: [
      'A late-Victorian single-storey terrace in Newtown had dropped about 60mm at the front corner. The brickwork above the front window had cracked in a classic diagonal stair-step pattern that tracked from the window head up to the cornice.',
      'The cause was a failed stormwater drain running under the front footing. The drain had been leaking for years, washing the fines out of the founding soil and leaving the brick footing sitting on air pockets.',
      'The owner had been told by one foundation contractor that the whole front wall needed to come down and be rebuilt. The heritage advisor said that would have triggered a full heritage approval and six months on a DA.',
    ],
    solution: [
      'We worked with a structural engineer who specified traditional mass-concrete underpinning in 1m bays. Five bays across the front, each dug by hand to the depth of sound founding soil — about 1.4m below the existing footing.',
      'Each bay was filled with a low-water-demand concrete and left to cure for 72 hours before the next bay was opened. The sequence was critical — we never had more than one open bay at a time, so the wall above was always supported.',
      'The stormwater drain was replaced with a new PVC run that was bedded in concrete and pressure-tested before backfill. We also fixed the downpipe connection that had been the original cause of the leak.',
      'The structural crack above the front window was stitched back together using helical bar ties bedded into the mortar joints. No bricks were replaced. The diagonal crack is still visible on close inspection (it is a heritage terrace — that is part of the character) but it has not moved since.',
    ],
    result: [
      'The front of the house has not moved further. A monitoring point was installed at the crack and the engineer has measured it quarterly for the year since completion. Zero movement.',
      'The heritage facade was untouched. No DA was needed. The heritage advisor signed off the work on the basis that the underpinning was done by hand, in traditional materials, with the brickwork above left in place.',
      'The total cost was about half of the rebuild quote. The engineer\'s spec was the same as it would have been for any underpinning job — the saving came from not demolishing and rebuilding the wall.',
    ],
    faqs: [
      {
        question: 'How do you underpin a heritage terrace without damaging the facade?',
        answer:
          "A structural engineer should establish whether underpinning is needed and design the work for the building and ground conditions. Investigation, excavation sequence, temporary support, inspections and concrete strength before loading must be specified for the site. Do not apply a standard bay size or curing period from a case study, or excavate beside a footing without the required assessment.",
      },
      {
        question: 'How long does underpinning take on a residential terrace?',
        answer:
          "The programme depends on investigation, design, access, ground conditions, approvals and the specified sequence and inspections. Adjoining buildings, underground services and occupied rooms may impose additional constraints. Agree timing only after the scope is developed, including any monitoring and restrictions during the work.",
      },
      {
        question: 'Will underpinning stop the cracks from coming back?',
        answer:
          "Underpinning may address a diagnosed foundation problem, but it does not automatically prevent all future movement or repair existing cracks. Drainage, ground conditions, the building and adjoining work may also matter. An engineer should explain the design objectives, limits and monitoring needed. Do not remove trees or alter drainage on the basis of a general case study.",
      },
    ],
  },
  {
    slug: 'heritage-sandstone-seawall-mosman',
    metaTitle: 'Mosman Heritage Sandstone Seawall | Case Study',
    metaDescription:
      'Mosman waterfront heritage sandstone seawall restored with salt-resistant mortar, hand-laid stone and original character preserved.',
    clientType: 'Waterfront heritage estate, Mosman',
    suburbName: 'Mosman',
    suburbSlug: 'mosman',
    parentAreaName: 'North Shore',
    parentAreaHref: '/areas/north-shore',
    completedYear: '2025',
    durationWeeks: 6,
    primaryService: 'Sandstone Seawall Restoration',
    primaryServiceHref: '/services/masonry/stone-masonry-repairs',
    relatedServices: [
      { label: 'Heritage Stonework', href: '/services/heritage-restoration/traditional-stonework' },
      { label: 'Retaining Walls', href: '/services/masonry/retaining-walls' },
      { label: 'Repointing', href: '/services/masonry/repointing' },
    ],
    hero: imageEntry(SEAWALL_BLOCKS_IMG, 'Cut sandstone blocks prepared for harbour wall restoration'),
    gallery: [
      imageEntry(SEAWALL_IMG, 'Completed heritage seawall with Sydney Harbour Bridge backdrop'),
      imageEntry(HERITAGE_BATTLESHIP_IMG, 'Sandstone block walls finished to match original'),
    ],
    problem: [
      'A Mosman waterfront property had a 1940s sandstone block seawall that had been repointed with cement mortar in the 1970s. The cement had failed in long runs and the wall was shedding sand.',
      'Three separate sections — each about 4m long — had visible leaning. The wall had moved about 80mm outward at the top across the worst section.',
      'The owners wanted the wall rebuilt without losing the original character. A marine engineer had specified a concrete pile and panel wall, which would have been permanent but would have changed the look of the foreshore.',
    ],
    solution: [
      'We worked with the same engineer to redesign the repair around the existing sandstone. The piles went in behind the existing wall, not in front of it, so the original face was preserved.',
      'The leaning sections were taken down and rebuilt course by course. About 70% of the original blocks were sound and went back in. The remaining 30% were replaced with hand-dressed Hawkesbury sandstone, matched to the original colour and grain.',
      'Mortar was a hot-lime mix with a small hydraulic component, designed for salt-water exposure. We refused to use any product with Portland cement — it would have failed in two winters.',
      'A new ag-line drain was laid behind the wall and the soil was rebuilt with a geotextile separation layer so the fines did not wash into the drain again.',
    ],
    result: [
      'The wall has been through a full winter and a major east coast low event with no movement. The engineer has measured the monitoring points quarterly — zero change.',
      'The foreshore character is preserved. The neighbours have asked for the same spec on their walls.',
      'Cost was about 60% of the concrete pile-and-panel option. The trade-off was a longer construction period (we worked in tidal windows) for a wall that looks like the original.',
    ],
    faqs: [
      {
        question: 'Can a heritage seawall be repaired with modern engineering behind it?',
        answer:
          "In some cases an engineered repair can retain significant sandstone while addressing structural defects. The solution depends on the foundations, retained ground, exposure, access and heritage significance. An appropriately qualified engineer and any required heritage adviser should assess the options together. Piles or beams behind the face are not a standard solution for every foreshore wall.",
      },
      {
        question: 'Why not use cement mortar on a seawall?',
        answer:
          "Mortar selection needs to suit the stone, existing fabric, exposure and designed function of the wall. An overly hard or incompatible mortar can contribute to damage, but lime and cement labels alone do not determine suitability in a marine setting. Agree a property-specific specification with the relevant professionals rather than assuming one mix will last longer in every seawall.",
      },
      {
        question: 'How do you match replacement sandstone blocks to the existing wall?',
        answer:
          "Assess the existing stone and compare suitable samples for texture, grain, colour and durability. Reclaimed or newly supplied stone may be options, subject to condition and availability. The heritage requirements and repair design also matter. Do not assume a new block will become visually identical after one season of weather or salt exposure.",
      },
    ],
  },
  {
    slug: 'brick-repointing-victorian-terrace-paddington',
    metaTitle: 'Paddington Victorian Terrace Repointing | Case Study',
    metaDescription:
      'Paddington Victorian terrace restored with full raking out, lime mortar repointing and damp-course remediation.',
    clientType: 'Victorian terrace, Paddington',
    suburbName: 'Paddington',
    suburbSlug: 'paddington',
    parentAreaName: 'Eastern Suburbs',
    parentAreaHref: '/areas/eastern-suburbs',
    completedYear: '2024',
    durationWeeks: 3,
    primaryService: 'Brick Repointing',
    primaryServiceHref: '/services/masonry/repointing',
    relatedServices: [
      { label: 'Heritage Brick Repairs', href: '/services/heritage-restoration/heritage-brick-repairs' },
      { label: 'Facade Renovation', href: '/services/building-restoration/facade-renovation' },
      { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
    ],
    hero: imageEntry(HERITAGE_CHURCH_IMG, 'Heritage repointing work — same approach on a Victorian terrace'),
    gallery: [
      imageEntry(HERITAGE_DECORATIVE_IMG, 'Decorative stonework also restored on the same terrace'),
      imageEntry(HERITAGE_BATTLESHIP_IMG, 'Sandstone block walls finished to match original'),
    ],
    problem: [
      'A Victorian terrace in Paddington had pointing that had failed in long runs across the front and side elevations. The original lime mortar had been over-painted at some point and the paint was trapping moisture in the wall.',
      'Rising damp had become visible at the base of the front wall. The skirting boards inside the front room were starting to rot.',
      'The owner had been told by a rendering company that the answer was to render the whole facade. They did not want that — the brick face was the reason they bought the house.',
    ],
    solution: [
      'We raked out all the failed pointing by hand — no angle grinders. The depth was consistent at about 25mm, which is the right depth for a lime mortar joint to key properly.',
      'The over-paint was removed with a poultice, not a pressure washer. Pressure washing drives water into the wall and damages the arrises on the bricks.',
      'New pointing was done in three coats of lime putty mortar, hand-mixed on site with crushed Sydney sandstone aggregate to match the original colour.',
      'The rising damp was a separate problem but related — the original damp course had been bridged by a garden bed built up against the front wall. We removed the garden bed, exposed the original slate damp course, and re-laid the garden bed 200mm below the damp course level with a gravel separator.',
    ],
    result: [
      'The facade is weathertight and the brick face is clean. The owner has reported no further damp issues inside.',
      'The pointing has cured paler and harder over the year since — exactly what lime mortar is supposed to do.',
      'Total cost was about a third of the render quote. The brick face was preserved.',
    ],
    faqs: [
      {
        question: 'How do you remove failed pointing without damaging the bricks?',
        answer:
          "Assess the brick and joint condition before choosing the removal tools and repair depth. Sound original mortar may be retained, and a trial area can help establish a method that limits damage. Hand tools also require care on fragile brickwork. Agree the extent and approach rather than treating the whole facade as a standard rake-out job.",
      },
      {
        question: 'Why does my Victorian terrace have rising damp?',
        answer:
          "Damp near the base of an older wall can involve drainage, external levels, leaks, condensation or other moisture sources. Bridging a damp-proof course is one possible cause, not a diagnosis for every terrace. Investigate the building before altering levels, excavating or removing finishes, especially beside foundations or significant heritage fabric.",
      },
      {
        question: 'How long does repointing take on a Victorian terrace?',
        answer:
          "Timing depends on the surveyed joint condition, repair extent, access, agreed finish and the specified mortar’s protection and curing needs. Paint removal or other repairs may require separate assessment and permissions. Agree a programme after the scope and trial work are settled rather than borrowing the duration of another terrace project.",
      },
    ],
  },
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  caseStudies.find((cs) => cs.slug === slug);

export const getAllCaseStudySlugs = (): string[] => caseStudies.map((cs) => cs.slug);

export const getAllCaseStudies = (): CaseStudy[] => caseStudies;
