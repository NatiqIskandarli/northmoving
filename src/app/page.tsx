'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Phone, 
  Star, 
  Shield, 
  Users, 
  CheckCircle, 
  Home, 
  Building, 
  Package, 
  Piano, 
  Truck, 
  Heart,
  Award,
  DollarSign,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  // Hero Slideshow Images
  const heroSlides = [
    {
      image: "/images/slide/moving-truck-team.jpg",
      alt: "Professional NorthMoving.ca team with moving truck ready for service",
      title: "Professional Moving Team",
      subtitle: "Licensed & Insured Experts"
    },
    {
      image: "/images/slide/residential-moving.jpg", 
      alt: "Team carefully moving household items from Toronto home",
      title: "Residential Moving",
      subtitle: "Your Home, Our Priority"
    },
    {
      image: "/images/slide/office-relocation.jpg",
      alt: "Professional office relocation in downtown Toronto",
      title: "Commercial Moving", 
      subtitle: "Minimal Downtime Guaranteed"
    },
    {
      image: "/images/slide/specialty-moving.jpg",
      alt: "Specialized piano moving with protective equipment",
      title: "Specialty Items",
      subtitle: "Expert Care for Valuables"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Licensed & Insured Professionals",
      description: "Our professional moving team is fully licensed, insured, and thoroughly background-checked for your peace of mind."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Comprehensive Service Range",
      description: "From residential moves to commercial relocations and specialty items - we handle it all with expertise."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with detailed quotes upfront. What you see is what you pay - no surprises."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Dedicated Customer Support",
      description: "Our team is here to support you every step of the way, from quote to completion."
    }
  ];

  const services = [
    {
      icon: <Home className="h-10 w-10 text-blue-600" />,
      title: "Residential Moving",
      description: "Houses, condos, apartments - we make your home move seamless and stress-free.",
      href: "/services/residential"
    },
    {
      icon: <Building className="h-10 w-10 text-blue-600" />,
      title: "Commercial Moving",
      description: "Office relocations, business moves, and commercial spaces handled professionally.",
      href: "/services/commercial"
    },
    {
      icon: <Package className="h-10 w-10 text-blue-600" />,
      title: "Packing Services",
      description: "Professional packing and unpacking services to protect your belongings.",
      href: "/services/packing"
    },
    {
      icon: <Piano className="h-10 w-10 text-blue-600" />,
      title: "Specialty Moving",
      description: "Pianos, antiques, art, and other specialty items moved with extra care.",
      href: "/services/specialty"
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-600" />,
      title: "Furniture Transportation",
      description: "Single items or full furniture sets transported safely and efficiently.",
      href: "/services/furniture"
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Manpower Only",
      description: "Need help with loading/unloading? Our team provides labor-only services.",
      href: "/services/manpower"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Request Your Free Quote",
      description: "Fill out our detailed form or call us. We'll provide a transparent, no-obligation estimate based on your specific needs."
    },
    {
      step: "2",
      title: "Customize Your Moving Plan",
      description: "We'll work with you to create a personalized moving plan that fits your timeline, budget, and requirements."
    },
    {
      step: "3",
      title: "Our Experts Handle the Move",
      description: "Our professional moving team arrives on time and handles your belongings with the utmost care and efficiency."
    },
    {
      step: "4",
      title: "Welcome to Your New Place!",
      description: "Relax and enjoy your new space while we take care of the heavy lifting and logistics."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      text: "NorthMoving.ca made our move from downtown Toronto to Mississauga incredibly smooth. The team was professional, efficient, and took great care of our furniture.",
      service: "Residential Moving"
    },
    {
      name: "Michael Chen",
      location: "Markham, ON",
      rating: 5,
      text: "Excellent service for our office relocation. They handled everything from packing to setting up our new workspace. Highly recommend!",
      service: "Commercial Moving"
    },
    {
      name: "Emily Rodriguez",
      location: "Vaughan, ON",
      rating: 5,
      text: "The piano moving service was exceptional. They took extra care with our antique piano and delivered it safely to our new home.",
      service: "Specialty Moving"
    }
  ];

  const workGallery = [
    {
      image: "/images/gallery/residential-move-1.jpg",
      alt: "Professional movers loading household items into truck",
      title: "Residential Moving",
      description: "Careful handling of family belongings"
    },
    {
      image: "/images/gallery/office-relocation-1.jpg", 
      alt: "Office furniture being moved by professional team",
      title: "Office Relocation",
      description: "Efficient business moving services"
    },
    {
      image: "/images/gallery/piano-moving-1.jpg",
      alt: "Specialized piano moving with protective equipment",
      title: "Piano Moving",
      description: "Expert handling of specialty items"
    },
    {
      image: "/images/gallery/packing-service-1.jpg",
      alt: "Professional packing of fragile items",
      title: "Packing Services", 
      description: "Secure packing for safe transport"
    },
    {
      image: "/images/gallery/truck-loading-1.jpg",
      alt: "Moving truck being loaded with furniture",
      title: "Professional Loading",
      description: "Organized and efficient loading"
    },
    {
      image: "/images/gallery/team-work-1.jpg",
      alt: "Moving team working together",
      title: "Teamwork",
      description: "Coordinated professional service"
    }
  ];

  const serviceAreas = [
    "Toronto", "Mississauga", "Brampton", "Vaughan", "Markham", "Richmond Hill",
    "Oakville", "Burlington", "Milton", "Pickering", "Ajax", "Whitby"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>

        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Info */}
        <div className="absolute top-8 right-8 z-20 text-white text-right">
          <h3 className="text-lg font-semibold mb-1">
            {heroSlides[currentSlide].title}
          </h3>
          <p className="text-sm text-white/90">
            {heroSlides[currentSlide].subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="heading-1 mb-6 text-white">
                                  Your Smooth &amp; Stress-Free Move Starts with{' '}
                <span className="text-orange-400">NorthMoving.ca!</span>
                </h1>
                <p className="text-lead mb-8 text-white/90">
                  From houses and condos to offices and specialty items, get a fast, free quote 
                  from reliable, insured professionals. We make your relocation easy and affordable.
                </p>
              
                {/* Trust Signals */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-orange-400" />
                    <span className="text-sm font-medium text-white/90">Experienced Crews</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-orange-400" />
                    <span className="text-sm font-medium text-white/90">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-orange-400" />
                    <span className="text-sm font-medium text-white/90">Transparent Pricing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-orange-400" />
                    <span className="text-sm font-medium text-white/90">Damage-Free Focus</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quote" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                    GET YOUR FREE MOVING QUOTE
                  </Link>
                  <a href="tel:+14378712382" className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center space-x-2 backdrop-blur-sm border border-white/20 transition-colors">
                    <Phone className="h-5 w-5" />
                    <span>CALL US NOW: +1 (437) 871-2382</span>
                  </a>
                </div>
              </div>

              <div className="lg:pl-8">
                {/* Special Offer Box */}
                <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-orange-200">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                      🎉 SPECIAL INTRODUCTORY OFFER
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      First 3 Hours for Just
                    </h3>
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      $540<span className="text-lg text-gray-600">+HST</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Includes 2 movers + truck + fuel within GTA
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Professional movers and fully equipped truck</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">All moving tools and equipment included</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Basic disassembly/assembly service</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Standard insurance coverage</span>
                    </div>
                  </div>

                  <Link href="/quote" className="btn-primary w-full text-center">
                    Claim This Offer Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Why Choose NorthMoving.ca?</h2>
            <p className="text-lead max-w-3xl mx-auto">
              We've built our reputation as the most reliable and professional moving company 
              in the GTA. Here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Our Moving Services</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Whether you're moving across the street or across the GTA, we have the expertise 
              and resources to handle any type of move.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="card hover:shadow-xl transition-all duration-300 group">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Moving Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Our Simple Moving Process</h2>
            <p className="text-lead max-w-3xl mx-auto">
              We've streamlined the moving process to make it as easy as possible for you. 
              Here's how we turn your moving stress into moving success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mx-auto">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6">Areas We Serve</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Proudly serving the Greater Toronto Area with reliable, professional moving services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="font-medium text-gray-900">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/service-areas" className="btn-primary">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Our Work in Action Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <Camera className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Gallery</span>
            </div>
            <h2 className="heading-2 mb-6">Our Work in Action</h2>
            <p className="text-lead max-w-3xl mx-auto">
              See our professional moving team in action. Real photos from real moves 
              across the Greater Toronto Area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workGallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
          <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want to see more of our work? Follow us on social media for daily updates!
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                View More Photos →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">What Our Customers Say</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers 
              have to say about their moving experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900 mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 mb-1">{testimonial.location}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote Form Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your free, no-obligation quote today and take the first step 
              towards a stress-free move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-secondary text-lg px-8 py-4">
                Get Detailed Quote
              </Link>
                          <a href="tel:+14378712382" className="btn-white text-lg px-8 py-4 flex items-center justify-center space-x-2">
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
