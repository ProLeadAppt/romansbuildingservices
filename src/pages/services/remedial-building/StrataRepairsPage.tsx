import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, Users, FileCheck, Wrench, ClipboardList } from 'lucide-react';

const StrataRepairsPage = () => {
  const siblings = getSiblingServices('remedial-building', 'strata-repairs');

  return (
    <ServicePageTemplate
      title="Strata Building Repairs"
      metaTitle="Strata Building Repairs Sydney | Romans Building Services"
      metaDescription="Strata building repairs and maintenance across Sydney. Working with strata managers and owners corporations."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Strata Building Repairs', href: '' },
      ]}
      intro={[
        "Strata buildings need repairs done properly, on time, and within budget. We work with strata managers, owners corporations, and building managers to get the work sorted without the runaround.",
        "We handle concrete repairs, masonry restoration, waterproofing, structural work, and general remedial maintenance on strata properties. From a single balcony to a full building remediation, we cover it.",
        "Minas deals directly with strata managers and provides clear quotes, progress reports, and completion documentation. We understand the approvals process and we keep everyone in the loop."
      ]}
      features={[
        { icon: Building, title: 'Common Area Repairs', description: 'Carparks, lobbies, stairwells, facades, and rooftops. We repair and maintain all common property areas.' },
        { icon: Users, title: 'Strata Manager Liaison', description: 'We work directly with your strata manager. Clear quotes, regular updates, and documentation for AGM reports.' },
        { icon: FileCheck, title: 'Capital Works Plans', description: 'We provide detailed scoping and costing for capital works plans. Helps the owners corporation budget properly.' },
        { icon: Wrench, title: 'Preventive Maintenance', description: 'Regular inspections and maintenance to catch problems early. Cheaper than waiting for things to fail.' },
        { icon: ClipboardList, title: 'Defect Reports', description: 'We prepare detailed defect reports with photos, scope of works, and cost estimates for owners corporation meetings.' },
      ]}
      faqs={[
        { question: 'Do you work with strata managers?', answer: 'All the time. We deal with strata managers across Sydney. We understand the process, the paperwork, and the approval timelines. We make it easy for everyone.' },
        { question: 'Can you provide quotes for AGM approval?', answer: 'Yes. We provide detailed written quotes that strata managers can present at AGMs. Broken down by area and scope so owners can see exactly what they are approving.' },
        { question: 'How do you minimise disruption to residents?', answer: 'We stage the work, keep noise to reasonable hours, and maintain access throughout. We communicate the schedule in advance so residents know what to expect.' },
        { question: 'Do you handle the full scope or just masonry?', answer: 'We handle all structural and remedial work. For things outside our scope like plumbing or electrical, we coordinate with trusted subcontractors.' },
      ]}
    />
  );
};

export default StrataRepairsPage;
