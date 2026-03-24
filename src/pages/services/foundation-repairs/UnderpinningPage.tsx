import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ArrowDownToLine, Ruler, Home, FileCheck, Shovel } from 'lucide-react';

const UnderpinningPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'underpinning');

  return (
    <ServicePageTemplate
      title="Foundation Underpinning"
      metaTitle="Foundation Underpinning Sydney | Romans Building Services"
      metaDescription="Professional foundation underpinning across Sydney. Stabilising foundations for residential and commercial buildings."
      heroImage="/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Foundation Underpinning', href: '' },
      ]}
      intro={[
        "Underpinning deepens or strengthens your existing foundations. If your walls are cracking, doors are sticking, or floors are uneven, chances are the foundations have moved. We fix that.",
        "We excavate beneath the existing footings in controlled stages and pour new concrete to extend them down to stable ground. For deeper jobs, we use screw piles or mini piles. Every method is engineered for your specific site.",
        "Romans has underpinned houses, terraces, apartment blocks, and commercial buildings across Sydney. Minas will assess the site, work with a structural engineer, and give you a clear scope and price."
      ]}
      features={[
        { icon: ArrowDownToLine, title: 'Mass Concrete Underpinning', description: 'Traditional method. We dig under the footings in sections and pour new concrete to a deeper, stable bearing layer.' },
        { icon: Ruler, title: 'Screw Pile Underpinning', description: 'Steel screw piles driven to stable ground with minimal vibration. Good for reactive clay soils and tight access sites.' },
        { icon: Home, title: 'Residential Underpinning', description: 'Terraces, cottages, and older homes that have settled. We stabilise the foundations and close up the cracks.' },
        { icon: FileCheck, title: 'Engineered Solutions', description: 'Every underpinning job is designed by a structural engineer. We do not guess. The design is tailored to your soil and building.' },
        { icon: Shovel, title: 'Tight Access Specialists', description: 'We work in tight spaces under old houses. Hand digging where machines cannot reach. We have done it hundreds of times.' },
      ]}
      faqs={[
        { question: 'How do I know if I need underpinning?', answer: 'Cracking walls, sticking doors, sloping floors, and gaps around windows are all signs. A structural engineer can confirm whether the foundations have moved and whether underpinning is the right fix.' },
        { question: 'Can I stay in the house during underpinning?', answer: 'Usually yes. We work in sections so the building is supported at all times. There will be noise and mess, but most people stay put.' },
        { question: 'How long does underpinning take?', answer: 'A typical house takes two to four weeks depending on how many pits we need to dig. We will give you a programme with your quote so you know what to expect.' },
        { question: 'Does underpinning fix the cracks?', answer: 'Underpinning stops the movement. Once the building is stable, we can repair the cracks. Some minor cracks close up on their own once the foundation is solid.' },
      ]}
    />
  );
};

export default UnderpinningPage;
