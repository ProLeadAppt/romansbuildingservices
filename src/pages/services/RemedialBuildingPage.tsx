import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Building, FileCheck, Shield, HardHat, Gauge, Briefcase } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const RemedialBuildingPage = () => {
  const childServices = getSubServiceRoutes('remedial-building');

  return (
    <ServicePageTemplate
      title="Remedial Building"
      metaTitle="Sydney Remedial Building | Romans"
      metaDescription="Strata defects, compliance upgrades, emergency make-safe work and remedial repairs across Sydney by Minas Romanakis. Defined scopes with relevant engineer or consultant input."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Services', href: '/services' }}
      siblingServices={[
        { title: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { title: 'Structural Repairs', href: '/services/structural-repairs' },
        { title: 'Building Restoration', href: '/services/building-restoration' },
        { title: 'Heritage Restoration', href: '/services/heritage-restoration' },
      ]}
      intro={[
      "Remedial building repairs defects in existing buildings, including water damage, deteriorated concrete, cracked masonry and structural problems. Romans works with homeowners, strata managers and building consultants across the Hawkesbury, Western Sydney and wider Sydney to turn identified defects into a defined repair scope.",
      "Minas and the team review engineering or consultant reports alongside the site conditions, access and occupied areas. Structural design, specialist assessments and certification remain with the relevant professionals; Romans carries out the agreed building repairs.",
      "If you have a defect report or maintenance backlog, share it with your enquiry. We can review the proposed work, discuss what needs further investigation and quote against an agreed scope, with staging subject to safety needs and consultant advice."
    ]}
      features={[
        { icon: Gauge, title: 'Structural Assessments', description: 'On-site inspection and reporting on building defects. Specialist diagnosis and structural design are provided by the relevant engineer or consultant.' },
        { icon: FileCheck, title: 'Building Compliance', description: 'Rectification of non-compliant building work. Fire safety, structural and waterproofing compliance upgrades.' },
        { icon: Building, title: 'Defect Rectification', description: 'Systematic repair of building defects identified in engineering reports. Concrete, masonry, waterproofing and structural work.' },
        { icon: Briefcase, title: 'Strata Building Work', description: 'We work with strata managers and owners corporations on major remedial projects. Clear reporting and staged programmes.' },
        { icon: HardHat, title: 'Facade Remediation', description: 'Repair and upgrade of building facades including render, cladding, balconies and parapets.' },
        { icon: Shield, title: 'Maintenance Programmes', description: 'Planned maintenance to identify deterioration and address repair needs. Regular inspections and scheduled repairs.' }
      ]}
      whatWeUse={[
        { title: 'Engineering-led scopes', detail: 'We work to the report so the repair matches the actual defect, not just the visible damage.' },
        { title: 'Corrosion inhibitors', detail: 'When concrete cancer is involved, exposed steel is cleaned and treated so the rust cycle is slowed down properly.' },
        { title: 'Repair mortars', detail: 'Polymer-modified repair systems are chosen to match the substrate and weather conditions, not just the price.' },
        { title: 'Breathable coatings and membranes', detail: 'Waterproofing and coating systems are selected for the substrate, exposure and moisture conditions in the specified repair scope.' },
      ]}
      processSteps={[
        { step: 'Review the report and scope', detail: 'We start with the engineer or consultant report and make sure the repair scope is understood before anything is opened up.' },
        { step: 'Inspect the live building conditions', detail: 'We check access, safety, moisture, movement and the surrounding building elements so the repair plan fits the actual site.' },
        { step: 'Stage the works', detail: 'Remedial jobs often need sequencing. We plan priorities, access restrictions and staging with the relevant advisers; continued use depends on the assessed risks.' },
        { step: 'Repair the defect properly', detail: 'We remove the failed material, fix the cause and reinstate using the correct system — not a cosmetic patch.' },
        { step: 'Document and hand over', detail: 'We close out the scope with photos and clear communication so strata managers and owners know what was done.' },
      ]}
      faqs={[
      { question: "What is remedial building work?", answer: "Remedial work repairs defects in existing buildings. It can include structural repairs, waterproofing, concrete repairs and facade restoration. Compliance-related work must address the requirements relevant to the particular project; a general repair programme does not automatically certify an entire building as compliant." },
      { question: "Do you work with engineers and consultants?", answer: "Yes. We work to repair specifications alongside structural engineers, building consultants, project managers and strata managers. The relevant professionals provide specialist assessment, design and certification. Romans reviews the site conditions and carries out the agreed building scope." },
      { question: "Can you handle strata remedial projects?", answer: "Yes. We work with strata managers and owners corporations on remedial building work. Project size, access, resident needs and the consultant’s repair scope determine the programme. Staging can be discussed, but urgent safety work should not be deferred simply to spread costs." },
      { question: "How do you price remedial building work?", answer: "Pricing follows the defined scope, often informed by an engineering or consultant report. If investigations are still needed, those gaps should be identified before a firm repair scope is agreed. Access, temporary works, testing, approvals and making good should be clear in the quote or its exclusions." },
      { question: "What is the difference between remedial and maintenance work?", answer: "Maintenance preserves a building through regular care and smaller repairs. Remedial work addresses an identified defect or failure, such as water ingress, deteriorated concrete or damaged structural masonry. The two can overlap, with ongoing maintenance supporting the completed repair." },
      { question: "Do you handle building defect reports?", answer: "We review existing defect reports, inspect the relevant areas and quote against the agreed repair scope. Building-work records can support close-out, but formal engineering opinions, compliance certification or independent defect assessments must come from the appropriate qualified professional." },
      { question: "Do you do emergency remedial work?", answer: "Contact us to discuss urgent repairs and current availability. Make-safe work such as propping or shoring requires an appropriate assessment and plan. Keep away from unstable walls, loose overhead material and affected areas. If there is immediate danger, contact emergency services rather than waiting for a quote response." }
    ]}
      galleryImages={[
        '/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp',
        '/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp',
        '/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp'
      ]}
      childServices={childServices}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '' },
      ]}
    />
  );
};

export default RemedialBuildingPage;
