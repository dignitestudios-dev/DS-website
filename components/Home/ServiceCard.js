'use client'

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useState } from "react";


const ServiceCard = ({ title, desc, icon, count }) => {
  const [hover, setHover] = useState(false);
  const { theme, mouseCursor, disableMouseCursor } = useContext(GlobalContext);

  return (
    <div
      className={`group flex flex-col ${theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
        } justify-center items-start gap-3 py-3 px-3 lg:p-6 hover:bg-[#F15C20]  transition-all duration-150 ${count == 0
          ? "lg:border-b "
          : count == 1
            ? "lg:border-b lg:border-r lg:border-l "
            : count == 2
              ? "lg:border-b"
              : count == 4 && "lg:border-r lg:border-l"
        }`}
      onMouseMove={(e) => {
        mouseCursor("Checking", e);
      }}
      onMouseOver={(e) => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
        disableMouseCursor();
      }}
    >
      <img src={icon} alt="UIUX" className="text-white" />
      {/* {hover && <span>fjef</span>} */}
      <h1
        className={`font-bold text-[26px] ${theme == "dark"
          ? "text-white group-hover:text-white"
          : "text-black group-hover:text-white"
          }`}
      >
        {title}
      </h1>
      <p
        className={`text-xs  leading-[18.83px] ${theme == "dark"
          ? "text-gray-400 group-hover:text-gray-200"
          : "text-black group-hover:text-gray-200"
          }`}
      >
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
