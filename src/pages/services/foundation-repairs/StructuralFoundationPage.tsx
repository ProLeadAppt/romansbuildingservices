import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Wrench, Search, Columns3, ShieldCheck, FileCheck } from 'lucide-react';

const StructuralFoundationPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'structural-foundation');

  return (
    <ServicePageTemplate
      title="Structural Foundation Repairs"
      metaTitle="Sydney Structural Foundation Repairs | Romans"
      metaDescription="Sydney structural foundation repairs by Minas Romanakis. Cracked footings, foundation walls, drainage, waterproofing. Engineer-designed, council-approved."
      heroImage="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Structural Foundation Repairs', href: '' },
      ]}
      intro={[
        'Foundation damage is the most expensive kind of building damage to fix and the most expensive to ignore. Cracked concrete footings, eroded brick or stone foundation walls, failed slab edges, washed-out fill. Each one keeps getting worse. The wall above moves because the foundation under it has failed. By the time the cracks are obvious upstairs, the foundation below has been deteriorating for a long time.',
        'We repair foundations rather than replace them where possible. Crack injection (epoxy or polyurethane) restores concrete continuity. Steel reinforcement bedded into existing footings adds capacity. Concrete encasement enlarges undersized footings. Drainage improvements stop water from undermining the footing. The right method depends on the foundation type, the damage type, and what is causing the damage. Engineer involvement on every significant repair.',
        'Most of our foundation repair is on older Sydney terraces and houses with shallow rubble footings or under-spec concrete. Settlement from reactive clay, tree roots, plumbing leaks under the building, and inadequate original drainage are the typical causes. We also repair commercial slabs, retaining wall foundations and apartment block perimeter footings across Sydney.',
      ]}
      features={[
        {
          icon: Search,
          title: 'Foundation assessment',
          description:
            'Test pits dug to expose existing footings. Soil samples for analysis. Drainage and plumbing checked for leaks. Cause identified before any repair starts. Often combined with engineer borehole investigation.',
        },
        {
          icon: Wrench,
          title: 'Crack injection',
          description:
            'Two-part epoxy or polyurethane injection through ports drilled along the crack. Restores concrete continuity, seals against water ingress. Standard repair for stable cracks in concrete footings.',
        },
        {
          icon: Columns3,
          title: 'Foundation strengthening',
          description:
            'Concrete encasement of inadequate footings, steel reinforcement bedded into existing footings, mini-pile reinforcement under failed slab edges. Engineered to take design loads.',
        },
        {
          icon: ShieldCheck,
          title: 'Drainage and waterproofing',
          description:
            'Subsoil drainage installed around foundations. Foundation walls waterproofed with membrane. Roof and surface water diverted away from footing line. Stops the water that caused the failure in the first place.',
        },
        {
          icon: FileCheck,
          title: 'Engineer involvement',
          description:
            'Every significant foundation repair has structural engineer scope, design certificate, site inspections during construction and completion certificate. Council approval where required.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Test pit excavation',
          detail:
            'Hand-dug or machine-dug pits 1 to 2 metres along the foundation line. Exposes the existing footing for inspection. Soil samples taken from below the footing for bearing capacity assessment. Backfilled and compacted after inspection.',
        },
        {
          title: 'Structural epoxy injection',
          detail:
            'Two-part low-viscosity epoxy for hairline to medium cracks in concrete footings. Injected under pressure through ports drilled along the crack. Cures to higher strength than the surrounding concrete.',
        },
        {
          title: 'Flexible polyurethane grout',
          detail:
            'For cracks where ongoing minor movement is expected, or where waterproofing is the priority. Stays elastic after curing. Used on basement walls and footings with active water ingress.',
        },
        {
          title: 'Helibar or stainless reinforcement',
          detail:
            'Stainless helical bars or threaded rods set into existing footing bed joints or drilled holes. Used for tying separated footings back together or adding tensile capacity. Bonded with cementitious grout.',
        },
        {
          title: 'Concrete encasement materials',
          detail:
            'For enlarging inadequate footings. New concrete (typically 32 MPa with reinforcement) cast around or under existing footing. Bonded to original with chemical anchors or epoxy primer.',
        },
        {
          title: 'Subsoil drainage components',
          detail:
            'Slotted ag pipe, washed gravel, geotextile fabric. Installed below footing line and along foundation walls. Connected to stormwater outfall. Stops water building up against the footing.',
        },
      ]}
      processSteps={[
        {
          step: 'Investigation',
          detail:
            'Site visit. Defects on the building photographed and measured. Test pits dug at suspected damage locations to expose the existing footing. Drainage system checked. Plumbing under the building inspected if any leak is suspected.',
        },
        {
          step: 'Engineer scope',
          detail:
            'Structural engineer reviews findings. Soil tests done where needed. Repair method designed: crack injection, encasement, reinforcement, drainage upgrade, or combination. Specification produced.',
        },
        {
          step: 'Council approval (where needed)',
          detail:
            'Foundation repair typically requires at least a Complying Development Certificate. Major works need full development approval. We prepare the application. Engineer drawings, construction certificate, environmental documentation.',
        },
        {
          step: 'Address the cause first',
          detail:
            'Tree removal or root barriers, plumbing leak repair, drainage improvement. Before any structural repair the cause is dealt with so the new repair is not undermined.',
        },
        {
          step: 'Execute the repair',
          detail:
            'Crack injection through ports. Reinforcement bedded in. Concrete encasement poured. Each step inspected by engineer before next starts. Drainage installed before backfilling.',
        },
        {
          step: 'Reinstate and monitor',
          detail:
            'Backfill compacted in layers. Surface reinstated (paving, garden, internal floor). Crack monitors installed across any wall cracks above. Reviewed at 3 and 6 months to confirm movement has stopped before final cosmetic repair.',
        },
      ]}
      faqs={[
        {
          question: 'What causes foundation damage?',
          answer:
            'Reactive clay soils that shrink in dry summers and swell in wet winters. Tree roots within 5 to 10 metres of the building (large eucalypts, paperbarks). Plumbing leaks under the building washing out soil. Poor surface drainage delivering rainwater straight to the footing line. Original construction with inadequate footing depth or strength. Most jobs involve a combination.',
        },
        {
          question: 'Can cracked foundations be repaired?',
          answer:
            'Almost always, yes. Crack injection restores concrete continuity. Reinforcement adds capacity where corrosion has weakened the original. Encasement enlarges inadequate footings. Full foundation replacement is rare and only used when the entire footing is failing structurally. Repair is significantly cheaper than replacement.',
        },
        {
          question: 'Do you handle council approvals?',
          answer:
            'Yes. We prepare the development application or Complying Development Certificate with engineer drawings and supporting documentation. Sydney councils generally require approval for any foundation work. Approval timelines vary, typically 4 to 12 weeks.',
        },
        {
          question: 'How is foundation repair different to underpinning?',
          answer:
            'Underpinning deepens or extends the foundation to reach more stable ground (used when the existing footing is sitting on soil that has moved). Foundation repair fixes the existing footing in place (used when the footing itself is damaged but the soil under it is fine). The two are often combined on the same job.',
        },
        {
          question: 'How long does foundation repair take?',
          answer:
            'Crack injection on accessible footings is one to two weeks. Concrete encasement of failed footings is two to six weeks. Major foundation reconstruction with drainage improvements is two to six months. Council approval adds 4 to 12 weeks at the front. Engineer involvement throughout.',
        },
        {
          question: 'What does foundation repair cost?',
          answer:
            'Crack injection is 400 to 800 dollars per linear metre of crack. Concrete encasement is 1500 to 4000 dollars per linear metre of footing. Engineer scope and council approval add 5,000 to 15,000 dollars at the front. Full foundation repair on a typical Sydney terrace runs 25,000 to 90,000 dollars. Fixed quote after engineer scope.',
        },
      ]}
    />
  );
};

export default StructuralFoundationPage;
