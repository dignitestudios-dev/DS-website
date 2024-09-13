"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const TopNotchIosApp = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full py-6 lg:py-12 global-padding-horizontal">
      <div
        className={`w-full rounded-3xl flex flex-col xl:flex-row items-end overflow-y-hidden  relative ${
          theme === "light" ? "bg-[#FAFAFA]" : "bg-[#1c1c1c]"
        }`}
      >
        <div className="flex flex-col items-start gap-5 w-full xl:w-[55%] p-6 lg:p-14">
          <div className="flex flex-col items-start">
            <p className="text-[#F15C20] font-bold text-xl uppercase">
              top-notch ios application
            </p>
            <img
              src="/wide-lines.png"
              alt="lines"
              className="w-40 h-2 md:w-[289px]"
            />
          </div>
          <h2 className="text-3xl lg:text-[48px] xl:text-[68px] 2xl:text-[72px] font-bold lg:leading-[64.94px] tracking-tighter">
            Development <br /> Company
          </h2>
          <p
            className={`text-base font-normal ${
              theme === "light" && "text-[#5C5C5C]"
            }`}
          >
            Experience well-structured development of mobile apps, with our
            years of strong acquaintance in the field of iOS development that
            leverage unique tools, languages, and wireframes to excel in the
            business of digital cosmos. Make your iOS app development the most
            advanced with current functionalities and operations.
          </p>
          <div className="mt-3">
            {/* <Link
              href={"/contact-us"}
              className="py-4 px-[20px] bg-[#F15C20] text-white text-base font-semibold rounded-full flex items-center gap-1"
            >
              Let’s Start the Project <FiArrowUpRight className="text-xl" />
            </Link> */}
            <ContactButton
              text1={"Let's Start Your Project"}
              text2={"Let's talk"}
            />
          </div>
        </div>
        <img
          src="/ios-application-development-company.webp"
          width={310}
          height={488}
          alt="iOS app development company shows two mock screens of iOS applications"
          className="h-[390px] w-[220px] md:h-[310px] lg:h-[370px] lg:w-[254px] xl:h-[488px] mx-auto"
          data-aos="slide-up"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
        />
      </div>
    </div>
  );
};

export default TopNotchIosApp;
