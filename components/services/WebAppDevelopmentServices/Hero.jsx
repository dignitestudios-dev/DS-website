"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <main className="w-full global-padding-horizontal flex flex-col pt-2 md:py-10 relative gap-4 justify-start items-center">
      <h1
        style={{
          color: palette?.color,
        }}
        className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px]"
      >
        Purpose-Driven {" "}
        <span className="text-[#F15C20]">Web Application</span> Development Services
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
      
    </main>
  );
};

export default Hero;
