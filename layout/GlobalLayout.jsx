"use client";
import React, { useState, useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/global/Sidebar";
import Footer from "@/components/Home/Footer";
import FixedSocials from "@/components/global/FixedSocials";
import Cursor from "@/components/global/Cursor";

const GlobalLayout = ({ page }) => {
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
      <Cursor />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="overflow-x-hidden w-full h-auto flex flex-col justify-start items-center gap-4">
        <Navbar setIsOpen={setIsSidebarOpen} />
        {page}
        <Footer />
        <FixedSocials />
      </div>
    </div>
  );
};

export default GlobalLayout;
