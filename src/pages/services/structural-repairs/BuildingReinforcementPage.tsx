import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ShieldCheck, Layers, Wrench, HardHat, ClipboardCheck } from 'lucide-react';

const BuildingReinforcementPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'building-reinforcement');
  return (
    <ServicePageTemplate
      title="Building Reinforcement"
      metaTitle="Sydney Building Reinforcement | Romans"
      metaDescription="Sydney building reinforcement enquiries. Assessing additional loads and planning engineered steel, masonry, concrete and foundation strengthening."
      heroImage="/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Building Reinforcement', href: '' },
      ]}
      intro={[
        "A proposed extension, new opening, heavier equipment or change of use can alter a building’s loads. Existing defects can also reduce capacity. These are reasons to obtain structural assessment; they do not mean every building needs the same reinforcement or that strengthening is always the best option.",
        "The engineer considers the whole load path, including connections and foundations. Options can include steel members, masonry reinforcement, concrete strengthening or additional foundation support. A local increase in strength can transfer loads elsewhere, so the design must account for the surrounding structure.",
        "Contact Romans to discuss the building work in an assessed reinforcement scheme. Confirm the relevant licence scope, specialist installation, design responsibilities and approvals before proceeding. A particular strengthening product or engineering standard is not evidence by itself that the complete project complies."
      ]}
      features={[
        {
          icon: ShieldCheck,
          title: "Steel members and connections",
          description: "New beams, columns or bracing can redistribute loads when designed as a system. Bearings, fixings, corrosion protection and fire requirements need consideration."
        },
        {
          icon: Layers,
          title: "Bonded strengthening",
          description: "Fibre-reinforced systems may suit some concrete elements. Substrate condition, anchorage, exposure and fire performance affect feasibility and the required specialist installation."
        },
        {
          icon: Wrench,
          title: "Masonry reinforcement",
          description: "Bars, ties or other systems can form part of a designed masonry repair. They do not remove the need to investigate movement or confirm the capacity of connected walls and foundations."
        },
        {
          icon: HardHat,
          title: "Foundation support",
          description: "Additional loads may require foundation investigation and strengthening. Method selection depends on the ground, existing footings, access and the effect on neighbouring structures."
        },
        {
          icon: ClipboardCheck,
          title: "Design coordination",
          description: "The scope should identify the engineer, relevant specialist trades and required inspection records. Permissions and occupancy arrangements are considered alongside the structural design."
        }
      ]}
      whatWeUse={[
        {
          title: "Structural steel",
          detail: "The design specifies sections, bearings and connections. Fabrication tolerances, installation access and protective finishes affect the work as much as member size."
        },
        {
          title: "Bonded fibre systems",
          detail: "System selection and substrate preparation are critical. There is no universal percentage capacity gain per layer; the engineer must assess the particular element and failure mechanisms."
        },
        {
          title: "Masonry bars and ties",
          detail: "Reinforcement and grout must suit the masonry, loads and exposure. Confirm the installation and verification requirements rather than relying on a standard bar diameter."
        },
        {
          title: "Anchors",
          detail: "Anchor type depends on substrate, edge distances, loading and installation conditions. Chemical anchors are not inherently better for every application, and existing masonry may require investigation or testing."
        },
        {
          title: "Foundation systems",
          detail: "Where underpinning or piles are proposed, confirm design, specialist responsibilities, services and installation effects. Excavation, vibration and access requirements vary with the method and site."
        }
      ]}
      processSteps={[
        {
          step: "Define the proposed change",
          detail: "Provide drawings, intended use and loading information to the engineer. Include known defects and previous alterations that could affect the structure."
        },
        {
          step: "Investigate existing capacity",
          detail: "Assess materials, connections and foundations, with testing where needed. Identify gaps in records and what must be verified before selecting a strengthening method."
        },
        {
          step: "Agree design and permissions",
          detail: "Confirm the reinforcement scheme, temporary works and required approval pathway. Define specialist installation, inspections, access and occupancy restrictions in the written scope."
        },
        {
          step: "Install and inspect",
          detail: "Qualified personnel follow the design and inspection hold points. Design changes or unsuitable concealed conditions require review before affected work continues."
        },
        {
          step: "Complete the records",
          detail: "Confirm loading and support-removal requirements and provide the agreed inspection documents. Explain maintenance, restrictions and any future changes that would require reassessment."
        }
      ]}
      faqs={[
        {
          question: "When should reinforcement be considered?",
          answer: "Obtain an assessment before adding loads, removing structural elements or changing use, and when significant defects are identified. The engineer can determine whether reinforcement is needed or whether another arrangement would address the proposed change more appropriately."
        },
        {
          question: "What is carbon fibre strengthening?",
          answer: "It uses a designed fibre-and-resin system bonded to suitable structural elements. Its contribution depends on the element, substrate and detailing. Ask about specialist installation, fire and environmental protection, inspection and limitations rather than assuming a thin layer gives a standard strength increase."
        },
        {
          question: "Does reinforcement need approval?",
          answer: "Check the proposed work with the council or certifier, including heritage or change-of-use requirements where relevant. An internal location does not by itself establish an exemption. Agree who will obtain permissions and provide the required design and inspection documents."
        },
        {
          question: "How disruptive is the work?",
          answer: "Disruption depends on access, temporary support, noise, dust, services and the affected rooms. Some stages may require areas to be vacated. Agree a site-specific access and occupancy plan rather than assuming the building can remain fully in use."
        },
        {
          question: "How long will reinforcement last?",
          answer: "Performance depends on the design, exposure, installation and maintenance, as well as future changes to the building. Request any written warranty terms and maintenance requirements. Later alterations or extra loads may need a new assessment even after strengthening is complete."
        },
        {
          question: "What affects cost and timing?",
          answer: "Investigation, design, approvals, access, specialist systems and procurement all affect the project. Ask for a quote and programme based on the actual scheme, with temporary works and inspections included and any provisional allowances or excluded trades clearly identified."
        }
      ]}
    />
  );
};
export default BuildingReinforcementPage;
