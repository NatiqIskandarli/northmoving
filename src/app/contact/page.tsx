import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | NorthMoving.ca - Get Your Free Moving Quote',
  description: 'Contact NorthMoving.ca for your free moving quote. Call +1-437-871-2382 or visit us at 5 Defries St, Toronto. Professional moving services in Toronto & GTA.',
  keywords: 'contact NorthMoving, moving quote Toronto, moving company contact, Toronto movers phone, GTA moving services contact',
  openGraph: {
    title: 'Contact Us | NorthMoving.ca',
    description: 'Contact NorthMoving.ca for your free moving quote. Professional moving services in Toronto & GTA.',
    url: 'https://northmoving.ca/contact',
    siteName: 'NorthMoving.ca',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://northmoving.ca/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <MessageSquare className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Contact Us</span>
            </div>
            <h1 className="heading-1 mb-6">
              Get Your Free Moving Quote Today
            </h1>
            <p className="text-lead mb-8 max-w-3xl mx-auto">
              Ready to move? Contact our professional moving team for a free, no-obligation quote. 
              We&apos;re here to make your relocation smooth and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14378712382" className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now: +1 (437) 871-2382</span>
              </a>
              <Link href="/quote" className="btn-secondary text-lg px-8 py-4">
                Get Online Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="heading-2 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                    <a href="tel:+14378712382" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                      +1 (437) 871-2382
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">Send us your moving details</p>
                    <a href="mailto:info@northmoving.ca" className="text-blue-600 hover:text-blue-700 font-semibold">
                      info@northmoving.ca
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-600 mb-2">Visit us for in-person consultation</p>
                    <address className="text-gray-700 not-italic">
                      5 Defries Street<br />
                      Toronto, ON M5A 0W7<br />
                      Canada
                    </address>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600 mb-2">We&apos;re available 7 days a week</p>
                    <div className="text-gray-700">
                      <p>Monday - Sunday: 8:00 AM - 8:00 PM</p>
                      <p className="text-sm text-gray-500 mt-1">Emergency moves available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="mt-12 bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Name</label>
                      <input type="text" className="form-input" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="form-label">Phone</label>
                      <input type="tel" className="form-input" placeholder="Your phone" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="Your email" />
                  </div>
                  <div>
                    <label className="form-label">Message</label>
                    <textarea className="form-input h-24 resize-none" placeholder="Tell us about your moving needs..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="heading-2 mb-8">Find Us</h2>
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8234567890123!2d-79.3656!3d43.6532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2b05d6c7b3%3A0x1234567890abcdef!2s5%20Defries%20St%2C%20Toronto%2C%20ON%20M5A%200W7%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NorthMoving.ca Office Location"
                ></iframe>
              </div>
              
              {/* Service Areas */}
              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-4">We provide moving services throughout the Greater Toronto Area:</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Toronto</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Mississauga</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Brampton</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Markham</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Vaughan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Richmond Hill</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Oakville</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Burlington</span>
                  </div>
                </div>
                <Link href="/service-areas" className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  View All Service Areas →
                </Link>
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
              Contact us today for your free moving quote and experience the difference 
              professional movers can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14378712382" className="btn-white text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call +1 (437) 871-2382</span>
              </a>
              <Link href="/quote" className="btn-outline-white text-lg px-8 py-4">
                Get Online Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 