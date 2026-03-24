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
      { question: "What is remedial building work?", answer: "Remedial building work is the repair and rectification of defects in existing buildings. It covers structural repairs, waterproofing, concrete cancer treatment, facade restoration, and bringing buildings up to current standards." },
      { question: "Do you work with engineers and consultants?", answer: "Yes. Most of our remedial work is done to engineer specifications. We work alongside structural engineers, building consultants, and project managers. Minas can also recommend trusted engineers if you need one." },
      { question: "Can you handle large strata remedial projects?", answer: "Yes. We regularly work on strata buildings with 50 or more units. We provide detailed scoping, staged work programmes, and regular progress updates to the strata committee." },
      { question: "How do you price remedial building work?", answer: "We price based on the scope of work, usually from an engineering report. If there is no report yet, Minas will inspect the building and provide a detailed quote. No hidden costs. What we quote is what you pay." }
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
