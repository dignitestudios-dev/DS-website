"use client";

import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";

const WhyChooseUsCard = ({ title, description, icon, alt, image_title }) => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-12 md:py-3"
      style={{
        color: palette?.color,
      }}
    >
      <Image
        src={icon}
        alt={alt}
        title={image_title}
        className=""
        loader={customLoader}
        width={36}
        height={36}
      />
      <h3
        className="text-xl  font-semibold"
        style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
      >
        {title}
      </h3>
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
