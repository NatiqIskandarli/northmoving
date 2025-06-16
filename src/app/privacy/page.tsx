import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | NorthMoving.ca - Your Privacy Matters',
  description: 'Read NorthMoving.ca privacy policy. Learn how we collect, use, and protect your personal information when you use our moving services in Toronto & GTA.',
  keywords: 'privacy policy, data protection, personal information, NorthMoving.ca privacy',
  openGraph: {
    title: 'Privacy Policy | NorthMoving.ca',
    description: 'Read NorthMoving.ca privacy policy. Learn how we protect your personal information.',
    url: 'https://northmoving.ca/privacy',
    siteName: 'NorthMoving.ca',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://northmoving.ca/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Privacy Policy</span>
            </div>
            <h1 className="heading-1 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lead mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-gray-600">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <h2>Information We Collect</h2>
            <p>
              When you use our moving services, we may collect the following types of information:
            </p>
            <ul>
              <li><strong>Personal Information:</strong> Name, address, phone number, email address</li>
              <li><strong>Moving Details:</strong> Origin and destination addresses, moving date, inventory details</li>
              <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely)</li>
              <li><strong>Communication Records:</strong> Phone calls, emails, and messages for service quality</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use your personal information for the following purposes:
            </p>
            <ul>
              <li>Providing moving services and customer support</li>
              <li>Scheduling and coordinating your move</li>
              <li>Processing payments and billing</li>
              <li>Communicating about your service</li>
              <li>Improving our services and customer experience</li>
              <li>Complying with legal requirements</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted partners who help us provide our services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of assets</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul>
              <li>Secure data transmission using SSL encryption</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Regular security assessments and updates</li>
              <li>Secure storage of physical and digital records</li>
            </ul>

            <h2>Your Rights</h2>
            <p>
              You have the following rights regarding your personal information:
            </p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>

            <h2>Cookies and Website Data</h2>
            <p>
              Our website may use cookies and similar technologies to:
            </p>
            <ul>
              <li>Improve website functionality and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Remember your preferences and settings</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law. Moving records are typically retained for 7 years for business and legal purposes.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or how we handle your personal information, please contact us:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 not-prose">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-600">(416) 123-MOVE</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">privacy@northmoving.ca</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Move with Confidence?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Your privacy is protected. Get your free moving quote today and experience our professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-white text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <Link href="/contact" className="btn-outline-white text-lg px-8 py-4">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 