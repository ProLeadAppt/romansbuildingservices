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
  primaryService: string;
  primaryServiceHref: string;
  relatedServices: CaseStudyLink[];
  faqs: CaseStudyFaq[];
}

// Legacy URLs remain available as reference pages. Project-specific details and
// image associations are withheld until supported by an approved source record.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'heritage-church-brick-restoration-sydney-cbd',
    metaTitle: 'Heritage Brick Repair Reference',
    metaDescription: 'Plan heritage brick repairs: questions about mortar compatibility, access, permissions and the scope of a quote.',
    primaryService: 'Heritage Brick Repairs',
    primaryServiceHref: '/services/heritage-restoration/heritage-brick-repairs',
    relatedServices: [
      { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
      { label: 'Repointing', href: '/services/masonry/repointing' },
      { label: 'Facade Renovation', href: '/services/building-restoration/facade-renovation' },
    ],
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
    metaTitle: 'Sandstone Seawall Repair Reference',
    metaDescription: 'Explore sandstone seawall repair questions covering structural assessment, foreshore permissions, tidal access and scheduling.',
    primaryService: 'Sandstone Seawall Restoration',
    primaryServiceHref: '/services/masonry/stone-masonry-repairs',
    relatedServices: [
      { label: 'Stone Masonry Repairs', href: '/services/masonry/stone-masonry-repairs' },
      { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
      { label: 'Retaining Walls', href: '/services/masonry/retaining-walls' },
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
    metaTitle: 'Stone Chimney Repair Reference',
    metaDescription: 'Plan stone chimney repairs: questions about masonry condition, roof access, flue assessment and safe use.',
    primaryService: 'Heritage Stonework',
    primaryServiceHref: '/services/heritage-restoration/traditional-stonework',
    relatedServices: [
      { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
      { label: 'Stone Masonry Repairs', href: '/services/masonry/stone-masonry-repairs' },
      { label: 'Repointing', href: '/services/masonry/repointing' },
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
    metaTitle: 'Stone Fireplace Reference',
    metaDescription: 'Explore stone fireplace questions about support, installation requirements and checks before lighting a fire.',
    primaryService: 'Stone Veneer Installation',
    primaryServiceHref: '/services/masonry/stone-masonry-repairs',
    relatedServices: [
      { label: 'Masonry', href: '/services/masonry' },
      { label: 'Interior Restoration', href: '/services/building-restoration/interior-restoration' },
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
    metaTitle: 'Concrete Cancer Repair Reference',
    metaDescription: 'Understand concrete cancer repair questions about structural assessment, durability, inspections and strata funding considerations.',
    primaryService: 'Concrete Cancer Repair',
    primaryServiceHref: '/services/concrete-repairs/concrete-cancer',
    relatedServices: [
      { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
      { label: 'Protective Coatings', href: '/services/concrete-repairs/protective-coatings' },
      { label: 'Strata Repairs', href: '/services/remedial-building/strata-repairs' },
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
    metaTitle: 'Foundation Underpinning Reference',
    metaDescription: 'Plan foundation investigations: questions about underpinning design, excavation sequencing, timing and movement monitoring.',
    primaryService: 'Foundation Underpinning',
    primaryServiceHref: '/services/foundation-repairs/underpinning',
    relatedServices: [
      { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
      { label: 'Structural Crack Repair', href: '/services/structural-repairs/structural-crack-repair' },
      { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
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
    metaTitle: 'Heritage Seawall Repair Reference',
    metaDescription: 'Explore heritage seawall questions about engineered repair options, compatible mortar and replacement stone selection.',
    primaryService: 'Sandstone Seawall Restoration',
    primaryServiceHref: '/services/masonry/stone-masonry-repairs',
    relatedServices: [
      { label: 'Heritage Stonework', href: '/services/heritage-restoration/traditional-stonework' },
      { label: 'Retaining Walls', href: '/services/masonry/retaining-walls' },
      { label: 'Repointing', href: '/services/masonry/repointing' },
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
    metaTitle: 'Brick Repointing Reference',
    metaDescription: 'Plan brick repointing: questions about joint assessment, careful mortar removal, damp investigation and curing time.',
    primaryService: 'Brick Repointing',
    primaryServiceHref: '/services/masonry/repointing',
    relatedServices: [
      { label: 'Heritage Brick Repairs', href: '/services/heritage-restoration/heritage-brick-repairs' },
      { label: 'Facade Renovation', href: '/services/building-restoration/facade-renovation' },
      { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
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
