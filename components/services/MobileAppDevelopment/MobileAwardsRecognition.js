"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const MobileAwardsRecognition = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-6 justify-start items-start w-full my-6 md:my-12 lg:my-24">
      <h2
        style={{
          color: palette?.color,
        }}
        className="text-3xl font-extrabold lg:text-4xl xl:text-[72px] 2xl:text-[104px] tracking-tighter lg:font-bold uppercase group"
      >
        <span className="group-hover:text-[#F15C20] transition-all duration-300">
          awards & recognition
        </span>
      </h2>
      <p
        className="lg:w-[70%] my-2 text-[16px] lg:text-[18px] font-normal"
        style={{
          color: palette?.dark_contrast_color,
        }}
      >
        Our commitment to excellence is proudly displayed through our numerous
        awards. As the best mobile apps development company, we have been
        recognized for our innovative solutions and client satisfaction.
      </p>
      <div className="w-full grid grid-cols-6 md:grid-cols-6 mt-4 lg:grid-cols-6 gap-y-4">
        <div className="flex justify-center items-center ">
          <img
            src="/Horizon-Interactive-Awards.webp"
            className=""
            alt="Horizon Interactive Awards"
          />
        </div>
        <div className="flex justify-center items-center xl:border-l border-[#8F8F8F]/[0.24]">
          <img
            src="/WEB-EXCELLENCE-AWARDS.webp"
            className=""
            alt="WEB EXCELLENCE AWARDS"
          />
        </div>
        <div className="flex justify-center items-center xl:border-l border-[#8F8F8F]/[0.24]">
          <img
            src="/rank-watch-awards.webp"
            className=""
            alt="rank watch Awards"
          />
        </div>
        <div className="flex justify-center items-center xl:border-l border-[#8F8F8F]/[0.24]">
          <img
            src="/clutch-top-developer-awards.webp"
            className=""
            alt="Clutch Top Developer Awards"
          />
        </div>
        <div className="flex justify-center items-center xl:border-l border-[#8F8F8F]/[0.24]">
          <img
            src="/top-eveloper-awards.webp"
            className=""
            alt="top developer Awards"
          />
        </div>
        <div className="flex justify-center items-center xl:border-l border-[#8F8F8F]/[0.24]">
          <img src="/dotcomm-awards.webp" className="" alt="dotCOMM Awards" />
        </div>
      </div>
    </div>
  );
};

export default MobileAwardsRecognition;
