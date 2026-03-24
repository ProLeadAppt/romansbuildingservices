import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ClipboardCheck, Building, Shield, FileCheck, Scale } from 'lucide-react';

const ComplianceUpgradesPage = () => {
  const siblings = getSiblingServices('remedial-building', 'compliance-upgrades');

  return (
    <ServicePageTemplate
      title="Building Compliance Upgrades"
      metaTitle="Building Compliance Upgrades Sydney | Romans Building Services"
      metaDescription="Bringing buildings up to current compliance standards across Sydney. Structural upgrades and remedial work."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Building Compliance Upgrades', href: '' },
      ]}
      intro={[
        "Building codes change. What was fine 20 years ago might not meet current standards. If council or an insurer has flagged compliance issues on your building, we can carry out the upgrade work to bring it up to scratch.",
        "We do structural upgrades, fire safety improvements, balustrade replacements, waterproofing remediation, and access compliance work. Everything is done to meet current Australian Standards and the Building Code of Australia.",
        "Romans works with building certifiers and engineers to make sure the upgrades tick every box. Minas will give you a clear scope and price so there are no surprises."
      ]}
      features={[
        { icon: ClipboardCheck, title: 'Fire Safety Upgrades', description: 'Fire-rated walls, fire doors, compartmentalisation, and structural fire protection. Meeting current fire safety orders.' },
        { icon: Building, title: 'Balustrade Compliance', description: 'Replacing non-compliant balustrades to meet current height and loading requirements. Glass, steel, and masonry options.' },
        { icon: Shield, title: 'Structural Upgrades', description: 'Strengthening walls, floors, and connections to meet current structural standards. Engineered solutions for older buildings.' },
        { icon: Scale, title: 'BCA Compliance', description: 'Bringing buildings into line with the Building Code of Australia. We work with certifiers to confirm compliance on completion.' },
        { icon: FileCheck, title: 'Documentation', description: 'Full documentation including engineer certifications, compliance certificates, and as-built records for council and insurers.' },
      ]}
      faqs={[
        { question: 'Why would my building need compliance upgrades?', answer: 'Usually because of a council order, insurance requirement, change of use, or sale condition. Older buildings often need upgrades to meet current fire safety, structural, or access standards.' },
        { question: 'Do you handle the certifier process?', answer: 'We coordinate with building certifiers and engineers throughout the project. We make sure the work meets the requirements and the paperwork is sorted for sign-off.' },
        { question: 'How disruptive are compliance upgrades?', answer: 'It depends on the scope. Some work can be done in stages with minimal disruption. Larger jobs may need temporary relocation. We plan the work to minimise impact on occupants.' },
      ]}
    />
  );
};

export default ComplianceUpgradesPage;
