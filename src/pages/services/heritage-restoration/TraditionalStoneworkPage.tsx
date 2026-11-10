import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Hammer, Scaling, HandMetal, Compass } from 'lucide-react';

const TraditionalStoneworkPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'traditional-stonework');

  return (
    <ServicePageTemplate
      title="Traditional Stonework Methods"
      metaTitle="Sydney Traditional Stonemasonry | Romans"
      metaDescription="Sydney traditional stonework enquiries. Hand tooling, carved profiles and compatible mortar choices for assessed heritage repairs."
      heroImage="/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Traditional Stonework Methods', href: '' },
      ]}
      intro={[
        "Tool marks, joint profiles and carved details can be part of a stone building’s significance. Recording them helps a repair respect the surviving work. Traditional hand techniques may reproduce a texture or profile that a standard machine finish does not match.",
        "Method selection should consider conservation purpose, material compatibility and safety. Retaining sound original stone may be preferable to recreating it, and a modern method may be appropriate where assessed and approved. Heritage conservation does not mean automatically reproducing every historical construction practice.",
        "Contact Romans to discuss stone dressing, pointing or carved-detail repairs. The scope should establish the required craft work, samples, specialist input and installation design. Tools, workshop arrangements and particular techniques need confirmation for the project rather than assumptions about a standard service."
      ]}
      features={[
        {
          icon: Hammer,
          title: "Hand-tooled finishes",
          description: "Pitched, broached, drag-finished and other textures have distinct marks. Record the existing finish and use a sample to agree the repair."
        },
        {
          icon: Scaling,
          title: "Mortar choice",
          description: "Hot-mixed, putty-based and hydraulic lime mortars have different characteristics. Select the system from the building and repair requirements, not a claim that one is always stronger."
        },
        {
          icon: HandMetal,
          title: "Pointing profiles",
          description: "Document the surviving joint profile and evidence of earlier work. Retain sound pointing where possible and agree any reinstatement."
        },
        {
          icon: Compass,
          title: "Carved details",
          description: "Templates and measurements can guide repair or replacement of mouldings. The remaining stone, support and significance determine the appropriate extent."
        }
      ]}
      whatWeUse={[
        {
          title: "Stone and bedding",
          detail: "Select compatible stone and its bedding orientation for the intended use. Matching the original quarry, where possible, still requires material assessment."
        },
        {
          title: "Tooling samples",
          detail: "Chisels, drags and other tools create different textures. A sample helps agree appearance before a replacement block is fully dressed."
        },
        {
          title: "Profile records",
          detail: "Photographs, measurements and templates record surviving geometry. Avoid inventing missing details where evidence is insufficient; seek conservation guidance."
        },
        {
          title: "Lime handling",
          detail: "Quicklime reacts with water, releases heat and is caustic. Hot-lime work requires trained personnel and suitable controls; this page is not a mixing or handling guide."
        },
        {
          title: "Lifting and connections",
          detail: "Heavy stone needs a planned lifting system and suitable supports and fixings. Traditional tackle is not automatically safer or an alternative to engineered access planning."
        }
      ]}
      processSteps={[
        {
          step: "Survey the detail",
          detail: "Assess condition and significance, record surviving geometry and identify support or safety issues."
        },
        {
          step: "Agree the intervention",
          detail: "Compare retention, local repair and replacement with the relevant adviser. Check permissions and specialist capability before settling the scope."
        },
        {
          step: "Prepare samples",
          detail: "Compare stone, tooling, mortar and profile samples. Record the accepted appearance and any unavoidable differences."
        },
        {
          step: "Fabricate and install",
          detail: "Carry out the agreed craft work with safe handling and the specified support and connection design. Inspect relevant concealed work."
        },
        {
          step: "Protect and document",
          detail: "Provide the required curing protection and final inspection records. Explain maintenance and any continuing monitoring needs."
        }
      ]}
      faqs={[
        {
          question: "Why consider traditional methods?",
          answer: "They may help preserve characteristic tooling, joint profiles and compatible material behaviour. Their value depends on the building and repair, not age alone. The conservation approach should retain sound fabric and justify the chosen intervention."
        },
        {
          question: "What is hot-lime mortar?",
          answer: "It involves quicklime in a controlled mixing process that releases heat. Its suitability depends on specification and skilled handling; it is not universally stronger or more durable than other mortars. Do not attempt mixing from general online descriptions."
        },
        {
          question: "Can carved details be reproduced?",
          answer: "A surviving profile or reliable record may support a templated repair or replacement. Confirm the required craft capability, stone and support design for the project. Where evidence is missing, conservation advice should guide how much reconstruction is appropriate."
        },
        {
          question: "How long does hand stonework take?",
          answer: "Profile complexity, stone properties, samples, access and installation all affect timing. Fabrication and curing requirements should appear in the programme. Neither a standard number of days per piece nor a promised lifespan describes every repair."
        },
        {
          question: "Is traditional work more expensive?",
          answer: "Hand tooling and bespoke fabrication can add labour, while retaining sound material may reduce replacement work. Compare options against the same conservation and structural requirements. A fixed premium or future cost saving cannot be assumed."
        },
        {
          question: "Do listed buildings always require traditional methods?",
          answer: "Requirements depend on the listing, significance, proposed work and approval conditions. Check with the relevant authority and conservation adviser. A state or local listing alone does not specify every material or exclude all modern techniques."
        }
      ]}
    />
  );
};

export default TraditionalStoneworkPage;
