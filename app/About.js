// app/About.js
"use client";

import React, { useState } from "react";

const About = () => {
  const [play, setPlay] = useState(false);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video / Cover Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-orange-500 p-1 rounded-3xl shadow-2xl">
              <div className="bg-black rounded-3xl overflow-hidden">
                <div className="aspect-video relative">
                  {!play ? (
                    <div
                      className="w-full h-full cursor-pointer relative"
                      onClick={() => setPlay(true)}
                    >
                      {/* ✅ Your custom cover image (replace with your own file in /public/images) */}
                      <img
                        src="/images/cover.png"
                        alt="Video Cover"
                        className="w-full h-full "
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="black"
                            viewBox="0 0 24 24"
                            stroke="black"
                            className="w-8 h-8 ml-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 3l14 9-14 9V3z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/YdlgsrIeWaY?autoplay=1&rel=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* About Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Gram Shree Mart{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                  Supermarket Franchise
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Gram Shree is one of the fastest-growing supermarket
                  franchises in India, with 20,000+ products from 1,500+
                  national & international brands.
                </p>
                <p>
                  Our team had two visions from the start - to ease consumer's
                  household grocery shopping and empower franchise owners with
                  ready-to-operate stores in just 45 days.
                </p>
                <p>
                  With continuous growth, we are proud to have successfully
                  opened over 400 stores nationwide, offering top-quality
                  products at affordable prices such as grocery, home
                  appliances, stationary etc.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">400+</div>
                <div className="text-sm text-gray-600">Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">22+</div>
                <div className="text-sm text-gray-600">States</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">92%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
