import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { PaintBucket, Layers, ShieldCheck, Droplets, Wrench } from 'lucide-react';

const ConcreteResurfacingPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'concrete-resurfacing');

  return (
    <ServicePageTemplate
      title="Concrete Resurfacing"
      metaTitle="Sydney Concrete Resurfacing | Romans"
      metaDescription="Sydney concrete resurfacing enquiries. Substrate assessment, overlay selection, texture and drainage considerations for existing concrete surfaces."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Concrete Resurfacing', href: '' },
      ]}
      intro={[
        "Resurfacing can renew the wearing surface of concrete that is suitable to retain. An overlay does not strengthen an inadequate slab or resolve every crack, moisture problem or drainage defect. Assess the existing surface and underlying condition before deciding between local repair, an overlay or replacement.",
        "Preparation and system selection matter. Existing coatings, contamination, moisture and unsound material can prevent a reliable bond. Cracks and movement joints need a planned detail, and the required thickness, falls and thresholds must be considered together.",
        "Contact Romans to discuss the intended use and finish, whether for a path, driveway, balcony or another concrete surface. Traffic, wet conditions, access and maintenance affect the specification. Samples and any required slip-resistance testing help establish an appropriate finish without promising a surface can never be slippery."
      ]}
      features={[
        {
          icon: PaintBucket,
          title: "Overlay selection",
          description: "Choose a system compatible with the substrate and intended traffic. Minimum thickness, bonding and moisture limits vary by product and must be checked for the site."
        },
        {
          icon: Layers,
          title: "Surface preparation",
          description: "Grinding or other preparation may be required after assessment. Dust controls, service protection and assessment of old coatings form part of the work plan."
        },
        {
          icon: ShieldCheck,
          title: "Texture and slip resistance",
          description: "Wet conditions, footwear and use affect the finish required. Agree a suitable specification and any testing rather than treating a textured appearance as proof of safety."
        },
        {
          icon: Droplets,
          title: "Falls and drainage",
          description: "Overlays change levels and can affect thresholds and drainage. Check falls, ponding and waterproofing interfaces before specifying the finished surface."
        },
        {
          icon: Wrench,
          title: "Cracks and joints",
          description: "Existing movement needs assessment. Some cracks can reflect through an overlay, and movement joints generally need designed continuity rather than simply being covered."
        }
      ]}
      whatWeUse={[
        {
          title: "Cementitious or resin systems",
          detail: "Different systems have different traffic, thickness and substrate requirements. Select for the actual use rather than assuming an overlay is always cheaper or more durable than replacement."
        },
        {
          title: "Bonding products",
          detail: "Primers and bonding layers must be compatible with the chosen system and prepared substrate. Moisture and contamination can affect adhesion even when the surface looks clean."
        },
        {
          title: "Crack and joint details",
          detail: "The repair plan distinguishes stable defects from continuing movement. Joint placement and compatible sealants should be coordinated with the overlay specification."
        },
        {
          title: "Finish samples",
          detail: "Samples help compare colour and texture. Large areas, existing variation and weathering can affect the final appearance; agree realistic expectations before proceeding."
        },
        {
          title: "Curing and protection",
          detail: "Traffic, water exposure and cleaning restrictions follow the specified system and conditions. A dry-looking surface does not establish readiness for vehicles or other loads."
        }
      ]}
      processSteps={[
        {
          step: "Inspect the substrate",
          detail: "Assess soundness, cracks, moisture, coatings and drainage. Identify any structural or waterproofing work needed before an overlay is considered."
        },
        {
          step: "Agree the finish",
          detail: "Confirm use, levels, texture, colour and any slip testing. Review access, disruption and the intended maintenance requirements."
        },
        {
          step: "Prepare and detail",
          detail: "Carry out suitable preparation with dust and site controls. Complete agreed crack, joint and interface work before placing the overlay."
        },
        {
          step: "Apply the system",
          detail: "Follow the specified substrate, weather and application limits. Inspect the finish and details against the agreed scope."
        },
        {
          step: "Protect before use",
          detail: "Observe curing and traffic restrictions and provide maintenance instructions. Confirm the reopening date from actual conditions and product requirements."
        }
      ]}
      faqs={[
        {
          question: "Can resurfacing repair a structurally damaged slab?",
          answer: "An overlay renews a surface; it does not establish structural capacity. The slab needs assessment if there is significant movement, deterioration or loading concern. Structural or ground repairs may be required before resurfacing becomes a suitable option."
        },
        {
          question: "Will cracks show through the new surface?",
          answer: "They may, particularly where movement continues. Assess the cause and agree crack and joint details before selecting the overlay. No finish can be promised crack-free simply because the existing surface has been filled or primed."
        },
        {
          question: "Can you provide a non-slip finish?",
          answer: "Discuss the intended use, wet conditions and applicable requirements so an appropriate texture and any testing can be specified. No surface is slip-proof in every condition; cleaning, wear, water and contaminants continue to affect performance after installation."
        },
        {
          question: "Is a balcony overlay waterproof?",
          answer: "Not necessarily. A decorative or wearing surface is different from a waterproofing system. Check the membrane, falls, joints, thresholds and drainage before resurfacing. The scope should identify any separate waterproofing work and the trades responsible for it."
        },
        {
          question: "When can the surface be used again?",
          answer: "The system, weather, thickness and intended traffic determine curing and reopening requirements. Walking and vehicle access may need different restrictions. Ask for instructions for the selected product and actual site conditions rather than a universal next-day promise."
        },
        {
          question: "How is resurfacing priced?",
          answer: "Preparation, coating removal, repairs, access, levels and finish requirements affect the quote as well as area. Ask which crack, joint and drainage work is included, and compare the assessed options before assuming resurfacing is always cheaper than replacing the slab."
        }
      ]}
    />
  );
};

export default ConcreteResurfacingPage;
