"use client";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Hero from "./Hero";
import TopNotchIosApp from "./TopNotchIosApp";
import PhenomenalSection from "./PhenomenalSection";
import Process from "./Process";
import ValueAddedDigniteStudios from "./ValueAddedDigniteStudios";
import WhyChooseUs from "./WhyChooseUs";
import TopRatedAppDevelopmentContactSection from "../TopRatedMobileAppDevelopment/TopRatedAppDevelopmentContactSection";
import { IOS_SERVICES_FAQS } from "@/constants/iosservicesfaqs";
import VariousIndustriesSection from "./VariousIndustriesSection";
import Faqs from "./Faqs";

const IosPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <TopNotchIosApp />
      <PhenomenalSection />
      <Process />
      <VariousIndustriesSection/>
      <ValueAddedDigniteStudios />
      <WhyChooseUs />
      <Faqs faqs={IOS_SERVICES_FAQS} />
      <TopRatedAppDevelopmentContactSection />
    </div>
  );
};

export default IosPage;
