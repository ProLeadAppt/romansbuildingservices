import { CheckCircle, Phone } from 'lucide-react';
import { QuoteSurvey } from '@/components/quote';

const trustPoints = ['Sydney masonry work since 1995', 'Licenced and insured', 'Free quote, no obligation'];

export const ModernContactSection = () => (
  <section id="contact" data-p2-section="conversion" className="bg-navy px-5 py-16 text-white sm:px-6 md:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber">Show us the problem</p>
        <h2 className="font-heading text-4xl leading-[1.05] sm:text-5xl">A few details and clear photos are enough to start.</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/70">Use the short form or call Minas directly. You do not need to diagnose the work before getting in touch.</p>
        <a href="tel:0414922276" className="mt-8 inline-flex min-h-12 items-center gap-3 font-heading text-3xl text-white underline decoration-amber decoration-2 underline-offset-8">
          <Phone className="h-6 w-6 text-amber" aria-hidden="true" /> 0414 922 276
        </a>
        <ul className="mt-9 space-y-3">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-3 text-sm text-white/75">
              <CheckCircle className="h-5 w-5 flex-none text-amber" aria-hidden="true" /> {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-5 text-slate-900 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy/80">Sydney quote enquiry</p>
        <h3 className="mb-6 font-heading text-3xl text-navy">Tell us what you are looking at.</h3>
        <QuoteSurvey variant="inline" headingLevel="h4" />
      </div>
    </div>
  </section>
);
