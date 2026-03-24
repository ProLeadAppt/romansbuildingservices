import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, Paintbrush, Layers, Wrench, ShieldCheck } from 'lucide-react';

const FacadeRenovationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'facade-renovation');
  return (
    <ServicePageTemplate
      title="Facade Renovation & Repair"
      metaTitle="Facade Renovation & Repair Sydney | Romans Building Services"
      metaDescription="Building facade renovation, repair, and restoration across Sydney. Layers, stone, render, and cladding."
      heroImage="/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Facade Renovation & Repair', href: '' },
      ]}
      intro={[
        'The facade is what everyone sees. When bricks are cracking, render is blowing, or stonework is deteriorating, the whole building looks neglected. More importantly, it lets water in.',
        'We repair and renovate facades in brick, stone, render, and mixed materials. That includes repointing, replacing damaged units, patching render, and restoring architectural details that give the building its character.',
        'We work on everything from single-storey shopfronts to multi-level apartment blocks. Scaffolding, swing stages, or rope access, whatever it takes to reach the work safely.',
      ]}
      features={[
        { icon: Building, title: 'Layers Facade Repair', description: 'Cracked and damaged bricks replaced, mortar joints repointed, and brickwork cleaned to restore the original look.' },
        { icon: Paintbrush, title: 'Render Renovation', description: 'Failed render removed and replaced. Crack repair, patching, and full re-rendering with cement or lime-based renders.' },
        { icon: Layers, title: 'Stone Facade Restoration', description: 'Sandstone, limestone, and natural stone facades repaired. Matching original profiles and finishes.' },
        { icon: Wrench, title: 'Architectural Details', description: 'Cornices, mouldings, string courses, and decorative elements repaired or recreated to match the original design.' },
        { icon: ShieldCheck, title: 'Waterproofing', description: 'Facade sealed and protected after repair to prevent water ingress and future deterioration.' },
      ]}
      faqs={[
        { question: 'How do you match existing bricks or stone?', answer: 'We source matching materials from salvage yards, specialist suppliers, or have them custom made. Thirty years in the trade means we know where to find what we need.' },
        { question: 'Do you work on high-rise facades?', answer: 'Yes. We set up scaffolding or use swing stages for multi-storey buildings. We are experienced with the access requirements and safety systems needed for height work.' },
        { question: 'What causes facade deterioration?', answer: 'Water is the main cause. It gets into cracks, freezes, expands, and breaks things apart. Salt attack near the coast, pollution, and poor original construction also contribute.' },
        { question: 'Can you work on heritage facades?', answer: 'Absolutely. We have restored heritage facades across Sydney using period-correct materials and techniques. We understand the requirements for heritage-listed buildings.' },
      ]}
    />
  );
};
export default FacadeRenovationPage;
