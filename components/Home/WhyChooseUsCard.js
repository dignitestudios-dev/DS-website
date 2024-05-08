'use client'

import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const WhyChooseUsCard = ({ title, description, icon }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className="border lg:border-none border-[#F15C20] rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 px-2 md:px-4 lg:px-12 py-3"
      style={{
        color: palette?.color,
      }}
    >
      <img src={icon} alt="" className="" width="32px" height="32px" />
      <h2 className="text-xs md:text-xl  font-semibold">{title}</h2>
      <p
        className="text-[9px] md:text-xs text-center "
        style={{
          color: palette?.light_contrast_color,
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default WhyChooseUsCard;
