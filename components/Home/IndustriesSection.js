"use client"
import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import IndustryCard from "./IndustryCard";
import { industries } from "@/constants/industries";

const IndustriesSection = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className={`w-full flex flex-col gap-y-4 my-5 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 `}
    >
      <h1
        className={` uppercase font-extrabold lg:text-start text-4xl lg:text-5xl xl:text-[72px] 2xl:text-[114px] tracking-tighter lg:font-bold mb-2 lg:mb-6`}
      >
        industries
      </h1>
      <div className="w-full "  style={{
          borderTop: `2px solid ${palette?.light_contrast_background}`,
        }}></div>
      <div className="w-full lg:py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2  gap-6">
        {industries.map((industry, index) => {
          return <IndustryCard key={index} industry={industry} />;
        })}
      </div>
    </div>
  );
};

export default IndustriesSection;
