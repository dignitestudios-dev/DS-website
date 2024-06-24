"use client";
import Navbar from "@/components/global/Navbar";
import React, { useEffect } from "react";
import Hero from "./Hero";
import MobileAppTestingInRealTime from "./MobileAppTestingInRealTime";
import TestingServices from "./TestingServices";
import TestingProcess from "./TestingProcess";
import TopNotchBenefits from "./TopNotchBenefits";
import TestingTools from "./TestingTools";
import WhyDignite from "./WhyDignite";
import TopNotchFaqs from "./TopNotchFaqs";
import { AOS } from "aos";
import "aos/dist/aos.css";

const TopNotchMobileAppTestingServices = () => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     AOS.init();
  //   }
  // }, []);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Hero />
      <MobileAppTestingInRealTime />
      <TestingServices />
      <TestingProcess />
      <TopNotchBenefits />
      <TestingTools />
      <WhyDignite />
      <TopNotchFaqs />
    </div>
  );
};

export default TopNotchMobileAppTestingServices;
