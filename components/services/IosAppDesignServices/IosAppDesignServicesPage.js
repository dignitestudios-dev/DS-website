import Navbar from "@/components/global/Navbar";
import React from "react";
import Hero from "./Hero";
import DigitalTransformation from "./DigitalTransformation";
import IosAppDesignServices from "./IosAppDesignServices";
import DesignProcess from "./DesignProcess";
import WorkingWithDignite from "./WorkingWithDignite";
import WhyChooseUs from "./WhyChooseUs";
import FAQS from "./FAQS";
import TopRatedAppDevelopmentContactSection from "../TopRatedMobileAppDevelopment/TopRatedAppDevelopmentContactSection";

const IosAppDesignServicesPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <DigitalTransformation />
      <IosAppDesignServices />
      <DesignProcess />
      <WorkingWithDignite />
      <WhyChooseUs />
      <FAQS />
      <TopRatedAppDevelopmentContactSection />
    </div>
  );
};

export default IosAppDesignServicesPage;
