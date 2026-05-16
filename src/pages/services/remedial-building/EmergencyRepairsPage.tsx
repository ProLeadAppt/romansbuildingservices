import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Siren, Clock, ShieldAlert, Wrench, Phone } from 'lucide-react';

const EmergencyRepairsPage = () => {
  const siblings = getSiblingServices('remedial-building', 'emergency-repairs');

  return (
    <ServicePageTemplate
      title="Emergency Building Repairs"
      metaTitle="Emergency Building Repairs Sydney | Storm Damage, Make-Safe, Structural | Romans Building Services"
      metaDescription="Sydney emergency building repairs by Minas Romanakis. Storm damage, structural failure, vehicle impact, fire damage. Make-safe within hours, permanent repair after."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Emergency Building Repairs', href: '' },
      ]}
      intro={[
        'When a wall collapses, a section of facade starts falling onto the street, a chimney comes down in a storm, a car hits a structural pier, or a building catches fire, the priority is making the site safe immediately. People need to be kept away from the hazard zone. Structural elements that have lost capacity need temporary support before more of the building comes down. Open holes in the building envelope need to be sealed before weather damage gets worse. Only after the site is stable can permanent repair planning start.',
        'We respond to building emergencies across Sydney. Storm damage (fallen trees through roofs, wind-damaged chimneys, water ingress from severe weather), structural failures (collapsed walls, failed lintels, cracked beams), vehicle impact damage (cars hitting brick walls, fences, balcony piers), and fire-damaged structures needing stabilisation before reconstruction. We carry emergency propping gear and can usually be on site within hours for genuine structural emergencies.',
        'Insurance work is part of this. We provide the photos, reports, and quotes that loss adjusters and insurers need to process the claim. We have worked with most major Australian insurers and we know what documentation they expect. For homeowners and strata committees dealing with an emergency, having one contractor handle make-safe, scope the permanent repair, and execute the work, simplifies the whole insurance process.',
      ]}
      features={[
        {
          icon: Clock,
          title: 'Rapid response',
          description:
            'On site as fast as possible for genuine emergencies. Minas mobile direct: 0414 922 276. After hours and weekends covered for active structural emergencies.',
        },
        {
          icon: Siren,
          title: 'Make-safe works',
          description:
            'Temporary propping, hoarding, barriers, weatherproofing of breached envelope. Hazardous loose material removed under controlled conditions. Site secured before anyone leaves.',
        },
        {
          icon: ShieldAlert,
          title: 'Storm damage',
          description:
            'Fallen trees, damaged roofs, collapsed chimneys, wind-blown facade elements, water ingress damage. Stabilised, weatherproofed, dried out before permanent repair scope.',
        },
        {
          icon: Wrench,
          title: 'Structural failures',
          description:
            'Collapsed walls, failed lintels, cracked beams, foundation failures, vehicle impact damage. Acrow propping and temporary works to make the building safe before engineering scope.',
        },
        {
          icon: Phone,
          title: 'Insurance documentation',
          description:
            'Photos, written reports, scope of works, itemised quotes prepared for insurers and loss adjusters. We handle the documentation flow so the claim moves through without delay.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Acrow propping inventory',
          detail:
            'Stock of adjustable steel acrow props, sized from 600mm to 3 metres. Heavy-duty load ratings. Set up rapidly to take weight off failed structural elements.',
        },
        {
          title: 'Hoarding and barriers',
          detail:
            'Site hoarding (timber or chain-mesh) to keep public out of hazard zone. Plywood boarding for breached openings. Tarps and weatherproof sheeting for damaged roofs.',
        },
        {
          title: 'Temporary weatherproofing',
          detail:
            'Heavy-duty plastic sheeting, scaffold-grade tarpaulins, temporary roofing membranes. Keeps weather out of breached buildings while permanent repair is being planned.',
        },
        {
          title: 'Dust extraction and PPE',
          detail:
            'M-class dust extractors for any work involving collapsed masonry. Full PPE including dust masks, hard hats and high-vis. For fire-damaged structures, additional precautions for asbestos and contaminated debris.',
        },
        {
          title: 'Engineer on call for structural emergencies',
          detail:
            'For collapses or near-collapses, structural engineer attends site as soon as possible to assess the structure and specify temporary works. Their report goes to the insurer for the claim.',
        },
        {
          title: 'Photo and incident documentation',
          detail:
            'Site condition photographed in detail before any make-safe work starts (for the insurance record), during make-safe (showing what was done), and after make-safe (showing the stabilised state). Written incident report prepared.',
        },
      ]}
      processSteps={[
        {
          step: 'Initial phone assessment',
          detail:
            'Call from owner, strata manager, or insurer. We get details on the type of damage, location, and immediate risk. For active structural emergencies, we mobilise immediately. For lower-risk situations, scheduled within 24 hours.',
        },
        {
          step: 'On-site safety assessment',
          detail:
            'Arrive on site. Establish hazard zone perimeter. Stop public access to the danger area. Initial photos taken. If anyone is at risk, evacuation organised.',
        },
        {
          step: 'Make-safe execution',
          detail:
            'Temporary propping installed where structural elements have failed. Hoarding or barriers up around hazard zones. Loose material brought down under controlled conditions. Breached openings sealed against weather.',
        },
        {
          step: 'Engineer involvement (if needed)',
          detail:
            'For collapses, vehicle impacts, or other structural events, structural engineer attends to assess and specify temporary or permanent works. Engineer report supports the insurance claim and informs the repair scope.',
        },
        {
          step: 'Insurance documentation',
          detail:
            'Detailed report prepared: cause of damage (where known), extent of damage, make-safe works completed, recommended permanent repair scope with estimate. Photos throughout. Sent to insurer.',
        },
        {
          step: 'Permanent repair scoping',
          detail:
            'Once insurance accepts the claim and approves scope, permanent repair commences. We provide continuity from make-safe through to final completion so the homeowner has one contractor handling the whole event.',
        },
      ]}
      faqs={[
        {
          question: 'How fast can you respond to an emergency?',
          answer:
            'For genuine structural emergencies (active collapse, falling masonry, vehicle into building), we aim to be on site within 2 to 4 hours during business hours, longer at night or weekends. Call Minas directly: 0414 922 276. If someone is in immediate danger, call 000 first then call us.',
        },
        {
          question: 'Do you do the permanent repair as well?',
          answer:
            'Yes. We do the make-safe work first to stabilise the site, then we scope and execute the permanent repair as a separate contract once insurance has approved. Single contractor through the whole event simplifies the insurance claim and avoids the typical handover problems between make-safe and rebuild contractors.',
        },
        {
          question: 'Will my insurance cover emergency repairs?',
          answer:
            'Most building insurance policies cover storm damage, structural failures from external events (vehicle impact, fire, falling trees), and accidental damage. Pre-existing defects (gradual deterioration, wear and tear) are usually not covered. We provide the documentation the insurer needs to assess the claim. Talk to your insurer or broker about specific coverage before we start permanent repair.',
        },
        {
          question: 'What does emergency make-safe cost?',
          answer:
            'Emergency call-out (typical 2 to 4 hours on site, temporary propping, hoarding, weatherproofing) usually runs 2000 to 6000 dollars. Larger emergencies (multi-storey facade collapses, significant fire damage make-safe) can be 10,000 to 40,000 dollars. Make-safe costs are usually covered by the building insurance as part of the claim.',
        },
        {
          question: 'Can you work directly with my insurer?',
          answer:
            'Yes. We work with most major Australian insurers (IAG, Suncorp, QBE, Allianz, Chubb, etc) and we know what each one needs in terms of documentation, scope detail, and cost breakdowns. We can deal directly with the loss adjuster on your behalf which saves you time.',
        },
        {
          question: 'What if my building is heritage-listed?',
          answer:
            'For listed buildings the make-safe work has to consider heritage requirements even in an emergency. Temporary propping done so it does not damage original fabric. Heritage consultant brought in immediately for the permanent repair scoping. Most councils accept emergency make-safe without prior approval but the permanent repair will need full heritage and council approval.',
        },
      ]}
    />
  );
};

export default EmergencyRepairsPage;
