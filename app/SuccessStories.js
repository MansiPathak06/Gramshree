"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Star,
  Quote,
  TrendingUp,
  Users,
  Store,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";

// Move data outside component to prevent re-renders
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Delhi",
    businessName: "Gram Shree Mart - Lajpat Nagar",
    photo: "/images/rajesh-kumar.jpg",
    rating: 5,
    quote:
      "Starting my Gram Shree franchise was the best decision I ever made. Within 18 months, I recovered my entire investment and now I'm earning ₹2.5 lakhs monthly profit. The support team guided me through every step!",
    joinedYear: "2023",
    monthlyRevenue: "₹8.5 Lakhs",
    profitMargin: "30%",
    background: "Former IT Professional",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    businessName: "Gram Shree Mart - Andheri West",
    photo: "/images/priya-sharma.jpg",
    rating: 5,
    quote:
      "As a woman entrepreneur, I was initially hesitant about starting a business. But Gram Shree's comprehensive training and ongoing support made everything smooth. Today, I'm running two successful stores!",
    joinedYear: "2022",
    monthlyRevenue: "₹12 Lakhs",
    profitMargin: "35%",
    background: "Homemaker turned Entrepreneur",
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ahmedabad",
    businessName: "Gram Shree Mart - Satellite",
    photo: "/images/amit-patel.jpg",
    rating: 5,
    quote:
      "The training program was excellent and the business model is proven. I started with the Mini Mart format and within 2 years expanded to Super Mart. The ROI is outstanding!",
    joinedYear: "2021",
    monthlyRevenue: "₹15 Lakhs",
    profitMargin: "32%",
    background: "Small Business Owner",
  },
  {
    id: 4,
    name: "Sunita Reddy",
    location: "Bangalore",
    businessName: "Gram Shree Mart - Koramangala",
    photo: "/images/sunita-reddy.jpg",
    rating: 5,
    quote:
      "The government scheme support helped me get a loan easily. Gram Shree's tie-ups with MUDRA made the financing process hassle-free. Now I'm planning my second outlet!",
    joinedYear: "2023",
    monthlyRevenue: "₹10 Lakhs",
    profitMargin: "28%",
    background: "First-time Entrepreneur",
  },
];

const CASE_STUDIES_DATA = [
  {
    id: 1,
    title: "From Zero to Hero: Rajesh's Journey",
    entrepreneur: "Rajesh Kumar",
    location: "Delhi",
    investment: "₹8 Lakhs",
    timeline: "18 Months",
    results: {
      monthlyRevenue: "₹8.5L",
      monthlyProfit: "₹2.5L",
      roi: "280%",
      growth: "+150%",
    },
    story:
      "Rajesh, a former IT professional, invested ₹8 lakhs in 2023. With Gram Shree's proven system and local market insights, he achieved break-even in just 8 months. His store now serves 500+ customers daily.",
    keyFactors: [
      "Strategic location selection by Gram Shree team",
      "Comprehensive 30-day training program",
      "Strong supplier network ensuring 15% cost savings",
      "Digital marketing support increasing footfall by 40%",
    ],
  },
  {
    id: 2,
    title: "Scaling Success: Priya's Multi-Store Empire",
    entrepreneur: "Priya Sharma",
    location: "Mumbai",
    investment: "₹12 Lakhs",
    timeline: "24 Months",
    results: {
      monthlyRevenue: "₹24L",
      monthlyProfit: "₹8L",
      roi: "320%",
      growth: "+200%",
    },
    story:
      "Priya started with one store and expanded to two locations within 24 months. Her success demonstrates the scalability of Gram Shree's business model with systematic expansion strategies.",
    keyFactors: [
      "Multi-location expansion support",
      "Advanced inventory management systems",
      "Staff training and management programs",
      "Cross-promotional marketing strategies",
    ],
  },
  {
    id: 3,
    title: "Government Support Success: Sunita's Story",
    entrepreneur: "Sunita Reddy",
    location: "Bangalore",
    investment: "₹6 Lakhs",
    timeline: "12 Months",
    results: {
      monthlyRevenue: "₹10L",
      monthlyProfit: "₹2.8L",
      roi: "250%",
      growth: "+180%",
    },
    story:
      "Sunita leveraged government schemes through Gram Shree's assistance, getting 25% subsidy on her investment. Her success shows how policy support can accelerate entrepreneurial growth.",
    keyFactors: [
      "MUDRA loan facilitation with 7% interest rate",
      "25% government subsidy on project cost",
      "Skill development program certification",
      "Priority supplier credit terms",
    ],
  },
];

const SuccessStories = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const testimonials = useMemo(() => TESTIMONIALS_DATA, []);
  const caseStudies = useMemo(() => CASE_STUDIES_DATA, []);

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  const handleTestimonialClick = useCallback((index) => {
    setActiveTestimonial(index);
  }, []);

  const handleCaseStudyToggle = useCallback((index) => {
    setActiveCaseStudy((prev) => (prev === index ? null : index));
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Stories of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
              Entrepreneurial Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how our franchise partners transformed their lives and
            built thriving businesses with Gram Shree Mart
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute top-6 left-6 text-green-500 opacity-20">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Photo */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-200 to-orange-200 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-600">
                          {currentTestimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg">
                      <Store className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-3">
                    {Array.from({ length: currentTestimonial.rating }, (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Business Stats */}
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 px-3 py-1 rounded-full">
                      <span className="font-semibold text-green-700">
                        Revenue:{" "}
                      </span>
                      <span className="text-green-600">
                        {currentTestimonial.monthlyRevenue}/month
                      </span>
                    </div>
                    <div className="bg-orange-50 px-3 py-1 rounded-full">
                      <span className="font-semibold text-orange-700">
                        Profit:{" "}
                      </span>
                      <span className="text-orange-600">
                        {currentTestimonial.profitMargin}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quote & Details */}
                <div className="lg:col-span-2 space-y-6">
                  <blockquote className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-orange-600 font-semibold">
                      {currentTestimonial.businessName}
                    </p>
                    <p className="text-gray-600">
                      {currentTestimonial.location} •{" "}
                      {currentTestimonial.background}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Joined in {currentTestimonial.joinedYear}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                type="button"
                onClick={prevTestimonial}
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                type="button"
                onClick={nextTestimonial}
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleTestimonialClick(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-gradient-to-r from-green-500 to-orange-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Detailed Case Studies
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 ${
                  activeCaseStudy === index ? "ring-2 ring-green-500" : ""
                }`}
              >
                {/* Header */}
                <div className="bg-green-800 p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">{caseStudy.title}</h4>
                  <p className="text-green-100">
                    {caseStudy.entrepreneur} • {caseStudy.location}
                  </p>
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      Investment: {caseStudy.investment}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      Timeline: {caseStudy.timeline}
                    </span>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-green-600">
                        {caseStudy.results.monthlyRevenue}
                      </div>
                      <div className="text-xs text-gray-600">
                        Monthly Revenue
                      </div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-orange-600">
                        {caseStudy.results.monthlyProfit}
                      </div>
                      <div className="text-xs text-gray-600">
                        Monthly Profit
                      </div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Award className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-blue-600">
                        {caseStudy.results.roi}
                      </div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <Store className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-purple-600">
                        {caseStudy.results.growth}
                      </div>
                      <div className="text-xs text-gray-600">Growth Rate</div>
                    </div>
                  </div>

                  {/* Story */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {caseStudy.story}
                  </p>

                  {/* Expandable Details */}
                  {activeCaseStudy === index && (
                    <div className="border-t pt-4 space-y-3 opacity-0 translate-y-2 animate-[fadeIn_0.3s_ease-out_forwards]">
                      <h5 className="font-semibold text-gray-900">
                        Key Success Factors:
                      </h5>
                      <ul className="space-y-2">
                        {caseStudy.keyFactors.map((factor, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-sm text-gray-600"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => handleCaseStudyToggle(index)}
                    className={`w-full mt-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                      activeCaseStudy === index
                        ? "bg-gradient-to-r from-green-500 to-orange-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {activeCaseStudy === index
                      ? "Hide Details"
                      : "View Full Case Study"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful entrepreneurs who have built thriving
            businesses with Gram Shree Mart. Your success story could be next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              type="button"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </button>
            <button 
              type="button"
              className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105"
            >
              Talk to Success Stories
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;
