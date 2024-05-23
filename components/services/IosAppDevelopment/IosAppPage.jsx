import React from "react";
import ServicesHero from "./IosAppHero";
import CaseStudiesSection from "../../Home/CaseStudiesSection";
import LandingContactUs from "../../Home/LandingContactUs";
import Testimonials from "../../Home/Testimonials";
import AwardsRecognition from "./IosAwardsRecognition";
import TurnYourIdea from "./IosTurnYourIdea";
import IosAppPromotion from "./IosAppPromotion";
import IosAppTechnologiesSection from "./IosAppTechnologiesSection";
import IosAppServicesSection from "./IosAppServicesSection";
import IosAppWorkflowSection from "./IosAppWorkflowSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import IndustriesSection from "@/components/Home/IndustriesSection";

const IosAppPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <ServicesHero />
      <AwardsRecognition />
      <IosAppTechnologiesSection />
      <TurnYourIdea />
      <IosAppServicesSection />
      <IosAppWorkflowSection />
      <IosAppPromotion />
      <WhyChooseUsSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <Testimonials />
      <LandingContactUs />
      {/* <div className="">
      </div> */}
    </div>
  );
};

export default IosAppPage;
