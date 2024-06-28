"use client";
import {
  headings,
  items,
  paragraphs,
} from "@/constants/convenientmobileappdevelopment";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import ConvenientMobileAppAccordion from "./ConvenientMobileAppAccordion";

const ConvenientMobileAppDevelopment = () => {
  const { palette, theme } = useContext(GlobalContext);
  const [selectedHeading, setSelectedHeading] = useState(headings[0]);
  console.log("selectedHeading >> ", selectedHeading)

  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  const getSelectedParagraph = () => {
    return paragraphs[selectedHeading] || {}; // Handle missing heading gracefully
  };

  return (
    <div className="global-padding-horizontal py-20">
      <h1 className="uppercase font-extrabold  lg:text-start text-4xl xl:text-[72px] 2xl:text-[104px] tracking-tighter lg:font-bold lg:text-[64px] lg:leading-[77.45px] 2xl:leading-[107px]">
        Convenient Mobile App Development Services
      </h1>
      <p className="text-base font-normal lg:w-[80%] my-4">
        With extensive experience in the field of mobile testing, our service
        offers full-cycle mobile app testing solutions whether for complex
        mobile applications or simple mobile apps we burgeon cost-effective
        mobile testing solutions to ensure the usability, functionality, and
        accessibility of the application. Whereas, our company truly stands
        among the top names in the tech business. With a proven track record,
        our mobile testing services have served meticulous projects to large
        industries and firms.
      </p>

      <div
        style={{
          borderBottom: `2px solid ${palette?.light_contrast_background}`,
        }}
      />

      <div className="w-full hidden lg:flex items-start justify-start mt-8">
        <div className="w-[40%]">
          <ul className="flex flex-col items-start gap-3">
            {headings.map((heading, index) => (
              <li
                key={index}
                className={`cursor-pointer w-full flex items-center justify-start gap-3 ${
                  selectedHeading === heading
                    ? "text-[#F15C20]"
                    : theme === "dark"
                    ? "text-white"
                    : "text-black"
                } ${
                  selectedHeading === heading ? "text-[#F15C20]" : "text-black"
                }`}
                onClick={() => handleHeadingClick(heading)}
              >
                <span className="text-xl font-normal text-[#5C5C5C]">
                  0{index + 1}/
                </span>
                <span className="text-[28px] font-semibold group-hover:text-[#F15C20] transition-all duration-200 flex items-center justify-start gap-3">
                  {heading}
                  {selectedHeading === heading && (
                    <BsArrowRight className="w-5" />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[60%] px-6 flex flex-col items-start gap-5">
          {getSelectedParagraph().image && (
            <img
              src={getSelectedParagraph().image}
              alt={getSelectedParagraph().image_alt}
              title={getSelectedParagraph().image_title}
              className="w-full"
            />
          )}
          <p className="text-[24px] leading-[32.16px]">
            {getSelectedParagraph().description}
          </p>
          <Link
            href={"/contact-us"}
            className="py-8 px-[26px] border border-[#F15C20] text-[#F15C20] hover:text-white hover:bg-[#F15C20] transition-all duration-300 rounded-full text-xl font-medium"
          >
            Start Your Project
          </Link>
        </div>
      </div>

      <div className="block lg:hidden">
        <ConvenientMobileAppAccordion items={items}/>
      </div>
    </div>
  );
};

export default ConvenientMobileAppDevelopment;
