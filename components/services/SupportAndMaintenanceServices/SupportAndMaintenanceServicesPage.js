'use client'

import React, { useContext } from "react";
import Hero from "./Hero";
import { GlobalContext } from "@/context/GlobalContext";
import Navbar from "@/components/global/Navbar";

const SupportAndMaintenanceServicesPage = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Hero />
    </div>
  );
};

export default SupportAndMaintenanceServicesPage;
