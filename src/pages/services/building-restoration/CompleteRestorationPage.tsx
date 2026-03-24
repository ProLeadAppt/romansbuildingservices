import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, Layers, Hammer, ClipboardCheck, Eye } from 'lucide-react';

const CompleteRestorationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'complete-restoration');
  return (
    <ServicePageTemplate
      title="Complete Building Restoration"
      metaTitle="Complete Building Restoration Sydney | Romans Building Services"
      metaDescription="Full building restoration from facade to structure. Comprehensive restoration services across Greater Sydney."
      heroImage="/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Complete Building Restoration', href: '' },
      ]}
      intro={[
        'Some buildings need more than a patch-up. When the facade is crumbling, the structure is compromised, and the render is falling off, a complete restoration is the way to go.',
        'We manage the full scope. Structural repairs, masonry rebuilding, repointing, rendering, waterproofing, and finishing. One team handling everything means fewer problems and a better result.',
        'We have brought back buildings across Sydney that looked beyond saving. Terraces, apartments, churches, commercial buildings. If it is made of brick, stone, or concrete, we can restore it.',
      ]}
      features={[
        { icon: Eye, title: 'Full Building Assessment', description: 'We inspect every element, identify all the defects, and put together a comprehensive scope of work before anything starts.' },
        { icon: Building, title: 'Facade Restoration', description: 'Brickwork, stonework, render, and architectural details all restored to bring the building back to its best.' },
        { icon: Hammer, title: 'Structural Repairs', description: 'Load-bearing walls, beams, columns, and foundations repaired or reinforced as part of the full restoration.' },
        { icon: Layers, title: 'Waterproofing & Protection', description: 'Once the building is restored, we apply protective treatments to keep water out and extend the life of the work.' },
        { icon: ClipboardCheck, title: 'Project Management', description: 'One point of contact from start to finish. We coordinate trades, manage timelines, and keep you informed throughout.' },
      ]}
      faqs={[
        { question: 'How long does a complete building restoration take?', answer: 'It depends on the size and condition of the building. A small terrace might take four to six weeks. A large apartment block could take several months. We will give you a realistic timeline upfront.' },
        { question: 'Can the building stay occupied during restoration?', answer: 'Usually, yes. We set up scaffolding and protection to keep residents safe and minimise disruption. Some areas may need temporary restricted access.' },
        { question: 'Do you handle council approvals?', answer: 'We can assist with the application process and provide the technical documentation councils need. We are experienced with heritage and development applications across Sydney councils.' },
      ]}
    />
  );
};
export default CompleteRestorationPage;
