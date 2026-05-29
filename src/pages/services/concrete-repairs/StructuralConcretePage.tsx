import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Columns3, Wrench, FileCheck, Shield, Building } from 'lucide-react';

const StructuralConcretePage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'structural-concrete');

  return (
    <ServicePageTemplate
      title="Structural Concrete Restoration"
      metaTitle="Structural Concrete Restoration Sydney | Romans"
      metaDescription="Sydney structural concrete restoration by Minas Romanakis. Engineered repair of load-bearing beams, columns and slabs. Carbon fibre strengthening, AS 3600."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Structural Concrete Restoration', href: '' },
      ]}
      intro={[
        'When concrete loses structural capacity, you need more than a surface patch. The beam, column or slab needs to be brought back to its original engineered strength (or improved beyond it if the building loading has changed). That means breaking back to sound concrete, adding new reinforcement where corrosion has destroyed the original, placing structural-grade repair material to engineer spec, and adding carbon fibre or external steel where extra capacity is required.',
        'We work to structural engineer specifications. The engineer assesses the existing condition, calculates remaining capacity, designs the repair method, and signs off on completion. We carry out the work to that scope. Materials are branded structural products with cube strength testing on bigger jobs. Repairs are documented for the property file.',
        'Most of our structural concrete restoration is in apartment blocks and commercial buildings. Carpark beams, transfer slabs, perimeter beams, balcony slabs, suspended floor slabs. Romans holds a full builders licence for structural work and we work to AS 3600 (concrete structures) and EN 1504 (concrete repair products).',
      ]}
      features={[
        {
          icon: Columns3,
          title: 'Beam and column repair',
          description:
            'Load-bearing concrete beams and columns restored to engineered capacity. Damaged concrete cut back, new rebar spliced if needed, structural mortar built up to full profile.',
        },
        {
          icon: Wrench,
          title: 'Slab restoration',
          description:
            'Balcony slabs, transfer slabs, suspended floors, roof slabs. Repaired from both faces where needed. Engineered to take the loads they were designed for.',
        },
        {
          icon: FileCheck,
          title: 'Engineered scope',
          description:
            'Structural engineer designs the repair method, specifies materials, inspects during construction and certifies on completion. Documentation for property file.',
        },
        {
          icon: Shield,
          title: 'Carbon fibre strengthening',
          description:
            'Where additional capacity is needed (added storey, changed use, deteriorated capacity), carbon fibre fabric epoxy-bonded to the structural element adds significant tensile strength.',
        },
        {
          icon: Building,
          title: 'Multi-storey work',
          description:
            'Scaffolding, swing stage or rope access for high work. Acrow propping for any structural element being repaired. Crane lifts for heavy steel or concrete components.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Engineer-specified repair products',
          detail:
            'Sika, Mapei, BASF structural repair systems. Selected to engineer spec based on application (vertical, overhead, horizontal), strength requirement, and bond requirements. R3 or R4 class per EN 1504-3.',
        },
        {
          title: 'High-strength micro-concrete for thick sections',
          detail:
            'For repairs deeper than 50mm, micro-concrete used instead of repair mortar. Higher strength, pumped or poured into formwork. Used for beam soffit reconstruction and column section enlargement.',
        },
        {
          title: 'Replacement rebar where corrosion has destroyed original',
          detail:
            'Where rebar section loss exceeds 25 percent, new bar is spliced in to engineer drawing. Lap lengths to AS 3600. Tied to surrounding sound rebar with binding wire or mechanical couplers.',
        },
        {
          title: 'Carbon fibre fabric and rods',
          detail:
            'Unidirectional carbon fibre fabric, epoxy-saturated, applied wet to the structural element. Carbon fibre rods for higher-load applications. Increases tensile capacity by 30 to 100 percent depending on lay-up.',
        },
        {
          title: 'Acrow props for temporary support',
          detail:
            'Adjustable steel props rated to the load above. Sized and positioned to engineer drawings. Stay in place from before cutting starts until the new concrete has cured to design strength (typically 28 days).',
        },
        {
          title: 'Cube testing for QA',
          detail:
            'On bigger jobs, cube samples of repair mortar or micro-concrete are taken on site, sent to a NATA-accredited lab for compressive strength testing at 7 and 28 days. Results documented for the engineer.',
        },
      ]}
      processSteps={[
        {
          step: 'Engineer assessment',
          detail:
            'Structural engineer assesses the existing element. Capacity calculations done against current loading. Remaining cross-section measured. Repair method specified including materials, cover, reinforcement and curing.',
        },
        {
          step: 'Propping and protection',
          detail:
            'Acrow props installed below the element being repaired. Adjacent finishes protected. Site secured. Access scaffolding erected for high or hard-to-reach work.',
        },
        {
          step: 'Cut back and rebar work',
          detail:
            'Damaged concrete cut back to sound material with diamond blade or chipping hammer. At least 25mm cut back behind rebar so the bar is fully exposed. Section loss measured. New rebar spliced where required.',
        },
        {
          step: 'Steel treatment',
          detail:
            'Rebar cleaned to bright metal by wire brushing or grit blasting. Zinc-rich corrosion inhibitor primer applied, two coats. Cured before concrete goes on.',
        },
        {
          step: 'Place repair material',
          detail:
            'Repair mortar or micro-concrete placed to engineer spec. Built up in layers for thicker sections. Vibrated or rodded to remove air pockets. Final layer struck to original profile.',
        },
        {
          step: 'Curing, testing, certification',
          detail:
            'Cured under wet hessian or curing membrane for 7 to 14 days minimum. Cube test results received from lab. Engineer inspects and certifies on completion. Props removed in sequence as the new concrete takes load.',
        },
      ]}
      faqs={[
        {
          question: 'Do I need an engineer for structural concrete repairs?',
          answer:
            'For anything load-bearing, yes. Engineer assesses the existing condition, designs the repair method, and certifies completion. Without engineer involvement, structural repairs are not certifiable and may not satisfy insurance, strata or future buyer requirements. We coordinate with engineers on every structural job, or we can recommend one if you need.',
        },
        {
          question: 'What is carbon fibre strengthening?',
          answer:
            'Carbon fibre fabric is epoxy-bonded to the structural element. Once cured, the carbon fibre acts as additional tensile reinforcement. About 10 times stronger than steel per unit weight, does not corrode, takes up minimal thickness. Used for adding capacity where new loading exceeds original design, or where deteriorated capacity needs restoring.',
        },
        {
          question: 'How long does structural concrete restoration take?',
          answer:
            'A single beam or column repair is 2 to 4 weeks including engineer involvement and curing. A balcony slab repair is 4 to 8 weeks. Full carpark or apartment block structural restoration is 4 to 12 months. The actual placement of concrete is fast but the curing periods between steps are not.',
        },
        {
          question: 'Can you work while the building is occupied?',
          answer:
            'Usually yes. We stage works to minimise disruption. Carpark repairs done in sections with rotating closures. Balcony repairs done one at a time. Major structural work (transfer slabs, perimeter beams) may need temporary tenant relocation depending on the scope, this is rare.',
        },
        {
          question: 'What does structural concrete restoration cost?',
          answer:
            'Highly variable. A single beam repair is 8000 to 25,000 dollars including engineer, propping, materials and finishing. Carbon fibre strengthening is 1500 to 4000 dollars per metre of beam. A full carpark structural restoration runs from 200,000 dollars up. Engineer fees 5 to 12 percent of construction cost. Fixed quote after engineer scope.',
        },
        {
          question: 'How long will the restored concrete last?',
          answer:
            'Design life is typically 50 years for the structural repair element itself, matching or exceeding the original concrete. Protective coatings extend this. The engineering certificate stays with the property and provides evidence for any future buyer, insurer or strata committee that the work was done to spec.',
        },
      ]}
    />
  );
};

export default StructuralConcretePage;
