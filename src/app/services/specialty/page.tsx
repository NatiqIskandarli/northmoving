import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Piano, 
  CheckCircle, 
  Phone, 
  Star,
  Shield,
  Clock,
  Users,
  Package,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Specialty Moving Services Toronto | Piano & Antique Movers | NorthMoving.ca',
  description: 'Expert specialty moving services in Toronto & GTA. Piano moving, antique transport, artwork handling. Specialized equipment and trained professionals for valuable items.',
  keywords: 'specialty moving Toronto, piano movers GTA, antique moving services, artwork transport, specialty item movers, piano moving Toronto, fragile item movers',
  openGraph: {
    title: 'Specialty Moving Services Toronto | NorthMoving.ca',
    description: 'Expert specialty moving services in Toronto & GTA. Piano moving, antique transport, artwork handling with specialized equipment.',
    url: 'https://northmoving.ca/services/specialty',
    siteName: 'NorthMoving.ca',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://northmoving.ca/services/specialty',
  },
};

export default function SpecialtyMovingPage() {
  const services = [
    {
      icon: <Piano className="h-8 w-8 text-blue-600" />,
      title: "Piano Moving",
      description: "Expert piano moving with specialized equipment. We handle uprights, grands, and digital pianos with care."
    },
    {
      icon: <Package className="h-8 w-8 text-blue-600" />,
      title: "Antique Moving",
      description: "Careful transport of antique furniture and collectibles with custom protection and handling."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Artwork & Sculptures",
      description: "Professional art handling with custom crating and climate-controlled transport when needed."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Valuable Items",
      description: "Safes, gun cabinets, wine collections, and other high-value items moved with extra security."
    }
  ];

  const features = [
    "Specialized moving equipment",
    "Trained specialty movers",
    "Custom protection methods",
    "Climate-controlled transport",
    "Full insurance coverage",
    "White-glove service",
    "Custom crating available",
    "Professional assessment"
  ];

  const process = [
    {
      step: "1",
      title: "Item Assessment",
      description: "We evaluate your specialty items to determine the best moving approach and equipment needed."
    },
    {
      step: "2",
      title: "Custom Protection",
      description: "We create custom protection plans and gather specialized equipment for your items."
    },
    {
      step: "3",
      title: "Expert Handling",
      description: "Our trained specialists carefully move your valuable items using proper techniques."
    },
    {
      step: "4",
      title: "Safe Delivery",
      description: "Your specialty items are delivered and placed exactly where you want them."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Piano className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Specialty Moving</span>
            </div>
            <h1 className="heading-1 mb-6">
              Specialty Moving Services in <span className="text-gradient">Toronto & GTA</span>
            </h1>
            <p className="text-lead mb-8 max-w-3xl mx-auto">
              Trust your most valuable and delicate items to our specialty moving experts. 
              We have the equipment, training, and experience to handle pianos, antiques, artwork, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <a href="tel:+14378712382" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call +1 (437) 871-2382</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Our Specialty Moving Services</h2>
            <p className="text-lead max-w-3xl mx-auto">
              We specialize in moving valuable, fragile, and unique items that require extra care and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Why Choose Our Specialty Moving Services?</h2>
              <p className="text-lead mb-8">
                Your valuable items deserve the highest level of care. Our specialty moving team 
                has the training, equipment, and experience to handle your most precious belongings.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Specialty Quote</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Full Insurance Coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Flexible Scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Specialty Trained Team</span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <Link href="/quote" className="btn-primary w-full text-center">
                  Get Specialty Quote
                </Link>
                                  <a href="tel:+14378712382" className="btn-outline w-full text-center flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Our Specialty Moving Process</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Every specialty item requires a unique approach. Our process ensures your valuable items are handled with the utmost care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Specialty Moving Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Trust your valuable items to our specialty moving experts. Get your free quote 
              today and ensure your precious belongings are in safe hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-white text-lg px-8 py-4">
                Get Specialty Quote
              </Link>
              <a href="tel:+14378712382" className="btn-outline-white text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call +1 (437) 871-2382</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 