"use client";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Hero from "./Hero";
import ProgressiveWebApp from "./ProgressiveWebApp";
import ProgressiveWebAppServices from "./ProgressiveWebAppServices";
import WebAppTechnologies from "./WebAppTechnologies";
import PwaDevelopmentProcess from "./PwaDevelopmentProcess";
import WebAppSolutions from "./WebAppSolutions";
import WhyChooseUs from "./WhyChooseUs";
import FAQS from "./FAQS";
import HybridAppContactForm from "@/components/global/HybridAppContactForm";

const PwaServicesPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <ProgressiveWebApp />
      <ProgressiveWebAppServices />
      <WebAppTechnologies />
      <PwaDevelopmentProcess />
      <WebAppSolutions />
      <WhyChooseUs />
      <FAQS />
      <HybridAppContactForm />
    </div>
  );
};

export default PwaServicesPage;
