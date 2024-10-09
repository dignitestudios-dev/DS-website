"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const AwardsRecognition = () => {
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-6 justify-start items-start w-full padding-left-0"> 
      <div className="w-full grid grid-cols-6 md:grid-cols-6 mt-4 lg:grid-cols-6 gap-y-4">
        <div className="flex justify-center items-center ">
          <img
            src="/Horizon-Interactive-Awards.webp"
            className=""
            alt="Horizon Interactive Awards"
          />
        </div>
        <div className="flex justify-center items-center ">
          <img
            src="/WEB-EXCELLENCE-AWARDS.webp"
            className=""
            alt="WEB EXCELLENCE AWARDS"
          />
        </div>
        <div className="flex justify-center items-center ">
          <img
            src="/rank-watch-awards.webp"
            className=""
            alt="rank watch Awards"
          />
        </div>
        <div className="flex justify-center items-center ">
          <img
            src="/clutch-top-developer-awards.webp"
            className=""
            alt="Clutch Top Developer Awards"
          />
        </div>
        <div className="flex justify-center items-center ">
          <img
            src="/top-eveloper-awards.webp"
            className=""
            alt="top developer Awards"
          />
        </div>
        <div className="flex justify-center items-center ">
          <img src="/dotcomm-awards.webp" className="" alt="dotCOMM Awards" />
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;
