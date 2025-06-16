import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | NorthMoving.ca - Service Terms & Conditions',
  description: 'Read NorthMoving.ca terms of service. Understand our moving service terms, conditions, and policies for Toronto & GTA moving services.',
  keywords: 'terms of service, moving terms, service conditions, NorthMoving.ca terms',
  openGraph: {
    title: 'Terms of Service | NorthMoving.ca',
    description: 'Read NorthMoving.ca terms of service and understand our moving service conditions.',
    url: 'https://northmoving.ca/terms',
    siteName: 'NorthMoving.ca',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://northmoving.ca/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Terms of Service</span>
            </div>
            <h1 className="heading-1 mb-6">
              Terms of Service
            </h1>
            <p className="text-lead mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our moving services. These terms govern your use of NorthMoving.ca services.
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
            
            <h2>Acceptance of Terms</h2>
            <p>
              By using NorthMoving.ca services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>Service Description</h2>
            <p>
              NorthMoving.ca provides professional moving services including:
            </p>
            <ul>
              <li>Residential and commercial moving</li>
              <li>Packing and unpacking services</li>
              <li>Specialty item moving (pianos, antiques, etc.)</li>
              <li>Furniture transportation</li>
              <li>Manpower-only services</li>
            </ul>

            <h2>Booking and Estimates</h2>
            <h3>Estimates</h3>
            <ul>
              <li>All estimates are provided free of charge</li>
              <li>Estimates are based on information provided by the customer</li>
              <li>Final costs may vary based on actual services required</li>
              <li>Written estimates are valid for 30 days</li>
            </ul>
            
            <h3>Booking Confirmation</h3>
            <ul>
              <li>Services must be booked in advance</li>
              <li>A deposit may be required to secure your moving date</li>
              <li>Booking confirmation will be provided in writing</li>
            </ul>

            <h2>Payment Terms</h2>
            <ul>
              <li><strong>Payment Methods:</strong> Cash, credit card, debit card, e-transfer</li>
              <li><strong>Payment Timing:</strong> Payment is due upon completion of services</li>
              <li><strong>Deposits:</strong> Deposits are non-refundable unless we cancel the service</li>
              <li><strong>Additional Charges:</strong> Extra services not in the original estimate will be charged separately</li>
            </ul>

            <h2>Customer Responsibilities</h2>
            <p>
              As a customer, you are responsible for:
            </p>
            <ul>
              <li>Providing accurate information about your move</li>
              <li>Preparing items for moving (disconnecting appliances, etc.)</li>
              <li>Being present or having an authorized representative present</li>
              <li>Providing clear access to both origin and destination</li>
              <li>Declaring valuable or fragile items</li>
              <li>Obtaining necessary permits for parking or building access</li>
            </ul>

            <h2>Prohibited Items</h2>
            <p>
              We cannot move the following items:
            </p>
            <ul>
              <li>Hazardous materials (flammable, explosive, toxic substances)</li>
              <li>Perishable food items</li>
              <li>Live plants and animals</li>
              <li>Personal documents and valuables (jewelry, cash, important papers)</li>
              <li>Illegal items or substances</li>
            </ul>

            <h2>Insurance and Liability</h2>
            <h3>Our Insurance</h3>
            <ul>
              <li>We carry comprehensive liability insurance</li>
              <li>Basic coverage is included in our standard rates</li>
              <li>Additional insurance coverage is available upon request</li>
            </ul>
            
            <h3>Liability Limitations</h3>
            <ul>
              <li>Our liability is limited to the declared value of items</li>
              <li>We are not liable for items not declared as valuable</li>
              <li>Damage claims must be reported within 24 hours</li>
              <li>We are not liable for delays due to circumstances beyond our control</li>
            </ul>

            <h2>Cancellation Policy</h2>
            <ul>
              <li><strong>Customer Cancellation:</strong> 48 hours notice required for full refund of deposit</li>
              <li><strong>Same-Day Cancellation:</strong> Deposit is forfeited</li>
              <li><strong>Weather Cancellation:</strong> We may reschedule due to severe weather conditions</li>
              <li><strong>Our Cancellation:</strong> Full refund provided if we cancel</li>
            </ul>

            <h2>Dispute Resolution</h2>
            <p>
              In case of disputes:
            </p>
            <ul>
              <li>We encourage direct communication to resolve issues</li>
              <li>Formal complaints should be submitted in writing</li>
              <li>We will respond to complaints within 5 business days</li>
              <li>Unresolved disputes may be subject to mediation or arbitration</li>
            </ul>

            <h2>Force Majeure</h2>
            <p>
              We are not liable for delays or inability to perform due to circumstances beyond our control, including but not limited to:
            </p>
            <ul>
              <li>Natural disasters</li>
              <li>Government regulations</li>
              <li>Labor strikes</li>
              <li>Equipment failure</li>
              <li>Traffic conditions</li>
            </ul>

            <h2>Privacy</h2>
            <p>
              Your privacy is important to us. Please review our <Link href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.
            </p>

            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Updated terms will be posted on our website with the revision date. Continued use of our services constitutes acceptance of modified terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of Ontario, Canada. Any legal proceedings will be conducted in the courts of Ontario.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have questions about these terms of service, please contact us:
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
                    <div className="text-gray-600">legal@northmoving.ca</div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Now that you understand our terms, get your free moving quote and experience our professional service.
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