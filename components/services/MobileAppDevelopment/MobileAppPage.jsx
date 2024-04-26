import React from "react";
import ServicesHero from "./MobileAppHero";
import CaseStudiesSection from "../../Home/CaseStudiesSection";
import ServicesSection from "../../Home/ServicesSection";
import Technologies from "../../Home/Technologies";
import LandingContactUs from "../../Home/LandingContactUs";
import Testimonials from "../../Home/Testimonials";
import MobileAwardsRecognition from "./MobileAwardsRecognition";
import MobileTurnYourIdea from "./MobileTurnYourIdea";

const MobileAppPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <ServicesHero />
      <MobileAwardsRecognition />
      <ServicesSection />
      <MobileTurnYourIdea />
      <Technologies />
      <CaseStudiesSection />
      <LandingContactUs />
      <Testimonials />
      {/* <div className="">
      </div> */}
    </div>
  );
};

export default MobileAppPage;
