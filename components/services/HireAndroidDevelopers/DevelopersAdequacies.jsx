"use client";
import { HireAndroidDevelopersAdequacies } from "@/constants/HireAndroidDevelopersAdequacies";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const DevelopersAdequacies = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-12 lg:py-20 global-padding-horizontal">
      <div className="flex flex-col items-center text-center gap-5 mb-12">
        <h2 className="headings-size">
          <div className="flex flex-col items-center mb-4">
            <p className="text-[#F15C20] text-xl font-bold uppercase tracking-normal">
              Dignite’s Android App
            </p>
            <img
              src="/hire-android-developers-lines.png"
              alt=""
              className="w-[96px] h-[8px]"
            />
          </div>
          <span> Developers Adequacies</span>
        </h2>
        <p
          className={`text-[15px] md:text-[15px] font-normal ${
            theme === "light" && "text-[#2A2A2A]"
          } lg:w-[64%] mt-3 leading-[20.4px]`}
        >
          Skilled developers can lead your project scope up to the highest level
          with constructive solutions to foster business growth. Hire dedicated
          Android developers of Dignite Studios to build Android app with
          potential and practical measures to thrive globally.
        </p>
      </div>

      <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HireAndroidDevelopersAdequacies.map((card, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col items-center text-center p-10 gap-4 border border-[#ECECEC] rounded-[24px] ${
                theme === "dark" ? "border-[#4f4f4f]" : "border-[#ECECEC]"
              }`}
            >
              <div className="w-[50px] h-[50px] rounded-[12px] bg-[#F15C2014] flex items-center justify-center">
                <img
                  src={card.icon_src}
                  alt={card.alt_tag}
                  className="w-[28px] h-[28px]"
                />
              </div>
              <h3 className="text-[18px] font-semibold">{card.title}</h3>
              <p className="text-xs text-[#8F8F8F] leading-[16.14px] font-[400]">
                {card.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DevelopersAdequacies;
