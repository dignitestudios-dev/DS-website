'use client'

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useEffect, useState } from "react";


const ServiceCard = ({ title, desc, light_icon, dark_icon, count }) => {
  const { theme, mouseCursor, disableMouseCursor } = useContext(GlobalContext);
  const [hoverImage, setHoverImage] = useState(dark_icon);

  useEffect(() => {
    setHoverImage(theme == "dark" ? light_icon : dark_icon)
  }, [theme])

  useEffect(() => {
    setHoverImage(dark_icon)
  }, [])


  return (
    <div
      className={`group transition-all duration-300 border border-orange-500 lg:border-0 rounded-3xl lg:rounded-none border-collapse flex flex-col ${theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
        } justify-start items-start gap-4 py-3 px-3 lg:p-8 lg:hover:bg-[#F15C20]  transition-all duration-150 ${count == 0
          ? "lg:border-b "
          : count == 1
            ? "lg:border-b lg:border-r lg:border-l "
            : count == 2
              ? "lg:border-b"
              : count == 4 && "lg:border-r lg:border-l"
        }`}

      onMouseOver={(e) => {
        setHoverImage(light_icon);
      }}
      onMouseOut={() => {
        setHoverImage(theme == "light" ? dark_icon : light_icon);
      }}
    >
      <div className="w-full flex flex-col gap-2 md:gap-4 justify-start items-start">

        <img src={hoverImage} alt="UIUX" className="hidden lg:block text-white" width="40px" height="40px" />
        <img src={dark_icon} alt="UIUX" className="block lg:hidden text-white" width="32px" height="32px" />

        {/* {hover && <span>fjef</span>} */}
        <h1
          className={`font-bold text-xs md:text-[24px] ${theme == "dark"
            ? "text-white lg:group-hover:text-white"
            : "text-black lg:group-hover:text-white"
            }`}
        >
          {title}
        </h1>
        <p
          className={`text-[9px] md:text-sm  leading-[18.83px] ${theme == "dark"
            ? "text-gray-400 lg:group-hover:text-gray-200"
            : "text-black lg:group-hover:text-gray-200"
            }`}
        >
          {desc}
        </p>
      </div>

    </div>
  );
};

export default ServiceCard;
