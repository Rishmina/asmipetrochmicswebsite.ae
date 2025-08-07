
'use client';

import Link from 'next/link';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import { useState } from 'react';

export default function HomePage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setShowMobileMenu(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="w-full px-2 sm:px-2 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="cursor-pointer"
              >
                <img 
                  src="/images/image.png" 
                  alt="ASMI ENERGY FZE Logo"                 
                  className="h-16 w-auto object-cover"
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {/* Products Dropdown */}
              <div className="relative group">
                <button 
                  className="text-[#DAA520] hover:text-[#B8860B] transition-colors cursor-pointer font-semibold flex items-center"
                >
                  Products
                  <i className="ri-arrow-down-s-line ml-1 text-sm transition-transform group-hover:rotate-180"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <button 
                      onClick={() => {
                        document.getElementById('base-oil')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#DAA520] transition-colors cursor-pointer"
                    >
                      Base Oil
                    </button>
                    <button 
                      onClick={() => {
                        document.getElementById('rpo-oil')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#DAA520] transition-colors cursor-pointer"
                    >
                      Aromatic Rubber Process Oil
                    </button>
                    <button 
                      onClick={() => {
                        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#DAA520] transition-colors cursor-pointer"
                    >
                      All Products
                    </button>
                  </div>
                </div>
              </div>
              <Link 
                href="#contact" 
                className="text-[#DAA520] hover:text-[#B8860B] transition-colors cursor-pointer font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us
              </Link>
            </nav>
            <div className="md:hidden">
              <button 
                className="p-2 cursor-pointer"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <i className={`${showMobileMenu ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-[#DAA520] w-6 h-6 flex items-center justify-center`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-4">
                {/* Products Dropdown for Mobile */}
                <div className="space-y-2">
                  <div className="text-left text-[#DAA520] font-semibold px-4 py-2">
                    Products
                  </div>
                  <div className="pl-4 space-y-1">
                    <button 
                      onClick={() => {
                        document.getElementById('base-oil')?.scrollIntoView({ behavior: 'smooth' });
                        setShowMobileMenu(false);
                      }}
                      className="w-full text-left text-gray-600 hover:text-[#DAA520] transition-colors cursor-pointer px-4 py-2 hover:bg-gray-50 rounded-lg"
                    >
                      Base Oil
                    </button>
                    <button 
                      onClick={() => {
                        document.getElementById('rpo-oil')?.scrollIntoView({ behavior: 'smooth' });
                        setShowMobileMenu(false);
                      }}
                      className="w-full text-left text-gray-600 hover:text-[#DAA520] transition-colors cursor-pointer px-4 py-2 hover:bg-gray-50 rounded-lg"
                    >
                      Aromatic Rubber Process Oil
                    </button>
                    <button 
                      onClick={() => {
                        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                        setShowMobileMenu(false);
                      }}
                      className="w-full text-left text-gray-600 hover:text-[#DAA520] transition-colors cursor-pointer px-4 py-2 hover:bg-gray-50 rounded-lg"
                    >
                      All Products
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-[#DAA520] hover:text-[#B8860B] transition-colors cursor-pointer font-semibold px-4 py-2 hover:bg-gray-50 rounded-lg"
                >
                  Contact Us
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Auto Slider */}
      <HeroSlider />

      {/* About Section */}
      <AboutSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/971502181100"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-white"
          title="Chat on WhatsApp"
        >
          <i className="ri-whatsapp-line text-white text-xl"></i>
        </a>

        {/* Phone */}
        <a
          href="tel:+971502181100"
          className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-white"
          title="Call us"
        >
          <i className="ri-phone-line text-white text-xl"></i>
        </a>

        {/* Email */}
        <a
          href="mailto:sales@asmienergy.com"
          className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-white"
          title="Send us an email"
        >
          <i className="ri-mail-line text-white text-xl"></i>
        </a>

        {/* Location */}
        <a
          href="https://maps.app.goo.gl/699EWf9ZEEZwMSHa9?g_st=iw"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-white"
          title="View our location"
        >
          <i className="ri-map-pin-line text-white text-xl"></i>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-[`Pacifico`] mb-4 text-[#DAA520]">ASMI ENERGY FZE</h3>
              <p className="text-gray-300 text-sm">
                Leading petrochemical trade company empowering businesses across Asia & MENA with premium oil solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#DAA520]">Products</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#base-oil" className="hover:text-[#DAA520] transition-colors cursor-pointer">Base Oil</Link></li>
                <li><Link href="#rpo-oil" className="hover:text-[#DAA520] transition-colors cursor-pointer">RPO Oil</Link></li>
                <li><Link href="#" className="hover:text-[#DAA520] transition-colors cursor-pointer">Group I-IV Oils</Link></li>
                <li><Link href="#" className="hover:text-[#DAA520] transition-colors cursor-pointer">SN 500</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#DAA520]">Connect</h4>
              <div className="flex space-x-4">
                <svg className="w-8 h-8 text-2xl hover:text-[#DAA520] cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <svg className="w-8 h-8 text-2xl hover:text-[#DAA520] cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <svg className="w-8 h-8 text-2xl hover:text-[#DAA520] cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <a 
                  href="mailto:sales@asmienergy.com"
                  className="w-8 h-8 flex items-center justify-center transition-colors"
                >
                  <svg className="w-8 h-8 text-2xl hover:text-[#DAA520] cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#DAA520]">Location</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>LV-07/05, LOGISTICS VILLAGE</p>
                <p>HAMRIYAH, Dubai</p>
                <p>United Arab Emirates</p>
                <a 
                  href="https://maps.app.goo.gl/699EWf9ZEEZwMSHa9?g_st=iw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#DAA520] hover:text-[#B8860B] transition-colors font-semibold"
                >
                  <i className="ri-map-pin-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                  View on Map
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              2024 ASMI ENERGY FZE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
