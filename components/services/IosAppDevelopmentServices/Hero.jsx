"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <main className="w-full  flex flex-col pt-2 md:pt-10  gap-4 justify-start items-center">
      <h1
        style={{
          color: palette?.color,
        }}
        className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px]"
      >
        <span className="text-[#F15C20]">Illustrious</span> iOS App <br /> Development Services
      </h1>
      <p>Robust your Apple Store with highly optimized custom apps.</p>
      <div>
        <Link
          href={"/contact-us"}
          className="flex items-center gap-2 px-5 py-5 text-sm font-bold rounded-full text-white bg-[#F15C20]"
        >
          Discuss Your Project <FiArrowUpRight />
        </Link>
      </div>
    </main>
  );
};

export default Hero;
