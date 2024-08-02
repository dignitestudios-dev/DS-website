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
  normalImage,
  projectLink,
  logo,
  webLink,
  appLink,
  googleLink,
}) => {
  const { palette, mouseCursor, disableMouseCursor, theme } =
    useContext(GlobalContext);

  return (
    <Link
      href={projectLink}
      className={`group w-full h-[240px] lg:h-[326px]  hover:bg-[#F15C20] transition-all duration-500  p-[16px] lg:py-[28px] lg:px-[20px] flex flex-col lg:flex-row justify-start  items-start gap-2 lg:mb-6 relative ${
        theme == "dark" ? "bg-[#1c1c1c]" : "bg-[#f9f9f9]"
      } rounded-[32px] `}
    >
      <div className="w-full h-[0px] flex lg:hidden justify-center items-start relative ">
        <Image
          src={normalImage}
          className="absolute -top-12 right-0 h-[200px]"
          alt={title}
          width={200}
          height={200}
          loader={customLoader}
          title="app-logo"
        />
      </div>
      <div className="w-full lg:w-[65%] h-full flex flex-col justify-start relative gap-6 my-1 items-start md:px-2">
        <div className="w-full flex justify-start gap-2 items-center pr-1">
          <Image
            src={logo}
            alt="case-study-image"
            width={65}
            loader={customLoader}
            height={65}
            title="case study image"

            // className="w-[32px] h-[32px] lg:w-[45px] xl:w-[65px] lg:h-[45px] xl:h-[65px]"
          />
          <p className="text-lg md:text-sm lg:text-2xl xl:text-[22px] font-semibold group-hover:text-white">
            {title}
          </p>
        </div>
        <p
          className={`text-xs md:text-[10px] w-[70%] md:w-[60%] lg:w-[85%] lg:text-sm xl:text-[16px] ${
            theme == "dark" ? "text-[#b4b4b4]" : "text-[#5c5c5c]"
          } group-hover:text-gray-100 font-normal `}
        >
          {description}
        </p>
        <div className="w-full absolute bottom-0 left-2 mt-auto flex justify-start gap-2 items-center pr-1">
          {googleLink && (
            <Link href={googleLink}>
              <Image
                loader={customLoader}
                width={134}
                height={40}
                src="/google_play_btn.png"
                // className="h-[40.62px]"
                alt="google_play_button"
                title="google_play_button"
              />
            </Link>
          )}
          {appLink && (
            <Link href={appLink}>
              <Image
                loader={customLoader}
                width={134}
                height={40}
                src="/apple_store_btn.png"
                // className="h-[40.62px]"
                alt="app_store_button"
                title="app_store_button"
              />
            </Link>
          )}
          {webLink && (
            <Link href={webLink}>
              <Image
                loader={customLoader}
                width={134}
                height={40}
                src="/website_btn.png"
                // className="h-[40.62px]"
                alt="Website btn play icon"
                title="Website btn play icon"
              />
            </Link>
          )}
        </div>
      </div>

      <div
        className={`w-full hidden lg:block lg:w-[35%] transition-all duration-300 ${image} bg-contain bg-no-repeat flex  justify-center  md:w-[191px]  static md:absolute ${
          title == "MaidSimpl"
            ? "md:h-[364px] md:-top-[2.7rem]"
            : "md:h-[355px] md:-top-8"
        }  right-0 group-hover:top-10 2xl:group-hover:top-2  group-hover:right-4 group-hover:scale-[1.5] 2xl:group-hover:scale-[1.4] lg:justify-start items-start  `}
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
