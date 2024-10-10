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
import HybridAppContactForm from "@/components/global/HybridAppContactForm";

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
        <div
          className={`w-full relative ${
            theme === "light" && "bg-[#F9F9F9]"
          } h-[170px] md:h-[345px] lg:h-[405px] xl:h-[585px] 2xl:h-[770px] overflow-hidden`}
        >
          <h2 className="uppercase font-bold text-sm w-full md:text-3xl lg:text-[48px] 2xl:text-[58px] z-20 absolute top-[10%] 2xl:top-20 left-1/2 transform -translate-x-1/2 text-center mx-auto">
            <span className="text-[#F15C20]">technologies</span> we’re using
          </h2>
          {theme === "dark" ? (
            <img
              // loading="lazy"
              // loader={customLoader}
              width={1440}
              height={545}
              src="/mobile-mpp-development-service-technologies-dark.png"
              alt="The image shows multiple icons of different technologies and a mockup screen of the Mobile App Development"
              className="w-full z-10 h-full md:h-[340px] lg:h-full absolute bottom-0"
            />
          ) : (
            <img
              // loading="lazy"
              // loader={customLoader}
              width={1440}
              height={545}
              src="/mobile-app-development-service-technologies-dark-light1.webp"
              alt="The image shows multiple icons of different technologies and a mockup screen of the Mobile App Development"
              className="w-full z-10 h-full md:h-[340px] lg:h-full absolute bottom-0"
            />
          )}
        </div>
      </section>
      <Lifecycle />
      <InnovativeMobileAppSection />
      <TopRatedAppDevFaq />
      <HybridAppContactForm />
    </div>
  );
};

export default MobileAppDevelopmentSeoPage;
