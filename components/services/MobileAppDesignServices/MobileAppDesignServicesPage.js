import React from "react";
import Hero from "./Hero";
import Navbar from "@/components/global/Navbar";
// import MobileAppDevCaseStudies from "../MobileAppDevelopment/MobileAppDevCaseStudies";
import MobileAppDesignCaseStudies from "./MobileAppDesignCaseStudies";
import MobileAppDesignWhyChooseUs from "./MobileAppDesignWhyChooseUs";
import TopNotchTeam from "./TopNotchTeam";
import SpecialistPlatform from "./SpecialistPlatform";
import DigniteServiceScope from "./DigniteServiceScope";
import FAQS from "./FAQS";
import BenefitOfDigniteStudios from "./BenefitOfDigniteStudios";
import PlanOfActionSection from "./PlanOfActionSection";

const MobileAppDesignServicesPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Hero />
      <PlanOfActionSection/>
      <MobileAppDesignCaseStudies />
      <MobileAppDesignWhyChooseUs />
      <TopNotchTeam />
      <SpecialistPlatform />
      <BenefitOfDigniteStudios />
      <DigniteServiceScope />
      <FAQS />
    </div>
  );
};

export default MobileAppDesignServicesPage;
