"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  const { palette, theme } = useContext(GlobalContext);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <main className="w-full ">
      <div className="w-full global-padding-horizontal flex flex-col pt-2 md:py-10 relative gap-4 justify-start items-center">
        <div className="mx-auto w-[217px] h-[37px] rounded-full flex items-center justify-center border border-[#4EDA75]">
          <h1 className="text-[#4EDA75] text-sm font-medium">
            Android app design services
          </h1>
        </div>
        <h2
          style={{
            color: palette?.color,
          }}
          className="text-[1.8rem] bg-transparent lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px]"
        >
          <span className="text-[#F15C20]">Transform</span> Your Idea To Feature{" "}
          <br />
          Striking Mobile Design
        </h2>
        <h2
          className={`text-base font-normal text-center ${
            theme === "light" ? "text-[#5C5C5C]" : "text-[#8F8F8F]"
          }`}
        >
          We commit to Excel Android designs
        </h2>
        <div>
          {/* <Link
            href={"/contact-us"}
            className="bg-[#F15C20] text-white w-[164px] h-[64px] rounded-full text-center flex items-center gap-1 justify-center font-semibold"
          >
            Get A Quote <FiArrowUpRight className="text-2xl" />
          </Link> */}
          <ContactButton text1={"Get A Quote"} text2={"Let's talk"} />
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-0 relative mt-10 lg:mt-0">
        <div
          className={`group w-[44px] h-[44px] md:w-[64px] md:h-[64px] relative rounded-[16px] flex items-center justify-center ${
            isLoaded && "loaded-3"
          } zero-three`}
        >
          <div
            className={`w-full h-full transition-all duration-500 shadow-xl ${
              theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
            } flex items-center justify-center rounded-[16px] group-hover:translate-y-[-30px]`}
          >
            <img
              src="/Android-app-design-services-image.webp"
              alt="Android app design service page shows technology icons"
              title="Android app design services image"
              className="w-[17px] h-[17px] lg:w-[27px] lg:h-[27px] "
            />
          </div>
        </div>

        <div
          className={`w-[65px] h-[65px] lg:w-[95px] lg:h-[95px] relative  group rounded-[22px] flex items-center justify-center ${
            isLoaded && "loaded-2"
          } zero-two`}
        >
          <div
            className={`w-full h-full transition-all duration-500 shadow-xl ${
              theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
            } flex items-center justify-center rounded-[16px] group-hover:translate-y-[-30px]`}
          >
            <img
              src="/Android-app-design-services-java-image.webp"
              alt="Android app design service page shows technology icons"
              title="Android app design services image"
              className="w-[24px] h-[24px] lg:w-[39.92px] lg:h-[55px]"
            />
          </div>
        </div>

        <div
          className={`w-[84px] h-[84px] lg:w-[144px] lg:h-[144px] relative rounded-[32px] flex items-center justify-center group ${
            isLoaded && "loaded-1"
          } zero-one`}
        >
          <div
            className={`w-full h-full transition-all duration-500 shadow-xl ${
              theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
            } flex items-center justify-center rounded-[32px] group-hover:translate-y-[-30px]`}
          >
            <img
              src="/Android-app-design-services-flutter-image.webp"
              alt="Android app design service page shows technology icons"
              title="Android app design services image"
              className="w-[40px] h-[40px] md:w-[60.49px] md:h-[60.49px]"
            />
          </div>
        </div>

        <div
          className={`w-[117px] h-[117px] lg:w-[217px] lg:h-[217px] bg-[#4EDA75] z-[100] relative  shadow-xl rounded-[48px] flex items-center justify-center hover:translate-y-[-30px] transition-all duration-500`}
        >
          <img
            src="/Android-app-design-services-android-image.webp"
            alt="Android app design service page shows technology icons"
            title="Android app design services image"
            className="w-[74px] h-[74px] lg:w-[116.95px] lg:h-[116.95px]"
          />
        </div>

        <div
          className={`w-[84px] h-[84px] lg:w-[144px] lg:h-[144px] relative group rounded-[32px] flex items-center justify-center ${
            isLoaded && "loaded-minus-1"
          } zero-minus-one`}
        >
          <div
            className={`w-full h-full transition-all duration-500 shadow-xl ${
              theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
            } flex items-center justify-center rounded-[32px] group-hover:translate-y-[-30px]`}
          >
            <img
              src="/Android-app-design-services-firebase-image.webp"
              alt="Android app design service page shows technology icons"
              title="Android app design services image"
              className="w-[40px] h-[52px] lg:w-[60.49px] lg:h-[82px]"
            />
          </div>
        </div>

        <div
          className={`w-[65px] h-[65px] lg:w-[95px] lg:h-[95px] relative group rounded-[22px] flex items-center justify-center ${
            isLoaded && "loaded-minus-1"
          } zero-minus-two`}
        >
          <div
            className={`w-full h-full transition-all duration-500 shadow-xl ${
              theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
            } flex items-center justify-center rounded-[22px] group-hover:translate-y-[-30px]`}
          >
            <img
              src="/Android-app-design-services-vscode-image.webp"
              alt="Android app design service page shows technology icons"
              title="Android app design services image"
              className="w-[24px] h-[24px] lg:w-[47px] lg:h-[47px]"
            />
          </div>
        </div>

        <div
          className={`w-[44px] h-[44px] md:w-[64px] md:h-[64px] relative group rounded-[16px] flex items-center justify-center ${
            isLoaded && "loaded-minus-1"
          } zero-minus-three`}
        >
          <div
            className={`w-full h-full transition-all duration-500 shadow-xl ${
              theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
            } flex items-center justify-center rounded-[16px] group-hover:translate-y-[-30px]`}
          >
            <img
              src="/Android-app-design-services-figma-image.webp"
              alt="Android app design service page shows technology icons"
              title="Android app design services image"
              className="w-[17px] h-[17px] lg:w-[27px] lg:h-[33px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
