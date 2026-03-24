import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, ScrollText, Hammer, ShieldCheck } from 'lucide-react';

const HeritageMasonryPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'heritage-masonry');

  return (
    <ServicePageTemplate
      title="Heritage Masonry Restoration"
      metaTitle="Heritage Masonry Restoration Sydney | Romans Building Services"
      metaDescription="Specialist heritage masonry restoration for listed buildings across Sydney. Period-correct methods and materials."
      heroImage="/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Heritage Masonry Restoration', href: '' },
      ]}
      intro={[
        "Heritage masonry needs a different approach. You cannot just patch it with modern cement and call it done. The wrong materials will trap moisture and cause more damage than what you started with.",
        "We use lime mortars, period-correct bricks, and traditional techniques that let the building breathe. Every repair is done to match the original workmanship in colour, profile, and texture.",
        "We have restored masonry on heritage-listed buildings across Sydney for over 30 years. We work with heritage architects and councils regularly. Minas understands what heritage officers want to see."
      ]}
      features={[
        { icon: Landmark, title: 'Listed Building Experience', description: 'We have worked on heritage-listed properties across Sydney. Churches, terraces, public buildings, and private homes.' },
        { icon: ScrollText, title: 'Heritage Reports', description: 'We provide detailed methodology reports for council submissions. Before photos, material specifications, and repair techniques documented.' },
        { icon: Hammer, title: 'Traditional Methods', description: 'Hot lime mortar, hand-cut stone, and period pointing profiles. We do the work the way it was originally done.' },
        { icon: ShieldCheck, title: 'Council Compliant', description: 'Our work meets heritage council requirements. We have a strong track record with Sydney, Woollahra, and Inner West councils.' },
      ]}
      faqs={[
        { question: 'Do you work on heritage-listed buildings?', answer: 'Yes. It is a large part of what we do. We are experienced with both state and local heritage listings and understand the approval process.' },
        { question: 'Why can you not use cement mortar on heritage buildings?', answer: 'Cement mortar is harder than old bricks and stone. It traps moisture inside the masonry, which causes salt damage and spalling. Lime mortar is softer, lets moisture escape, and moves with the building.' },
        { question: 'Can you help with the heritage council application?', answer: 'We can prepare the methodology and specification documents that councils need. We work alongside heritage architects when required and know what each council expects.' },
      ]}
    />
  );
};

export default HeritageMasonryPage;
