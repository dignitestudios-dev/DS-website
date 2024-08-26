"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";

const Hero = () => {
  const { theme } = useContext(GlobalContext);
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-full text-center relative pb-20 pt-2 md:pt-10 global-padding-horizontal flex flex-col items-center">
      <div
        className={`flex items-center justify-center gap-1 rounded-full px-4 py-2 mb-6 ${
          theme === "light"
            ? "bg-[#F6F6F6] ios-app-design"
            : "bg-[#2d2d2d] ios-app-design"
        }`}
      >
        <FaApple className="w-[39px] h-[36px]" />{" "}
        <span className="text-sm font-medium">iOS App Design Company</span>
      </div>
      <h1 className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px] z-10">
        <span className="text-[#F15C20]">Thrive</span> Your Idea With <br />
        Perfection
      </h1>
      <p
        className={`text-base font-medium mt-6 z-10 ${
          theme === "light" && "text-[#5c5c5c]"
        }`}
      >
        Embrace your future and start your journey with us.
      </p>

      <div className="mt-10">
        <Link
          href={"/contact-us"}
          className="bg-[#F15C20] px-7 py-5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1"
        >
          Get a quote <FiArrowUpRight className="text-lg" />
        </Link>
      </div>

      <div className="w-full mt-20 flex items-start justify-center flex-wrap gap-10">
        <div
          className={`w-[320px] xl:w-[380px] h-[667px] rounded-[60px] group flex flex-col items-center justify-start pt-12 gap-8 transition-all duration-300 ${
            toggle
              ? `${
                  theme === "light" ? "bg-[#F5F5F5]" : "bg-[#2d2d2d]"
                } ios-app-design-card`
              : "bg-[#3A3A3C]"
          }`}
        >
          <h2
            className={`text-[24px] font-semibold group-hover:text-white ${
              toggle
                ? `${theme === "light" ? "text-black" : "text-white"}`
                : "text-white"
            }`}
          >
            iOS Mobile App
          </h2>
          {toggle ? (
            <img
              src="/ios-app-design-company.webp"
              title="iOS App design company"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[256px] h-[522.38px]"
            />
          ) : (
            <img
              src="/ios-app-design-company-dark.webp"
              title="iOS App design company"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[256px] h-[522.38px]"
            />
          )}
        </div>

        <div
          className={`w-[320px] xl:w-[380px] h-[667px] rounded-[60px] flex flex-col items-center justify-start pt-12 gap-8 ${
            toggle
              ? `${theme === "light" ? "bg-[#F5F5F5]" : "bg-[#2d2d2d]"}`
              : "bg-[#3A3A3C]"
          }`}
        >
          <h2
            className={`text-[24px] font-semibold ${
              toggle
                ? `${theme === "light" ? "text-black" : "text-white"}`
                : "text-white"
            }`}
          >
            Dark Mode
          </h2>
          <button
            aria-label="button"
            name="toggle"
            type="button"
            onClick={() => setToggle(!toggle)}
            className={`${
              toggle
                ? `${theme === "light" ? "bg-[#E9E9EA]" : "bg-[#82828222]"}`
                : "bg-gray-500"
            } rounded-full transition-all duration-300 outline-none overflow-hidden w-[340px] h-[152px] p-[8px] flex justify-start items-center mt-40 -rotate-90`}
          >
            {/* lg:translate-x-[calc(100%-18%)] */}
            <span
              className={`h-[122px] w-[122px] text-xl text-white transition-all duration-300 rounded-full flex items-center justify-center ${
                toggle
                  ? `translate-x-2 ${
                      theme === "light" ? "bg-white" : "bg-[#9f9f9f]"
                    } shadow-2xl`
                  : " translate-x-[calc(160%)] bg-[#3A3A3C]"
              } `}
            >
              {toggle ? (
                <></>
              ) : (
                <IoMoon className="w-[60%] h-[60%] text-gray-500" />
              )}
            </span>
          </button>
        </div>

        <div
          className={`w-[320px] xl:w-[380px] h-[667px] group rounded-[60px] group relative flex flex-col items-center justify-start pt-12 gap-10 ${
            toggle
              ? `${
                  theme === "light" ? "bg-[#F5F5F5]" : "bg-[#2d2d2d]"
                } ios-app-design-card`
              : `bg-[#3A3A3C]`
          }`}
        >
          {toggle && (
            <img
              src="/ios-app-design-services-gradient-img.png"
              alt=""
              className="absolute w-full h-full inset-0 z-0 invisible group-hover:visible transition-all duration-300 rounded-[60px]"
            />
          )}
          <h2
            className={`text-[24px] font-semibold group-hover:text-white z-10 ${
              toggle
                ? `${theme === "light" ? "text-black" : "text-white"}`
                : "text-white"
            }`}
          >
            iOS Icons
          </h2>
          <div className="w-full flex justify-around gap-10 flex-wrap px-10 z-10">
            <img
              src="/ios-message-icon.webp"
              title="iOS App design company"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-clock-icon.webp"
              title="iOS App design company"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-camera-icon.webp"
              title="iOS App design company"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-music-icon.webp"
              title="iOS App design company"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-photos-icon.webp"
              title="iOS App design company"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-safari-icon.webp"
              title="iOS App design company"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-weather-icon.webp"
              title="iOS App design company"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-video-call-icon.webp"
              title="iOS App design company"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
