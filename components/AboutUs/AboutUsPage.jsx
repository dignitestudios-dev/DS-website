import React from "react";
import LandingContactUs from "../Home/LandingContactUs";
import FindOurOfficesSection from "../Home/FindOurOfficesSection";
import AboutUsHero from "./AboutUsHero";
import AboutUsSlider from "./AboutUsSlider";
import AboutUsFaq from "./AboutUsFaq";
import AwardsRecognition from "../services/MobileAppDevelopment/MobileAwardsRecognition";
import TopRatedPageOurOffices from "../services/TopRatedMobileAppDevelopment/TopRatedPageOurOffices";

const AboutUsPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <AboutUsHero />
      <AboutUsSlider />
      <AboutUsFaq />
      <AwardsRecognition />
      <LandingContactUs />
      {/* <FindOurOfficesSection /> */}
      <TopRatedPageOurOffices />
    </div>
  );
};

export default AboutUsPage;
