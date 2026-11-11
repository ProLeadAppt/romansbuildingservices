import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Shield, Wrench, HardHat, Gauge, Hammer, Building } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const StructuralRepairsPage = () => {
  const childServices = getSubServiceRoutes('structural-repairs');

  return (
  <ServicePageTemplate
    title="Structural Repairs"
    metaTitle="Sydney Structural Repairs | Romans"
    metaDescription="Sydney structural repairs by Minas Romanakis. Crack stitching, lintel replacement, load-bearing wall repairs and structural reinforcement done properly."
    heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
    intro={[
      "Cracked masonry, sagging lintels and bulging walls need assessment before a repair is chosen. Some cracks are cosmetic; others relate to movement or failure of structural elements. Appearance or crack width alone cannot establish the cause or confirm that a building is safe.",
      "Romans carries out crack stitching, lintel replacement, load-bearing wall repairs and reinforcement across the Hawkesbury, Western Sydney and wider Sydney. Structural engineers assess and design structural repairs where required; our team carries out the agreed building work.",
      "A repair scope should address the cause as well as the visible damage. If masonry is loose, a wall is leaning or there is sudden movement, keep people away from the affected area and seek urgent professional advice. For immediate danger, contact emergency services."
    ]}
    features={[
      { icon: Wrench, title: "Crack Stitching", description: "Helical bar stitching and epoxy injection where specified for the masonry and cause of cracking." },
      { icon: HardHat, title: "Lintel Replacement", description: "Removal and replacement of failed steel and concrete lintels above windows and doors. Temporary propping and proper installation." },
      { icon: Shield, title: "Load-Bearing Wall Repairs", description: "Rebuilding and reinforcing load-bearing walls. Brick replacement, structural ties, and strengthening to engineer specifications." },
      { icon: Gauge, title: "Structural Assessments", description: "On-site assessment of structural damage with clear reporting. We can recommend an engineer if a formal report is required." },
      { icon: Hammer, title: "Wall Tie Replacement", description: "Removal of corroded wall ties and installation of new stainless steel remedial ties. Selected and installed to suit the assessed wall condition." },
      { icon: Building, title: "Beam & Column Repairs", description: "Concrete and steel beam repairs, column strengthening, and structural element restoration." }
    ]}
    faqs={[
      { question: "How do I know if a crack is structural?", answer: "Crack width alone cannot tell you. Stair-step or horizontal cracking, widening cracks, distortion and sticking openings can warrant investigation, but they do not establish a diagnosis. Arrange an assessment, particularly if changes are developing. Keep away from loose masonry or visibly unstable elements and seek urgent advice." },
      { question: "Do you work with structural engineers?", answer: "Yes. Structural engineers assess the structural problem and specify the repair where required; Romans carries out the building work to that scope. An initial site inspection helps identify the information needed, but it does not replace a formal engineering assessment or certification." },
      { question: "How long does crack stitching take?", answer: "Timing depends on the number and location of cracks, access, the specified system and any work needed to address the cause. Engineering, temporary support, curing and making good can also affect the programme. We discuss timing after reviewing the site and repair scope." },
      { question: "Will the repair be visible?", answer: "Helical bars are concealed within mortar joints and the surface is repointed or made good. We aim to match the existing mortar or render, but weathering and material differences can leave repairs visible. The proposed finish should be agreed before work starts." },
      { question: "What is helical bar stitching and how does it work?", answer: "Helical bar stitching beds stainless steel spiral bars into prepared mortar joints across a crack to reinforce the masonry. Suitability and bar layout depend on the wall and the cause of movement. Stitching alone does not resolve every underlying cause or guarantee that cracking will not recur." },
      { question: "How much does structural crack repair cost?", answer: "Cost depends on the cause, extent of damage, access, engineering, temporary support and the repair and finishing work specified. A site inspection and defined scope are needed before pricing. Ask which investigations, approvals and making-good work are included in the quote." },
      { question: "Is a rusting steel lintel dangerous?", answer: "Corrosion can weaken a steel lintel and damage the masonry above it. Rust stains, cracking or sagging warrant assessment, but visible signs cannot establish remaining capacity. Keep away from loose masonry and the area below it. Seek urgent professional advice if there is movement or a risk of falling material." }
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
