"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";

const Hero = () => {
  const { theme } = useContext(GlobalContext);
  const [toggle, setToggle] = useState(true);
  const [toggleImg, setToggleImg] = useState(false);

  return (
    <div className="w-full text-center relative pb-20 pt-2 md:pt-10 global-padding-horizontal flex flex-col items-center">
      <div
        className={`flex items-center justify-center gap-1 rounded-full px-4 py-2 mb-6 ${
          theme === "light" ? "bg-[#F6F6F6]" : "bg-[#2d2d2d]"
        } hover:bg-gradient-to-r hover:from-[#ffb484] hover:via-[#ff88a4] hover:to-[#759bff] hover:text-white transition-all duration-500 `}
      >
        <FaApple className="w-[22px] h-[24px]" />{" "}
        <h1 className="text-sm font-medium">iOS App Design Company</h1>
      </div>
      <h2 className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px] z-10">
        <span className="text-[#F15C20]">Thrive</span> Your Idea With <br />
        Perfection
      </h2>
      <p
        className={`text-base font-medium mt-6 z-10 ${
          theme === "light" && "text-[#5c5c5c]"
        }`}
      >
        Embrace your future and start your journey with us.
      </p>

      <div className="mt-10">
        {/* <Link
          href={"/contact-us"}
          className="bg-[#F15C20] px-7 py-5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1"
        >
          Get a quote <FiArrowUpRight className="text-lg" />
        </Link> */}
        <ContactButton text1={"Get a quote"} text2={"Let's talk"} />
      </div>

      <div className="w-full mt-20 flex items-start justify-center flex-wrap gap-10">
        <div
          className={`w-[320px] xl:w-[380px] h-[667px] rounded-[60px] group flex flex-col items-center justify-start pt-12 gap-8 ${
            toggle ? `bg-[#F5F5F5]` : "bg-[#3A3A3C]"
          } `}
        >
          <h2
            className={`text-[24px] font-semibold group-hover:text-white ${
              toggle ? "text-black" : "text-white"
            }`}
          >
            iOS Mobile App
          </h2>
          {toggle ? (
            <img
              src="/ios-app-design-company.webp"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[256px] h-[522.38px]"
            />
          ) : (
            <img
              src="/ios-app-design-company-dark.webp"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[256px] h-[522.38px]"
            />
          )}
        </div>

        <div
          className={`w-[320px] xl:w-[380px] h-[667px] rounded-[60px] flex flex-col items-center justify-start pt-12 gap-8 ${
            toggle ? `bg-[#F5F5F5]` : "bg-[#3A3A3C]"
          }`}
        >
          <h2
            className={`text-[24px] font-semibold ${
              toggle ? "text-black" : "text-white"
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
              toggle ? `bg-[#E9E9EA]` : "bg-gray-500"
            } rounded-full transition-all duration-300 outline-none overflow-hidden w-[340px] h-[152px] p-[8px] flex justify-start items-center mt-40 -rotate-90`}
          >
            {/* lg:translate-x-[calc(100%-18%)] */}
            <span
              className={`h-[122px] w-[122px] text-xl text-white transition-all duration-300 rounded-full flex items-center justify-center ${
                toggle
                  ? `translate-x-2 bg-white shadow-2xl`
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
          className={`w-[320px] xl:w-[380px] h-[667px] group rounded-[60px] relative flex flex-col items-center justify-start pt-12 gap-10 ${
            toggle ? `bg-[#F5F5F5]` : `bg-[#3A3A3C]`
          }`}
          onMouseEnter={() => setToggleImg(true)}
          onMouseLeave={() => setToggleImg(false)}
        >
          <img
            src="/ios-app-design-services-gradient-img.webp"
            alt="ios app design services img"
            className={`absolute w-full h-full inset-0 z-0 rounded-[60px] transition-opacity duration-1000 ${
              toggleImg ? "opacity-100" : "opacity-0"
            }`}
          />
          <h2
            className={`text-[24px] font-semibold group-hover:text-white transition-all duration-500 z-10 ${
              toggle ? `text-black` : "text-white"
            }`}
          >
            iOS Icons
          </h2>
          <div className="w-full flex justify-around gap-10 flex-wrap px-10 z-10">
            <img
              src="/ios-message-icon.webp"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-clock-icon.webp"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-camera-icon.webp"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-music-icon.webp"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-photos-icon.webp"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-safari-icon.webp"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-weather-icon.webp"
              alt="iOS App design company shows three mockup screens of iOS app design"
              className="w-[80px] h-[80px] 2xl:w-[90px] 2xl:h-[90px]"
            />
            <img
              src="/ios-video-call-icon.webp"
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
