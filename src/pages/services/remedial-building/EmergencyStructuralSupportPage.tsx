import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Columns3, ShieldAlert, Wrench, HardHat, FileCheck } from 'lucide-react';

const EmergencyStructuralSupportPage = () => {
  const siblings = getSiblingServices('remedial-building', 'emergency-structural');

  return (
    <ServicePageTemplate
      title="Emergency Structural Support"
      metaTitle="Emergency Structural Support Sydney | Romans Building Services"
      metaDescription="Emergency structural support and shoring across Sydney. Temporary and permanent stabilisation solutions."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Emergency Structural Support', href: '' },
      ]}
      intro={[
        "When a structure is at risk of collapse, you need temporary support in place fast. We install steel props, acrow props, timber shoring, and bracing to stabilise buildings, walls, and slabs until permanent repairs can be made.",
        "We work on partially collapsed walls, failed beams, undermined foundations, and fire-damaged structures. The priority is stopping further movement and making the site safe for workers and occupants.",
        "Minas has decades of experience propping and shoring damaged structures. We carry the gear on our trucks and can get set up quickly. Call us and we will sort it out."
      ]}
      features={[
        { icon: ShieldAlert, title: 'Emergency Shoring', description: 'Steel and timber shoring installed to support walls, slabs, and beams at risk of collapse. Fast deployment.' },
        { icon: Columns3, title: 'Temporary Propping', description: 'Acrow props and steel beams to carry loads while permanent repairs are designed and carried out.' },
        { icon: Wrench, title: 'Wall Bracing', description: 'External and internal bracing for leaning or bowing walls. Stopping movement until the wall can be rebuilt or reinforced.' },
        { icon: HardHat, title: 'Safe Access', description: 'We set up safe access for engineers, assessors, and other trades to inspect the damaged structure.' },
        { icon: FileCheck, title: 'Engineer Coordination', description: 'We work with structural engineers to design the temporary support. Everything is documented and load-rated.' },
      ]}
      faqs={[
        { question: 'How long can temporary props stay in place?', answer: 'As long as needed. Temporary propping can stay in for weeks or months while permanent repairs are designed and approved. We monitor the props and adjust if necessary.' },
        { question: 'Do you remove the props after permanent repairs?', answer: 'Yes. Once the permanent repair is complete and the engineer signs off, we remove the temporary support. It is all part of the service.' },
        { question: 'Can you prop a partially collapsed wall?', answer: 'Yes. We stabilise what is left standing and shore it to prevent further collapse. The engineer then designs the permanent repair based on what can be saved.' },
      ]}
    />
  );
};

export default EmergencyStructuralSupportPage;
