"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import ContactButton from "@/components/global/ContactButton";

const Hero = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <main className="w-full relative lg:h-screen 2xl:h-auto">
      <div className="w-full global-padding-horizontal relative flex flex-col lg:flex-row gap-x-6 gap-y-16 pt-20">
        <div className="w-full text-start relative md:pb-20 pt-2 md:pt-10 flex flex-col items-start">
          <h1 className="text-4xl lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-bold tracking-tighter text-start lg:leading-[71.93px] 2xl:leading-[99px] z-10">
            Exclusive
            <span className="text-[#F15C20]"> Hybrid App   <img src="/hybrid-app-arrow.webp"  className="absolute right-10 mt-4 hidden md:flex" width={50} alt="" /> </span> Development {" "}            
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
        <div className="w-full lg:w-[90%] md:pb-20 sm:pb-20 relative hybrid-app-development-services-curve flex items-baseline ">          
          <div className="w-[320px]  h-[300px] mx-auto md:w-[499.69px] md:h-[475.53px]   relative flex items-center  gap-5">
            <div className="left-side-img">
              <img src="/hybrid-app-development-services-hero-left-side.webp" className="bounce-img-1-hero" width={200} alt="" />
            </div>
            <div className="right-side-img">
              <img src="/hybrid-app-development-services-right-side.webp" className="bounce-img-2-hero" width={200} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
