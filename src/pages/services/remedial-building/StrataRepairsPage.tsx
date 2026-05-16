import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building, Users, FileCheck, Wrench, ClipboardList } from 'lucide-react';

const StrataRepairsPage = () => {
  const siblings = getSiblingServices('remedial-building', 'strata-repairs');

  return (
    <ServicePageTemplate
      title="Strata Building Repairs"
      metaTitle="Strata Building Repairs Sydney | Owners Corporations & Body Corporate | Romans Building Services"
      metaDescription="Sydney strata remedial work by Minas Romanakis. Concrete cancer, balconies, facades, carparks. Defect reports, AGM-ready quotes, staged works around tenant access."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Strata Building Repairs', href: '' },
      ]}
      intro={[
        'Strata buildings need a different approach. Repairs have to fit between the engineer scope, the AGM approval cycle, the budget the owners corporation has, and the day-to-day reality of residents living in the building. We work with strata managers, owners corporations and building managers across Sydney to get remedial work scoped, approved and executed without the usual delays.',
        'Most of our strata work is remedial concrete (concrete cancer in carparks and balcony soffits), masonry restoration (facade brickwork, parapets, retaining walls), waterproofing reinstatement, and structural repairs. We provide itemised quotes that committees can vote on at AGMs, scope documentation that satisfies remedial engineer requirements, staged works programmes that keep the building functional during repairs, and closeout documentation for the strata records.',
        'Romans has been working on strata buildings across Sydney for 30 years. Eastern Suburbs apartment blocks, Inner West art-deco blocks, North Shore Federation-era walk-ups, harbour-front modern strata, CBD commercial strata. Each one has different defect patterns and a different way of operating. The trade work is similar, the project management is what makes the difference.',
      ]}
      features={[
        {
          icon: Building,
          title: 'Common property repair',
          description:
            'Carpark soffits, balcony slabs, perimeter beams, facades, parapets, retaining walls, lobbies, stairwells, rooftop structures. Every part of common property masonry and concrete.',
        },
        {
          icon: Users,
          title: 'Strata manager liaison',
          description:
            'Direct working relationship with strata managers. Quotes prepared in committee-ready format. Progress reports for monthly meetings. Updates for owner newsletters.',
        },
        {
          icon: FileCheck,
          title: 'AGM-ready scopes',
          description:
            'Itemised quotes broken out by defect or area. Comparison tables where multiple options exist. Cost certainty so committees can vote without surprises.',
        },
        {
          icon: Wrench,
          title: 'Preventive maintenance plans',
          description:
            '10-year capital works programmes mapping the upcoming repair needs. Helps committees plan special levies or maintenance fund balance.',
        },
        {
          icon: ClipboardList,
          title: 'Defect reports',
          description:
            'Detailed defect reports with photos, location, severity rating, repair method, cost estimate and recommended timeline. Suitable for engineer review and AGM presentation.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Engineer-coordinated scopes',
          detail:
            'We work to scopes prepared by remedial engineers (Saunders, Northrop, ACOR or whoever the strata uses). For smaller jobs we recommend engineers we work with regularly.',
        },
        {
          title: 'Branded structural repair systems',
          detail:
            'Sika, Mapei, BASF concrete repair products with manufacturer warranties (typically 10 to 20 years) that pass to the owners corporation. Critical for capital works documentation.',
        },
        {
          title: 'Staged works programmes',
          detail:
            'Works split into stages so residents lose access to limited areas at a time. Carparks done in rotating sections. Balconies done one at a time. Common areas done at low-traffic times.',
        },
        {
          title: 'Detailed photo documentation',
          detail:
            'Before, during and after photos of every defect location. Tagged to drawings or floor plans. Useful for AGM presentations and for the strata records into the future.',
        },
        {
          title: 'Tenant communication protocols',
          detail:
            'Notices posted 7 days before work in any unit area. Communication with strata manager so resident questions are answered. Site supervisor available during work hours for issues.',
        },
        {
          title: 'Compliance and warranty handover',
          detail:
            'Engineer certificates, manufacturer warranties, scope completion sign-off, photo documentation, BCA compliance where relevant. All bundled into a single handover pack for the strata file.',
        },
      ]}
      processSteps={[
        {
          step: 'Initial site visit',
          detail:
            'Walk-through with strata manager or committee representative. Defects identified. Engineer report reviewed if one exists. Scope outline agreed at high level.',
        },
        {
          step: 'Scope and quote',
          detail:
            'Itemised quote prepared. Each defect or area as a separate line. Engineer-specified methods used where engineer scope exists. Format suitable for committee review.',
        },
        {
          step: 'AGM or committee approval',
          detail:
            'We attend the committee meeting or AGM if useful. Answer owner questions. Provide additional information if needed. Work proceeds once committee resolves to accept the quote.',
        },
        {
          step: 'Mobilise and stage',
          detail:
            'Pre-start meeting with strata manager. Resident notices distributed 7 days in advance of any work in their area. Works programmed in stages so the building remains functional throughout.',
        },
        {
          step: 'Execute the works',
          detail:
            'Works proceed per the programme. Daily site clean-up. Progress reports for the strata manager. Engineer site inspections at the appropriate milestones. Resident questions handled by site supervisor.',
        },
        {
          step: 'Handover documentation',
          detail:
            'Completion documentation bundled: before-during-after photos, engineer certificates, manufacturer warranties, defect closeout summary. Provided to strata manager for the building file.',
        },
      ]}
      faqs={[
        {
          question: 'Do you work with strata managers?',
          answer:
            'Regularly. We work with most major strata management groups across Sydney. We understand how committees operate, what documentation is needed for AGMs, how special levies work, and what the strata manager needs from us throughout the job. Reference list of past strata clients available on request.',
        },
        {
          question: 'Can you provide quotes for AGM approval?',
          answer:
            'Yes. We provide itemised quotes formatted for committee review. Each defect or area is a separate line so owners can see what they are approving. Comparison tables where multiple options exist (for example, three different concrete cancer treatment levels). We attend meetings to answer questions if useful.',
        },
        {
          question: 'How do you minimise disruption to residents?',
          answer:
            'Works staged so only limited areas are affected at any time. Carparks done in rotating sections so residents always have parking. Balconies done one at a time, residents lose access to their balcony for the work duration. Noise restricted to reasonable hours. Resident notices posted 7 days before any work.',
        },
        {
          question: 'Do you handle the full scope or just masonry?',
          answer:
            'For masonry, concrete and structural work we do everything ourselves. For waterproofing membranes, painting, electrical or plumbing we coordinate with specialist subcontractors. For multi-trade jobs we can manage as head contractor or work to whichever sequencing the strata manager prefers.',
        },
        {
          question: 'How do you handle special levies and budget approvals?',
          answer:
            'We work to the budget the committee approves. If unforeseen items emerge mid-job, we quote the variation, the committee votes, and work proceeds only after approval. We never proceed with extras without explicit committee approval, which gives the committee full cost control.',
        },
        {
          question: 'What does strata remedial work typically cost?',
          answer:
            'Highly variable by building size and defect extent. Small remedial scope (one balcony, some pointing) is 15,000 to 50,000 dollars. Typical apartment block defect rectification is 80,000 to 400,000 dollars. Major remedial work on large or older blocks can exceed 1.5 million dollars. We provide budgetary estimates within a week of inspection and detailed quotes within 4 to 8 weeks once engineering is complete.',
        },
      ]}
    />
  );
};

export default StrataRepairsPage;
