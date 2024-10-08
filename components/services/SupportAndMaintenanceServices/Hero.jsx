"use client";
import ContactButton from "@/components/global/ContactButton";
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
        High-End Mobile Application <br />{" "}
        <span className="text-[#F15C20]">Support and Maintenance</span> Services
      </h1>
      <h2
        className={`text-base font-normal text-center ${
          theme === "light" ? "text-[#5C5C5C]" : "text-[#8F8F8F]"
        }`}
      >
        Get free maintenance and support consultation from our top experts.
      </h2>
      <div>
        {/* <Link
          href={"/contact-us"}
          className="bg-[#F15C20] text-white w-[164px] h-[64px] rounded-full text-center flex items-center gap-2 justify-center font-semibold"
        >
          Get A Quote <FiArrowUpRight className="text-2xl" />
        </Link> */}
        <ContactButton text1={"Get A Quote"} text2={"Let's talk"} />
      </div>
      <div className="w-full relative">
        <img
          src="/maintenance-hero-borders.webp"
          alt="maintenance-hero-borders"
          title="maintenance-hero-borders"
          className="w-full lg:w-[934] xl:h-[639.79px] xl:w-[1134.56px] mx-auto absolute top-0 md:translate-x-[2%] xl:translate-x-[7%] 2xl:translate-x-[20%] z-0"
        />
        <div className="w-full flex items-center justify-center z-10 mt-10 gap-3 md:gap-6 relative">
          <img
            src="/maintenance-hero-left-icon.webp"
            alt="app-service-icon"
            title="app-service-icon"
            className="w-[157.05px] h-[100px] hidden lg:block absolute top-9 -left-20 xl:left-16 2xl:left-28 z-20 maintenance-animated-icon"
          />
          <img
            src="/mobile-application-support-and-maintenance-services-1.webp"
            alt="the image shows three mockscreens of mobile application maintenance and support services"
            className="w-[200px] xl:w-[260px] h-[300px] md:h-[400px] xl:h-[500.1px] 2xl:h-[550px] 2xl:w-[310px] z-0 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative animated-image-up"
            title="Mobile application support and maintenance services"
          />
          <img
            src="/mobile-application-support-and-maintenance-services-2.webp"
            alt="the image shows three mockscreens of mobile application maintenance and support services"
            className="w-[200px] xl:w-[260px] h-[300px] md:h-[400px] xl:h-[500.1px] 2xl:h-[550px] 2xl:w-[310px] z-20 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative -top-5 animated-image-down2 hidden lg:block"
            title="Mobile application support and maintenance services"
          />
          <img
            src="/mobile-application-support-and-maintenance-services-3.webp"
            alt="the image shows three mockscreens of mobile application maintenance and support services"
            className="w-[200px] xl:w-[260px] h-[300px] md:h-[400px] xl:h-[500.1px] 2xl:h-[550px] 2xl:w-[310px] z-20 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative -top-5 animated-image-down"
            title="Mobile application support and maintenance services"
          />
          <img
            src="/app-maintenance-icon.webp"
            alt="app-service-icon"
            title="app-service-icon"
            className="w-[187.05px] h-[107px] hidden lg:block absolute bottom-16 -right-28 xl:right-12 2xl:right-24 2xl:bottom-24 z-20 maintanence-animated-icon-2"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
