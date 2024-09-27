"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const WellKnownAppDevCompany = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full global-padding-horizontal">
      <div
        className={`${
          theme === "light" ? "bg-[#FAFAFA]" : "bg-[#2d2d2d]"
        } rounded-[40px] p-6 lg:p-16 flex flex-col lg:flex-row gap-6`}
      >
        <div className="w-full lg:w-[60%] flex flex-col gap-2">
          <h2 className="font-bold lg:font-extrabold text-4xl lg:text-5xl xl:text-[64px] 2xl:text-[80px] tracking-tighter xl:font-bold lg:leading-[77px] my-4">
            Well-Known <span className="text-[#F15C20]">Hybrid</span> App
            Development Company
          </h2>
          <p className="text-sm md:text-[18px] font-normal leading-[26.46px]">
            Hiring an iOS developer is an entrepreneurial investment that can
            significantly enhance your app’s user experience and overall worth
            to drive business equity. An experienced iOS developer put useful
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

        <div className="relative w-full lg:w-[40%]"></div>
      </div>
    </section>
  );
};

export default WellKnownAppDevCompany;
