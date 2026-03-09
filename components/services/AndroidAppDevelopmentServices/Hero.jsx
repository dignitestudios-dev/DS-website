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
      <main className="w-full flex flex-col items-center gap-6 md:gap-8 pt-16 pb-0 text-center relative z-10 lg:h-[110vh] 2xl:h-[90vh]">
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
          <Image
            src="/arrow-icon.webp"
            alt="arrow-icon"
            title="arrow-icon"
            className="absolute top-[27%] md:top-[32%] lg:top-[70px] left-[48%] md:left-[47%] lg:left-[47%] xl:top-[95px] xl:left-[48%] 2xl:top-[110px] 2xl:left-[48%] w-[17px] h-[16px] md:w-[22.1px] md:h-[20.1px]"
           width={500} height={500} priority  loader={customLoader} />
          <h1
            className={`text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-bold tracking-tighter text-center capitalize lg:leading-[67px] xl:leading-[81.93px] 2xl:leading-[99px] md:block hidden`}
          >
            <span className="high-powered">
              <span>High-Powered</span>
            </span>
            <span className="text-[#F15C20]"> Android App</span> <br />
            Development Services
          </h1>

          <h2
            className={`text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-bold tracking-tighter text-center capitalize lg:leading-[67px] xl:leading-[81.93px] 2xl:leading-[99px] block md:hidden`}
          >
            <span className="high-powered">
              <span>High-Powered</span>
            </span>
            <span className="text-[#F15C20]">Android App</span>
            Development Services
          </h2>

          <h3 className="text-base 2xl:text-xl 2xl:mt-3 font-normal">
            Build intuitive app architecture for your Android devices
          </h3>
        </div>

        <Image
          width={150}
          height={150}
          loader={customLoader}
          src="/tailwind-icon-2.webp"
          alt="firebase-icon"
          title="firebase-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block left-[4%] animated-icon z-0"
         />
        <Image
          width={150}
          height={150}
          loader={customLoader}
          src="/java-icon-2.webp"
          alt="java-icon"
          title="java-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block left-[15%] top-[35%] animated-icon-2"
         />
        <Image
          width={150}
          height={150}
          loader={customLoader}
          src="/flutter-icon-2.webp"
          alt="flutter-icon"
          title="flutter-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block left-[0%] bottom-[15%] animated-icon-2"
         />

        {/* right side icons */}
        <Image
          width={150}
          height={150}
          loader={customLoader}
          src="/firebase-icon-2.webp"
          alt="firebase-icon"
          title="firebase-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block right-[4%] top-[15%] animated-icon-3"
         />
        <Image
          width={150}
          height={150}
          loader={customLoader}
          src="/vs-icon.webp"
          alt="vs-code-icon"
          title="vs-code-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block right-[15%] top-[40%] animated-icon-3"
         />
        <Image
          width={150}
          height={150}
          loader={customLoader}
          src="/react-icon-2.webp"
          alt="react-icon"
          title="react-icon"
          className="w-[150px] h-[150px] absolute hidden lg:block right-[5%] bottom-[15%] animated-icon-3"
         />

        <div className="w-full lg:hidden grid grid-cols-3 gap-x-2 gap-y-4 px-4">
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <Image
              width={150}
              height={150}
              loader={customLoader}
              src="/tailwind-icon.webp"
              alt="tailwind-icon"
              title="tailwind-icon"
              className="w-full h-full"
             />
          </div>
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <Image
              width={150}
              height={150}
              loader={customLoader}
              src="/java-icon.webp"
              alt="java-icon"
              title="java-icon"
              className="w-full h-full"
             />
          </div>
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <Image
              width={150}
              height={150}
              loader={customLoader}
              src="/flutter-icon.webp"
              alt="flutter-color"
              title="flutter-color"
              className="w-full h-full"
             />
          </div>
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <Image
              width={150}
              height={150}
              loader={customLoader}
              src="/firebase-icon.webp"
              alt="firebase-icon"
              title="firebase-icon"
              className="w-full h-full"
             />
          </div>
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <Image
              width={150}
              height={150}
              loader={customLoader}
              src="/vscode-color.webp"
              alt="vscode-color"
              title="vscode-color"
              className="w-full h-full"
             />
          </div>
          <div className="w-[55px] h-[55px] rounded-2xl shadow-2xl p-3 mx-auto">
            <Image
              width={150}
              height={150}
              loader={customLoader}
              src="/react-icon.webp"
              alt="react-icon"
              title="react-icon"
              className="w-full h-full"
             />
          </div>
        </div>

        <Image
          src={"/android-app-development-1.webp"}
          title="Android App Development Services"
          alt="The image shows three mobile screens with different Android app layouts, and multiple tech icons revolving around them"
          className="mx-auto lg:w-[1035px] xl:w-[685px] xl:h-[482px] 2xl:w-[981px] lg:h-[750px] 2xl:h-[800px]  relative -top-0 lg:-top-2 2xl:top-0"
         width={500} height={500} priority  loader={customLoader} />
      </main>
    </>
  );
};

export default Hero;
