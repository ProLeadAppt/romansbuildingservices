import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Hammer, Scaling, HandMetal, Compass } from 'lucide-react';

const TraditionalStoneworkPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'traditional-stonework');

  return (
    <ServicePageTemplate
      title="Traditional Stonework Methods"
      metaTitle="Traditional Stonemasonry Sydney | Hand-Cut Stone, Hot Lime | Romans Building Services"
      metaDescription="Sydney traditional stonemasonry by Minas Romanakis. Hand-cut stone, hot lime mortar, carved profiles, period methods. Heritage work as it was originally done."
      heroImage="/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Traditional Stonework Methods', href: '' },
      ]}
      intro={[
        'Some heritage jobs have to be done the old way. Not because we want to make it harder, but because the building was designed and built that way and modern shortcuts will compromise it. Hand-dressed stone, hot lime mortar, traditional pointing profiles, carved mouldings done freehand. The methods used when these buildings went up are the methods we use now to restore them.',
        'A power tool cuts faster but leaves a smooth machine face that does not match a hand-tooled wall. A modern cement render is harder than the wall behind it and traps moisture. Modern stainless wall ties go in faster than re-bedding stone but on a colonial wall you want the original construction logic preserved. Heritage councils, heritage consultants, ICOMOS Burra Charter principles, they all push toward "do it the way it was originally done."',
        'Minas trained in traditional stonemasonry in the early years of his career. Banker masonry, hand carving, hot lime work. These skills take years to develop and they are getting rarer in Australia. When a Sydney heritage building needs this level of craft, we have the tools and the time to do it properly.',
      ]}
      features={[
        {
          icon: Hammer,
          title: 'Hand-cut stone',
          description:
            'Stone cut and shaped using hand chisels, mallets, dragging tools and broaches. Pitched face, drag-finish, tooth-chiseled, broached, rock-faced. Each finish needs a different tool and hand.',
        },
        {
          icon: Scaling,
          title: 'Hot lime mortar',
          description:
            'Quicklime slaked on site with sand and water. Stronger and more durable than pre-mixed lime mortar. Standard method for centuries. We use it where the original building would have used it.',
        },
        {
          icon: HandMetal,
          title: 'Period pointing profiles',
          description:
            'Flush, raked, struck, weathered, tuck pointed, beaded. Each profile uses a different tool. We replicate whatever the original wall had, never substitute.',
        },
        {
          icon: Compass,
          title: 'Carved mouldings and details',
          description:
            'Templated from existing detail, then carved by hand into matching stone. Cornices, string courses, sills, corbels, finials, balusters. For repeated elements we produce matching pieces from a single template.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Quicklime for hot lime mortar',
          detail:
            'Calcium oxide quicklime, slaked on site by adding to wet sand. Produces a very strong lime mortar used for traditional heritage work. Requires care in handling but has been the standard for over 2,000 years.',
        },
        {
          title: 'Hand chisels and mallets',
          detail:
            'Pitching tools, point chisels, tooth chisels, claw chisels, drags, broaches. Mallets in different weights for fine and rough work. Most of the tools have been in Minas\'s kit for over 20 years.',
        },
        {
          title: 'Banker mason\'s bench',
          detail:
            'The traditional stone-cutting workbench. Stone is cut and dressed on the banker, then transported to the wall for installation. We have a banker at the workshop and a portable one for site work.',
        },
        {
          title: 'Stone matched from the original quarry',
          detail:
            'Where possible, replacement stone comes from the same quarry that supplied the original. For Hawkesbury and Gosford sandstone these quarries are still operating. For more obscure stone we work with what is available.',
        },
        {
          title: 'Templates for carved work',
          detail:
            'For carved profiles, we template the existing detail onto plywood or zinc. The template is used to guide the new carving. For repeated elements (balusters, finials) one template produces multiple matched pieces.',
        },
        {
          title: 'Lifting tackle for heavy blocks',
          detail:
            'Block and tackle, chain hoists, mechanical advantage rigging for moving stone blocks too heavy to lift. Stone tongs, lewises, clamps. Traditional methods for moving large stone without modern cranes when crane access is impossible.',
        },
      ]}
      processSteps={[
        {
          step: 'Survey and template',
          detail:
            'On-site survey of the existing stonework. For carved or moulded elements we make templates from the original profile. For straight ashlar we record the dimensions, finish and bedding pattern. Photos throughout.',
        },
        {
          step: 'Quarry the stone',
          detail:
            'Source stone from the original quarry where possible. For sandstone we work with Wondabyne, Gosford or smaller operators. Stone is selected by hand for grain direction and colour, then cut to rough size.',
        },
        {
          step: 'Bench dressing',
          detail:
            'At the workshop or on site banker, stone is dressed to size and the face is hand-tooled to match the original finish. Drag-finish, tooth chiseled, broached, whatever the wall has. This is the slow step.',
        },
        {
          step: 'Carving (if required)',
          detail:
            'For moulded or carved elements, the rough block is shaped first with chisels then refined with the template. Cornices, sills, balusters, capitals. Slow work, hours to days per element.',
        },
        {
          step: 'Mix hot lime mortar',
          detail:
            'On the day the stone goes in, quicklime is slaked on site by adding to wet sharp sand. Mixed to a workable consistency. Hot lime sets faster than cold lime putty so batches stay small.',
        },
        {
          step: 'Set, bed and point',
          detail:
            'Stone bedded into the wall with hot lime mortar. Stainless cramps where the original wall used iron cramps (replacing them with stainless prevents future rust damage). Joints tooled to the original profile.',
        },
      ]}
      faqs={[
        {
          question: 'Why use traditional methods instead of modern ones?',
          answer:
            'Heritage buildings were designed as a system. Stone, lime mortar and iron cramps work together. Modern materials behave differently, trapping moisture, creating stress points, accelerating decay. Traditional methods keep the building working the way it was originally designed to. Plus heritage councils and consultants generally require traditional methods for listed buildings.',
        },
        {
          question: 'What is hot lime mortar and why use it?',
          answer:
            'Hot lime mortar is made by mixing quicklime with sand and water on site. The slaking reaction generates heat (hence "hot lime") and produces a stronger mortar than pre-mixed bag lime. It was the standard mortar for traditional masonry for centuries. We use it where the original building would have used it, typically pre-1900 work.',
        },
        {
          question: 'Can you replicate carved stone details?',
          answer:
            'Yes. We template the existing detail, source matching stone, and carve the replacement by hand. For repeated elements like balusters or finials, we produce multiple matched pieces from a single template. Time varies, simple cornices are days per metre, full balustrade carving is weeks. Heritage consultant signs off on the carving before installation.',
        },
        {
          question: 'How long does traditional stonework take?',
          answer:
            'Significantly longer than modern methods. Where a power-cut and machine-installed stone might take a day, the same stone hand-dressed and bedded in hot lime mortar is two to four days. The pace is the point. Traditional methods produce work that matches the original and lasts hundreds of years.',
        },
        {
          question: 'Is traditional stonework more expensive?',
          answer:
            'Yes. Hand work is slower so labour is higher. Specialty materials like quicklime cost more than bag lime. Custom-carved pieces can be days of work each. Traditional restoration usually costs 30 to 60 percent more than equivalent modern repair. The trade-off is heritage-correctness and a repair that will outlast modern equivalents by decades.',
        },
        {
          question: 'Do all heritage jobs need traditional methods?',
          answer:
            'No. State-listed buildings and ICOMOS-charter scopes generally require traditional methods. Locally-listed buildings have lighter requirements. Heritage conservation areas (not listed) typically allow modern methods on hidden work but require traditional on visible faces. We assess each job and recommend the right level of intervention.',
        },
      ]}
    />
  );
};

export default TraditionalStoneworkPage;
