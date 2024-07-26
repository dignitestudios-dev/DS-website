"use client";

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const WhyChooseUsCard = ({ title, description, icon, alt, img_title }) => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
      style={{
        color: palette?.color,
      }}
    >
      <img src={icon} alt={alt} title={img_title} className="" width="36px" height="36px" />
      <h3
        className="text-xl  font-semibold"
        style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
      >
        {title}
      </h3>
      <p
        className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
        style={{
          color: "#8F8F8F",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default WhyChooseUsCard;
