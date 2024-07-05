"use client";
import React, { useContext } from "react";
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
import { GlobalContext } from "@/context/GlobalContext";
import TopRatedAppDevelopmentContactSection from "../TopRatedMobileAppDevelopment/TopRatedAppDevelopmentContactSection";
import InnovativeMobileAppSection from "./InnovativeMobileAppSection";

const MobileAppDevelopmentSeoPage = () => {
  const { theme } = useContext(GlobalContext);
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
        {/* {theme === "light" ? (
          <Image
            loader={customLoader}
            width={1440}
            height={545}
            src="/Mobile-App-Development-Service-Technologies.webp"
            title="Mobile App Development Service Technologies"
            alt="The image shows multiple icons of different technologies and a mockup screen of the Mobile App Development"
            className="w-full my-16"
          />
        ) : (
          <div className="w-full relative overflow-x-hidden">
            <h1 className="uppercase font-bold text-sm w-full lg:text-[48px] z-20 absolute top-16 lg:top-4 left-1/2 transform -translate-x-1/2 text-center mx-auto">
              <span className="text-[#F15C20]">technologies</span> we’re using
            </h1>
            <img
              width={1440}
              height={545}
              src="/Mobile-App-Development-Service-Technologies-dark.png"
              title="Mobile App Development Service Technologies"
              alt="The image shows multiple icons of different technologies and a mockup screen of the Mobile App Development"
              className="w-full my-16 z-10 h-[150px] lg:h-auto"
            />
          </div>
        )} */}
      </section>
      <Lifecycle />
      <TopRatedAppDevelopmentContactSection />
      <TopRatedAppDevFaq />
      <InnovativeMobileAppSection />
    </div>
  );
};

export default MobileAppDevelopmentSeoPage;
