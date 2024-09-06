"use client";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Hero from "./Hero";
import HireMobileAppDevCompany from "./HireMobileAppDevCompany";
import WhyChooseUs from "./WhyChooseUs";
import FAQS from "./FAQS";
import NewContactForm from "@/components/global/NewContactForm";
import HeroAnimation from "./HeroAnimation";
import DevelopmentProcess from "./DevelopmentProcess";
import HowToHireAppDevelopers from "./HowToHireAppDevelopers";

const HireMobileAppDevelopersPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      {/* <HeroAnimation /> */}
      <HireMobileAppDevCompany />
      <DevelopmentProcess />
      <HowToHireAppDevelopers />
      <WhyChooseUs />
      <FAQS />
      <NewContactForm />
    </div>
  );
};

export default HireMobileAppDevelopersPage;
