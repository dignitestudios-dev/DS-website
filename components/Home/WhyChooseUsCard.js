'use client'

import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const WhyChooseUsCard = ({ title, description, icon }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className=" flex flex-col justify-start items-center gap-y-4 px-2 md:px-4 lg:px-8 py-3 md:p-6"
      style={{
        color: palette?.color,
      }}
    >
      <img src={icon} alt="" className="" />
      <h2 className="text-xl  font-semibold">{title}</h2>
      <p
        className="text-xs  "
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
