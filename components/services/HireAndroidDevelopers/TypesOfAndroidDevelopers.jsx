"use client";
import React, { useContext } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GlobalContext } from "@/context/GlobalContext";
import ContactButton from "@/components/global/ContactButton";

export default function TypesOfAndroidDevelopers() {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full relative overflow-hidden global-padding-horizontal py-10 xl:py-20">
      <div className="w-full relative overflow-hidden flex flex-col lg:flex-row">
        <div className="flex flex-col gap-2 mb-6 lg:mb-12">
          <h2 className="headings-size">
            <div className="flex flex-col items-start mb-3">
              <p className="text-[#F15C20] text-xl font-bold uppercase tracking-normal">
                types of
              </p>
              <img
                src="/hire-android-developers-lines.png"
                alt="hire-android-app-developers-lines"
                className="w-[96px] h-[8px]"
              />
            </div>
            <span>Android Developers</span>
          </h2>
          <p
            className={`text-[15px] md:text-[18px] font-normal ${
              theme === "light" && "text-[#2A2A2A]"
            } lg:w-[64%] mt-3 leading-[26.46px]`}
          >
            Forming your Android app with a broad spectrum of expertise and
            proven track record. Hire a team of Dignite Studios to accomplish
            your ultimate goal with better performance and high operating
            platforms. Here we accommodate an Android’s team of the best mobile
            app developers to consummate the product’s prerequisites and
            challenges.
          </p>
        </div>
        <div className="lg:pt-12 mb-14 lg:mb-0">
          <ContactButton text1={"Hire Developer"} text2={"Let's talk"} />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TYPES_OF_ANDROID_DEV.map((card, i) => {
          return (
            <div
              className={`h-auto relative w-full rounded-[18px]
                   p-7 pt-12 flex flex-col items-start justify-start gap-3 text-start group border ${
                     theme === "dark"
                       ? " text-white transition-all duration-200 border-[#4f4f4f]"
                       : " text-white transition-all duration-200"
                   }`}
            >
              <div
                className={`min-w-[182px] px-4 rounded-full absolute -top-6 left-0 h-[48px] flex items-center justify-center gap-1 ${card.bg_color} group-hover:-rotate-6 transition-all duration-300`}
              >
                <img
                  src="/star-icon.png"
                  alt="star-icon"
                  className="w-[24px] h-[24px]"
                />
                <h3
                  className={`font-bold text-base ${
                    theme === "light" ? "text-white" : ""
                  }`}
                >
                  {card?.title}
                </h3>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300 " : "text-[#424242]"
                } text-[13px] font-medium`}
              >
                {card?.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const TYPES_OF_ANDROID_DEV = [
  {
    title: "Junior Developer",
    text: "Android developers often work alongside experienced Android developer to make the development phase smooth. They report to the senior project manager or senior team leader to guide the app development. To establish high-performance apps with appropriate Android security measures it's important to look at Android app developers for hire.",
    bg_color: "bg-[#2EA6FD]",
  },
  {
    title: "Mid-Level Developers",
    text: "Hiring Android developers of mid-senior level can adequately focus on the details of the application requirements with guidance from the senior team leader. Dignite’s dedicated Android developer can competently design and develop Android devices under productive testing systems and maintenance processes. App developers streamline the entire Android operating system with the latest technologies and trends.",
    bg_color: "bg-[#34BE5A]",
  },
  {
    title: "Seniors Developers",
    text: "Senior Android developers bring highly specialized experience and well-qualified expertise in the field of Android. They not only build apps but also update new app also add modern elements to simple app and highly complex app for better engagement rates.",
    bg_color: "bg-[#7646FF]",
  },
];
