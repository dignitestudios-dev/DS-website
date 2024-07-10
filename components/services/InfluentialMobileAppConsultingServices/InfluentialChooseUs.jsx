"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const InfluentialChooseUs = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-12 global-padding-horizontal grid grid-cols-1 xl:grid-cols-2 lg:gap-y-12 gap-6 relative">
      <div className="flex flex-col items-start justify-center gap-6">
        <h1 className="headings-size">
          <span className="text-[#F15C20]">Why </span>
          Choose US
        </h1>
        <p
          className={`text-base 2xl:text-lg ${
            theme === "light" && "text-[#5C5C5C] leading-[22.4px]"
          }`}
        >
          With more than a decade of unmatchable experience in mobile consulting
          projects and mobile development, Dignite Studios has gained a
          spectacular place in the terrain of digital technology.
        </p>
        <p
          className={`text-base 2xl:text-lg ${
            theme === "light" && "text-[#5C5C5C] leading-[22.4px]"
          }`}
        >
          Here, we’ve helped multiple industries and brands to flourish their
          businesses with modernized strategies and produce super easiest
          formulas to drive growth and progress in mobile and web development. 
        </p>
        <Link
          href={"/contact-us"}
          className="w-[206px] h-[80px] top-rated-btn-shadow hover:opacity-[.75] transition-all duration-300 rounded-full text-xl font-semibold text-white bg-[#F15C20] flex items-center justify-center gap-2"
        >
          Contact Us <RiArrowRightUpLine className="text-2xl" />
        </Link>
      </div>
      <div className="relative w-full">
        <Image
          loader={customLoader}
          width={684.15}
          height={669.56}
          src="/why-choose-us-borders.png"
          alt="why-choose-us-borders"
          title="why-choose-us-borders"
          className="w-full absolute top-0 lg:-top-28 xl:top-0 left-0 z-0 hidden lg:block"
        />

        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3 lg:mt-0 relative z-10">
          <div className="flex items-center">
            <div
              className={`${
                theme === "dark"
                  ? "bg-[#2d2d2d]"
                  : "bg-white custom-light-shadow"
              } 2xl:gap-4 w-full xl:h-[370px] mx-auto p-6 flex flex-col items-center justify-center gap-2 rounded-[16px] relative z-20`}
            >
              {/* Card Content */}
              <div className="w-full flex items-center justify-start gap-2">
                {/* Icon */}
                <div className="h-[62px] md:w-[75px] xl:w-[140px] bg-[#FFC5AE1A] rounded-[8px] flex items-center justify-center">
                  <Image
                    loader={customLoader}
                    width={40}
                    height={33}
                    src="/transparent-process-icon.png"
                    alt="transparent-process-icon"
                    title="transparent-process-icon"
                    className="w-[40px] h-[33px]"
                  />
                </div>
                {/* Title */}
                <h2 className="text-base font-semibold">
                  Transparent Process And Professional Developers
                </h2>
              </div>
              {/* Description */}
              <p className="text-sm font-normal">
                We believe in transparency of mobile application development and
                so our mobile application consultation depends on the firm
                objectives, and solutions to avoid any future obstacles in the
                processes. Our expertise also lies in mobile app development of
                B2B, B2C, and various custom-made mobile applications.
                Therefore, you can request mobile consulting through our
                application or web portal also, to experience a pure form of
                professional body.
              </p>
            </div>
          </div>

          <div className="flex flex-col 2xl:justify-center gap-6 relative">
            <div
              className={`${
                theme === "dark"
                  ? "bg-[#2d2d2d]"
                  : "bg-white custom-light-shadow"
              } 2xl:gap-4 w-full mx-auto h-auto p-6 flex flex-col items-center justify-start gap-2 rounded-[16px] relative z-20`}
            >
              {/* Card Content */}
              <div className="w-full flex items-center justify-start gap-2">
                {/* Icon */}
                <div className="h-[62px] px-5 bg-[#FFC5AE1A] rounded-[8px] flex items-center justify-center">
                  <Image
                    loader={customLoader}
                    width={32}
                    height={41}
                    src="/focused-strategies.png"
                    alt="focused-strategies-icon"
                    title="focused-strategies-icon"
                    className="w-[32px] h-[41px]"
                  />
                </div>
                {/* Title */}
                <h2 className="text-base font-semibold">
                  Focused <br />
                  Strategies
                </h2>
              </div>
              {/* Description */}
              <p className="text-sm font-normal">
                Dignite Studios' service scope presents extremely immersed
                mobile application development consulting services while
                exerting multiple apps like social networking app, mobile
                banking, or user-friendly fitness apps, we maintain a risk-free
                development process to ensure its efficacy and mobile strategy.
              </p>
            </div>
            <div
              className={`${
                theme === "dark"
                  ? "bg-[#2d2d2d]"
                  : "bg-white custom-light-shadow"
              } 2xl:gap-4 w-full mx-auto h-auto p-6 flex flex-col items-center justify-center gap-2 rounded-[16px] relative z-20`}
            >
              {/* Card Content */}
              <div className="w-full flex items-center justify-start gap-2">
                {/* Icon */}
                <div className="h-[62px] px-5 bg-[#FFC5AE1A] rounded-[8px] flex items-center justify-center">
                  <Image
                    loader={customLoader}
                    width={37}
                    height={41}
                    src="/business-growth-icon.png"
                    alt="business-growth-icon"
                    title="business-growth-icon"
                    className="w-[37px] h-[41px]"
                  />
                </div>
                {/* Title */}
                <h2 className="text-base font-semibold">
                  Drive Business <br /> Growth
                </h2>
              </div>
              {/* Description */}
              <p className="text-sm font-normal">
                Dignite Studios, 100% proven track record will lead your
                business in the new dimensions of its growth, where you will
                experience top-notch mobile application consulting privileges.
                Whether you value Android app development or iOS app
                development, our exceptional team of refined experts will boost
                your app business growth in just time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluentialChooseUs;
