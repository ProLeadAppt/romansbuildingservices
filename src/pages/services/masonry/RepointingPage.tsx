import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Paintbrush, Eye, Clock, ShieldCheck } from 'lucide-react';

const RepointingPage = () => {
  const siblings = getSiblingServices('masonry', 'repointing');

  return (
    <ServicePageTemplate
      title="Repointing & Layers Pointing"
      metaTitle="Repointing & Layers Pointing Sydney | Romans Building Services"
      metaDescription="Professional repointing and brick pointing services across Sydney. Matching mortar colours for heritage and modern buildings."
      heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Repointing & Layers Pointing', href: '' },
      ]}
      intro={[
        "Mortar joints wear out over time. Water gets in, bricks start to move, and the wall weakens. Repointing replaces the old mortar with new, and it is one of the most effective ways to extend the life of a brick wall.",
        "We rake out the old joints by hand to avoid damaging the bricks. Then we pack in new mortar, matched to the original colour and profile. Flush, raked, struck, or tuck pointing. We do it all.",
        "We have repointed everything from small garden walls to large heritage buildings across Sydney. Minas knows mortar. He will pick the right mix for your wall."
      ]}
      features={[
        { icon: Paintbrush, title: 'Colour Matching', description: 'We mix mortar on site to match existing joints. For heritage work, we use lime-based mortars to stay true to the original.' },
        { icon: Eye, title: 'Joint Profiles', description: 'Flush, raked, struck, weathered, or tuck pointed. We replicate whatever profile your building needs.' },
        { icon: Clock, title: 'Long-Lasting Results', description: 'Properly done repointing lasts decades. We use quality materials and proven techniques that stand up to Sydney weather.' },
        { icon: ShieldCheck, title: 'Heritage Approved', description: 'We work on heritage-listed buildings regularly. Our lime mortar work meets council heritage requirements.' },
      ]}
      faqs={[
        { question: 'How do I know if my wall needs repointing?', answer: 'Look for crumbling or missing mortar between bricks. If you can poke a key into the joints and mortar falls out, it is time. Water stains on interior walls can also be a sign.' },
        { question: 'What is the difference between repointing and tuck pointing?', answer: 'Repointing is the general term for replacing mortar joints. Tuck pointing is a specific decorative style where a thin line of contrasting mortar is applied to create the appearance of fine joints. We do both.' },
        { question: 'Do you use cement or lime mortar?', answer: 'It depends on the building. Modern buildings get cement-based mortar. Heritage and older buildings need lime mortar, which is softer and lets the wall breathe. Using the wrong mortar can damage old bricks.' },
      ]}
    />
  );
};

export default RepointingPage;
