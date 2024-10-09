"use client";

import React, { useContext } from "react";

import Image from "next/image";
import customLoader from "@/lib/custom-loader";
import { GlobalContext } from "@/context/GlobalContext";

const WhyChooseUsCard = ({ title, description, icon, alt, image_title }) => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={` ${theme === "dark" ? "text-white bg-[#2d2d2d] " : "bg-[#FBFBFB]  border-[#F15C20]"
              } border lg:border-none    rounded-3xl  flex flex-col justify-start items-center gap-y-4  px-10 py-10`}
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
        className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
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
