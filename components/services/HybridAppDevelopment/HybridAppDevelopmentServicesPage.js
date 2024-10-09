"use client";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Hero from "./Hero";
import WellKnownAppDevCompany from "./WellKnownAppDevCompany";
import DevelopmentProcess from "./DevelopmentProcess";
import BenefitsOfWorking from "./BenefitsOfWorking";
import WhyChooseUs from "./WhyChooseUs";
import WorkWithDegnite from "./working-with-degnite";
import FAQS from "./FAQS";
import HybridAppContactForm from "@/components/global/HybridAppContactForm";

const HybridAppDevelopmentServicesPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <WellKnownAppDevCompany />
      <BenefitsOfWorking/>
      <DevelopmentProcess />
      <WorkWithDegnite/>
      <WhyChooseUs/>
      <FAQS /> 
      <HybridAppContactForm />
    </div>
  );
};

export default HybridAppDevelopmentServicesPage;
