import Link from 'next/link';
import { 
  Heart, 
  Shield, 
  Users, 
  CheckCircle, 
  Phone, 
  Award,
  Clock,
  Target,
  Handshake,
  Star
} from 'lucide-react';

export const metadata = {
  title: "About NorthMoving.ca | Professional Moving Services Toronto & GTA",
  description: "Learn about NorthMoving.ca's mission to provide reliable, professional moving services in the GTA. Our experienced team delivers transparency, reliability, and efficiency.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Transparency",
      description: "Clear, upfront pricing with no hidden fees. You'll know exactly what you're paying before we start, and we communicate any potential changes before they happen."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Reliability", 
      description: "We show up when we say we will, with the crew and equipment promised. Our professional moving team consists of vetted experts who take pride in their work."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Efficiency",
      description: "Streamlined processes and experienced teams mean your move gets done faster and with less stress. We respect your time and handle logistics so you don't have to."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Customer Satisfaction",
      description: "Your peace of mind is our priority. From the first quote to the final box placement, we're committed to exceeding your expectations."
    }
  ];

  const differentiators = [
    {
      title: "Professional Excellence",
      description: "Our entire moving team is thoroughly screened, licensed, insured, and has a proven track record of excellence in the moving industry."
    },
    {
      title: "Local Expertise",
      description: "We know the GTA inside and out - from downtown Toronto's narrow streets to Mississauga's suburban complexes. Local knowledge means smoother moves."
    },
    {
      title: "Comprehensive Service",
      description: "Whether you need a simple apartment move or complex commercial relocation, we have the expertise and equipment for every type of move you can imagine."
    },
    {
      title: "Technology-Enabled",
      description: "Our modern systems make it easy to get quotes, schedule moves, and track progress. Advanced technology meets traditional moving expertise."
    },
    {
      title: "Transparent Pricing",
      description: "No surprise charges, no hidden fees. Our hourly rate structure is simple and fair, with everything included upfront."
    },
    {
      title: "Quality Assurance",
      description: "We monitor every move and gather feedback to ensure we maintain the highest standards. Your satisfaction is our success metric."
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Moves" },
    { number: "50+", label: "Professional Movers" },
    { number: "18+", label: "Cities Served" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  const team = [
    {
      name: "Operations Team",
      role: "Move Coordination & Quality Assurance",
      description: "Our operations team ensures every move runs smoothly, from initial scheduling to final completion."
    },
    {
      name: "Customer Success",
      role: "Support & Communication",
      description: "Dedicated to ensuring you have all the information and support you need throughout your moving journey."
    },
    {
      name: "Moving Specialists",
      role: "Professional Moving Services",
      description: "Our experienced moving professionals handle your belongings with care and expertise, ensuring safe and efficient relocations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">
              About <span className="text-gradient">NorthMoving.ca</span>
            </h1>
            <p className="text-lead mb-8">
              We're on a mission to simplify the moving experience in the Greater Toronto Area 
              with our highly-rated, reliable, and professional moving services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Experience the Difference
              </Link>
              <a href="tel:+14378712382" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call +1 (437) 871-2382</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-6">Our Mission</h2>
              <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
                <p className="text-xl text-gray-700 leading-relaxed">
                  To simplify the moving experience in the GTA by providing highly-rated, 
                  reliable, and professional moving services. We believe moving should be stress-free, 
                  transparent, and handled by people who truly care about your belongings and your experience.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why We Started NorthMoving.ca</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Moving is one of life's most stressful experiences, and finding reliable movers 
                    shouldn't add to that stress. We saw too many people struggling with unreliable 
                    moving companies, hidden fees, and poor communication.
                  </p>
                  <p>
                    That's why we created NorthMoving.ca - to be your trusted moving company 
                    in the GTA. We are the professional movers who handle your relocation 
                    from start to finish.
                  </p>
                  <p>
                    Our entire team shares our commitment to professionalism, transparency, 
                    and customer satisfaction. When you book with us, you're not just getting 
                    movers - you're getting peace of mind.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">By the Numbers</h4>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Our Values</h2>
            <p className="text-lead max-w-3xl mx-auto">
              These core values guide everything we do and every service we provide. 
              They're not just words on a page - they're the foundation of our company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">What Sets Us Apart</h2>
            <p className="text-lead max-w-3xl mx-auto">
              We're not just another moving company - we're your trusted moving professionals 
              providing the right solution for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
              <p className="text-xl text-blue-100">
                How we ensure every move meets our high standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-200" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Team</h3>
                <p className="text-blue-100">
                  Our moving team consists of thoroughly vetted professionals, with proper licenses, 
                  insurance, and proven track records in the moving industry.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-blue-200" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ongoing Quality Control</h3>
                <p className="text-blue-100">
                  We continuously monitor our performance, gather customer feedback, and maintain 
                  the highest service standards in every move we complete.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-200" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer-First Support</h3>
                <p className="text-blue-100">
                  From quote to completion, our team is here to ensure your move goes smoothly. 
                  We're your advocate throughout the entire process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Our Team</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Behind NorthMoving.ca is a dedicated team committed to making your moving 
              experience as smooth as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Our Commitment to You</h2>
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Quality Guarantee
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Every move is backed by our quality guarantee. If you're not satisfied, 
                    we'll work to make it right.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Transparent Communication
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Clear, honest communication from quote to completion. No surprises, 
                    no hidden fees, no confusion.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Professional Standards
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our entire team meets strict professional standards for licensing, 
                    insurance, and customer service excellence.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Ongoing Support
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our support doesn't end when the truck leaves. We're here to help 
                    with any questions or concerns.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8">
              When you choose NorthMoving.ca, you're choosing a partner who cares about 
              your moving experience as much as you do.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Start Your Move Today
              </Link>
              <Link href="/services" className="btn-outline text-lg px-8 py-4">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 