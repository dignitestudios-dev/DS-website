"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const IosAppWorkflowCard = ({ title, desc, count }) => {
  const { palette, theme } = useContext(GlobalContext);

  return (
    <div
      className={`group transition-all duration-300  xl:h-[280px] border-[1px]  ${theme =="dark" ? "border-[#393939]": "border-[#e7e7e7]"} lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
    } justify-center items-start gap-4 p-4 md:py-3 md:px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 ${count == 0
      ? "lg:border-b "
      : count == 1
        ? "lg:border-b lg:border-r lg:border-l "
        : count == 2
          ? "lg:border-b"
          : count == 4 && "lg:border-r lg:border-l"
    }`}
    >
            <div className="w-full flex flex-col  justify-start items-start">

        <h1 className="text-[40px] font-extrabold text-[#b4b4b4]/[0.6]" >0{count+1}.</h1>
        <h1
          className={`font-bold text-[24px] ${
            theme == "dark"
              ? "text-white group-hover:text-white"
              : "text-black group-hover:text-white"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-sm mt-2 leading-[18.83px] ${
            theme == "dark"
              ? "text-gray-400 group-hover:text-gray-200"
              : "text-black group-hover:text-gray-200"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default IosAppWorkflowCard;
