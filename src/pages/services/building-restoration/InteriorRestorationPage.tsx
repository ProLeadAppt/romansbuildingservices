import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Flame, Layers, Hammer, Paintbrush, ShieldCheck } from 'lucide-react';

const InteriorRestorationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'interior-restoration');
  return (
    <ServicePageTemplate
      title="Interior Restoration"
      metaTitle="Interior Restoration Sydney | Romans Building Services"
      metaDescription="Interior masonry and stonework restoration. Fireplaces, feature walls, and interior structural repairs across Sydney."
      heroImage="/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Interior Restoration', href: '' },
      ]}
      intro={[
        'Interior masonry and stonework adds character that you cannot replicate with plasterboard. When fireplaces crumble, feature walls crack, or interior stone deteriorates, it deserves a proper restoration.',
        'We restore interior brick walls, sandstone fireplaces, stone archways, and masonry features. We also handle internal structural masonry repairs where load-bearing walls need attention from the inside.',
        'Whether you are restoring a period home or repairing internal masonry in a commercial building, we bring the same attention to detail. Clean work, minimal mess, and a finish that lasts.',
      ]}
      features={[
        { icon: Flame, title: 'Fireplace Restoration', description: 'Sandstone, brick, and marble fireplaces restored. Cracked stone repaired, missing pieces recreated, and joints repointed.' },
        { icon: Layers, title: 'Exposed Layers Walls', description: 'Interior brick walls cleaned, repointed, and sealed. Damaged bricks replaced to match. Ready for living or working spaces.' },
        { icon: Hammer, title: 'Internal Structural Repairs', description: 'Load-bearing walls, arches, and piers repaired from the inside. Crack stitching and reinforcement where needed.' },
        { icon: Paintbrush, title: 'Stone Feature Restoration', description: 'Internal sandstone, limestone, and decorative stone elements cleaned and repaired to bring back the original detail.' },
        { icon: ShieldCheck, title: 'Sealing & Protection', description: 'Interior masonry sealed to prevent dust, moisture absorption, and staining while keeping the natural look.' },
      ]}
      faqs={[
        { question: 'Can you restore a sandstone fireplace?', answer: 'Yes. We repair cracked sandstone, replace missing sections, clean off soot and paint, and repoint the joints. We match the original stone colour and finish.' },
        { question: 'How do you minimise mess during interior work?', answer: 'We use dust sheets, plastic sheeting, and portable extraction where needed. We clean up at the end of each day. Your home or office stays liveable.' },
        { question: 'Can painted brick be restored to exposed brick?', answer: 'It depends on the paint and the brick underneath. We can strip paint from interior brickwork in most cases. We will do a test area first to check the result before committing.' },
      ]}
    />
  );
};
export default InteriorRestorationPage;
