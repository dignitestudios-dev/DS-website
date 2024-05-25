"use client";

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";

const ProjectCard = ({
  title,
  description,
  image,
  mobile_image,
  projectLink,
  logo,
  webLink,
  appLink,
  googleLink,
}) => {
  const { palette, mouseCursor, disableMouseCursor, theme } =
    useContext(GlobalContext);

  console.log(image, mobile_image);

  return (
    <Link
      href={projectLink}
      className={`group w-full md:h-[326px]  hover:bg-[#F15C20] transition-all duration-500  py-[28px] px-[20px] flex flex-col-reverse md:flex-row justify-start  items-start gap-2 lg:mb-12 relative ${
        theme == "dark" ? "bg-[#1c1c1c]" : "bg-[#f9f9f9]"
      } rounded-[32px] `}
    >
      <div className="w-full md:w-[65%] h-full flex flex-col justify-start gap-6 my-1 items-start md:px-2">
        <div className="w-full flex justify-start gap-2 items-center pr-1">
          <img src={logo} alt="app-logo" />
          <h3 className="text-xl lg:text-2xl xl:text-[22px] font-semibold group-hover:text-white">
            {title}
          </h3>
        </div>
        <p
          className={`text-xs lg:text-sm xl:text-[16px] ${
            theme == "dark" ? "text-[#b4b4b4]" : "text-[#5c5c5c]"
          } group-hover:text-gray-100 font-normal `}
        >
          {description}
        </p>
        <div className="w-full mt-auto flex justify-start gap-2 items-center pr-1">
          {googleLink && (
            <Link href={googleLink}>
              <img src="/google_btn.png" />
            </Link>
          )}
          {appLink && (
            <Link href={appLink}>
              <img src="/apple_btn.png" />
            </Link>
          )}
          {webLink && (
            <Link
              href={webLink}
              className={` w-auto h-[38px] px-4 text-sm   rounded-[10px]  flex items-center justify-center gap-2 bg-[#151515] text-white
               `}
            >
                <img src="/website_icon_white.svg" className="w-4" alt="Google play icon" />
              <span>Website</span>
            </Link>
          )}
        </div>
      </div>

      <div
        className={`w-full hidden md:block md:w-[35%] transition-all duration-300 ${image} bg-contain bg-no-repeat flex  justify-center  md:w-[194px] md:h-[355px] static md:absolute  md:-top-16 right-0 group-hover:top-10 group-hover:right-4 group-hover:scale-[1.7] lg:justify-start items-start  `}
      >
        {/* <img
          layout="responsive"
          src={image}
          alt={title}
          className={`group-hover:w-auto group-hover:h-auto  group-hover:md:absolute    hover:brightness-80 transition-all duration-500 `}
        /> */}
      </div>

    </Link>
  );
};

export default ProjectCard;
