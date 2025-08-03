import { Helmet } from 'react-helmet-async';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Romans Building Services</title>
        <meta name="description" content="Privacy Policy for Romans Building Services. Learn how we collect, use, and protect your personal information in compliance with Australian Privacy Act 1988." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Romans Building Services (ABN: 49 641 892 677) ("we", "our", "us") is committed to protecting your privacy and complying with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This Privacy Policy explains how we collect, use, disclose, and manage your personal information.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  By using our services or website, you consent to the collection, use, and disclosure of your personal information as described in this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-foreground mb-3">2.1 Personal Information</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">We may collect the following personal information:</p>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Name and contact details (address, phone, email)</li>
                  <li>Property details and location information</li>
                  <li>Building project requirements and preferences</li>
                  <li>Payment and billing information</li>
                  <li>Communication records and service history</li>
                  <li>Insurance details where relevant to services</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">2.2 Website Information</h3>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>IP address and browser information</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and tracking technologies</li>
                  <li>Form submissions and inquiries</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">We use your personal information for:</p>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Providing building and restoration services</li>
                  <li>Conducting property assessments and quotations</li>
                  <li>Managing projects and communicating updates</li>
                  <li>Processing payments and invoicing</li>
                  <li>Compliance with NSW building regulations and licensing requirements</li>
                  <li>Marketing our services (with your consent)</li>
                  <li>Improving our website and services</li>
                  <li>Legal compliance and dispute resolution</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Subcontractors and trades people working on your project</li>
                  <li>Suppliers and material providers</li>
                  <li>Professional consultants (engineers, architects)</li>
                  <li>Insurance companies and legal advisors</li>
                  <li>Government authorities and regulatory bodies when required</li>
                  <li>Third-party service providers (payment processors, analytics)</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. This includes:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Secure storage systems and encrypted data transmission</li>
                  <li>Access controls and staff training</li>
                  <li>Regular security assessments and updates</li>
                  <li>Secure disposal of personal information when no longer needed</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Marketing Communications</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  With your consent, we may use your contact information to:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Send newsletters and service updates</li>
                  <li>Provide information about new services</li>
                  <li>Conduct customer satisfaction surveys</li>
                  <li>Follow up on completed projects</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  You can opt-out of marketing communications at any time by contacting us or using the unsubscribe link in our emails.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies and Website Analytics</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Our website uses cookies and similar technologies to improve your browsing experience and analyze website traffic. We use:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand website usage</li>
                  <li>Performance cookies to optimize website speed</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">Under Australian privacy law, you have the right to:</p>
                <ul className="list-disc pl-6 text-foreground/80 mb-4 space-y-2">
                  <li>Access your personal information we hold</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Make a complaint about our privacy practices</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  To exercise these rights, please contact us using the details below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Data Retention</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Building project records are retained for 7 years in accordance with NSW building regulations. Marketing information is retained until you opt-out or we determine it's no longer needed.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated "last modified" date. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  For privacy-related inquiries, complaints, or to exercise your rights, please contact:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-foreground font-medium mb-2">Romans Building Services</p>
                  <p className="text-foreground/80">Phone: +61 483 981 292</p>
                  <p className="text-foreground/80">Email: romanspropertyservices@gmail.com</p>
                  <p className="text-foreground/80">ABN: 49 641 892 677</p>
                </div>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  If you're not satisfied with our response, you can lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au or call 1300 363 992.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;