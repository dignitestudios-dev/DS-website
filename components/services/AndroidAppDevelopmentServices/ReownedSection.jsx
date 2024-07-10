"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ReownedSection = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full global-padding-horizontal relative lg:h-screen 2xl:h-[70vh] pt-16 lg:pt-36 2xl:pt-52">
      <div
        className="w-full xl:w-[70%]"
        data-aos="slide-right"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>Renowned</p>
        <h1
          className={`font-extrabold text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[74px] tracking-tighter xl:font-bold uppercase lg:leading-[57px] xl:leading-[77.45px]`}
        >
          <span className="text-[#F15C20]">Android App</span> <br /> Development
          Company
        </h1>
        <p
          className={`lg:w-[50%] text-[15px] my-4 font-normal ${
            theme === "light" && "text-[#2A2A2A]"
          }`}
        >
          Unveiling a world-class company Dignite Studios, to thrive your way
          with exceptional sleek design, outstanding features, highly optimized
          app development process, and firm compliance with top programming
          protocols. Dignite’s goal-oriented team aims to deliver quality-driven
          UI/UX design in a snap.
        </p>
        <div className="w-full lg:w-auto lg:block">
          <Link
            href="/contact-us"
            className="py-5 px-5 text-base lg:py-7 lg:px-10 float-start bg-[#F15C20] top-rated-btn-shadow rounded-full text-[#ffff] lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
          >
            Start Your Project <FiArrowUpRight className="text-xl" />
          </Link>
        </div>
      </div>
      <img
        src={"/shows-two-mobile-devices-with-android-app-development-layouts.webp"}
        alt="The image shows two mobile devices with Android app development layouts"
        title="Android app development"
        className="md:w-[484px] md:h-[484px] md:mx-auto xl:w-[684.93px] xl:h-[734px] 2xl:w-[784.93px] lg:absolute lg:right-0 lg:top-36 xl:top-12 2xl:top-28"
        data-aos="slide-left"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      />
      {/* <div className=""></div> */}
    </section>
  );
};

export default ReownedSection;
