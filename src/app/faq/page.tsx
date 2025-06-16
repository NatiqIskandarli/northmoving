import Link from 'next/link';
import { 
  Plus, 
  Minus, 
  Phone, 
  Mail, 
  HelpCircle,
  Clock,
  Shield,
  Truck,
  DollarSign,
  Calendar,
  Package,
  Users,
  Home,
  Building
} from 'lucide-react';

export const metadata = {
  title: "FAQ - Frequently Asked Questions | NorthMoving.ca Toronto GTA",
  description: "Get answers to common questions about moving services in Toronto and GTA. Pricing, booking, preparation, timing, and more moving FAQs answered.",
};

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const faqCategories = [
    {
      id: 'pricing',
      title: 'Pricing & Costs',
      icon: <DollarSign className="h-6 w-6" />,
      color: 'text-green-600 bg-green-50'
    },
    {
      id: 'booking',
      title: 'Booking & Scheduling',
      icon: <Calendar className="h-6 w-6" />,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      id: 'services',
      title: 'Services & Equipment',
      icon: <Truck className="h-6 w-6" />,
      color: 'text-orange-600 bg-orange-50'
    },
    {
      id: 'preparation',
      title: 'Moving Preparation',
      icon: <Package className="h-6 w-6" />,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      id: 'policies',
      title: 'Policies & Insurance',
      icon: <Shield className="h-6 w-6" />,
      color: 'text-red-600 bg-red-50'
    }
  ];

  const faqs: FAQItem[] = [
    // Pricing & Costs
    {
      category: 'pricing',
      question: 'How much does a move cost with NorthMoving.ca?',
      answer: 'Our standard rate is $150/hour for a team of professional movers. We offer a special promotion for new customers: first 3 hours for $540+HST (save $90!). The final cost depends on the size of your move, distance, and any additional services required.'
    },
    {
      category: 'pricing',
      question: 'Are there any hidden fees?',
      answer: 'Absolutely not! We believe in complete transparency. Our hourly rate includes the moving team, truck, basic moving equipment, blankets, and straps. The only additional costs would be for extra services you specifically request, such as packing materials or specialty item handling.'
    },
    {
      category: 'pricing',
      question: 'Do you charge for travel time?',
      answer: 'We charge a one-time travel fee to cover the time it takes our team to reach your location and return to base. This fee is clearly explained upfront and varies based on your location within the GTA.'
    },
    {
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, certified cheque, e-transfer, and all major credit cards (Visa, MasterCard, American Express). Payment is due upon completion of the move.'
    },

    // Booking & Scheduling
    {
      category: 'booking',
      question: 'How far in advance should I book my move?',
      answer: 'We recommend booking at least 1-2 weeks in advance, especially during peak moving season (May-September). However, we often accommodate last-minute bookings based on availability. Contact us as soon as you know your moving date.'
    },
    {
      category: 'booking',
      question: 'What are your operating hours?',
      answer: 'We operate 7 days a week, with moves typically scheduled between 8:00 AM and 6:00 PM. We can accommodate early morning or evening moves upon request, subject to availability.'
    },
    {
      category: 'booking',
      question: 'Can I change or cancel my booking?',
      answer: 'Yes, you can modify or cancel your booking with at least 24 hours notice without penalty. Changes made less than 24 hours before your scheduled move may incur a rescheduling fee.'
    },
    {
      category: 'booking',
      question: 'Do you move on weekends and holidays?',
      answer: 'Yes, we provide moving services 7 days a week, including most holidays. Weekend and holiday moves may have slightly different rates - please check when booking.'
    },

    // Services & Equipment
    {
      category: 'services',
      question: 'What size moving truck do you use?',
      answer: 'We use appropriately sized trucks based on your move requirements, ranging from 17-foot trucks for smaller moves to 26-foot trucks for larger homes. Our team will recommend the right size truck during your quote.'
    },
    {
      category: 'services',
      question: 'Do you provide packing services?',
      answer: 'Yes! We offer complete packing services, partial packing, and packing supplies. Our team can pack your entire home or just fragile items, whatever you prefer. Packing services are charged separately from the move.'
    },
    {
      category: 'services',
      question: 'Can you move specialty items like pianos or antiques?',
      answer: 'Absolutely! We have experience moving specialty items including pianos, artwork, antiques, safes, and other valuable items. These items may require special equipment or techniques, which we\'ll discuss during your quote.'
    },
    {
      category: 'services',
      question: 'Do you provide storage solutions?',
      answer: 'Yes, we can arrange short-term or long-term storage solutions through our affiliated storage facilities. This is perfect if you need temporary storage between moves or while waiting for your new home to be ready.'
    },

    // Moving Preparation
    {
      category: 'preparation',
      question: 'How should I prepare for moving day?',
      answer: 'Pack and label boxes clearly, disassemble furniture if possible, disconnect appliances, defrost your freezer, and create an inventory list. We\'ll provide you with a detailed moving checklist when you book.'
    },
    {
      category: 'preparation',
      question: 'What items should I not pack?',
      answer: 'Don\'t pack hazardous materials (paint, propane, chemicals), perishable food, plants, important documents, jewelry, or cash. Keep valuable items with you during the move.'
    },
    {
      category: 'preparation',
      question: 'Should I be present during the move?',
      answer: 'Yes, we recommend that you or an authorized representative be present during both pickup and delivery to answer questions, provide access, and sign the moving inventory.'
    },
    {
      category: 'preparation',
      question: 'How long will my move take?',
      answer: 'This depends on several factors: size of your home, amount of belongings, distance between locations, and accessibility. A typical 2-bedroom apartment takes 4-6 hours, while a 4-bedroom house may take 8-12 hours.'
    },

    // Policies & Insurance
    {
      category: 'policies',
      question: 'Are my belongings insured during the move?',
      answer: 'Yes, our moving team carries comprehensive liability insurance and cargo insurance. We also offer additional insurance options for high-value items. We\'ll discuss coverage options during your quote.'
    },
    {
      category: 'policies',
      question: 'What happens if something gets damaged?',
      answer: 'While rare, if damage occurs, we have a clear claims process. Document any damage immediately, and we\'ll work with you and our insurance providers to resolve the issue fairly and quickly.'
    },
    {
      category: 'policies',
      question: 'Are your movers licensed and insured?',
      answer: 'Yes, our entire moving team is fully licensed, bonded, and insured. We maintain strict standards to ensure all our movers meet our high requirements for professionalism and reliability.'
    },
    {
      category: 'policies',
      question: 'Do I need to sign a contract?',
      answer: 'Yes, we provide a clear, straightforward moving agreement that outlines the services, costs, and terms. We encourage you to read it carefully and ask any questions before signing.'
    }
  ];

  const quickTips = [
    {
      icon: <Clock className="h-5 w-5 text-blue-600" />,
      title: 'Book Early',
      description: 'Schedule your move 1-2 weeks in advance for best availability'
    },
    {
      icon: <Package className="h-5 w-5 text-orange-600" />,
      title: 'Pack Smart',
      description: 'Label boxes clearly and pack room by room for easier unpacking'
    },
    {
      icon: <Home className="h-5 w-5 text-green-600" />,
      title: 'Prepare Your Home',
      description: 'Clear pathways and protect floors for a smooth moving day'
    },
    {
      icon: <Users className="h-5 w-5 text-purple-600" />,
      title: 'Communicate',
      description: 'Stay in touch with our team for updates and coordination'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="heading-1 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lead mb-8">
              Get answers to common questions about our moving services in Toronto and the GTA. 
              Can't find what you're looking for? Contact us directly!
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

      {/* Quick Tips */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Quick Moving Tips</h2>
            <p className="text-gray-600">Essential tips for a successful move</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 shadow-sm">
                  {tip.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Find answers organized by topic</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="block p-6 bg-white rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
              </a>
            ))}
          </div>

          {/* FAQ Sections */}
          {faqCategories.map((category) => {
            const categoryFaqs = faqs.filter(faq => faq.category === category.id);
            return (
              <div key={category.id} id={category.id} className="mb-16">
                <div className="flex items-center space-x-3 mb-8">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {categoryFaqs.map((faq, index) => (
                    <details key={index} className="group bg-white rounded-lg shadow-sm">
                      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                        <h3 className="font-semibold text-gray-900 pr-8">{faq.question}</h3>
                        <Plus className="h-5 w-5 text-gray-500 group-open:hidden flex-shrink-0" />
                        <Minus className="h-5 w-5 text-gray-500 hidden group-open:block flex-shrink-0" />
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Our friendly team is here to help! Get in touch and we'll answer any questions 
              about your upcoming move in Toronto or the GTA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+14378712382" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (416) 123-MOVE
              </a>
              <a 
                href="mailto:move@northmoving.ca"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-blue-500">
              <p className="text-blue-100">
                <strong>Office Hours:</strong> Monday - Sunday, 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 