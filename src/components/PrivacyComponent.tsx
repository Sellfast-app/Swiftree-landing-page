const Privacy = () => {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-20 px-4 md:px-8 lg:px-16 border-b">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
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
                At Swiftree, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services and website. Please read this privacy policy carefully.
              </p>
            </div>
  
            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise contact us. This includes:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 ml-4">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company information and business details</li>
                    <li>Account credentials</li>
                    <li>Payment and billing information</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies installed on your device.
                  </p>
                </div>
              </div>
            </div>
  
            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the information we collect or receive to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Communicate with you about updates, offers, and promotional materials</li>
                <li>Process your transactions and manage your account</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
  
            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold mb-4">How We Share Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities</li>
                <li><strong>With Your Consent:</strong> We may share your information with your explicit consent</li>
              </ul>
            </div>
  
            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
  
            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict the processing of your data</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Data portability rights</li>
              </ul>
            </div>
  
            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </div>
  
            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>
  
            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>
  
            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
  
            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: support@swiftree.app</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Privacy;