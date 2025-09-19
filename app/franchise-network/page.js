// app/franchise-network/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Users, Store, TrendingUp, Phone, Mail, Award, Target, Globe, Building, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import DistributionMap from '../Map'; 

const FranchiseNetworkPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Network statistics
  const totalStats = {
    totalStores: 350,
    totalPartners: 289,
    totalDistricts: 63,
    totalStates: 10,
    avgROI: '275%',
    totalRevenue: '₹905Cr+'
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Growing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Franchise Network
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our nationwide presence across India. Explore franchise 
              opportunities, success stories, and performance data across regions.
            </p>
          </div>

          {/* Network Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { icon: Store, number: totalStats.totalStores, label: "Active Stores", color: "text-green-600" },
              { icon: Users, number: totalStats.totalPartners, label: "Partners", color: "text-orange-600" },
              { icon: Globe, number: totalStats.totalStates, label: "States", color: "text-blue-600" },
              { icon: Building, number: totalStats.totalDistricts, label: "Districts", color: "text-purple-600" },
              { icon: TrendingUp, number: totalStats.avgROI, label: "Avg ROI", color: "text-green-600" },
              { icon: Award, number: totalStats.totalRevenue, label: "Revenue", color: "text-orange-600" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 text-center transform hover:scale-105 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Distribution Map Component */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Network{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Distribution Map
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive visualization of our franchise network across India with detailed insights
            </p>
          </div>
          
          <DistributionMap />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Network Success{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Data & Metrics
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real performance data from our franchise network across India
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Coverage Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Coverage Statistics</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">States Covered</div>
                    <div className="text-2xl font-bold text-green-600">{totalStats.totalStates}</div>
                  </div>
                  <Globe className="w-10 h-10 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Districts Covered</div>
                    <div className="text-2xl font-bold text-blue-600">{totalStats.totalDistricts}</div>
                  </div>
                  <Building className="w-10 h-10 text-blue-500" />
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Upcoming Locations</div>
                    <div className="text-2xl font-bold text-purple-600">5</div>
                  </div>
                  <Target className="w-10 h-10 text-purple-500" />
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Performance Metrics</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                    <div className="text-2xl font-bold text-orange-600">92%</div>
                  </div>
                  <Award className="w-10 h-10 text-orange-500" />
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Average ROI</div>
                    <div className="text-2xl font-bold text-green-600">{totalStats.avgROI}</div>
                  </div>
                  <TrendingUp className="w-10 h-10 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Partner Satisfaction</div>
                    <div className="text-2xl font-bold text-blue-600">96%</div>
                  </div>
                  <Users className="w-10 h-10 text-blue-500" />
                </div>
              </div>
            </div>

            {/* Join Network */}
            <div className="bg-gradient-to-br from-green-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Join Our Network</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-200" />
                  <span>Proven business model</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-200" />
                  <span>Complete support system</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-200" />
                  <span>Government scheme benefits</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-200" />
                  <span>Prime locations available</span>
                </div>
              </div>
              
              <button className="w-full bg-white text-green-600 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                Apply to Join Network
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <div className="text-center mt-4">
                <p className="text-white/80 text-sm">
                  Join {totalStats.totalPartners}+ successful partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Franchise Network
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a proven network with comprehensive support and growth opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Success",
                description: "92% success rate with average ROI of 275% across our network",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Users,
                title: "Complete Support",
                description: "End-to-end assistance from setup to operations and marketing",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: TrendingUp,
                title: "Growth Potential",
                description: "Expanding market with increasing demand for rural products",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Target,
                title: "Prime Locations",
                description: "Strategic locations available in high-potential markets",
                color: "from-orange-500 to-orange-600"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Onboarding Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with our franchise network in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply Online", desc: "Submit your application through our portal" },
              { step: "02", title: "Interview & Assessment", desc: "Initial screening and business discussion" },
              { step: "03", title: "Training & Setup", desc: "Comprehensive training and store setup support" },
              { step: "04", title: "Launch & Grow", desc: "Grand opening support and ongoing assistance" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Expand Our Network Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Be part of India&aos;s fastest-growing franchise network. Prime locations are still available in key markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all transform hover:scale-105">
              Schedule Meeting
            </button>
          </div>
        </div>
      </section>

      <Footer />

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
    </div>
  );
};

export default FranchiseNetworkPage;