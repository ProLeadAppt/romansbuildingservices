import { Helmet } from 'react-helmet-async';

const TermsOfServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Romans Building Services</title>
        <meta name="description" content="Terms of Service for Romans Building Services. Professional building and restoration services in Sydney with full compliance to Australian Consumer Law." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of services provided by Romans Building Services (ABN: 49 641 892 677) ("we", "our", "us", "Company"). By engaging our services or using our website, you agree to be bound by these Terms.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Our services are subject to Australian Consumer Law, NSW Fair Trading regulations, and building industry standards. These Terms should be read in conjunction with our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Offered</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">Romans Building Services provides:</p>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Building restoration and remedial work</li>
                  <li>Masonry and brickwork services</li>
                  <li>Foundation and structural repairs</li>
                  <li>Heritage restoration projects</li>
                  <li>Concrete repairs and restoration</li>
                  <li>Property assessments and consultations</li>
                  <li>Emergency building repairs</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  All services are performed by licensed professionals in accordance with NSW building regulations and Australian Standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Professional Standards</h2>
                <h3 className="text-xl font-medium text-foreground mb-3">3.1 Licensing and Insurance</h3>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>All work is performed by appropriately licensed tradespeople</li>
                  <li>We maintain current public liability insurance</li>
                  <li>Professional indemnity coverage for all services</li>
                  <li>Workers compensation insurance for all employees</li>
                  <li>Compliance with NSW Home Building Act 1989</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">3.2 Quality Standards</h3>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>All work meets or exceeds Australian Building Standards</li>
                  <li>Use of quality materials from reputable suppliers</li>
                  <li>Regular quality inspections during project execution</li>
                  <li>Compliance with local council requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Consumer Guarantees</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Under Australian Consumer Law, you have guaranteed rights that cannot be excluded. Our services come with guarantees that:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Services will be provided with due care and skill</li>
                  <li>Services will be fit for purpose</li>
                  <li>Services will be provided within a reasonable time</li>
                  <li>Materials will be of acceptable quality</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  If services fail to meet these guarantees, you may be entitled to remedies including repair, replacement, or compensation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Quotations and Pricing</h2>
                <h3 className="text-xl font-medium text-foreground mb-3">5.1 Assessment and Quotation Process</h3>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Free initial consultations and property assessments</li>
                  <li>Detailed written quotations provided within 7 business days</li>
                  <li>Quotations valid for 30 days unless otherwise specified</li>
                  <li>All prices include GST unless otherwise noted</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">5.2 Pricing and Variations</h3>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Fixed price quotations where scope is clearly defined</li>
                  <li>Time and materials for complex or uncertain work</li>
                  <li>Written approval required for any variations over 10% of quoted price</li>
                  <li>Additional work charged at agreed hourly rates</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Payment Terms</h2>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Payment terms are Net 14 days unless otherwise agreed</li>
                  <li>Progress payments may be required for larger projects</li>
                  <li>Final payment due upon practical completion</li>
                  <li>Late payment may incur interest charges at 10% per annum</li>
                  <li>Accepted payment methods: Bank transfer, cheque, credit card</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  We comply with NSW Security of Payment Act for construction work payments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Project Management</h2>
                <h3 className="text-xl font-medium text-foreground mb-3">7.1 Commencement and Scheduling</h3>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Work commences upon signed contract and deposit payment</li>
                  <li>Scheduling subject to weather, material availability, and permit approvals</li>
                  <li>Regular progress updates provided to clients</li>
                  <li>Site safety protocols strictly enforced</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">7.2 Client Responsibilities</h3>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Provide safe and reasonable access to work areas</li>
                  <li>Obtain necessary council approvals where required</li>
                  <li>Disclose known hazards or special conditions</li>
                  <li>Make timely decisions on material selections and variations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Warranties and Liability</h2>
                <h3 className="text-xl font-medium text-foreground mb-3">8.1 Workmanship Warranty</h3>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>12-month warranty on workmanship defects</li>
                  <li>Material warranties as provided by manufacturers</li>
                  <li>Structural work warranty as required by NSW legislation</li>
                  <li>Warranty excludes normal wear and tear</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">8.2 Liability Limitations</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Our liability is limited to the extent permitted by law. We maintain professional indemnity and public liability insurance. Our maximum liability for any claim is limited to the value of the specific service contract.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Dispute Resolution</h2>
                <h3 className="text-xl font-medium text-foreground mb-3">9.1 Complaint Procedure</h3>
                <ol className="list-decimal pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Contact us directly to discuss any concerns</li>
                  <li>Written complaint submitted for formal review</li>
                  <li>Response provided within 14 business days</li>
                  <li>Independent mediation if required</li>
                </ol>

                <h3 className="text-xl font-medium text-foreground mb-3">9.2 External Resolution</h3>
                <p className="text-foreground/80 leading-relaxed">
                  If we cannot resolve your complaint, you may contact NSW Fair Trading or pursue resolution through the NSW Civil and Administrative Tribunal (NCAT) for building disputes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Website Terms</h2>
                <h3 className="text-xl font-medium text-foreground mb-3">10.1 Acceptable Use</h3>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Use our website lawfully and appropriately</li>
                  <li>Do not attempt to compromise website security</li>
                  <li>Respect intellectual property rights</li>
                  <li>Provide accurate information in forms and communications</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">10.2 Disclaimer</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Information on our website is general in nature and not professional advice for specific situations. We recommend consultation for project-specific requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Emergency Services</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  For emergency building repairs that pose immediate safety risks:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>24/7 emergency response available</li>
                  <li>Priority scheduling for urgent safety issues</li>
                  <li>Emergency rates may apply for after-hours service</li>
                  <li>Temporary safety measures implemented immediately</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Termination</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Either party may terminate a service contract with written notice subject to:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Payment for work completed to date</li>
                  <li>Reasonable costs for materials ordered</li>
                  <li>Site make-safe requirements</li>
                  <li>Return of client property and materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Governing Law</h2>
                <p className="text-foreground/80 leading-relaxed">
                  These Terms are governed by the laws of New South Wales, Australia. Any disputes will be subject to the jurisdiction of NSW courts and tribunals.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Information</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  For questions about these Terms or our services:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-foreground font-medium mb-2">Romans Building Services</p>
                  <p className="text-foreground/80">Phone: +61 483 981 292</p>
                  <p className="text-foreground/80">Email: romanspropertyservices@gmail.com</p>
                  <p className="text-foreground/80">ABN: 49 641 892 677</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">15. Updates to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update these Terms from time to time. Changes will be posted on our website with an updated "last modified" date. Continued use of our services after changes constitutes acceptance of the updated Terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;