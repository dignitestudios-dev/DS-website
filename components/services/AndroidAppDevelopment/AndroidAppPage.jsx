import React from "react";
import ServicesHero from "./AndroidAppHero";
import CaseStudiesSection from "../../Home/CaseStudiesSection";
import ServicesSection from "../../Home/ServicesSection";
import Technologies from "../../Home/Technologies";
import LandingContactUs from "../../Home/LandingContactUs";
import Testimonials from "../../Home/Testimonials";
import AndroidAwardsRecognition from "./AndroidAwardsRecognition";
import AndroidTurnYourIdea from "./AndroidTurnYourIdea";

const AndroidAppPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <ServicesHero />
      <AndroidAwardsRecognition />
      <ServicesSection />
      <AndroidTurnYourIdea />
      <Technologies />
      <CaseStudiesSection />
      <LandingContactUs />
      <Testimonials />
      {/* <div className="">
      </div> */}
    </div>
  );
};

export default AndroidAppPage;
