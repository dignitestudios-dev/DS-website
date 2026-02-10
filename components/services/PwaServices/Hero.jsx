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
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-full text-center relative pb-20 pt-28 md:pt-40 global-padding-horizontal flex flex-col items-center">
      <h1
        className="capitalize text-center text-[16px] 2xl:text-[20px] font-medium mb-4"
        style={{
          color: theme == "dark" ? "#B4B4B4" : "#8F8F8F",
        }}
      >
        Progressive Web App Development Services
      </h1>
      <h2 className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px] z-10">
        <span className="text-[#F15C20]">Come</span> Aboard And Build <br />
        Your PWAs
      </h2>
      <p
        className={`text-base font-medium mt-6 z-10 ${
          theme === "light" && "text-[#5c5c5c]"
        }`}
      >
        Experience the blend of apps and web assets collectively.
      </p>

      <div className="mt-10">
        <ContactButton text1={"Get A Quote"} text2={"Let's talk"} />
      </div>

      <HeroAnimation />
    </div>
  );
};

export default Hero;
