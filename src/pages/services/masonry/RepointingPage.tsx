import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Paintbrush, Eye, Clock, ShieldCheck } from 'lucide-react';

const RepointingPage = () => {
  const siblings = getSiblingServices('masonry', 'repointing');

  return (
    <ServicePageTemplate
      title="Repointing & Brick Pointing"
      metaTitle="Sydney Repointing & Brick Pointing | Romans"
      metaDescription="Repointing and tuckpointing across Sydney. Mortar repairs with compatible materials, colour and joint profiles for older and modern masonry."
      heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={[...siblings, { title: 'Heritage Restoration', href: '/services/heritage-restoration' }]}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Repointing & Brick Pointing', href: '' },
      ]}
      intro={[
        "Repointing replaces deteriorated mortar in the joints between bricks or stones. Open joints can let rain into the wall, but damp, cracking and loose masonry can have other causes. We assess the condition before deciding whether repointing alone is suitable.",
        "Sound masonry should be retained where possible. Failed mortar is carefully removed to a depth suited to the joint and repair specification, then replaced with compatible mortar. The method needs to protect the edges of the existing bricks or stone.",
        "Romans has worked on Sydney masonry since 1995. For older walls, we consider mortar strength, moisture behaviour, colour and joint profile together. Heritage requirements may also affect the repair method and whether approval is needed."
      ]}
      features={[
        {
          icon: Paintbrush,
          title: "Mortar colour and texture",
          description: "Sand, binder and joint finish all affect the appearance. A sample patch helps compare the proposed repair with the existing wall after curing."
        },
        {
          icon: Eye,
          title: "Joint profiles",
          description: "Flush, raked, struck, weathered and tuckpointed finishes require different detailing. The agreed profile should suit the wall and any heritage requirements."
        },
        {
          icon: Clock,
          title: "Curing and aftercare",
          description: "Fresh mortar needs protection suited to the mix and weather. We discuss curing arrangements and maintenance rather than promise a fixed service life."
        },
        {
          icon: ShieldCheck,
          title: "Heritage repair methods",
          description: "For listed buildings, confirm approvals and any heritage-adviser requirements before removing mortar. Work should follow the approved repair scope where one applies."
        }
      ]}
      whatWeUse={[
        {
          title: "Lime-rich mortar where compatible",
          detail: "Lime-rich mixes may suit older soft brick and stone. The existing materials and exposure guide selection, not an assumed construction-date cutoff."
        },
        {
          title: "Cement-containing mortar where appropriate",
          detail: "Some masonry suits a cement-containing mix. Strength, permeability and compatibility matter; a structural or conservation specification may be needed."
        },
        {
          title: "Sand and sample patches",
          detail: "Sand colour and grading influence the result. Compare the cured sample with the existing joints and agree the finish before wider work."
        },
        {
          title: "Careful joint preparation",
          detail: "Hand tools can help protect fragile masonry. The removal method and depth should suit the joint condition without unnecessarily damaging sound material."
        },
        {
          title: "Curing protection",
          detail: "Protection against rapid drying, rain and temperature extremes is selected for the mortar and site conditions. Curing time varies with the mix and weather."
        }
      ]}
      processSteps={[
        {
          step: "Assess the joints and surrounding wall",
          detail: "Check mortar loss, brick condition, damp, salts, movement and previous repairs. Loose or moving masonry may require a separate structural assessment."
        },
        {
          step: "Agree the repair and sample",
          detail: "Define the areas to repoint, mortar and joint profile. Allow suitable time to review the sample, especially where heritage approval is involved."
        },
        {
          step: "Prepare and refill the joints",
          detail: "Remove failed mortar carefully, clean and prepare the joints, then compact compatible replacement mortar in accordance with the repair method."
        },
        {
          step: "Finish, protect and review",
          detail: "Tool the joints, clean the faces without damaging them and protect the new mortar during curing. Agree any inspection or aftercare arrangements in the scope."
        }
      ]}
      faqs={[
        {
          question: "How do I know if my wall needs repointing?",
          answer: "Missing or crumbling joints, gaps around bricks and weathered mortar are reasons to arrange an inspection. Damp patches and salt deposits can have several causes. Do not pull out loose masonry or probe an unstable wall to test it."
        },
        {
          question: "What is the difference between repointing and tuckpointing?",
          answer: "Repointing replaces defective mortar joints. Tuckpointing is a decorative finish using a narrow contrasting line to give the appearance of fine, regular joints. Romans carries out both; the existing finish and repair needs guide the choice."
        },
        {
          question: "Do you use cement or lime mortar?",
          answer: "The mix depends on the brick or stone, existing mortar, exposure and any repair specification. Hard, incompatible mortar can damage softer masonry. Building age is a useful clue, but it is not enough on its own to choose the mix."
        },
        {
          question: "How long does repointing take?",
          answer: "Area, joint depth, access, preparation and curing affect the programme. Scaffolding and heritage approvals can add separate stages. Timing is discussed after assessing the wall and the proposed mortar."
        },
        {
          question: "What does repointing cost?",
          answer: "Cost depends on the amount of mortar removal, condition of the masonry, access, profile and chosen mix. Tuckpointing and detailed heritage work involve different labour from straightforward joint replacement. The quote should separate any brick repairs or access equipment."
        },
        {
          question: "How long will the repointing last?",
          answer: "Service life depends on the mortar compatibility, preparation, curing, exposure and underlying wall condition. A fixed lifespan cannot be promised. Continuing movement or water entry needs attention alongside the joint repair."
        }
      ]}
    />
  );
};

export default RepointingPage;
