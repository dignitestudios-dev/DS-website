"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div className="w-full  flex flex-col pt-2 md:pt-10  gap-4 justify-start items-center">
      <h1
        className="capitalize text-center text-[16px] 2xl:text-[20px] font-medium "
        style={{
          color: theme == "dark" ? "#B4B4B4" : "#8F8F8F",
        }}
      >
        Build a Thriving Mobile Application Today
      </h1>
      <h2
        style={{
          color: palette?.color,
        }}
        className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px]"
      >
        <span className="text-[#f15c20]">Native</span> App Development <br />{" "}
        Company
      </h2>
      <span
        style={{
          color: theme == "dark" ? "#B4B4B4" : "#5c5c5c",
        }}
        className=" text-center my-2 lg:my-6 text-[14px] lg:text-[18px] 2xl:text-[20px] font-normal"
      >
        Harness top native app features to mark business metrics
      </span>
      <div className="w-auto flex gap-4 justify-center items-center">
        <Link
          href={"/contact-us"}
          name="schedule-a-meeting"
          style={{
            background: palette?.brandOrange,
            color: "white",
          }}
          className="orange w-[150px] lg:w-[164px] 2xl:w-[246px] h-14 lg:h-16 2xl:h-[5rem] rounded-full transition-all duration-150 hover:opacity-90  shadow-xl text-sm lg:text-md 2xl:text-lg font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center gap-1 z-20"
        >
          Get a quote <FiArrowUpRight className="text-xl" />
        </Link>
      </div>

      <div className="w-full relative flex justify-center items-start gap-x-4 md:gap-x-10 mt-16 lg:my-16">
        <img
          src="/native-app-dev-andoid-icon.webp"
          alt="native-app-dev-andoid-icon"
          className="w-[141.4px] h-[141.4px] z-10 right-0 lg:right-[5%] xl:right-[20%] 2xl:right-[26%] hidden absolute lg:block top-0 android-icon-animate"
        />
        <img
          src="/native-app-dev-apple-icon.webp"
          alt="native-app-dev-apple-icon"
          className="w-[141.4px] h-[141.4px] z-10 hidden lg:block absolute lg:left-[2%] xl:left-[18%] 2xl:left-[24%] top-[44%] apple-icon-animate"
        />
        <img
          src="/native-app-hero-orange-shadow.webp"
          alt="native-app-hero-orange-shadow"
          className="w-full lg:w-[946px] lg:h-[446px] absolute fade-in"
        />
        <img
          src="/native-app-hero-yellow-shadow.webp"
          alt="native-app-hero-yellow-shadow"
          className="lg:w-[946px] lg:h-[446px] absolute fade-out"
        />
        <img
          src="/native-app-dev-hero-borders.webp"
          alt="native-app-dev-hero-borders"
          className="absolute w-[918px] h-[350px] md:h-[783px] z-0 -top-32"
        />
        <img
          src="/Native app development company1.webp"
          alt="Native app development company page shows two mobile screens that appear as mockup screens of native applications with revolving tech logos"
          title="Native app development company"
          className="w-[130px] md:w-[256.17px] 2xl:w-[260.17px] h-[263px] md:h-[512.83px] hover:-rotate-12 transition-all duration-700 z-20 relative -top-4 2xl:-top-0"
        />
        <img
          src="/Native app development company2.webp"
          alt="Native app development company page shows two mobile screens that appear as mockup screens of native applications with revolving tech logos"
          title="Native app development company"
          className="w-[130px] md:w-[256.17px] 2xl:w-[260.17px] h-[263px] md:h-[512.83px] hover:rotate-12 transition-all duration-700 z-20 relative top-6 2xl:top-8"
        />
      </div>
    </div>
  );
};

export default Hero;
