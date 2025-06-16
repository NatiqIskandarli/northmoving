import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Building, 
  CheckCircle, 
  Phone, 
  Star,
  Shield,
  Clock,
  Users,
  Package,
  Monitor
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Moving Services Toronto | Office Relocation Experts | NorthMoving.ca',
  description: 'Professional commercial moving services in Toronto & GTA. Office relocations, business moves, IT equipment moving. Minimize downtime with expert commercial movers.',
  keywords: 'commercial moving Toronto, office relocation GTA, business moving services, IT equipment moving, commercial movers Toronto, office furniture moving',
  openGraph: {
    title: 'Commercial Moving Services Toronto | NorthMoving.ca',
    description: 'Professional commercial moving services in Toronto & GTA. Minimize downtime with expert office relocations and business moves.',
    url: 'https://northmoving.ca/services/commercial',
    siteName: 'NorthMoving.ca',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://northmoving.ca/services/commercial',
  },
};

export default function CommercialMovingPage() {
  const services = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Office Relocation",
      description: "Complete office moves with minimal downtime. We handle everything from planning to setup in your new location."
    },
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "IT Equipment Moving",
      description: "Specialized handling of servers, computers, and sensitive electronic equipment with proper protection."
    },
    {
      icon: <Package className="h-8 w-8 text-blue-600" />,
      title: "Business Moves",
      description: "Retail stores, warehouses, and commercial facilities moved efficiently with minimal business disruption."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Corporate Relocations",
      description: "Large-scale corporate moves with dedicated project management and coordinated logistics."
    }
  ];

  const features = [
    "Minimal business downtime",
    "Weekend and after-hours moves",
    "IT equipment specialists",
    "Project management included",
    "Furniture disassembly/reassembly",
    "Secure document handling",
    "Storage solutions available",
    "Full commercial insurance"
  ];

  const process = [
    {
      step: "1",
      title: "Site Assessment",
      description: "We evaluate both locations to create a detailed moving plan and timeline."
    },
    {
      step: "2",
      title: "Project Planning",
      description: "Dedicated project manager coordinates all aspects of your commercial move."
    },
    {
      step: "3",
      title: "Systematic Packing",
      description: "Professional packing with labeling system for easy setup at new location."
    },
    {
      step: "4",
      title: "Efficient Relocation",
      description: "Coordinated move execution to minimize downtime and get you operational quickly."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Building className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Commercial Moving</span>
            </div>
            <h1 className="heading-1 mb-6">
              Professional Commercial Moving Services in <span className="text-gradient">Toronto & GTA</span>
            </h1>
            <p className="text-lead mb-8 max-w-3xl mx-auto">
              Minimize downtime and maximize efficiency with our expert commercial moving services. 
              From small offices to large corporate relocations, we handle your business move with precision.
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
            <h2 className="heading-2 mb-6">Our Commercial Moving Services</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Comprehensive commercial moving solutions designed to keep your business running smoothly.
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
              <h2 className="heading-2 mb-6">Why Choose Our Commercial Moving Services?</h2>
              <p className="text-lead mb-8">
                We understand that time is money in business. Our commercial moving services 
                are designed to minimize disruption and get you back to business quickly.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Commercial Quote</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Fully Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">After-Hours Service Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Dedicated Project Manager</span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <Link href="/quote" className="btn-primary w-full text-center">
                  Get Commercial Quote
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
            <h2 className="heading-2 mb-6">Our Commercial Moving Process</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Our systematic approach ensures your commercial move is completed efficiently with minimal business disruption.
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
              Ready to Move Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your free commercial moving quote today and discover how we can minimize 
              your downtime while maximizing efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-white text-lg px-8 py-4">
                Get Commercial Quote
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