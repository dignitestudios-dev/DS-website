"use client";

import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const ProcessCard = ({ title, desc, count, num }) => {
  const { theme, mouseCursor, disableMouseCursor } = useContext(GlobalContext);
  //   const [hoverImage, setHoverImage] = useState(dark_icon);

  //   useEffect(() => {
  //     setHoverImage(theme == "dark" ? light_icon : dark_icon)
  //   }, [theme])

  //   useEffect(() => {
  //     setHoverImage(dark_icon)
  //   }, [])

  return (
    <div
      className={`group transition-all duration-300 border-[1px] ${
        theme == "dark" ? "border-[#393939]" : "border-[#e7e7e7]"
      } lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${
        theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
      } justify-start items-start gap-2 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 ${
        count == 0
          ? "lg:border-b "
          : count == 1
          ? "lg:border-b lg:border-r-0 xl:border-r lg:border-l "
          : count == 2
          ? "lg:border-b lg:border-r xl:border-r-0" : count === 3 ? "lg:border-b"
          : count == 4 ? "lg:border-r lg:border-l-0 xl:border-l lg:border-b" : count == 5 ? 'lg:border-b' : count == 6 && 'lg:border-r'
      }`}
    >
      <div className="w-full flex flex-col gap-2 md:gap-4 justify-start items-start">
        <p className="text-[40px] font-extrabold text-[#B4B4B499]">{num}</p>
        <h1
          className={`font-bold text-[28px] ${
            theme == "dark"
              ? "text-white group-hover:text-white"
              : "text-black group-hover:text-white"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-sm  leading-[16.14px] ${
            theme == "dark"
              ? "text-gray-200 group-hover:text-gray-200"
              : "text-[#8f8f8f] group-hover:text-gray-200"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
