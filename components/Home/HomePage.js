"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect } from "react";
import CaseStudiesSection from "@/components/Home/CaseStudiesSection";
import Faq from "@/components/Home/Faq";
import FindOurOfficesSection from "@/components/Home/FindOurOfficesSection";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import IndustriesSection from "@/components/Home/IndustriesSection";
import LandingContactUs from "@/components/Home/LandingContactUs";
import Process from "@/components/Home/Process";
import ServicesSection from "@/components/Home/ServicesSection";
import Slider from "@/components/Home/Slider";
import Technologies from "@/components/Home/Technologies";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import { IoArrowUpSharp } from "react-icons/io5";
import TopRatedAppDevelopmentContactSection from "../services/TopRatedMobileAppDevelopment/TopRatedAppDevelopmentContactSection";
import TopRatedPageOurOffices from "../services/TopRatedMobileAppDevelopment/TopRatedPageOurOffices";
import ConvenientMobileAppDevelopment from "./ConvenientMobileAppDevelopment";
import HomeContact from "./HomeContact";
import AreaOfExpertise from "./AreaOfExpertise";
import Head from "next/head";
import Script from "next/script";
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
