"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { headings, paragraphs } from "@/constants/mobileappdevsection";
import MobileAppDevSectionAccordion from "./MobileAppDevSectionAccordion";

const MobileAppDevSection = () => {
  const { theme } = useContext(GlobalContext);

  const [selectedHeading, setSelectedHeading] = useState(headings[0]);

  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  return (
    <section className="w-full px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 lg:py-12">
      <h1
        className={`${
          theme === "light" ? "text-black" : "text-white"
        } font-bold uppercase text-4xl lg:text-[64px] lg:tracking-[-2.56px] lg:leading-none`}
      >
        mobile app development <br /> services
      </h1>
      <div
        className={`border w-full my-4 ${
          theme === "light" ? "border-[#E7E7E7]" : "border-gray-500"
        }`}
      />

      <div className="w-full hidden xl:flex items-start justify-start">
        <div className="w-[40%]">
          <ul className="flex flex-col items-start gap-6">
            {headings.map((heading, index) => (
              <li
                key={index}
                onClick={() => handleHeadingClick(heading)}
                className={`cursor-pointer w-full flex items-center justify-start gap-3 ${
                  selectedHeading === heading
                    ? "text-[#F15C20]"
                    : theme === "dark"
                    ? "text-white"
                    : "text-black"
                } ${
                  selectedHeading === heading ? "text-[#F15C20]" : "text-black"
                }`}
              >
                <span className="text-xl font-normal text-[#5C5C5C]">
                  0{index + 1}/
                </span>{" "}
                <span
                  className={`text-[28px] font-semibold group-hover:text-[#F15C20] transition-all duration-200 flex items-center justify-start gap-3`}
                >
                  {heading}{" "}
                  {selectedHeading === heading && (
                    <BsArrowRight className="w-5" />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[60%] px-6 flex flex-col items-start gap-5">
          <p
            className={`text-[24px] leading-[32.16px] ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            {paragraphs[selectedHeading]}
          </p>
          <Link
            href={{
              pathname: "/contact-us",
            }}
            className={`py-8 px-[26px] border border-[#F15C20] text-[#F15C20] hover:text-white ${theme === 'light' ? 'bg-white': 'bg-[#222222]'} hover:bg-[#F15C20] transition-all duration-300 rounded-full text-xl font-medium`}
          >
            Start Your Project
          </Link>
        </div>
      </div>
      <div className="w-full block xl:hidden">
        <MobileAppDevSectionAccordion />
      </div>
    </section>
  );
};

export default MobileAppDevSection;
