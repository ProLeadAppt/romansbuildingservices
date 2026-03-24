import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, Hammer, Droplets, Pickaxe, ShieldCheck } from 'lucide-react';

const FoundationStonePage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'foundation-stone');

  return (
    <ServicePageTemplate
      title="Foundation Stone Repairs"
      metaTitle="Foundation Stone Repairs Sydney | Romans Building Services"
      metaDescription="Sandstone and brick foundation repairs across Sydney. Restoring original foundation stonework."
      heroImage="/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Foundation Stone Repairs', href: '' },
      ]}
      intro={[
        "A lot of older Sydney buildings sit on sandstone or brick foundations. Over time, the stone erodes, mortar joints fail, and the foundation loses its ability to carry the load. We repair and rebuild these foundations using matching materials.",
        "We replace eroded sandstone blocks, repoint failed mortar joints with lime mortar, and rebuild sections of brick and stone foundation walls. For heritage buildings, we use traditional methods and period-correct materials.",
        "If your old stone foundations are crumbling, do not ignore it. The building above is only as good as what is underneath. Call Minas and we will come take a look."
      ]}
      features={[
        { icon: Landmark, title: 'Sandstone Foundation Repair', description: 'Replacing eroded and crumbling sandstone blocks in foundations. We source matching sandstone from Sydney quarries.' },
        { icon: Hammer, title: 'Layers Foundation Rebuild', description: 'Rebuilding failed sections of brick foundation walls with matching bricks and lime mortar.' },
        { icon: Droplets, title: 'Rising Damp Treatment', description: 'Old stone foundations often have rising damp issues. We install damp courses and improve drainage to keep the stone dry.' },
        { icon: Pickaxe, title: 'Lime Mortar Repointing', description: 'We repoint stone and brick foundations with lime mortar, not cement. Cement traps moisture and damages old stone.' },
        { icon: ShieldCheck, title: 'Heritage Compliance', description: 'We work within heritage guidelines. Matching materials, traditional methods, and proper documentation for council.' },
      ]}
      faqs={[
        { question: 'Why use lime mortar instead of cement?', answer: 'Old stone and brick foundations were built with lime mortar. Cement is too hard and traps moisture, which damages the stone. Lime mortar is softer, lets the wall breathe, and is what the building was designed for.' },
        { question: 'Can eroded sandstone be replaced?', answer: 'Yes. We cut out the damaged stone and replace it with new sandstone blocks cut to size. We match the stone type and finish to keep it consistent.' },
        { question: 'How do you access foundations for repair?', answer: 'We excavate alongside the foundation wall to expose it. For internal foundations, we work from inside the building. We shore everything up properly before we start any work.' },
      ]}
    />
  );
};

export default FoundationStonePage;
