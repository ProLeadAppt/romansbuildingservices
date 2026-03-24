import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building2, ArrowUpFromLine, Columns3, ShieldCheck } from 'lucide-react';

const StructuralBrickworkPage = () => {
  const siblings = getSiblingServices('masonry', 'structural-brickwork');

  return (
    <ServicePageTemplate
      title="Structural Brickwork"
      metaTitle="Structural Brickwork Sydney | Romans Building Services"
      metaDescription="Load-bearing brickwork construction and repairs. Structural brick walls, piers, and arches across Greater Sydney."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Structural Brickwork', href: '' },
      ]}
      intro={[
        "Structural brickwork carries the weight of the building. When it fails, the building moves. We build and repair load-bearing brick walls, piers, columns, and arches across Sydney.",
        "We work from engineers' drawings when the job calls for it. Crack stitching, pier rebuilds, lintel replacements, and full wall reconstructions. Every structural job gets done to spec.",
        "Romans holds a full builder's licence for structural work. We have been doing this for three decades. We know how to get the structure right."
      ]}
      features={[
        { icon: Building2, title: 'Load-Bearing Walls', description: 'Construction and repair of load-bearing brick walls. New builds, extensions, and rebuilds of failed sections.' },
        { icon: Columns3, title: 'Piers & Columns', description: 'Layers piers and columns that support verandahs, balconies, and upper floors. Rebuilds and reinforcement.' },
        { icon: ArrowUpFromLine, title: 'Arches & Lintels', description: 'Layers arch construction and repair. Steel and concrete lintel replacements above openings.' },
        { icon: ShieldCheck, title: 'Engineered Work', description: 'We work with structural engineers on complex jobs. All work meets BCA requirements and Australian Standards.' },
      ]}
      faqs={[
        { question: 'How do I know if my brickwork is structural?', answer: 'If removing the wall would affect the building above it, it is structural. Double-brick walls, walls that run from foundation to roof, and walls supporting beams or floors are usually load-bearing. We can assess this for you on site.' },
        { question: 'Can cracked structural brickwork be repaired?', answer: 'Yes, in most cases. Crack stitching with stainless steel rods is a common repair. For more serious damage, we may need to rebuild a section. It depends on what is causing the cracking.' },
        { question: 'Do I need an engineer for structural brickwork repairs?', answer: 'For significant structural work, yes. We work with trusted structural engineers and can arrange this as part of the job. Council may also require engineering certification.' },
      ]}
    />
  );
};

export default StructuralBrickworkPage;
