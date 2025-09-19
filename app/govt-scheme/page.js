// app/govt-scheme/page.js
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Award, 
  CheckCircle, 
  Download, 
  FileText, 
  Users, 
  Banknote, 
  Clock, 
  ArrowRight, 
  Phone, 
  Mail, 
  AlertCircle,
  Shield,
  Target,
  Upload,
  User,
  Building,
  MapPin,
  Calendar,
  IndianRupee,
  Store 
} from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const FranchiseApplicationPage = () => {
  const [activeTab, setActiveTab] = useState('eligibility');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const eligibilityCriteria = [
    {
      category: 'Personal Requirements',
      icon: <User className="w-6 h-6" />,
      requirements: [
        'Indian citizen aged between 21-60 years',
        'Minimum educational qualification: 12th pass',
        'Previous business or management experience preferred',
        'Should be able to dedicate full time to the business',
        'Good communication and interpersonal skills',
        'Clean financial and criminal background'
      ]
    },
    {
      category: 'Financial Requirements',
      icon: <IndianRupee className="w-6 h-6" />,
      requirements: [
        'Liquid capital of ₹8-25 lakhs depending on store format',
        'Total investment capacity of ₹15-50 lakhs',
        'Ability to arrange additional working capital',
        'Good credit score (above 650)',
        'No existing loan defaults',
        'Bank statements for last 6 months'
      ]
    },
    {
      category: 'Location Requirements',
      icon: <Building className="w-6 h-6" />,
      requirements: [
        'Prime location in busy commercial area',
        'Ground floor space with good visibility',
        'Area: 1000-5000 sq ft based on format',
        'Proper parking facilities for customers',
        'Easy accessibility by public transport',
        'No competing supermarkets within 500m radius'
      ]
    },
    {
      category: 'Legal Requirements',
      icon: <Shield className="w-6 h-6" />,
      requirements: [
        'Valid trade license and GST registration',
        'FSSAI license for food products',
        'Fire safety certificate',
        'Municipal corporation approvals',
        'Electricity and water connections',
        'Insurance coverage for business premises'
      ]
    }
  ];

  const requiredDocuments = [
    {
      category: 'Personal Documents',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      documents: [
        'Aadhaar Card (Original + Photocopy)',
        'PAN Card (Original + Photocopy)',
        'Passport size photographs (6 copies)',
        'Educational qualification certificates',
        'Resume with work experience details',
        'Character certificate from local authority'
      ]
    },
    {
      category: 'Financial Documents',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      documents: [
        'Bank statements for last 12 months',
        'Income Tax Returns for last 3 years',
        'Audited financial statements (if applicable)',
        'Property ownership documents',
        'Investment proof and source of funds',
        'Credit bureau report (CIBIL score)'
      ]
    },
    {
      category: 'Business Documents',
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      documents: [
        'Business plan and project report',
        'Proposed location details and photos',
        'Rent agreement or property ownership deed',
        'Local market analysis report',
        'Competitor analysis in the area',
        'Expected revenue projections'
      ]
    },
    {
      category: 'Legal Documents',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
      documents: [
        'Trade license application form',
        'GST registration certificate',
        'FSSAI application documents',
        'Municipal corporation NOC',
        'Fire safety compliance certificate',
        'Partnership deed (if applicable)'
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Initial Inquiry',
      description: 'Submit your franchise application form with basic details and preferred location information.',
      duration: '1 Day',
      icon: <FileText className="w-6 h-6" />,
      status: 'start'
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Our team reviews your documents and conducts background verification process.',
      duration: '3-5 Days',
      icon: <Shield className="w-6 h-6" />,
      status: 'process'
    },
    {
      step: 3,
      title: 'Location Assessment',
      description: 'Site visit and location feasibility study by our business development team.',
      duration: '2-3 Days',
      icon: <MapPin className="w-6 h-6" />,
      status: 'process'
    },
    {
      step: 4,
      title: 'Financial Evaluation',
      description: 'Assessment of financial capability and investment arrangements discussion.',
      duration: '2-4 Days',
      icon: <Banknote className="w-6 h-6" />,
      status: 'process'
    },
    {
      step: 5,
      title: 'Agreement Signing',
      description: 'Franchise agreement execution and initial fee payment processing.',
      duration: '1-2 Days',
      icon: <Award className="w-6 h-6" />,
      status: 'process'
    },
    {
      step: 6,
      title: 'Training Program',
      description: 'Comprehensive 15-day training on operations, inventory, and customer service.',
      duration: '15 Days',
      icon: <Users className="w-6 h-6" />,
      status: 'process'
    },
    {
      step: 7,
      title: 'Store Setup',
      description: 'Complete store setup with branding, inventory, and system installation.',
      duration: '20-25 Days',
      icon: <Building className="w-6 h-6" />,
      status: 'process'
    },
    {
      step: 8,
      title: 'Grand Opening',
      description: 'Store launch with marketing support and ongoing operational assistance.',
      duration: '1 Day',
      icon: <Target className="w-6 h-6" />,
      status: 'end'
    }
  ];

  const downloadableGuides = [
    {
      title: 'Franchise Application Form',
      description: 'Complete application form with detailed instructions for franchise inquiry.',
      type: 'PDF Form',
      size: '2.1 MB',
      icon: <FileText className="w-5 h-5" />,
      color: 'text-green-600'
    },
    {
      title: 'Investment Calculator',
      description: 'Excel tool to calculate total investment required for different store formats.',
      type: 'Excel File',
      size: '1.8 MB',
      icon: <Calendar className="w-5 h-5" />,
      color: 'text-blue-600'
    },
    {
      title: 'Location Selection Guide',
      description: 'Comprehensive guide for selecting the perfect location for your store.',
      type: 'PDF Guide',
      size: '3.2 MB',
      icon: <MapPin className="w-5 h-5" />,
      color: 'text-orange-600'
    },
    {
      title: 'Document Checklist',
      description: 'Complete checklist of all required documents with submission guidelines.',
      type: 'PDF Checklist',
      size: '0.9 MB',
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'text-purple-600'
    },
    {
      title: 'Business Plan Template',
      description: 'Professional template to create comprehensive business plan for franchise.',
      type: 'Word Document',
      size: '2.5 MB',
      icon: <Target className="w-5 h-5" />,
      color: 'text-green-600'
    },
    {
      title: 'Legal Compliance Guide',
      description: 'Step-by-step guide for obtaining all necessary licenses and permits.',
      type: 'PDF Guide',
      size: '2.8 MB',
      icon: <Shield className="w-5 h-5" />,
      color: 'text-blue-600'
    }
  ];

  const tabOptions = [
    { id: 'eligibility', label: 'Eligibility Criteria', icon: <User className="w-5 h-5" /> },
    { id: 'documents', label: 'Required Documents', icon: <FileText className="w-5 h-5" /> },
    { id: 'process', label: 'Application Process', icon: <Clock className="w-5 h-5" /> },
    { id: 'downloads', label: 'Downloadable Forms', icon: <Download className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4 mr-2" />
              Franchise Application Process
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Franchise Network
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete guide for franchise application including eligibility criteria, required documents, 
              and step-by-step process to become a Gramshree partner.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Store, number: "400+", label: "Active Franchises", color: "text-green-600" },
              { icon: Users, number: "92%", label: "Success Rate", color: "text-blue-600" },
              { icon: Clock, number: "45-60", label: "Days to Launch", color: "text-orange-600" },
              { icon: Award, number: "24/7", label: "Support Available", color: "text-purple-600" }
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

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Eligibility Criteria */}
          {activeTab === 'eligibility' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Ensure you meet all the requirements before applying for a Gramshree franchise
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-orange-500 rounded-xl flex items-center justify-center text-white mr-4">
                        {criteria.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{criteria.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {criteria.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Required Documents */}
          {activeTab === 'documents' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Required Documents</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Prepare these documents for a smooth and quick application process
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {requiredDocuments.map((docCategory, index) => (
                  <div 
                    key={index} 
                    className={`${docCategory.color} rounded-2xl border-2 p-8 hover:shadow-lg transition-shadow duration-300`}
                  >
                    <div className="flex items-center mb-6">
                      <FileText className={`w-8 h-8 ${docCategory.iconColor} mr-3`} />
                      <h3 className="text-xl font-bold text-gray-900">{docCategory.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {docCategory.documents.map((document, idx) => (
                        <li key={idx} className="flex items-start">
                          <AlertCircle className={`w-5 h-5 ${docCategory.iconColor} mt-0.5 mr-3 flex-shrink-0`} />
                          <span className="text-gray-700">{document}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mt-8">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h4>
                    <p className="text-yellow-700">
                      All documents should be recent (not older than 6 months) and properly attested. 
                      Incomplete documentation may delay the application process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Application Process */}
          {activeTab === 'process' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Step-by-step guide from application to store launch
                </p>
              </div>

              <div className="relative">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="relative flex items-center mb-8">
                    {/* Connector Line */}
                    {index < applicationSteps.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-green-500 to-orange-500 z-10"></div>
                    )}
                    
                    <div className="flex items-center w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                      {/* Step Number & Icon */}
                      <div className="relative flex-shrink-0 mr-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 shadow-md">
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Step Details */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Total Timeline</h3>
                  <p className="text-green-700">
                    Complete process from application to store launch: <strong>45-60 days</strong>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Downloadable Forms */}
          {activeTab === 'downloads' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Downloadable Resources</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Download essential forms, guides, and templates for your franchise application
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {downloadableGuides.map((guide, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center ${guide.color}`}>
                        {guide.icon}
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {guide.size}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{guide.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">{guide.type}</span>
                      <button className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-orange-600 transition-colors duration-300 inline-flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="text-center">
                  <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Need Help with Documents?</h3>
                  <p className="text-blue-700 mb-4">
                    Our franchise support team is available to help you with document preparation and application process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="flex items-center space-x-2 text-blue-700">
                      <Phone className="w-5 h-5" />
                      <span>+91 94038 91519</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-700">
                      <Mail className="w-5 h-5" />
                      <span>franchise@gramshreemart.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Franchise Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join our successful franchise network and build a profitable business with complete support and guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-now">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all transform hover:scale-105">
                Schedule Consultation
              </button>
            </Link>
          </div>
          
          <div className="mt-8 text-white/80 text-sm">
            <p>✓ Expert Guidance • ✓ Complete Support • ✓ Proven Success Model</p>
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

export default FranchiseApplicationPage;
