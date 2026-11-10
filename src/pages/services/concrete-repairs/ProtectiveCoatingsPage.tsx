import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Droplets, ShieldCheck, Paintbrush, Landmark, Search } from 'lucide-react';

const ProtectiveCoatingsPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'protective-coatings');

  return (
    <ServicePageTemplate
      title="Protective Stone Coatings"
      metaTitle="Sydney Protective Coatings | Romans"
      metaDescription="Sydney protective coating enquiries for masonry and concrete. Substrate compatibility, moisture assessment, trial areas and maintenance requirements."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Protective Stone Coatings', href: '' },
      ]}
      intro={[
        "Protective treatments can change how masonry or concrete responds to rain, contaminants or graffiti. Their suitability depends on the material, exposure and existing condition. Some surfaces are best left uncoated, particularly where a treatment could impede drying or affect heritage fabric.",
        "Investigate moisture and salts before choosing a product. A coating cannot repair loose masonry, restore lost structural capacity or remove a concealed source of water. Compatibility includes vapour movement, adhesion, appearance and how the treatment will age or be removed.",
        "Contact Romans to discuss whether a treatment is appropriate for the assessed surface. Water repellents, anti-carbonation coatings and anti-graffiti systems serve different purposes. Trial areas, specialist advice and heritage permissions may be needed before treating a whole facade."
      ]}
      features={[
        {
          icon: Droplets,
          title: "Water repellents",
          description: "Some penetrating products reduce liquid water uptake while allowing drying. Suitability depends on the substrate and moisture mechanism; they do not replace drainage or crack repairs."
        },
        {
          icon: ShieldCheck,
          title: "Concrete protection",
          description: "An anti-carbonation or other protective system may form part of a concrete repair plan. It must suit existing contamination, moisture and exposure rather than being applied automatically."
        },
        {
          icon: Paintbrush,
          title: "Anti-graffiti systems",
          description: "Sacrificial and durable systems have different cleaning and renewal needs. Test appearance and cleaning compatibility on the actual substrate before selecting one."
        },
        {
          icon: Landmark,
          title: "Heritage surfaces",
          description: "Original finishes and stone may be harmed or visually altered by coating. Seek conservation advice and confirm any approval requirements before changing the surface."
        },
        {
          icon: Search,
          title: "Trial and inspection",
          description: "A small trial can reveal colour, sheen and application effects, but longer-term performance still depends on conditions. Agree inspection and maintenance rather than a fixed lifespan promise."
        }
      ]}
      whatWeUse={[
        {
          title: "Compatible products",
          detail: "Select products against the identified problem and substrate. Manufacturer guidance and relevant testing inform the specification; a breathable label alone does not establish suitability."
        },
        {
          title: "Preparation methods",
          detail: "Cleaning or coating removal must avoid damaging the retained surface. Assess hazardous old coatings and dust risks before abrasive preparation."
        },
        {
          title: "Application conditions",
          detail: "Moisture, temperature, weather and previous treatments affect adhesion or penetration. Follow the chosen system’s limits and confirm the surface is ready."
        },
        {
          title: "Sample areas",
          detail: "Check colour, sheen, texture and any intended cleaning method in an agreed location. Keep records so the approved sample can guide the wider work."
        },
        {
          title: "Maintenance plan",
          detail: "Document cleaning methods, inspection and renewal needs. Ask for any written product terms and exclusions; protection is not maintenance-free."
        }
      ]}
      processSteps={[
        {
          step: "Investigate the surface",
          detail: "Assess material, condition, moisture sources and previous treatments. Identify repair work needed before considering protection."
        },
        {
          step: "Select or decline treatment",
          detail: "Compare suitable systems and the option of leaving the surface uncoated. Confirm heritage advice, permissions and any specialist specification required."
        },
        {
          step: "Trial and agree",
          detail: "Apply a trial where appropriate and review appearance and compatibility. Agree the intended outcome and limitations in the scope."
        },
        {
          step: "Prepare and apply",
          detail: "Use the specified preparation and application conditions, with suitable site and environmental controls. Protect adjacent materials and occupants."
        },
        {
          step: "Inspect and maintain",
          detail: "Check the completed treatment against the scope and provide cleaning and maintenance guidance. Plan future inspection based on the exposure and system."
        }
      ]}
      faqs={[
        {
          question: "Should every restored facade be coated?",
          answer: "No. The material, moisture behaviour, significance and exposure determine whether a coating is useful or harmful. Repairing water paths and maintaining sound masonry may be preferable. Ask why a treatment is proposed and what evidence supports its suitability."
        },
        {
          question: "Can a coating solve rising damp?",
          answer: "A surface coating does not establish or remove the source of rising moisture. Some treatments can hinder drying or conceal salts and deterioration. Investigate the moisture mechanism and wall construction before choosing any surface protection."
        },
        {
          question: "Will the stone look the same afterwards?",
          answer: "Treatments can change colour, sheen and wetting behaviour, sometimes unevenly. Use an agreed trial area to assess appearance before wider application. Neither an invisible finish nor a uniform result across differently weathered material should be assumed."
        },
        {
          question: "Is a breathable product safe for heritage masonry?",
          answer: "The label alone is not enough. Compatibility depends on the stone or brick, mortar, salts, previous treatments and the proposed application. Seek conservation advice and check permissions where relevant, including whether leaving the surface uncoated is preferable."
        },
        {
          question: "How long does a coating last?",
          answer: "Performance varies with the product, preparation, exposure, cleaning and wear. Ask for the manufacturer’s written requirements and any warranty conditions that apply to the actual installation. Plan inspection and maintenance rather than relying on a universal service-life claim."
        },
        {
          question: "What affects cost and timing?",
          answer: "Assessment, trials, access, cleaning, repairs and weather-sensitive application can all affect the work. Ask for a quote that distinguishes preparation from coating and includes maintenance information. A price per area alone may omit substantial substrate or access work."
        }
      ]}
    />
  );
};

export default ProtectiveCoatingsPage;
