import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Paintbrush, Layers, History, Droplets } from 'lucide-react';

const HistoricStuccosPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'historic-stuccos-renders');

  return (
    <ServicePageTemplate
      title="Historic Stuccos & Renders"
      metaTitle="Sydney Historic Lime Render & Stucco | Romans"
      metaDescription="Sydney heritage lime render and stucco by Minas Romanakis. Multi-coat lime render, decorative cornices, period finishes. Breathable, era-correct. 30 years."
      heroImage="/gallery/thumbs/romansstone_1574278523_2181528827132774103_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Historic Stuccos & Renders', href: '' },
      ]}
      intro={[
        'A lot of Sydney heritage buildings have render or stucco over the masonry underneath. Federation cottages, Victorian terraces, Art Deco apartments, Inter-war shopfronts. The render is what gives the building its painted-wall appearance and protects the masonry from weather. When the render cracks, water gets behind it, and the wall starts to fail from inside.',
        'Cement render is the wrong material on heritage walls. It is too hard, too rigid and does not let moisture move through. Within ten to twenty years it cracks, water gets behind it, and chunks start falling off the wall. Lime render is what these buildings were originally rendered with. It is softer, flexes with the building, and lets moisture escape through the surface instead of trapping it inside.',
        'We replace failed cement render with proper lime render, and we repair existing lime render that has weathered. Multi-coat systems applied in the traditional way. For decorative stucco (cornices, brackets, panels, mouldings) we replicate the original profiles using running templates. The work is slow, lime cures by carbonation over weeks not days, but the result is correct and lasts decades.',
      ]}
      features={[
        {
          icon: Layers,
          title: 'Three-coat lime render',
          description:
            'Scratch coat, float coat, finish coat. Each one is around 6 to 10mm thick and needs to cure before the next goes on. Total system is around 20 to 25mm. The way these walls were originally rendered.',
        },
        {
          icon: Paintbrush,
          title: 'Stucco mouldings replicated',
          description:
            'Running cornices, brackets, sills, decorative panels. We make a metal running template from the existing profile and run the cornice in lime stucco. Matched and undetectable from the original.',
        },
        {
          icon: History,
          title: 'Period finishes',
          description:
            'Trowelled smooth, floated, roughcast, pebbledash, ashlar marked. Whatever finish your building has, we replicate it. Final coat tinted with natural oxides or finished with traditional limewash.',
        },
        {
          icon: Droplets,
          title: 'Breathable wall system',
          description:
            'Lime render lets moisture pass through. Cement render traps it. Heritage walls were designed to breathe. Using lime keeps the wall functioning the way it was designed to.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Hydraulic lime for the main coats',
          detail:
            'NHL 3.5 for scratch and float coats. NHL 2 for finish coat on very soft walls. Sharp sand for body, finer sand for the finish. Mixed in small batches because lime starts curing as soon as it is wet.',
        },
        {
          title: 'Hair or fibre reinforcement',
          detail:
            'Traditional lime render included goat or horse hair to give the scratch coat tensile strength. We use modern fibre alternatives (alkali-resistant fibre or hemp fibre) which serve the same purpose without the historical material.',
        },
        {
          title: 'Running templates for cornices',
          detail:
            'Metal templates cut to match the original cornice profile. Mounted on a running mould and pushed along the wall while the lime stucco is still soft. Cornice forms in one continuous pass.',
        },
        {
          title: 'Lime wash and mineral paint',
          detail:
            'Traditional lime wash made from slaked lime water tinted with natural oxides. Or mineral silicate paints from manufacturers like Keim, which are vapour-permeable and heritage-friendly. Never modern acrylic paint over lime render.',
        },
        {
          title: 'Hessian for slow curing',
          detail:
            'Lime render needs to stay damp for the first week to cure properly. Hessian sheeting goes over fresh render and gets sprayed twice daily in summer. Skip this and the render cracks while it is still curing.',
        },
        {
          title: 'Galvanised or stainless lath if required',
          detail:
            'For very thick stucco mouldings or where the substrate is uneven, expanded metal lath provides a key for the lime to grip. Stainless on heritage work, galvanised on hidden modern work.',
        },
      ]}
      processSteps={[
        {
          step: 'Strip failed render',
          detail:
            'Cement render comes off in chunks. We chip back to the masonry substrate, cleaning it of all old material. Any failed brick or stone gets repaired before render goes back on. Edges feathered into surrounding original render where the patch is partial.',
        },
        {
          step: 'Substrate preparation',
          detail:
            'Wall wetted down so it does not suck water out of the new lime mortar. Any deep holes filled. Lath installed if the wall is uneven. Substrate ready before any render is mixed.',
        },
        {
          step: 'Scratch coat applied',
          detail:
            'First coat, around 10mm thick. Pressed firmly into the substrate to get a key. Surface scratched with a comb tool to give the next coat something to bond to. Cures for one to two weeks under hessian.',
        },
        {
          step: 'Float coat applied',
          detail:
            'Second coat, around 8mm thick, floated flat with a wood float. Built up to match the original render thickness. Cures for one to two weeks under hessian. This is the coat that determines the line of the wall.',
        },
        {
          step: 'Finish coat and texture',
          detail:
            'Third coat, around 5mm thick, applied and finished to match the original texture. Trowelled smooth, floated, roughcast or whatever the building has. Cornices and decorative work run during this coat.',
        },
        {
          step: 'Curing and finishing',
          detail:
            'Finish coat cures under hessian for one to two weeks. Limewash or mineral paint applied after curing if the original finish was painted. Total system from strip to paint is six to ten weeks for a typical Federation cottage facade.',
        },
      ]}
      faqs={[
        {
          question: 'Why is the cement render on my old building cracking?',
          answer:
            'Cement render is rigid and impermeable. Heritage masonry walls are slightly flexible and were designed to breathe. The cement cracks under the slight movement and traps moisture behind it. Once water is trapped, salt builds up, and the render delaminates from the wall in chunks. Almost every Sydney heritage building that has been recently rendered in cement is now showing this failure pattern.',
        },
        {
          question: 'How long does lime render take to apply?',
          answer:
            'Significantly longer than cement render. Each coat needs to cure for one to two weeks before the next can be applied. A three-coat system on a typical Federation cottage facade takes six to ten weeks from strip-off to finished. Cement render would be three weeks. The trade-off is the lime render will last 80 to 120 years where cement render is failing in 10 to 20.',
        },
        {
          question: 'Can you match the existing render colour?',
          answer:
            'Yes. The finish coat is tinted with natural oxide pigments or finished with limewash to match the existing colour. Sample patches are mixed and cured for a week before the final colour is locked in. For very specific colour matching we can do multiple test patches in different mixes.',
        },
        {
          question: 'What is the difference between render and stucco?',
          answer:
            'Render is the flat protective coating over the masonry. Stucco refers to decorative plasterwork: cornices, brackets, decorative panels, ashlar marking. Most Sydney heritage buildings have both. We do both, often on the same job.',
        },
        {
          question: 'Can you repair decorative cornices and mouldings?',
          answer:
            'Yes. For partial damage we patch in matching lime stucco. For long sections of failed cornice we make a running template from the surviving original profile and run new cornice in lime stucco. The template is a metal blade cut to the inverse of the cornice shape, mounted on a wooden running mould.',
        },
        {
          question: 'What does heritage lime rendering cost?',
          answer:
            'Strip-and-replace lime render on a typical Federation cottage facade is around 250 to 450 dollars per square metre, including stripping the old material. Decorative cornice work is quoted per linear metre, usually 200 to 600 dollars per metre depending on profile complexity. Fixed quote after a site visit.',
        },
      ]}
    />
  );
};

export default HistoricStuccosPage;
