import React from "react";
import ServicesHero from "./MobileAppHero";
import CaseStudiesSection from "../Home/CaseStudiesSection";
import ServicesSection from "../Home/ServicesSection";
import Technologies from "../Home/Technologies";
import LandingContactUs from "../Home/LandingContactUs";
import Testimonials from "../Home/Testimonials";
import AwardsRecognition from "./MobileAwardsRecognition";
import TurnYourIdea from "./MobileTurnYourIdea";

const ServicesPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <ServicesHero />
      <AwardsRecognition />
      <ServicesSection />
      <TurnYourIdea />
      <Technologies />
      <CaseStudiesSection />
      <LandingContactUs />
      <Testimonials />
      {/* <div className="">
      </div> */}
    </div>
  );
};

export default ServicesPage;
