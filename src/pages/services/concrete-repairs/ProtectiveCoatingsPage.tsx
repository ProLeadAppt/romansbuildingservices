import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Droplets, Sun, SprayCan, ShieldCheck, Building } from 'lucide-react';

const ProtectiveCoatingsPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'protective-coatings');

  return (
    <ServicePageTemplate
      title="Protective Stone Coatings"
      metaTitle="Protective Stone Coatings Sydney | Romans Building Services"
      metaDescription="Protective coatings for stone, brick, and concrete across Sydney. Anti-graffiti, water repellent, and UV protection."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Protective Stone Coatings', href: '' },
      ]}
      intro={[
        "A good protective coating stops water, salt, UV, and pollution from damaging your stone, brick, or concrete. It is cheaper to protect a surface than to repair it later. We apply breathable coatings that keep moisture out but let the substrate dry.",
        "We use silane, siloxane, anti-carbonation, and anti-graffiti coatings depending on the material and the exposure. Every product we use is proven in the Australian climate. No generic sealers from the hardware store.",
        "Whether it is a heritage sandstone facade, a concrete carpark, or a rendered wall, we will recommend the right coating for the job. Call Minas and we will come take a look."
      ]}
      features={[
        { icon: Droplets, title: 'Water Repellent Coatings', description: 'Silane and siloxane impregnations that repel water while letting the stone or concrete breathe. Ideal for sandstone, brick, and concrete.' },
        { icon: Sun, title: 'UV & Weather Protection', description: 'Anti-carbonation and UV-stable coatings that protect concrete from the Sydney sun and salt air.' },
        { icon: SprayCan, title: 'Anti-Graffiti Systems', description: 'Sacrificial and permanent anti-graffiti coatings. Graffiti wipes off without damaging the surface underneath.' },
        { icon: ShieldCheck, title: 'Salt & Chemical Resistance', description: 'Coatings that resist salt attack, acid rain, and chemical exposure. Essential for coastal and industrial properties.' },
        { icon: Building, title: 'Heritage Appropriate', description: 'Breathable coatings approved for use on heritage-listed buildings. We work with heritage consultants to get the right product.' },
      ]}
      faqs={[
        { question: 'Do protective coatings change the look of the stone?', answer: 'Most of our coatings are invisible once cured. Some can slightly darken the surface or add a subtle sheen. We always do a test patch first so you can see the result.' },
        { question: 'How often do coatings need to be reapplied?', answer: 'It depends on the product and the exposure. Silane impregnations typically last 10 to 15 years. Anti-graffiti coatings may need reapplication after cleaning. We will tell you the expected lifespan upfront.' },
        { question: 'Can you coat heritage sandstone?', answer: 'Yes. We use breathable silane-based products that are approved for heritage use. They do not trap moisture or alter the appearance of the stone.' },
      ]}
    />
  );
};

export default ProtectiveCoatingsPage;
