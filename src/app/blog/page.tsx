import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen,
  TrendingUp,
  Truck,
  Home,
  Package,
  Shield,
  DollarSign,
  CheckCircle,
  Users,
  Search
} from 'lucide-react';

export const metadata = {
  title: "Moving Tips & Advice Blog | NorthMoving.ca Toronto GTA",
  description: "Expert moving tips, guides, and advice for Toronto and GTA residents. Learn about packing, planning, and making your move stress-free with professional insights.",
};

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  tags: string[];
}

interface BlogCategory {
  id: string;
  name: string;
  icon: JSX.Element;
  color: string;
  count: number;
}

export default function BlogPage() {
  const categories: BlogCategory[] = [
    {
      id: 'tips',
      name: 'Moving Tips',
      icon: <CheckCircle className="h-5 w-5" />,
      color: 'bg-blue-50 text-blue-600',
      count: 12
    },
    {
      id: 'planning',
      name: 'Planning',
      icon: <Calendar className="h-5 w-5" />,
      color: 'bg-green-50 text-green-600',
      count: 8
    },
    {
      id: 'packing',
      name: 'Packing',
      icon: <Package className="h-5 w-5" />,
      color: 'bg-orange-50 text-orange-600',
      count: 15
    },
    {
      id: 'residential',
      name: 'Residential',
      icon: <Home className="h-5 w-5" />,
      color: 'bg-purple-50 text-purple-600',
      count: 10
    },
    {
      id: 'commercial',
      name: 'Commercial',
      icon: <Users className="h-5 w-5" />,
      color: 'bg-red-50 text-red-600',
      count: 6
    },
    {
      id: 'costs',
      name: 'Costs & Budgeting',
      icon: <DollarSign className="h-5 w-5" />,
      color: 'bg-yellow-50 text-yellow-600',
      count: 7
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 'ultimate-moving-checklist-toronto',
      title: 'The Ultimate Moving Checklist for Toronto Residents',
      excerpt: 'A comprehensive 8-week moving checklist to help you plan your move in Toronto and the GTA. From booking movers to settling into your new home.',
      content: '',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'planning',
      featured: true,
      tags: ['planning', 'checklist', 'toronto', 'organization']
    },
    {
      id: 'packing-fragile-items-safely',
      title: 'How to Pack Fragile Items Safely: A Professional Guide',
      excerpt: 'Learn professional packing techniques to protect your valuable and fragile items during your move. Tips from experienced Toronto movers.',
      content: '',
      author: 'Mike Chen',
      date: 'December 12, 2024',
      readTime: '6 min read',
      category: 'packing',
      featured: true,
      tags: ['packing', 'fragile-items', 'protection', 'tips']
    },
    {
      id: 'moving-costs-toronto-2024',
      title: 'Moving Costs in Toronto: What to Expect in 2024',
      excerpt: 'Complete breakdown of moving costs in Toronto and the GTA. Understand pricing factors, hidden fees to avoid, and how to budget for your move.',
      content: '',
      author: 'David Thompson',
      date: 'December 10, 2024',
      readTime: '7 min read',
      category: 'costs',
      featured: true,
      tags: ['costs', 'budgeting', 'toronto', 'pricing']
    },
    {
      id: 'best-time-to-move-gta',
      title: 'Best Time to Move in the Greater Toronto Area',
      excerpt: 'Discover the optimal times to move in the GTA to save money and avoid peak season stress. Seasonal moving tips and considerations.',
      content: '',
      author: 'Lisa Rodriguez',
      date: 'December 8, 2024',
      readTime: '5 min read',
      category: 'planning',
      featured: false,
      tags: ['timing', 'planning', 'gta', 'seasons']
    },
    {
      id: 'office-relocation-guide',
      title: 'Office Relocation Guide: Moving Your Business in Toronto',
      excerpt: 'Complete guide to commercial office moves in Toronto. Minimize downtime, manage employees, and ensure a smooth business transition.',
      content: '',
      author: 'Robert Kim',
      date: 'December 5, 2024',
      readTime: '9 min read',
      category: 'commercial',
      featured: false,
      tags: ['commercial', 'office', 'business', 'planning']
    },
    {
      id: 'downsizing-seniors-toronto',
      title: 'Downsizing Tips for Seniors Moving in Toronto',
      excerpt: 'Compassionate advice for senior moves in Toronto. How to downsize belongings, choose the right movers, and make the transition easier.',
      content: '',
      author: 'Mary Wilson',
      date: 'December 3, 2024',
      readTime: '6 min read',
      category: 'residential',
      featured: false,
      tags: ['seniors', 'downsizing', 'residential', 'toronto']
    },
    {
      id: 'moving-insurance-guide',
      title: 'Understanding Moving Insurance: What You Need to Know',
      excerpt: 'Comprehensive guide to moving insurance options in Canada. Protect your belongings and understand coverage types for your Toronto move.',
      content: '',
      author: 'Jennifer Lee',
      date: 'November 30, 2024',
      readTime: '7 min read',
      category: 'tips',
      featured: false,
      tags: ['insurance', 'protection', 'coverage', 'tips']
    },
    {
      id: 'eco-friendly-moving-tips',
      title: '10 Eco-Friendly Moving Tips for Environmentally Conscious Moves',
      excerpt: 'Reduce your environmental impact during your move with these sustainable moving practices. Green moving tips for Toronto residents.',
      content: '',
      author: 'Alex Green',
      date: 'November 28, 2024',
      readTime: '5 min read',
      category: 'tips',
      featured: false,
      tags: ['eco-friendly', 'environment', 'sustainability', 'tips']
    },
    {
      id: 'student-moving-guide-toronto',
      title: 'Student Moving Guide: Dorm and Apartment Moves in Toronto',
      excerpt: 'Essential moving tips for students in Toronto. Budget-friendly moving solutions, packing tips, and timing advice for university moves.',
      content: '',
      author: 'Emma Davis',
      date: 'November 25, 2024',
      readTime: '6 min read',
      category: 'residential',
      featured: false,
      tags: ['students', 'university', 'budget', 'residential']
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

  const getCategoryInfo = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="heading-1 mb-6">
              Moving Tips & <span className="text-gradient">Expert Advice</span>
            </h1>
            <p className="text-lead mb-8">
              Get insider tips, expert advice, and comprehensive guides for your move in Toronto and the GTA. 
              Learn from professional movers and make your relocation stress-free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Get Moving Quote
              </Link>
              <Link href="#recent-posts" className="btn-secondary text-lg px-8 py-4">
                Browse Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Find articles organized by topic</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog/category/${category.id}`}
                className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <span className="text-sm text-gray-500">{category.count} articles</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <div className="flex items-center text-blue-600 text-sm group-hover:text-blue-700">
                  <span>View articles</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Featured</span>
            </div>
            <h2 className="heading-2 mb-4">Most Popular Articles</h2>
            <p className="text-gray-600">Our most read and shared moving guides</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => {
              const categoryInfo = getCategoryInfo(post.category);
              return (
                <article key={post.id} className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${categoryInfo?.color}`}>
                        {categoryInfo?.icon}
                        <span className="ml-1">{categoryInfo?.name}</span>
                      </span>
                      <span className="text-xs text-gray-500">Featured</span>
                    </div>
                    
                    <h3 className={`font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className={`text-gray-600 mb-4 ${index === 0 ? 'text-lg' : ''}`}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Read more
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section id="recent-posts" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Recent Articles</h2>
            <p className="text-gray-600">Latest moving tips and advice from our experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => {
              const categoryInfo = getCategoryInfo(post.category);
              return (
                <article key={post.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${categoryInfo?.color}`}>
                        {categoryInfo?.icon}
                        <span className="ml-1">{categoryInfo?.name}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Read article
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/blog/all" 
              className="btn-secondary text-lg px-8 py-4"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Moving Tips
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Get our latest moving guides, tips, and exclusive offers delivered to your inbox. 
              Join thousands of Toronto residents who trust our advice.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Services CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Move? We're Here to Help!
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Put our expert advice into action. Get a free quote for your Toronto or GTA move today 
              and experience the NorthMoving.ca difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                View Services
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                <strong>Get Started:</strong> Request your free custom quote today - transparent pricing tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 