import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ClipboardCheck, Building, Shield, FileCheck, Scale } from 'lucide-react';

const ComplianceUpgradesPage = () => {
  const siblings = getSiblingServices('remedial-building', 'compliance-upgrades');

  return (
    <ServicePageTemplate
      title="Building Compliance Upgrades"
      metaTitle="Building Compliance Upgrades Sydney | Romans"
      metaDescription="Sydney building compliance upgrades by Minas Romanakis. BCA compliance, fire safety, balustrade replacement, structural retrofit. Certifier-coordinated."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Building Compliance Upgrades', href: '' },
      ]}
      intro={[
        'Building codes evolve. The BCA (Building Code of Australia) is updated annually, and what passed 20 years ago often does not meet current standards. Fire-rating requirements have tightened. Balustrade height and loading rules have changed. Structural seismic and wind loading codes have been revised. Accessibility requirements are stricter. When council orders an upgrade, an insurer demands compliance for renewal, or a building changes use, the existing fabric usually needs work to come up to current code.',
        'We carry out compliance upgrades on older buildings, change-of-use conversions, and buildings flagged by inspections or insurers. Fire-rating walls and floors to FRL 60/60/60 or higher. Balustrade replacement to current AS 1170 height and loading standards. Structural retrofitting to AS 1170.4 seismic standards for older masonry. Waterproofing reinstatement to current AS 4654 standards. Accessibility upgrades to AS 1428.1.',
        'Compliance work is engineer and certifier driven. The engineer assesses what is non-compliant and designs the upgrade. The certifier confirms the upgrade meets the BCA on completion. We coordinate with both and execute the work to the engineered scope. All documentation captured for the council file, insurance renewal, or future owner due diligence.',
      ]}
      features={[
        {
          icon: ClipboardCheck,
          title: 'Fire safety upgrades',
          description:
            'Fire-rated walls, fire doors, compartmentation, fire-rated structural protection, intumescent coatings. Brings buildings up to current Fire Safety Order requirements.',
        },
        {
          icon: Building,
          title: 'Balustrade compliance',
          description:
            'Non-compliant balustrades replaced or retrofitted to meet AS 1170 loading and AS 1428 height standards. Glass, steel or masonry options to suit heritage requirements.',
        },
        {
          icon: Shield,
          title: 'Structural upgrades',
          description:
            'Walls, floors, connections reinforced to meet current AS 3600 and AS 3700 structural standards. Concealed steel and helibar reinforcement preserves heritage fabric.',
        },
        {
          icon: Scale,
          title: 'BCA compliance',
          description:
            'Full BCA upgrades for change-of-use, council orders, or insurance requirements. Coordinated with certifier to confirm compliance on completion.',
        },
        {
          icon: FileCheck,
          title: 'Documentation',
          description:
            'Engineer certificates, BCA compliance certificates, fire safety statements, as-built records. Bundled for council file, insurance renewal and future due diligence.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Fire-rated systems (Boral, Knauf, Promat)',
          detail:
            'Fire-rated plasterboard, fire-rated mortar, fire-rated mineral wool, intumescent paints and sealants. Selected to achieve the required Fire Resistance Level (FRL) per AS 1530.4.',
        },
        {
          title: 'Compliant balustrade systems',
          detail:
            'Glass balustrades to AS 1288 (laminated safety glass), stainless steel balustrades to AS 1170 loading, heritage-style cast iron balustrades for listed buildings. All to current height (1000mm or 1200mm depending on application).',
        },
        {
          title: 'Concealed structural reinforcement',
          detail:
            'Concealed steel beams in floor and ceiling voids. Helical bars in masonry bed joints. Carbon fibre bonded to hidden concrete faces. Preserves visible heritage fabric while bringing structural performance to current standards.',
        },
        {
          title: 'Accessibility components',
          detail:
            'Ramps, handrails, tactile indicators, accessible thresholds. To AS 1428.1 requirements. Designed to integrate with existing building fabric where heritage constraints apply.',
        },
        {
          title: 'Waterproofing systems',
          detail:
            'Acrylic, polyurethane or epoxy waterproofing membranes to AS 4654 standards. Selected for the specific application: balconies, planters, parapets, basement walls. 10 to 20 year manufacturer warranties.',
        },
        {
          title: 'Engineer and certifier coordination',
          detail:
            'Structural engineer designs upgrades. Fire safety engineer for fire compliance scopes. Building certifier reviews and signs off on completion. All three coordinated throughout the project.',
        },
      ]}
      processSteps={[
        {
          step: 'Compliance assessment',
          detail:
            'Engineer and certifier review the existing building against current BCA. Specific non-compliant items identified. Upgrade scope drafted. For council orders, the order specifies what is required.',
        },
        {
          step: 'Design and approval',
          detail:
            'Engineer designs the upgrade. Heritage consultant signs off if listed. Council approval prepared if scope requires it (most compliance upgrades fall under Complying Development Certificate).',
        },
        {
          step: 'Quote and committee approval',
          detail:
            'Itemised quote per upgrade item. For strata buildings, the quote goes to the committee for special levy approval. Variations agreed before work starts.',
        },
        {
          step: 'Site setup',
          detail:
            'Access and protection set up. Tenant notification and access arrangements made. Site safety plan in place. Engineer attends pre-start meeting.',
        },
        {
          step: 'Execute upgrades',
          detail:
            'Each upgrade item completed to engineer scope. Engineer site inspections at key milestones. Certifier inspections at completion of each major element. Photo documentation throughout.',
        },
        {
          step: 'Certification and documentation',
          detail:
            'Certifier issues compliance certificate on completion. Fire safety statement issued if relevant. Engineer issues structural completion certificate. Documentation bundled for owner, strata, council, insurer.',
        },
      ]}
      faqs={[
        {
          question: 'Why would my building need compliance upgrades?',
          answer:
            'Common triggers: council order following inspection, insurer requirement for renewal, change of use (residential to commercial, single dwelling to apartments), strata defect rectification revealing compliance gaps, sale condition where the buyer\'s due diligence flagged issues, or a major renovation that triggers BCA upgrade requirements for the whole building.',
        },
        {
          question: 'Do you handle the certifier process?',
          answer:
            'Yes. We coordinate with building certifiers (Certifier 1, Certifier 2 etc) throughout the project. Engineer scope first, certifier reviews the proposed work for BCA compliance, certifier inspections during construction at agreed milestones, certifier issues compliance certificate on completion. We work with the certifier of the owner\'s choice or recommend one we work with regularly.',
        },
        {
          question: 'How disruptive are compliance upgrades?',
          answer:
            'Depends on the scope. Some upgrades (fire-rated linings inside existing walls, additional reinforcement) can be done with minimal disruption. Others (balustrade replacement, structural seismic retrofit) require more access to occupied areas. We plan around tenant access where possible. For commercial properties we usually work outside business hours.',
        },
        {
          question: 'What does a fire safety upgrade involve?',
          answer:
            'Typical scope: bringing existing walls and floors up to required FRL (Fire Resistance Level) using fire-rated linings, sealing penetrations with fire-rated mortar or sealant, installing fire doors at compartment boundaries, applying intumescent paint to exposed structural steel where required, and removing combustible cladding where flagged. Each project is engineer-designed to meet the specific Fire Safety Order or building requirement.',
        },
        {
          question: 'How long do compliance upgrades take?',
          answer:
            'A single non-compliant balustrade replacement: 1 to 2 weeks. A typical strata compliance upgrade package (multiple items): 6 to 16 weeks. Major BCA upgrade across a small commercial building: 12 to 32 weeks. Council approval and certifier coordination add 8 to 16 weeks at the front of significant scopes.',
        },
        {
          question: 'What does a compliance upgrade cost?',
          answer:
            'Highly variable. Balustrade replacement on a residential balcony: 4000 to 12,000 dollars. Single fire-rated wall upgrade: 8000 to 25,000 dollars. Full BCA compliance upgrade for change of use: 60,000 to 350,000 dollars or more. Engineering and certifier fees: 5 to 12 percent of construction cost. Fixed quote after engineer scope.',
        },
      ]}
    />
  );
};

export default ComplianceUpgradesPage;
