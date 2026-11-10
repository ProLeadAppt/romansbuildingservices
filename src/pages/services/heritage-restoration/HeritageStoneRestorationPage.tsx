import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Gem, Search, Hammer, Sparkles } from 'lucide-react';

const HeritageStoneRestorationPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'heritage-stone');

  return (
    <ServicePageTemplate
      title="Heritage Stone Restoration"
      metaTitle="Sydney Heritage Stone Restoration | Romans"
      metaDescription="Sydney heritage stone restoration enquiries. Condition surveys, cleaning trials, local stone repairs and compatible replacements."
      heroImage="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Heritage Stone Restoration', href: '' },
      ]}
      intro={[
        "Historic stonework can show surface erosion, salt damage, open joints or cracks associated with corroding embedded metal. The repair decision depends on the stone’s remaining condition, structural role and exposure. Damage depth alone is not enough to choose between a patch, an insert and replacement.",
        "Retaining sound stone is an important starting point. Where repair is needed, options may include compatible repair mortar, a stone insert or a replacement block. Bedding orientation, connections and the cause of deterioration matter as much as the visible match.",
        "Contact Romans to discuss the stonework and any existing conservation or engineering advice. Cleaning and replacement samples can help define a suitable scope. Keep people away from loose or overhead stone; do not tap, pull or climb onto suspect elements to inspect them."
      ]}
      features={[
        {
          icon: Gem,
          title: "Stone condition",
          description: "Assess individual blocks, joints and decorative details, including their support and any concealed metal where investigation is justified."
        },
        {
          icon: Search,
          title: "Compatible replacement",
          description: "Compare stone properties, bedding, texture and colour. The original quarry may be unknown or unavailable, and an exact match is not assured."
        },
        {
          icon: Hammer,
          title: "Tooling and profiles",
          description: "Record surviving finishes and mouldings before specifying repairs. Hand tooling may help reproduce texture where appropriate."
        },
        {
          icon: Sparkles,
          title: "Cleaning trials",
          description: "Decide whether cleaning is needed, then trial the least damaging suitable method. Some patina and staining may be better retained."
        }
      ]}
      whatWeUse={[
        {
          title: "Stone samples",
          detail: "Assess physical compatibility and appearance before fabrication. Confirm source, quantity, finish and availability with the supplier."
        },
        {
          title: "Local repair systems",
          detail: "Repair mortar or a stone insert must suit the substrate and defect. Follow the design and product limits rather than a universal depth threshold."
        },
        {
          title: "Bedding and joint mortar",
          detail: "Select mortar for the stone, construction and exposure. Overly strong or poorly matched repairs can contribute to deterioration."
        },
        {
          title: "Connections and supports",
          detail: "Investigate corroded cramps or other fixings before removal. Their structural function and replacement sequence need assessment; not every visible metal item can simply be extracted."
        },
        {
          title: "Surface treatments",
          detail: "Water repellents or other treatments need a clear purpose and trials. Salt and moisture conditions can make treatment unsuitable, especially in strongly exposed locations."
        }
      ]}
      processSteps={[
        {
          step: "Survey and prioritise",
          detail: "Record defects and safety concerns. Identify where structural or conservation advice and closer inspection are needed."
        },
        {
          step: "Agree cleaning trials",
          detail: "Assess the material and deposits, then test an appropriate method in an agreed area. Protect adjacent fabric and manage residues."
        },
        {
          step: "Select repairs and samples",
          detail: "Compare retention, local repair and replacement. Agree stone, mortar, profiles and any required permissions."
        },
        {
          step: "Repair with support",
          detail: "Carry out the specified removal, connections and installation sequence. Refer concealed defects before extending the work."
        },
        {
          step: "Protect and review",
          detail: "Cure and protect the work to specification, inspect the completed repairs and document maintenance needs. New stone may remain visibly different."
        }
      ]}
      faqs={[
        {
          question: "How should heritage stone be cleaned?",
          answer: "Assess the stone and the material to be removed first. A controlled trial may consider steam, poultices or other specialist methods. Avoid aggressive cleaning or assuming that one chemical or pressure setting is safe for every surface."
        },
        {
          question: "Can an eroded face be repaired?",
          answer: "Sometimes, but the remaining stone, exposure and structural role govern the choice. A compatible mortar repair or stone insert may suit local damage. There is no universal erosion-depth cutoff that determines a safe or durable repair."
        },
        {
          question: "How often should stonework be checked?",
          answer: "Inspection frequency depends on condition, exposure and consequences of failure. Ask for a maintenance plan suited to the building. New cracking, loose material or changes above occupied areas warrant earlier assessment rather than waiting for a routine interval."
        },
        {
          question: "What is a stone insert or dutchman repair?",
          answer: "It replaces a damaged part of a stone with a shaped piece of compatible stone while retaining sound material. Its dimensions, bedding and any fixings depend on the assessment. It is not suitable for every damaged block."
        },
        {
          question: "Will replacement stone match?",
          answer: "Samples help compare texture, grain, colour and tooling, but new and weathered stone may remain visibly different. No fixed number of winters guarantees blending. Agree the accepted appearance and limitations before the replacement is fabricated."
        },
        {
          question: "What approvals are needed?",
          answer: "Check the property’s controls and proposed work with the council or relevant heritage authority. Agree who supplies the repair methodology, drawings and samples. Consultant review can support the process but does not itself grant formal permission."
        }
      ]}
    />
  );
};

export default HeritageStoneRestorationPage;
