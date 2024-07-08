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
      <main className="w-full flex flex-col items-center gap-6 md:gap-8 pt-10 md:pt-20 pb-0 text-center relative z-10 lg:h-[110vh] 2xl:h-[90vh]">
        <div
          className="w-full flex flex-col items-center gap-6 md:gap-4 relative pt-1 global-padding-horizontal"
          data-aos="slide-down"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img
            src="/hero-heading-border.png"
            alt=""
            className="w-[228px] h-[44px] left-[2.9%] top-0 lg:top-0 2xl:top-0 lg:w-[460px] lg:h-[98px] 2xl:w-[640px] 2xl:left-[19.2%] 2xl:h-[120px] absolute lg:left-[22.2%]"
          />
          <img
            src="/arrow-icon.png"
            alt="arrow-icon"
            className="absolute top-[19%] lg:top-[94px] left-[48%] 2xl:top-[110px] 2xl:left-[720px] w-[17px] h-[16px] md:w-[22.1px] md:h-[20.1px]"
          />
          <h1
            className={`text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[81.93px] 2xl:leading-[99px] hidden lg:block`}
          >
            <span className="">High-Powered</span>{" "}
            <span className="text-[#F15C20]">Android App</span> <br />
            Development Services
          </h1>

          <h1
            className={`lg:leading-[90.72px] text-3xl md:text-4xl font-extrabold lg:text-[68px] xl:text-[68px] 2xl:text-[84px] z-20 2xl:leading-[40.72px] block lg:hidden`}
          >
            High-Powered <span className="text-[#F15C20]">Android App</span>{" "}
            Development Services
            <br />
          </h1>
          <h6 className="text-base 2xl:text-xl 2xl:mt-3 font-normal">
            Build intuitive app architecture for your Android devices
          </h6>
        </div>

        <img
          src="/tailwind-icon-2.png"
          alt="firebase-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block left-[4%] animated-icon"
        />
        <img
          src="/java-icon-2.png"
          alt="firebase-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block left-[15%] top-[35%] animated-icon-2"
        />
        <img
          src="/flutter-icon-2.png"
          alt="firebase-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block left-[0%] bottom-[15%] animated-icon-2"
        />

        {/* right side icons */}
        <img
          src="/firebase-icon-2.png"
          alt="firebase-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block right-[4%] top-[15%] animated-icon-3"
        />
        <img
          src="/vs-icon.png"
          alt="firebase-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block right-[15%] top-[40%] animated-icon-3"
        />
        <img
          src="/react-icon-2.png"
          alt="firebase-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block right-[5%] bottom-[15%] animated-icon-3"
        />

        <div className="w-full lg:hidden grid grid-cols-3 gap-x-2 gap-y-4 px-4">
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <img src="/tailwind-icon.png" alt="" className="w-full h-full" />
          </div>
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <img src="/java-icon.png" alt="" className="w-full h-full" />
          </div>
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <img src="/flutter-color.webp" alt="" className="w-full h-full" />
          </div>
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <img src="/firebase-icon.png" alt="" className="w-full h-full" />
          </div>
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <img src="/vscode-color.png" alt="" className="w-full h-full" />
          </div>
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <img src="/react-icon.png" alt="" className="w-full h-full" />
          </div>
        </div>

        <img
          src={"/android-app-development-services.webp"}
          title="Android App Development Services"
          alt="The image shows three mobile screens with different Android app layouts, and multiple tech icons revolving around them"
          className="mx-auto w-full lg:w-[1035px] 2xl:w-[1381px] lg:h-[750px] 2xl:h-[950px] relative -top-0 lg:-top-2 2xl:top-0"
        />
      </main>
    </>
  );
};

export default Hero;
