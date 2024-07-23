import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const UnrivaledSection = () => {
  return (
    <section className="w-full global-padding-horizontal py-12 grid grid-cols-1 lg:grid-cols-2 gap-y-6">
      <div className="flex flex-col items-start text-start gap-y-3">
        <h1 className="text-xl font-bold text-[#8F8F8F] uppercase">Unrivaled</h1>
        <h2 className="headings-size">
          <span className="text-[#F15C20]">Web App</span> Development Company
        </h2>
        <p className="text-[18px] leading-[26.46px]">
          Industry-leading web application development company Dignite Studios
          holds exclusive practices to drive more value to businesses and
          enterprises. We develop top-notch custom apps, products, and
          professional services. We share a strong heritage and top skillset
          that empower immense pursuance, sanctuary, and tailored web
          development solutions to build unique infrastructure that rapidly
          meets market trends. Our experts firmly believe that business growth
          depends on perfect app strategies and monitoring of the app.
        </p>
        <div className="mt-6">
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] text-white w-[199px] h-[64px] rounded-full text-center flex items-center gap-1 justify-center font-semibold"
          >
            Start Your Project <FiArrowUpRight className="text-2xl" />
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default UnrivaledSection;
