"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Award, Phone, Mail } from "lucide-react";

const CallToActionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-orange-500 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-300/10 rounded-full blur-2xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <Award className="w-4 h-4 mr-2" />
            Government Approved Franchise
          </div>

          {/* Main Headline */}
          <h2
            className={`text-3xl md:text-5xl font-bold text-white mb-4 leading-tight transition-all duration-800 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Be your own boss with{" "}
            <span className="text-yellow-300">Gramshree!</span>
          </h2>

          {/* Subheadline */}
          <p
            className={`text-lg text-white/90 max-w-2xl mx-auto mb-8 transition-all duration-800 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Join India&apos;s fastest-growing supermarket chain with government
            support, proven systems, and complete training.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-800 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <button className="group bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-2">
              <span>Start Your Journey Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <a
              href="/brochure.pdf"
              download
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Download Brochure
            </a>
          </div>

          {/* Contact Info */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90 transition-all duration-800 delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call: 94038 91519</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="font-medium">franchise@gramshreemart.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
