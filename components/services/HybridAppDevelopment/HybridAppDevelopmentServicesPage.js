"use client";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Hero from "./Hero";
import WellKnownAppDevCompany from "./WellKnownAppDevCompany";
import DevelopmentProcess from "./DevelopmentProcess";

const HybridAppDevelopmentServicesPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <WellKnownAppDevCompany />
      <DevelopmentProcess />
    </div>
  );
};

export default HybridAppDevelopmentServicesPage;
