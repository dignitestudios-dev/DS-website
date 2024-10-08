"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const PlatformServices = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-6 justify-start items-start w-full mb-6 mt-20 md:mb-12 md:mt-32 lg:mt-24 lg:pb-20 xl:pb-0 xl:mt-36">
      <h2
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } text-start text-3xl md:text-5xl xl:text-[64px] font-bold lg:tracking-tighter lg:leading-[72px] block`}
      >
        <span className="uppercase">
          {" "}
          mobile app development services <br /> for
        </span>{" "}
        <span className="text-[#F15C20]">iOS & ANDROID</span>
      </h2>

      <p
        className={`text-base font-normal text-start lg:w-[60%] ${
          theme === "light" ? "text-[#2A2A2A]" : "text-white"
        }`}
      >
        Our software development life cycle empowers companies to functionalize
        their brand identity by building an effective and powerful mobile app
        for its users. To create more clicks and produce more revenue we provide
        a complete mobile solution to make a global recognition of your mobile
        applications. 
      </p>

      <div className="w-full flex flex-col items-start lg:flex-row justify-between">
        <div className="w-full lg:w-[55%] flex flex-col items-start justify-center gap-y-6 lg:gap-y-14 h-full lg:pt-10 xl:pt-20 xl:pr-24">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center justify-start gap-3">
              <Image
                loader={customLoader}
                loading="lazy"
                width={21}
                height={21}
                src="/android-mobile-app-mockup.png"
                alt="android-app-icon"
                className="w-[21px] h-[21px]"
              />
              <h3 className="text-xl font-semibold">Android App Development</h3>
            </div>
            <p
              className={`text-sm font-normal ${
                theme === "light" ? "text-[#5F5F5F]" : "text-white"
              }`}
            >
              Struggling to find an innovative partner for your{" "}
              <Link
                href={"/services/android-app-development-services"}
                className="text-orange-600"
              >
                android mobile app development?
              </Link>{" "}
              Here we offer the best mobile app solutions to propel your
              business in the world of the mobile stratosphere with our
              eccentric development approach. Whereas, Android apps are the
              cornerstone of the transformative development process.   
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center justify-start gap-3">
              <Image
                loader={customLoader}
                loading="lazy"
                width={21}
                height={21}
                src="/ios-mockup.png"
                alt="ios-app-icon"
                className="w-[21px] h-[21px]"
              />
              <h3 className="text-xl font-semibold">iOS App Development</h3>
            </div>
            <p
              className={`text-sm font-normal ${
                theme === "light" ? "text-[#5F5F5F]" : "text-white"
              }`}
            >
              Turn your illustrations into an unprecedented model that robust{" "}
              <Link
                href={"/services/ios-app-development-services"}
                className="text-orange-600"
              >
                iOS mobile applications
              </Link>{" "}
              in an exclusive manner. From code to launch, the top-notch
              developers of Dignite Studios will transform your entire mobile
              app with eminent methodologies of mobile development to make your
              app version highly functional, optimized, systemized, and scalable
              on any platform. We take pride in our development efforts to help
              businesses achieve their rapid ROIs and conversions.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[45%] h-full">
          <Image
            loader={customLoader}
            loading="lazy"
            width={596}
            height={557}
            src="/telehealth-mobile-app-development.webp"
            alt="mockup screen shows icons of multiple mobile app development service platforms"
            className="xl:h-[557.13px] xl:w-[596.13px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformServices;
