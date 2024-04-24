"use client";
import React, { useState, useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Sidebar from "@/components/global/Sidebar";
import Footer from "@/components/Home/Footer";
import FixedSocials from "@/components/global/FixedSocials";

const ServiceDetailLayout = ({ page }) => {
  // Sidebar states and ref:
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className="w-full transition-all duration-700"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="overflow-x-hidden w-full h-auto flex flex-col justify-start items-center gap-4">
        {page}
        <Footer />
        <FixedSocials />
      </div>
    </div>
  );
};

export default ServiceDetailLayout;
