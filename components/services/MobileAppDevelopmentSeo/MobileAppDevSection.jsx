"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const MobileAppDevSection = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 py-12">
      <h1
        className={`${
          theme === "light" ? "text-black" : "text-white"
        } font-bold uppercase lg:text-[64px] tracking-[-2.56px] leading-none`}
      >
        mobile app development <br /> services
      </h1>
      <div
        className={`border w-full my-4 ${
          theme === "light" ? "border-[#E7E7E7]" : "border-gray-500"
        }`}
      />
    </div>
  );
};

export default MobileAppDevSection;
