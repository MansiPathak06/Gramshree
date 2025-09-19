// app/GovernmentScheme.js
"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  Users,
  Briefcase,
  GraduationCap,
  TrendingUp,
  ExternalLink,
  Award,
  Factory,
} from "lucide-react";

const GovernmentScheme = () => {
  const [hoveredScheme, setHoveredScheme] = useState(null);
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const schemeHighlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Age Limit",
      description: "18-65 years",
      detail: "Open to all adults within the working age group",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Loan Amount",
      description: "Up to ₹5 Lakh",
      detail: "Collateral-free loans under MUDRA scheme",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Training Required",
      description: "15-30 Days",
      detail: "Mandatory skill development program",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Subsidy Benefits",
      description: "15-35%",
      detail: "Government subsidy on project cost",
    },
  ];

  const governmentLogos = [
    {
      name: "Make in India",
      icon: "image",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/317/317823.png",
      description: "Manufacturing Excellence Initiative",
      color: "from-orange-100 to-green-200",
      bgGradient: "from-orange-50 to-green-50",
      borderColor: "border-orange-300",
      textColor: "text-black",
    },
    {
      name: "Digital India",
      icon: "image",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/4207/4207273.png",
      description: "Digital Transformation Program",
      color: "from-blue-100 to-indigo-200",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-300",
      textColor: "text-black",
    },
    {
      name: "Startup India",
      icon: "image",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/17887/17887334.png",
      description: "Innovation & Entrepreneurship",
      color: "from-green-100 to-emerald-200",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-300",
      textColor: "text-black",
    },
    {
      name: "Skill India",
      icon: "image",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/9953/9953680.png",
      description: "Workforce Development Initiative",
      color: "from-purple-100 to-violet-200",
      bgGradient: "from-purple-50 to-violet-50",
      borderColor: "border-purple-300",
      textColor: "text-black",
    },
    {
      name: "MUDRA",
      icon: "image",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/12892/12892223.png",
      description: "Micro Finance Scheme",
      color: "from-pink-100 to-rose-200",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-300",
      textColor: "text-black",
    },
    {
      name: "PMEGP",
      icon: "image",
      iconSrc: "https://cdn-icons-png.flaticon.com/128/7486/7486703.png",
      description: "Employment Generation Program",
      color: "from-cyan-100 to-teal-200",
      bgGradient: "from-cyan-50 to-teal-50",
      borderColor: "border-cyan-300",
      textColor: "text-black",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            Government Approved Scheme
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
              Government Support
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Take advantage of various government schemes designed to support
            entrepreneurs. Get financial assistance, training, and subsidies to
            launch your franchise business.
          </p>
        </div>

        {/* Government Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {governmentLogos.map((logo, index) => {
            const isImageIcon = logo.icon === "image";

            return (
              <div
                key={index}
                className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                onMouseEnter={() => setHoveredLogo(index)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <div
                  className={`relative bg-gradient-to-br ${logo.bgGradient} rounded-2xl p-6 border-2 ${logo.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[140px] flex flex-col items-center justify-center cursor-pointer`}
                >
                  {/* Icon */}
                  <div
                    className={`relative z-10 w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${logo.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                  >
                    {isImageIcon ? (
                      <img
                        src={logo.iconSrc}
                        alt={`${logo.name} Icon`}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling.style.display =
                            "block";
                        }}
                      />
                    ) : (
                      <Factory className="w-8 h-8 text-black" />
                    )}

                    {/* Fallback */}
                    {isImageIcon && (
                      <Factory
                        className="w-8 h-8 text-black"
                        style={{ display: "none" }}
                      />
                    )}
                  </div>

                  {/* Text */}
                  <div className="relative z-10 text-center">
                    <h4
                      className={`font-bold text-lg ${logo.textColor} mb-1 group-hover:text-gray-900 transition-colors duration-300`}
                    >
                      {logo.name}
                    </h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {logo.description}
                    </p>
                  </div>

                  {/* Badge */}
                  {hoveredLogo === index && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scheme Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Scheme Highlights
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schemeHighlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-orange-200 transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredScheme(index)}
                onMouseLeave={() => setHoveredScheme(null)}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl text-green-600 group-hover:text-orange-500 transition-colors duration-300 mb-4 group-hover:scale-110 transform">
                    {highlight.icon}
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>

                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    {highlight.description}
                  </div>

                  <p className="text-sm text-gray-600">{highlight.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-green-400 to-orange-300 rounded-3xl p-8 lg:p-12 text-black mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why Choose Government Schemes?
              </h3>
              <div className="space-y-4">
                {[
                  "Collateral-free loans up to ₹5 lakhs",
                  "Lower interest rates (7-12% annually)",
                  "Government subsidy on project costs",
                  "Comprehensive skill development training",
                  "Ongoing mentorship and support",
                  "Fast-track approval process",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                    <span className="text-black/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-4">Success Rate</h4>
                <div className="text-5xl font-bold mb-2">85%</div>
                <p className="text-black/80">
                  Of applicants successfully receive funding
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Apply for Government Support?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Check your eligibility and start your application process today. Our
            experts will guide you through every step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              Check Eligibility
            </button>
            <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500 hover:text-white transition-all transform hover:scale-105">
              Apply Now
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>* Subject to government scheme terms and conditions</p>
            <p>Processing time: 15-30 working days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentScheme;
