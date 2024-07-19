"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const { palette } = useContext(GlobalContext);
  const [showIcons, setShowIcons] = useState(false);

  const handleShowIcons = () => {
    setShowIcons(true);
  };
  return (
    <main className="w-full h-[105vh] 2xl:h-[80vh] flex flex-col pt-2 md:pt-10  gap-4 justify-start items-center overflow-x-hidden xl:global-padding-horizontal text-center">
      <h1
        style={{
          color: palette?.color,
        }}
        className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px]"
      >
        <span className="text-[#F15C20]">Renowned</span> iOS App <br />{" "}
        Development Services
      </h1>
      <p>Transform your business with highly optimized custom apps.</p>
      <div>
        <Link
          href={"/contact-us"}
          className="flex items-center gap-2 px-5 py-5 text-sm font-bold rounded-full text-white bg-[#F15C20]"
        >
          Discuss Your Project <FiArrowUpRight className="text-xl" />
        </Link>
      </div>

      <div className="w-full mt-60 lg:mt-20 flex">
        {showIcons && (
          <img
            src="/ios_left_img.webp"
            alt=""
            width={327}
            height={119}
            className="w-[327px] h-[119px] hidden lg:block xl:relative lg:-bottom-20 xl:-right-28 2xl:-right-96 slide-right-on-load"
          />
        )}

        <div className="container lg:w-[30%] mx-auto relative">
          <img
            src="/apple_icon_silver.webp"
            alt="apple_icon_silver"
            className={`w-[72px] h-[86px] apple-icon ${showIcons ? "" : 'mt2'}`}
          />
          <img
            src="/person-face.webp"
            onMouseEnter={handleShowIcons}
            alt="person-face"
            className={`w-[182px] h-[182px] person-face z-30 ${showIcons ? "" : 'mt'}`}
          />
          <img
            src="/photos-icon.webp"
            alt="icon1"
            className={`w-[63px] h-[63px] icons ${showIcons && "icon-1"} z-0`}
          />
          <img
            src="/itunes-icon.webp"
            alt="icon2"
            className={`w-[63px] h-[63px] icons ${showIcons && "icon-2"} z-0`}
          />
          <img
            src="/books_app_icon.webp"
            alt="icon3"
            className={`w-[63px] h-[63px] icons ${showIcons && "icon-3"} z-0`}
          />
          <img
            src="/messages_icon.webp"
            alt="icon4"
            className={`w-[63px] h-[63px] icons ${showIcons && "icon-4"} z-0`}
          />
          <img
            src="/app_store_icon.webp"
            alt="icon5"
            className={`w-[63px] h-[63px] icons ${showIcons && "icon-5"} z-0`}
          />
        </div>

        {showIcons && (
          <>
            <img
              src="/toggle_btn.webp"
              alt="icon5"
              width={63}
              height={48}
              className="w-[63px] h-[48px] relative hidden lg:block lg:-top-14 xl:-bottom-5 lg:-right-64 xl:-right-16 2xl:-left-24 slide-left-on-load"
            />
            <img
              src="/ios_right_img.webp"
              alt=""
              width={303}
              height={221}
              className="w-[303px] h-[221px] hidden lg:block xl:relative lg:-bottom-44 xl:-bottom-20 xl:-left-56 2xl:-left-96 slide-left-on-load"
            />
          </>
        )}
      </div>
    </main>
  );
};

export default Hero;
