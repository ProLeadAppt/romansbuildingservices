import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, Wrench, Home, Ruler, CheckCircle } from 'lucide-react';

const PierBeamPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'pier-beam');

  return (
    <ServicePageTemplate
      title="Pier & Beam Foundation Work"
      metaTitle="Pier & Beam Foundation Sydney | Restumping, Subfloor Levelling | Romans Building Services"
      metaDescription="Sydney restumping and pier beam foundation work by Minas Romanakis. Concrete and steel pier replacement, bearer and joist repair, subfloor levelling."
      heroImage="/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Pier & Beam Foundation Work', href: '' },
      ]}
      intro={[
        'A lot of older Sydney homes sit on pier and beam foundations rather than a concrete slab. Timber stumps or concrete piers support timber bearers, which in turn support timber joists, which carry the flooring. It is a great system if it stays dry. It is a problem if water gets in. Timber stumps rot. Concrete piers crack. Steel beams corrode. Bearers sag. Joists droop. Floors get bouncy, sloping, or actively unsafe.',
        'We restump houses, replace damaged bearers and joists, level subfloors back to plumb, and install new piers for extensions and additions. Most jobs use concrete piers cast in situ or galvanised steel adjustable stumps. The right choice depends on soil type, future re-levelling needs, and budget. We work in tight subfloor spaces (typically 400 to 800mm clearance under old terraces and Federation cottages) where most modern builders will not.',
        'Restumping a typical Sydney house is a week to ten days of work in the subfloor. We jack the building up section by section, remove the failed stumps, dig new pad footings, set new piers, lower the building onto them, and level as we go. Most homeowners stay in the house throughout. Some minor cracking can occur as the building re-levels but careful sequencing minimises it.',
      ]}
      features={[
        {
          icon: Landmark,
          title: 'Restumping',
          description:
            'Old timber stumps replaced with concrete piers or galvanised steel adjustable stumps. Building jacked up section by section, levelled as work proceeds. Typical residential restump is 5 to 10 days.',
        },
        {
          icon: Wrench,
          title: 'Bearer and joist repair',
          description:
            'Failed timber bearers and joists replaced with H3 or H4 treated pine, hardwood, or steel C-section depending on span and load. Termite-treated. Connections to engineer drawing where structural.',
        },
        {
          icon: Home,
          title: 'Subfloor levelling',
          description:
            'Existing piers shimmed and packed back to level. Laser level used for accuracy. For settled buildings, sequenced jacking lifts the structure back to plumb in controlled increments.',
        },
        {
          icon: Ruler,
          title: 'New pier installation',
          description:
            'For extensions, decks and new construction. Bored piers, screw piles, mass concrete footings. Engineered to soil bearing capacity and design loads.',
        },
        {
          icon: CheckCircle,
          title: 'Subfloor inspection',
          description:
            'Full report on pier condition, bearer and joist state, termite evidence, ventilation, ground moisture. Useful for property purchases and ongoing maintenance.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Concrete piers cast in situ',
          detail:
            '32 MPa reinforced concrete poured into formed pads and column forms. Cast against pre-drilled steel reinforcement. Standard for permanent replacement piers. Cures in 7 days before taking full load.',
        },
        {
          title: 'Galvanised steel adjustable stumps',
          detail:
            'Hot-dip galvanised steel posts with threaded adjustment heads. Good for buildings on reactive clay where future re-levelling may be needed. Can be tightened as soil moves to keep floors level.',
        },
        {
          title: 'H3 or H4 treated pine bearers',
          detail:
            'Termite-treated structural pine for new or replacement bearers. H3 for in-ground or near-ground, H4 for the highest exposure. Sized to span and load per AS 1684.',
        },
        {
          title: 'Hardwood for traditional repair',
          detail:
            'Australian hardwood (ironbark, blackbutt, spotted gum) for replacement in heritage buildings or where matching original timber is needed. More expensive than treated pine but the right look for heritage.',
        },
        {
          title: 'Hydraulic jacks for lifting',
          detail:
            'Multiple hydraulic jacks positioned under bearers in sequence. Lifts the building in controlled increments (typically 5 to 10mm at a time) to avoid stressing wall connections above.',
        },
        {
          title: 'Laser levels for accuracy',
          detail:
            'Rotary laser level set up in the subfloor. New pier heights and bearer positions checked against the laser line. Floor level to within 3 to 5mm across the whole house.',
        },
      ]}
      processSteps={[
        {
          step: 'Subfloor inspection',
          detail:
            'Crawl-through inspection of the existing subfloor. Pier condition assessed. Bearer and joist condition checked for rot, termite damage, sag. Photos and measurements taken. Report produced.',
        },
        {
          step: 'Quote and scoping',
          detail:
            'Quote produced for restumping, bearer or joist replacement, and any structural work. Scope agreed with owner. For significant work, engineer sign-off arranged.',
        },
        {
          step: 'Set up and access',
          detail:
            'Subfloor access points opened up. Floor coverings protected. Temporary supports installed where needed. Building utilities checked (plumbing under floor especially).',
        },
        {
          step: 'Jack and replace piers in sequence',
          detail:
            'Section by section, building is jacked up off the old piers, old piers removed, new pads excavated and piers installed, building lowered onto new piers, levelled with laser. Typically one bay per day on a standard house.',
        },
        {
          step: 'Replace bearers and joists',
          detail:
            'Failed timber bearers and joists replaced as they become accessible during the restump. Connections to piers via brackets or bolts to engineer detail. New timber matches existing where structural.',
        },
        {
          step: 'Final check and reinstate',
          detail:
            'Full level check across all rooms with laser. Any final adjustments made via adjustable stump heads. Subfloor access closed up. Wall cracks above repaired if any have appeared during re-levelling.',
        },
      ]}
      faqs={[
        {
          question: 'How do I know if my stumps need replacing?',
          answer:
            'Bouncy floors when you walk, floors that have a noticeable slope, gaps appearing between skirting boards and walls, doors that have stopped closing properly, cracks above interior doorways. If you can get into the subfloor, look for rotting timber stumps, cracked concrete piers, evidence of termite mudding, or stumps that have visibly sunk into the soil.',
        },
        {
          question: 'What type of pier is best?',
          answer:
            'Concrete piers cast in situ are the most common permanent replacement and cheapest. Galvanised steel adjustable stumps are better where the building is on reactive clay and may need future re-levelling. Bored concrete piers on screw bases are best for unstable or sandy soils. We recommend based on the soil type and building conditions.',
        },
        {
          question: 'How long does restumping take?',
          answer:
            'A typical three-bedroom Sydney terrace or Federation cottage is 7 to 12 days. A larger four or five-bedroom house is 2 to 3 weeks. Buildings with difficult subfloor access or termite-damaged bearers take longer. We give a programmed timeline with the quote.',
        },
        {
          question: 'Will restumping crack my walls?',
          answer:
            'Some minor cracking can occur as the building re-levels. We jack in small increments (5 to 10mm per cycle) to minimise stress on the wall connections above. Most cracking is minor and reads as hairline plaster cracks rather than structural damage. We can repair any visible cracks as part of the job.',
        },
        {
          question: 'Can we stay in the house during restumping?',
          answer:
            'Yes, most homeowners stay in place. There is noise from jacking and concrete work, but the house remains structurally supported throughout. We work room by room. Plumbing and electrical services need to be coordinated where lines run through the subfloor.',
        },
        {
          question: 'What does restumping cost?',
          answer:
            'Concrete pier replacement is around 600 to 1100 dollars per pier installed. Steel adjustable stumps are 750 to 1300 dollars each. A typical three-bedroom Sydney terrace has 25 to 50 piers and runs 18,000 to 50,000 dollars all up. Bearer or joist replacement and termite damage repair are extra. Fixed quote after subfloor inspection.',
        },
      ]}
    />
  );
};

export default PierBeamPage;
