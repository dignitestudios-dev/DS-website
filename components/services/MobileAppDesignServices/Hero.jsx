"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const Hero = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col items-center gap-6 md:gap-8 pt-2 md:pt-20 pb-12 text-center relative z-10">
      <h1
        className={`leading-[90.72px] text-3xl md:text-4xl font-extrabold lg:text-[68px] xl:text-[68px] 2xl:text-[84px] hidden lg:block z-20 2xl:leading-[40.72px]`}
      >
        <span className="text-[#F15C20]">Leading - Edge</span> Mobile App <br />{" "}
        <div className="mt-10 2xl:mt-16 z-20"> Design Services</div>
      </h1>
      <h1
        className={`text-3xl md:text-4xl font-extrabold lg:text-[68px] xl:text-[68px] 2xl:text-[104px] lg:hidden z-20`}
      >
        <span className="text-[#F15C20]">Leading - Edge</span> Mobile App Design
        Services
      </h1>
      <h6 className="text-sm font-semibold bg-[#F15C20] text-white p-2 rounded uppercase 2xl:mt-4">
        Turn your illustrations into realism
      </h6>
      <img
        src="/Mobile-app-design-services.webp"
        alt=" two mockup screens show the mobile app design services, with multiple icons revolving around them"
        title="Mobile app design services"
        className="lg:w-[1046.43px] lg:h-[883px] -mt-6 lg:-mt-80 z-10 relative"
      />
    </div>
  );
};

export default Hero;
