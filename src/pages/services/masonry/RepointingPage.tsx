import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Paintbrush, Eye, Clock, ShieldCheck } from 'lucide-react';

const RepointingPage = () => {
  const siblings = getSiblingServices('masonry', 'repointing');

  return (
    <ServicePageTemplate
      title="Repointing & Brick Pointing"
      metaTitle="Repointing & Brick Pointing Sydney | Lime & Cement Mortar | Romans Building Services"
      metaDescription="Sydney repointing by Minas Romanakis. Lime mortar for heritage walls, cement-based for modern brick. Colour and profile matched on site. 30 years of pointing."
      heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Repointing & Brick Pointing', href: '' },
      ]}
      intro={[
        'Mortar joints wear out before the bricks do. Water gets into the gaps, the wall starts to move, and the bricks behind the failing mortar slowly cop the weight that the mortar should have been carrying. Repointing replaces the old failed mortar with new, set deep into the joint, matched to the original.',
        'We rake out the old joints by hand to a depth of two to three times the joint width. Power tools are quicker but they cut the brick faces. On heritage brick that just makes the next job worse. After the joints are raked, we pack new mortar in firm and tool it to whatever profile your wall had to start with. Flush, raked, struck, weathered, or tuck pointed.',
        'Minas has been pointing brick across Sydney since 1995. From three-metre garden walls in Strathfield to Federation terraces in Paddington and heritage churches in the inner city. Every job gets the right mortar for the brick it goes against.',
      ]}
      features={[
        {
          icon: Paintbrush,
          title: 'Colour matched on site',
          description:
            'Mortar mixed in front of you to match what is already on the wall. For heritage we use lime, sand and natural oxides. Sample patches go up before the full job starts so you can see the match.',
        },
        {
          icon: Eye,
          title: 'Joint profile copied',
          description:
            'Flush, raked, struck, weathered, tuck pointed. We copy whatever your wall had originally. Wrong profile changes the whole look of the building.',
        },
        {
          icon: Clock,
          title: 'Lasts 40 to 60 years',
          description:
            'Properly mixed and properly applied repointing will outlive most of the bricks around it. Cheap repointing fails inside ten years and takes the bricks with it.',
        },
        {
          icon: ShieldCheck,
          title: 'Heritage council approved',
          description:
            'We work to council heritage scopes regularly. Lime mortar mixes, salvaged sand, era-correct tools. The job gets photographed and documented as we go for the heritage report.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Lime mortar for anything pre-1940',
          detail:
            'Hydraulic lime, sand and water. No cement. Lets the wall breathe so moisture leaves through the joints instead of being trapped against soft handmade brick. Takes longer to cure but matches the original material.',
        },
        {
          title: 'Cement mortar for post-1940 brick',
          detail:
            'Type N or Type S depending on whether it is structural or weather-facing. Modern brick is harder fired and can take a harder mortar without spalling.',
        },
        {
          title: 'Sand sourced to match colour',
          detail:
            'We sample sand from yards in Marrickville, Castle Hill and the Hawkesbury depending on the colour we need. Heritage jobs sometimes need river sand instead of crushed.',
        },
        {
          title: 'Hand tools for raking out',
          detail:
            'Plugging chisels, joint rakers, finger trowels. Power tools save time but they cut into the brick face. On a wall built before the 1950s, that is permanent damage.',
        },
        {
          title: 'Sample patches before the full job',
          detail:
            'We put up two or three test patches in different mixes, let them cure for a few days, and have you confirm the colour and texture before we point the whole wall.',
        },
        {
          title: 'Hessian or plastic for curing',
          detail:
            'Lime mortar needs slow curing or it cracks. Hessian sheets sprayed with water in summer. Plastic in winter. Not optional.',
        },
      ]}
      processSteps={[
        {
          step: 'We look at the wall and quote',
          detail:
            'On-site visit. We poke at the existing mortar, look at the brick condition, work out which mortar profile you have and whether the wall has been repointed badly in the past. Quote comes within a few days, itemised.',
        },
        {
          step: 'Sample patches go up',
          detail:
            'Before the full job, we put up two or three small test patches in different mortar mixes and colours. Cure for two to three days, then you pick the one that matches best.',
        },
        {
          step: 'Old mortar gets raked out',
          detail:
            'Hand tools, joint by joint, raked back to two or three times the joint width. Slow work. A skilled pointer can do five to ten square metres a day on heritage brick. We sheet up the ground and work top to bottom.',
        },
        {
          step: 'New mortar gets packed in',
          detail:
            'Mixed on site in small batches because lime mortar starts curing as soon as it is mixed. Packed firm into the joints with finger trowels. No gaps, no air pockets.',
        },
        {
          step: 'Joints get tooled to profile',
          detail:
            'Once the mortar is leather-hard, we tool each joint to the profile your wall had originally. This is what controls how the finished wall looks more than the colour does.',
        },
        {
          step: 'Site cleaned, wall cured',
          detail:
            'Brick faces brushed clean. Sheeting taken away. For lime work the wall gets hessian sheets sprayed with water for the first week so the mortar cures slowly. We come back at one week to check it.',
        },
      ]}
      faqs={[
        {
          question: 'How do I know if my wall needs repointing?',
          answer:
            'Look for crumbling or missing mortar between bricks. If you can poke a key into the joints and mortar falls out, it is time. Water stains on interior walls, salt deposits on the outside, or bricks starting to come loose are all signs the mortar has failed.',
        },
        {
          question: 'What is the difference between repointing and tuck pointing?',
          answer:
            'Repointing is the general term for replacing mortar joints. Tuck pointing is a specific Victorian-era decorative style where a thin line of contrasting white lime is applied over the mortar to make the joints look fine and uniform. We do both. Tuck pointing is much slower and costs more.',
        },
        {
          question: 'Do you use cement or lime mortar?',
          answer:
            'Depends on the wall. Anything built before the 1940s gets lime mortar because the brick is soft and needs to breathe. Modern brick walls built since the 1950s usually get a cement mortar. Using the wrong one is one of the biggest mistakes in masonry repair. Cement mortar against soft heritage brick traps moisture and the bricks start blowing out in ten to fifteen years.',
        },
        {
          question: 'How long does a repointing job take?',
          answer:
            'A small garden wall is one to two days. A full Federation terrace facade is one to two weeks. A heritage church or commercial building can be six to twelve weeks. Lime work is slower than cement because the mortar cures slowly.',
        },
        {
          question: 'What does repointing cost?',
          answer:
            'Cement repointing on modern brick is usually around 100 to 180 dollars per square metre. Lime mortar on heritage brick runs 180 to 350 dollars per square metre depending on profile and access. Tuck pointing is more. Fixed quote after a site visit so you know exactly where you stand.',
        },
        {
          question: 'How long will the repointing last?',
          answer:
            'Done properly, 40 to 60 years for lime mortar and 30 to 50 years for cement mortar. The thing that kills repointing early is the wrong mortar mix, joints not raked deep enough, or curing rushed in hot weather. We do not rush any of those.',
        },
      ]}
    />
  );
};

export default RepointingPage;
