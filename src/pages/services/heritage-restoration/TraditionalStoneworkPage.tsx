import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Hammer, Scaling, HandMetal, Compass } from 'lucide-react';

const TraditionalStoneworkPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'traditional-stonework');

  return (
    <ServicePageTemplate
      title="Traditional Stonework Methods"
      metaTitle="Traditional Stonework Methods Sydney | Romans Building Services"
      metaDescription="Hand-cut stone, lime mortar, and traditional masonry techniques for heritage restoration across Sydney."
      heroImage="/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Traditional Stonework Methods', href: '' },
      ]}
      intro={[
        "Some jobs need to be done the old way. Heritage restoration often calls for the same hand tools and techniques that were used when the building went up. Power tools and modern materials will not always cut it.",
        "We use hand chisels, banker masons' tools, and hot lime mortar when the job requires it. Stone is cut and shaped by hand to replicate original profiles. Mouldings, corbels, quoins, and arches done the traditional way.",
        "Minas learned traditional stonemasonry early in his career. These are skills that take years to develop, and they are rare in the industry now. When a building needs this level of craft, we can deliver it."
      ]}
      features={[
        { icon: Hammer, title: 'Hand-Cut Stone', description: 'Stone cut and shaped using hand chisels and traditional tools. Matching original profiles and finishes that machines cannot replicate.' },
        { icon: Scaling, title: 'Hot Lime Mortar', description: 'Mixed and applied using traditional methods. Hot lime mortar is stronger and more durable than cold lime for many heritage applications.' },
        { icon: HandMetal, title: 'Traditional Finishes', description: 'Picked face, tooled, rubbed, and bush-hammered finishes applied by hand. Each finish requires a different technique and tool set.' },
        { icon: Compass, title: 'Profile Replication', description: 'We template existing mouldings and carve new pieces to match. Cornices, string courses, sills, and decorative elements.' },
      ]}
      faqs={[
        { question: 'Why use traditional methods instead of modern ones?', answer: 'Heritage buildings were designed to work as a system. Modern materials behave differently, trapping moisture or creating stress points. Traditional methods keep the building working the way it was designed to.' },
        { question: 'What is hot lime mortar?', answer: 'It is mortar made by mixing quicklime with sand and water on site. It sets harder than cold lime putty mortar and was the standard method for centuries. We use it where the original building would have used it.' },
        { question: 'Can you replicate carved stone details?', answer: 'Yes. We template the existing detail, then carve a replacement from matching stone. For repeated elements like balusters or finials, we can produce multiple matching pieces.' },
      ]}
    />
  );
};

export default TraditionalStoneworkPage;
