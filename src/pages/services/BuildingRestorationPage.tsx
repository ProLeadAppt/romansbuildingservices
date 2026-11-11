import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Building, Layers, Wrench, HardHat, Shield, Hammer } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const BuildingRestorationPage = () => {
  const childServices = getSubServiceRoutes('building-restoration');

  return (
  <ServicePageTemplate
    title="Building Restoration"
    metaTitle="Sydney Building Restoration | Romans"
    metaDescription="Facade repairs, render replacement, structural upgrades and full restorations across Sydney by Minas Romanakis. Fix the cause, restore the finish."
    heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
    intro={[
      "Building restoration repairs deteriorated facades, render, brickwork, balconies and parapets. Romans works with homeowners, strata managers and commercial property owners across the Hawkesbury, Western Sydney and wider Sydney to define what needs repair and what can be retained.",
      "Cracked finishes can hide water entry, corrosion or movement. We inspect the visible damage and surrounding building elements before proposing local repairs, render replacement or a wider restoration scope. Structural concerns need appropriate engineering input.",
      "The work should suit the building, not just refresh its appearance. Material selection, access, protection and staging are considered together, with heritage advice where relevant and the agreed finish set out before repairs begin."
    ]}
    features={[
      { icon: Building, title: "Facade Restoration", description: "Full facade strip-back and restoration. Render removal, brick repairs, repointing, and new finishes applied properly." },
      { icon: Layers, title: "Render Replacement", description: "Removal of failed or cracked render and replacement with the correct system. Sand and cement, acrylic, or lime render matched to the building." },
      { icon: Wrench, title: "Structural Upgrades", description: "Lintel replacement, crack stitching, and reinforcement of structural elements. Done to engineer specifications." },
      { icon: HardHat, title: "Balcony & Parapet Repairs", description: "Concrete and masonry repairs to balconies, parapets, and rooflines. Waterproofing included where needed." },
      { icon: Shield, title: "Protective Coatings", description: "Anti-carbonation coatings, water repellents, and protective finishes to guard against future damage." },
      { icon: Hammer, title: "Brickwork Restoration", description: "Tuckpointing, repointing, and brick replacement. Colour-matched mortar and sourced bricks for a clean finish." }
    ]}
    faqs={[
      { question: "How long does a full building restoration take?", answer: "The programme depends on the building size, condition, access and repair scope. Scaffolding, approvals, weather, curing and defects uncovered during work can affect timing. We discuss a project-specific programme after inspection and explain any assumptions that could change it." },
      { question: "Do you work on strata buildings?", answer: "Yes. We work with strata managers and owners corporations on building restoration. The scope should set out access, staging, resident communication, relevant insurance and site-safety documentation, and payment terms so the committee can review the proposed work." },
      { question: "Can you match the existing render or finish?", answer: "We match colour, texture and profile to the existing finish where practical, including roughcast, bagged and float-finished surfaces. Material availability and weathering can affect the match. On heritage buildings, the render system must also be compatible with the original fabric and any conservation requirements." },
      { question: "Will scaffolding be needed?", answer: "Scaffolding or other suitable access equipment is often needed for facade work. The choice depends on height, site access and the repair scope. Footpath occupation may need a permit. The quote should identify access arrangements, permit responsibilities and any exclusions before work begins." },
      { question: "What is the difference between restoration and renovation?", answer: "Restoration repairs existing building fabric and retains or reinstates its character. Renovation changes a building for a different layout, finish or use. A project can involve both. Heritage status may affect the materials, methods and approvals for either type of work." },
      { question: "How much does a full facade restoration cost?", answer: "Cost depends on the facade area, depth of deterioration, access, material matching, structural repairs, waterproofing and finishes. Engineering and approval requirements may also affect the scope. We quote after inspection and identify assumptions and exclusions, including how newly exposed defects would be handled." },
      { question: "Do we need to move out during restoration work?", answer: "Occupancy depends on the condition of the building and the planned work. Some external repairs can be staged around occupants; other work may require restricted areas or temporary relocation. Access, emergency exits, falling-material risks, noise and dust need to be assessed before deciding whether people can remain." }
    ]}
    galleryImages={[
      "/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp",
      "/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp",
      "/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
    ]}
    childServices={childServices}
    breadcrumbs={[
      { label: 'Services', href: '/services' },
      { label: 'Building Restoration', href: '' },
    ]}
  />
  );
};

export default BuildingRestorationPage;
