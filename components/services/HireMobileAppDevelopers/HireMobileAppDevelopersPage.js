"use client";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Hero from "./Hero";
import HireMobileAppDevCompany from "./HireMobileAppDevCompany";
import WhyChooseUs from "./WhyChooseUs";
import FAQS from "./FAQS";
import DevelopmentProcess from "./DevelopmentProcess";
import HowToHireAppDevelopers from "./HowToHireAppDevelopers";
import HybridAppContactForm from "@/components/global/HybridAppContactForm";

const HireMobileAppDevelopersPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <HireMobileAppDevCompany />
      <DevelopmentProcess />
      <HowToHireAppDevelopers />
      <WhyChooseUs />
      <FAQS />
      <HybridAppContactForm />
    </div>
  );
};

export default HireMobileAppDevelopersPage;
