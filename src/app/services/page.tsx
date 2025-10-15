import Link from 'next/link';
import { 
  Home, 
  Building, 
  Package, 
  Piano, 
  Truck, 
  Users, 
  CheckCircle, 
  Phone,
  Wrench,
  Shield,
  Clock,
  Award
} from 'lucide-react';

export const metadata = {
  title: "Moving Services Toronto & GTA | Professional Movers",
  description: "Comprehensive moving services in Toronto and GTA. Residential, commercial, packing, specialty moving, and more. Licensed, insured, and professional movers.",
};

export default function ServicesPage() {
  const residentialServices = [
    {
      title: "House Moving",
      description: "Complete house moving services for single-family homes, from planning to final placement.",
      features: ["Room-by-room planning", "Furniture protection", "Utility coordination", "Final walkthrough"],
      icon: <Home className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Condo & Apartment Moving",
      description: "Specialized moving for condos and apartments, including elevator booking and building coordination.",
      features: ["Elevator reservations", "Building management coordination", "Narrow space navigation", "HOA compliance"],
      icon: <Building className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Senior Moving",
      description: "Compassionate moving services for seniors with extra care and patience for a stress-free experience.",
      features: ["Patient, caring service", "Downsizing assistance", "Senior-friendly scheduling", "Extra care for fragile items"],
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Student Moving",
      description: "Affordable moving solutions for students moving to/from dorms, apartments, and shared housing.",
      features: ["Budget-friendly options", "Flexible scheduling", "Shared move coordination", "Storage solutions"],
      icon: <Package className="h-8 w-8 text-blue-600" />
    }
  ];

  const commercialServices = [
    {
      title: "Office Relocations",
      description: "Professional office moving with minimal downtime and comprehensive IT equipment handling.",
      features: ["Weekend/after-hours moves", "IT equipment handling", "File management", "Minimal downtime"],
      icon: <Building className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Business & Factory Relocation",
      description: "Large-scale commercial moves including machinery, inventory, and specialized equipment.",
      features: ["Heavy machinery moving", "Inventory management", "Industrial equipment", "Coordinated logistics"],
      icon: <Truck className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Office Furniture Moving",
      description: "Specialized service for office furniture including modular workstations and conference rooms.",
      features: ["Modular furniture assembly", "Workstation setup", "Conference room equipment", "Ergonomic placement"],
      icon: <Wrench className="h-8 w-8 text-blue-600" />
    },
    {
      title: "IT & Computer Moving",
      description: "Secure transportation of servers, computers, and sensitive electronic equipment.",
      features: ["Anti-static protection", "Data security protocols", "Server room setup", "Network reconnection"],
      icon: <Package className="h-8 w-8 text-blue-600" />
    }
  ];

  const specialtyServices = [
    {
      title: "Piano Moving",
      description: "Expert piano moving for uprights, baby grands, and full grand pianos with specialized equipment.",
      features: ["Piano-specific equipment", "Trained piano movers", "Climate-controlled transport", "Tuning coordination"],
      icon: <Piano className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Antique & Art Moving",
      description: "White-glove service for valuable antiques, artwork, and collectibles with custom protection.",
      features: ["Custom crating", "Climate control", "Insurance coordination", "Museum-quality handling"],
      icon: <Award className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Appliance Moving",
      description: "Safe transportation of large appliances including washers, dryers, refrigerators, and more.",
      features: ["Appliance dolly equipment", "Disconnect/reconnect service", "Proper securing methods", "Installation coordination"],
      icon: <Wrench className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Furniture Transportation",
      description: "Individual furniture piece moving for purchases, sales, or room rearrangements.",
      features: ["Single item moves", "Furniture assembly", "Room rearrangement", "Delivery coordination"],
      icon: <Home className="h-8 w-8 text-blue-600" />
    }
  ];

  const additionalServices = [
    {
      title: "Professional Packing",
      description: "Full-service packing with high-quality materials and expert techniques to protect your belongings.",
      features: ["Room-by-room packing", "Quality materials", "Labeling system", "Unpacking services"],
      icon: <Package className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Manpower Only",
      description: "Loading and unloading services when you have your own transportation arranged.",
      features: ["Loading assistance", "Unloading help", "Rearrangement service", "Heavy lifting"],
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      title: "White Gloves Service",
      description: "Premium B2B service with the highest level of care and professionalism for corporate clients.",
      features: ["Executive-level service", "Uniformed professionals", "Premium materials", "Concierge-style attention"],
      icon: <Shield className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Installation & Assembly",
      description: "Furniture disassembly, moving, and reassembly to ensure your items fit perfectly in your new space.",
      features: ["Furniture disassembly", "Careful transport", "Professional reassembly", "Proper placement"],
      icon: <Wrench className="h-8 w-8 text-blue-600" />
    }
  ];

  const ServiceCategory = ({ title, description, services, bgColor = "bg-white" }: {
    title: string;
    description: string;
    services: any[];
    bgColor?: string;
  }) => (
    <section className={`section-padding ${bgColor}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">{title}</h2>
          <p className="text-lead max-w-3xl mx-auto">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-1 mb-6">
              Professional Moving Services in <span className="text-gradient">Toronto & GTA</span>
            </h1>
            <p className="text-lead max-w-4xl mx-auto mb-8">
              From residential moves to commercial relocations and specialty item transportation, 
              we provide comprehensive moving solutions tailored to your specific needs. 
              Our experienced, licensed, and insured team ensures your move is handled with the utmost care.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="font-medium text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-blue-600" />
                <span className="font-medium text-gray-700">On-Time Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-blue-600" />
                <span className="font-medium text-gray-700">Experienced Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span className="font-medium text-gray-700">Damage-Free Guarantee</span>
              </div>
            </div>

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

      {/* Residential Moving Services */}
      <ServiceCategory
        title="Residential Moving Services"
        description="Whether you're moving from a studio apartment or a large family home, our residential moving services are designed to make your transition smooth and stress-free."
        services={residentialServices}
        bgColor="bg-white"
      />

      {/* Commercial Moving Services */}
      <ServiceCategory
        title="Commercial Moving Services"
        description="Minimize business downtime with our professional commercial moving services. We understand the unique challenges of business relocations."
        services={commercialServices}
        bgColor="bg-gray-50"
      />

      {/* Specialty Moving Services */}
      <ServiceCategory
        title="Specialty Item Moving"
        description="Some items require extra care and specialized handling. Our specialty moving services ensure your valuable and delicate items arrive safely."
        services={specialtyServices}
        bgColor="bg-white"
      />

      {/* Additional Services */}
      <ServiceCategory
        title="Additional Services"
        description="Comprehensive moving solutions including packing, assembly, and premium white-glove services for a complete moving experience."
        services={additionalServices}
        bgColor="bg-gray-50"
      />

      {/* Pricing Information */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent, Competitive Pricing</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Our pricing is based on an hourly rate with no hidden fees. 
              Packing services are included in the hourly work - not charged separately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">Transparent Rates</h3>
                <p className="text-blue-200">
                  Hourly pricing with 3-hour minimum. All rates include truck, fuel, and standard equipment.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">Custom Quotes</h3>
                <p className="text-blue-100">
                  Get personalized pricing based on your specific moving needs
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">No Hidden Fees</h3>
                <p className="text-blue-200">
                  What you see is what you pay. All potential charges discussed upfront.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/pricing" className="btn-white text-lg px-8 py-4 mr-4">
              View Detailed Pricing
            </Link>
            <Link href="/quote" className="btn-secondary text-lg px-8 py-4">
              Get Your Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Why Choose Our Moving Services?</h2>
            <p className="text-lead max-w-3xl mx-auto">
              We've built our reputation as the most reliable and professional 
              moving company in the GTA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">Our entire moving team is fully licensed and insured for your protection.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Punctual Service</h3>
              <p className="text-gray-600 text-sm">We respect your time and always arrive when scheduled.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Experienced Teams</h3>
              <p className="text-gray-600 text-sm">Our movers are experienced professionals who handle your belongings with care.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm">We stand behind our work with a satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Move?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a free, detailed quote today and experience the difference professional movers make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Get Detailed Quote
              </Link>
                          <a href="tel:+14378719288" className="btn-outline text-lg px-8 py-4 flex items-center justify-center space-x-2">
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