import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, Phone, MapPin, ArrowRight, Hammer } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { ServiceSchema, FAQSchema } from '@/components/LocalSEO/StructuredData';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import type { ServiceAreaCombo } from '@/data/serviceAreas';
import type { AreaProfile } from '@/data/areas';
import type { ServiceCategory } from '@/data/serviceHierarchy';

const SITE_URL = 'https://romansbuildingservices.com';

interface ServiceAreaPageProps {
  combo: ServiceAreaCombo;
  service: ServiceCategory;
  area: AreaProfile;
}

export const ServiceAreaPageTemplate = ({ combo, service, area }: ServiceAreaPageProps) => {
  const canonicalUrl = `${SITE_URL}/services/${service.slug}/${area.slug}`;
  const metaTitle = `${service.title} ${area.name} | Romans`;
  const metaDescription = combo.heroLine.slice(0, 158);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.title, href: service.route },
    { label: area.name, href: `/services/${service.slug}/${area.slug}` },
  ];

  // Visible enquiry guidance shared with schema. A route is not evidence of a local job.
  const localFaqs = [
    {
      question: `Do you do ${service.title.toLowerCase()} in ${area.name}?`,
      answer: `Send your suburb in ${area.name}, photographs taken from a safe position and a short description of the work. We can discuss the scope, access and current availability before arranging an assessment.`,
    },
    {
      question: 'What information helps establish the repair scope?',
      answer: 'The material, age and condition of the building, previous repairs, access and any engineering or heritage requirements all matter. A suburb name or photograph alone cannot establish the cause of damage or the right repair.',
    },
    {
      question: 'What should I check before work on a heritage property?',
      answer: 'Confirm the property’s listing or conservation-area status and the proposed work with council or a heritage adviser. Ask for the current licence and insurance details relevant to the building scope. Specialist assessments, engineering and approvals may need separate professionals.',
    },
  ];

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} canonical={canonicalUrl} />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        service={`${service.title} — ${area.name}`}
        description={metaDescription}
        url={canonicalUrl}
      />
      <FAQSchema faqs={localFaqs} />

      {/* Breadcrumb strip */}
      <nav aria-label="Breadcrumb" className="bg-stone-50 border-b border-stone-200 pt-20">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-text-muted font-body">
            {breadcrumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-x-2">
                {i> 0 && <ChevronRight aria-hidden="true" className="w-4 h-4 text-text-muted/50" />}
                {i < breadcrumbs.length - 1 ? (
                  <Link to={c.href} className="hover:text-navy">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-navy">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-navy py-20 md:py-24 texture-grain">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/15 text-amber text-xs font-body mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>{area.name}, Sydney</span>
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl text-white mb-5">
            {service.title} in {area.name}
          </h1>
          <p
            className="font-body text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            {combo.heroLine}
          </p>
          <div className="mt-8">
            <a
              href="tel:0414922276"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber text-navy font-body font-medium hover:bg-amber-light transition-colors">
              <Phone className="w-4 h-4" />
              Call Minas — 0414 922 276
            </a>
          </div>
        </div>
      </section>

      {/* Area-specific service context — unique content for this combo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2
            className="font-heading text-3xl text-navy mb-6">
            Planning {service.title.toLowerCase()} in {area.shortName}
          </h2>
          <p
            className="font-body text-text-secondary text-lg leading-relaxed mb-6">
            {combo.context}
          </p>
          <p
            className="font-body text-text-secondary leading-relaxed">
            {area.housingProfile}
          </p>
        </div>
      </section>

      {/* Service scope — pulled from canonical service data */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl text-navy mb-3">What's included in {service.title.toLowerCase()}</h2>
          <p className="font-body text-text-secondary mb-6">
            Full scope of work we cover under {service.title.toLowerCase()}:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.subServices.map((sub) => (
              <Link
                key={sub.slug}
                to={`${service.route}/${sub.slug}`}
                className="flex items-center justify-between gap-3 p-4 bg-white border border-stone-200 rounded-md hover:border-amber transition-colors group">
                <span className="flex items-center gap-3 font-body text-navy">
                  <Hammer className="w-4 h-4 text-amber flex-shrink-0" />
                  {sub.title}
                </span>
                <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-amber transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs covered in this area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl text-navy mb-2">Where we work in {area.name}</h2>
          <p className="font-body text-text-muted mb-6">
            Explore the existing suburb guides, then confirm the work and availability for your property. A guide does not replace a site assessment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {area.suburbs.map((slug) => {
              const name = slug
                .split('-')
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ');
              return (
                <Link
                  key={slug}
                  to={`/suburbs/${slug}`}
                  className="min-h-11 font-body text-navy hover:text-amber px-4 py-2 rounded-md bg-stone-50 border border-stone-200 hover:border-amber transition-colors inline-flex items-center justify-between">
                  <span>{name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl text-navy mb-8">Common questions</h2>
          <div className="space-y-6">
            {localFaqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-heading text-lg text-navy mb-2">{faq.question}</h3>
                <p className="font-body text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl text-navy mb-6">Related</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to={service.route}
              className="block p-5 bg-stone-50 border border-stone-200 rounded-md hover:border-amber transition-colors">
              <div className="font-heading text-navy mb-1">All {service.title.toLowerCase()} services</div>
              <div className="font-body text-sm text-text-muted">Full scope across Sydney — not just {area.name}.</div>
            </Link>
            <Link
              to={area.href}
              className="block p-5 bg-stone-50 border border-stone-200 rounded-md hover:border-amber transition-colors">
              <div className="font-heading text-navy mb-1">{area.name} services</div>
              <div className="font-body text-sm text-text-muted">All the services we cover across {area.name}.</div>
            </Link>
            <Link to="/learn/brick-sandstone-repair-quotes-hawkesbury" className="block p-5 bg-stone-50 border border-stone-200 rounded-md hover:border-amber transition-colors">
              <div className="font-heading text-navy mb-1">Prepare a repair enquiry</div>
              <div className="font-body text-sm text-text-muted">Photographs, access, reports and questions for a clear scope.</div>
            </Link>
            <Link to="/areas/hawkesbury-western-sydney" className="block p-5 bg-stone-50 border border-stone-200 rounded-md hover:border-amber transition-colors">
              <div className="font-heading text-navy mb-1">Hawkesbury &amp; Western Sydney</div>
              <div className="font-body text-sm text-text-muted">Our current service focus and local enquiry guidance.</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy texture-grain">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            {service.title} project in {area.name}?
          </h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Call Minas with your suburb and repair details to discuss the scope, access and current availability.
          </p>
          <a
            href="tel:0414922276"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-md bg-amber text-navy font-body font-semibold hover:bg-amber-light transition-colors">
            <Phone className="w-5 h-5" />
            0414 922 276
          </a>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaPageTemplate;
