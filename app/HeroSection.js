"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50 overflow-hidden mt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-orange-600/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering youth through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                  Franchise and government schemes
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join Gramshree and become a part of India&apos;s growing
                entrepreneurial network.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Apply for Franchise
              </Link>
              <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500 hover:text-white transition-all">
                Know Govt Scheme
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/gmart.png"
                alt="Gram Shree Mart Store"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl scale-110"
                priority
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse delay-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
