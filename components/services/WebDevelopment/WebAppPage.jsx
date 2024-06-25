import React from "react";
import ServicesHero from "./WebAppHero";
import CaseStudiesSection from "../../Home/CaseStudiesSection";
import ServicesSection from "../../Home/ServicesSection";
import Technologies from "../../Home/Technologies";
import LandingContactUs from "../../Home/LandingContactUs";
import Testimonials from "../../Home/Testimonials";
import AwardsRecognition from "./WebAwardsRecognition";
import TurnYourIdea from "./WebTurnYourIdea";
import TopRatedAppDevelopmentContactSection from "../TopRatedMobileAppDevelopment/TopRatedAppDevelopmentContactSection";

const WebAppPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <ServicesHero />
      <AwardsRecognition />
      <ServicesSection />
      <TurnYourIdea />
      <Technologies />
      <CaseStudiesSection />
      <TopRatedAppDevelopmentContactSection />
      <Testimonials />
      {/* <div className="">
      </div> */}
    </div>
  );
};

export default WebAppPage;
