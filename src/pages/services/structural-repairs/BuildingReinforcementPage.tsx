import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ShieldCheck, Layers, Wrench, HardHat, ClipboardCheck } from 'lucide-react';

const BuildingReinforcementPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'building-reinforcement');
  return (
    <ServicePageTemplate
      title="Building Reinforcement"
      metaTitle="Sydney Building Reinforcement | Romans"
      metaDescription="Sydney building reinforcement by Minas Romanakis. Steel beams, carbon fibre, helibar masonry, foundation underpinning. Engineer-designed, AS 3700/AS 3600."
      heroImage="/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Building Reinforcement', href: '' },
      ]}
      intro={[
        'Buildings sometimes need more strength than they were originally built with. Adding a second storey to a single-storey house. Changing from residential to commercial use. Bringing an older building up to current code. Compensating for a structural defect found in a building report. Or just adapting to heavier modern loads (rooftop air conditioning units, solar panels, mezzanine floors). All of these require reinforcing the existing structure rather than starting fresh.',
        'Reinforcement methods depend on what is being strengthened. Steel beams and columns are added where load paths need to change. Carbon fibre fabric is bonded to concrete elements that need more tensile capacity. Helical stainless steel bars reinforce masonry walls. Additional footings or underpinning strengthens foundations. Most jobs use a combination of methods designed by a structural engineer for that specific building.',
        'We have reinforced terraces, apartments, warehouses, commercial buildings, strata blocks and heritage properties right across Sydney. Engineer scope first, council approval where needed, then the work. Romans holds a full builders licence for structural work and we work to AS 3700 for masonry and AS 3600 for concrete reinforcement.',
      ]}
      features={[
        {
          icon: ShieldCheck,
          title: 'Steel reinforcement',
          description:
            'Steel beams, columns, bracing, plates. Bolted or welded into the existing structure. Sized by structural engineer. Hot-dip galvanised or stainless depending on exposure.',
        },
        {
          icon: Layers,
          title: 'Carbon fibre wrapping',
          description:
            'Carbon fibre fabric epoxy-bonded to concrete beams, columns and slabs. Adds significant tensile strength without adding weight or thickness. Common in apartment retrofits.',
        },
        {
          icon: Wrench,
          title: 'Helibar masonry reinforcement',
          description:
            'Stainless helical bars set into bed joints to reinforce existing masonry walls. Used for retrofitting load capacity, stitching cracks, and tying separated walls back together.',
        },
        {
          icon: HardHat,
          title: 'Foundation strengthening',
          description:
            'Underpinning, additional footings, screw piles, ground anchors. Used when adding load to a building or when existing footings are inadequate. Excavation and concrete pours.',
        },
        {
          icon: ClipboardCheck,
          title: 'Engineered and certified',
          description:
            'All work designed by structural engineer. Site inspections during construction. Completion certificate. Documentation suitable for council, strata committee or insurance file.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Hot-dip galvanised structural steel',
          detail:
            'New steel beams, columns and bracing. Hot-dip galvanised after fabrication. Sized to engineer drawings. Bolted into existing structure with chemical or expansion anchors.',
        },
        {
          title: 'Carbon fibre fabric and epoxy',
          detail:
            'Unidirectional carbon fibre fabric. Saturated with two-part epoxy and applied wet to the structural element. One layer can add 20 to 40 percent to flexural capacity. Multiple layers for higher demand.',
        },
        {
          title: 'Helifix or similar helical bar',
          detail:
            '6mm to 10mm stainless steel helical bar for masonry reinforcement. Set into bed joints in cementitious grout. Industry standard since the 1990s. Concealed under new pointing.',
        },
        {
          title: 'Chemical anchors',
          detail:
            'Two-part chemical anchor for fixing new steel into existing concrete or masonry. Much stronger than expansion anchors. Hilti or Ramset systems, sized by engineer.',
        },
        {
          title: 'Screw piles for foundation work',
          detail:
            'Steel screw piles for new foundation support. Driven by hydraulic torque head. No vibration, no excavation, full bearing capacity within hours. Used under residential extensions and additions.',
        },
        {
          title: 'Engineer involvement throughout',
          detail:
            'Structural engineer designs the reinforcement, specifies materials and inspects during construction. Completion certificate issued for the property file. Council usually requires engineer sign-off.',
        },
      ]}
      processSteps={[
        {
          step: 'Engineer assessment',
          detail:
            'Structural engineer assesses the existing building and the proposed loading. Calculates what additional capacity is needed and where. Specifies the reinforcement method, materials and sizes.',
        },
        {
          step: 'Scope and approval',
          detail:
            'We prepare a quote against the engineer scope. Council approval prepared where required (most reinforcement to existing buildings needs at least a Complying Development Certificate).',
        },
        {
          step: 'Propping and protection',
          detail:
            'Temporary propping installed under any beam or slab being reinforced. Adjacent finishes protected. Dust control set up. Site access organised with the building owner or strata.',
        },
        {
          step: 'Install the reinforcement',
          detail:
            'Method depends on the design. Steel beams craned in and bolted up. Carbon fibre laminated to concrete elements. Helical bars set into bed joints. Foundation piles driven. All to engineer drawings.',
        },
        {
          step: 'Engineer inspection',
          detail:
            'Engineer inspects the reinforcement before any of it is covered up. Confirms installation matches the design. Photos and engineer report taken for the structural file.',
        },
        {
          step: 'Reinstate and certify',
          detail:
            'Finishes reinstated. Render and paint repaired. Temporary propping removed in sequence. Completion certificate issued by engineer. Documentation handed over to the building owner or strata committee.',
        },
      ]}
      faqs={[
        {
          question: 'When does a building need reinforcement?',
          answer:
            'Common triggers: adding a second storey, converting residential to commercial use, installing heavy equipment on a roof or upper floor, addressing a structural defect found in a building report, bringing an older building up to current code after renovation, compensating for a load-bearing wall being removed elsewhere in the building.',
        },
        {
          question: 'What is carbon fibre reinforcement?',
          answer:
            'Carbon fibre fabric is epoxy-bonded to concrete structural elements. Once cured, the carbon fibre acts as additional tensile reinforcement. It is incredibly strong per unit weight (about 10 times stronger than steel by weight) and does not corrode. Most common applications are strengthening concrete beams, slabs and columns where additional capacity is needed without adding thickness.',
        },
        {
          question: 'Do you need council approval for building reinforcement?',
          answer:
            'Usually yes. Internal structural reinforcement that does not change the building envelope may fall under exempt or complying development. Reinforcement that involves new beams cutting through walls, changes to the load path, or any external work usually needs full development consent. We assess on the specific job and prepare the application.',
        },
        {
          question: 'How disruptive is the work?',
          answer:
            'Depends on the scope. Carbon fibre wrapping inside an apartment is one to three days and can usually be done with the apartment occupied. Steel beam installations are typically one to two weeks with the affected room out of use. Foundation reinforcement is two to six weeks. We plan around occupancy where we can.',
        },
        {
          question: 'How long does reinforcement work last?',
          answer:
            'Permanent. Steel reinforcement properly galvanised and weathertight lasts the life of the building. Carbon fibre fabric is essentially indestructible once epoxy-bonded. Helical masonry reinforcement is stainless and lasts the building life. The reinforcement is a permanent structural upgrade.',
        },
        {
          question: 'What does building reinforcement cost?',
          answer:
            'Highly variable. A single steel beam to support a wall removal is 8000 to 15,000 dollars. Carbon fibre reinforcement of a concrete beam is 1500 to 4000 dollars per metre of beam. Foundation underpinning is 3000 to 6000 dollars per pile location. Engineer fees add 2500 to 6000 dollars at the front. Fixed quote after engineer scope.',
        },
      ]}
    />
  );
};
export default BuildingReinforcementPage;
