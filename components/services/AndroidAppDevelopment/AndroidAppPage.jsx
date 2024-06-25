import React from "react";
import ServicesHero from "./AndroidAppHero";
import CaseStudiesSection from "../../Home/CaseStudiesSection";
import Technologies from "../../Home/Technologies";
import LandingContactUs from "../../Home/LandingContactUs";
import Testimonials from "../../Home/Testimonials";
import AndroidAwardsRecognition from "./AndroidAwardsRecognition";
import AndroidTurnYourIdea from "./AndroidTurnYourIdea";
import AndroidTechnologiesSection from "./AndroidTechnologiesSection";
import AndroidAppServicesSection from "./AndroidAppServicesSection";
import AndroidAppPromotion from "./AndroidAppPromotion";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import IndustriesSection from "@/components/Home/IndustriesSection";
import AndroidAppWorkflowSection from "./AndroidAppWorkflowSection";
import TopRatedAppDevelopmentContactSection from "../TopRatedMobileAppDevelopment/TopRatedAppDevelopmentContactSection";

const AndroidAppPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <ServicesHero />
      <AndroidAwardsRecognition />
      <AndroidTechnologiesSection />
      <AndroidTurnYourIdea />
      <AndroidAppServicesSection />
      <AndroidAppWorkflowSection />
      <AndroidAppPromotion />
      <WhyChooseUsSection />
      <IndustriesSection />

      <CaseStudiesSection />
      <Testimonials />
      <TopRatedAppDevelopmentContactSection/>
      {/* <LandingContactUs /> */}
      {/* <div className="">
      </div> */}
    </div>
  );
};

export default AndroidAppPage;
