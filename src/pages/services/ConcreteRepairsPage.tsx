import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Shield, Wrench, Layers, Gauge, HardHat, Settings } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const ConcreteRepairsPage = () => {
  const childServices = getSubServiceRoutes('concrete-repairs');

  return (
  <ServicePageTemplate
    title="Concrete Repairs"
    metaTitle="Concrete Repairs Sydney | Romans Building Services"
    metaDescription="Concrete cancer, spalling, and carbonation repairs in Sydney. Proper diagnosis and lasting fixes. Call Minas for a quote."
    heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
    intro={[
      "Concrete cancer is one of the most common problems in Sydney buildings. Water gets in, the steel reinforcement rusts, and the concrete starts to crack and fall apart. It looks bad and it is a real structural risk if left alone.",
      "Minas has been diagnosing and repairing concrete problems for over 30 years. Spalling, carbonation, chloride attack, render failure. We work out what is causing the damage, treat the reinforcement, and rebuild the concrete properly.",
      "A quick patch over the top does not fix concrete cancer. The corrosion continues underneath and you end up paying twice. We do it right the first time. Break out the damaged concrete, treat the steel, and apply proper repair materials with protective coatings."
    ]}
    features={[
      { icon: Gauge, title: "Concrete Cancer Treatment", description: "Full break-out of damaged concrete, rust treatment of exposed reinforcement, and rebuild with polymer-modified repair mortar." },
      { icon: Wrench, title: "Spalling Repairs", description: "Repair of spalled concrete on balconies, soffits, columns, and facades. Structural and cosmetic repair in one process." },
      { icon: Layers, title: "Protective Coatings", description: "Anti-carbonation coatings and water-repellent sealers to prevent future damage. Applied after repair for long-term protection." },
      { icon: HardHat, title: "Balcony & Soffit Repairs", description: "Overhead and balcony concrete repairs including waterproofing. Safe working methods with proper access equipment." },
      { icon: Shield, title: "Structural Concrete Repair", description: "Repair of load-bearing concrete elements to engineer specifications. Steel treatment, cathodic protection, and structural rebuild." },
      { icon: Settings, title: "Condition Assessments", description: "On-site inspection and reporting on the extent of concrete damage. Core sampling and carbonation testing available." }
    ]}
    faqs={[
      { question: "What causes concrete cancer?", answer: "Concrete cancer is caused by moisture and salt reaching the steel reinforcement inside the concrete. The steel rusts, expands up to seven times its original size, and cracks the surrounding concrete from the inside out. Common causes are insufficient concrete cover, poor waterproofing, salt air in coastal areas, and carbonation of the concrete over time." },
      { question: "How much does concrete cancer repair cost?", answer: "A single balcony repair typically runs $2,500 to $15,000. Whole-building programs on strata apartment blocks typically $30,000 to $300,000 or more, usually staged over 1–3 years. Every job is different — Minas inspects and provides a written quote." },
      { question: "Can concrete cancer come back after repair?", answer: "If the repair is done properly — full removal back to sound concrete, steel treated with a corrosion inhibitor, salt-resistant patch mortar, and a breathable protective coating — it will not come back for 20 to 30 years in a coastal environment. Cheap patch jobs that skip the steel treatment fail again within 3–5 years." },
      { question: "Do you work on apartment buildings and strata?", answer: "Yes. A large part of our concrete repair work is on strata buildings. We work with strata managers, provide detailed condition reports, and can stage the work to minimise disruption to residents and spread cost across multiple years." },
      { question: "How do I know if my apartment balcony has concrete cancer?", answer: "Look for rust stains bleeding out of the concrete, cracks in straight lines following the reinforcement, concrete flaking off in chunks, or a hollow sound when you tap the surface. If you can see exposed rusty steel, the damage is already into the structural layer and needs attention." },
      { question: "Is concrete cancer worse in coastal Sydney?", answer: "Yes — much worse. Salt in coastal air accelerates steel corrosion dramatically. Most apartment blocks in Bondi, Manly, Dee Why, Coogee and Cronulla built before 1990 have concrete cancer somewhere. Inland buildings still get it but progression is slower." },
      { question: "What is the difference between spalling and concrete cancer?", answer: "Spalling is the visible damage — flaking, chunks of concrete falling off. Concrete cancer is the cause — rusting steel reinforcement expanding inside the concrete. Treating spalling without treating the steel means the problem comes back." }
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
