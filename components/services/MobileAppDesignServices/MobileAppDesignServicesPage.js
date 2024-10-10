"use client";
import React, { useContext } from "react";
import Hero from "./Hero";
import Navbar from "@/components/global/Navbar";
import MobileAppDesignCaseStudies from "./MobileAppDesignCaseStudies";
import MobileAppDesignWhyChooseUs from "./MobileAppDesignWhyChooseUs";
import TopNotchTeam from "./TopNotchTeam";
import SpecialistPlatform from "./SpecialistPlatform";
import DigniteServiceScope from "./DigniteServiceScope";
import FAQS from "./FAQS";
import BenefitOfDigniteStudios from "./BenefitOfDigniteStudios";
import PlanOfActionSection from "./PlanOfActionSection";
import { GlobalContext } from "@/context/GlobalContext";
import HybridAppContactForm from "@/components/global/HybridAppContactForm";

const MobileAppDesignServicesPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <PlanOfActionSection />
      <MobileAppDesignCaseStudies />
      <MobileAppDesignWhyChooseUs />
      <TopNotchTeam />
      <SpecialistPlatform />
      <BenefitOfDigniteStudios />
      <DigniteServiceScope />
      <FAQS />
      <HybridAppContactForm />
    </div>
  );
};

export default MobileAppDesignServicesPage;
