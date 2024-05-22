import React from "react";
import ServicesHero from "./MobileAppHero";
import CaseStudiesSection from "../../Home/CaseStudiesSection";
import LandingContactUs from "../../Home/LandingContactUs";
import Testimonials from "../../Home/Testimonials";
import MobileAwardsRecognition from "./MobileAwardsRecognition";
import MobileTurnYourIdea from "./MobileTurnYourIdea";
import MobileAppServiceSection from "./MobileAppServiceSection";
import IndustriesSection from "@/components/Home/IndustriesSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import MobileAppPromotion from "./MobileAppPromotion";
import MobileAppWorkflowSection from "./MobileAppWorkflowSection";
import MobileTechnologiesSection from "./MobileTechnologiesSection";

const MobileAppPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <ServicesHero />
      <MobileAwardsRecognition />
      <MobileTechnologiesSection />
      <MobileAppServiceSection />
      <MobileAppWorkflowSection />
      <MobileAppPromotion />
      <MobileTurnYourIdea />
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

export default MobileAppPage;
