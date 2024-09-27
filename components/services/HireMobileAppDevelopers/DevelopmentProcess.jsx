"use client";
import ContactButton from "@/components/global/ContactButton";
import { HIRE_MOBILE_APP_DEV_PROCESS } from "@/constants/HireMoboileAppDevelopmentProcess";
import { PROGRESSIVE_WEB_APP_SERVICES } from "@/constants/ProgressiveWebAppServices";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const DevelopmentProcess = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full global-padding-horizontal py-10 lg:py-20 2xl:py-28">
      <div className="w-full flex flex-wrap gap-y-10">
        <div className="w-full lg:w-[65%]">
          {/* <div className="flex flex-col">
            <span className="text-[#8F8F8F] text-[20px] font-bold uppercase">
              Multiple Types Of Developers To Foster Your
            </span>
          </div> */}
          <h2 className="headings-size mb-4">
            <div className="flex flex-col">
              <span className="text-[#8F8F8F] text-[20px] font-bold uppercase tracking-normal">
                Multiple Types Of Developers To Foster Your
              </span>
            </div>
            <span className="text-[#F15C20]">Development</span> Process
          </h2>
          <p className="text-sm md:text-[18px] font-normal leading-[26.46px]">
            Depending on the nature of the mobile application, our developers
            offer a variety of expertise based on the field of specific
            platforms. Engaging with Dignite’s mobile app developer will no
            longer lead your project’s complexities in more challenging ways.
          </p>
        </div>
        <div className="w-full lg:w-[35%] flex justify-end items-start lg:pt-14">
          <ContactButton
            text1={"Hire Application Developer"}
            text2={"Let's talk"}
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-10">
        {HIRE_MOBILE_APP_DEV_PROCESS.map((service, index) => {
          return (
            <div className="flex flex-col items-start gap-3 border p-6 rounded-[24px] h-[280px]">
              <img
                src={service.image_src}
                alt={service.alt_tag}
                key={index}
                className={`${
                  service.title === "Hire App Programmers"
                    ? "w-[24px]"
                    : "w-[40px]"
                } h-[40px]`}
              />
              <h3 className="text-[20px] font-semibold">{service.title}</h3>
              <p
                className={`text-sm font-normal ${
                  theme === "light" && "text-[#424242] leading-[19.74px]"
                }`}
              >
                {service.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevelopmentProcess;
