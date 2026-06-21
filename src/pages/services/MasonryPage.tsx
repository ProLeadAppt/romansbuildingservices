import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Hammer, Layers, Shield, Home, Wrench, Building, BrickWall, Trees, MoveHorizontal, PaintBucket } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const MasonryPage = () => {
  const childServices = getSubServiceRoutes('masonry');

  return (
    <ServicePageTemplate
      title="Stone & Masonry"
      metaTitle="Sydney Masonry Services | Romans"
      metaDescription="Brick, stone, block and repointing work across Sydney for homes, strata and commercial sites by Minas Romanakis. Repairs, rebuilding and new masonry."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Services', href: '/services' }}
      siblingServices={[
        { title: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { title: 'Structural Repairs', href: '/services/structural-repairs' },
        { title: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { title: 'Remedial Building', href: '/services/remedial-building' },
      ]}
      intro={[
        'Minas has been laying stone and brick across Sydney for over 30 years. From front fences and garden walls to commercial facades, this is the page that should catch the exact masonry searcher.',
        'If the job is brick, block or stone, we focus on the cause first: movement, water, salt, age or bad previous repairs. That is how you get a repair that lasts instead of a quick cosmetic patch.',
        'We handle retaining walls, chimneys, sandstone, tuckpointing, repointing and brick rebuilds. Where heritage or older materials are involved, we match the original mortar, stone and finish instead of forcing modern shortcuts onto an old wall.'
      ]}
      features={[
        { icon: Hammer, title: 'Brick & Block Work', description: 'New brickwork, blockwork, and brick repairs for residential and commercial buildings. Clean lines, correct bonding and a proper finish.' },
        { icon: Layers, title: 'Stone Masonry', description: 'Sandstone, bluestone and natural stone work. Feature walls, cladding and stone restoration using traditional techniques.' },
        { icon: Home, title: 'Retaining Walls', description: 'Engineered retaining walls in stone, brick or block. Built to handle load, drainage and long-term movement.' },
        { icon: Wrench, title: 'Repointing & Repairs', description: 'Mortar joint replacement and brick repairs. We match existing mortar colour and profile so the repair blends in.' },
        { icon: Building, title: 'Chimneys & Fireplaces', description: 'Chimney rebuilds, repairs and new fireplace surrounds. Proper flashing and weatherproofing included.' },
        { icon: Shield, title: 'Heritage Masonry', description: 'Period-accurate stonework and brickwork for heritage-listed buildings. Traditional lime mortars and matched materials.' }
      ]}
      whatWeUse={[
        { title: 'Lime mortar', detail: 'For older brick and sandstone, lime keeps the wall breathable and prevents the hard-edge damage that cement can cause.' },
        { title: 'Matched reclaimed brick', detail: 'When the original bricks are soft or no longer made, reclaimed handmade brick keeps the facade looking right.' },
        { title: 'Matched sandstone', detail: 'Hawkesbury and Pyrmont stone replacements are selected to blend grain, colour and weathering with the original wall.' },
        { title: 'Stainless fixings and ties', detail: 'Where reinforcement is needed, we use corrosion-resistant fixings so the repair does not fail from the inside out.' },
      ]}
      processSteps={[
        { step: 'Inspect the wall and find the cause', detail: 'We look at movement, mortar condition, water entry, salt damage and any previous patch repairs before we quote.' },
        { step: 'Match materials before work starts', detail: 'We choose the right brick, stone and mortar mix so the finished job belongs with the existing wall.' },
        { step: 'Set out the repair and protect the site', detail: 'Access, protection and staging are handled first so the work can be done cleanly and safely.' },
        { step: 'Repair, repoint or rebuild', detail: 'The damaged section is rebuilt properly — not skimmed over — with the correct bond and mortar profile.' },
        { step: 'Clean down and hand over', detail: 'We clean the finished work, check the lines and leave you with a repair that looks like it was always meant to be there.' },
      ]}
      faqs={[
        { question: 'What types of stone do you work with?', answer: 'We work with all types. Sandstone (mostly Sydney Hawkesbury and Pyrmont stone), bluestone, limestone, granite and natural fieldstone. Minas will recommend the best stone for your project based on the application, location and budget.' },
        { question: 'Can you match existing brickwork on older buildings?', answer: 'Yes. We source matching reclaimed handmade bricks and mix custom mortar colours to blend repairs with the original work. On heritage buildings, we use traditional lime-based mortars to stay true to the original construction.' },
        { question: 'How long does a masonry retaining wall last?', answer: 'A properly built and engineered masonry retaining wall — with correct drainage, sized footings and appropriate reinforcement — will last 50 to 80 years. Walls without proper drainage behind them often fail in 10 to 20 years.' },
        { question: 'Do you handle council approvals for masonry work?', answer: 'For retaining walls over 600mm, boundary walls, or any work changing the appearance of a heritage property, yes. We prepare the documentation and work with your engineer or recommend one we trust.' },
        { question: 'What is the difference between lime mortar and cement mortar?', answer: 'Lime mortar is soft, breathable and flexible — it was used on all pre-1930s brickwork. Cement mortar is hard, rigid and impermeable — it can trap moisture in old brick and cause decay. On heritage work, lime mortar is the correct material.' },
        { question: 'How much does masonry work cost?', answer: 'Depends heavily on scope. Repointing a front terrace facade typically $8,000–$15,000. New sandstone retaining wall $2,500–$4,000 per sqm. Chimney repoint and reflash $3,500–$8,500. Every job is quoted after inspection.' },
        { question: 'Do you work on heritage-listed properties?', answer: 'Regularly. We work to NSW Heritage Council and local council heritage requirements, use traditional materials and prepare the documentation needed for approval.' }
      ]}
      galleryImages={[
        '/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp',
        '/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp',
        '/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp',
        '/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp'
      ]}
      childServices={childServices}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stone & Masonry', href: '' },
      ]}
    />
  );
};

export default MasonryPage;
