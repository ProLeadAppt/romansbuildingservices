import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Layers, Hammer, Building, ShieldCheck, HardHat } from 'lucide-react';

const SpallingRepairPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'spalling-repair');

  return (
    <ServicePageTemplate
      title="Spalling Concrete Repair"
      metaTitle="Spalling Concrete Repair Sydney | Romans Building Services"
      metaDescription="Spalling and delaminating concrete repairs across Sydney. Balconies, facades, carparks, and structural elements."
      heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Spalling Concrete Repair', href: '' },
      ]}
      intro={[
        "Spalling is when chunks of concrete break away from the surface. It looks rough, it is a safety hazard, and it means something underneath is going wrong. Water ingress, corroding steel, or freeze-thaw cycles are usually to blame.",
        "We remove all the loose and delaminated concrete, treat the underlying cause, and rebuild the surface with proper repair materials. We work on balconies, soffits, facades, columns, carparks, and retaining walls.",
        "If concrete is flaking off your building, do not leave it. It only gets worse. Call Minas and we will come have a look."
      ]}
      features={[
        { icon: Layers, title: 'Delamination Repair', description: 'We sound-test the concrete to find hidden delamination, then cut out all affected areas. No point patching over bad concrete.' },
        { icon: Hammer, title: 'Balcony Repairs', description: 'Spalling balconies are one of our most common jobs. We repair the concrete and waterproof the surface to stop it happening again.' },
        { icon: Building, title: 'Facade Spalling', description: 'High-rise and low-rise facade repairs. We set up scaffolding or rope access depending on the building.' },
        { icon: ShieldCheck, title: 'Carpark Repairs', description: 'Carpark slabs cop a hiding from water and traffic. We repair spalling and apply traffic-grade coatings.' },
        { icon: HardHat, title: 'Safety First', description: 'Falling concrete is dangerous. We secure the area, remove loose material, and make the site safe before starting repairs.' },
      ]}
      faqs={[
        { question: 'What causes concrete to spall?', answer: 'Usually it is water getting in and corroding the steel reinforcement. The rust expands and pushes the concrete off. Poor drainage, lack of waterproofing, and age are the main culprits.' },
        { question: 'Is spalling concrete dangerous?', answer: 'It can be. Chunks of concrete falling from height are a serious risk. If you have spalling on a balcony or facade, get it sorted before someone gets hurt.' },
        { question: 'How long do spalling repairs last?', answer: 'Done properly with good materials and waterproofing, you are looking at 25 years or more. We use structural repair mortars and protective coatings to make sure it lasts.' },
      ]}
    />
  );
};

export default SpallingRepairPage;
