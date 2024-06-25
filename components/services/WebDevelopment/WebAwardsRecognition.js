"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const AwardsRecognition = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  flex flex-col gap-4 justify-start items-start w-full my-6 md:my-12 lg:my-16">
      <h1
        style={{
          color: palette?.color,
        }}
        className="uppercase font-extrabold  lg:text-start text-4xl lg:text-5xl xl:text-[72px] 2xl:text-[104px]  tracking-tighter lg:font-bold group"
      >
        <span className="group-hover:text-[#F15C20] transition-all duration-300">awards & recognition</span>
      </h1>
      <p
        className="lg:w-[70%] my-2 text-[16px] lg:text-[18px] font-normal"
        style={{
          color: palette?.dark_contrast_color,
        }}
      >
        Our commitment to excellence is proudly displayed through our numerous awards. As the best Progressive Web Apps development company, we have been recognized for our innovative solutions and client satisfaction.
      </p>
      <div className="w-full grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-y-4">
        <div className="flex justify-center items-center ">
          <img src="/award-1.webp" className="" />
        </div>
        <div className="flex justify-center items-center xl:border-l border-[#8F8F8F]/[0.24]">
          <img src="/award-2.webp" className="" />
        </div >
        <div className="flex justify-center items-center xl:border-l border-[#8F8F8F]/[0.24]">
          <img src="/award-3.webp" className="" />
        </div>
        <div className="flex justify-center items-center xl:border-l border-[#8F8F8F]/[0.24]">
          <img src="/award-4.webp" className="" />
        </div>
        <div className="flex justify-center items-center xl:border-l border-[#8F8F8F]/[0.24]">
          <img src="/award-5.webp" className="" />
        </div>
        <div className="flex justify-center items-center xl:border-l border-[#8F8F8F]/[0.24]">
          <img src="/award-6.webp" className="" />
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;
