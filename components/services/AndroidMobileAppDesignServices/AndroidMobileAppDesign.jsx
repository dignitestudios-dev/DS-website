import { ANDROID_MOBILE_APP_DESIGN } from "@/constants/AndroidMobileAppDesign";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const AndroidMobileAppDesign = () => {
  return (
    <section className="w-full py-16 lg:py-20 global-padding-horizontal">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        <div className="col-span-3 lg:col-span-2">
          <p className="uppercase font-bold text-xl text-[#8F8F8F]">
            Dignite’s Extravagant
          </p>
          <h2 className="headings-size mt-2">
            <span className="text-[#F15C20]">Android </span>Mobile App Design
          </h2>
          <p className="text-lg font-normal mt-4">
            The high-end Android mobile app design service scope lies in
            strategizing project flow with proficiency and addressing complex
            structures of UI/UX designs of Android apps. We’ve developed a
            streamlined technical flow to accommodate the key challenges of our
            clients promptly.
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 flex justify-center items-start lg:pt-4 lg:justify-end">
          <div className="lg:mt-6">
            <Link
              href={"/contact-us"}
              className="bg-[#F15C20] text-white w-[218px] h-[64px] rounded-full text-center flex items-center gap-1 justify-center font-semibold"
            >
              Start Your Project <FiArrowUpRight className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mt-10">
        {ANDROID_MOBILE_APP_DESIGN.map((android, index) => {
          return (
            <div className="flex flex-col items-start gap-2" key={index}>
              <div className="w-[48px] h-[48px] bg-[#F15C2014] rounded-[12px] flex items-center justify-center">
                <img
                  src={android.image_src}
                  alt={android.image_alt}
                  title={android.imagr_title}
                  className="w-[24px] h-[24px]"
                />
              </div>
              <h3 className="text-[24px] font-semibold tracking-[-1.4%]">
                {android.title}
              </h3>
              <p className="text-sm leading-[19.74px]">{android.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AndroidMobileAppDesign;
