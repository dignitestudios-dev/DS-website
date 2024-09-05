"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";

const Hero = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full text-center relative pb-20 pt-2 md:pt-10 global-padding-horizontal flex flex-col items-center">
      <h1 className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px] z-10">
        <span className="text-[#F15C20]">Hire</span> Mobile App <br />
        Developers
      </h1>
      <p
        className={`text-base font-medium mt-6 z-10 ${
          theme === "light" && "text-[#5c5c5c]"
        }`}
      >
        Integrate your mobile applications with our pre-vetted and <br />{" "}
        highly-ranked senior developers.
      </p>

      <div className="mt-10 z-20">
        <Link
          href={"/contact-us"}
          className="bg-[#F15C20] px-7 py-5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1"
        >
          Get a quote <FiArrowUpRight className="text-lg" />
        </Link>
      </div>
      <div className="w-full z-0 relative lg:w-[80%] mx-auto h-screen -top-32">
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-0.png"
          alt=""
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[217.76px] h-[286.22px]"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-1.png"
          alt=""
          className="absolute top-36 left-32 w-[219.89px] h-[217.4px] slide-right-on-load"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-2.png"
          alt=""
          className="absolute bottom-28 left-[14%] w-[219.89px] h-[251.3px] slide-right-on-load"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-3.png"
          alt=""
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[173.79px] h-[216.39px] slide-up-on-load"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-4.png"
          alt=""
          className="absolute bottom-10 right-8 slide-left-on-load"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-5.png"
          alt=""
          className="absolute right-[22%] top-[57%] transform -translate-y-1/2"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-6.png"
          alt=""
          className="absolute top-28 right-14 w-[227.13px] h-[296.94px] slide-left-on-load"
        />
        <img
          src="/hire-mobile-app-dev-rocket-img.png"
          alt=""
          className="h-[370px] w-[192px] absolute left-[30%] rocket-animation top-[30%] transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Hero;
