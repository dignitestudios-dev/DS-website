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
        data-aos="fade-in"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
          Renowned
        </p>
        <h2 className={`headings-size`}>
          <span className="text-[#F15C20]">Android App</span> <br /> Development
          Company
        </h2>
        <p
          className={`lg:w-[50%] text-[15px] my-4 font-normal ${
            theme === "light" && "text-[#2A2A2A]"
          }`}
        >
          For years ago, Dignite Studios meticulously led with bizarre Android
          app development solutions internationally. Our team of professional
          Android developers robust your business dynamics with unrivaled custom
          Android apps, exceptional designs, and phenomenal app
          conceptualization. We believe in providing spectacular and reliable
          service set to achieve industry goals and agitation.
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
      <Image
        width={684}
        height={734}
        loader={customLoader}
        src={
          "/shows-two-mobile-devices-with-android-app-development-layouts.webp"
        }
        alt="The image shows two mobile devices with Android app development layouts"
        title="Android app development"
        className="md:w-[484px] md:h-[484px] md:mx-auto xl:w-[684.93px] xl:h-[734px] 2xl:w-[784.93px] lg:absolute lg:right-0 lg:top-36 xl:top-20 2xl:top-28"
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
