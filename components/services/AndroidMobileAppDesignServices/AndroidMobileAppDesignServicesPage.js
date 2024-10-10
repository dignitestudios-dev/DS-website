"use client";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Hero from "./Hero";
import TopOfTheLine from "./TopOfTheLine";
import ExclusiveAndroid from "./ExclusiveAndroid";
import OurLeadingMobileAppDesignProcess from "./OurLeadingMobileAppDesignProcess";
import AndroidMobileAppDesign from "./AndroidMobileAppDesign";
import WhyChooseUs from "./WhyChooseUs";
import AndroidFaqs from "./AndroidFaqs";
import TopRatedAppDevelopmentContactSection from "../TopRatedMobileAppDevelopment/TopRatedAppDevelopmentContactSection";
import HybridAppContactForm from "@/components/global/HybridAppContactForm";

const AndroidMobileAppDesignServicesPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <TopOfTheLine />
      <ExclusiveAndroid />
      <OurLeadingMobileAppDesignProcess />
      <AndroidMobileAppDesign />
      <WhyChooseUs />
      <AndroidFaqs />
      <HybridAppContactForm />
    </div>
  );
};

export default AndroidMobileAppDesignServicesPage;
