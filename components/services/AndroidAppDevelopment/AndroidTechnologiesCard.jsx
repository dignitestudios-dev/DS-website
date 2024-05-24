'use client'

import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const AndroidTechnologiesCard = ({ title, desc, icon, count }) => {
  const { theme, palette, mouseCursor, disableMouseCursor } =
    useContext(GlobalContext);

 
  return (
    <div
      
      className={`group w-full flex flex-col gap-2 rounded-2xl ${theme == "dark" ? "hover:bg-[#1c1c1c]" : "hover:bg-[#f9f9f9]"}  justify-start items-start md:py-3 md:px-3 lg:p-8`}
      
     
    >
      <div className="w-full flex flex-col gap-2  justify-start items-start">
        <img
          src={icon}
          alt="UIUX"
          className="block text-white"
        />

        {/* {hover && <span>fjef</span>} */}
        <h1
          className={`font-bold text-[24px] ${
            theme == "dark"
              ? "text-white "
              : "text-black "
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-sm  leading-[18.83px] ${
            theme == "dark"
              ? "text-gray-400 "
              : "text-black "
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default AndroidTechnologiesCard;
