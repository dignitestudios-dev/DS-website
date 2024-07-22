"use client";

import React, { useContext } from "react";
import Hero from "./Hero";
import { GlobalContext } from "@/context/GlobalContext";
import Navbar from "@/components/global/Navbar";
import IndustryLeading from "./IndustryLeading";
import ReliableMobileAppSection from "./ReliableMobileAppSection";
import MaintenanceProcess from "./MaintenanceProcess";
import TechnologiesWeAreUsing from "./TechnologiesWeAreUsing";
import ValuePropositionSection from "./ValuePropositionSection";
import WhyChooseUs from "./WhyChooseUs";
import Faqs from "./Faqs";

const SupportAndMaintenanceServicesPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero />
      <IndustryLeading />
      <ReliableMobileAppSection />
      <MaintenanceProcess />
      <TechnologiesWeAreUsing />
      <ValuePropositionSection />
      <WhyChooseUs />
      <Faqs />
    </div>
  );
};

export default SupportAndMaintenanceServicesPage;
