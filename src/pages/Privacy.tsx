import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | MyTechMedics - Macon Apple Device Repair</title>
        <meta name="description" content="MyTechMedics privacy policy. Learn how we collect, use, and protect your personal information when you use our Apple device repair services in Macon." />
      </Helmet>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/src/assets/logo.png" 
                alt="Tech Medics Macon GA - iPhone iPad MacBook repair logo" 
                width="947"
                height="349"
                className="h-8" 
              />
              <span className="text-xl font-bold">MyTechMedics</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
              <Link to="/macon" className="text-sm font-medium hover:text-primary transition-colors">Macon</Link>
              <Link to="/macon/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
              <Link to="/macon/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">Last Updated: October 17, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                At MyTechMedics, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold m-0">Information We Collect</h2>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                <p className="text-muted-foreground mb-2">We may collect personal information that you provide to us, including:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Device information (model, serial number, IMEI)</li>
                  <li>Repair history and service records</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-2">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>IP address and browser information</li>
                  <li>Device and operating system details</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold m-0">How We Use Your Information</h2>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="text-muted-foreground mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our repair services</li>
                  <li>Process your repair orders and payments</li>
                  <li>Communicate with you about your device and repairs</li>
                  <li>Send you updates, promotions, and service announcements</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Maintain records for warranty and quality purposes</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold m-0">Information Sharing and Disclosure</h2>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="text-muted-foreground mb-3">We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business</li>
                  <li><strong>Payment Processors:</strong> To process your payments securely</li>
                  <li><strong>Parts Suppliers:</strong> When necessary to obtain parts for your repair</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold m-0">Data Security</h2>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="text-muted-foreground mb-3">
                  We implement appropriate technical and organizational measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure storage facilities for physical devices</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information by authorized personnel only</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold m-0">Your Privacy Rights</h2>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="text-muted-foreground mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Object:</strong> Object to processing of your personal information</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="text-muted-foreground mb-3">
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  You can control cookies through your browser settings.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="text-muted-foreground">
                  Our services are not directed to children under 13. We do not knowingly collect personal information 
                  from children under 13. If you believe we have collected information from a child under 13, please contact us.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy 
                  Policy periodically for any changes.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <p className="text-muted-foreground mb-3">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="text-muted-foreground space-y-1">
                  <p><strong>MyTechMedics</strong></p>
                  <p>Email: <a href="mailto:privacy@mytechmedics.com" className="text-primary hover:underline">privacy@mytechmedics.com</a></p>
                  <p>Phone: <a href="tel:+14781234567" className="text-primary hover:underline">(478) 123-4567</a></p>
                  <p>Address: Macon, Georgia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 MyTechMedics. All rights reserved. | <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
