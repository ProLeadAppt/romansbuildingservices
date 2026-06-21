import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, Paintbrush, Layers, Wrench, ShieldCheck } from 'lucide-react';

const FacadeRenovationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'facade-renovation');
  return (
    <ServicePageTemplate
      title="Facade Renovation & Repair"
      metaTitle="Sydney Building Facade Renovation | Romans"
      metaDescription="Sydney facade renovation by Minas Romanakis. Brick, stone, render, cornices, parapets. Heritage and modern. Scaffold, swing stage, rope access."
      heroImage="/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Facade Renovation & Repair', href: '' },
      ]}
      intro={[
        'The facade is what gets the building noticed. It is also the first thing to weather, the first thing to fail, and the most expensive thing to ignore. Cracked brick, blown render, sagging cornices, rusted balcony balustrades, failed parapets, leaking pointing. Each one is bad on its own. Combined on a single building, they signal neglect that knocks tens of thousands off the property value.',
        'We renovate facades in brick, stone, render, mixed materials and heritage. Repointing where the mortar has failed. Brick or stone replacement where individual units have crumbled. Render strip-and-replace where the existing has blown. Architectural detail repair (cornices, copings, string courses, sills, parapets). Protective coatings to slow the next round of weathering.',
        'We work at every scale. Single-storey shopfronts on suburban high streets, two and three-storey terraces in the inner city, multi-storey commercial buildings and apartment blocks across the CBD and Eastern Suburbs. Scaffold for most of it, swing stage for tall narrow facades, rope access for spot work where scaffold is impractical.',
      ]}
      features={[
        {
          icon: Building,
          title: 'Brick facade repair',
          description:
            'Cracked and spalled brick replaced, mortar joints repointed, biological staining cleaned, rust runs from steel removed. Heritage matching where the building is listed.',
        },
        {
          icon: Paintbrush,
          title: 'Render renovation',
          description:
            'Failed render stripped and replaced. Lime render on heritage walls, polymer-modified cement on modern. Sample patches for colour and texture matching.',
        },
        {
          icon: Layers,
          title: 'Stone facade restoration',
          description:
            'Sandstone, bluestone, limestone facades. Hand-dressed replacement, dutchman repairs, stone repair mortar for surface erosion. Stainless steel cramps replacing failed iron.',
        },
        {
          icon: Wrench,
          title: 'Architectural details',
          description:
            'Cornices, mouldings, string courses, sills, parapets, balustrades, copings. Repaired in matching material or replicated from templates where damage is too far gone.',
        },
        {
          icon: ShieldCheck,
          title: 'Protective coatings',
          description:
            'Anti-carbonation coatings on concrete and render. Breathable silane or siloxane sealers on stone. Weatherproofing for parapets, copings and balustrades.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Heritage and matching brick',
          detail:
            'Salvage yards in Marrickville and Wetherill Park for reclaimed Federation and Victorian brick. New brick from Bowral and similar manufacturers for newer building matching. Stockpile at the workshop.',
        },
        {
          title: 'Hawkesbury and Gosford sandstone',
          detail:
            'Active NSW quarries supplying matched stone for heritage facades. Lead time two to four weeks for hand-cut blocks. Reclaimed stone for harder matches.',
        },
        {
          title: 'Lime or cement render depending on era',
          detail:
            'Lime render (NHL 3.5) for any building pre-1940. Polymer-modified cement render for newer buildings. Never cement render against soft brick. Sample patches before bulk work.',
        },
        {
          title: 'Anti-carbonation protective coatings',
          detail:
            'Two-coat anti-carbonation system for concrete and render facades. Breathable, slows future carbonation, 15 to 20 year warranty from manufacturer. Pigmented to match.',
        },
        {
          title: 'Scaffold, swing stage and rope access',
          detail:
            'Heavy scaffold for major facade work. Swing stage for tall narrow facades or where scaffolding the street is impractical. Rope access for spot repairs on multi-storey buildings.',
        },
        {
          title: 'Engineer and heritage signoff',
          detail:
            'Structural engineer involvement for any masonry repair affecting load paths. Heritage consultant signoff for listed buildings. Full documentation for council and property file.',
        },
      ]}
      processSteps={[
        {
          step: 'Defect mapping',
          detail:
            'Facade photographed in detail. Defects marked up on drawings: cracked brick, blown render, failed pointing, rusted lintels, biological staining, salt deposits. Each defect categorised.',
        },
        {
          step: 'Sample patches',
          detail:
            'For each repair type, a sample patch is done in a visible but inconspicuous location. Heritage consultant or owner signs off on the match. Mortar colour, brick match, render texture, paint colour.',
        },
        {
          step: 'Scaffold or access setup',
          detail:
            'Scaffold around the facade or swing stage on tall narrow facades. Protective screens to keep dust in. Footpath protection or hoarding if work is over public access.',
        },
        {
          step: 'Strip failed material',
          detail:
            'Failed brick cut out, failed render stripped, failed pointing raked out. Loose material removed. Substrate cleaned and prepared. Photos before any new material goes on.',
        },
        {
          step: 'Reinstate',
          detail:
            'New brick or stone laid, new render applied in coats, new pointing tooled to original profile. Heritage matching throughout. Engineer or heritage consultant inspects key elements.',
        },
        {
          step: 'Protective coatings and clean-up',
          detail:
            'Protective coatings applied to render and concrete. Stone sealed with breathable sealer if exposure justifies. Scaffolding down. Final facade clean. Completion documentation handed over.',
        },
      ]}
      faqs={[
        {
          question: 'How do you match existing brick or stone?',
          answer:
            'For brick we source from salvage yards, demolition contacts and heritage brick suppliers. Our workshop stockpile covers most common eras. For stone we source from active NSW quarries (Hawkesbury, Gosford) for new cut blocks, and reclaimed stone for harder matches. Sample patches are signed off before bulk work.',
        },
        {
          question: 'Do you work on multi-storey facades?',
          answer:
            'Yes. We scaffold for most jobs but use swing stage on tall narrow facades or where street scaffolding is impractical. Rope access for spot work on multi-storey buildings. We hold the access tickets and have the safety systems for all three.',
        },
        {
          question: 'What causes facade deterioration?',
          answer:
            'Water is the primary cause. Water gets through failed pointing, cracked render or porous brick, reaches embedded steel, the steel rusts and expands, the masonry cracks and the facade fails. Secondary causes include salt attack near the coast, atmospheric pollution accelerating carbonation of concrete, and poor original construction with inadequate weatherproofing details.',
        },
        {
          question: 'Can you work on heritage facades?',
          answer:
            'Yes, it is a large part of what we do. We use period-correct materials (lime mortar, matched brick, hand-dressed stone) and period methods. We work with heritage consultants and council heritage officers regularly. Sample patches and methodology approval are part of every heritage scope.',
        },
        {
          question: 'How long does a facade renovation take?',
          answer:
            'A single-storey shopfront is 2 to 4 weeks. A two-storey Federation terrace facade is 4 to 8 weeks. A multi-storey commercial building or strata block facade can be 3 to 9 months. Scaffolding goes up at the start and stays up for the duration. Engineer and heritage approvals can add weeks at the front.',
        },
        {
          question: 'What does facade renovation cost?',
          answer:
            'Brick and pointing repair is 200 to 450 dollars per square metre of facade area. Render strip and replace is 250 to 500 dollars per square metre. Stone facade restoration is 800 to 2000 dollars per square metre. Scaffolding is around 25 to 60 dollars per square metre on top. Fixed quote per facade after detailed survey.',
        },
      ]}
    />
  );
};
export default FacadeRenovationPage;
