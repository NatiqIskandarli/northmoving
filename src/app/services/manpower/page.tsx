import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Users, 
  CheckCircle, 
  Phone, 
  Star,
  Shield,
  Clock,
  Package,
  Truck,
  Home
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manpower Only Services Toronto | Loading & Unloading Help | NorthMoving.ca',
  description: 'Professional manpower only services in Toronto & GTA. Loading, unloading, and moving labor. Hourly rates for moving help without the truck.',
  keywords: 'manpower only Toronto, loading unloading help GTA, moving labor, moving helpers Toronto, hourly movers, labor only moving services',
  openGraph: {
    title: 'Manpower Only Services Toronto | NorthMoving.ca',
    description: 'Professional manpower only services in Toronto & GTA. Loading, unloading, and moving labor without the truck.',
    url: 'https://northmoving.ca/services/manpower',
    siteName: 'NorthMoving.ca',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://northmoving.ca/services/manpower',
  },
};

export default function ManpowerOnlyPage() {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Loading & Unloading",
      description: "Professional help loading and unloading your rental truck, moving container, or storage unit."
    },
    {
      icon: <Package className="h-8 w-8 text-blue-600" />,
      title: "Packing Assistance",
      description: "Extra hands to help pack your belongings quickly and efficiently when you're short on time."
    },
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Heavy Item Moving",
      description: "Need help moving heavy furniture or appliances within your home? We provide the muscle."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Assembly Help",
      description: "Furniture assembly, disassembly, and setup assistance for your new or existing items."
    }
  ];

  const features = [
    "Hourly rate pricing",
    "Minimum 2-hour booking",
    "Professional moving equipment",
    "Experienced moving crew",
    "Same-day availability",
    "Flexible scheduling",
    "No truck rental needed",
    "Fully insured workers"
  ];

  const process = [
    {
      step: "1",
      title: "Book Your Crew",
      description: "Tell us what you need help with and when. We'll send the right number of movers."
    },
    {
      step: "2",
      title: "Crew Arrives",
      description: "Our professional moving crew arrives with all necessary equipment and tools."
    },
    {
      step: "3",
      title: "Get the Job Done",
      description: "Our team works efficiently to complete your loading, unloading, or moving tasks."
    },
    {
      step: "4",
      title: "Pay by the Hour",
      description: "You only pay for the time used, with transparent hourly rates and no hidden fees."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Manpower Only</span>
            </div>
            <h1 className="heading-1 mb-6">
              Manpower Only Services in <span className="text-gradient">Toronto & GTA</span>
            </h1>
            <p className="text-lead mb-8 max-w-3xl mx-auto">
              Need extra hands for your move? Our manpower-only service provides professional 
              moving help without the truck. Perfect for loading, unloading, and heavy lifting.
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
            <h2 className="heading-2 mb-6">Our Manpower Services</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Professional moving help when you need extra hands but have your own transportation.
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
              <h2 className="heading-2 mb-6">Why Choose Our Manpower Services?</h2>
              <p className="text-lead mb-8">
                Sometimes you just need extra muscle. Our manpower-only service gives you 
                professional moving help at affordable hourly rates when you don&apos;t need a full moving service.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Manpower Quote</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Fully Insured Workers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Same-Day Availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Professional Equipment</span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <Link href="/quote" className="btn-primary w-full text-center">
                  Get Manpower Quote
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
            <h2 className="heading-2 mb-6">How Our Manpower Service Works</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Simple, straightforward help when you need it. Book by the hour and pay only for the time you use.
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

      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Flexible Crew Size Options</h2>
            <p className="text-lead mb-12">
              We tailor the team size to your specific needs. Get a custom quote for your project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2 Movers</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">Small Crew</div>
                <p className="text-gray-600 mb-6">Perfect for smaller jobs and apartment moves</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Minimum time applies</li>
                  <li>• Basic moving equipment</li>
                  <li>• Loading/unloading help</li>
                </ul>
              </div>
              
              <div className="bg-blue-600 text-white rounded-xl shadow-lg p-8 transform scale-105">
                <h3 className="text-xl font-bold mb-4">3 Movers</h3>
                <div className="text-3xl font-bold mb-4">Medium Crew</div>
                <p className="text-blue-100 mb-6">Most popular for house moves</p>
                <ul className="text-sm text-blue-100 space-y-2">
                  <li>• Minimum time applies</li>
                  <li>• Full moving equipment</li>
                  <li>• Heavy item specialists</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">4+ Movers</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">Large Crew</div>
                <p className="text-gray-600 mb-6">For large homes and commercial jobs</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Minimum time applies</li>
                  <li>• Specialized equipment</li>
                  <li>• Team coordination</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-600 mb-6">
                Contact us for personalized pricing based on your crew size needs and job requirements
              </p>
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Request Your Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Extra Hands for Your Move?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get professional moving help at affordable hourly rates. Book your manpower 
              service today and make your move easier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-white text-lg px-8 py-4">
                Book Manpower Service
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