"use client";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="w-full h-full flex flex-col items-center gap-6 md:gap-8 pt-16 pb-0 text-center relative z-10">
      <h1 className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px] z-10">
        <span className="text-[#F15C20]">Top-Notch Mobile</span> <br />{" "}
        Application Testing Services
      </h1>
      <p className="text-base font-medium mt-6 z-10">
        Mitigate your mobile app with risk-free innovative testing services
      </p>
      <div className="relative w-full h-[200px] lg:h-[500px]" >
      <img
        width={1400}
        height={709}
        loader={customLoader}
        priority="high"
        src="/mobile-application-testing.png"
        alt=" mobile application testing services"
        title="mobile application testing services"
        className=" absolute  lg:-top-60 mx-auto  z-10"
      />
      </div>
    </main>
  );
};

export default Hero;
