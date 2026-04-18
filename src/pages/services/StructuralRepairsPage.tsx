import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Shield, Wrench, HardHat, Gauge, Hammer, Building } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const StructuralRepairsPage = () => {
  const childServices = getSubServiceRoutes('structural-repairs');

  return (
  <ServicePageTemplate
    title="Structural Repairs"
    metaTitle="Structural Repairs Sydney | Roman Building Services"
    metaDescription="Crack stitching, lintel replacement, and load-bearing wall repairs in Sydney. Fixing the things that hold buildings together. Call Minas."
    heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
    intro={[
      "Cracks in walls, sagging lintels, bulging brickwork. These are not cosmetic problems. They are signs that something structural needs attention. Ignoring them only makes the repair bigger and more expensive down the track.",
      "Minas has been doing structural repairs across Sydney for over 30 years. Crack stitching, lintel replacement, load-bearing wall repairs, and structural reinforcement. We work with engineers when needed and make sure every repair is done to spec.",
      "We fix the cause, not just the symptom. If a crack keeps coming back, there is a reason. We find it, address it, and then repair the damage properly."
    ]}
    features={[
      { icon: Wrench, title: "Crack Stitching", description: "Helical bar insertion and epoxy injection to stabilise and repair structural cracks in masonry walls. Permanent fix, not a cover-up." },
      { icon: HardHat, title: "Lintel Replacement", description: "Removal and replacement of failed steel and concrete lintels above windows and doors. Temporary propping and proper installation." },
      { icon: Shield, title: "Load-Bearing Wall Repairs", description: "Rebuilding and reinforcing load-bearing walls. Brick replacement, structural ties, and strengthening to engineer specifications." },
      { icon: Gauge, title: "Structural Assessments", description: "On-site assessment of structural damage with clear reporting. We can recommend an engineer if a formal report is required." },
      { icon: Hammer, title: "Wall Tie Replacement", description: "Removal of corroded wall ties and installation of new stainless steel remedial ties. Stops cavity wall separation." },
      { icon: Building, title: "Beam & Column Repairs", description: "Concrete and steel beam repairs, column strengthening, and structural element restoration." }
    ]}
    faqs={[
      { question: "How do I know if a crack is structural?", answer: "Cracks wider than 5mm, cracks that follow a stair-step pattern through mortar joints, horizontal cracks, or cracks near windows and doors are usually structural. Cracks that are actively growing over weeks or months are also a warning sign. If multiple signs are present, get an inspection." },
      { question: "Do you work with structural engineers?", answer: "Yes, regularly. For any significant structural work we work alongside qualified structural engineers. They design the fix, we build it. On smaller jobs, Minas can assess the situation and advise whether an engineer is needed." },
      { question: "How long does crack stitching take?", answer: "Most crack stitching jobs on a residential property take 2 to 5 days depending on the number of cracks and access. It is a fast, effective, non-destructive repair that avoids major demolition and rebuilding." },
      { question: "Will the repair be visible?", answer: "No. Helical bars are bedded into the horizontal mortar joints and then hidden by new pointing matched to the existing mortar. On rendered walls, we patch and match the finish. The goal is always an invisible repair." },
      { question: "What is helical bar stitching and how does it work?", answer: "Helical bar stitching uses stainless steel spiral rods bedded into horizontal mortar joints across a crack. The bars tie the wall together while allowing minor future movement without re-cracking. It is a proven structural repair that works on brick, block and stone walls." },
      { question: "How much does structural crack repair cost?", answer: "Typical domestic crack repair $800 to $8,000 depending on number of cracks, length and access. Major structural work with engineer involvement can run $15,000+. Every job is different — we quote after inspection." },
      { question: "Is a rusting steel lintel dangerous?", answer: "Eventually, yes. Rusting steel lintels above windows and doors expand as they corrode, pushing bricks apart and causing brick cracking, then eventual lintel failure. Signs include rust stains on brickwork above openings and cracks radiating from corner of windows. Replacing before failure is a much smaller job than after." }
    ]}
    galleryImages={[
      "/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp",
      "/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp",
      "/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
    ]}
    childServices={childServices}
    breadcrumbs={[
      { label: 'Services', href: '/services' },
      { label: 'Structural Repairs', href: '' },
    ]}
  />
  );
};

export default StructuralRepairsPage;
