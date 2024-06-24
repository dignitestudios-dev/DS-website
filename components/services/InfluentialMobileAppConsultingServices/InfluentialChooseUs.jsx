"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const InfluentialChooseUs = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full py-12 global-padding-horizontal grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-[68px] font-bold lg:leading-[70.72px]">
          <span className="text-[#F15C20]">Why</span> <br />
          Choose US
        </h1>
        <p
          className={`text-base ${
            theme === "light" && "text-[#5C5C5C] leading-[22.4px]"
          }`}
        >
          With more than a decade of unmatchable experience in mobile consulting
          projects and mobile development, Dignite Studios has gained a
          spectacular place in the terrain of digital technology.
        </p>
        <p
          className={`text-base ${
            theme === "light" && "text-[#5C5C5C] leading-[22.4px]"
          }`}
        >
          Here, we’ve helped multiple industries and brands to flourish their
          businesses with modernized strategies and produce super easiest
          formulas to drive growth and progress in mobile and web development. 
        </p>
      </div>
      <div className=""></div>
    </div>
  );
};

export default InfluentialChooseUs;
