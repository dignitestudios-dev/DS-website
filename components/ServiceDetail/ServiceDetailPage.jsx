import React from "react";
import CaseStudiesSection from "../Home/CaseStudiesSection";
import ServicesSection from "../Home/ServicesSection";
import Technologies from "../Home/Technologies";
import LandingContactUs from "../Home/LandingContactUs";
import Testimonials from "../Home/Testimonials";
import AwardsRecognition from "../Services/AwardsRecognition";
import TurnYourIdea from "../Services/TurnYourIdea";
import ServiceDetailHero from "./ServiceDetailHero";

const ServiceDetailPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <ServiceDetailHero />
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

export default ServiceDetailPage;
