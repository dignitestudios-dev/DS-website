"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import HeroAnimation from "./HeroAnimation";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Hero = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <main className="w-full ">
      <div className="w-full global-padding-horizontal flex flex-col pt-2 md:py-10 relative gap-4 justify-start items-center">
        <h1
          style={{
            color: palette?.color,
          }}
          className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px]"
        >
          Purpose-Driven <span className="text-[#F15C20]">Web Application</span>{" "}
          Development Services
        </h1>
        <h2
          className={`text-base font-normal text-center ${
            theme === "light" ? "text-[#5C5C5C]" : "text-[#8F8F8F]"
          }`}
        >
          Your idea, our solution.
        </h2>
        <div>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] text-white w-[164px] h-[64px] rounded-full text-center flex items-center gap-1 justify-center font-semibold"
          >
            Get A Quote <FiArrowUpRight className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* <div className="w-[266px] h-[215px] bg-gra-200 rounded-[18px] p-3 pl-0 workflow-box flex flex-col items-start justify-start relative">
        <div className="w-full flex items-center justify-between mb-5 pl-5">
          <span className="font-bold text-sm text-black">Users Activity</span>
          <span className="text-[11px] text-gray-400 flex items-center">
            This Week <MdOutlineArrowDropDown className="text-lg" />
          </span>
        </div>
        <div className="w-full flex items-end justify-between gap-x-4 px-3">
          <div className="border">
            <div className="flex flex-col items-center gap-y-3 mr-4">
              <span className="text-[10px] text-gray-400">300</span>
              <span className="text-[10px] text-gray-400">200</span>
              <span className="text-[10px] text-gray-400">100</span>
              <span className="text-[10px] text-gray-400">0</span>
            </div>
          </div>
          <div className="relative w-[7px] h-[98px] bg-[#FFD0BB] flex justify-center items-end overflow-hidden rounded-t-full">
            <div className="bar1 w-[50px] h-[87px] bg-[#A851FF] rounded-t-full"></div>
          </div>
          <div className="relative w-[7px] h-[36px] bg-[#FFD0BB] flex justify-center items-end overflow-hidden rounded-t-full">
            <div className="bar2 w-[50px] h-[27px] bg-[#A851FF] rounded-t-full"></div>
          </div>
          <div className="relative w-[7px] h-[68px] bg-[#FFD0BB] flex justify-center items-end overflow-hidden rounded-t-full">
            <div className="bar3 w-[50px] h-[51px] bg-[#A851FF] rounded-t-full"></div>
          </div>
          <div className="relative w-[7px] h-[68px] bg-[#FFD0BB] flex justify-center items-end overflow-hidden rounded-t-full">
            <div className="bar4 w-[50px] h-[51px] bg-[#A851FF] rounded-t-full"></div>
          </div>
          <div className="relative w-[7px] h-[46px] bg-[#FFD0BB] flex justify-center items-end overflow-hidden rounded-t-full">
            <div className="bar5 w-[50px] h-[36px] bg-[#A851FF] rounded-t-full"></div>
          </div>
          <div className="relative w-[7px] h-[36px] bg-[#FFD0BB] flex justify-center items-end overflow-hidden rounded-t-full">
            <div className="bar2 w-[50px] h-[27px] bg-[#A851FF] rounded-t-full"></div>
          </div>
          <div className="relative w-[7px] h-[68px] bg-[#FFD0BB] flex justify-center items-end overflow-hidden rounded-t-full">
            <div className="bar3 w-[50px] h-[51px] bg-[#A851FF] rounded-t-full"></div>
          </div>
        </div>
        <div className="h-[0.5px] bg-gray-300 w-[176.45px] float-end absolute right-3 bottom-[70%] z-0" />
        <div className="h-[0.5px] bg-gray-300 w-[176.45px] float-end absolute right-3 bottom-[55%] z-0" />
        <div className="h-[0.5px] bg-gray-300 w-[176.45px] float-end absolute right-3 bottom-[40%] z-0" />

        <div className="w-full">
          <div className="h-[0.5px] bg-gray-300 w-[176.45px] float-end" />
        </div>
        <div className="w-full">
          <div className="w-[176.45px] float-end mt-1 flex items-center justify-around pl-2 pr-1">
            <span className="text-[10px] text-gray-300">M</span>
            <span className="text-[10px] text-gray-300">T</span>
            <span className="text-[10px] text-gray-300">W</span>
            <span className="text-[10px] text-gray-300">T</span>
            <span className="text-[10px] text-gray-300">F</span>
            <span className="text-[10px] text-gray-300">S</span>
            <span className="text-[10px] text-gray-300">S</span>
          </div>
        </div>
      </div> */}

      <HeroAnimation />

      {/* <div className="w-[60%] lg:h-[78vh] xl:h-[82vh] inset-0 m-auto z-0 rounded-[100%] shadow-purple"></div>
      <div className="w-[60%] lg:h-[78vh] xl:h-[82vh] inset-0 m-auto z-0 rounded-[100%] shadow-yellow"></div> */}
    </main>
  );
};

export default Hero;
