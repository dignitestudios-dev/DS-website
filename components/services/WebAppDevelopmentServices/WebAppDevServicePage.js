"use client";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Hero from "./Hero";
import UnrivaledSection from "./UnrivaledSection";
import CustomWebAppDevSection from "./CustomWebAppDevSection";
import WebAppProcess from "./WebAppProcess";
import IndustryProtocols from "./IndustryProtocols";
import BenefitsOfWebAppDev from "./BenefitsOfWebAppDev";
import TechnologiesAndTools from "./TechnologiesAndTools";
import WhyChooseUs from "./WhyChooseUs";
import Faqs from "./Faqs";
import HybridAppContactForm from "@/components/global/HybridAppContactForm";

const WebAppDevServicePage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <UnrivaledSection />
      <CustomWebAppDevSection />
      <WebAppProcess />
      <IndustryProtocols />
      <BenefitsOfWebAppDev />
      <TechnologiesAndTools />
      <WhyChooseUs />
      <Faqs />
      <HybridAppContactForm />
    </div>
  );
};

export default WebAppDevServicePage;
