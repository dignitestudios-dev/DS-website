"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const HighQualifiedIosDevelopers = () => {
  const { theme } = useContext(GlobalContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <sectoin
      className="w-full py-12 lg:py-20 global-padding-horizontal flex flex-col lg:flex-row items-center gap-6"
      ref={ref}
    >
      <div  className={`w-full border-[12px] ${
          theme === "light"
            ? "border-[#FAFAFA] bg-white"
            : "border-[#2d2d2d] bg-[#1c1c1c]"
        } rounded-[34px] min-h-[610px] p-8`}
      >
        <h2 className="font-bold lg:font-extrabold text-4xl lg:text-5xl xl:text-[64px] 2xl:text-[80px] tracking-tighter xl:font-bold lg:leading-[77px] my-4">
          Highly-Qualified <span className="text-[#F15C20]">iOS</span>{" "}
          Developers
        </h2>
        <p className="text-sm md:text-[18px] font-normal leading-[26.46px]">
          Hiring an iOS developer is an entrepreneurial investment that can
          significantly enhance your app’s user experience and overall worth to
          drive business equity. An experienced iOS developer put useful
          strategies and development approaches to craft fascinating
          applications specially tailored for the Apple ecosystem. Here at
          Dignite Studios, you can hire top talent to leverage modern
          technologies that adhere to effective prototypes. We follow agile
          development steps, to provide strong business benchmarks and
          compelling iOS frameworks. Our developers can build seamless
          integrations, high-security features, and smooth graphical
          representation to elevate the app’s quality.
        </p>
        <div className="mt-7">
          <ContactButton text1={"Hire Now"} text2={"Let's talk"} />
        </div>
      </div>

      <div className="w-full lg:w-[40%]">
        <div
          className={`w-full ${
            theme === "light" ? "bg-[#FAFAFA]" : "bg-[#1c1c1c]"
          } rounded-[40px] h-[610px] lg:w-[437px] flex items-center justify-center overflow-hidden relative`}
          ref={ref}
        >
          <img
            src="/hire-ios-developer-mockup-1.webp"
            alt="the image shows multiple screens to hire iOS developers"
            className="w-[340px] md:w-[396px] h-[428.77px] md:h-[528.77px] relative -left-4 top-5"
          />
          <img
            src="/hire-ios-developer-mockup-2.webp"
            alt="the image shows multiple screens to hire iOS developers"
            className={`w-[200px] md:w-[246px] h-[308px] md:h-[358.77px] absolute -right-4 top-0 object-contain ${
              isInView && "image-enter-right"
            }`}
          />
          <img
            src="/hire-ios-developer-mockup-3.webp"
            alt="the image shows multiple screens to hire iOS developers"
            className={`w-[] md:w-[136px] h-[308px] md:h-[308.77px] absolute -right-4 bottom-0 object-contain ${
              isInView && "image-enter-right"
            }`}
          />
          <img
            src="/hire-ios-developer-mockup-4.webp"
            alt="the image shows multiple screens to hire iOS developers"
            className={`w-[180px] md:w-[250.58px] h-[378.18px] object-contain absolute -top-32 -left-1 ${
              isInView && "image-enter-down"
            }`}
          />
          <img
            src="/hire-ios-developer-mockup-5.webp"
            alt="the image shows multiple screens to hire iOS developers"
            className={`absolute -bottom-28 md:-bottom-24 -right-4 md:-right-2 w-[230px] md:w-[280.58px] h-[325.18px] object-contain ${
              isInView && "image-enter-up"
            }`}
          />
          <img
            src="/hire-ios-developer-mockup-6.webp"
            alt="the image shows multiple screens to hire iOS developers"
            className={`absolute -left-4 -bottom-20 md:-bottom-12 w-[226px] md:w-[286px] h-[448.77px] object-contain ${
              isInView && "image-enter-left"
            }`}
          />
          <img
            src="/hire-ios-developer-mockup-7.webp"
            alt="the image shows multiple screens to hire iOS developers"
            className={`absolute -left-14 -top-10 w-[130px] md:w-[200.58px] h-[378.18px] object-contain ${
              isInView && "image-enter-left"
            }`}
          />
        </div>
      </div>
    </sectoin>
  );
};

export default HighQualifiedIosDevelopers;
