"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const VariousIndustriesSection = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-16 lg:py-12 global-padding-horizontal lg:mt-0">
      <div className="w-full flex flex-col xl:flex-row items-start justify-between gap-0 md:gap-6">
        <div className="w-full xl:w-[70%]">
          <h2 className={`headings-size`}>
            <p
              className={`text-xl font-bold text-[#8F8F8F] uppercase mb-4 tracking-normal`}
            >
              Comprehensive iOS Application Development for
            </p>
            Various Industries
          </h2>
          <p
            className={`text-[18px] my-4 font-normal ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            Dignite Studios crafts seamless experiences and exceptional
            optimization in iOS app development for its users and trusted
            partners. We strive to be a full-scale{" "}
            <Link href={"/"} className="text-orange-600">
              mobile app development company
            </Link>{" "}
            across the globe for multiple industries. Also, to bestow unique
            code and launch process our top-notch team bestows unique code to
            launch iOS process for leading outcomes for businesses and brands.
            Here we believe in harnessing modified technologies and innovative
            iOS design practices as per the exigencies of the iOS app
            development frameworks. Following are the industries we have gained
            pre-eminent recognition.
          </p>
        </div>
        <div className="mb-8 lg:mb-0">
          <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
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
          <h3 className="text-xl font-semibold">E-Commerce</h3>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12 ${
            theme === "light"
              ? "lg:border-b lg:border-r"
              : "border-gray-400 lg:border-b lg:border-r"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">02</span>
          <h3 className="text-xl font-semibold">Food And Restaurant</h3>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12 ${
            theme === "light" ? "lg:border-b" : "border-gray-400 lg:border-b"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">03</span>
          <h3 className="text-xl font-semibold">Healthcare</h3>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 ${
            theme === "light"
              ? "lg:border-b lg:border-r"
              : "border-gray-400 lg:border-b lg:border-r"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">04</span>
          <h3 className="text-xl font-semibold">Education</h3>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12 ${
            theme === "light"
              ? "lg:border-b lg:border-r"
              : "border-gray-400 lg:border-b lg:border-r"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">05</span>
          <h3 className="text-xl font-semibold">Finance</h3>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12 ${
            theme === "light" ? "lg:border-b" : "border-gray-400 lg:border-b"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">06</span>
          <h3 className="text-xl font-semibold">Sports</h3>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 ${
            theme === "light" ? "lg:border-r" : "border-gray-400 lg:border-r"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">07</span>
          <h3 className="text-xl font-semibold">Transportation</h3>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12 ${
            theme === "light" ? "lg:border-r" : "border-gray-400 lg:border-r"
          }`}
        >
          <span className="text-orange-600 text-xl font-bold">08</span>
          <h3 className="text-xl font-semibold">Social Networking</h3>
        </div>
        <div
          className={`py-3 md:py-6 flex items-center justify-start gap-5 lg:pl-12`}
        >
          <span className="text-orange-600 text-xl font-bold">09</span>
          <h3 className="text-xl font-semibold">Travel</h3>
        </div>
      </div>
    </section>
  );
};

export default VariousIndustriesSection;
