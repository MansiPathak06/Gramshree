"use client";


import React from 'react';
import DistributionMap from './Map';

const FranchiseNetworkContent = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
              Franchise Network
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our growing network of franchise partners across Uttar Pradesh. Click on any city to view detailed information about our presence there.
          </p>
        </div>

        {/* Interactive Map Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Interactive Network Map
          </h3>
        </div>

        {/* Integrated Map Component */}
        <div className="mb-12">
          <DistributionMap />
        </div>
        
       

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Join Our Network?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Become a part of Uttar Pradesh's fastest-growing supermarket franchise network. 
            Opportunities available in multiple cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg">
              Apply for Franchise
            </button>
            <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105">
              View All Locations
            </button>
          </div>
        </div>


        
      </div>
    </section>
  );
};

export default FranchiseNetworkContent;
