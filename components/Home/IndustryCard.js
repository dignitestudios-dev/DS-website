"use client";

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";

const IndustryCard = ({ industry }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      style={{ background: industry?.bgColor }}
      className={`group flex flex-col justify-center items-start gap-4    rounded-2xl py-6 px-8`}
    >
      <img
        src={industry?.image}
        alt={industry?.alt}
        title={industry?.img_title}
        className=""
        // loader={customLoader}
        width={32}
        height={32}
      />
      <h3 className="text-xl font-bold" style={{ color: palette?.color }}>
        {industry?.title}
      </h3>
      <p className="font-normal text-sm " style={{ color: "#8f8f8f" }}>
        {industry?.description}
      </p>
    </div>
  );
};

export default IndustryCard;
