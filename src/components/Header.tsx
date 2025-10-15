'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PRICING', href: '/pricing' },
    { name: 'SERVICE AREAS', href: '/service-areas' },
    { name: 'FAQ', href: '/faq' },
    { name: 'BLOG', href: '/blog' },
  ];

  const contactInfo = {
    phone: '+14378719288',
    phoneDisplay: '+1 (437) 871-9288',
    email: 'move@northmoving.ca',
    hours: '7 days a week!'
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top Navigation Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Left side - Navigation Menu */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 font-semibold text-sm tracking-wide transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Right side - Social Media & Contact Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <Link
                href="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Contact Info */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/images/logo.png" alt="NorthMoving.ca" width={390} height={200} />
              </Link>
            </div>

            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="font-medium">Call us Now</span>
                <span className="font-bold text-gray-900">{contactInfo.phoneDisplay}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="font-medium">Email us</span>
                <span className="font-bold text-gray-900">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="font-medium">Hours of operation</span>
                <span className="font-bold text-gray-900">{contactInfo.hours}</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="bg-orange-500 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-3">
            <Link
              href="/"
              className="text-white hover:text-orange-100 font-semibold text-sm transition-colors duration-200"
            >
              HOME
            </Link>
            
            {/* RESIDENTIAL MOVING Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="text-white hover:text-orange-100 font-semibold text-sm transition-colors duration-200 flex items-center space-x-1"
              >
                <span>RESIDENTIAL MOVING</span>
                <span className="text-xs">▼</span>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/services#house-moving"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 border-b border-gray-100"
                  >
                    <div className="font-semibold">House Moving</div>
                    <div className="text-xs text-gray-500">Complete home relocations</div>
                  </Link>
                  <Link
                    href="/services#condo-moving"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 border-b border-gray-100"
                  >
                    <div className="font-semibold">Condo/Apartment Moving</div>
                    <div className="text-xs text-gray-500">High-rise & apartment moves</div>
                  </Link>
                  <Link
                    href="/services#senior-moving"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 border-b border-gray-100"
                  >
                    <div className="font-semibold">Senior Moving</div>
                    <div className="text-xs text-gray-500">Specialized care for seniors</div>
                  </Link>
                  <Link
                    href="/services#student-moving"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  >
                    <div className="font-semibold">Student Moving</div>
                    <div className="text-xs text-gray-500">Dorm & student relocations</div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* BUSINESS MOVING Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="text-white hover:text-orange-100 font-semibold text-sm transition-colors duration-200 flex items-center space-x-1"
              >
                <span>BUSINESS MOVING</span>
                <span className="text-xs">▼</span>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/services#office-relocation"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 border-b border-gray-100"
                  >
                    <div className="font-semibold">Office Relocation</div>
                    <div className="text-xs text-gray-500">Complete office moves</div>
                  </Link>
                  <Link
                    href="/services#business-moves"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 border-b border-gray-100"
                  >
                    <div className="font-semibold">Business Moves</div>
                    <div className="text-xs text-gray-500">Commercial relocations</div>
                  </Link>
                  <Link
                    href="/services#it-equipment"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 border-b border-gray-100"
                  >
                    <div className="font-semibold">IT Equipment Moving</div>
                    <div className="text-xs text-gray-500">Servers & tech equipment</div>
                  </Link>
                  <Link
                    href="/services#office-furniture"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  >
                    <div className="font-semibold">Office Furniture</div>
                    <div className="text-xs text-gray-500">Desks, chairs & fixtures</div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* SERVICE AREAS Dropdown */}
            <div className="relative group">
              <Link
                href="/service-areas"
                className="text-white hover:text-orange-100 font-semibold text-sm transition-colors duration-200 flex items-center space-x-1"
              >
                <span>SERVICE AREAS</span>
                <span className="text-xs">▼</span>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/service-areas#toronto"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 border-b border-gray-100"
                  >
                    <div className="font-semibold">Toronto</div>
                    <div className="text-xs text-gray-500">Downtown & surrounding areas</div>
                  </Link>
                  <Link
                    href="/service-areas#mississauga"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 border-b border-gray-100"
                  >
                    <div className="font-semibold">Mississauga</div>
                    <div className="text-xs text-gray-500">Full city coverage</div>
                  </Link>
                  <Link
                    href="/service-areas#brampton"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 border-b border-gray-100"
                  >
                    <div className="font-semibold">Brampton</div>
                    <div className="text-xs text-gray-500">All neighborhoods</div>
                  </Link>
                  <Link
                    href="/service-areas#markham"
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  >
                    <div className="font-semibold">All GTA Areas</div>
                    <div className="text-xs text-gray-500">View complete coverage</div>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link
              href="/service-areas"
              className="text-white hover:text-orange-100 font-semibold text-sm transition-colors duration-200"
            >
              LOCATIONS
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-orange-100 font-semibold text-sm transition-colors duration-200"
            >
              LICENSEE
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 font-semibold rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <a
                href={`tel:${contactInfo.phone.replace(/[^\d]/g, '')}`}
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Call Now
              </a>
              <Link
                href="/quote"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 