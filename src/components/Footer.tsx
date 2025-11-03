import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Residential Moving',
    'Commercial Moving',
    'Packing Services',
    'Piano Moving',
    'Appliance Moving',
    'Office Relocations'
  ];

  const quickLinks = [
    { name: 'Get Quote', href: '/quote' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' }
  ];

  const serviceAreas = [
    'Toronto',
    'Mississauga',
    'Brampton',
    'Markham',
    'Vaughan',
    'Richmond Hill'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-blue-400">NorthMoving</span>
                <span className="text-white">.ca</span>
              </Link>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
                              Your trusted moving company for stress-free relocations in the Greater Toronto Area. 
                We are licensed, insured, and professional movers serving the GTA.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+14378719288" className="text-gray-300 hover:text-white transition-colors">
                  +1 (437) 871-9288
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:move@northmoving.ca" className="text-gray-300 hover:text-white transition-colors">
                  move@northmoving.ca
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <address className="text-gray-300 not-italic">
                  5 Defries Street<br />
                  Toronto, ON M5A 0W7<br />
                  Canada
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Mon-Sun: 8AM-8PM</span>
              </div>
            </div>

            {/* Google Business Profile Link */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <a
                href="https://www.google.com/maps/search/?api=1&query=NorthMoving.ca+5+Defries+Street+Toronto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors duration-200"
              >
                <Star className="h-4 w-4 fill-white" />
                <span>Review Us on Google</span>
              </a>
              <div className="mt-3 flex items-center space-x-1 text-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="ml-2 text-gray-300 font-semibold">4.9/5</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">150+ Reviews</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link 
                    href="/service-areas" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link 
                href="/service-areas" 
                className="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                View All Areas →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} NorthMoving.ca - All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container-custom py-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-gray-400">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                              <span>Licensed & Insured Team</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Free Estimates</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span>Same-Day Service Available</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 