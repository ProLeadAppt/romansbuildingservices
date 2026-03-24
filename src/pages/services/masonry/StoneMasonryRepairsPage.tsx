import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Gem, Hammer, Search, CircleDot } from 'lucide-react';

const StoneMasonryRepairsPage = () => {
  const siblings = getSiblingServices('masonry', 'stone-masonry-repairs');

  return (
    <ServicePageTemplate
      title="Stone Masonry Repairs"
      metaTitle="Stone Masonry Repairs Sydney | Romans Building Services"
      metaDescription="Sandstone, limestone, and natural stone repairs across Sydney. Matching original materials and techniques. 30 years experience."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Stone Masonry Repairs', href: '' },
      ]}
      intro={[
        "Sydney is full of sandstone and natural stone buildings. Over time, stone weathers, cracks, and spalls. We repair and restore it. Sandstone, limestone, marble, granite. We work with all of them.",
        "We cut, shape, and fit replacement stone pieces on site. Where a full replacement is not needed, we use stone repair mortars matched to the original colour and texture. The goal is always to make the repair invisible.",
        "Minas started his career working with stone. It is what he knows best. If your building has stone that needs attention, give him a call."
      ]}
      features={[
        { icon: Gem, title: 'Sandstone Specialists', description: 'Sydney sandstone is our bread and butter. We repair, replace, and restore sandstone facades, sills, lintels, and decorative elements.' },
        { icon: Hammer, title: 'Stone Cutting & Shaping', description: 'We cut and profile replacement stone on site to match existing pieces. Hand-finished where needed for heritage work.' },
        { icon: Search, title: 'Stone Matching', description: 'We source stone from quarries across NSW to match your building. Colour, grain, and texture all need to line up.' },
        { icon: CircleDot, title: 'Repair Mortars', description: 'For smaller damage, we use specialised stone repair mortars. Tinted and textured to blend with the surrounding stone.' },
      ]}
      faqs={[
        { question: 'Can damaged sandstone be repaired or does it need replacing?', answer: 'It depends on the damage. Small chips and surface spalling can be repaired with stone mortar. Larger cracks or deep erosion usually mean the stone needs to be cut out and replaced.' },
        { question: 'Where do you source replacement sandstone?', answer: 'We use quarries across NSW. For heritage projects, we source stone that matches the original as closely as possible in colour, grain, and density.' },
        { question: 'How long do stone repairs last?', answer: 'Done properly, stone repairs last as long as the original stonework. We use materials and techniques that are proven to hold up for decades in Sydney conditions.' },
      ]}
    />
  );
};

export default StoneMasonryRepairsPage;
