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
    metaTitle: 'Heritage Church Brick Restoration Sydney CBD | Case Study',
    metaDescription:
      'A heritage-listed Sydney CBD church with failing brickwork and repointing. Case study: matching period brick, lime mortar repointing, and facade restoration completed without disturbing services.',
    clientType: 'Heritage-listed Anglican church, Sydney CBD',
    suburbName: 'Sydney CBD',
    suburbSlug: 'sydney-cbd',
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
          'For a single elevation on a typical Sydney CBD church, three to five weeks of working time. Two elevations running together takes five to seven weeks. We give a real timeframe in the quote, not a vague window.',
      },
      {
        question: 'Do you handle heritage approval paperwork?',
        answer:
          'We work with the heritage consultant you already have. We do not lodge DA or Section 60 applications ourselves, but we prepare the method statement, the mortar spec, and the brick sourcing notes the consultant needs to file.',
      },
      {
        question: 'What does heritage brick repointing cost per square metre?',
        answer:
          'It depends on the access, the height, and how much brick actually needs replacing. We price per elevation after we have looked at it. A ballpark for a single church elevation on easy scaffold access is $280 to $420 per square metre, materials and labour.',
      },
    ],
  },
  {
    slug: 'sandstone-seawall-restoration-mosman',
    metaTitle: 'Sandstone Seawall Restoration Mosman | Case Study',
    metaDescription:
      'A failing sandstone seawall on a Mosman waterfront property. Case study: hand-dressed sandstone block replacement, salt-resistant lime mortar, and rebuilt foreshore wall completed in tidal windows.',
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
          'Most can be repaired. A sandstone seawall that has failed because of bad mortar or a blocked drain behind it can almost always be rebuilt course by course. The reason most seawalls get replaced is the wrong mortar was used in the first place, which then damages the stone. If the stone is sound, we can rebuild on the original footings.',
      },
      {
        question: 'Do you need council approval to repair a seawall in Mosman?',
        answer:
          'For like-for-like repairs on an existing seawall, typically no. If you are changing the height, the footprint, or the material, yes. We work with a marine engineer when the scope crosses that line and we let you know early if a DA is going to be needed.',
      },
      {
        question: 'How long does a sandstone seawall restoration take?',
        answer:
          'For a typical waterfront property in Mosman or Vaucluse, three to five weeks depending on tide windows and weather. We give a real schedule before we start, including the tidal windows, so you know when the lawn is out of action.',
      },
    ],
  },
  {
    slug: 'sandstone-chimney-rebuild-eastern-suburbs',
    metaTitle: 'Sandstone Chimney Rebuild Eastern Suburbs | Case Study',
    metaDescription:
      'A Federation-era sandstone chimney in the Eastern Suburbs rebuilt from the flashing up. Case study: matched sandstone, hand-dressed courses, and rebuild finished without lifting roof tiles.',
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
          'It depends on how far the damage has gone. If only the top three or four courses are spalled and the rest of the chimney is sound, a partial rebuild from the flashing up is usually the right call. If the chimney is leaning or the mortar has failed all the way down, it comes down further. We assess in person and tell you what is actually wrong, not what is easiest for us to quote.',
      },
      {
        question: 'How do you match the original sandstone?',
        answer:
          'We take a sample of the original stone and source from the same kind of quarry. Most Sydney sandstone is Hawkesbury or Pyrmont, both still quarried in small batches. For older buildings we sometimes have to use a reclaim yard. The match is rarely perfect on day one, but it fades in within a season of weather.',
      },
      {
        question: 'How long does a chimney rebuild take?',
        answer:
          'Most chimney rebuilds are one to two weeks on the roof, plus the roofer coming in for flashing after. We give you the schedule before we start so the roofer can be booked in for the right day.',
      },
    ],
  },
  {
    slug: 'stone-veneer-fireplace-inner-west',
    metaTitle: 'Stone Veneer Fireplace Inner West | Case Study',
    metaDescription:
      'A sandstone-veneer fireplace surround installed in an Inner West renovation. Case study: lightweight stone veneer on a timber-framed wall, finished with a matching hearth and mantel.',
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
      'The fireplace is the centrepiece of the room. The owners sent us a photo six months later with a real fire going in the hearth — the wall had not moved, the stones had not cracked, and the heat from the fire had cured the mortar harder.',
      'The same veneer system was used on the outdoor kitchen and the bathroom feature wall by the next contractor on the job. We came back for both.',
      'Total cost was about 40% of what a solid sandstone block fireplace would have been, primarily because the structural wall did not need engineering.',
    ],
    faqs: [
      {
        question: 'Can you put sandstone veneer on a timber-framed wall?',
        answer:
          'Yes, with a steel stud backup. The total weight — stone, adhesive, and substrate — is about 75 to 90kg per square metre. A standard timber stud wall with one layer of 16mm plywood sheeting will carry that. We do not put stone veneer on standard plasterboard without checking the framing first.',
      },
      {
        question: 'Is stone veneer real stone?',
        answer:
          'The sandstone veneer we use is real sandstone, cut from the same quarries as the full-thickness blocks. The difference is the thickness — 20 to 40mm instead of 100 to 200mm. Cultured stone (cast concrete made to look like stone) is a different product. We do not use it.',
      },
      {
        question: 'How long does a stone veneer fireplace take to install?',
        answer:
          'For a single living-room fireplace, three to five working days. We do the substrate prep, dry lay, adhesive bed, and grouting over that week. You can use the room the day we finish.',
      },
    ],
  },
  {
    slug: 'concrete-cancer-repair-strata-north-shore',
    metaTitle: 'Concrete Cancer Repair Strata North Shore | Case Study',
    metaDescription:
      'A North Shore strata apartment block with concrete cancer on the balcony columns. Case study: full chloride remediation, sacrificial concrete replacement, and anti-carbonation coating.',
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
      'The engineer signed off the work and the strata committee lodged the long-term maintenance plan revision. The repair is expected to last 15+ years before any maintenance is needed.',
      'The Owners Corporation has since asked us back to quote on the south elevation, which was showing early signs of the same problem. They want it fixed before it gets to the same stage.',
      'The AGM quote was approved on the first vote. The committee chair said it was the first remediation quote the owners had seen in five years that was a real number, not a guess.',
    ],
    faqs: [
      {
        question: 'How do you know if concrete spalling is structural?',
        answer:
          'Visual signs are cracking, displacement of the cover concrete, and rust staining. The real test is a structural engineer\'s hammer tap and covermeter survey — that tells us how much reinforcing has been lost and whether the column can still carry the load. We do not quote concrete cancer repairs without an engineer\'s report.',
      },
      {
        question: 'How long does concrete cancer repair last?',
        answer:
          'A properly specified concrete cancer repair — full chloride remediation, polymer-modified patch, anti-carbonation coating — should last 15 to 25 years before any maintenance is required. Cheap patches (just a cement fill over the rust) fail in two to five years.',
      },
      {
        question: 'Can strata owners get funding help for concrete cancer repairs?',
        answer:
          'Yes. The NSW Strata Building Bond Inspection Scheme applies to new buildings, but most strata schemes have a sinking fund that can be drawn on for major repairs. We help the strata committee prepare the scope and the quote for the AGM.',
      },
    ],
  },
  {
    slug: 'foundation-underpinning-heritage-terrace-inner-west',
    metaTitle: 'Foundation Underpinning Heritage Terrace Inner West | Case Study',
    metaDescription:
      'A heritage brick terrace in the Inner West suffering from differential settlement. Case study: traditional underpinning, brickwork stitching, and re-levelling completed without disturbing the heritage facade.',
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
          'Traditional mass-concrete underpinning, done by hand in small bays. Each bay is about 1m wide. We open one bay, dig to sound founding soil, pour concrete, let it cure for 72 hours, then move to the next. The wall above is always supported. No demolition, no crack stitching injection that hides the problem.',
      },
      {
        question: 'How long does underpinning take on a residential terrace?',
        answer:
          'For a typical single-storey terrace, four to eight weeks depending on the number of bays. Two-storey terraces take longer. We give a real schedule before we start, including the engineer\'s inspection days, so you know when access is needed.',
      },
      {
        question: 'Will underpinning stop the cracks from coming back?',
        answer:
          'Yes, if the cause of the settlement has been fixed first. Underpinning without fixing the underlying cause (a leaking drain, a failed stormwater line, a tree root) is just papering over the problem. We will not quote underpinning without first identifying and fixing the cause.',
      },
    ],
  },
  {
    slug: 'heritage-sandstone-seawall-vaucluse',
    metaTitle: 'Heritage Sandstone Seawall Vaucluse | Case Study',
    metaDescription:
      'A Vaucluse waterfront heritage property with a sandstone block seawall in urgent need of restoration. Case study: salt-resistant mortar mix, hand-laid sandstone, and original character preserved.',
    clientType: 'Waterfront heritage estate, Vaucluse',
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
      'A Vaucluse waterfront property had a 1940s sandstone block seawall that had been repointed with cement mortar in the 1970s. The cement had failed in long runs and the wall was shedding sand.',
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
          'Yes. We often work with a marine engineer who specifies the structural fix — typically steel piles or a reinforced concrete beam — and we rebuild the sandstone face on the front. The result is a wall with modern structural capacity and a heritage appearance. This is the standard approach on Sydney Harbour foreshore walls.',
      },
      {
        question: 'Why not use cement mortar on a seawall?',
        answer:
          'Cement is rigid. Sandstone moves with temperature and moisture. The cement mortar cracks, lets salt water in, and the salt crystallises inside the joint and blows the face off the sandstone blocks. Lime mortar moves with the stone and lets the wall breathe. On a seawall, lime mortar will outlast cement by decades.',
      },
      {
        question: 'How do you match replacement sandstone blocks to the existing wall?',
        answer:
          'We sample the original stone and source from the same kind of quarry. For Sydney Harbour, that is usually Hawkesbury sandstone from a quarry in the Maroota or Hornsby area. The match is rarely perfect on day one, but it fades in within a season of weather and salt spray.',
      },
    ],
  },
  {
    slug: 'brick-repointing-victorian-terrace-paddington',
    metaTitle: 'Brick Repointing Victorian Terrace Paddington | Case Study',
    metaDescription:
      'A Victorian terrace in Paddington with failed brick pointing and rising damp. Case study: full raking out, lime mortar repointing, and damp-course remediation without disturbing the facade.',
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
          'Hand raking with a plugging chisel and a hammer. It is slower than an angle grinder but it does not shatter the arrises on the bricks and it does not leave a grey smear on the face. For a typical terrace, full hand raking takes two to three days per elevation.',
      },
      {
        question: 'Why does my Victorian terrace have rising damp?',
        answer:
          'Most Victorian terraces were built with a slate damp course at the base of the walls. Over the years, garden beds, paths, or concrete are built up against the wall above the damp course level. This bridges the damp course and lets moisture from the soil wick up into the brickwork. The fix is to expose the original damp course and keep soil and hard surfaces below it.',
      },
      {
        question: 'How long does repointing take on a Victorian terrace?',
        answer:
          'For a single elevation on a typical Paddington or Woollahra terrace, two to three weeks. Two elevations together, three to five weeks. We give a real schedule before we start.',
      },
    ],
  },
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  caseStudies.find((cs) => cs.slug === slug);

export const getAllCaseStudySlugs = (): string[] => caseStudies.map((cs) => cs.slug);

export const getAllCaseStudies = (): CaseStudy[] => caseStudies;
