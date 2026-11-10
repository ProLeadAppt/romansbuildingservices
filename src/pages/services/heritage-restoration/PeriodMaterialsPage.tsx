import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Package, Search, Truck, CheckCircle } from 'lucide-react';

const PeriodMaterialsPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'period-materials');

  return (
    <ServicePageTemplate
      title="Period-Appropriate Materials"
      metaTitle="Sydney Period Materials Sourcing | Romans"
      metaDescription="Sydney period-material enquiries. Assessing compatible brick, stone, mortar and fittings for heritage repair scopes."
      heroImage="/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Period-Appropriate Materials', href: '' },
      ]}
      intro={[
        "Material selection is central to heritage repair. A replacement needs to work with the retained fabric as well as look appropriate. Brick dimensions, stone bedding, mortar strength and the exposure of metal connections can matter as much as colour.",
        "The original source may be unknown, closed or unable to supply a matching product. New and reclaimed alternatives need assessment for condition, compatibility and provenance. A sample is useful evidence, but not proof that the material will behave exactly like the original.",
        "Contact Romans about material requirements for a proposed repair. Confirm whether identification, sample sourcing, supply-only assistance or installation can be included in the scope. Supplier availability, quantities, lead times and any heritage requirements should be established before committing to an order."
      ]}
      features={[
        {
          icon: Search,
          title: "Identify existing fabric",
          description: "Use records, close inspection and testing where needed. Visual inspection alone cannot always establish quarry source, age or mortar composition."
        },
        {
          icon: Package,
          title: "Compare replacements",
          description: "Assess new and reclaimed options for dimensions, condition and performance. Confirm legitimate sourcing and any limitations."
        },
        {
          icon: Truck,
          title: "Check availability",
          description: "Confirm quantity, fabrication, transport and storage requirements with the actual supplier before setting the programme."
        },
        {
          icon: CheckCircle,
          title: "Agree samples",
          description: "Record the accepted sample and specification, with conservation or authority review where required. Sample agreement is not a general heritage certification."
        }
      ]}
      whatWeUse={[
        {
          title: "Replacement stone",
          detail: "Compare bedding, texture, strength and moisture behaviour as well as colour. Quarry names or geographic origin alone do not establish a match."
        },
        {
          title: "Brick samples",
          detail: "Reclaimed bricks may have hidden damage or contamination. New manufacture may differ in size and absorption; assess suitability for the intended repair."
        },
        {
          title: "Lime and mortar components",
          detail: "Choose binder, aggregate and any pigment through an appropriate specification. Natural hydraulic lime grades are not interchangeable, and building age alone does not select one."
        },
        {
          title: "Traditional lime materials",
          detail: "Quicklime and hot-mixed mortar require trained handling and suitable controls because the reaction releases heat and the material is caustic. Do not attempt mixing from a website description."
        },
        {
          title: "Metal fittings",
          detail: "Select metal grade, protective system and connections for the design and exposure. Stainless steel can be appropriate, but is not the only possible choice or a guarantee against all corrosion."
        }
      ]}
      processSteps={[
        {
          step: "Document the need",
          detail: "Identify the repair, existing materials and quantities, including any conservation requirements and investigation still needed."
        },
        {
          step: "Specify performance",
          detail: "Agree dimensions, compatibility, finish and any test requirements before comparing suppliers."
        },
        {
          step: "Review samples",
          detail: "Compare options in context and record the accepted sample and limitations before bulk purchase."
        },
        {
          step: "Confirm supply",
          detail: "Check actual availability, fabrication, delivery, handling fees and responsibility for unsuitable or damaged material."
        },
        {
          step: "Store and record",
          detail: "Protect materials to supplier requirements and retain specifications and source records for installation and future maintenance."
        }
      ]}
      faqs={[
        {
          question: "What if the original stone is unavailable?",
          answer: "A compatible alternative or suitable reclaimed stone may be considered after assessment. Compare physical properties as well as appearance, and seek conservation advice where needed. An exact replacement or acceptable source cannot be guaranteed in advance."
        },
        {
          question: "Who approves replacement materials?",
          answer: "Requirements depend on the property, work and approval conditions. Check with the relevant authority and conservation adviser, then agree what samples and specifications are needed. A supplier’s description of a heritage product is not formal approval."
        },
        {
          question: "Which lime should be used?",
          answer: "The wall, exposure, original mortar and repair purpose determine the specification. Different binders set and cure differently. Ask the responsible adviser to confirm the mix rather than choosing a lime grade solely by the building’s period."
        },
        {
          question: "Can mortar colour be matched exactly?",
          answer: "Aggregate, binder, pigments, curing and weathering all affect colour. Trial areas help establish an acceptable match once appropriately cured. Exact colour cannot be guaranteed, and altering pigment does not replace checking the mortar’s physical compatibility."
        },
        {
          question: "What does sourcing cost?",
          answer: "Costs depend on investigation, samples, quantity, fabrication and transport, as well as any sourcing service agreed. Ask for a written breakdown of material and handling charges. No standard markup or supplier price is assumed."
        },
        {
          question: "Can I ask about materials without installation?",
          answer: "Yes, describe the material and intended use so availability and the service scope can be discussed. Confirm whether supply-only assistance is offered for the enquiry, and who is responsible for specification, ordering and installation suitability."
        }
      ]}
    />
  );
};

export default PeriodMaterialsPage;
