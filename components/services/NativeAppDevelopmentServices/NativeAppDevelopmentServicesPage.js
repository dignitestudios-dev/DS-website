"use client";
import React, { useContext } from "react";
import Hero from "./Hero";
import { GlobalContext } from "@/context/GlobalContext";
import Navbar from "@/components/global/Navbar";
import WeCommitToDeliver from "./WeCommitToDeliver";
import EmpowerIndustries from "./EmpowerIndustries";
import DevelopmentProcess from "./DevelopmentProcess";
import TechStackSection from "./TechStackSection";
import DigniteKnackSkills from "./DigniteKnackSkills";
import Faqs from "./Faqs";
import WhyChooseUs from "./WhyChooseUs";
import HybridAppContactForm from "@/components/global/HybridAppContactForm";

const NativeAppDevelopmentServicesPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <WeCommitToDeliver />
      <EmpowerIndustries />
      <DevelopmentProcess />
      <TechStackSection />
      <DigniteKnackSkills />
      <WhyChooseUs />
      <Faqs />
      <HybridAppContactForm />
    </div>
  );
};

export default NativeAppDevelopmentServicesPage;
