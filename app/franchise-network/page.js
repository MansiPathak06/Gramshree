// app/franchise-network/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Users, Store, TrendingUp, Phone, Mail, Award, Target, Globe, Building, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const FranchiseNetworkPage = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Franchise network data by state
  const networkData = {
    'Delhi': {
      stores: 45,
      partners: 38,
      districts: 11,
      revenue: '₹125Cr',
      growth: '+15%',
      established: '2019',
      topPerformer: 'Rajesh Kumar - Lajpat Nagar',
      avgROI: '285%',
      contact: { phone: '011-2345-6789', email: 'delhi@gramshreemart.com' },
      coordinates: { x: 410, y: 180 },
      status: 'active'
    },
    'Mumbai': {
      stores: 62,
      partners: 52,
      districts: 8,
      revenue: '₹180Cr',
      growth: '+22%',
      established: '2020',
      topPerformer: 'Priya Sharma - Andheri West',
      avgROI: '320%',
      contact: { phone: '022-3456-7890', email: 'mumbai@gramshreemart.com' },
      coordinates: { x: 320, y: 280 },
      status: 'active'
    },
    'Bangalore': {
      stores: 38,
      partners: 31,
      districts: 6,
      revenue: '₹95Cr',
      growth: '+18%',
      established: '2020',
      topPerformer: 'Amit Patel - Koramangala',
      avgROI: '270%',
      contact: { phone: '080-4567-8901', email: 'bangalore@gramshreemart.com' },
      coordinates: { x: 360, y: 380 },
      status: 'active'
    },
    'Chennai': {
      stores: 42,
      partners: 35,
      districts: 7,
      revenue: '₹110Cr',
      growth: '+20%',
      established: '2020',
      topPerformer: 'Sunita Reddy - T. Nagar',
      avgROI: '295%',
      contact: { phone: '044-5678-9012', email: 'chennai@gramshreemart.com' },
      coordinates: { x: 380, y: 410 },
      status: 'active'
    },
    'Kolkata': {
      stores: 35,
      partners: 28,
      districts: 5,
      revenue: '₹85Cr',
      growth: '+16%',
      established: '2021',
      topPerformer: 'Vikash Gupta - Salt Lake',
      avgROI: '260%',
      contact: { phone: '033-6789-0123', email: 'kolkata@gramshreemart.com' },
      coordinates: { x: 480, y: 220 },
      status: 'active'
    },
    'Hyderabad': {
      stores: 29,
      partners: 24,
      districts: 4,
      revenue: '₹75Cr',
      growth: '+19%',
      established: '2021',
      topPerformer: 'Ravi Kumar - Banjara Hills',
      avgROI: '275%',
      contact: { phone: '040-7890-1234', email: 'hyderabad@gramshreemart.com' },
      coordinates: { x: 380, y: 340 },
      status: 'active'
    },
    'Pune': {
      stores: 28,
      partners: 22,
      districts: 3,
      revenue: '₹65Cr',
      growth: '+17%',
      established: '2021',
      topPerformer: 'Neha Joshi - Kothrud',
      avgROI: '255%',
      contact: { phone: '020-8901-2345', email: 'pune@gramshreemart.com' },
      coordinates: { x: 335, y: 300 },
      status: 'active'
    },
    'Ahmedabad': {
      stores: 31,
      partners: 26,
      districts: 4,
      revenue: '₹70Cr',
      growth: '+14%',
      established: '2021',
      topPerformer: 'Kiran Patel - Satellite',
      avgROI: '265%',
      contact: { phone: '079-9012-3456', email: 'ahmedabad@gramshreemart.com' },
      coordinates: { x: 300, y: 240 },
      status: 'active'
    },
    'Jaipur': {
      stores: 22,
      partners: 18,
      districts: 3,
      revenue: '₹55Cr',
      growth: '+21%',
      established: '2022',
      topPerformer: 'Mohan Sharma - Malviya Nagar',
      avgROI: '280%',
      contact: { phone: '0141-0123-4567', email: 'jaipur@gramshreemart.com' },
      coordinates: { x: 360, y: 200 },
      status: 'active'
    },
    'Lucknow': {
      stores: 18,
      partners: 15,
      districts: 2,
      revenue: '₹45Cr',
      growth: '+13%',
      established: '2022',
      topPerformer: 'Sanjay Verma - Gomti Nagar',
      avgROI: '240%',
      contact: { phone: '0522-1234-5678', email: 'lucknow@gramshreemart.com' },
      coordinates: { x: 420, y: 200 },
      status: 'active'
    },
    'Bhopal': {
      stores: 0,
      partners: 0,
      districts: 0,
      revenue: '₹0',
      growth: 'Coming Soon',
      established: '2025',
      topPerformer: 'Opening Soon',
      avgROI: 'TBD',
      contact: { phone: '0755-1111-2222', email: 'bhopal@gramshreemart.com' },
      coordinates: { x: 380, y: 260 },
      status: 'upcoming'
    },
    'Indore': {
      stores: 0,
      partners: 0,
      districts: 0,
      revenue: '₹0',
      growth: 'Planning Phase',
      established: '2025',
      topPerformer: 'Recruitment Open',
      avgROI: 'TBD',
      contact: { phone: '0731-2222-3333', email: 'indore@gramshreemart.com' },
      coordinates: { x: 360, y: 290 },
      status: 'upcoming'
    }
  };

  const totalStats = {
    totalStores: Object.values(networkData).reduce((sum, state) => sum + state.stores, 0),
    totalPartners: Object.values(networkData).reduce((sum, state) => sum + state.partners, 0),
    totalDistricts: Object.values(networkData).reduce((sum, state) => sum + state.districts, 0),
    totalStates: Object.keys(networkData).filter(key => networkData[key].status === 'active').length,
    avgROI: '275%',
    totalRevenue: '₹905Cr+'
  };

  // India Map SVG Component
  const IndiaMapSVG = () => (
    <svg 
      viewBox="0 0 600 500" 
      className="w-full h-full"
      style={{ maxHeight: '600px' }}
    >
      {/* India outline */}
      <path
        d="M200 100 L180 120 L160 140 L140 180 L130 220 L140 260 L160 300 L180 340 L200 380 L240 420 L280 440 L320 450 L360 460 L400 450 L440 440 L480 420 L510 380 L530 340 L540 300 L530 260 L520 220 L500 180 L480 140 L460 120 L440 100 L400 90 L360 85 L320 90 L280 95 L240 98 Z"
        fill="#e8f5e8"
        stroke="#22c55e"
        strokeWidth="3"
        className="bg-white hover:fill-green-100 transition-colors duration-300"
      />
      
      {/* State markers */}
      {Object.entries(networkData).map(([stateName, data]) => (
        <g key={stateName}>
          {/* Pin glow effect */}
          <circle
            cx={data.coordinates.x}
            cy={data.coordinates.y}
            r={hoveredState === stateName ? 20 : 15}
            fill={data.status === 'active' ? "rgba(34, 197, 94, 0.2)" : "rgba(249, 115, 22, 0.2)"}
            className="transition-all duration-300 animate-pulse"
          />
          
          {/* Pin shadow */}
          <circle
            cx={data.coordinates.x + 2}
            cy={data.coordinates.y + 2}
            r={hoveredState === stateName ? 12 : 8}
            fill="rgba(0,0,0,0.3)"
            className="transition-all duration-300"
          />
          
          {/* Main pin */}
          <circle
            cx={data.coordinates.x}
            cy={data.coordinates.y}
            r={hoveredState === stateName ? 10 : 6}
            fill={selectedState === stateName 
              ? "#f97316" 
              : data.status === 'active' 
                ? "#22c55e" 
                : "#f59e0b"
            }
            stroke="white"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300 hover:scale-125 drop-shadow-lg"
            onMouseEnter={() => setHoveredState(stateName)}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => setSelectedState(selectedState === stateName ? null : stateName)}
          />
          
          {/* Store count for active locations */}
          {data.status === 'active' && (
            <text
              x={data.coordinates.x}
              y={data.coordinates.y + 4}
              textAnchor="middle"
              className="text-xs font-bold fill-white pointer-events-none"
            >
              {data.stores}
            </text>
          )}
          
          {/* State label */}
          <text
            x={data.coordinates.x}
            y={data.coordinates.y - 20}
            textAnchor="middle"
            className={`text-xs font-semibold pointer-events-none transition-all duration-300 ${
              hoveredState === stateName ? 'text-lg' : 'text-xs'
            } ${data.status === 'active' ? 'fill-gray-700' : 'fill-orange-600'}`}
          >
            {stateName}
          </text>
          
          {/* Coming soon indicator */}
          {data.status === 'upcoming' && (
            <text
              x={data.coordinates.x}
              y={data.coordinates.y + 25}
              textAnchor="middle"
              className="text-xs fill-orange-600 font-medium pointer-events-none"
            >
              Coming Soon
            </text>
          )}
        </g>
      ))}
    </svg>
  );

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
              Discover our nationwide presence across India. Click on any location to explore franchise 
              opportunities, success stories, and performance data in that region.
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

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Interactive Network Map
                </h3>
                <div className="relative">
                  <IndiaMapSVG />
                  
                  {/* Map Legend */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Legend</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">Active Network</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">Coming Soon</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">Selected</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  Click on any location to view detailed franchise information and success metrics
                </p>
              </div>
            </div>

            {/* Details Panel */}
            <div className="lg:col-span-1">
              {selectedState ? (
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedState}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-orange-500 mx-auto"></div>
                  </div>

                  {/* Status Badge */}
                  <div className="text-center mb-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      networkData[selectedState].status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {networkData[selectedState].status === 'active' ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Active Network
                        </>
                      ) : (
                        <>
                          <Target className="w-4 h-4 mr-1" />
                          Coming Soon
                        </>
                      )}
                    </span>
                  </div>

                  {/* Statistics */}
                  {networkData[selectedState].status === 'active' ? (
                    <div className="space-y-4 mb-6">
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-700">Active Stores</span>
                          <span className="text-2xl font-bold text-green-600">
                            {networkData[selectedState].stores}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Across {networkData[selectedState].districts} districts
                        </div>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-700">Partners</span>
                          <span className="text-2xl font-bold text-orange-600">
                            {networkData[selectedState].partners}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Average ROI: {networkData[selectedState].avgROI}
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-700">Revenue</span>
                          <span className="text-2xl font-bold text-blue-600">
                            {networkData[selectedState].revenue}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Growth: {networkData[selectedState].growth}
                        </div>
                      </div>

                      {/* Top Performer */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Top Performer</h4>
                        <p className="text-sm text-gray-600">{networkData[selectedState].topPerformer}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Established: {networkData[selectedState].established}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 mb-6">
                      <div className="bg-yellow-50 rounded-lg p-4 text-center">
                        <Target className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-gray-900 mb-2">Opening Soon!</h4>
                        <p className="text-sm text-gray-600">
                          We&apos;re expanding to {selectedState}. Be among the first franchise partners in this location.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Early Bird Benefits</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 20% discount on franchise fee</li>
                          <li>• Prime location assistance</li>
                          <li>• Extended training support</li>
                          <li>• Marketing launch support</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Contact Info */}
                  <div className="border-t pt-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {networkData[selectedState].contact.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {networkData[selectedState].contact.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-green-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-orange-600 transition-colors duration-300 transform hover:scale-105">
                      Apply for {selectedState}
                    </button>
                    <button
                      onClick={() => setSelectedState(null)}
                      className="w-full border-2 border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 shadow-xl text-center border border-gray-100">
                  <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Explore Our Network
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Click on any location on the map to view detailed franchise information, success metrics, and opportunities.
                  </p>
                  
                  <div className="text-left space-y-4 bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900">Network Highlights:</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>{totalStats.totalStores} stores operational</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>{totalStats.totalPartners} successful partners</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Present in {totalStats.totalStates} major states</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Average ROI of {totalStats.avgROI}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Expand Our Network Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Be part of India&apos;s fastest-growing franchise network. Prime locations are still available in key markets.
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
