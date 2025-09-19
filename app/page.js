"use client";
import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import HighlightsSection from "./HighlightsSection"
import About from "./About";
import GovernmentScheme from "./GovernmentScheme";
import PartnerBrands from "./PartnerBrands";
import FranchiseNetworkMap from "./FranchiseNetworkMap";
import SuccessStories from "./SuccessStories";
import CallToActionSection from "./CallToActionSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const GramShreeHomepage = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection/>
      <HighlightsSection/>
      <About/>
      <GovernmentScheme/>
      <PartnerBrands/>
      <FranchiseNetworkMap/>
      <SuccessStories/>
      <CallToActionSection/>
      <Footer/>

    </div>
  );
};

export default GramShreeHomepage;
