"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <main className="w-full global-padding-horizontal flex flex-col pt-2 md:py-10 h-[110vh] lg:h-[140vh] 2xl:h-screen relative gap-4 justify-start items-center">
      <h1
        style={{
          color: palette?.color,
        }}
        className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px]"
      >
        Robust Your Mobile Application <br />{" "}
        <span className="text-[#F15C20]">Support and Maintenance</span> Services
      </h1>
      <h2
        className={`text-base font-normal text-center ${
          theme === "light" ? "text-[#5C5C5C]" : "text-[#8F8F8F]"
        }`}
      >
        Get free maintenance and support service from our top experts.
      </h2>
      <div>
        <Link
          href={"/contact-us"}
          className="bg-[#F15C20] text-white w-[164px] h-[64px] rounded-full text-center flex items-center gap-2 justify-center font-semibold"
        >
          Get A Quote <FiArrowUpRight className="text-2xl" />
        </Link>
      </div>
      <div className="w-full relative">
        <img
          src="/maintenance-hero-borders.webp"
          alt=""
          className="w-full lg:w-[934] xl:h-[639.79px] xl:w-[1134.56px] mx-auto absolute top-0 md:translate-x-[2%] xl:translate-x-[7%] 2xl:translate-x-[20%] z-0"
        />
        <div className="w-full flex items-center justify-center z-10 mt-10 gap-3 md:gap-6 relative">
          <img
            src="/maintenance-hero-left-icon.png"
            alt=""
            className="w-[157.05px] h-[100px] hidden lg:block absolute top-9 -left-20 xl:left-24 2xl:left-32 z-20 animated-icon-3"
          />
          <img
            src="/support-header-img1.png"
            alt=""
            className="w-[200px] xl:w-[260px] h-[300px] md:h-[400px] xl:h-[500.1px] 2xl:h-[550px] 2xl:w-[310px] z-0 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative animated-image-up"
          />
          <img
            src="/support-header-img2.png"
            alt=""
            className="w-[200px] xl:w-[260px] h-[300px] md:h-[400px] xl:h-[500.1px] 2xl:h-[550px] 2xl:w-[310px] z-20 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative -top-5 animated-image-down2 hidden lg:block"
          />
          <img
            src="/support-header-img3.png"
            alt=""
            className="w-[200px] xl:w-[260px] h-[300px] md:h-[400px] xl:h-[500.1px] 2xl:h-[550px] 2xl:w-[310px] z-20 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative -top-5 animated-image-down"
          />
          <img
            src="/app-maintenance-icon.png"
            alt=""
            className="w-[187.05px] h-[107px] hidden lg:block absolute bottom-16 -right-28 xl:right-20 2xl:right-28 2xl:bottom-24 z-20 animated-icon"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
