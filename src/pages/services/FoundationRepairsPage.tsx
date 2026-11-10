import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Home, Shield, Wrench, Gauge, HardHat, Shovel } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const FoundationRepairsPage = () => {
  const childServices = getSubServiceRoutes('foundation-repairs');

  return (
  <ServicePageTemplate
    title="Foundation Repairs"
    metaTitle="Sydney Foundation Repairs | Romans"
    metaDescription="Underpinning, restumping, settlement stabilisation and foundation crack repairs across Sydney by Minas Romanakis. Project-specific repair scopes."
    heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
    intro={[
      "Cracked walls, sticking doors and sloping floors can indicate movement, but they do not prove that a foundation has failed. An assessment should consider the footings, ground conditions, drainage and the pattern of change before deciding whether foundation repairs are needed.",
      "Romans carries out underpinning, restumping, foundation crack repairs and stabilisation across the Hawkesbury, Western Sydney and wider Sydney. We work on sandstone footings, brick piers and concrete foundations, with repair design informed by structural engineering advice.",
      "Foundation work needs a project-specific plan for excavation, temporary support and the repair sequence. The scope should also address the source of movement and any monitoring or maintenance required. No repair method can promise to stop all future ground or building movement."
    ]}
    features={[
      { icon: Shovel, title: "Underpinning", description: "Mass concrete and screw pile underpinning to stabilise foundations that have settled or moved. Staging and temporary support follow the project-specific design." },
      { icon: Home, title: "Restumping", description: "Replacement of deteriorated timber or brick stumps with new concrete or steel adjustable stumps. Replacement and level adjustments follow the assessed building condition and repair design." },
      { icon: Wrench, title: "Foundation Crack Repairs", description: "Epoxy injection and structural repair of cracked foundations. The repair method depends on the crack cause, movement and engineering requirements." },
      { icon: Gauge, title: "Foundation Assessments", description: "On-site inspection of foundation condition. We review visible movement, cracking and moisture; engineering and ground investigations establish capacity where required." },
      { icon: HardHat, title: "Retaining Wall Foundations", description: "Repair and replacement of failed retaining wall footings. Drainage and engineering requirements are addressed in the repair design." },
      { icon: Shield, title: "Pier & Beam Repairs", description: "Repair and replacement of damaged piers, bearers, and joists. Concrete, steel, or timber depending on the building type." }
    ]}
    faqs={[
      { question: "How do I know if my foundation needs repair?", answer: "Stair-step cracks, sticking doors, sloping floors and gaps around walls can warrant an assessment, especially if they are changing. None of these signs alone confirms foundation failure. Seek urgent professional advice for sudden movement or visible instability, and keep away from affected areas." },
      { question: "What is underpinning and when is it needed?", answer: "Underpinning strengthens or extends the support beneath existing footings. It may be appropriate where an assessment identifies inadequate support or settlement, but not every crack needs underpinning. The engineer determines a suitable design using the building condition and ground information; drainage or other causes may also need attention." },
      { question: "How long does underpinning take?", answer: "Timing depends on the design, number of locations, excavation access, ground conditions, temporary support and curing requirements. Investigations, approvals and making good can add time. A programme should be agreed after the engineering scope and site constraints are understood." },
      { question: "Will I need to move out during foundation repairs?", answer: "That depends on the building condition, repair sequence and temporary-support requirements. Some projects can be staged around occupants; others need restricted access or temporary relocation. Confirm the occupancy plan with the engineer and building team before work begins rather than assuming the home will remain safe to occupy." },
      { question: "How much does underpinning cost?", answer: "Cost depends on the engineer’s design, footing depth, ground conditions, number of underpinning locations, access and temporary works. Investigation, drainage repairs and making good may also be needed. A project-specific quote should distinguish construction costs from engineering, approvals and other exclusions." },
      { question: "Do I need a structural engineer for underpinning?", answer: "A structural engineer should assess the problem and design the underpinning. Agree the required inspections and certification with the engineer and relevant approval authority before work starts. Romans carries out the building work to the specified design and can work with the engineer you engage." },
      { question: "Will my insurance cover underpinning?", answer: "Cover depends on your policy, the cause of damage and the insurer’s assessment. Ask your insurer about cover and any evidence or authorisation needed before commissioning repairs. A building quote or engineering report can describe the work, but does not establish whether an insurance claim will be accepted." }
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
