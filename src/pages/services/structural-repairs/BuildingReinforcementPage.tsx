import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ShieldCheck, Layers, Wrench, HardHat, ClipboardCheck } from 'lucide-react';

const BuildingReinforcementPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'building-reinforcement');
  return (
    <ServicePageTemplate
      title="Building Reinforcement"
      metaTitle="Building Reinforcement Sydney | Romans Building Services"
      metaDescription="Structural reinforcement for residential and commercial buildings across Sydney. Steel, carbon fibre, and masonry solutions."
      heroImage="/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Building Reinforcement', href: '' },
      ]}
      intro={[
        'Sometimes a building needs more strength than it was originally built with. Change of use, additional storeys, or just age and deterioration can mean the structure needs reinforcing.',
        'We reinforce buildings using steel, carbon fibre, additional masonry, and concrete depending on what the engineer specifies. Every job is different and every solution is tailored to the building.',
        'We have reinforced terraces, apartments, warehouses, and commercial buildings right across Sydney. If the engineer says it needs strengthening, we know how to do it.',
      ]}
      features={[
        { icon: ShieldCheck, title: 'Steel Reinforcement', description: 'Steel beams, plates, and bracing installed to increase load capacity. Bolted or welded to existing structure as required.' },
        { icon: Layers, title: 'Carbon Fibre Wrapping', description: 'Lightweight carbon fibre sheets bonded to concrete beams and columns. Adds significant strength without adding bulk.' },
        { icon: Wrench, title: 'Masonry Reinforcement', description: 'Helical bars, bed joint reinforcement, and post-tensioning for masonry walls that need additional strength.' },
        { icon: HardHat, title: 'Foundation Strengthening', description: 'Underpinning, additional footings, and ground anchors where the foundations need to carry more load.' },
        { icon: ClipboardCheck, title: 'Engineering Compliance', description: 'All reinforcement work designed by structural engineers and certified on completion. Full documentation provided.' },
      ]}
      faqs={[
        { question: 'When does a building need reinforcement?', answer: 'Common reasons include adding a storey, changing from residential to commercial use, fixing structural defects, or meeting current building codes after an assessment.' },
        { question: 'What is carbon fibre reinforcement?', answer: 'Carbon fibre sheets are bonded to concrete with structural epoxy. They are incredibly strong, lightweight, and do not corrode. Good for beams, columns, and slabs that need extra capacity.' },
        { question: 'Do you need council approval for building reinforcement?', answer: 'It depends on the scope. Internal structural reinforcement usually falls under exempt or complying development, but anything affecting the building envelope may need approval. We can advise.' },
        { question: 'How disruptive is the work?', answer: 'We plan the work to minimise disruption. Some jobs can be done while the building is occupied. Others need temporary relocation. We will be upfront about what is involved.' },
      ]}
    />
  );
};
export default BuildingReinforcementPage;
