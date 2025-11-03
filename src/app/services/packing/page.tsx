import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Package, 
  CheckCircle, 
  Phone, 
  Star,
  Shield,
  Clock,
  Users,
  Box,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Professional Packing Services Toronto | Moving Packing & Unpacking | NorthMoving.ca',
  description: 'Expert packing and unpacking services in Toronto & GTA. Professional packers protect your belongings with quality materials. Full-service packing solutions available.',
  keywords: 'packing services Toronto, professional packers GTA, moving packing, unpacking services, fragile packing Toronto, packing supplies, moving boxes',
  openGraph: {
    title: 'Professional Packing Services Toronto | NorthMoving.ca',
    description: 'Expert packing and unpacking services in Toronto & GTA. Professional packers protect your belongings with quality materials.',
    url: 'https://northmoving.ca/services/packing',
    siteName: 'NorthMoving.ca',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://northmoving.ca/services/packing',
  },
};

export default function PackingServicesPage() {
  const services = [
    {
      icon: <Package className="h-8 w-8 text-blue-600" />,
      title: "Full-Service Packing",
      description: "Complete packing service for your entire home or office. We pack everything safely and efficiently."
    },
    {
      icon: <Box className="h-8 w-8 text-blue-600" />,
      title: "Fragile Item Packing",
      description: "Specialized packing for delicate items like artwork, antiques, electronics, and glassware."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Unpacking Services",
      description: "Professional unpacking at your new location. We'll unpack and place items where you want them."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Partial Packing",
      description: "Pack only what you need help with. Perfect for fragile items or rooms you don't have time for."
    }
  ];

  const features = [
    "High-quality packing materials",
    "Trained professional packers",
    "Fragile item specialists",
    "Inventory tracking system",
    "Custom crating available",
    "Eco-friendly packing options",
    "Same-day packing service",
    "Unpacking services included"
  ];

  const process = [
    {
      step: "1",
      title: "Packing Assessment",
      description: "We evaluate your items and determine the best packing approach and materials needed."
    },
    {
      step: "2",
      title: "Material Preparation",
      description: "We bring all necessary packing supplies including boxes, bubble wrap, and protective materials."
    },
    {
      step: "3",
      title: "Professional Packing",
      description: "Our trained packers carefully pack each item using proper techniques and materials."
    },
    {
      step: "4",
      title: "Labeling & Inventory",
      description: "Everything is labeled and inventoried for easy unpacking at your new location."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Package className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Packing Services</span>
            </div>
            <h1 className="heading-1 mb-6">
              Professional Packing Services in <span className="text-gradient">Toronto & GTA</span>
            </h1>
            <p className="text-lead mb-8 max-w-3xl mx-auto">
              Protect your belongings with our expert packing services. Our professional packers 
              use high-quality materials and proven techniques to ensure your items arrive safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <a href="tel:+14378719288" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call +1 (437) 871-9288</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Our Packing Services</h2>
            <p className="text-lead max-w-3xl mx-auto">
              From full-service packing to specialized fragile item protection, we have the right solution for you.
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
              <h2 className="heading-2 mb-6">Why Choose Our Packing Services?</h2>
              <p className="text-lead mb-8">
                Our professional packers have years of experience protecting valuable and fragile items. 
                We use only the highest quality materials and proven packing techniques.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Packing Quote</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Fully Insured Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Same-Day Service Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Professional Packers</span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <Link href="/quote" className="btn-primary w-full text-center">
                  Get Packing Quote
                </Link>
                                  <a href="tel:+14378719288" className="btn-outline w-full text-center flex items-center justify-center space-x-2">
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
            <h2 className="heading-2 mb-6">Our Packing Process</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Our systematic packing approach ensures every item is properly protected and organized for your move.
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

      {/* Related Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Related Services</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Explore our other professional moving services to make your relocation complete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/residential" className="card group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Package className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Residential Moving
                </h3>
              </div>
              <p className="text-gray-600">
                Complete home moving services with professional packing included.
              </p>
              <span className="inline-block mt-4 text-blue-600 font-semibold group-hover:underline">
                Learn More →
              </span>
            </Link>

            <Link href="/pricing" className="card group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <CheckCircle className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Pricing & Packages
                </h3>
              </div>
              <p className="text-gray-600">
                View our transparent pricing for packing and moving services.
              </p>
              <span className="inline-block mt-4 text-blue-600 font-semibold group-hover:underline">
                View Pricing →
              </span>
            </Link>

            <Link href="/services/specialty" className="card group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Heart className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Specialty Moving
                </h3>
              </div>
              <p className="text-gray-600">
                Expert packing and moving for pianos, antiques, and valuables.
              </p>
              <span className="inline-block mt-4 text-blue-600 font-semibold group-hover:underline">
                Learn More →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Professional Packing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our expert packers protect your belongings. Get your free packing quote
              today and move with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-white text-lg px-8 py-4">
                Get Packing Quote
              </Link>
              <a href="tel:+14378719288" className="btn-outline-white text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call +1 (437) 871-9288</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 