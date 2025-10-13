import Link from 'next/link';
import { 
  CheckCircle, 
  Circle,
  Target,
  Rocket,
  TrendingUp,
  Users,
  MapPin,
  Truck,
  Shield,
  Award,
  Sparkles,
  Phone
} from 'lucide-react';

export const metadata = {
  title: "Product Roadmap | NorthMoving.ca - Our Vision for the Future",
  description: "Discover NorthMoving.ca's roadmap and future plans. Learn about our ongoing improvements, upcoming features, and commitment to excellence in moving services across Toronto and the GTA.",
};

export default function RoadmapPage() {
  const completedMilestones = [
    {
      title: "Launch of Professional Moving Services",
      description: "Successfully launched our core moving services across the Greater Toronto Area with a team of licensed and insured professionals.",
      date: "Q1 2024",
      category: "Services"
    },
    {
      title: "Online Booking System",
      description: "Implemented a streamlined online quote request system, making it easier for customers to get estimates and schedule moves.",
      date: "Q2 2024",
      category: "Technology"
    },
    {
      title: "Expanded Service Areas",
      description: "Extended our coverage to include all major cities in the GTA including Toronto, Mississauga, Brampton, Markham, Vaughan, and Richmond Hill.",
      date: "Q3 2024",
      category: "Growth"
    },
    {
      title: "Customer Success Program",
      description: "Launched dedicated customer support team to ensure exceptional service and communication throughout the moving process.",
      date: "Q3 2024",
      category: "Customer Experience"
    }
  ];

  const inProgressMilestones = [
    {
      title: "Real-Time Move Tracking",
      description: "Developing a mobile-friendly tracking system that allows customers to monitor their move in real-time, with live updates and ETAs.",
      date: "Q4 2024",
      category: "Technology",
      progress: 60
    },
    {
      title: "Enhanced Packing Services",
      description: "Expanding our packing service offerings with eco-friendly materials and specialized packing for fragile and valuable items.",
      date: "Q4 2024",
      category: "Services",
      progress: 40
    },
    {
      title: "Customer Portal Development",
      description: "Building a comprehensive customer portal for managing bookings, accessing moving resources, and tracking service history.",
      date: "Q1 2025",
      category: "Technology",
      progress: 30
    }
  ];

  const upcomingMilestones = [
    {
      title: "Storage Solutions Partnership",
      description: "Partnering with leading storage facilities to offer seamless short-term and long-term storage options integrated with our moving services.",
      date: "Q1 2025",
      category: "Partnerships"
    },
    {
      title: "Green Moving Initiative",
      description: "Launching eco-friendly moving options including electric vehicles, recyclable packing materials, and carbon offset programs.",
      date: "Q2 2025",
      category: "Sustainability"
    },
    {
      title: "Virtual Home Survey",
      description: "Introducing AI-powered virtual home surveys for more accurate quotes without requiring in-person visits.",
      date: "Q2 2025",
      category: "Technology"
    },
    {
      title: "Premium Concierge Service",
      description: "Rolling out white-glove concierge moving service for high-value items, luxury homes, and executive relocations.",
      date: "Q3 2025",
      category: "Services"
    },
    {
      title: "Loyalty Rewards Program",
      description: "Launching a rewards program for repeat customers with exclusive benefits, discounts, and priority booking.",
      date: "Q3 2025",
      category: "Customer Experience"
    },
    {
      title: "Mobile App Launch",
      description: "Releasing our dedicated mobile app for iOS and Android with complete booking, tracking, and customer support features.",
      date: "Q4 2025",
      category: "Technology"
    }
  ];

  const visionAreas = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Customer-Centric Innovation",
      description: "Continuously improving our services based on customer feedback and industry best practices to deliver exceptional moving experiences."
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-500" />,
      title: "Fleet & Equipment Excellence",
      description: "Investing in modern, well-maintained vehicles and state-of-the-art moving equipment to ensure efficient and safe relocations."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Safety & Compliance",
      description: "Maintaining the highest standards of safety, licensing, and insurance while staying ahead of industry regulations."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      title: "Technology Integration",
      description: "Leveraging cutting-edge technology to streamline operations, enhance communication, and improve the overall moving experience."
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Services': 'bg-blue-100 text-blue-700',
      'Technology': 'bg-purple-100 text-purple-700',
      'Growth': 'bg-green-100 text-green-700',
      'Customer Experience': 'bg-orange-100 text-orange-700',
      'Partnerships': 'bg-pink-100 text-pink-700',
      'Sustainability': 'bg-teal-100 text-teal-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h1 className="heading-1 mb-6">
              Our <span className="text-gradient">Roadmap</span>
            </h1>
            <p className="text-lead mb-8">
              Discover how we're continuously evolving to provide the best moving services in Toronto and the GTA. 
              Our commitment to innovation and excellence drives everything we do.
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

      {/* Vision Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Our Vision</h2>
            <p className="text-lead max-w-3xl mx-auto">
              We're building the future of moving services in the GTA, focusing on four key pillars 
              that guide our development and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Milestones */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">Completed</span>
              </div>
              <h2 className="heading-2 mb-4">What We've Accomplished</h2>
              <p className="text-gray-600">
                Major milestones we've achieved in our journey to become the most trusted moving company in the GTA.
              </p>
            </div>

            <div className="space-y-6">
              {completedMilestones.map((milestone, index) => (
                <div key={index} className="card border-l-4 border-green-500">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                        <span className="text-sm text-gray-500 font-medium">{milestone.date}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{milestone.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(milestone.category)}`}>
                        {milestone.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* In Progress */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">In Progress</span>
              </div>
              <h2 className="heading-2 mb-4">What We're Working On</h2>
              <p className="text-gray-600">
                Current projects and initiatives we're actively developing to enhance your moving experience.
              </p>
            </div>

            <div className="space-y-6">
              {inProgressMilestones.map((milestone, index) => (
                <div key={index} className="card border-l-4 border-blue-500">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                        <span className="text-sm text-gray-500 font-medium">{milestone.date}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{milestone.description}</p>
                      
                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Progress</span>
                          <span className="text-sm font-semibold text-blue-600">{milestone.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${milestone.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(milestone.category)}`}>
                        {milestone.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Milestones */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
                <Target className="h-5 w-5" />
                <span className="font-semibold">Upcoming</span>
              </div>
              <h2 className="heading-2 mb-4">What's Next</h2>
              <p className="text-gray-600">
                Exciting features and improvements planned for the future. Stay tuned for these upcoming launches!
              </p>
            </div>

            <div className="space-y-6">
              {upcomingMilestones.map((milestone, index) => (
                <div key={index} className="card border-l-4 border-gray-300 hover:border-purple-500 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <Circle className="h-6 w-6 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                        <span className="text-sm text-gray-500 font-medium">{milestone.date}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{milestone.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(milestone.category)}`}>
                        {milestone.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="h-12 w-12 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Feedback Shapes Our Roadmap
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              We value customer input and use your feedback to prioritize features and improvements. 
              Have a suggestion or feature request? We'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Share Your Feedback
              </Link>
              <Link 
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
              >
                Experience Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-6">Our Commitment</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                This roadmap represents our ongoing commitment to excellence in moving services. 
                While we're excited about the future, we remain focused on what matters most: 
                providing you with reliable, professional, and stress-free moving experiences today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-sm text-gray-600">
                  Every feature and improvement goes through rigorous testing to ensure it meets our high standards.
                </p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Customer-Driven</h3>
                <p className="text-sm text-gray-600">
                  We listen to your needs and prioritize features that deliver the most value to you.
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Continuous Innovation</h3>
                <p className="text-sm text-gray-600">
                  We're constantly exploring new technologies and methods to improve your moving experience.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Ready to experience professional moving services? Get started today!
              </p>
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
