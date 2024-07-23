"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const IndustryProtocols = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-16 lg:py-12 global-padding-horizontal lg:mt-0">
      <div className="w-full flex flex-col xl:flex-row items-start justify-between gap-0 md:gap-6">
        <div className="w-full xl:w-[70%]">
          <h1 className={`text-xl font-bold text-[#8F8F8F] uppercase mb-4`}>
          Wide Range of
          </h1>
          <h2 className={`headings-size`}>Industry Protocols</h2>
          <p
            className={`text-[18px] my-4 font-normal ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            As a renowned company, we procure scrupulous services to adhere to a wide range of industries. Here, we’ve assisted many large and small enterprises of several industries to go beyond expectations.
          </p>
        </div>
        <div className="mb-8 lg:mb-0">
          <Link
            href="/contact-us"
            className="py-5 px-6 text-base xl:py-7 xl:px-8 float-start bg-[#F15C20] top-rated-btn-shadow rounded-full text-[#ffff] lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
          >
            Start Your Project <FiArrowUpRight className="text-xl" />
          </Link>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 md:my-8">
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 ${
            theme === "light"
              ? "lg:border-b lg:border-r"
              : "border-gray-400 lg:border-b lg:border-r"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">01</span>
          <span className="text-xl font-semibold">Healthcare</span>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12 ${
            theme === "light"
              ? "lg:border-b lg:border-r"
              : "border-gray-400 lg:border-b lg:border-r"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">02</span>
          <span className="text-xl font-semibold">Fintech</span>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12 ${
            theme === "light" ? "lg:border-b" : "border-gray-400 lg:border-b"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">03</span>
          <span className="text-xl font-semibold">E-Commerce</span>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 ${
            theme === "light"
              ? "lg:border-b lg:border-r"
              : "border-gray-400 lg:border-b lg:border-r"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">04</span>
          <span className="text-xl font-semibold">Education</span>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12 ${
            theme === "light"
              ? "lg:border-b lg:border-r"
              : "border-gray-400 lg:border-b lg:border-r"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">05</span>
          <span className="text-xl font-semibold">Travel And Hospitality</span>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12 ${
            theme === "light" ? "lg:border-b" : "border-gray-400 lg:border-b"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">06</span>
          <span className="text-xl font-semibold">Insurance</span>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 ${
            theme === "light" ? "lg:border-r" : "border-gray-400 lg:border-r"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">07</span>
          <span className="text-xl font-semibold">Manufacturing</span>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12 ${
            theme === "light" ? "lg:border-r" : "border-gray-400 lg:border-r"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">08</span>
          <span className="text-xl font-semibold">Social Networking</span>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12`}
        >
          <span className="text-orange-600 text-xl font-bold">09</span>
          <span className="text-xl font-semibold">Travel</span>
        </div>
      </div>
    </section>
  );
};

export default IndustryProtocols;
