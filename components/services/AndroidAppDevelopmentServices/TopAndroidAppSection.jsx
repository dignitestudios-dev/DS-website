"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext } from "react";

const TopAndroidAppSection = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section
      className={`w-full global-padding-horizontal flex flex-col items-center text-center py-20 xl:py-24 2xl:py-36`}
    >
      <h2 className={`headings-size`}>
        <div className="flex flex-col items-center gap-1 mb-5">
          <span
            className={`text-xl font-bold text-[#F15C20] uppercase tracking-normal`}
          >
            top android application
          </span>
          <img
            width={269}
            height={8}
            // loader={customLoader}
            src="/lines-4.webp"
            alt="leading-lines"
            className="w-[269px] h-[8]"
          />
        </div>
        <span className="">development services for</span> <br /> multiple
        platforms
      </h2>
      <p
        className={`lg:w-[51%] leading-[20.4px] text-[15px] my-4 font-normal ${
          theme === "light" && "text-[#2A2A2A]"
        }`}
      >
        The custom Android app development company Dignite Studios depicts an
        influential model to produce efficacious methodologies and
        infrastructure of viable application services for multiple-platform iOS
        and Android apps.
      </p>

      <div className="w-full lg:max-w-[1000px] h-auto lg:h-[480px] grid md:grid-cols-2 grid-cols-1 gap-5 lg:gap-10 mt-5 lg:mt-10 relative">
        <div className="col-span-1 rounded-xl h-[380px] lg:h-[480px] hidden md:flex flex-col justify-between overflow-hidden bg-[#FAFAFA]">
          <div className="w-full h-[380px] lg:h-[480px] flex items-center justify-between gap-6 group relative -rotate-[35deg]">
            <div className="flex flex-col justify-end gap-y-4 h-full relative group-hover:translate-y-36 transition-all duration-[1900ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-4.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-2.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-4 h-full relative group-hover:translate-y-36 transition-all duration-[1700ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-3.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-4.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-5.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-4 h-full relative group-hover:-translate-y-36 transition-all duration-[1700ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-2.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-3.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-2.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 rounded-xl h-[380px] lg:h-[480px] hidden md:flex flex-col justify-between overflow-hidden bg-[#FAFAFA]">
          <div className="w-full h-[480px] flex items-center justify-between gap-6 group relative -rotate-[35deg]">
            <div className="flex flex-col justify-end gap-y-4 h-full relative group-hover:translate-y-36 transition-all duration-[1900ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-1.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-2.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-4 h-full relative group-hover:translate-y-36 transition-all duration-[1700ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-3.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-4.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-5.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-4 h-full relative group-hover:-translate-y-36 transition-all duration-[1700ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-6.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-7.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-2.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:max-w-[1000px] hidden md:grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="text-start pt-4">
          <h3 className="text-[18px] font-bold">
            <span className="text-[#F15C20]">Native</span> App Development
          </h3>
          <p
            className={`${
              theme === "light" ? "text-[#666666]" : "text-gray-200"
            } text-[13px] mt-2`}
          >
            Native Android development provide highly riched app features and
            exceptional mobile functions to scale your consumer app on a wider
            landscape. The best app development company Dignite Studios will
            build your native app with peculiar programming languages and tools
            to make your mobile apps unique and competent to burgeon your
            business production.
          </p>
        </div>
        <div className="text-start pt-4">
          <h3 className="text-[18px] font-bold">
            <span className="text-[#F15C20]">Hybrid</span> Android App
          </h3>
          <p
            className={`${
              theme === "light" ? "text-[#666666]" : "text-gray-200"
            } text-[13px] mt-2`}
          >
            Hybrid Apps can be installed for multiple platforms like iOS and
            Android devices. These apps also helps in providing web solutions
            and native Android development. However, to make your app more
            faster you can use a native user interface to access layouts and
            multiple controls. Therefore, if you want to produce cross-platform
            apps for both iOS and Android apps, the budget will closely
            increase, as the size of your experts is too much for both iOS and
            Android platforms. Highly optimized Android application development
            services of Dignite Studios, impart first-rate development strategy
            to rame striking hybrid Android apps to furnish world-class Android
            app development solutions to generate mobile apps scalability.
          </p>
        </div>
      </div>

      <div className="w-full block md:hidden">
        <div className="col-span-1 rounded-xl h-[380px] lg:h-[480px] flex flex-col justify-between overflow-hidden bg-[#FAFAFA]">
          <div className="w-full h-[380px] lg:h-[480px] flex items-center justify-between gap-6 group relative -rotate-[35deg]">
            <div className="flex flex-col justify-end gap-y-4 h-full relative group-hover:translate-y-36 transition-all duration-[1900ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-4.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-2.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-4 h-full relative group-hover:translate-y-36 transition-all duration-[1700ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-3.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-4.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-5.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-4 h-full relative group-hover:-translate-y-36 transition-all duration-[1700ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-2.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-3.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/top-android-2.webp"
                alt="The image shows multiple mock screens of native app development"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
          </div>
        </div>
        <div className="text-start pt-4">
          <h3 className="text-[18px] font-bold">
            <span className="text-[#F15C20]">Native</span> App Development
          </h3>
          <p
            className={`${
              theme === "light" ? "text-[#666666]" : "text-gray-200"
            } text-[13px] mt-2`}
          >
            Native Android development provide highly riched app features and
            exceptional mobile functions to scale your consumer app on a wider
            landscape. The best app development company Dignite Studios will
            build your native app with peculiar programming languages and tools
            to make your mobile apps unique and competent to burgeon your
            business production.
          </p>
        </div>
        <div className="col-span-1 rounded-xl h-[380px] lg:h-[480px] mt-6 flex flex-col justify-between overflow-hidden bg-[#FAFAFA]">
          <div className="w-full h-[480px] flex items-center justify-between gap-6 group relative -rotate-[35deg]">
            <div className="flex flex-col justify-end gap-y-4 h-full relative group-hover:translate-y-36 transition-all duration-[1900ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-1.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-2.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-4 h-full relative group-hover:translate-y-36 transition-all duration-[1700ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-3.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-4.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-5.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-4 h-full relative group-hover:-translate-y-36 transition-all duration-[1700ms]">
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-6.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-7.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
              <img
                width={137}
                height={298}
                // loader={customLoader}
                src="/hybrid-app-2.webp"
                alt="image shows multiple mockup screens of hybrid Android application"
                className="w-[137.71px] h-[298.65px] object-contain mockup-shadow rounded-[15px]"
              />
            </div>
          </div>
        </div>
        <div className="text-start pt-4">
          <h3 className="text-[18px] font-bold">
            <span className="text-[#F15C20]">Hybrid</span> Android App
          </h3>
          <p
            className={`${
              theme === "light" ? "text-[#666666]" : "text-gray-200"
            } text-[13px] mt-2`}
          >
            Hybrid Apps can be installed for multiple platforms like iOS and
            Android devices. These apps also helps in providing web solutions
            and native Android development. However, to make your app more
            faster you can use a native user interface to access layouts and
            multiple controls. Therefore, if you want to produce cross-platform
            apps for both iOS and Android apps, the budget will closely
            increase, as the size of your experts is too much for both iOS and
            Android platforms. Highly optimized Android application development
            services of Dignite Studios, impart first-rate development strategy
            to rame striking hybrid Android apps to furnish world-class Android
            app development solutions to generate mobile apps scalability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopAndroidAppSection;
