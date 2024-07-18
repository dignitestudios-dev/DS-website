'use client'
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Hero from "./Hero";

const IosPage = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="w-full">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Hero/>
    </div>
  );
};

export default IosPage;
