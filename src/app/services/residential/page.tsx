import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Home, 
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
  title: 'Residential Moving Services Toronto | House & Apartment Movers | NorthMoving.ca',
  description: 'Professional residential moving services in Toronto & GTA. House moving, apartment relocations, condo moves. Licensed, insured, and experienced movers. Free quotes available.',
  keywords: 'residential moving Toronto, house movers GTA, apartment moving services, condo relocation, home moving company Toronto, residential movers Mississauga',
  openGraph: {
    title: 'Residential Moving Services Toronto | NorthMoving.ca',
    description: 'Professional residential moving services in Toronto & GTA. Licensed, insured movers for houses, apartments, and condos.',
    url: 'https://northmoving.ca/services/residential',
    siteName: 'NorthMoving.ca',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://northmoving.ca/services/residential',
  },
};

export default function ResidentialMovingPage() {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "House Moving",
      description: "Complete home relocations from single-family homes to large estates. We handle everything from packing to unpacking."
    },
    {
      icon: <Package className="h-8 w-8 text-blue-600" />,
      title: "Apartment Moving",
      description: "Specialized apartment and condo moving services. We navigate tight spaces and building restrictions with ease."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Senior Moving",
      description: "Compassionate moving services for seniors with extra care and patience for a stress-free transition."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Student Moving",
      description: "Affordable moving solutions for students moving to dorms, apartments, or back home."
    }
  ];

  const features = [
    "Professional packing and unpacking",
    "Furniture disassembly and reassembly",
    "Fragile item protection",
    "Moving supplies included",
    "Same-day service available",
    "Weekend and evening moves",
    "Storage solutions available",
    "Full insurance coverage"
  ];

  const process = [
    {
      step: "1",
      title: "Free In-Home Estimate",
      description: "We visit your home to provide an accurate, detailed quote with no hidden fees."
    },
    {
      step: "2",
      title: "Moving Plan Creation",
      description: "We create a customized moving plan that fits your timeline and budget."
    },
    {
      step: "3",
      title: "Professional Packing",
      description: "Our team carefully packs your belongings using high-quality materials."
    },
    {
      step: "4",
      title: "Safe Transportation",
      description: "Your items are loaded, transported, and unloaded with the utmost care."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Residential Moving</span>
            </div>
            <h1 className="heading-1 mb-6">
              Professional Residential Moving Services in <span className="text-gradient">Toronto & GTA</span>
            </h1>
            <p className="text-lead mb-8 max-w-3xl mx-auto">
              Make your home move stress-free with our experienced residential moving team. 
              From houses to apartments, we handle every detail of your relocation with care and professionalism.
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
            <h2 className="heading-2 mb-6">Our Residential Moving Services</h2>
            <p className="text-lead max-w-3xl mx-auto">
              We provide comprehensive residential moving services tailored to your specific needs.
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
              <h2 className="heading-2 mb-6">Why Choose Our Residential Moving Services?</h2>
              <p className="text-lead mb-8">
                We understand that moving your home is more than just transporting belongings - 
                it&apos;s about moving your life. That&apos;s why we provide comprehensive, caring service.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Same-Day Service Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">5-Star Customer Service</span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <Link href="/quote" className="btn-primary w-full text-center">
                  Get Detailed Quote
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
            <h2 className="heading-2 mb-6">Our Residential Moving Process</h2>
            <p className="text-lead max-w-3xl mx-auto">
                              We&apos;ve perfected our moving process to ensure your residential move is smooth and stress-free.
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
              Ready to Move Your Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your free, no-obligation quote today and experience the difference 
              professional residential movers can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-white text-lg px-8 py-4">
                Get Free Quote Now
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