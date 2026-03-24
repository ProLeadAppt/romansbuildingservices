import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, Wrench, Home, Ruler, CheckCircle } from 'lucide-react';

const PierBeamPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'pier-beam');

  return (
    <ServicePageTemplate
      title="Pier & Beam Foundation Work"
      metaTitle="Pier & Beam Foundation Work Sydney | Romans Building Services"
      metaDescription="Pier and beam foundation construction and repairs across Sydney. New installations and restumping."
      heroImage="/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Pier & Beam Foundation Work', href: '' },
      ]}
      intro={[
        "Pier and beam foundations support a lot of older Sydney homes. Timber stumps rot, concrete piers crack, and steel beams corrode. When the supports fail, the floors bounce, slope, or sag. We fix all of it.",
        "We replace rotten timber stumps with concrete or steel piers. We repair and replace damaged bearers and joists. For new work, we install engineered pier and beam systems designed for your site conditions.",
        "Whether you need a full restump or just a few piers replaced, we will get the building level and solid again. Minas has been doing this work for decades."
      ]}
      features={[
        { icon: Landmark, title: 'Restumping', description: 'Replacing old timber stumps with concrete or galvanised steel piers. We level the building as we go.' },
        { icon: Wrench, title: 'Bearer & Joist Repair', description: 'Replacing rotten or damaged bearers and joists. We use treated timber or steel depending on the span and load.' },
        { icon: Home, title: 'Subfloor Levelling', description: 'Packing, shimming, and adjusting piers to get your floors level again. We use laser levels for accuracy.' },
        { icon: Ruler, title: 'New Pier Installation', description: 'Bored piers, screw piles, and pad footings for extensions, decks, and new structures.' },
        { icon: CheckCircle, title: 'Building Inspections', description: 'We inspect the full subfloor area and report on the condition of piers, bearers, joists, and bracing.' },
      ]}
      faqs={[
        { question: 'How do I know if my stumps need replacing?', answer: 'Bouncy floors, sloping floors, gaps under skirting boards, and doors that stick are all signs. If you can get under the house, look for rotting timber, cracked concrete piers, or stumps that have sunk.' },
        { question: 'What type of pier is best?', answer: 'Concrete piers are the most common replacement. Steel adjustable stumps are good where future levelling might be needed. We will recommend the best option for your house and soil conditions.' },
        { question: 'How long does restumping take?', answer: 'A typical three-bedroom house takes about a week. Larger homes or difficult access can take longer. We will give you a clear timeframe with your quote.' },
        { question: 'Will restumping crack my walls?', answer: 'We level the building gradually to minimise stress on the structure. Some minor cracking can occur as the building adjusts, but we take every precaution to prevent it.' },
      ]}
    />
  );
};

export default PierBeamPage;
