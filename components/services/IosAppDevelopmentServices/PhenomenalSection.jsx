"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import MobileAppDevSectionAccordion from "../MobileAppDevelopmentSeo/MobileAppDevSectionAccordion";
import { phenomenala_accordions } from "@/constants/phenomenalaccordions";

const PhenomenalSection = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <section className="w-full px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 py-12">
      <div className="flex flex-col items-center mb-5">
        <h1 className="text-[#F15C20] text-xl font-bold uppercase">
          Phenomenal
        </h1>
        <img src="/lines.png" alt="lines" className="" />
      </div>
      <h2
        className={`text-center mb-5 ${
          theme === "light" ? "text-black" : "text-white"
        } headings-size lowercase`}
      >
        i
        <span className="uppercase">
          OS App Development <br /> Services
        </span>
      </h2>
      <p className="text-base font-normal text-center lg:w-[60%] mx-auto mb-6">
        The leading iOS application development company Dignite Studios provides
        the best layout of applications with a standardized and well-developed
        approach for user-friendly apps.
      </p>
      <MobileAppDevSectionAccordion items={phenomenala_accordions} />
    </section>
  );
};

export default PhenomenalSection;
