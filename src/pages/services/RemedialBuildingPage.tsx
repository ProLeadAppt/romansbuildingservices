import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Building, FileCheck, Shield, HardHat, Gauge, Briefcase, TriangleAlert, Droplets, Wrench, Layers3 } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const RemedialBuildingPage = () => {
  const childServices = getSubServiceRoutes('remedial-building');

  return (
    <ServicePageTemplate
      title="Remedial Building"
      metaTitle="Sydney Remedial Building | Romans"
      metaDescription="Strata defects, compliance upgrades, emergency make-safe work and remedial repairs across Sydney by Minas Romanakis. One team, proper scopes, signed off."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Services', href: '/services' }}
      siblingServices={[
        { title: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { title: 'Structural Repairs', href: '/services/structural-repairs' },
        { title: 'Building Restoration', href: '/services/building-restoration' },
        { title: 'Heritage Restoration', href: '/services/heritage-restoration' },
      ]}
      intro={[
        'Remedial building is about finding what is wrong with a building and fixing it properly. Structural defects, water damage, concrete cancer and non-compliant construction do not go away on their own — they get worse and more expensive.',
        'Minas works with structural engineers, building consultants and strata managers to deliver remedial programmes that actually solve the problem. We read the engineering reports, understand the scope and execute the work to spec.',
        'If you are dealing with defect claims, maintenance backlogs or compliance issues, this is the page you want to land on. The goal is to make the problem clear, the scope clear and the next step easy.'
      ]}
      features={[
        { icon: Gauge, title: 'Structural Assessments', description: 'On-site inspection and reporting on building defects. We identify the problem and recommend the right fix.' },
        { icon: FileCheck, title: 'Building Compliance', description: 'Rectification of non-compliant building work. Fire safety, structural and waterproofing compliance upgrades.' },
        { icon: Building, title: 'Defect Rectification', description: 'Systematic repair of building defects identified in engineering reports. Concrete, masonry, waterproofing and structural work.' },
        { icon: Briefcase, title: 'Strata Building Work', description: 'We work with strata managers and owners corporations on major remedial projects. Clear reporting and staged programmes.' },
        { icon: HardHat, title: 'Facade Remediation', description: 'Repair and upgrade of building facades including render, cladding, balconies and parapets.' },
        { icon: Shield, title: 'Maintenance Programmes', description: 'Planned maintenance to prevent defects before they become expensive problems. Regular inspections and scheduled repairs.' }
      ]}
      whatWeUse={[
        { title: 'Engineering-led scopes', detail: 'We work to the report so the repair matches the actual defect, not just the visible damage.' },
        { title: 'Corrosion inhibitors', detail: 'When concrete cancer is involved, exposed steel is cleaned and treated so the rust cycle is slowed down properly.' },
        { title: 'Repair mortars', detail: 'Polymer-modified repair systems are chosen to match the substrate and weather conditions, not just the price.' },
        { title: 'Breathable coatings and membranes', detail: 'Where water ingress is part of the defect, we use systems that stop water getting in without trapping moisture in the wall or slab.' },
      ]}
      processSteps={[
        { step: 'Review the report and scope', detail: 'We start with the engineer or consultant report and make sure the repair scope is understood before anything is opened up.' },
        { step: 'Inspect the live building conditions', detail: 'We check access, safety, moisture, movement and the surrounding building elements so the repair plan fits the actual site.' },
        { step: 'Stage the works', detail: 'Remedial jobs often need sequencing. We organise the work so the urgent defects are dealt with first and the building stays usable.' },
        { step: 'Repair the defect properly', detail: 'We remove the failed material, fix the cause and reinstate using the correct system — not a cosmetic patch.' },
        { step: 'Document and hand over', detail: 'We close out the scope with photos and clear communication so strata managers and owners know what was done.' },
      ]}
      faqs={[
        { question: 'What is remedial building work?', answer: 'Remedial building work is the repair and rectification of defects in existing buildings. It covers structural repairs, waterproofing, concrete cancer treatment, facade restoration and bringing older buildings up to current compliance standards.' },
        { question: 'Do you work with engineers and consultants?', answer: 'Yes. Most of our remedial work is done to engineer specifications. We work alongside structural engineers, building consultants, remedial-build project managers and strata managers. We can also recommend trusted engineers if you need one.' },
        { question: 'Can you handle large strata remedial projects?', answer: 'Yes. We regularly work on strata buildings with 50 or more units. We provide detailed scoping, staged work programmes across multiple years to spread cost, and regular progress updates to the strata committee and building manager.' },
        { question: 'How do you price remedial building work?', answer: 'Priced on scope, usually from an engineering report. If there is no report yet, we inspect and provide a detailed scoped quote. For strata committees we often provide a ranked scope of urgent / 6-month / 2-year work so you can budget across multiple AGM cycles.' },
        { question: 'What is the difference between remedial and maintenance work?', answer: 'Maintenance is routine preservation — painting, cleaning, small repairs to stop things from getting worse. Remedial is fixing something that has already failed or is failing — concrete cancer, significant structural cracks, water ingress, building defects.' },
        { question: 'Do you handle building defect reports?', answer: 'Yes. We read the report, inspect the site and quote against the specific scope identified. We also provide the documentation strata or the builder needs to close out each item.' },
        { question: 'Do you do emergency remedial work?', answer: 'Yes. For structural emergencies — failed lintels, bulging walls, collapsed retaining walls, spalling concrete overhead — we can mobilise quickly to make safe with propping or shoring, then assess proper repair scope.' }
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
