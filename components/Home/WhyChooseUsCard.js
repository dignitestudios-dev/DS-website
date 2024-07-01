"use client";

import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const WhyChooseUsCard = ({ title, description, icon, alt, image_title }) => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-12 md:py-3"
      style={{
        color: palette?.color,
      }}
    >
      <img src={icon} alt={alt} className="" title={image_title} width="36px" height="36px" />
      <h2
        className="text-xl  font-semibold"
        style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
      >
        {title}
      </h2>
      <p
        className="text-sm text-center font-normal leading-[16.14px] tracking-wider "
        style={{
          color: "#8f8f8f",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default WhyChooseUsCard;
