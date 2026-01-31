const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Swiftree Technologies – Terms of Use</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              At Swiftree Technologies ("Swiftree", "we", "our", or "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered social commerce platform, including our tools for digital storefronts, payment processing, logistics coordination, and customer engagement services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By registering, subscribing to, or using Swiftree, you agree to the collection and use of information in accordance with this policy. This Privacy Policy is incorporated into and subject to our Terms of Use.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Information You Provide</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you register as a vendor or use our platform, we collect:
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 ml-4">
                  <li><strong>Account Information:</strong> Name, email address, phone number, business name, and credentials</li>
                  <li><strong>Business Details:</strong> Company information, products/services offered, pricing, and business documentation</li>
                  <li><strong>Financial Information:</strong> Nigerian bank account details for settlement purposes (processed securely via Paystack)</li>
                  <li><strong>Customer Interaction Data:</strong> Communications with customers through our platform</li>
                  <li><strong>Order Information:</strong> Products sold, transaction details, and customer delivery information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Information Collected Automatically</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you access our platform, we automatically collect:
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 ml-4">
                  <li><strong>Device and Usage Data:</strong> IP address, browser type, device information, platform usage patterns, and performance metrics</li>
                  <li><strong>Transaction Data:</strong> Information about transactions processed through Paystack integration</li>
                  <li><strong>Analytics Data:</strong> Storefront performance, customer engagement metrics, and sales analytics</li>
                  <li><strong>Logistics Data:</strong> Delivery tracking and coordination information from third-party logistics partners</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Customer Information Collected Through Your Storefront</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a vendor using Swiftree, you may collect customer information through your digital storefront. This data is processed on your behalf and you are responsible for complying with applicable privacy laws. We act as a data processor for such information.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide, maintain, and improve our AI-powered social commerce platform</li>
              <li>Process payments through Paystack integration and manage settlements to your Nigerian bank account</li>
              <li>Coordinate logistics and deliveries through third-party logistics partners</li>
              <li>Operate and manage your digital storefront and customer engagement tools</li>
              <li>Generate analytics and performance insights for your business</li>
              <li>Communicate with you about platform updates, subscription matters, and service announcements</li>
              <li>Detect, prevent, and address fraud, security, or technical issues</li>
              <li>Comply with Nigerian laws and regulations, including tax and financial reporting requirements</li>
              <li>Train and improve our AI models for better customer service automation</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-2xl font-bold mb-4">How We Share Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We share information with third parties only as necessary to provide our services:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Payment Processors:</strong> We share transaction data with Paystack for payment processing and compliance purposes</li>
              <li><strong>Logistics Partners:</strong> We share delivery information with third-party logistics providers (e.g., Sendbox) to coordinate last-mile delivery</li>
              <li><strong>Service Providers:</strong> We engage trusted third parties for hosting, analytics, customer support, and technical maintenance</li>
              <li><strong>Legal and Regulatory Authorities:</strong> We may disclose information when required by Nigerian law or in response to lawful requests</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of company assets</li>
              <li><strong>With Your Consent:</strong> For any other purpose disclosed with your explicit consent</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Important:</strong> Swiftree acts as a technology infrastructure provider and does not directly hold customer funds. All payments are processed through Paystack's secure infrastructure.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your information, including encryption, access controls, and secure data transmission. Our payment processing is handled through Paystack, which is PCI DSS compliant. However, no electronic transmission or storage method is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Under applicable laws, including Nigerian data protection regulations, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal data, subject to legal retention requirements</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing in certain circumstances</li>
              <li>Data portability for information you provided</li>
              <li>Withdraw consent at any time, without affecting lawfulness of prior processing</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, contact us at support@swiftree.app. We may require verification of your identity before processing certain requests.
            </p>
          </div>

          {/* International Data Transfers */}
          <div>
            <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries other than Nigeria, including countries that may have different data protection laws. We ensure appropriate safeguards are in place for such transfers, including standard contractual clauses and adequacy decisions where applicable.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2 ml-4">
              <li>Provide the services you requested</li>
              <li>Comply with legal obligations (including tax, accounting, and financial reporting requirements under Nigerian law)</li>
              <li>Resolve disputes and enforce our agreements</li>
              <li>Maintain business records for legitimate business purposes</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Transaction and settlement data is retained as required by financial regulations. Upon termination of your account, we will retain and use your information as necessary to comply with legal obligations.
            </p>
          </div>

          {/* Third-Party Services */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our platform integrates with third-party services that have their own privacy policies:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2 ml-4">
              <li><strong>Paystack:</strong> Our payment processing partner. Their privacy policy governs how they handle payment data</li>
              <li><strong>Logistics Providers:</strong> Third-party delivery services that handle shipment and delivery information</li>
              <li><strong>Cloud Services:</strong> Hosting and infrastructure providers that store platform data</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </div>

          {/* AI and Automated Processing */}
          <div>
            <h2 className="text-2xl font-bold mb-4">AI and Automated Processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our platform uses artificial intelligence to automate customer responses, optimize storefront performance, and provide business insights. This involves automated processing of data to improve service delivery. You may request human intervention or challenge decisions made solely by automated means by contacting us.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are intended for business users who are at least 18 years old. We do not knowingly collect personal information from individuals under 18. If you become aware that a child has provided us with personal information, please contact us immediately.
            </p>
          </div>

          {/* Changes to Policy */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of material changes through email or platform notifications. The "Last updated" date at the top indicates when revisions were made. Continued use of Swiftree after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions, concerns, or to exercise your privacy rights:
            </p>
            <div className="mt-4 text-muted-foreground space-y-2">
              <p>Email: support@swiftree.app</p>
              <p>Swiftree Technologies</p>
              <p>Lagos, Nigeria</p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              For payment-related inquiries, please also refer to Paystack's support channels as indicated in their privacy policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;