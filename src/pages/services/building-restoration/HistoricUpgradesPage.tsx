import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, ShieldCheck, FileCheck, Wrench, Scale } from 'lucide-react';

const HistoricUpgradesPage = () => {
  const siblings = getSiblingServices('building-restoration', 'historic-upgrades');
  return (
    <ServicePageTemplate
      title="Historic Building Upgrades"
      metaTitle="Historic Building Upgrades Sydney | Romans Building Services"
      metaDescription="Upgrading historic buildings to meet modern standards while preserving character. Structural and compliance upgrades across Sydney."
      heroImage="/gallery/thumbs/romansstone_1574278523_2181528827132774103_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Historic Building Upgrades', href: '' },
      ]}
      intro={[
        'Older buildings have character, but they were not built to modern standards. Upgrading a historic building means bringing it up to code without destroying what makes it special.',
        'We handle structural upgrades, seismic strengthening, fire rating improvements, and accessibility modifications. All done with respect for the original building fabric and heritage requirements where they apply.',
        'We have upgraded terraces, warehouses, churches, and civic buildings across Sydney. We understand the balance between preservation and compliance, and we know how to achieve both.',
      ]}
      features={[
        { icon: Building, title: 'Structural Upgrades', description: 'Strengthening floors, walls, and roofs to meet current loading standards. Discreet reinforcement that does not change the building character.' },
        { icon: ShieldCheck, title: 'Seismic Strengthening', description: 'Tying walls to floors and roofs, adding bracing, and reinforcing connections to improve earthquake resilience.' },
        { icon: Scale, title: 'Compliance Work', description: 'Bringing buildings up to current BCA requirements for fire, structure, and accessibility without losing heritage value.' },
        { icon: Wrench, title: 'Adaptive Reuse', description: 'Converting old buildings for new uses. Structural modifications to support new floor loads, openings, and services.' },
        { icon: FileCheck, title: 'Heritage Approvals', description: 'We prepare documentation and work with heritage consultants to get council approval for upgrade works on listed buildings.' },
      ]}
      faqs={[
        { question: 'Can a heritage building be upgraded to meet modern codes?', answer: 'Yes. There are always ways to improve structural performance and compliance without gutting the building. It takes careful planning and the right techniques, but it is done all the time.' },
        { question: 'Do you need heritage approval for structural upgrades?', answer: 'If the building is heritage-listed, yes. Internal structural work usually needs at least a heritage impact statement. We can guide you through the process.' },
        { question: 'What is adaptive reuse?', answer: 'It is converting a building from its original use to something new. An old warehouse becoming apartments, or a church becoming an office. The structure often needs upgrading to suit the new purpose.' },
        { question: 'How do you hide structural reinforcement in a historic building?', answer: 'We use techniques like concealed steel within floor and ceiling voids, carbon fibre bonded to hidden faces, and internal masonry reinforcement. The goal is to strengthen without changing what you see.' },
      ]}
    />
  );
};
export default HistoricUpgradesPage;
