'use client'

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const IndustryCard = ({ industry }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      style={{ background: industry?.bgColor }}
      className={`group flex flex-col justify-center items-start gap-4    rounded-2xl py-6 px-8`}
    >
      <img src={industry?.image} alt="" className="" width="32px" height="32px" />
      <h5 className="text-xl font-bold" style={{ color: palette?.color }}>
        {industry?.title}
      </h5>
      <p
        className="font-normal text-sm "
        style={{ color: palette?.dark_contrast_color }}
      >
        {industry?.description}
      </p>
    </div>
  );
};

export default IndustryCard;
