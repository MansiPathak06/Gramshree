// app/HighlightsSection.js
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Store, 
  Shield, 
  BookOpen, 
  TrendingUp, 
  ArrowRight,
  Users,
  Award,
  Building2
} from 'lucide-react';

const HighlightsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    {
      id: 'franchise-ecosystem',
      title: 'Franchise Network',
      description: 'Explore our nationwide network of 400+ stores across 22+ states. Discover opportunities in your region and join our growing family of successful entrepreneurs.',
       icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/9185/9185648.png"
        alt="Franchise Icon"
        className="w-10 h-10"
      />),
      stats: '400+ Stores',
      navigateTo: '/franchise-network',
      gradient: 'from-green-100 to-green-900',
      bgGradient: 'from-green-50 to-green-100',
      hoverGradient: 'from-green-100 to-green-200'
    },
    {
      id: 'govt-scheme',
      title: 'Government Schemes',
      description: 'Access government initiatives, MUDRA loans up to ₹10 lakhs, subsidies, and schemes designed to support small businesses across India.',
      icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/10771/10771742.png"
        alt="Franchise Icon"
        className="w-10 h-10"
      />),
      stats: 'Up to ₹10L Loans',
      navigateTo: '/govt-scheme',
       gradient: 'from-orange-100 to-orange-700',
      bgGradient: 'from-blue-50 to-blue-100',
      hoverGradient: 'from-blue-100 to-blue-200'
    },
    {
      id: 'partner-brands',
      title: 'Partner Brands',
      description: 'Discover our diverse portfolio of trusted partner brands across retail, FMCG, services, and more. Find the perfect business opportunity for you.',
      icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/7019/7019211.png"
        alt="Franchise Icon"
        className="w-10 h-10"
      />),
      stats: '25+ Brand Categories',
      navigateTo: '/partner-brands',
      gradient: 'from-orange-100 to-orange-700',
     
      bgGradient: 'from-orange-50 to-orange-100',
      hoverGradient: 'from-orange-100 to-orange-200'
    },
    {
      id: 'success-stories',
      title: 'Success Stories',
      description: 'Read inspiring stories of entrepreneurs who transformed their lives through our franchise opportunities and government scheme support.',
      icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/4185/4185361.png"
        alt="Franchise Icon"
        className="w-10 h-10"
      />),
      stats: '92% Success Rate',
      navigateTo: '/success-stories',
       gradient: 'from-green-100 to-green-900',
      bgGradient: 'from-purple-50 to-purple-100',
      hoverGradient: 'from-purple-100 to-purple-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-green-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
              Gram Shree ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of a complete franchise ecosystem designed to ensure your success from day one
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {highlights.map((highlight, index) => (
            <Link href={highlight.navigateTo} key={highlight.id}>
              <div
                className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-4 cursor-pointer overflow-hidden ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon and Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${highlight.gradient} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {highlight.icon}
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent`}>
                        {highlight.stats}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {highlight.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform duration-300`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-gray-600" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6">Join thousands of successful entrepreneurs who chose Gramshree for their business growth</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Journey
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HighlightsSection;
