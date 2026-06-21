import { SEO } from '@/components/SEO';
import { Phone, Mail, Clock, MapPin, Instagram } from 'lucide-react';
import { ContactPageSchema, SpeakableSchema, FAQSchema } from '@/components/LocalSEO/StructuredData';
import { QuoteSurvey } from '@/components/quote';

const contactFaqs = [
  {
    question: 'How quickly can Minas come out for a quote?',
    answer:
      'Most Sydney metro quote visits happen within 2 to 5 business days. For active leaks or unsafe structural issues we can usually be on-site within 24 hours. Call 0414 922 276 directly to lock in a time.'
  },
  {
    question: 'Is the quote really free?',
    answer:
      'Yes — site visits and written quotes are free across the Sydney metro area. You get a fixed-price written scope, not an hourly-rate estimate, so there are no surprise add-ons once work starts.'
  },
  {
    question: 'Do you do small jobs or only full restorations?',
    answer:
      'Both. Pointing a single chimney, replacing a few bricks, sealing a crack, fixing a small garden wall — same care as a full heritage facade. Romans does not have a minimum job size.'
  },
  {
    question: 'Are you licenced and insured?',
    answer:
      'Yes. Romans Building Services holds an NSW masonry contractor licence, full public liability insurance, and workers compensation. Documentation is provided with every quote for strata, body corporate and insurance work.'
  },
  {
    question: 'Which Sydney areas do you service?',
    answer:
      'All Sydney metro suburbs, with a focus on the Inner West, Eastern Suburbs, North Shore, Northern Beaches, Hills District and CBD. Common service areas include Strathfield, Paddington, Newtown, Balmain, Glebe, Mosman, Willoughby, Castle Hill and Parramatta.'
  },
  {
    question: 'How do I pay?',
    answer:
      'Bank transfer, credit card or cash. For strata and commercial jobs we offer staged progress payments tied to written milestones. A small deposit secures the booking, balance on completion.'
  }
];

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Romans | Sydney Quote"
        description="Call Minas on 0414 922 276 for a Sydney quote. Romans handles masonry, heritage, structural and remedial work from Strathfield."
        canonical="/contact"
      />
      <ContactPageSchema />
      <SpeakableSchema url="https://romansbuildingservices.com/contact" cssSelectors={['h1', 'p', 'a[href^="tel:"]', 'a[href^="mailto:"]']} />
      <FAQSchema faqs={contactFaqs} />

      <div className="min-h-screen font-body">
        {/* Hero Banner */}
        <section className="bg-navy texture-grain py-24">
          <div className="container mx-auto px-4 text-center">
            <h1
              className="font-heading text-4xl md:text-5xl text-white mb-4">
              Get in Touch
            </h1>
            <p
              className="text-white/80 text-lg max-w-2xl mx-auto">
              Call Minas directly, or fill in the quick form. We will get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Left: Survey */}
              <div
                className="lg:col-span-2">
                <div className="bg-bg-light rounded-lg p-6 md:p-8">
                  <QuoteSurvey variant="inline" />
                </div>
              </div>

              {/* Right: Info Cards */}
              <div
                className="space-y-4">
                <div className="bg-bg-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-navy" />
                    <span className="text-text-muted font-semibold text-sm uppercase tracking-wide">
                      Phone
                    </span>
                  </div>
                  <a
                    href="tel:0414922276"
                    className="font-heading text-2xl md:text-3xl text-navy hover:text-navy-light transition-colors">
                    0414 922 276
                  </a>
                </div>

                <div className="bg-bg-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-navy" />
                    <span className="text-text-muted font-semibold text-sm uppercase tracking-wide">
                      Email
                    </span>
                  </div>
                  <a
                    href="mailto:romanspropertyservices@gmail.com"
                    className="text-navy hover:text-navy-light transition-colors font-semibold break-all">
                    romanspropertyservices@gmail.com
                  </a>
                </div>

                <div className="bg-bg-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-navy" />
                    <span className="text-text-muted font-semibold text-sm uppercase tracking-wide">
                      Hours
                    </span>
                  </div>
                  <p className="text-text-primary font-semibold">
                    By appointment
                  </p>
                </div>

                <div className="bg-bg-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-navy" />
                    <span className="text-text-muted font-semibold text-sm uppercase tracking-wide">
                      Service Area
                    </span>
                  </div>
                  <p className="text-text-primary font-semibold">Sydney metro suburbs</p>
                </div>

                <div className="bg-bg-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Instagram className="w-5 h-5 text-navy" />
                    <span className="text-text-muted font-semibold text-sm uppercase tracking-wide">
                      Instagram
                    </span>
                  </div>
                  <a
                    href="https://www.instagram.com/romansstone/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-navy-light transition-colors font-semibold">
                    @romansstone
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ block — readable on-page AND emitted as FAQPage schema */}
        <section className="bg-bg-light py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-2 text-center">
              Common Questions Before You Call
            </h2>
            <p className="text-text-muted text-center mb-10 max-w-2xl mx-auto">
              Quick answers about quotes, jobs, licensing and service areas.
              Need something specific?{' '}
              <a href="tel:0414922276" className="text-navy underline underline-offset-4 font-semibold">
                Call Minas on 0414 922 276
              </a>
              .
            </p>
            <div className="space-y-3">
              {contactFaqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-lg border border-navy/10 overflow-hidden"
                >
                  <summary className="cursor-pointer px-5 py-4 font-heading text-navy text-lg flex items-center justify-between gap-4 select-none">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden
                      className="text-navy/50 group-open:rotate-45 transition-transform text-2xl leading-none"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-text-primary leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
