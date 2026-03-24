import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Siren, Clock, ShieldAlert, Wrench, Phone } from 'lucide-react';

const EmergencyRepairsPage = () => {
  const siblings = getSiblingServices('remedial-building', 'emergency-repairs');

  return (
    <ServicePageTemplate
      title="Emergency Building Repairs"
      metaTitle="Emergency Building Repairs Sydney | Romans Building Services"
      metaDescription="Urgent building repairs across Sydney. Storm damage, structural failures, and emergency stabilisation."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Emergency Building Repairs', href: '' },
      ]}
      intro={[
        "When a wall collapses, a facade starts falling, or storm damage hits your building, you need someone on site fast. We respond to emergency building situations across Sydney and get the site safe.",
        "We handle storm damage, structural failures, vehicle impact damage, fire-damaged structures, and any situation where a building needs urgent attention. We make it safe first, then plan the permanent repair.",
        "Call Minas directly. We carry emergency gear and can mobilise quickly. We have dealt with hundreds of urgent situations over the years and we know how to handle them."
      ]}
      features={[
        { icon: Clock, title: 'Rapid Response', description: 'We respond to emergencies across Sydney as quickly as possible. Call Minas directly on 0414 922 276.' },
        { icon: Siren, title: 'Make Safe Works', description: 'Securing the site, removing hazards, and preventing further damage. Temporary propping, boarding, and barriers.' },
        { icon: ShieldAlert, title: 'Storm Damage', description: 'Fallen trees, damaged roofs, collapsed walls, and water ingress. We stabilise the building and prevent further damage.' },
        { icon: Wrench, title: 'Structural Failures', description: 'Collapsed walls, failed lintels, cracked beams, and foundation failures. Emergency shoring and temporary support.' },
        { icon: Phone, title: 'Insurance Liaison', description: 'We provide detailed reports, photos, and quotes for insurance claims. We deal with insurers regularly and know what they need.' },
      ]}
      faqs={[
        { question: 'How fast can you respond to an emergency?', answer: 'We aim to be on site as soon as possible. For genuine structural emergencies, call Minas directly. If it is life-threatening, call 000 first.' },
        { question: 'Do you do the permanent repair as well?', answer: 'Yes. We do the make-safe work first, then quote and carry out the permanent repair. One contractor from start to finish.' },
        { question: 'Will my insurance cover emergency repairs?', answer: 'Most building insurance policies cover storm damage and structural failures. We provide the documentation insurers need. Check your policy or talk to your broker.' },
      ]}
    />
  );
};

export default EmergencyRepairsPage;
