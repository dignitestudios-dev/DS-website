"use client";
import React, { useContext } from "react";
import InfluentialNavbar from "./InfluentialNavbar";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";

const InfluentialHero = () => {
  const { theme, setIsSidebarOpen } = useContext(GlobalContext);
  const overlay = theme === 'light' ? 'influential-overlay-light':'influential-overlay-dark'
  return (
    <div className={`w-full influential-hero relative h-screen`}>
      {/* <div className={`${overlay} w-full h-full absolute top-0 z-0`}/> */}
      <InfluentialNavbar setIsOpen={setIsSidebarOpen}/>
      <div className="w-full h-full global-padding-horizontal flex flex-col items-center justify-start text-center gap-8 lg:gap-10 py-28 lg:py-40 2xl:pt-60 relative z-20">
        <h1 className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-normal text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px text-white hidden lg:block">
          <span className="text-[#F15C20]">Influential</span> Mobile App <br />
          Consulting Services
        </h1>
        <h1 className="text-4xl lg:text-[68px] 2xl:text-[94px] font-bold lg:leading-[70.72px] lg:hidden text-white">
          <span className="text-[#F15C20]">Influential</span> Mobile App
          Consulting Services
        </h1>
        <p className={`text-base 2xl:text-xl font-medium lg:leading-[24.81px] text-white`}>
          Get a chance to experience top-notch free consultancy from a <br />
          leading mobile platform.
        </p>
        <Link
          href={"/contact-us"}
          className="py-[19px] px-[28px] bg-[#F15C20] text-white rounded-full text-center text-base font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default InfluentialHero;
