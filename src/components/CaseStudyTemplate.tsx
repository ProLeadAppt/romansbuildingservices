import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { FAQSchema } from '@/components/LocalSEO/StructuredData';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { QuoteCTAButton } from '@/components/quote';
import type { CaseStudy } from '@/data/caseStudies';
import { toCanonicalPageUrl } from '@/lib/seoUrls';

export const CaseStudyTemplate = ({ cs }: { cs: CaseStudy }) => {
  const canonical = `/case-studies/${cs.slug}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: cs.metaTitle, description: cs.metaDescription,
    url: toCanonicalPageUrl(canonical),
    isPartOf: { '@type': 'CollectionPage', '@id': toCanonicalPageUrl('/case-studies') },
    about: { '@type': 'Thing', name: cs.primaryService },
  };
  return (
    <>
      <SEO title={cs.metaTitle} description={cs.metaDescription} canonical={canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FAQSchema faqs={cs.faqs} />
      <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Repair references', href: '/case-studies' }, { label: cs.metaTitle, href: canonical }]} />
      <nav aria-label="Breadcrumb" className="bg-bg-light border-b border-border pt-20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm">
          <Link to="/case-studies" className="underline">Repair references</Link>
          <ChevronRight aria-hidden="true" className="w-3 h-3 shrink-0" />
          <span aria-current="page">{cs.metaTitle}</span>
        </div>
      </nav>
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent uppercase tracking-wider text-sm mb-4">Case-study archive</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">{cs.metaTitle}</h1>
          <p className="font-body text-lg text-white/90 leading-relaxed">{cs.metaDescription}</p>
        </div>
      </section>
      <aside aria-label="Project-specific repair guidance" className="bg-bg-light border-b border-border">
        <p className="max-w-4xl mx-auto px-6 py-6 leading-relaxed">General repair guidance, not a completed-project record. Project-specific details are withheld pending verification. This is not a repair specification for another property. Structural work, fireplaces and foreshore structures need assessment of the actual site and the relevant design, permissions and safety requirements. The location in an older page address does not verify where work took place.</p>
      </aside>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-navy mb-8">Questions about {cs.primaryService.toLowerCase()}</h2>
          <div className="space-y-8">{cs.faqs.map(faq => (
            <div key={faq.question} className="border-b border-border pb-6">
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">{faq.question}</h3>
              <p className="leading-relaxed text-text-primary">{faq.answer}</p>
            </div>
          ))}</div>
        </div>
      </section>
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-navy mb-8">Related services and reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">{[...cs.relatedServices, { label: 'Repair guides', href: '/learn' }, { label: 'Photo archive', href: '/projects' }, { label: 'All repair references', href: '/case-studies' }].map(link => (
            <Link key={link.href} to={link.href} className="bg-white border border-border rounded-lg p-5 font-semibold text-navy hover:underline">{link.label}</Link>
          ))}</div>
        </div>
      </section>
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold mb-5">Discuss your repair</h2>
          <p className="text-white/80 mb-8">Send a few photos and a short description. Minas can discuss the scope, whether a site assessment is needed, and practical next steps.</p>
          <div className="flex flex-wrap gap-6 items-center">
            <QuoteCTAButton initialService={cs.primaryService.toLowerCase().includes('heritage')
              ? 'heritage-restoration' : cs.primaryService.toLowerCase().includes('concrete')
              ? 'concrete-repair' : cs.primaryService.toLowerCase().includes('foundation')
              ? 'foundation' : cs.primaryService.toLowerCase().includes('brick') || cs.primaryService.toLowerCase().includes('repoint')
              ? 'brickwork-repointing' : 'stonework'} className="bg-accent text-navy font-semibold px-6 py-3 rounded inline-flex items-center gap-2">Get a quote <ArrowRight aria-hidden="true" className="w-4 h-4" /></QuoteCTAButton>
            <a href="tel:0414922276" className="underline">Call Minas on 0414 922 276</a>
          </div>
        </div>
      </section>
    </>
  );
};
export default CaseStudyTemplate;
