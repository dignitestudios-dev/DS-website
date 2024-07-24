"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import HeroAnimation from "./HeroAnimation";

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

      <HeroAnimation/>

      {/* <div className="w-full mt-6 md:mt-0 relative lg:h-[60vh] xl:h-[80vh] flex items-center justify-center">
        <img
          src="/Web-Application-Development-Services-Left.png"
          alt=""
          className="lg:w-[346px] lg:h-[325px] 2xl:w-[426px] 2xl:h-[395px] absolute top-16 2xl:top-44 left-14 2xl:left-20 z-20 slide-right-on-load hidden xl:block"
        />
        <img
          src="/Web-Application-Development-Services-Left-Bottom.png"
          alt=""
          className="lg:w-[450px] lg:h-[358px] 2xl:w-[530px] 2xl:h-[418px] absolute top-1/2 left-24 2xl:left-36 transform -translate-y-3/5 2xl:-translate-y-[-40px] z-20 slide-right-on-load hidden xl:block"
        />
        <img
          src="/web-app-dev-image-shadow-purple.png"
          alt=""
          className="w-[80%] lg:h-[78vh] xl:h-[82vh] absolute inset-0 m-auto z-0 fade-in"
        />
        <img
          src="/web-app-dev-image-shadow-yellow.png"
          alt=""
          className="w-[80%] lg:h-[78vh] xl:h-[82vh] absolute inset-0 m-auto z-0 fade-out"
        />
        <img
          src="/Web-Application-Development-Services.png"
          alt=""
          className="w-[90%] xl:w-[834px] lg:w-[60%] lg:h-[350px] xl:h-[520px] 2xl:w-[1034px] 2xl:h-[690px] relative mx-auto border web-app-dev-hero-mockup z-10 rounded-2xl animated-shadow"
        />
        <img
          src="/Web-Application-Development-Services-Right.png"
          alt=""
          className="hidden xl:block lg:w-[317px] lg:h-[231px] 2xl:w-[407px] 2xl:h-[311px] absolute top-1/2 right-20 2xl:right-24 transform -translate-y-1/2 z-20 slide-left-on-load"
        />
      </div> */}
    </main>
  );
};

export default Hero;
