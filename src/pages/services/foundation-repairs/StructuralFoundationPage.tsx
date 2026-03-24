import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Wrench, Search, Columns3, ShieldCheck, FileCheck } from 'lucide-react';

const StructuralFoundationPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'structural-foundation');

  return (
    <ServicePageTemplate
      title="Structural Foundation Repairs"
      metaTitle="Structural Foundation Repairs Sydney | Romans Building Services"
      metaDescription="Structural foundation repairs across Sydney. Crack repair, reinforcement, and stabilisation."
      heroImage="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Structural Foundation Repairs', href: '' },
      ]}
      intro={[
        "Cracked footings, eroded foundations, and failed foundation walls need proper structural repair. We do not just patch over the damage. We find the cause, fix it, and make sure the foundation can carry the load it is supposed to.",
        "We repair concrete strip footings, brick and stone foundation walls, and reinforced concrete foundations. Methods include crack injection, steel reinforcement, concrete encasement, and partial reconstruction.",
        "Minas will inspect your foundations, talk through what is going on, and bring in an engineer if needed. We have been repairing foundations across Sydney for over 30 years. We know what works."
      ]}
      features={[
        { icon: Search, title: 'Foundation Assessment', description: 'We dig test pits, inspect the footings, and work out what has gone wrong. Proper diagnosis before any repair work starts.' },
        { icon: Wrench, title: 'Crack Injection', description: 'Epoxy and polyurethane injection to seal cracks in concrete foundations. Restores waterproofing and structural continuity.' },
        { icon: Columns3, title: 'Foundation Strengthening', description: 'Adding steel reinforcement, concrete encasement, or fibre wrap to increase the capacity of existing foundations.' },
        { icon: ShieldCheck, title: 'Waterproofing', description: 'Foundation waterproofing and drainage to stop water from undermining the footings. Membrane and drainage systems.' },
        { icon: FileCheck, title: 'Engineer Coordination', description: 'We work with structural engineers to design and certify every repair. Proper documentation for your records and for council.' },
      ]}
      faqs={[
        { question: 'What causes foundation damage?', answer: 'Reactive clay soils, tree roots, poor drainage, plumbing leaks, and age are the main causes in Sydney. Sometimes it is a combination. We work out what is driving the damage before we start repairs.' },
        { question: 'Can cracked foundations be repaired?', answer: 'Most of the time, yes. Crack injection, reinforcement, and encasement can restore a damaged foundation. Full replacement is a last resort and rarely needed.' },
        { question: 'Do you handle council approvals?', answer: 'If the work needs a building approval, we will coordinate with your engineer to get the documentation sorted. We have done plenty of council-approved foundation work.' },
      ]}
    />
  );
};

export default StructuralFoundationPage;
