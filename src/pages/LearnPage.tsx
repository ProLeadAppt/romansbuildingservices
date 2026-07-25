import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { CollectionPageSchema, FAQSchema, SpeakableSchema } from '@/components/LocalSEO/StructuredData';
import {
  ArrowRight,
  Building2,
  CircleDollarSign,
  Landmark,
  SearchCheck,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

const guidePaths = [
  {
    icon: SearchCheck,
    title: 'Diagnose the problem',
    description: 'Start with the signs you can see: cracking, powdering mortar, water entry, movement or fretting sandstone.',
    href: '/problems',
    label: 'View problem guides',
  },
  {
    icon: Wrench,
    title: 'Understand the repair',
    description: 'Learn when repointing, masonry repair, structural work or a specialist assessment may be appropriate.',
    href: '/services',
    label: 'Compare repair services',
  },
  {
    icon: CircleDollarSign,
    title: 'Plan cost and timing',
    description: 'See the access, material, scaffold and scope factors that change a masonry or remedial quote.',
    href: '/learn/masonry-vs-remedial-building',
    label: 'Plan the right scope',
  },
  {
    icon: ShieldCheck,
    title: 'Choose the right contractor',
    description: 'Know what to ask about method, exclusions, matching materials, engineering and heritage requirements.',
    href: '/learn/repointing-signs',
    label: 'Prepare for an assessment',
  },
];

const featuredGuides = [
  {
    name: 'Masonry repair or remedial building?',
    href: '/learn/masonry-vs-remedial-building',
    description: 'A practical starting point when the cause or trade is not yet clear.',
  },
  {
    name: 'Signs your brickwork needs repointing',
    href: '/learn/repointing-signs',
    description: 'What failing joints look like and why the mortar choice matters.',
  },
  {
    name: 'Concrete cancer in Sydney buildings',
    href: '/learn/concrete-cancer-sydney',
    description: 'Visible warning signs, common causes and the usual assessment path.',
  },
  {
    name: 'Cracked brick walls',
    href: '/problems/cracked-brick-walls',
    description: 'How to distinguish a mortar problem from movement that needs specialist advice.',
  },
  {
    name: 'Heritage restoration',
    href: '/heritage',
    description: 'Guidance for period brick, sandstone, stucco and traditional materials.',
  },
  {
    name: 'Sydney masonry services',
    href: '/services/masonry',
    description: 'Brickwork, repointing, stone repairs, structural brickwork and retaining walls.',
  },
];

const faqItems = [
  {
    question: 'How do I know whether I need a mason, remedial builder or engineer?',
    answer:
      'Start with the visible symptom and how quickly it is changing. Local mortar failure or isolated damaged masonry may be suitable for a masonry assessment. Widespread movement, displaced structural elements, active leaks or recurring repairs may need a remedial builder, structural engineer or both. Romans can review photos and tell you the most sensible next step.',
  },
  {
    question: 'Why does the mortar type matter on older Sydney brickwork?',
    answer:
      'Older brickwork was often built with softer, more vapour-permeable mortar. A hard cement-rich replacement can force moisture and movement into the brick faces instead of the joints. The correct mix depends on the existing material, exposure and condition, so it should be matched rather than guessed.',
  },
  {
    question: 'What changes the cost of masonry repair?',
    answer:
      'The main cost drivers are access and scaffolding, the amount of material that must be removed, replacement-brick or stone matching, structural support, waste handling, protection of occupied areas and any engineering or heritage requirements. Photos can establish an initial direction, but a firm scope may require a site visit.',
  },
  {
    question: 'Should damaged brickwork be repointed, rendered or rebuilt?',
    answer:
      'Repointing is appropriate when the masonry units remain sound and the joints are failing. Local rebuilding may be needed when bricks or stones have lost integrity or the wall has moved. Rendering can hide the face but does not correct an underlying moisture or structural problem. The cause should be diagnosed before choosing the finish.',
  },
  {
    question: 'What should I send with a quote request?',
    answer:
      'Send a wide photo showing the whole wall, close photos of the damage, the suburb, approximate height and access, when you first noticed the issue and whether it changes after rain. Romans will either suggest the next step, arrange a site assessment or tell you when another specialist is better suited.',
  },
];

const LearnPage = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Advice', href: '/learn' },
  ];

  return (
    <>
      <SEO
        title="Sydney Masonry & Heritage Repair Advice | Romans"
        description="Practical Sydney guides for diagnosing masonry problems, understanding repair options, planning costs and choosing the right contractor."
        canonical="/learn"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <SpeakableSchema url="https://romansbuildingservices.com/learn" cssSelectors={['h1', 'h2', 'p']} />
      <CollectionPageSchema
        name="Sydney Masonry and Heritage Repair Advice"
        description="Practical advice for diagnosing, pricing and planning masonry, heritage and remedial repairs in Sydney."
        url="https://romansbuildingservices.com/learn"
        items={featuredGuides}
      />
      <FAQSchema faqs={faqItems} />

      <div className="min-h-screen bg-white font-body">
        <section className="bg-navy texture-grain py-20 md:py-28 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-amber font-semibold uppercase tracking-[0.2em] text-sm mb-4">
              Practical Sydney building advice
            </p>
            <h1 className="font-heading text-4xl md:text-6xl text-white mb-6">
              Understand the problem before choosing the repair
            </h1>
            <p className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Practical advice for diagnosing, pricing and planning masonry, heritage and remedial repairs in Sydney. Start with what you can see, then follow the path to the right method and specialist.
            </p>
          </div>
        </section>

        <section className="bg-bg-light py-16 md:py-20 px-4" aria-labelledby="start-heading">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-navy font-semibold uppercase tracking-[0.16em] text-sm mb-3">Where to start</p>
              <h2 id="start-heading" className="font-heading text-3xl md:text-4xl text-navy mb-4">
                Choose the question closest to your job
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                You do not need to know the trade or technical term first. Begin with the decision you are trying to make.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {guidePaths.map((path) => (
                <article key={path.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-4" aria-hidden="true">
                    <path.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-heading text-2xl text-text-primary mb-3">{path.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-5 flex-1">{path.description}</p>
                  <Link to={path.href} className="inline-flex min-h-11 items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors">
                    {path.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4" aria-labelledby="guides-heading">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-navy font-semibold uppercase tracking-[0.16em] text-sm mb-3">Popular guides</p>
                <h2 id="guides-heading" className="font-heading text-3xl md:text-4xl text-navy mb-5">
                  Clear answers for common repair decisions
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-7">
                  These guides explain warning signs, repair options and the information a useful quote should contain. They are a starting point, not a substitute for inspecting a serious defect.
                </p>
                <Link to="/contact" className="inline-flex min-h-11 items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-md hover:bg-navy-light transition-colors">
                  Ask about your property <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {featuredGuides.map((guide) => (
                  <Link key={guide.href} to={guide.href} className="group rounded-xl border border-gray-200 p-6 hover:border-amber-dark hover:shadow-md transition-all min-h-44">
                    <h3 className="font-heading text-xl text-navy mb-3 group-hover:text-navy-light">{guide.name}</h3>
                    <p className="text-text-muted leading-relaxed mb-4">{guide.description}</p>
                    <span className="inline-flex items-center gap-2 text-navy font-semibold">
                      Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 md:py-20 px-4" aria-labelledby="audiences-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 id="audiences-heading" className="font-heading text-3xl md:text-4xl text-white mb-4">Advice for the way you manage the job</h2>
              <p className="text-white/75 text-lg">A homeowner, strata committee and consultant need different information before work can begin.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Landmark, title: 'Home and heritage owners', body: 'Diagnose the visible issue, preserve sound material and understand the practical repair path.', href: '/heritage' },
                { icon: Building2, title: 'Strata and building managers', body: 'Clarify scope, access, staged works, consultant input and what the committee needs to decide.', href: '/services/remedial-building/strata-repairs' },
                { icon: ShieldCheck, title: 'Architects and consultants', body: 'Review masonry, heritage and remedial capabilities before discussing specifications and site constraints.', href: '/contact' },
              ].map((audience) => (
                <article key={audience.title} className="rounded-xl border border-white/15 bg-white/5 p-6">
                  <audience.icon className="w-7 h-7 text-amber mb-4" aria-hidden="true" />
                  <h3 className="font-heading text-2xl text-white mb-3">{audience.title}</h3>
                  <p className="text-white/75 leading-relaxed mb-5">{audience.body}</p>
                  <Link to={audience.href} className="inline-flex min-h-11 items-center gap-2 text-amber font-semibold hover:text-white transition-colors">
                    Explore this path <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-navy font-semibold uppercase tracking-[0.16em] text-sm mb-3">Before you request a quote</p>
              <h2 id="faq-heading" className="font-heading text-3xl md:text-4xl text-navy">Common first questions</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-xl border border-gray-200 bg-white p-5 open:shadow-sm">
                  <summary className="cursor-pointer list-none font-heading text-xl text-navy flex items-center justify-between gap-4 min-h-11">
                    {item.question}
                    <span className="text-navy text-2xl group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                  </summary>
                  <p className="text-text-muted leading-relaxed pt-4 pr-8">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-light py-16 px-4">
          <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-gray-200 p-8 md:p-12 text-center shadow-sm">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">Still not sure what the job needs?</h2>
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-7">
              Send a wide photo, a close photo, the suburb and a short description. Romans can suggest the next step, arrange an assessment or tell you when another specialist is better suited.
            </p>
            <Link to="/contact" className="inline-flex min-h-11 items-center gap-2 bg-navy text-white font-semibold px-7 py-3 rounded-md hover:bg-navy-light transition-colors">
              Send photos for an assessment <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LearnPage;
