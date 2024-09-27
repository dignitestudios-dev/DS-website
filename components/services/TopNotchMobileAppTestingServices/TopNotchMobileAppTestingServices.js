"use client";
import Navbar from "@/components/global/Navbar";
import React, { useContext } from "react";
import Hero from "./Hero";
import MobileAppTestingInRealTime from "./MobileAppTestingInRealTime";
import TestingServices from "./TestingServices";
import TestingProcess from "./TestingProcess";
import TopNotchBenefits from "./TopNotchBenefits";
import TestingTools from "./TestingTools";
import WhyDignite from "./WhyDignite";
import TopNotchFaqs from "./TopNotchFaqs";
import "aos/dist/aos.css";
import { GlobalContext } from "@/context/GlobalContext";
import NewContactForm from "@/components/global/NewContactForm";

const TopNotchMobileAppTestingServices = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <MobileAppTestingInRealTime />
      <TestingServices />
      <TestingProcess />
      <TopNotchBenefits />
      <TestingTools />
      <WhyDignite />
      <TopNotchFaqs />
      <NewContactForm />
    </div>
  );
};

export default TopNotchMobileAppTestingServices;
