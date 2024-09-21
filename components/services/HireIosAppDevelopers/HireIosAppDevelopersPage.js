"use client";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Hero from "./Hero";
import HighQualifiedIosDevelopers from "./HighQualifiedIosDevelopers";
import IosAppDevelopersForHire from "./IosAppDevelopersForHire";
import WhyChooseUs from "./WhyChooseUs";
import FAQS from "./FAQS";
import NewContactForm from "@/components/global/NewContactForm";
import HiringAnIosDeveloper from "./HiringAnIosDeveloper";

const HireIosAppDevelopersPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <HighQualifiedIosDevelopers />
      <IosAppDevelopersForHire />
      <HiringAnIosDeveloper />
      <WhyChooseUs />
      <FAQS />
      <NewContactForm />
    </div>
  );
};

export default HireIosAppDevelopersPage;
