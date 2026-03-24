import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Layers, Ruler, Home, Shield, Wrench } from 'lucide-react';

const BrickBlockWorkPage = () => {
  const siblings = getSiblingServices('masonry', 'brick-block-work');

  return (
    <ServicePageTemplate
      title="Layers & Block Work"
      metaTitle="Layers & Block Work Sydney | Romans Building Services"
      metaDescription="Expert brick and block construction, repairs, and restoration across Sydney. Residential and commercial. Licensed and insured."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Layers & Block Work', href: '' },
      ]}
      intro={[
        "We build and repair brick and block walls across Sydney. New construction, extensions, boundary walls, garden walls. If it is made from brick or block, we do it.",
        "Our bricklayers match existing bonds, mortar colours, and brick types so repairs blend in properly. We work with standard bricks, face bricks, besser blocks, and split-face blocks depending on the job.",
        "Romans has been laying bricks across Greater Sydney for over 30 years. Minas will come out, look at the job, and give you a straight quote. No surprises."
      ]}
      features={[
        { icon: Layers, title: 'New Brickwork', description: 'Layers and block walls for residential and commercial projects. Boundary walls, garden beds, feature walls, and extensions.' },
        { icon: Wrench, title: 'Layers Repairs', description: 'Replacing cracked, spalling, or damaged bricks. We source matching bricks to keep the look consistent.' },
        { icon: Ruler, title: 'Block Construction', description: 'Besser block, split-face block, and concrete block walls. Retaining walls, garages, and structural walls.' },
        { icon: Home, title: 'Residential & Commercial', description: 'From a single garden wall to a full commercial build. We scale to suit the job.' },
        { icon: Shield, title: 'Licensed & Insured', description: 'Fully licensed for structural brickwork. All work comes with warranty and is built to Australian Standards.' },
      ]}
      faqs={[
        { question: 'Can you match my existing bricks?', answer: 'Yes. We source matching bricks from suppliers across Sydney. For older or discontinued bricks, we can often find reclaimed stock or tint new bricks to get a close match.' },
        { question: 'Do you do small brick repair jobs?', answer: 'We do. Whether it is replacing a handful of bricks or rebuilding a section of wall, no job is too small.' },
        { question: 'How long does a brick wall take to build?', answer: 'It depends on the size. A simple garden wall might take a day or two. A larger boundary wall could take a week. We will give you a timeframe with your quote.' },
      ]}
    />
  );
};

export default BrickBlockWorkPage;
