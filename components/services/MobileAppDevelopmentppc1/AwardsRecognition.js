"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const AwardsRecognition = () => {
  const { theme,setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-3 justify-start items-start w-full padding-left-0">
      <div className='w-full flex items-center justify-center'>
      <p
            className={` font-[600] text-sm z-10 ${
              theme === "light" && "text-[#5C5C5C]"
            }`}
          >Awards & Recognition</p>
        </div> 
      <div className="w-full flex items-center justify-center gap-y-4">   
        <div className="flex justify-center w-20 h-20 items-center ">
          <img
            src="/Horizon-Interactive-Awards.webp"
            className=""
            alt="Horizon Interactive Awards"
          />
        </div>
        <div className="flex justify-center w-20 h-20 items-center ">
          <img
            src="/WEB-EXCELLENCE-AWARDS.webp"
            className=""
            alt="WEB EXCELLENCE AWARDS"
          />
        </div>
        <div className="flex justify-center w-20 h-20 items-center ">
          <img
            src="/rank-watch-awards.webp"
            className=""
            alt="rank watch Awards"
          />
        </div>
        <div className="flex justify-center w-20 h-20 items-center ">
          <img
            src="/clutch-top-developer-awards.webp"
            className=""
            alt="Clutch Top Developer Awards"
          />
        </div>
        <div className="flex justify-center w-20 h-20 items-center ">
          <img
            src="/top-eveloper-awards.webp"
            className=""
            alt="top developer Awards"
          />
        </div>
        <div className="flex justify-center w-20 h-20 items-center ">
          <img src="/dotcomm-awards.webp" className="" alt="dotCOMM Awards" />
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;
