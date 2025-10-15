import Link from 'next/link';
import { 
  CheckCircle, 
  Phone, 
  Clock, 
  Truck, 
  Shield, 
  DollarSign,
  Info
} from 'lucide-react';

export const metadata = {
  title: "Moving Services Pricing | Get Custom Quote | NorthMoving.ca",
  description: "Professional moving services in Toronto and GTA with transparent pricing. Get a customized quote based on your specific needs. No hidden fees, licensed and insured movers.",
};

export default function PricingPage() {
  const includedFeatures = [
    "Professional moving crew (2+ movers)",
    "Fully equipped moving truck",
    "Fuel within GTA included",
    "Standard moving tools & equipment",
    "Furniture pads and protective materials",
    "Basic disassembly/assembly service",
    "Dollies, straps, and moving supplies",
    "Standard insurance coverage included"
  ];

  const packingInclusions = [
    "Packing time is included in hourly rate",
    "Professional packing techniques",
    "Room-by-room organization",
    "Proper item wrapping and protection",
    "Careful labeling system",
    "No separate packing fees"
  ];

  const additionalServices = [
    {
      service: "Piano & Specialty Items",
      description: "Specialized equipment and expertise for pianos, safes, and heavy items",
      pricing: "Custom quote based on item type"
    },
    {
      service: "Long Distance Moves",
      description: "Professional moving services beyond GTA",
      pricing: "Custom quote based on distance"
    },
    {
      service: "Packing & Unpacking",
      description: "Full-service packing with professional materials",
      pricing: "Included in service quote"
    },
    {
      service: "Storage Solutions",
      description: "Coordination with trusted storage facilities",
      pricing: "Available upon request"
    },
    {
      service: "Assembly Services",
      description: "Furniture disassembly and reassembly",
      pricing: "Included with moving service"
    },
    {
      service: "Appliance Services",
      description: "Disconnection and reconnection of appliances",
      pricing: "Available - contact for details"
    }
  ];

  const policies = [
    {
      title: "Booking & Deposits",
      details: [
        "25% deposit required to secure your move date",
        "Deposit applied to final invoice",
        "Major credit cards and e-transfer accepted",
        "Balance due upon completion of move"
      ]
    },
    {
      title: "Cancellation Policy",
      details: [
        "24+ hours notice: Full deposit refund",
        "12-24 hours notice: 50% deposit refund",
        "Less than 12 hours: Deposit non-refundable",
        "Weather cancellations: Full refund or reschedule"
      ]
    },
    {
      title: "Payment Methods",
      details: [
        "Cash, debit, and major credit cards accepted",
        "E-transfer available for deposits",
        "Invoices provided for all services",
        "Receipt provided upon payment completion"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-1 mb-6">
              Professional <span className="text-gradient">Moving Services</span> Tailored to Your Needs
            </h1>
            <p className="text-lead max-w-4xl mx-auto mb-8">
              Every move is unique. Get a customized quote based on your specific requirements. 
              Transparent pricing, no hidden fees, and exceptional service guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Request Your Custom Quote
              </Link>
              <a href="tel:+14378719288" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call +1 (437) 871-9288</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-blue-50 border-t-4 border-blue-400">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-bold mb-6">
                  ⭐ COMPREHENSIVE SERVICE PACKAGE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Everything You Need for a <span className="text-blue-600">Successful Move</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Professional movers + fully equipped truck + complete moving solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Always Included:</h3>
                  <ul className="space-y-3">
                    {includedFeatures.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Premium Service Features:</h3>
                  <ul className="space-y-3">
                    {includedFeatures.slice(4, 8).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Get a detailed quote customized for your specific moving requirements
                </p>
                <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                  Request Your Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Factors That Determine Your Quote</h2>
            <p className="text-lead max-w-3xl mx-auto">
              We provide customized quotes based on your specific moving requirements. 
              Here's what we consider to give you the most accurate estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Size & Volume</h3>
                    <p className="text-gray-600">
                      The size of your home or office, number of items, and total volume of belongings. 
                      We'll assess what equipment and crew size is needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Distance & Location</h3>
                    <p className="text-gray-600">
                      Travel distance between locations, accessibility of both properties, 
                      parking availability, and any stairs or elevator requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Requirements</h3>
                    <p className="text-gray-600">
                      Piano or specialty item moving, packing services, storage needs, 
                      or any other specific requirements unique to your move.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Custom Quotes?</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Accurate Pricing</h4>
                    <p className="text-gray-600 text-sm">Pay only for what you need - no overcharging for services you don't require</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">No Hidden Surprises</h4>
                    <p className="text-gray-600 text-sm">Everything is discussed upfront - transparent breakdown of all costs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tailored Solutions</h4>
                    <p className="text-gray-600 text-sm">Solutions designed specifically for your unique moving situation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Competitive Rates</h4>
                    <p className="text-gray-600 text-sm">Fair market pricing with exceptional service quality</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-900 font-medium">
                  <Info className="h-4 w-4 inline mr-2" />
                  Request your free quote today - no obligation, fast response time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packing Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Professional Packing Services</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Expert packing services to protect your valuables and make your move stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Full Packing Service</h3>
              <ul className="space-y-3">
                {packingInclusions.map((inclusion, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Packing Materials Available</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Various box sizes for different items</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Specialty boxes (wardrobe, dish pack, mirror)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bubble wrap and packing paper</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Heavy-duty packing tape</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Furniture blankets and stretch wrap</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom crating for valuable items</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  <Info className="h-4 w-4 inline mr-2" />
                  All materials available at competitive rates - included in your custom quote
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Additional Services & Fees</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Most services are included in our hourly rate. Here are the few items that may require additional charges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="card">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.service}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <div className="md:ml-6">
                      <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        {service.pricing}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Booking & Payment Policies</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Clear, fair policies to ensure a smooth moving experience for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{policy.title}</h3>
                <ul className="space-y-3">
                  {policy.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to You</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-800 rounded-lg p-6">
                <Shield className="h-8 w-8 text-blue-200 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Transparent Process</h3>
                <p className="text-blue-100">
                  Every aspect of your move and its cost will be clearly explained in your quote. 
                  No surprises, no hidden fees - complete transparency from start to finish.
                </p>
              </div>

              <div className="bg-blue-800 rounded-lg p-6">
                <DollarSign className="h-8 w-8 text-blue-200 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fair & Competitive Pricing</h3>
                <p className="text-blue-100">
                  We provide honest, competitive quotes based on your specific needs. 
                  Quality service at fair prices - that's our guarantee to every customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready for Your Customized Quote?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us create a tailored moving solution that fits your needs and budget. 
              Free consultation, no obligation, fast response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Request Free Quote
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