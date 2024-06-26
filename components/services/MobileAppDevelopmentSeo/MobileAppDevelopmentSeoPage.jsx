import React from "react";
import MobileAppDevSeoHero from "./MobileAppDevSeoHero";
import DiscoverOurHistory from "./DiscoverOurHistory";
import MobileAppDevSection from "./MobileAppDevSection";
import OurProjectsSection from "./OurProjectsSection";
import MobileAppWeDevelopSection from "./MobileAppWeDevelopSection";
import PlatformServices from "./PlatformServices";
import TopRankedCategoriesSection from "./TopRankedCategoriesSection";
import BenefitsOfWorking from "./BenefitsOfWorking";
import OptimizedProcess from "./OptimizedProcess";
import Lifecycle from "./Lifecycle";
import TopRatedAppDevFaq from "../TopRatedMobileAppDevelopment/TopRatedAppDevFaq";

const MobileAppDevelopmentSeoPage = () => {
  return (
    <div className="w-full">
      <MobileAppDevSeoHero />
      <DiscoverOurHistory />
      <MobileAppDevSection />
      <OurProjectsSection />
      <MobileAppWeDevelopSection />
      <PlatformServices />
      <TopRankedCategoriesSection />
      <BenefitsOfWorking />
      <OptimizedProcess />
      <div className="w-full">
        <img
          src="/Mobile-App-Development-Service-Technologies.webp"
          title="Mobile App Development Service Technologies"
          alt="The image shows multiple icons of different technologies and a mockup screen of the Mobile App Development"
          className="w-full my-16"
        />
      </div>
      <Lifecycle />
      <TopRatedAppDevFaq />
    </div>
  );
};

export default MobileAppDevelopmentSeoPage;
