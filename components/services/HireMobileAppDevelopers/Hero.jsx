"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";
import HeroAnimation from "./HeroAnimation";
import ContactButton from "@/components/global/ContactButton";

const Hero = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full relative">
      <main className="w-full h-full flex flex-col items-center gap-6 md:gap-8 pt-16 pb-0 text-center relative z-10">
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
          <ContactButton text1={"Get A Quote"} text2={"Let's talk"} />
        </div>
      </main>

      <div className="w-full hidden lg:block z-0 relative xl:w-[70%] mx-auto h-screen lg:h-[115vh] xl:h-screen 2xl:h-[70vh] -top-56">
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-0.webp"
          alt="hire mobile app developers shows visual animation representing mobile app developers"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[217.76px] h-[286.22px]"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-1.webp"
          alt="hire mobile app developers shows visual animation representing mobile app developers"
          className="absolute top-52 left-36 2xl:left-56 w-[225.81px] h-[311.92px] slide-right-on-load"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-2.webp"
          alt="hire mobile app developers shows visual animation representing mobile app developers"
          className="absolute bottom-20 left-[19.5%] 2xl:left-[23%] w-[239.89px] h-[261.3px] slide-right-on-load"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-3.webp"
          alt="hire mobile app developers shows visual animation representing mobile app developers"
          className="absolute left-[35%] bottom-4 transform w-[282.65px] h-[216.39px] slide-up-on-load"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-4.webp"
          alt="hire mobile app developers shows visual animation representing mobile app developers"
          className="absolute bottom-6 2xl:bottom-10 right-16 2xl:right-56 slide-left-on-load w-[342.88px] h-[261.54px]"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-5.webp"
          alt="hire mobile app developers shows visual animation representing mobile app developers"
          className="absolute lg:right-[23.5%] xl:right-[24%] 2xl:right-[29.5%] lg:top-[58%] xl:top-[58%] 2xl:top-[56%] transform -translate-y-1/2 w-[186.41px] h-[278.8px]"
        />
        <img
          src="/hire-mobile-app-dev-hero-animation-mockup-6.webp"
          alt="hire mobile app developers shows visual animation representing mobile app developers"
          className="absolute top-32 right-24 2xl:right-56 w-[227.13px] h-[346.94px] slide-left-on-load"
        />
        <img
          src="/hire-mobile-app-dev-rocket-img.webp"
          alt="hire mobile app developers shows visual animation representing mobile app developers"
          className="h-[370px] w-[192px] absolute left-[30%] 2xl:left-[33%] rocket-animation top-[30%] transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <HeroAnimation />
    </div>
  );
};

export default Hero;
