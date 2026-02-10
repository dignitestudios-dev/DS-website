"use client";
import Navbar from "@/components/global/Navbar";
import React, { useContext } from "react";
import Hero from "./Hero";
import DigitalTransformation from "./DigitalTransformation";
import IosAppDesignServices from "./IosAppDesignServices";
import DesignProcess from "./DesignProcess";
import WorkingWithDignite from "./WorkingWithDignite";
import WhyChooseUs from "./WhyChooseUs";
import FAQS from "./FAQS";
import TopRatedAppDevelopmentContactSection from "../TopRatedMobileAppDevelopment/TopRatedAppDevelopmentContactSection";
import { GlobalContext } from "@/context/GlobalContext";
import HybridAppContactForm from "@/components/global/HybridAppContactForm";

const IosAppDesignServicesPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full">
      <Navbar setIsOpen={setIsSidebarOpen} />
      
      <Hero />
      <DigitalTransformation />
      <IosAppDesignServices />
      <DesignProcess />
      <WorkingWithDignite />
      <WhyChooseUs />
      <FAQS />
      <HybridAppContactForm />
    </div>
  );
};

export default IosAppDesignServicesPage;
