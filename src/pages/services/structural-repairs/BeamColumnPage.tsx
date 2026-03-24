import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, Wrench, ShieldCheck, Hammer, ClipboardCheck } from 'lucide-react';

const BeamColumnPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'beam-column-restoration');
  return (
    <ServicePageTemplate
      title="Beam & Column Restoration"
      metaTitle="Beam & Column Restoration Sydney | Romans Building Services"
      metaDescription="Concrete and masonry beam and column restoration across Sydney. Structural reinforcement and repair."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Beam & Column Restoration', href: '' },
      ]}
      intro={[
        'Beams and columns are the backbone of any building. When concrete spalls, steel corrodes, or masonry deteriorates, those structural elements lose capacity. That is when you need us.',
        'We restore concrete beams, masonry columns, steel lintels, and everything in between. The process starts with understanding why the damage happened, then fixing the cause and the symptom.',
        'From apartment blocks with corroding carpark beams to old warehouses with crumbling columns, we have done it all across Sydney. Proper repairs, proper materials, proper results.',
      ]}
      features={[
        { icon: Landmark, title: 'Concrete Beam Repair', description: 'Spalling concrete removed, corroded reinforcement treated, and beams rebuilt to original profile with structural repair mortars.' },
        { icon: Wrench, title: 'Column Restoration', description: 'Masonry and concrete columns repaired or rebuilt. Matching original materials and finishes where possible.' },
        { icon: ShieldCheck, title: 'Steel Lintel Replacement', description: 'Corroded steel lintels cut out and replaced. New galvanised or stainless steel lintels installed to last.' },
        { icon: Hammer, title: 'Structural Reinforcement', description: 'Carbon fibre wrapping, steel plating, or additional reinforcement where beams and columns need extra capacity.' },
        { icon: ClipboardCheck, title: 'Engineered Solutions', description: 'Every repair designed to meet structural requirements. We work directly with engineers on complex jobs.' },
      ]}
      faqs={[
        { question: 'What causes beams and columns to deteriorate?', answer: 'Water ingress is the main culprit. It corrodes the steel reinforcement inside concrete, causing it to expand and crack the surrounding concrete. Poor original construction and carbonation also play a role.' },
        { question: 'Can you repair beams without replacing them entirely?', answer: 'In most cases, yes. We remove the damaged concrete, treat the steel, and rebuild the beam. Full replacement is only needed when the damage is too far gone.' },
        { question: 'Do you work on strata buildings?', answer: 'Yes. We do a lot of beam and column work in strata apartment blocks and commercial buildings. We are used to working with strata managers and body corporates.' },
        { question: 'How long do beam repairs last?', answer: 'Done properly with the right materials and protective coatings, beam repairs should last 25 years or more. We use proven repair systems from major manufacturers.' },
      ]}
    />
  );
};
export default BeamColumnPage;
