import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle,
  Package,
  Home,
  Truck,
  Phone,
  Share2,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';

export const metadata = {
  title: "The Ultimate Moving Checklist for Toronto Residents | NorthMoving.ca",
  description: "Complete 8-week moving checklist for Toronto and GTA residents. Step-by-step guide to plan your move perfectly with professional tips and timelines.",
};

export default function BlogPostPage() {
  const relatedPosts = [
    {
      id: 'packing-fragile-items-safely',
      title: 'How to Pack Fragile Items Safely',
      excerpt: 'Professional packing techniques for your valuable items'
    },
    {
      id: 'moving-costs-toronto-2024',
      title: 'Moving Costs in Toronto: 2024 Guide',
      excerpt: 'Complete breakdown of moving expenses in the GTA'
    },
    {
      id: 'best-time-to-move-gta',
      title: 'Best Time to Move in the GTA',
      excerpt: 'Optimal timing for your Toronto area move'
    }
  ];

  const checklistItems = [
    {
      week: '8 Weeks Before',
      tasks: [
        'Research and get quotes from moving companies',
        'Create a moving binder/folder for documents',
        'Start decluttering - donate, sell, or discard items',
        'Research your new neighborhood',
        'Start using up frozen and perishable foods'
      ]
    },
    {
      week: '6 Weeks Before',
      tasks: [
        'Book your moving company',
        'Order packing supplies',
        'Create a floor plan of your new home',
        'Research schools if you have children',
        'Start collecting important documents'
      ]
    },
    {
      week: '4 Weeks Before',
      tasks: [
        'Start packing non-essential items',
        'Label boxes clearly with contents and room',
        'Arrange time off work for moving day',
        'Research utility companies in your new area',
        'Schedule disconnection of current utilities'
      ]
    },
    {
      week: '2 Weeks Before',
      tasks: [
        'Confirm moving day details with your movers',
        'Pack everything except essentials',
        'Use up cleaning supplies and toiletries',
        'Confirm utility setup at new home',
        'Plan your moving day timeline'
      ]
    },
    {
      week: '1 Week Before',
      tasks: [
        'Pack a "first day" box with essentials',
        'Confirm all arrangements',
        'Prepare cash for tips and unexpected expenses',
        'Do final cleaning of items to be moved',
        'Pack a survival kit for the first few days'
      ]
    },
    {
      week: 'Moving Day',
      tasks: [
        'Be present for the entire move',
        'Check inventory lists carefully',
        'Take photos of valuable items',
        'Keep important documents with you',
        'Do a final walkthrough of your old home'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                <span>/</span>
                <span className="text-gray-900">Ultimate Moving Checklist</span>
              </div>
            </nav>

            {/* Article Meta */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Planning</span>
                </span>
                <span className="text-sm text-gray-500">Featured Article</span>
              </div>
              
              <h1 className="heading-1 mb-6">
                The Ultimate Moving Checklist for Toronto Residents
              </h1>
              
              <p className="text-lead text-gray-600 mb-6">
                A comprehensive 8-week moving checklist to help you plan your move in Toronto and the GTA. 
                From booking movers to settling into your new home, this guide covers everything you need to know.
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Sarah Johnson</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>December 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Share2 className="h-4 w-4 text-gray-400" />
                  <button className="text-gray-400 hover:text-blue-600">
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-blue-600">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-blue-600">
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p>
                Moving can be one of life's most stressful experiences, but with proper planning and organization, 
                you can make your Toronto move smooth and efficient. This comprehensive checklist breaks down 
                everything you need to do over an 8-week period leading up to your moving day.
              </p>

              <p>
                Whether you're moving within Toronto, from Toronto to the suburbs, or relocating to the GTA 
                from another city, this timeline will help ensure you don't forget any important steps.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Why Start Planning 8 Weeks Early?
              </h2>
              
              <p>
                The Greater Toronto Area's competitive moving market means that the best moving companies 
                book up quickly, especially during peak season (May through September). Starting your 
                planning 8 weeks in advance gives you:
              </p>

              <ul className="space-y-2">
                <li>Better selection of reputable moving companies</li>
                <li>More competitive pricing options</li>
                <li>Less stress and more organized approach</li>
                <li>Time to properly research your new neighborhood</li>
                <li>Opportunity to declutter and organize belongings</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Your Complete Moving Timeline
              </h2>

              <div className="space-y-8">
                {checklistItems.map((period, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{period.week}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {period.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Toronto-Specific Moving Tips
              </h2>

              <p>
                Moving in Toronto comes with unique challenges. Here are some GTA-specific considerations:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Building Restrictions
              </h3>
              <p>
                Many Toronto condos and apartment buildings have specific moving hours (typically 9 AM to 5 PM) 
                and may require elevator reservations. Contact your building management early to book moving times 
                and understand any restrictions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Parking and Street Access
              </h3>
              <p>
                Downtown Toronto streets can be narrow and parking limited. Your moving company should be 
                experienced with Toronto's unique challenges and may need to obtain parking permits for 
                the moving truck.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Seasonal Considerations
              </h3>
              <p>
                Toronto winters can complicate moves with snow and ice. If you're moving between November 
                and March, discuss winter moving procedures with your moving company and have backup plans 
                for weather delays.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Moving Day Success Tips
              </h2>

              <p>
                On moving day, being prepared and organized will save you time, money, and stress:
              </p>

              <ul className="space-y-2">
                <li><strong>Be present:</strong> Stay on-site to answer questions and provide guidance</li>
                <li><strong>Keep essentials accessible:</strong> Pack a box of immediate needs for your first day</li>
                <li><strong>Document everything:</strong> Take photos of valuable items before packing</li>
                <li><strong>Check inventory:</strong> Review all items on the moving company's inventory list</li>
                <li><strong>Prepare for delays:</strong> Have snacks, water, and patience ready</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                After the Move: Settling In
              </h2>

              <p>
                Once you've arrived at your new Toronto home, there are still important tasks to complete:
              </p>

              <ul className="space-y-2">
                <li>Register with Ontario Health Insurance Plan (OHIP) if moving from another province</li>
                <li>Update your driver's license and vehicle registration</li>
                <li>Register to vote in your new riding</li>
                <li>Find local services: grocery stores, pharmacy, medical clinic</li>
                <li>Explore your new neighborhood and introduce yourself to neighbors</li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Toronto Move?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let NorthMoving.ca help make your move stress-free. Get a free quote and experience 
                  the difference of working with Toronto's trusted moving professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/quote" className="btn-primary px-8 py-3">
                    Get Free Quote
                  </Link>
                              <a href="tel:+14378712382" className="btn-secondary px-8 py-3 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call +1 (437) 871-2382</span>
            </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  <strong>Special Offer:</strong> First 3 hours for $540+HST (save $90!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link 
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="block bg-white rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-blue-600 text-sm">
                    <span>Read article</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 