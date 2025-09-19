// app/about-us/page.js
"use client";

import React, { useState } from 'react';
import { Eye, Target, Heart, Award, Users, TrendingUp, Calendar, MapPin, Mail, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AboutUsPage = () => {
  const [expandedTimeline, setExpandedTimeline] = useState(null);

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "We prioritize customer satisfaction above all, ensuring quality products at affordable prices for every household.",
      color: "text-red-500 bg-red-50"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "Maintaining highest standards in products, services, and franchise operations across all our stores.",
      color: "text-green-500 bg-green-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Empowerment",
      description: "Empowering entrepreneurs with tools, training, and support to build successful businesses and achieve financial independence.",
      color: "text-orange-500 bg-orange-50"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuously evolving our business model, technology, and processes to stay ahead in the competitive retail landscape.",
      color: "text-blue-500 bg-blue-50"
    }
  ];

  const journeyTimeline = [
    {
      year: "2019",
      title: "Foundation",
      description: "Gram Shree Mart was founded with a vision to revolutionize grocery retail in India. Started with the first store in Noida, focusing on quality and affordability.",
      achievements: ["First store opened in Noida", "Team of 10 dedicated professionals", "Partnership with 50+ local suppliers"]
    },
    {
      year: "2020",
      title: "Expansion Begins",
      description: "Despite challenges, we expanded to 5 cities with 25 stores. Developed our franchise model and established supply chain partnerships.",
      achievements: ["25 stores across 5 cities", "Franchise model launched", "1000+ product SKUs", "First government scheme partnership"]
    },
    {
      year: "2021",
      title: "Government Partnership",
      description: "Aligned with government initiatives including MUDRA, PMEGP, and startup India. Became MSME certified and started facilitating government loans.",
      achievements: ["MSME certification obtained", "MUDRA loan partnerships", "100 franchise partners", "₹50Cr revenue milestone"]
    },
    {
      year: "2022",
      title: "Rapid Growth",
      description: "Scaled to 150 stores across 12 states. Introduced training academy and digital marketing support for franchise partners.",
      achievements: ["150 stores operational", "Training academy established", "12 states coverage", "5000+ product range"]
    },
    {
      year: "2023",
      title: "Technology Integration",
      description: "Launched digital platform, mobile app, and POS systems. Enhanced supply chain efficiency and customer experience significantly.",
      achievements: ["Mobile app launched", "POS systems deployed", "Digital marketing suite", "250 active franchises"]
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Achieved 350+ stores across 18 states. Recognized as one of India's fastest-growing franchise networks with government backing.",
      achievements: ["350+ stores nationwide", "18 states presence", "Industry recognition awards", "₹200Cr+ revenue"]
    },
    {
      year: "2025",
      title: "Current & Future",
      description: "Operating 400+ stores across 22+ states. Expanding to tier-2 and tier-3 cities with government support programs.",
      achievements: ["400+ stores active", "22+ states covered", "500+ franchise partners", "₹300Cr+ projected revenue"]
    }
  ];

  const leadershipTeam = [
    {
      name: "Rajesh Sharma",
      position: "Founder & CEO",
      education: "MBA, IIM Lucknow",
      experience: "15+ years in Retail",
      email: "rajesh@gramshreemart.com",
      linkedin: "linkedin.com/in/rajeshsharma",
      photo: "/images/rajesh-sharma.jpg", // Placeholder
      description: "Visionary leader with extensive experience in retail operations and franchise development. Led the company from startup to 400+ stores nationwide.",
      achievements: ["Built 400+ store network", "Secured govt partnerships", "₹300Cr+ business scale"]
    },
    {
      name: "Priya Gupta",
      position: "COO & Co-Founder",
      education: "B.Tech, Supply Chain Management",
      experience: "12+ years in Operations",
      email: "priya@gramshreemart.com",
      linkedin: "linkedin.com/in/priyagupta",
      photo: "/images/priya-gupta.jpg", // Placeholder
      description: "Operations expert who streamlined our supply chain and franchise operations. Key architect of our training and support systems.",
      achievements: ["Streamlined operations", "Built training academy", "95% franchise satisfaction"]
    },
    {
      name: "Amit Kumar",
      position: "Head of Franchise Development",
      education: "MBA, Marketing & Strategy",
      experience: "10+ years in Business Development",
      email: "amit@gramshreemart.com",
      linkedin: "linkedin.com/in/amitkumar",
      photo: "/images/amit-kumar.jpg", // Placeholder
      description: "Franchise development specialist who built our partner network across 22+ states. Expert in government scheme facilitation and business expansion.",
      achievements: ["500+ franchise partners", "22 states expansion", "Govt scheme expertise"]
    },
    {
      name: "Sunita Reddy",
      position: "Head of Training & Support",
      education: "M.Com, Business Administration",
      experience: "8+ years in Training & Development",
      email: "sunita@gramshreemart.com",
      linkedin: "linkedin.com/in/sunitareddy",
      photo: "/images/sunita-reddy.jpg", // Placeholder
      description: "Training and support expert who developed our comprehensive franchise partner education programs and ongoing support systems.",
      achievements: ["Comprehensive training programs", "24/7 support system", "Partner success rate 92%"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Gram Shree Mart
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Empowering entrepreneurs across India with government-backed franchise opportunities, 
              quality products, and comprehensive support systems since 2019.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    { number: "400+", label: "Active Stores", icon: "https://cdn-icons-png.flaticon.com/128/14534/14534479.png" },
    { number: "22+", label: "States Covered", icon: "https://cdn-icons-png.flaticon.com/128/5864/5864839.png" },
    { number: "500+", label: "Franchise Partners", icon: "https://cdn-icons-png.flaticon.com/128/12791/12791998.png" },
    { number: "₹300Cr+", label: "Revenue Generated", icon: "https://cdn-icons-png.flaticon.com/128/5412/5412778.png" }
  ].map((stat, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
    >
      <div className="mb-2 flex justify-center">
        <img src={stat.icon} alt={stat.label} className="w-10 h-10" />
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
      <div className="text-sm text-gray-600">{stat.label}</div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white">
              <Target className="w-12 h-12 text-green-200 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed text-green-100">
                To democratize entrepreneurship in India by providing accessible, government-supported franchise 
                opportunities that empower individuals to build sustainable businesses while serving their communities 
                with quality products at affordable prices.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
              <Eye className="w-12 h-12 text-orange-200 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed text-orange-100">
                To become India's most trusted and accessible supermarket franchise network, creating 10,000+ 
                successful entrepreneurs by 2030 while revolutionizing grocery retail through technology, 
                government partnerships, and community-focused growth.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision and action across our organization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gramshree's Journey */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a single store vision to India's fastest-growing franchise network - discover our growth story
            </p>
          </div>

          <div className="space-y-6">
            {journeyTimeline.map((milestone, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedTimeline(expandedTimeline === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-orange-500">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedTimeline === index ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedTimeline === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Alignment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4 mr-2" />
              Government Alignment
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Aligned with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Government Initiatives
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "MSME Registration",
                description: "Certified under Ministry of Micro, Small & Medium Enterprises with all compliance requirements met.",
                benefits: ["Tax benefits", "Priority lending", "Government tenders", "Subsidy eligibility"]
              },
              {
                title: "MUDRA Scheme Partnership",
                description: "Official partner for MUDRA loan facilitation, helping entrepreneurs access collateral-free funding.",
                benefits: ["Up to ₹10L loans", "7-12% interest rates", "Minimal documentation", "Quick approval"]
              },
              {
                title: "Startup India Initiative",
                description: "Recognized startup supporting entrepreneurship development and job creation across India.",
                benefits: ["Tax exemptions", "Fast-track approvals", "IPR support", "Networking opportunities"]
              }
            ].map((scheme, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{scheme.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{scheme.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {scheme.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals driving Gram Shree Mart's mission across India
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-200 to-orange-200 rounded-2xl flex items-center justify-center overflow-hidden">
                        {/* Placeholder for photo */}
                        <span className="text-2xl font-bold text-gray-600">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                      <p className="text-orange-600 font-semibold mb-2">{leader.position}</p>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <p><strong>Education:</strong> {leader.education}</p>
                        <p><strong>Experience:</strong> {leader.experience}</p>
                      </div>
                      
                      {/* Contact */}
                      <div className="flex items-center space-x-4 mb-4">
                        <a href={`mailto:${leader.email}`} className="text-green-600 hover:text-green-700">
                          <Mail className="w-4 h-4" />
                        </a>
                        <a href={`https://${leader.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">{leader.description}</p>

                  {/* Achievements */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.achievements.map((achievement, idx) => (
                        <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
