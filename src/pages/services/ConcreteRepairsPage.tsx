import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Shield, Wrench, Layers, Gauge, HardHat, Settings } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const ConcreteRepairsPage = () => {
  const childServices = getSubServiceRoutes('concrete-repairs');

  return (
  <ServicePageTemplate
    title="Concrete Repairs"
    metaTitle="Sydney Concrete Repairs | Romans"
    metaDescription="Concrete repairs for Sydney buildings. Learn about spalling, corrosion warning signs and the need for a project-specific assessment and repair scope."
    heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
    intro={[
      "Cracked, spalling or loose concrete can present a falling-material hazard. Keep away from the affected area and the space below loose material. Visible damage alone cannot establish its cause, extent or structural safety; a project-specific assessment is needed before choosing a repair.",
      "Concrete cancer is commonly used to describe damage associated with corrosion of reinforcing steel. Chlorides or carbonation can weaken the protection normally provided by concrete, while moisture and oxygen allow corrosion to develop. Rust can create pressure that cracks or spalls the surrounding concrete. Spalling can also have other causes.",
      "A repair scope should follow assessment of the concrete and reinforcement, access and safety requirements, and relevant water-entry or exposure conditions. Coatings may form part of a suitable specified repair or protection system, but they do not provide a general guarantee against future deterioration."
    ]}
    features={[
      { icon: Gauge, title: "Concrete Cancer Treatment", description: "Full break-out of damaged concrete, rust treatment of exposed reinforcement, and rebuild with polymer-modified repair mortar." },
      { icon: Wrench, title: "Spalling Repairs", description: "Repair of spalled concrete on balconies, soffits, columns, and facades. Structural and cosmetic repair in one process." },
      { icon: Layers, title: "Protective Coatings", description: "Protective coatings or sealers may form part of a suitable specified system after assessment and repair. Performance depends on the conditions and ongoing maintenance." },
      { icon: HardHat, title: "Balcony & Soffit Repairs", description: "Overhead and balcony concrete repairs including waterproofing. Safe working methods with proper access equipment." },
      { icon: Shield, title: "Structural Concrete Repair", description: "Repair of load-bearing concrete elements to engineer specifications. Steel treatment, cathodic protection, and structural rebuild." },
      { icon: Settings, title: "Condition Assessments", description: "On-site inspection and reporting on the extent of concrete damage. Core sampling and carbonation testing available." }
    ]}
    faqs={[
      { question: "What causes concrete cancer?", answer: "Concrete normally helps protect reinforcing steel. Chlorides can disrupt that protection, while carbonation can reduce the concrete’s protective alkalinity. When protection is weakened, moisture and oxygen allow corrosion to develop. Corrosion products can create pressure that cracks or spalls the surrounding concrete. The cause and extent need a project-specific assessment." },
      { question: "How much does concrete cancer repair cost?", answer: "Cost depends on the assessed extent and depth of damage, reinforcement condition, access, working height, safety arrangements and the specified repair system. Ask for a project-specific written scope with clear assumptions and exclusions. A general FAQ cannot establish a price for a building." },
      { question: "Can concrete cancer come back after repair?", answer: "Further deterioration can occur when the causes of corrosion or damage remain. Repair life depends on the design, workmanship, exposure and ongoing maintenance. Ask about the specified system and its particular terms; this general guidance is not a warranty or a promise of a fixed service life." },
      { question: "Do you work on apartment buildings and strata?", answer: "Yes. A large part of our concrete repair work is on strata buildings. We work with strata managers, provide detailed condition reports, and can stage the work to minimise disruption to residents and spread cost across multiple years." },
      { question: "How do I know if my apartment balcony has concrete cancer?", answer: "Rust staining, cracking, bulging, exposed reinforcement or concrete breaking away deserve attention, but warning signs do not diagnose the cause or confirm structural safety. Observe only from a safe position. Do not tap or chip suspect concrete. Keep away from loose material and the area below it, and arrange appropriate professional advice." },
      { question: "Is concrete cancer worse in coastal Sydney?", answer: "Marine salts can increase the risk of reinforcement corrosion when chlorides reach the steel. However, a building’s age or location does not establish whether it is damaged or how quickly deterioration may progress. Carbonation, moisture and other conditions can also affect inland buildings; assessment needs to consider the particular structure." },
      { question: "What is the difference between spalling and concrete cancer?", answer: "Spalling describes concrete breaking or flaking away. Corrosion of reinforcing steel is one possible cause, but spalling can have other causes. Its appearance alone does not identify the cause or establish safety. The repair scope should follow a project-specific assessment." }
    ]}
    galleryImages={[
      "/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp",
      "/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp",
      "/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
    ]}
    childServices={childServices}
    breadcrumbs={[
      { label: 'Services', href: '/services' },
      { label: 'Concrete Repairs', href: '' },
    ]}
  />
  );
};

export default ConcreteRepairsPage;
