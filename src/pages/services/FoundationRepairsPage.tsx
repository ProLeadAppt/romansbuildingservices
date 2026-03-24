import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Home, Shield, Wrench, Gauge, HardHat, Shovel } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const FoundationRepairsPage = () => {
  const childServices = getSubServiceRoutes('foundation-repairs');

  return (
  <ServicePageTemplate
    title="Foundation Repairs"
    metaTitle="Foundation Repairs Sydney | Roman Building Services"
    metaDescription="Underpinning, restumping, and foundation crack repairs in Sydney. The bit you cannot see but cannot ignore. Call Minas for a quote."
    heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
    intro={[
      "Cracks in the walls, doors that stick, floors that slope. These are usually signs of foundation movement. It is the bit you cannot see but it holds everything up. If the foundation is failing, everything above it is at risk.",
      "Minas has been repairing foundations across Sydney for over 30 years. Underpinning, restumping, crack repairs, and stabilisation. We work on sandstone footings, brick piers, concrete slabs, and everything in between.",
      "We work with structural engineers to get the diagnosis right and the fix right. No guesswork. Just a proper assessment, a clear plan, and solid work that stops the movement for good."
    ]}
    features={[
      { icon: Shovel, title: "Underpinning", description: "Mass concrete and screw pile underpinning to stabilise foundations that have settled or moved. Done in stages to keep the building safe." },
      { icon: Home, title: "Restumping", description: "Replacement of deteriorated timber or brick stumps with new concrete or steel adjustable stumps. Levels the building and stops further movement." },
      { icon: Wrench, title: "Foundation Crack Repairs", description: "Epoxy injection and structural repair of cracked foundations. Stops water entry and restores structural integrity." },
      { icon: Gauge, title: "Foundation Assessments", description: "On-site inspection of foundation condition. We check for movement, cracking, moisture, and bearing capacity issues." },
      { icon: HardHat, title: "Retaining Wall Foundations", description: "Repair and replacement of failed retaining wall footings. Proper drainage and engineering to prevent future movement." },
      { icon: Shield, title: "Pier & Beam Repairs", description: "Repair and replacement of damaged piers, bearers, and joists. Concrete, steel, or timber depending on the building type." }
    ]}
    faqs={[
      { question: "How do I know if my foundation needs repair?", answer: "Common signs include cracks in walls (especially near doors and windows), sticking doors, uneven floors, and gaps between walls and ceilings. If you notice any of these, call Minas for an inspection." },
      { question: "What is underpinning and when is it needed?", answer: "Underpinning strengthens and deepens existing foundations. It is needed when the original foundation is not deep enough, the soil has changed, or the building has settled unevenly. It is the most reliable way to stop foundation movement." },
      { question: "How long does underpinning take?", answer: "A typical residential underpinning job takes 2 to 4 weeks depending on the number of pits and access. We work in stages so the building is supported at all times." },
      { question: "Will I need to move out during foundation repairs?", answer: "Usually not. Most foundation work is done from outside or underneath the building. There will be noise and vibration during the dig, but the house remains safe to live in throughout the process." }
    ]}
    galleryImages={[
      "/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp",
      "/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp",
      "/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
    ]}
    childServices={childServices}
    breadcrumbs={[
      { label: 'Services', href: '/services' },
      { label: 'Foundation Repairs', href: '' },
    ]}
  />
  );
};

export default FoundationRepairsPage;
