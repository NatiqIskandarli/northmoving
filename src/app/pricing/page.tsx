import Link from 'next/link';
import { 
  CheckCircle, 
  Phone, 
  Clock, 
  Truck, 
  Users, 
  Shield, 
  AlertCircle,
  DollarSign,
  Info
} from 'lucide-react';

export const metadata = {
  title: "Moving Prices Toronto & GTA | Transparent Pricing | NorthMoving.ca",
  description: "Transparent moving prices in Toronto and GTA. Hourly rates with no hidden fees. Special introductory offer: First 3 hours for $540+HST. Get your free quote today.",
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
      service: "Extra Heavy Items",
      description: "Items over 200 lbs or requiring special equipment",
      pricing: "Quoted individually"
    },
    {
      service: "Long Carry",
      description: "When truck cannot park close to building entrance",
      pricing: "Included in hourly rate"
    },
    {
      service: "Piano Moving",
      description: "Specialized piano moving equipment and expertise",
      pricing: "From $200-$600 depending on type"
    },
    {
      service: "Storage Coordination",
      description: "Coordination with storage facilities",
      pricing: "No additional fee for coordination"
    },
    {
      service: "Appliance Disconnect/Reconnect",
      description: "Basic disconnection and reconnection services",
      pricing: "Included where safe and appropriate"
    },
    {
      service: "Packing Materials",
      description: "Boxes, tape, bubble wrap, and packing supplies",
      pricing: "At cost (optional service)"
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
              Transparent <span className="text-gradient">Moving Pricing</span> in Toronto & GTA
            </h1>
            <p className="text-lead max-w-4xl mx-auto mb-8">
              Our simple, honest pricing means no surprises on moving day. 
              Based on an hourly rate with a minimum charge, everything is included upfront.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Get Your Free Quote
              </Link>
                          <a href="tel:+14378712382" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call +1 (437) 871-2382</span>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="section-padding bg-orange-50 border-t-4 border-orange-400">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-200">
              <div className="text-center mb-8">
                <div className="inline-block bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-lg font-bold mb-6">
                  🎉 SPECIAL INTRODUCTORY OFFER
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  First 3 Hours for Just <span className="text-orange-600">$540</span><span className="text-2xl text-gray-600">+HST</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Includes 2 professional movers + fully equipped truck + fuel within GTA
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h3>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Value:</h3>
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
                  Additional time beyond 3 hours charged at our standard hourly rate
                </p>
                <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                  Claim This Offer - Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Model Explanation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">How Our Pricing Works</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Simple, transparent, and fair. Our hourly pricing model ensures you only pay for the time we work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hourly Rate Structure</h3>
                    <p className="text-gray-600">
                      Our moves are based on an hourly rate with a 3-hour minimum for 2 movers and 1 truck. 
                      Time starts when we arrive at your origin and ends when we finish at your destination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Everything Included</h3>
                    <p className="text-gray-600">
                      Truck, fuel within GTA, professional crews, standard equipment, and basic assembly/disassembly. 
                      No surprise charges for standard moving services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Protected & Insured</h3>
                    <p className="text-gray-600">
                      Standard insurance coverage through our moving team is included. 
                      Additional coverage options available if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Pricing Example</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">2-bedroom apartment move</span>
                  <span className="font-medium">~4-6 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">First 3 hours (Special Offer)</span>
                  <span className="font-medium">$540.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Additional 2 hours (if needed)</span>
                  <span className="font-medium">$360.00</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-medium">$900.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">HST (13%)</span>
                  <span className="font-medium">$117.00</span>
                </div>
                <div className="flex justify-between border-t pt-2 text-lg font-bold">
                  <span>Total</span>
                  <span>$1,017.00</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <Info className="h-4 w-4 inline mr-2" />
                  This is an estimate. Your actual time may vary based on distance, stairs, and amount of belongings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packing Services Pricing */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Packing Services</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Professional packing is included in our hourly work - no separate packing fees!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Packing Included in Hourly Rate</h3>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Packing Materials (Optional)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Small boxes</span>
                  <span className="font-medium">$3-4 each</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Medium boxes</span>
                  <span className="font-medium">$4-5 each</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Large boxes</span>
                  <span className="font-medium">$5-6 each</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Bubble wrap (per roll)</span>
                  <span className="font-medium">$15-20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Packing tape (per roll)</span>
                  <span className="font-medium">$5-8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Wardrobe boxes</span>
                  <span className="font-medium">$15-20 each</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <Info className="h-4 w-4 inline mr-2" />
                  Materials charged at cost - we don't mark up supplies. Order in advance or we can bring them.
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

      {/* Important Notes */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Important Pricing Notes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-800 rounded-lg p-6">
                <AlertCircle className="h-8 w-8 text-blue-200 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Additional Charges Communication</h3>
                <p className="text-blue-100">
                  Any potential additional charges for confirmed specialty items or circumstances 
                  outside our standard scope will be clearly communicated and approved before work begins.
                </p>
              </div>

              <div className="bg-blue-800 rounded-lg p-6">
                <DollarSign className="h-8 w-8 text-blue-200 mb-4" />
                <h3 className="text-xl font-semibold mb-3">No Hidden Fees Promise</h3>
                <p className="text-blue-100">
                  We believe in transparent pricing. All standard moving services are included in our hourly rate. 
                  You'll know exactly what you're paying before we start.
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
              Ready for Your Free Quote?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a detailed, accurate estimate based on your specific moving needs. 
              No obligation, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Get Detailed Quote
              </Link>
                          <a href="tel:+14378712382" className="btn-outline text-lg px-8 py-4 flex items-center justify-center space-x-2">
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