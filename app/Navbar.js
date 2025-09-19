"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
   const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle smooth scrolling for anchor links (only for same page)
  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMobileMenu();
  }, [closeMobileMenu]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMobileMenu();
    }
  }, [isMenuOpen, closeMobileMenu]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#f1f4ed]/95 backdrop-blur-sm shadow-lg' 
          : 'bg-[#f1f4ed] shadow-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/gram-shree-logo.png" 
                alt="Gram Shree Mart" 
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-10' : 'h-12'
                }`}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-gray-800 hover:text-[#4CAF50] font-medium transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              
              <Link 
                href="/about-us" 
                className="text-gray-800 hover:text-[#4CAF50] font-medium transition-colors duration-300 relative group"
              >
                About us 
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              
              <Link 
                href="/partner-brands" 
                className="text-gray-800 hover:text-[#4CAF50] font-medium transition-colors duration-300 relative group"
              >
                Partner Brands
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              
              <Link 
                href="/franchise-network" 
                className="text-gray-800 hover:text-[#4CAF50] font-medium transition-colors duration-300 relative group"
              >
                Franchise Network
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              
              <Link 
                href="/govt-scheme" 
                className="text-gray-800 hover:text-[#4CAF50] font-medium transition-colors duration-300 relative group"
              >
                Govt Scheme
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              
              <Link 
                href="/resources" 
               
                className="text-gray-800 hover:text-[#4CAF50] font-medium transition-colors duration-300 relative group"
              >
                Resources
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              
              <Link 
                href="/contact" 
                
                className="text-gray-800 hover:text-[#4CAF50] font-medium transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
             <button
      onClick={() => router.push("/contact")}
      className="bg-gradient-to-r from-[#f17e00] to-[#e06d00] text-white px-6 py-2 rounded-full font-semibold hover:from-[#e06d00] hover:to-[#d15c00] transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2"
      type="button"
    >
      Apply Now
    </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-[#4CAF50] transition-colors duration-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2 rounded-md"
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
              type="button"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-[#f1f4ed] border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            onClick={closeMobileMenu}
            className="block px-3 py-3 text-gray-800 hover:text-[#4CAF50] hover:bg-gray-50 rounded-md transition-colors duration-300 font-medium"
          >
            Home
          </Link>
          
          <Link 
            href="/about-us" 
            onClick={closeMobileMenu}
            className="block px-3 py-3 text-gray-800 hover:text-[#4CAF50] hover:bg-gray-50 rounded-md transition-colors duration-300 font-medium"
          >
            About us
          </Link>
          
          <Link 
            href="/partner-brands" 
            onClick={closeMobileMenu}
            className="block px-3 py-3 text-gray-800 hover:text-[#4CAF50] hover:bg-gray-50 rounded-md transition-colors duration-300 font-medium"
          >
            Partner Brands
          </Link>
          
          <Link 
            href="/franchise-network" 
            onClick={closeMobileMenu}
            className="block px-3 py-3 text-gray-800 hover:text-[#4CAF50] hover:bg-gray-50 rounded-md transition-colors duration-300 font-medium"
          >
            Franchise Network
          </Link>
          
          <Link 
            href="/govt-scheme" 
            onClick={closeMobileMenu}
            className="block px-3 py-3 text-gray-800 hover:text-[#4CAF50] hover:bg-gray-50 rounded-md transition-colors duration-300 font-medium"
          >
            Govt Scheme
          </Link>
          
          <Link 
            href="#resources" 
            onClick={(e) => handleSmoothScroll(e, '#resources')}
            className="block px-3 py-3 text-gray-800 hover:text-[#4CAF50] hover:bg-gray-50 rounded-md transition-colors duration-300 font-medium"
          >
            Resources
          </Link>
          
          <Link 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="block px-3 py-3 text-gray-800 hover:text-[#4CAF50] hover:bg-gray-50 rounded-md transition-colors duration-300 font-medium"
          >
            Contact
          </Link>
          
          {/* Mobile CTA Button */}
          <div className="pt-4 pb-2">
            <button 
              className="w-full bg-gradient-to-r from-[#f17e00] to-[#e06d00] text-white px-4 py-3 rounded-lg font-semibold hover:from-[#e06d00] hover:to-[#d15c00] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2"
              type="button"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
