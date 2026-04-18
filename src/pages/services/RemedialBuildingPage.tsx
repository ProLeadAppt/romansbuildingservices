import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Building, FileCheck, Shield, HardHat, Gauge, Briefcase } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const RemedialBuildingPage = () => {
  const childServices = getSubServiceRoutes('remedial-building');

  return (
  <ServicePageTemplate
    title="Remedial Building"
    metaTitle="Remedial Building Services Sydney | Roman Building Services"
    metaDescription="Structural assessments, remedial engineering, and building compliance work in Sydney. Working with engineers and strata managers. Call Minas."
    heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
    intro={[
      "Remedial building is about finding what is wrong with a building and fixing it properly. Structural defects, water damage, concrete cancer, non-compliant construction. These problems do not go away on their own. They get worse and they get more expensive.",
      "Minas works with structural engineers, building consultants, and strata managers to deliver remedial programmes that actually solve the problem. We read the engineering reports, understand the scope, and execute the work to spec.",
      "If you are a strata manager or building owner dealing with defect claims, maintenance backlogs, or compliance issues, we can help. Clear communication, honest pricing, and work that passes inspection the first time."
    ]}
    features={[
      { icon: Gauge, title: "Structural Assessments", description: "On-site inspection and reporting on building defects. We identify the problem and recommend the right fix." },
      { icon: FileCheck, title: "Building Compliance", description: "Rectification of non-compliant building work. Fire safety, structural, and waterproofing compliance upgrades." },
      { icon: Building, title: "Defect Rectification", description: "Systematic repair of building defects identified in engineering reports. Concrete, masonry, waterproofing, and structural work." },
      { icon: Briefcase, title: "Strata Building Work", description: "We work with strata managers and owners corporations on major remedial projects. Clear reporting and staged programmes." },
      { icon: HardHat, title: "Facade Remediation", description: "Repair and upgrade of building facades including render, cladding, balconies, and parapets." },
      { icon: Shield, title: "Maintenance Programmes", description: "Planned maintenance to prevent defects before they become expensive problems. Regular inspections and scheduled repairs." }
    ]}
    faqs={[
      { question: "What is remedial building work?", answer: "Remedial building work is the repair and rectification of defects in existing buildings. It covers structural repairs, waterproofing, concrete cancer treatment, facade restoration, and bringing older buildings up to current compliance standards. Often driven by strata committees, engineering reports or insurance claims." },
      { question: "Do you work with engineers and consultants?", answer: "Yes. Most of our remedial work is done to engineer specifications. We work alongside structural engineers, building consultants, remedial-build project managers and strata managers. We can also recommend trusted engineers if you need one." },
      { question: "Can you handle large strata remedial projects?", answer: "Yes. We regularly work on strata buildings with 50 or more units. We provide detailed scoping, staged work programmes across multiple years to spread cost, and regular progress updates to the strata committee and building manager." },
      { question: "How do you price remedial building work?", answer: "Priced on scope, usually from an engineering report. If there is no report yet, we inspect and provide a detailed scoped quote. For strata committees we often provide a ranked scope of urgent / 6-month / 2-year work so you can budget across multiple AGM cycles." },
      { question: "What is the difference between remedial and maintenance work?", answer: "Maintenance is routine preservation — painting, cleaning, small repairs to stop things from getting worse. Remedial is fixing something that has already failed or is failing — concrete cancer, significant structural cracks, water ingress, building defects. Most of our remedial work would have been avoided by earlier maintenance." },
      { question: "Do you handle building defect reports?", answer: "Yes. We read the report, inspect the site, and quote against the specific scope identified. We also provide the documentation strata or the builder needs to close out each item." },
      { question: "Do you do emergency remedial work?", answer: "Yes. For structural emergencies — failed lintels, bulging walls, collapsed retaining walls, spalling concrete overhead — we can mobilise quickly to make safe with propping or shoring, then assess proper repair scope." }
    ]}
    galleryImages={[
      "/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp",
      "/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp",
      "/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
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
