"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";
import CaseStudiesSection from "@/components/Home/CaseStudiesSection";
import Faq from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import IndustriesSection from "@/components/Home/IndustriesSection";
import Process from "@/components/Home/Process";
import Slider from "@/components/Home/Slider";
import Technologies from "@/components/Home/Technologies";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import TopRatedPageOurOffices from "../services/TopRatedMobileAppDevelopment/TopRatedPageOurOffices";
import ConvenientMobileAppDevelopment from "./ConvenientMobileAppDevelopment";
import AreaOfExpertise from "./AreaOfExpertise";
import NewContactForm from "../global/NewContactForm";

export default function HomePage() {
  const { palette } = useContext(GlobalContext);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Hero />

      <div
        className="scroller relative w-full h-auto md:h-96 "
        data-speed="fast"
        data-animated="true"
      >
        <Slider />
      </div>

      <Technologies />
      <ConvenientMobileAppDevelopment />
      <CaseStudiesSection />
      <Process />
      <WhyChooseUsSection />
      <AreaOfExpertise />
      <IndustriesSection />
      <Testimonials />
      <Faq />
      <NewContactForm />
      <TopRatedPageOurOffices />
    </div>
  );
}
