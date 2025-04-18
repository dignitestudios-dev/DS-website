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
import NewContactForm from "@/components/global/NewContactForm";

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
      <NewContactForm />
    </div>
  );
};

export default AndroidMobileAppDesignServicesPage;
