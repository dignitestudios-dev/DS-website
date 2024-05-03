'use client'

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useEffect, useState } from "react";


const ServiceCard = ({ title, desc, light_icon, dark_icon, count }) => {
  const { theme, mouseCursor, disableMouseCursor } = useContext(GlobalContext);
  const [hoverImage, setHoverImage] = useState(dark_icon);

  useEffect(() => {
    setHoverImage(theme == "dark" || count == 0 || count == 2 || count == 4 ? light_icon : dark_icon)
  }, [theme])

  useEffect(() => {
    setHoverImage(dark_icon)
  }, [])


  return (
    <div
      className={`group transition-all duration-300 flex flex-col ${theme == "dark" ? "border-[#1c1c1c]" : "border-gray-200"
        } justify-start items-start gap-4 py-3 px-3 lg:p-8 hover:bg-[#F15C20]  transition-all duration-150 ${count == 0
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
      <div className="w-full flex flex-col gap-4 justify-start items-start">

        <img src={hoverImage} alt="UIUX" className="text-white" />
        {/* {hover && <span>fjef</span>} */}
        <h1
          className={`font-bold text-[24px] ${theme == "dark"
            ? "text-white group-hover:text-white"
            : "text-black group-hover:text-white"
            }`}
        >
          {title}
        </h1>
        <p
          className={`text-sm  leading-[18.83px] ${theme == "dark"
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

export default ServiceCard;
