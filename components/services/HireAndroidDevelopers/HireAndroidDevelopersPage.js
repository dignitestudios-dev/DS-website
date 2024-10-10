"use client";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Hero from "./Hero";
import HireADedicatedDevelopers from "./HireADedicatedDevelopers";
import AndroidAppDevServices from "./AndroidAppDevServices";
import TypesOfAndroidDevelopers from "./TypesOfAndroidDevelopers";
import DevelopersAdequacies from "./DevelopersAdequacies";
import DevelopersHiringProcess from "./DevelopersHiringProcess";
import WhyChooseUs from "./WhyChooseUs";
import FAQS from "./FAQS";
import HybridAppContactForm from "@/components/global/HybridAppContactForm";

const HireAndroidDevelopersPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <HireADedicatedDevelopers />
      <AndroidAppDevServices />
      <TypesOfAndroidDevelopers />
      <DevelopersAdequacies />
      <DevelopersHiringProcess />
      <WhyChooseUs />
      <FAQS />
      <HybridAppContactForm />
    </div>
  );
};

export default HireAndroidDevelopersPage;
