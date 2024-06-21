import Navbar from "@/components/global/Navbar";
import React from "react";
import Hero from "./Hero";
import MobileAppTestingInRealTime from "./MobileAppTestingInRealTime";
import TestingServices from "./TestingServices";

const TopNotchMobileAppTestingServices = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Hero />
      <MobileAppTestingInRealTime />
      <TestingServices />
    </div>
  );
};

export default TopNotchMobileAppTestingServices;
