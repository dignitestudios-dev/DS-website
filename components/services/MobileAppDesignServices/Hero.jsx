'use client'
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const Hero = () => {
    const {theme} = useContext(GlobalContext);
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col items-center gap-6 md:gap-8 pt-12 lg:pt-32 pb-12 text-center relative">
      <h1
        className={`leading-[90.72px] text-3xl md:text-4xl font-extrabold lg:text-[68px] xl:text-[68px] 2xl:text-[104px] hidden lg:block z-20`}
      >
        <span className="text-[#F15C20]">Leading - Edge</span> Mobile App <br /> <div className="mt-10 2xl:mt-20 z-20"> Design Services</div>
      </h1>
      <h1
        className={`text-3xl md:text-4xl font-extrabold lg:text-[68px] xl:text-[68px] 2xl:text-[104px] lg:hidden z-20`}
      >
        <span className="text-[#F15C20]">Leading - Edge</span> Mobile App Design Services
      </h1>
      <h6 className="text-base font-semibold text-[#F15C20] uppercase 2xl:pt-10">Turn your illustrations into realism</h6>
      <p className={`leading-[20.806px] lg:w-[666px] ${theme === 'light' ? 'text-[#5C5C5C]' : 'text-white'} z-20`}>
        Unveiling a world-class company Dignite Studios, to thrive your way with
        exceptional sleek design, outstanding features, highly optimized app
        development process, and firm compliance with top programming protocols.
        Dignite’s goal-oriented team aims to deliver quality-driven UI/UX design
        in a snap.
      </p>
      <img src="/leading-edge-hero-mockup.png" alt="" className="lg:w-[1046.43px] lg:h-[883px] -mt-6 lg:-mt-80 z-10 relative"/>
    </div>
  );
};

export default Hero;
