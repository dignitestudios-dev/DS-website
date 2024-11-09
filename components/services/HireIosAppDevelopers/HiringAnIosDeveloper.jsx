"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const hiring_process = [
  "Initial Screening",
  "Cultural Fit And Soft Skills",
  "Final Interview",
  "Technical Assessment",
  "Panel Interviews",
  "Reference Check",
];

const HiringAnIosDeveloper = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full py-12 lg:py-20 global-padding-horizontal">
      <section
        className={`flex flex-col lg:flex-row gap-12 border-[14px] rounded-[40px] p-3 lg:p-14 ${
          theme === "light"
            ? "border-[#F6F6F6]"
            : "border-[#2d2d2d] bg-[#1c1c1c]"
        }`}
      >
        <div className="w-full lg:w-[60%] flex flex-col items-start gap-4">
          <h2
            className={`font-bold lg:font-extrabold text-4xl lg:text-5xl xl:text-[72px] 2xl:text-[80px] tracking-tighter xl:font-bold lg:leading-[77px]`}
          >
            Hiring An <span className="text-[#F15C20]">iOS</span> Developer
          </h2>
          <p
            className={`text-[18px] ${
              theme === "light" && "#2A2A2A"
            } lg:leading-[26.46px]`}
          >
            Here, our mobile app developers conduct an exceptional development
            structure for your iOS app while engaging top developers. With a
            comprehensive assessment, we recruit top iOS developers to build
            your startup business or large enterprises with the proper skills
            and technical expertise to ensure you choose the right developer for
            your project needs. Underneath the essential key points, we always
            look forward to hiring top iOS developers.
          </p>
          <div className="mt-2">
            <ContactButton text1={"Hire Now"} text2={"Let's Discuss"} />
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex flex-col items-start gap-6">
          {hiring_process.map((p, index) => {
            return (
              <div
                className={`${
                  theme === "light" ? "bg-[#F6F6F6]" : "bg-[#2d2d2d]"
                } h-[54px] flex items-center px-6 rounded-[18px] w-full md:w-[380px]`}
                key={index}
              >
                <p className="text-[15px] md:text-[18px] font-medium">{p}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HiringAnIosDeveloper;
