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
import TopRatedAppDevelopmentContactSection from "../TopRatedMobileAppDevelopment/TopRatedAppDevelopmentContactSection";
import WhyChooseUs from "./WhyChooseUs";
import NewContactForm from "@/components/global/NewContactForm";

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
      <NewContactForm />
    </div>
  );
};

export default NativeAppDevelopmentServicesPage;
