import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Wrench, ShieldCheck, Paintbrush, Replace, Search } from 'lucide-react';

const SteelStructureRepairsPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'steel-structure-repairs');
  return (
    <ServicePageTemplate
      title="Steel Structure Repairs"
      metaTitle="Steel Structure Repairs Sydney | Romans Building Services"
      metaDescription="Steel beam, lintel, and structural steel repairs across Sydney. Rust treatment, replacement, and reinforcement."
      heroImage="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Steel Structure Repairs', href: '' },
      ]}
      intro={[
        'Steel lintels, beams, and structural members corrode over time, especially in Sydney where salt air and moisture accelerate rust. When steel fails, the masonry above it cracks and drops.',
        'We cut out corroded steel, treat remaining sections, and install new galvanised or stainless steel replacements. We also repair the surrounding brickwork and masonry that has been damaged by the expanding rust.',
        'From rusted lintels above windows to failing steel beams in commercial buildings, we deal with steel corrosion problems every week. We know what works and what lasts.',
      ]}
      features={[
        { icon: Search, title: 'Corrosion Assessment', description: 'We identify the extent of steel corrosion, check remaining capacity, and determine whether repair or replacement is needed.' },
        { icon: Replace, title: 'Steel Replacement', description: 'Corroded lintels and beams cut out and replaced with new galvanised or stainless steel. Properly supported during the swap.' },
        { icon: Wrench, title: 'Rust Treatment', description: 'Where steel can be saved, we remove rust, treat with rust converter, and apply protective coatings to stop further corrosion.' },
        { icon: Paintbrush, title: 'Protective Coatings', description: 'Epoxy and polyurethane coatings applied to repaired or new steel to prevent future corrosion in exposed environments.' },
        { icon: ShieldCheck, title: 'Masonry Reinstatement', description: 'Cracked brickwork and displaced masonry above corroded lintels rebuilt and pointed to match the original.' },
      ]}
      faqs={[
        { question: 'How do I know if my steel lintels are corroding?', answer: 'Look for rust stains on brickwork, horizontal cracks above windows and doors, or bowing in the masonry above openings. These are classic signs of lintel corrosion.' },
        { question: 'Should I use galvanised or stainless steel for replacements?', answer: 'Stainless steel lasts longer, especially near the coast. Galvanised is more cost-effective for inland locations. We recommend based on your building and location.' },
        { question: 'Can corroded steel be repaired or does it need replacing?', answer: 'It depends on how much steel is left. If corrosion has reduced the cross-section significantly, replacement is the only safe option. We will assess and give you honest advice.' },
      ]}
    />
  );
};
export default SteelStructureRepairsPage;
