import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, ShieldCheck, FileCheck, Wrench, Scale } from 'lucide-react';

const HistoricUpgradesPage = () => {
  const siblings = getSiblingServices('building-restoration', 'historic-upgrades');
  return (
    <ServicePageTemplate
      title="Historic Building Upgrades"
      metaTitle="Historic Building Upgrades Sydney | Romans"
      metaDescription="Sydney historic building upgrades by Minas Romanakis. Structural, fire, BCA compliance, adaptive reuse. Discreet reinforcement that preserves heritage fabric."
      heroImage="/gallery/thumbs/romansstone_1574278523_2181528827132774103_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Historic Building Upgrades', href: '' },
      ]}
      intro={[
        'Older buildings have character but they were built to standards that no longer match what the BCA requires. Floor loads designed for a 1920s office are not enough for a modern commercial fitout. Walls designed for residential are not fire-rated for apartment conversion. Structural systems designed before earthquake standards need bracing to comply with current code. Bringing an old building up to current standards without destroying what makes it worth keeping is the work.',
        'We handle structural upgrades, fire-rating improvements, seismic strengthening, accessibility modifications, and adaptive reuse. Most of the upgrades are done discreetly: steel reinforcement hidden in floor and ceiling voids, carbon fibre bonded to hidden faces, additional internal masonry behind plaster, fire-rated partitions inside existing walls. The aim is current code compliance with no visible change to the heritage fabric.',
        'Most of our historic upgrade work is on Victorian and Federation terraces being renovated or converted to apartments, plus older commercial buildings (warehouses, shopfronts, churches) being adapted to new uses. Each one needs an engineer scope and council approval. We work to AS 3600 (concrete), AS 3700 (masonry), AS 1170 (loading), and AS 1170.4 (seismic) depending on the upgrade.',
      ]}
      features={[
        {
          icon: Building,
          title: 'Structural upgrades',
          description:
            'Floor, wall and roof reinforcement to meet current loading standards. Steel beams added in concealed positions. Carbon fibre bonded to hidden concrete faces. Helibar reinforcement to masonry.',
        },
        {
          icon: ShieldCheck,
          title: 'Seismic strengthening',
          description:
            'Tying walls to floors and roofs with concealed connections. Diaphragm bracing in roof structures. Anchor ties through external walls. Brings older masonry buildings into compliance with AS 1170.4.',
        },
        {
          icon: Scale,
          title: 'BCA compliance',
          description:
            'Fire-rating walls and floors, accessibility upgrades, structural compliance, weatherproofing details. Documented compliance with current code without major visible change.',
        },
        {
          icon: Wrench,
          title: 'Adaptive reuse',
          description:
            'Conversion of warehouses, churches and commercial buildings to apartments, offices, retail or hospitality. Structural changes to support new loads, openings and services.',
        },
        {
          icon: FileCheck,
          title: 'Heritage approvals',
          description:
            'Heritage impact statements, scope of works, methodology documentation. We work with heritage consultants and councils to get upgrades approved on listed buildings.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Concealed steel reinforcement',
          detail:
            'Steel beams and columns positioned within floor or ceiling voids, behind plaster, or in non-visible service zones. No visible structural change. Engineered to take new loads.',
        },
        {
          title: 'Carbon fibre fabric',
          detail:
            'Epoxy-bonded to hidden concrete faces (underside of slabs, back of walls). Adds significant tensile capacity without adding thickness. Perfect for heritage where any external change is restricted.',
        },
        {
          title: 'Helibar masonry reinforcement',
          detail:
            'Stainless helical bars set into bed joints. Concealed under new pointing. Reinforces existing masonry walls to current code without visible change to the wall.',
        },
        {
          title: 'Fire-rated linings',
          detail:
            'Fire-rated plasterboard, intumescent paints, fire-rated mortar around penetrations. Brings non-compliant walls and floors up to required fire ratings (FRL 60/60/60 to 90/90/90 typical).',
        },
        {
          title: 'Anti-seismic anchor systems',
          detail:
            'Stainless steel anchors tying external walls to floors and roof. Diaphragm bracing in roof structures. Brings unreinforced masonry buildings into seismic compliance per AS 1170.4.',
        },
        {
          title: 'Heritage consultant + engineer',
          detail:
            'For listed buildings, heritage consultant signs off on what changes are acceptable. Structural engineer designs the upgrade. Both reports inform the council application. Approval before any work starts.',
        },
      ]}
      processSteps={[
        {
          step: 'Building assessment',
          detail:
            'On-site survey of existing structure, fire-rating, accessibility, weatherproofing. Engineer assesses structural capacity against intended new loads. Heritage consultant assesses what can change.',
        },
        {
          step: 'Upgrade design',
          detail:
            'Engineer designs the upgrade method to meet current code. Heritage consultant signs off on the visibility of the proposed changes. Designs are reworked until both are happy.',
        },
        {
          step: 'Council approval',
          detail:
            'Development application or complying development certificate prepared. Engineer certificate, heritage impact statement, BCA report submitted. Approval timeline 6 to 16 weeks depending on council and listing.',
        },
        {
          step: 'Site setup and access',
          detail:
            'Scaffolding, internal access, dust control. Site secured. Existing finishes protected. Heritage elements documented in detail before any work touches them.',
        },
        {
          step: 'Install the upgrade',
          detail:
            'Concealed steel in floor and ceiling voids. Carbon fibre on hidden concrete faces. Helibar in masonry walls. Fire-rated linings. Seismic anchors. Each item to engineer design, each item signed off as installed.',
        },
        {
          step: 'Reinstate and certify',
          detail:
            'Finishes reinstated to match heritage fabric. Engineer issues certificate of compliance. Heritage consultant inspects final state and signs off. BCA compliance certificate issued. Documentation package handed to owner.',
        },
      ]}
      faqs={[
        {
          question: 'Can a heritage building be upgraded to meet modern codes?',
          answer:
            'Yes. Most heritage buildings can be brought to current code without major visible change. Steel reinforcement hides in floor and ceiling voids, carbon fibre bonds to hidden faces, helibar goes into masonry bed joints, fire-rated linings go behind heritage plaster. It takes careful design and good engineering but it is done regularly.',
        },
        {
          question: 'Do you need heritage approval for structural upgrades?',
          answer:
            'For listed buildings, yes. For buildings in heritage conservation areas, usually yes for any work affecting the external fabric. We prepare the heritage impact statement and the development application together with the engineering scope. Approval timelines vary by council, typically 6 to 16 weeks.',
        },
        {
          question: 'What is adaptive reuse?',
          answer:
            'Converting a building from its original use to something different. Industrial warehouses converted to apartments. Old offices converted to retail. Churches converted to community centres or homes. The structure usually needs upgrading because new uses bring new loads, new fire requirements, and new accessibility standards.',
        },
        {
          question: 'How do you hide structural reinforcement in a historic building?',
          answer:
            'Concealed steel inside floor and ceiling voids, behind plaster, in service zones. Carbon fibre bonded to non-visible concrete faces. Internal masonry reinforcement using helical bars (concealed under pointing). Fire-rated linings hidden behind original plaster. We design the upgrade so the heritage fabric stays visually unchanged.',
        },
        {
          question: 'How long does a historic upgrade take?',
          answer:
            'A single-element upgrade (eg seismic anchoring of one wall) is 2 to 4 weeks. A full BCA compliance upgrade of a small building is 8 to 20 weeks. Major adaptive reuse projects can be 6 to 18 months. Engineering and approvals add 8 to 20 weeks at the front.',
        },
        {
          question: 'What does a historic upgrade cost?',
          answer:
            'Highly variable. Simple seismic anchoring is 8000 to 25,000 dollars for a typical building. BCA compliance upgrade across a small building is 50,000 to 200,000 dollars. Major adaptive reuse projects run into millions. Engineering fees 5 to 12 percent of construction cost. Fixed quote after engineer and heritage consultant scopes.',
        },
      ]}
    />
  );
};
export default HistoricUpgradesPage;
