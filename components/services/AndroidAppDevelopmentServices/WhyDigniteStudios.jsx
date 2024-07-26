"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const WhyDigniteStudios = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full global-padding-horizontal py-12 grid grid-cols-1 xl:grid-cols-3 gap-10">
      <div className="w-full col-span-3 xl:col-span-1 flex flex-col items-start gap-4">
        <h2
          className={`headings-size group`}
        >
          <span className="text-[#8F8F8F] group-hover:text-[#F15C20]">Why</span>
          <br />
          Dignite Studios
        </h2>
        <p className={`text-[13px] md:leading-[17.68px]`}>
          The top-class mobile app testing services of Dignite Studios
          streamline highly effective testing methodology to prevent disasters
          and provide the most reliable solutions to their partners and
          customers.
        </p>
        <div className="mt-3">
          <Link
            href={"/contact-us"}
            className="py-[20px] px-[30px] xl:py-[28px] xl:px-[60px] rounded-full text-white bg-[#F15C20] text-base md:text-xl font-semibold flex items-center justify-center gap-2 top-rated-btn-shadow hover:opacity-85 transition-all duration-200"
          >
            Contact Us <FiArrowUpRight className="" />
          </Link>
        </div>
      </div>

      <div className="w-full col-span-3 xl:col-span-2">
        <div className="w-full flex flex-col items-start gap-2">
          <img
            src={"/powerful-business-handling-icon.webp"}
            width={36}
            height={36}
            alt="Powerful business handling icon"
            title="Powerful Business Handling"
          />
          <h3 className="text-[18px] font-semibold">
            Powerful Business Handling
          </h3>
          <p
            className={`${
              theme === "light" && "text-[#8F8F8F]"
            } text-xs font-normal lg:leading-[16.14px] lg:w-[60%]`}
          >
            Dignite Studios prioritizes business standards and values to meet
            the clientele's demands to their fullest. Our top-class team of
            custom Android app development company maintains potent strategies
            to make your app powerful and globally worthwhile.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 lg:mt-10">
          <div className="w-full flex flex-col items-start gap-2">
            <img
              src={"/intuitive-user-experience-icon.webp"}
              width={36}
              height={36}
              alt="Intuitive user experience icon"
              title="Intuitive User Experience"
            />
            <h3 className="text-[18px] font-semibold">
              Intuitive User Experience
            </h3>
            <p
              className={`${
                theme === "light" && "text-[#8F8F8F]"
              } text-xs font-normal lg:leading-[16.14px]`}
            >
              We build innovative UI/UX designs and features to grab customer
              attention and once. It is based on your audience demographic and
              social and cultural insights.
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <img
              width={36}
              height={36}
              src={"/scalable-app-compliance-icon.webp"}
              alt="scalable app compliance icon"
              title="Scalable App Compliance"
            />
            <h3 className="text-[18px] font-semibold">
              Scalable App Compliance
            </h3>
            <p
              className={`${
                theme === "light" && "text-[#8F8F8F]"
              } text-xs font-normal lg:leading-[16.14px]`}
            >
              Top-notch trusted Android application development company Dignite
              Studios frames flexible layouts of your mobile projects of
              different Android app types to rank your app on the international
              platform.
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <img
              src={"/impeccable-security-measures-icon.webp"}
              width={36}
              height={36}
              alt="impeccable security measures icon"
              title="Impeccable security measures"
            />
            <h3 className="text-[18px] font-semibold">
              Impeccable Security Measures
            </h3>
            <p
              className={`${
                theme === "light" && "text-[#8F8F8F]"
              } text-xs font-normal lg:leading-[16.14px]`}
            >
              Our services hold reliable security measures that have been taken
              to protect the entire app's data. We also set to ensure data
              management regulations throughout the development.
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <img
              width={36}
              height={36}
              src={"/Translucent-environment-icon.webp"}
              alt="Translucent environment icon"
              title="Translucent Environment"
            />
            <h3 className="text-[18px] font-semibold">
              Translucent Environment
            </h3>
            <p
              className={`${
                theme === "light" && "text-[#8F8F8F]"
              } text-xs font-normal lg:leading-[16.14px]`}
            >
              At Dignite Studios, we maintain all the latest updates and
              activities to keep your mobile app updated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDigniteStudios;
