"use client";
import { PROGRESSIVE_WEB_APP_SERVICES } from "@/constants/ProgressiveWebAppServices";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProgressiveWebAppServices = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full global-padding-horizontal py-10 lg:py-20 2xl:py-28">
      <div className="w-full flex flex-wrap gap-y-10">
        <div className="w-full lg:w-[65%]">
          <div className="flex flex-col">
            <span className="text-[#8F8F8F] text-[20px] font-bold uppercase">
              Progressive
            </span>
          </div>
          <h2 className="headings-size my-4">
            <span className="text-[#F15C20]">Web App</span> Development Services
          </h2>
          <p className="text-sm md:text-[18px] font-normal leading-[26.46px]">
            Combining all the aspects of curating PWAs, the industry-leading
            progressive web application development company Dignite Studios
            dispenses the premium layout to design PWAs. Heretofore, we
            construct personalized architecture, a potent development process,
            and data migration with high-end development efforts.
          </p>
        </div>
        <div className="w-full lg:w-[35%] flex justify-end items-start lg:pt-14">
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] w-[198px] px-7 py-5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1"
          >
            Start Your Project <FiArrowUpRight className="text-lg" />
          </Link>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-20 lg:gap-y-12 mt-10">
        {PROGRESSIVE_WEB_APP_SERVICES.map((service, index) => {
          return (
            <div className="flex flex-col items-start gap-3">
              <div className="w-[48px] h-[48px] bg-[#F15C2014] rounded-[12px] flex items-center justify-center">
                <img
                  src={service.image_src}
                  alt=""
                  key={index}
                  className="w-[24px] h-[24px]"
                />
              </div>
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

export default ProgressiveWebAppServices;
