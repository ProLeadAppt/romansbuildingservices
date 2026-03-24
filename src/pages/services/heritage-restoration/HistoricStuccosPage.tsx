import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Paintbrush, Layers, History, Droplets } from 'lucide-react';

const HistoricStuccosPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'historic-stuccos-renders');

  return (
    <ServicePageTemplate
      title="Historic Stuccos & Renders"
      metaTitle="Historic Stuccos & Renders Sydney | Romans Building Services"
      metaDescription="Lime render, historic stucco, and period-correct rendering for heritage buildings across Sydney."
      heroImage="/gallery/thumbs/romansstone_1574278523_2181528827132774103_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Historic Stuccos & Renders', href: '' },
      ]}
      intro={[
        "Many heritage buildings in Sydney have lime render or stucco finishes. These coatings protect the masonry underneath and give the building its character. When they crack or fall away, the building loses both protection and appearance.",
        "We repair and replace historic renders using lime-based mixes that match the original. Cement render is too hard for old buildings. It cracks, traps moisture, and pulls away from the wall. Lime render flexes with the building and lets moisture escape.",
        "We replicate original stucco profiles, mouldings, and textures. Whether your building has a plain lime wash or elaborate decorative stucco, we can restore it to how it looked when it was new."
      ]}
      features={[
        { icon: Layers, title: 'Lime Render Systems', description: 'Multi-coat lime render applied in the traditional way. Scratch coat, float coat, and finish coat. Each layer needs to cure before the next goes on.' },
        { icon: Paintbrush, title: 'Stucco Mouldings', description: 'Running cornices, brackets, and decorative panels repaired or replicated in lime stucco. Matching existing profiles exactly.' },
        { icon: History, title: 'Period Finishes', description: 'Trowelled, floated, roughcast, or pebbledash finishes. We match the original texture and apply limewash or mineral paint to finish.' },
        { icon: Droplets, title: 'Moisture Management', description: 'Lime render breathes. It lets moisture pass through without trapping it in the wall. This is critical for heritage masonry that was never designed for cement.' },
      ]}
      faqs={[
        { question: 'Why is the cement render on my old building cracking?', answer: 'Cement render is rigid. Old buildings move slightly with temperature and moisture changes. The cement cracks, water gets behind it, and it starts to delaminate. Lime render is flexible enough to move with the building.' },
        { question: 'How long does lime render take to apply?', answer: 'Longer than cement. Each coat needs time to cure before the next goes on. A typical three-coat system takes about two to three weeks, depending on weather. It cannot be rushed without compromising the result.' },
        { question: 'Can you match the existing render colour?', answer: 'Yes. We tint the final coat or apply limewash to match the existing colour. We make up test panels on site for approval before rendering the full area.' },
        { question: 'What is the difference between render and stucco?', answer: 'Render is a flat protective coating. Stucco refers to decorative plasterwork, mouldings, and profiles applied to the outside of a building. We do both, and many heritage buildings have elements of each.' },
      ]}
    />
  );
};

export default HistoricStuccosPage;
