import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Gem, Search, Hammer, Sparkles } from 'lucide-react';

const HeritageStoneRestorationPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'heritage-stone');

  return (
    <ServicePageTemplate
      title="Heritage Stone Restoration"
      metaTitle="Heritage Stone Restoration Sydney | Romans Building Services"
      metaDescription="Sandstone and natural stone restoration for heritage buildings. Matching original finishes and techniques across Sydney."
      heroImage="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Heritage Stone Restoration', href: '' },
      ]}
      intro={[
        "Sydney's heritage buildings are largely built from sandstone. After 100 or 150 years, that stone needs care. We restore heritage sandstone and natural stone to its original condition without losing the character of the building.",
        "We clean, repair, and replace heritage stone using methods that match the original work. Hand-tooled finishes, matched stone from NSW quarries, and lime-based mortars throughout. No shortcuts.",
        "Romans has restored stone on some of Sydney's best-known heritage buildings. Minas trained as a stonemason and this is the work he is most proud of."
      ]}
      features={[
        { icon: Gem, title: 'Sandstone Restoration', description: 'Cleaning, repairing, and replacing weathered Sydney sandstone. Facades, columns, sills, copings, and decorative mouldings.' },
        { icon: Search, title: 'Stone Matching', description: 'We source replacement stone that matches the original in colour, grain, and density. Getting this right is everything.' },
        { icon: Hammer, title: 'Hand-Tooled Finishes', description: 'Picked, tooled, rubbed, or rock-faced finishes replicated by hand to match the original stonework.' },
        { icon: Sparkles, title: 'Gentle Cleaning', description: 'Low-pressure steam and poultice cleaning that removes grime without damaging the stone surface.' },
      ]}
      faqs={[
        { question: 'How do you clean heritage sandstone?', answer: 'We use low-pressure steam cleaning and poultice methods. High-pressure washing damages sandstone and is not permitted on heritage buildings. We choose the method based on the type of staining.' },
        { question: 'Can eroded sandstone be built back up?', answer: 'For shallow erosion, we use stone repair mortars matched to the original stone colour. For deeper damage, we cut out the affected stone and splice in new pieces. It depends on the extent of the wear.' },
        { question: 'How often does heritage stonework need maintenance?', answer: 'A well-maintained heritage stone building should be inspected every five to ten years. Catching small issues early stops them becoming expensive problems. We offer inspection and maintenance plans.' },
      ]}
    />
  );
};

export default HeritageStoneRestorationPage;
