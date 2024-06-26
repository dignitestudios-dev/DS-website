"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const PlatformServices = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-6 justify-start items-start w-full mb-6 mt-40 md:my-12 lg:mb-20 lg:mt-56">
      <h1
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } text-start text-3xl md:text-5xl xl:text-[64px] font-bold uppercase lg:tracking-tighter lg:leading-[72px]`}
      >
        mobile app development services <br /> for various platforms
      </h1>
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
              <img
                src="/android-mobile-app-mockup.png"
                alt=""
                className="w-[21px] h-[21px]"
              />
              <h3 className="text-xl font-semibold">Android App Development</h3>
            </div>
            <p
              className={`text-sm font-normal ${
                theme === "light" ? "text-[#5F5F5F]" : "text-white"
              }`}
            >
              Struggling to find an innovative partner for your mobile app
              development? Here we offer the best mobile app solutions to propel
              your business in the world of the mobile stratosphere with our
              eccentric development approach. Whereas, Android apps are the
              cornerstone of the transformative development process.   
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center justify-start gap-3">
              <img src="/ios-mockup.png" alt="" className="w-[21px] h-[21px]" />
              <h3 className="text-xl font-semibold">iOS App Development</h3>
            </div>
            <p
              className={`text-sm font-normal ${
                theme === "light" ? "text-[#5F5F5F]" : "text-white"
              }`}
            >
              Have you ever heard that an IOS application is running slow? Yes,
              you’ve been familiar with the term, as Dignite Studios built
              powerful, stable, highly functional, operational, and systemized
              app versions of the IOS mobile applications to satisfy their
              clients in the process of mobile development. And that’s how our
              development efforts create rapid mobile app conversions in no
              time.   
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[45%] h-full">
          <img
            src="/telehealth-mobile-app-development.webp"
            title="Mobile app development services"
            alt="mockup screen shows icons of multiple mobile app development service platforms"
            className="xl:h-[557.13px] xl:w-[596.13px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformServices;
