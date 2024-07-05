"use client";
import Navbar from "@/components/global/Navbar";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext } from "react";

const Hero = () => {
  const { setIsSidebarOpen } = useContext(GlobalContext);
  return (
    <>
      <Navbar setIsOpen={setIsSidebarOpen} />
      <main className="w-full global-padding-horizontal flex flex-col items-center gap-6 md:gap-8 pt-10 md:pt-20 pb-0 text-center relative z-10 lg:h-[110vh] 2xl:h-[90vh]">
        <div
          className="w-full flex flex-col items-center gap-6 md:gap-4 relative pt-1"
          data-aos="slide-down"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img
            src="/hero-heading-border.png"
            alt=""
            className="w-[195px] h-[44px] left-3 top-0 lg:top-1.5 2xl:top-0 lg:w-[392px] lg:h-[77px] 2xl:w-[540px] 2xl:left-[226px] 2xl:h-[104px] absolute lg:left-[256px]"
          />
          <img
            src="/arrow-icon.png"
            alt="arrow-icon"
            className="hidden lg:block absolute top-[87px] left-[612px] 2xl:top-[110px] 2xl:left-[720px] w-[26.1px] h-[24.1px]"
          />
          <h1
            className={`text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[81.93px] 2xl:leading-[99px] hidden lg:block`}
          >
            <span className="">World's Best</span>{" "}
            <span className="text-[#F15C20]">Android App</span> <br />
            Development Services
          </h1>

          <h1
            className={`lg:leading-[90.72px] text-3xl md:text-4xl font-extrabold lg:text-[68px] xl:text-[68px] 2xl:text-[84px] z-20 2xl:leading-[40.72px] block lg:hidden`}
          >
            World's Best <span className="text-[#F15C20]">Android App</span>{" "}
            Development Services
            <br />
          </h1>
          <h6 className="text-base 2xl:text-xl 2xl:mt-3 font-normal">
            Build intuitive app architecture for your Android devices
          </h6>
        </div>

        <img
          src={"/android-app-development-services.webp"}
          title="Android App Development Services"
          alt="The image shows three mobile screens with different Android app layouts, and multiple tech icons revolving around them"
          className="mx-auto lg:w-[1571px] lg:h-[750px] 2xl:h-[850px] relative -top-10 lg:-top-60"
        />
      </main>
    </>
  );
};

export default Hero;
