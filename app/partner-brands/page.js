// app/partner-brands/page.js
"use client";

import React, { useState } from 'react';
import { Store, Package, Settings, GraduationCap, Heart, MapPin, DollarSign, Clock, Users, Star, Phone, Mail, ExternalLink, Filter } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const PartnerBrandsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'All', name: 'All Categories', icon: <Package className="w-5 h-5" />, count: 25 },
    { id: 'Retail', name: 'Retail', icon: <Store className="w-5 h-5" />, count: 8 },
    { id: 'FMCG', name: 'FMCG', icon: <Package className="w-5 h-5" />, count: 6 },
    { id: 'Services', name: 'Services', icon: <Settings className="w-5 h-5" />, count: 5 },
    { id: 'Education', name: 'Education', icon: <GraduationCap className="w-5 h-5" />, count: 3 },
    { id: 'Healthcare', name: 'Healthcare', icon: <Heart className="w-5 h-5" />, count: 3 }
  ];

  const partnerBrands = [
    // Retail
    {
      id: 1,
      name: 'Reliance Fresh',
      category: 'Retail',
      logo: '/images/reliance-fresh.png',
      description: 'Leading retail chain offering fresh groceries, vegetables, and daily essentials with modern store formats and competitive pricing.',
      established: '2006',
      stores: '1000+',
      rating: 4.5,
      investment: {
        min: '₹15 Lakhs',
        max: '₹40 Lakhs',
        franchise_fee: '₹5 Lakhs'
      },
      requirements: {
        area: '1500-4000 sq ft',
        training: '45 days comprehensive',
        experience: 'Business background preferred',
        location: 'High footfall commercial areas'
      },
      support: ['Site selection', 'Store setup', 'Inventory management', 'Marketing support'],
      contact: { phone: '1800-123-4567', email: 'franchise@reliancefresh.com' }
    },
    {
      id: 2,
      name: 'Big Bazaar',
      category: 'Retail',
      logo: '/images/big-bazaar.png',
      description: 'Hypermarket chain offering fashion, food, electronics, and home essentials at affordable prices with "Sabse Sasta" promise.',
      established: '2001',
      stores: '300+',
      rating: 4.3,
      investment: {
        min: '₹25 Lakhs',
        max: '₹60 Lakhs',
        franchise_fee: '₹8 Lakhs'
      },
      requirements: {
        area: '5000-15000 sq ft',
        training: '60 days intensive',
        experience: 'Retail experience required',
        location: 'Main market areas'
      },
      support: ['Complete setup', 'Staff training', 'Supply chain', 'Promotional campaigns'],
      contact: { phone: '1800-234-5678', email: 'partner@bigbazaar.com' }
    },

    // FMCG
    {
      id: 3,
      name: 'Hindustan Unilever',
      category: 'FMCG',
      logo: '/images/hindustan-unilever.png',
      description: 'Global FMCG leader offering personal care, home care, and food & beverages with trusted brands like Surf, Dove, and Knorr.',
      established: '1933',
      stores: '2000+',
      rating: 4.7,
      investment: {
        min: '₹8 Lakhs',
        max: '₹20 Lakhs',
        franchise_fee: '₹3 Lakhs'
      },
      requirements: {
        area: '800-2000 sq ft',
        training: '30 days product training',
        experience: 'FMCG knowledge preferred',
        location: 'Residential and commercial areas'
      },
      support: ['Product training', 'Marketing materials', 'Distribution support', 'Sales training'],
      contact: { phone: '1800-345-6789', email: 'distributor@hul.co.in' }
    },
    {
      id: 4,
      name: 'Nestle',
      category: 'FMCG',
      logo: '/images/nestle.png',
      description: 'Multinational food and beverage company with popular brands like Maggi, KitKat, Nescafe, and Cerelac.',
      established: '1866',
      stores: '1500+',
      rating: 4.6,
      investment: {
        min: '₹10 Lakhs',
        max: '₹25 Lakhs',
        franchise_fee: '₹4 Lakhs'
      },
      requirements: {
        area: '1000-2500 sq ft',
        training: '35 days comprehensive',
        experience: 'Food industry background',
        location: 'High visibility locations'
      },
      support: ['Brand support', 'Training programs', 'Marketing assistance', 'Supply chain'],
      contact: { phone: '1800-456-7890', email: 'franchise@nestle.in' }
    },

    // Services
    {
      id: 5,
      name: 'Urban Company',
      category: 'Services',
      logo: '/images/urban-company.png',
      description: 'On-demand home services platform offering beauty, wellness, cleaning, and repair services with trained professionals.',
      established: '2014',
      stores: '500+',
      rating: 4.4,
      investment: {
        min: '₹5 Lakhs',
        max: '₹15 Lakhs',
        franchise_fee: '₹2 Lakhs'
      },
      requirements: {
        area: '500-1500 sq ft',
        training: '21 days service training',
        experience: 'Service industry background',
        location: 'Urban residential areas'
      },
      support: ['App-based bookings', 'Professional training', 'Quality control', 'Customer support'],
      contact: { phone: '1800-567-8901', email: 'partner@urbancompany.com' }
    },

    // Education
    {
      id: 6,
      name: 'BYJU\'S Learning Centers',
      category: 'Education',
      logo: '/images/byjus.png',
      description: 'India\'s largest ed-tech company offering personalized learning programs for K-12 students with innovative teaching methods.',
      established: '2011',
      stores: '200+',
      rating: 4.5,
      investment: {
        min: '₹12 Lakhs',
        max: '₹30 Lakhs',
        franchise_fee: '₹6 Lakhs'
      },
      requirements: {
        area: '1200-3000 sq ft',
        training: '60 days education training',
        experience: 'Education background required',
        location: 'Educational hubs and residential areas'
      },
      support: ['Curriculum support', 'Teacher training', 'Technology setup', 'Marketing support'],
      contact: { phone: '1800-678-9012', email: 'franchise@byjus.com' }
    },

    // Healthcare
    {
      id: 7,
      name: 'Apollo Pharmacy',
      category: 'Healthcare',
      logo: '/images/apollo-pharmacy.png',
      description: 'Leading pharmacy chain offering medicines, health products, and wellness services with doorstep delivery options.',
      established: '1983',
      stores: '4000+',
      rating: 4.6,
      investment: {
        min: '₹18 Lakhs',
        max: '₹45 Lakhs',
        franchise_fee: '₹7 Lakhs'
      },
      requirements: {
        area: '600-1800 sq ft',
        training: '30 days pharmacy operations',
        experience: 'Pharmacy license required',
        location: 'Near hospitals and residential areas'
      },
      support: ['Inventory management', 'Staff training', 'Digital platform', 'Regulatory compliance'],
      contact: { phone: '1800-789-0123', email: 'franchise@apollopharmacy.in' }
    }
  ];

  const filteredBrands = partnerBrands.filter(brand => {
    const matchesCategory = activeCategory === 'All' || brand.category === activeCategory;
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const BrandCard = ({ brand }) => (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* Brand Header */}
      <div className="bg-gradient-to-r from-green-500 to-orange-500 p-6 text-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            {/* Logo Placeholder */}
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {brand.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">{brand.name}</h3>
              <div className="flex items-center space-x-3">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{brand.category}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-300 mr-1" />
                  <span className="text-sm">{brand.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-green-100 leading-relaxed">{brand.description}</p>
      </div>

      {/* Brand Details */}
      <div className="p-6 space-y-6">
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-gray-900">Est. {brand.established}</div>
            <div className="text-sm text-gray-600">Founded</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-gray-900">{brand.stores}</div>
            <div className="text-sm text-gray-600">Stores</div>
          </div>
        </div>

        {/* Investment Details */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <DollarSign className="w-5 h-5 text-green-600 mr-2" />
            Investment Requirements
          </h4>
          <div className="bg-green-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Investment:</span>
              <span className="font-semibold text-gray-900">{brand.investment.min} - {brand.investment.max}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Franchise Fee:</span>
              <span className="font-semibold text-orange-600">{brand.investment.franchise_fee}</span>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <MapPin className="w-5 h-5 text-orange-600 mr-2" />
            Franchise Requirements
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Area Required:</span>
              <span className="font-medium">{brand.requirements.area}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Training Period:</span>
              <span className="font-medium">{brand.requirements.training}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Experience:</span>
              <span className="font-medium">{brand.requirements.experience}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Location:</span>
              <span className="font-medium">{brand.requirements.location}</span>
            </div>
          </div>
        </div>

        {/* Support Provided */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Users className="w-5 h-5 text-blue-600 mr-2" />
            Support Provided
          </h4>
          <div className="flex flex-wrap gap-2">
            {brand.support.map((item, idx) => (
              <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                {brand.contact.phone}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                {brand.contact.email}
              </div>
            </div>
            <button className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-orange-600 transition-colors duration-300 transform hover:scale-105">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Partner{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Brands & Categories
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our diverse portfolio of trusted partner brands across multiple categories. 
              Find the perfect franchise opportunity that matches your investment capacity and business goals.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              =<input
  type="text"
  placeholder="Search brands or descriptions..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-full 
             focus:border-green-500 focus:outline-none transition-colors duration-300 pr-12
             placeholder-gray-500 text-gray-500"
 />

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 text-xl font-bold transition-colors duration-200"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-5 h-5 text-gray-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Filter by Category</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Results Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {activeCategory === 'All' ? 'All Partner Brands' : `${activeCategory} Brands`}
            </h2>
            <div className="text-gray-600">
              Showing {filteredBrands.length} of {partnerBrands.length} brands
            </div>
          </div>

          {/* Brands Grid */}
          {filteredBrands.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredBrands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No brands found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
                className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-orange-600 transition-colors duration-300"
              >
                Show All Brands
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Partner with Leading Brands?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of successful franchise partners and build your business with trusted brands and government support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Explore Opportunities
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all transform hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerBrandsPage;
