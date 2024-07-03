'use client'
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
import Image from "next/image";
import customLoader from "@/lib/custom-loader";

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
      <section className="w-full">
        <Image
        loader={customLoader}
        width={1440}
        height={545}
          src="/Mobile-App-Development-Service-Technologies.webp"
          title="Mobile App Development Service Technologies"
          alt="The image shows multiple icons of different technologies and a mockup screen of the Mobile App Development"
          className="w-full my-16"
        />
      </section>
      <Lifecycle />
      <TopRatedAppDevFaq />
    </div>
  );
};

export default MobileAppDevelopmentSeoPage;
