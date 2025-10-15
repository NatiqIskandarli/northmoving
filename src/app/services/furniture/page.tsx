import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Truck, 
  CheckCircle, 
  Phone, 
  Star,
  Shield,
  Clock,
  Users,
  Package,
  Home
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Furniture Transportation Services Toronto | Single Item Moving | NorthMoving.ca',
  description: 'Professional furniture transportation in Toronto & GTA. Single item moves, furniture delivery, appliance transport. Safe and efficient furniture moving services.',
  keywords: 'furniture transportation Toronto, single item moving GTA, furniture delivery, appliance moving, furniture movers Toronto, single piece moving',
  openGraph: {
    title: 'Furniture Transportation Services Toronto | NorthMoving.ca',
    description: 'Professional furniture transportation in Toronto & GTA. Single item moves, furniture delivery, appliance transport.',
    url: 'https://northmoving.ca/services/furniture',
    siteName: 'NorthMoving.ca',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://northmoving.ca/services/furniture',
  },
};

export default function FurnitureTransportationPage() {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Single Item Moving",
      description: "Need to move just one piece? We handle single furniture items, appliances, and large objects efficiently."
    },
    {
      icon: <Package className="h-8 w-8 text-blue-600" />,
      title: "Furniture Delivery",
      description: "Purchased new furniture? We provide safe delivery and setup services from stores to your home."
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Appliance Transport",
      description: "Refrigerators, washers, dryers, and other appliances moved safely with proper equipment."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Furniture Sets",
      description: "Complete bedroom sets, dining rooms, or living room furniture transported as a package."
    }
  ];

  const features = [
    "Same-day service available",
    "Professional furniture pads",
    "Disassembly/reassembly service",
    "Stair and elevator navigation",
    "Appliance hookup available",
    "Flexible scheduling",
    "Affordable single-item rates",
    "Fully insured transport"
  ];

  const process = [
    {
      step: "1",
      title: "Item Assessment",
      description: "We evaluate your furniture or appliance to determine the best transportation method."
    },
    {
      step: "2",
      title: "Equipment Preparation",
      description: "We bring the right equipment including dollies, straps, and protective materials."
    },
    {
      step: "3",
      title: "Safe Loading",
      description: "Your furniture is carefully loaded using proper lifting techniques and protection."
    },
    {
      step: "4",
      title: "Delivery & Setup",
      description: "We deliver to your desired location and can help with basic setup if needed."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Furniture Transportation</span>
            </div>
            <h1 className="heading-1 mb-6">
              Furniture Transportation Services in <span className="text-gradient">Toronto & GTA</span>
            </h1>
            <p className="text-lead mb-8 max-w-3xl mx-auto">
              Need to move just a few items? Our furniture transportation service is perfect for 
              single items, appliances, and small furniture moves throughout the GTA.
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
            <h2 className="heading-2 mb-6">Our Furniture Transportation Services</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Whether it's a single piece or a complete furniture set, we handle your items with professional care.
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
              <h2 className="heading-2 mb-6">Why Choose Our Furniture Transportation?</h2>
              <p className="text-lead mb-8">
                Sometimes you don&apos;t need a full moving service - just reliable transportation 
                for specific items. Our furniture transport service is cost-effective and efficient.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Transport Quote</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Fully Insured Transport</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Same-Day Service Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Professional Equipment</span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <Link href="/quote" className="btn-primary w-full text-center">
                  Get Transport Quote
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
            <h2 className="heading-2 mb-6">Our Furniture Transportation Process</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Our streamlined process ensures your furniture is transported safely and efficiently.
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
              Need Furniture Transportation?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your furniture moved safely and affordably. Contact us today for a free quote 
              on your furniture transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-white text-lg px-8 py-4">
                Get Transport Quote
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