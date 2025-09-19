// app/resources/page.js
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BookOpen,
  Video,
  Download,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Languages,
  Calendar,
  Newspaper,
  Search,
  Filter,
  Play,
  Clock,
  Eye,
  Globe,
  Award,
  TrendingUp,
  Users,
  ArrowRight
} from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('training');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' }
  ];

  const trainingVideos = [
    {
      id: 1,
      title: 'Franchise Business Model Overview',
      description: 'Complete introduction to Gramshree franchise model, investment requirements, and profit potential.',
      duration: '15:30',
      views: '12.5K',
      category: 'Getting Started',
      language: 'English',
      thumbnail: '/images/video-thumbnail-1.jpg',
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Store Operations and Management',
      description: 'Daily operations, inventory management, customer service, and staff coordination training.',
      duration: '22:45',
      views: '8.9K',
      category: 'Operations',
      language: 'English',
      thumbnail: '/images/video-thumbnail-2.jpg',
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'Government Scheme Application Process',
      description: 'Step-by-step guide to apply for MUDRA, PMEGP, and other government schemes for franchise funding.',
      duration: '18:20',
      views: '15.2K',
      category: 'Government Schemes',
      language: 'English',
      thumbnail: '/images/video-thumbnail-3.jpg',
      level: 'Beginner'
    },
    {
      id: 4,
      title: 'Digital Marketing for Franchise Stores',
      description: 'Social media marketing, local advertising, and customer acquisition strategies for your store.',
      duration: '25:10',
      views: '6.7K',
      category: 'Marketing',
      language: 'English',
      thumbnail: '/images/video-thumbnail-4.jpg',
      level: 'Advanced'
    },
    {
      id: 5,
      title: 'Financial Management and Accounting',
      description: 'Bookkeeping, profit tracking, tax compliance, and financial planning for franchise businesses.',
      duration: '20:35',
      views: '9.3K',
      category: 'Finance',
      language: 'English',
      thumbnail: '/images/video-thumbnail-5.jpg',
      level: 'Intermediate'
    },
    {
      id: 6,
      title: 'फ्रैंचाइज़ी व्यवसाय शुरू करने की गाइड',
      description: 'हिंदी में फ्रैंचाइज़ी व्यवसाय शुरू करने की संपूर्ण जानकारी और सरकारी योजनाओं का लाभ।',
      duration: '19:45',
      views: '11.8K',
      category: 'Getting Started',
      language: 'Hindi',
      thumbnail: '/images/video-thumbnail-6.jpg',
      level: 'Beginner'
    }
  ];

  const guides = [
    {
      id: 1,
      title: 'Complete Franchise Setup Guide',
      description: 'End-to-end guide covering location selection, store setup, inventory planning, and launch strategies.',
      pages: 45,
      downloads: '2.1K',
      language: 'English',
      type: 'PDF',
      size: '3.2 MB',
      category: 'Setup'
    },
    {
      id: 2,
      title: 'Government Schemes Handbook',
      description: 'Comprehensive guide to all available government schemes, eligibility criteria, and application procedures.',
      pages: 28,
      downloads: '3.5K',
      language: 'English',
      type: 'PDF',
      size: '2.8 MB',
      category: 'Government Schemes'
    },
    {
      id: 3,
      title: 'Operations Manual',
      description: 'Daily operations checklist, staff management, customer service protocols, and troubleshooting guide.',
      pages: 67,
      downloads: '1.8K',
      language: 'English',
      type: 'PDF',
      size: '4.1 MB',
      category: 'Operations'
    },
    {
      id: 4,
      title: 'Marketing and Promotion Toolkit',
      description: 'Ready-to-use marketing materials, promotional strategies, and customer engagement techniques.',
      pages: 34,
      downloads: '2.9K',
      language: 'English',
      type: 'PDF',
      size: '5.6 MB',
      category: 'Marketing'
    },
    {
      id: 5,
      title: 'फ्रैंचाइज़ी संचालन मार्गदर्शिका',
      description: 'हिंदी में फ्रैंचाइज़ी स्टोर के दैनिक संचालन, स्टाफ प्रबंधन और ग्राहक सेवा की संपूर्ण जानकारी।',
      pages: 52,
      downloads: '1.6K',
      language: 'Hindi',
      type: 'PDF',
      size: '3.8 MB',
      category: 'Operations'
    },
    {
      id: 6,
      title: 'ব্যবসা পরিচালনা গাইড',
      description: 'বাংলায় ফ্র্যাঞ্চাইজি ব্যবসা পরিচালনা, স্টাফ ব্যবস্থাপনা এবং গ্রাহক সেবার সম্পূর্ণ নির্দেশিকা।',
      pages: 41,
      downloads: '890',
      language: 'Bengali',
      type: 'PDF',
      size: '3.1 MB',
      category: 'Operations'
    }
  ];

  const brochures = [
    {
      id: 1,
      title: 'Gramshree Franchise Overview',
      description: 'Complete franchise opportunity overview with investment details and profit projections.',
      language: 'English',
      type: 'Brochure',
      size: '1.2 MB',
      downloads: '4.2K'
    },
    {
      id: 2,
      title: 'Government Scheme Benefits',
      description: 'Detailed brochure on all government schemes available for franchise partners.',
      language: 'English',
      type: 'Brochure',
      size: '0.9 MB',
      downloads: '3.8K'
    },
    {
      id: 3,
      title: 'ग्रामश्री फ्रैंचाइज़ी अवसर',
      description: 'हिंदी में फ्रैंचाइज़ी के अवसर, निवेश की जानकारी और सरकारी योजनाओं का विवरण।',
      language: 'Hindi',
      type: 'Brochure',
      size: '1.1 MB',
      downloads: '2.9K'
    },
    {
      id: 4,
      title: 'ফ্র্যাঞ্চাইজি সুযোগ বিবরণী',
      description: 'বাংলায় ফ্র্যাঞ্চাইজি সুযোগ, বিনিয়োগের তথ্য এবং সরকারি প্রকল্পের বিস্তারিত বিবরণ।',
      language: 'Bengali',
      type: 'Brochure',
      size: '1.0 MB',
      downloads: '1.5K'
    }
  ];

  const faqs = [
    {
      id: 1,
      category: 'Franchise Process',
      question: 'What is the minimum investment required for a Gramshree franchise?',
      answer: 'The minimum investment varies by store format: Mini Mart (₹8-15 lakhs), Super Mart (₹15-25 lakhs), and Hyper Mart (₹25-50 lakhs). This includes franchise fee, store setup, initial inventory, and working capital.'
    },
    {
      id: 2,
      category: 'Franchise Process',
      question: 'How long does it take to set up a franchise store?',
      answer: 'The complete process from application approval to store launch typically takes 45-60 days. This includes location finalization, store setup, inventory procurement, staff hiring, and training completion.'
    },
    {
      id: 3,
      category: 'Government Loans',
      question: 'What government schemes are available for franchise funding?',
      answer: 'We facilitate MUDRA loans (up to ₹10 lakhs), PMEGP subsidies (25-35%), MSME credit guarantee schemes, and state-specific entrepreneurship development programs. Interest rates range from 7-12% per annum.'
    },
    {
      id: 4,
      category: 'Government Loans',
      question: 'What documents are required for loan application?',
      answer: 'Required documents include Aadhaar, PAN, bank statements (6 months), ITR (3 years), project report, business plan, property documents, and franchise agreement. Our team assists with documentation.'
    },
    {
      id: 5,
      category: 'Training',
      question: 'What training is provided to franchise partners?',
      answer: 'We provide comprehensive 15-day training covering business operations, inventory management, staff handling, customer service, financial management, and marketing strategies. Online refresher courses are also available.'
    },
    {
      id: 6,
      category: 'Training',
      question: 'Is ongoing support provided after store launch?',
      answer: 'Yes, we provide continuous support including regular store visits, performance analysis, marketing assistance, new product training, technology updates, and 24/7 helpline support.'
    },
    {
      id: 7,
      category: 'Franchise Process',
      question: 'What are the eligibility criteria for franchise partnership?',
      answer: 'Applicants should be 21-60 years old, have minimum 12th grade education, business experience preferred, financial capability for investment, and commitment to full-time business involvement.'
    },
    {
      id: 8,
      category: 'Government Loans',
      question: 'How long does loan approval take?',
      answer: 'Loan approval typically takes 15-30 working days depending on the scheme and bank. MUDRA loans are generally faster (15-20 days), while PMEGP may take 30-45 days due to subsidy processing.'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'MUDRA Loan Interest Rates Reduced: New Opportunities for Franchise Partners',
      excerpt: 'Government announces 0.5% reduction in MUDRA loan interest rates, making franchise investments more affordable for aspiring entrepreneurs.',
      date: '2024-09-15',
      readTime: '5 min read',
      category: 'Government Schemes',
      author: 'Policy Team',
      image: '/images/blog-1.jpg'
    },
    {
      id: 2,
      title: 'PMEGP Subsidy Guidelines Updated: Higher Benefits for SC/ST/Women Entrepreneurs',
      excerpt: 'Latest updates to PMEGP scheme offer increased subsidies and simplified application process for priority category applicants.',
      date: '2024-09-12',
      readTime: '7 min read',
      category: 'Government Schemes',
      author: 'Government Relations',
      image: '/images/blog-2.jpg'
    },
    {
      id: 3,
      title: 'Digital India Initiative: New Tech Grants for Small Businesses',
      excerpt: 'Explore new technology adoption grants under Digital India program, helping franchise partners modernize their operations.',
      date: '2024-09-08',
      readTime: '6 min read',
      category: 'Technology',
      author: 'Tech Team',
      image: '/images/blog-3.jpg'
    },
    {
      id: 4,
      title: 'GST Compliance Made Easy: New Simplified Procedures for SMEs',
      excerpt: 'Government introduces simplified GST filing procedures and reduced compliance burden for small and medium enterprises.',
      date: '2024-09-05',
      readTime: '8 min read',
      category: 'Policy Updates',
      author: 'Compliance Team',
      image: '/images/blog-4.jpg'
    },
    {
      id: 5,
      title: 'State-wise Entrepreneurship Schemes: New Opportunities Across India',
      excerpt: 'Comprehensive overview of new state-specific entrepreneurship development schemes launched across different states.',
      date: '2024-09-01',
      readTime: '10 min read',
      category: 'State Schemes',
      author: 'Research Team',
      image: '/images/blog-5.jpg'
    },
    {
      id: 6,
      title: 'Success Story: How Government Schemes Helped Launch 100 Stores in 6 Months',
      excerpt: 'Detailed case study of rapid expansion enabled by strategic use of multiple government funding schemes and support programs.',
      date: '2024-08-28',
      readTime: '12 min read',
      category: 'Success Stories',
      author: 'Business Development',
      image: '/images/blog-6.jpg'
    }
  ];

  const filteredContent = (content, type) => {
    return content.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLanguage = selectedLanguage === 'All' || 
        selectedLanguage === 'English' || 
        (item.language && item.language === selectedLanguage);
      
      return matchesSearch && matchesLanguage;
    });
  };

  const tabOptions = [
    { id: 'training', label: 'Training Videos', icon: <Video className="w-5 h-5" />, count: trainingVideos.length },
    { id: 'guides', label: 'Guides & Manuals', icon: <BookOpen className="w-5 h-5" />, count: guides.length },
    { id: 'brochures', label: 'Brochures', icon: <FileText className="w-5 h-5" />, count: brochures.length },
    { id: 'faqs', label: 'FAQs', icon: <HelpCircle className="w-5 h-5" />, count: faqs.length },
    { id: 'blog', label: 'Blog & News', icon: <Newspaper className="w-5 h-5" />, count: blogPosts.length }
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
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Learning Resources
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Resources &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Training Center
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Access comprehensive training materials, guides, FAQs, and latest updates on government schemes. 
              Available in multiple languages to support franchisees across India.
            </p>
          </div>

          {/* Search and Language Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-green-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              
              {/* Language Filter */}
              <div className="relative">
                <Languages className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-green-500 focus:outline-none transition-colors duration-300 bg-white"
                >
                  <option value="English">All Languages</option>
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.name}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Video, number: "25+", label: "Training Videos", color: "text-green-600" },
              { icon: FileText, number: "40+", label: "Guides & Manuals", color: "text-blue-600" },
              { icon: Languages, number: "8", label: "Languages", color: "text-orange-600" },
              { icon: Newspaper, number: "50+", label: "Blog Articles", color: "text-purple-600" }
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
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Training Videos */}
          {activeTab === 'training' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Videos</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive video training library covering all aspects of franchise business operations
                </p>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredContent(trainingVideos, 'video').map((video) => (
                  <div key={video.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                    {/* Video Thumbnail */}
                    <div className="relative bg-gradient-to-br from-green-100 to-orange-100 aspect-video">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-green-600 ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.language}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          {video.category}
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          {video.level}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{video.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {video.views}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {video.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guides & Manuals */}
          {activeTab === 'guides' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Guides & Manuals</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Detailed guides and manuals to help you succeed in your franchise journey
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {filteredContent(guides, 'guide').map((guide) => (
                  <div key={guide.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div>{guide.pages} pages</div>
                        <div>{guide.size}</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                          {guide.category}
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          {guide.language}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{guide.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <Download className="w-4 h-4 inline mr-1" />
                        {guide.downloads} downloads
                      </div>
                      <button className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-orange-600 transition-colors duration-300 inline-flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Brochures */}
          {activeTab === 'brochures' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Multi-language Brochures</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Professional brochures available in multiple Indian languages
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContent(brochures, 'brochure').map((brochure) => (
                  <div key={brochure.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-orange-100 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-purple-600" />
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {brochure.size}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                        {brochure.language}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{brochure.title}</h3>
                      <p className="text-gray-600 text-sm">{brochure.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        {brochure.downloads} downloads
                      </div>
                      <button className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-orange-600 transition-colors duration-300 inline-flex items-center text-sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {activeTab === 'faqs' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about franchise process, loans, and training
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-gray-100">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-300"
                    >
                      <div className="flex-1 pr-4">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      </div>
                      {expandedFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    
                    {expandedFAQ === faq.id && (
                      <div className="px-6 pb-6">
                        <div className="border-t pt-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog & News */}
          {activeTab === 'blog' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog & News Updates</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Latest updates on government schemes, policy changes, and business insights
                </p>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                    {/* Featured Image */}
                    <div className="h-48 bg-gradient-to-br from-green-100 to-orange-100 relative">
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Newspaper className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">By {post.author}</span>
                        <Link href={`/blog/${post.id}`}>
                          <button className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Additional Support?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our expert team is available to provide personalized guidance and answer your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center">
                Contact Support Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
            <Link href="/govt-scheme">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all transform hover:scale-105">
                Apply for Franchise
              </button>
            </Link>
          </div>
          
          <div className="mt-8 text-white/80 text-sm">
            <p>📞 24/7 Support • 💬 Live Chat • 📧 Email Support</p>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ResourcesPage;
