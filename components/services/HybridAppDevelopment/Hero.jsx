"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import ContactButton from "@/components/global/ContactButton";
import { FaApple } from "react-icons/fa";

const Hero = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <main className="w-full relative lg:h-screen 2xl:h-auto">
      <div className="w-full global-padding-horizontal relative flex flex-col lg:flex-row gap-x-6 gap-y-16 pt-20">
        <div className="w-full text-start relative md:pb-20 pt-2 md:pt-10 flex flex-col items-start">
          <h1 className="text-4xl lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-bold tracking-tighter text-start lg:leading-[71.93px] 2xl:leading-[99px] z-10">
            Exclusive
            <span className="text-[#F15C20]"> Hybrid App</span> Development{" "}
            <br />
            Services
          </h1>
          <p
            className={`text-base font-medium mt-6 z-10 ${
              theme === "light" && "text-[#5c5c5c]"
            }`}
          >
            Boost your business with profitable outcomes.
          </p>

          <div className="mt-10 z-10">
            <ContactButton text1={"Hire Now"} text2={"Let's talk"} />
          </div>
        </div>

        <div className="w-full lg:w-[45%] relative">
          <div className="w-[320px] h-[300px] mx-auto md:w-[499.69px] md:h-[475.53px] rounded-full border border-orange-500 border-dashed relative flex items-center justify-center">
            <div
              className={`w-[180px] h-[180px] md:w-[203px] md:h-[203px] rounded-full shadow-animation flex items-center justify-center ${
                theme === "light" ? "bg-white" : "bg-[#1c1c1c]"
              }`}
            >
              <FaApple className="w-[54px] h-[66.46px] apple-logo-animation" />
            </div>

            <img
              src="/ios-photos-icon.webp"
              alt="image shows multiple tech icons"
              className="w-[53.54px] h-[53.54px] absolute -top-5 move"
            />
            <img
              src="/itunes-icon.webp"
              alt="image shows multiple tech icons"
              className="w-[63.54px] h-[63.54px] absolute -right-6 md:right-0 top-20 move-y"
            />
            <img
              src="/books_app_icon.webp"
              alt="image shows multiple tech icons"
              className="w-[63.54px] h-[63.54px] absolute right-4 bottom-0 md:bottom-16 -rotate-12 move-xy"
            />
            <img
              src="/messages_icon.webp"
              alt="image shows multiple tech icons"
              className="w-[63.54px] h-[63.54px] absolute left-10 md:left-20 bottom-0 md:bottom-2 rotate-12 move-yx"
            />
            <img
              src="/app_store_icon.webp"
              alt="image shows multiple tech icons"
              className="w-[63.54px] h-[63.54px] absolute -left-6 top-28 md:top-40 move-z"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
