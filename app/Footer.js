// app/Footer.js
"use client";

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Franchise Models', href: '#franchise-models' },
    { name: 'Partner Brands', href: '#partner-brands' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Franchise Support', href: '#franchise-support' },
    { name: 'Training Programs', href: '#training' },
    { name: 'Marketing Support', href: '#marketing' },
    { name: 'Supply Chain', href: '#supply-chain' },
    { name: 'Government Schemes', href: '#govt-schemes' },
    { name: 'Loan Assistance', href: '#loan-assistance' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Franchise Agreement', href: '/franchise-agreement' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'FSSAI License', href: '/fssai' },
    { name: 'GST Certificate', href: '/gst' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/gramshreemart', name: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/gramshreemart', name: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/gramshreemart', name: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/gramshreemart', name: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/gramshreemart', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <img
  src="/images/gram-shree-logo.png"
  alt="Gram Shree Mart"
  className="h-12 w-auto mb-4"
/>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Built on value, trust, and day-to-day demand, Gram Shree is one of India's fastest-growing 
                  supermarket franchise networks with over 400 stores nationwide, empowering entrepreneurs 
                  with government-backed opportunities.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">
                        B-31, B Block, Sector 6,<br />
                        Noida, Uttar Pradesh 201301
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">+91 94038 91519</p>
                      <p className="text-sm text-gray-400">Mon-Sat 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">franchise@gramshreemart.com</p>
                      <p className="text-sm text-gray-400">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href} 
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Legal & Compliance</h4>
              <ul className="space-y-3 mb-6">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm inline-flex items-center"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div>
                <h5 className="text-md font-semibold text-white mb-4">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Government Partnership & MSME Disclaimer */}
        <div className="border-t border-gray-800 py-8">
          <div className="bg-gray-800/50 rounded-2xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2 text-orange-400" />
              Government Partnership & MSME Compliance
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300 leading-relaxed">
              <div>
                <h5 className="font-semibold text-white mb-2">MSME Registration & Benefits</h5>
                <p>
                  Gram Shree Mart is a registered MSME enterprise under the Ministry of Micro, Small and Medium Enterprises, 
                  Government of India. Our franchise partners are eligible for various government schemes including MUDRA loans, 
                  PMEGP benefits, and skill development programs as per MSME guidelines and applicable terms & conditions.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">Government Scheme Disclaimer</h5>
                <p>
                  Government scheme benefits are subject to eligibility criteria, documentation requirements, and approval from 
                  respective authorities. Gram Shree Mart provides facilitation and guidance but does not guarantee scheme approval. 
                  All applications are processed as per government norms and individual merit assessment.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-400">
                <strong>Important:</strong> MSME benefits and government schemes are administered by respective government departments. 
                Please verify current scheme details and eligibility criteria from official government sources. 
                Gram Shree Mart facilitates applications but final decisions rest with government authorities.
              </p>
            </div>
          </div>

          {/* Certifications & Licenses */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-800/30 rounded-lg p-4 text-center">
              <div className="text-green-400 font-semibold text-sm mb-1">FSSAI Licensed</div>
              <div className="text-xs text-gray-400">Food Safety & Standards Authority of India</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-4 text-center">
              <div className="text-orange-400 font-semibold text-sm mb-1">GST Registered</div>
              <div className="text-xs text-gray-400">Goods & Services Tax Compliance</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-4 text-center">
              <div className="text-blue-400 font-semibold text-sm mb-1">MSME Certified</div>
              <div className="text-xs text-gray-400">Ministry of MSME, Govt. of India</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>© 2025 Gram Shree Mart. All rights reserved.</p>
              <p className="mt-1">
                A venture committed to empowering entrepreneurs across India with government support and proven business models.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>🇮🇳 Made in India</span>
              <span>•</span>
              <span>Trusted by 400+ Partners</span>
              <span>•</span>
              <span>22+ States Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
