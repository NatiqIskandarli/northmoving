import Link from 'next/link';
import { MapPin, Phone, CheckCircle, Clock, Truck } from 'lucide-react';

export const metadata = {
  title: "Service Areas - GTA Moving Services | Toronto, Mississauga, Brampton & More",
  description: "Professional moving services across the Greater Toronto Area. Serving Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, and surrounding areas.",
};

export default function ServiceAreasPage() {
  const gtaCities = [
    {
      name: "Toronto",
      population: "2.93M",
      specialties: ["Downtown condos", "High-rise moves", "University district"],
      description: "Our most active service area covering all Toronto neighborhoods from downtown to the suburbs."
    },
    {
      name: "Mississauga", 
      population: "717K",
      specialties: ["Suburban homes", "Condo complexes", "Airport area"],
      description: "Comprehensive moving services throughout Mississauga's diverse residential and commercial areas."
    },
    {
      name: "Brampton",
      population: "656K", 
      specialties: ["New subdivisions", "Townhouse complexes", "Growing families"],
      description: "Serving Brampton's rapidly growing communities with reliable moving solutions."
    },
    {
      name: "Vaughan",
      population: "323K",
      specialties: ["Luxury homes", "New developments", "Business centers"], 
      description: "Premium moving services for Vaughan's upscale residential and commercial properties."
    },
    {
      name: "Markham",
      population: "338K",
      specialties: ["Tech corridor", "Modern condos", "Executive homes"],
      description: "Professional moving services in Markham's technology hub and residential communities."
    },
    {
      name: "Richmond Hill",
      population: "195K",
      specialties: ["Family homes", "Established neighborhoods", "Seniors communities"],
      description: "Trusted moving services for Richmond Hill's established and family-friendly areas."
    }
  ];

  const additionalAreas = [
    "Oakville", "Burlington", "Milton", "Pickering", "Ajax", "Whitby",
    "Oshawa", "Newmarket", "Aurora", "King City", "Caledon", "Halton Hills",
    "Georgetown", "Acton", "Stouffville", "Uxbridge", "Bradford", "Innisfil"
  ];

  const neighborhoods = {
    Toronto: [
      "Downtown Core", "North York", "Scarborough", "Etobicoke", "York",
      "East York", "The Beaches", "Leslieville", "Corktown", "Liberty Village",
      "King West", "Queen West", "Annex", "Kensington Market", "Distillery District",
      "Riverdale", "Cabbage Town", "Junction", "High Park", "Roncesvales"
    ],
    Mississauga: [
      "Port Credit", "Streetsville", "Meadowvale", "Erin Mills", "Clarkson",
      "Lorne Park", "Cooksville", "Malton", "Hurontario", "Square One Area"
    ],
    Brampton: [
      "Bramalea", "Heart Lake", "Sandalwood", "Bovaird", "Queen Street Corridor",
      "Mount Pleasant", "Creditvale", "Springdale", "Northwood Park", "Gore"
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-1 mb-6">
              Moving Services Across the <span className="text-gradient">Greater Toronto Area</span>
            </h1>
            <p className="text-lead max-w-4xl mx-auto mb-8">
              Professional moving services throughout the GTA. From downtown Toronto condos to suburban family homes, 
              we provide reliable, licensed, and insured moving solutions across all major cities and neighborhoods.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="font-medium text-gray-700">18+ Cities Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-6 w-6 text-blue-600" />
                <span className="font-medium text-gray-700">Same-Day Service Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-blue-600" />
                <span className="font-medium text-gray-700">7 Days a Week</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Get Free Quote for Your Area
              </Link>
                          <a href="tel:+14378712382" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call +1 (437) 871-2382</span>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main GTA Cities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Primary Service Areas</h2>
            <p className="text-lead max-w-3xl mx-auto">
              We provide comprehensive moving services in these major GTA cities, 
              with deep local knowledge and established presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gtaCities.map((city, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-500">Population: {city.population}</p>
                  </div>
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {city.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Our Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {city.specialties.map((specialty, specialtyIndex) => (
                      <span 
                        key={specialtyIndex} 
                        className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <Link 
                    href="/quote" 
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Get Quote for {city.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Additional Service Areas</h2>
            <p className="text-lead max-w-3xl mx-auto">
              We also provide moving services to these surrounding communities and municipalities 
              throughout the Greater Toronto Area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {additionalAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow group">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-6 inline-block">
              <p className="text-gray-700 mb-4">
                <strong>Don't see your area?</strong> We may still be able to help! 
                Contact us to discuss service availability in your location.
              </p>
                              <a href="tel:+14378712382" className="btn-primary">
                  Call to Confirm Service
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Coverage */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Neighborhood Coverage</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Local expertise in specific neighborhoods means we understand the unique challenges 
              and logistics of moving in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(neighborhoods).map(([city, areas]) => (
              <div key={city} className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  {city} Neighborhoods
                </h3>
                
                <div className="grid grid-cols-2 gap-2">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link 
                    href="/quote" 
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Get Quote for {city} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Capabilities by Area */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Offer in Every Area</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Consistent, professional service standards across all our service areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Local Knowledge</h3>
              <p className="text-blue-100 text-sm">
                Understanding of local parking, building restrictions, and optimal routes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Flexible Scheduling</h3>
              <p className="text-blue-100 text-sm">
                Early morning, evening, and weekend availability to fit your schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Strategic Locations</h3>
              <p className="text-blue-100 text-sm">
                Strategically positioned to minimize travel time and maximize efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Consistent Quality</h3>
              <p className="text-blue-100 text-sm">
                Same high standards and professional service regardless of location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Expansion */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Expanding Across Canada</h2>
            <p className="text-lead mb-8">
              While we currently focus on providing exceptional service in the GTA, 
              we have plans to expand our trusted moving network to other major Canadian cities.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["Ottawa", "Montreal", "Vancouver", "Calgary"].map((city, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <span className="font-medium text-gray-600">{city}</span>
                  <div className="text-xs text-blue-600 mt-1">Coming Soon</div>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-6">
              Interested in our services expanding to your city? Let us know!
            </p>
            
            <a href="mailto:info@northmoving.ca" className="btn-primary">
              Request Service Expansion
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Move in Your Area?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a customized quote based on your specific location and moving requirements. 
              Local expertise, professional service, competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Get Area-Specific Quote
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