'use client'

import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const IosAppServiceCard = ({ title, desc, light_icon, dark_icon, count }) => {
  const { theme, palette, mouseCursor, disableMouseCursor } =
    useContext(GlobalContext);
  const [hoverImage, setHoverImage] = useState(dark_icon);

  useEffect(() => {
    setHoverImage(theme == "dark" ? light_icon : dark_icon);
  }, [theme]);

  useEffect(() => {
    setHoverImage(dark_icon);
  }, []);
  return (
    <div
      
      className={`group w-full flex flex-col gap-2 rounded-2xl ${theme == "dark" ? "bg-[#1c1c1c]" : "bg-[#f9f9f9]"} hover:bg-[#F15C20] justify-start items-start p-3 md:py-3 md:px-3 lg:px-8 lg:py-12`}
      onMouseOver={(e) => {
        setHoverImage(light_icon);
      }}
      onMouseOut={() => {
        setHoverImage(theme == "light" ? dark_icon : light_icon);
      }}
    >
      <div className="w-full flex flex-col gap-2 md:gap-4 justify-start items-start">
        {/* <Image
          src={hoverImage}
          alt="UIUX"
          className="block text-white"
          width={40}
          height={40}
        /> */}

        {/* {hover && <span>fjef</span>} */}
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
          className={`text-sm  leading-[18.83px] ${
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

export default IosAppServiceCard;
