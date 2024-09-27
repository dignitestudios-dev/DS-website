"use client";
import { BENEFITS_OF_WEB_APP_DEV } from "@/constants/BenefitsOfWebAppDev";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const BenefitsOfWebAppDev = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-12 global-padding-horizontal lg:mt-0">
      <div className="w-full flex flex-col items-start text-start gap-3">
        <h2 className={`headings-size`}>
          <p
            className={`text-xl font-bold text-[#8F8F8F] uppercase tracking-normal mb-3`}
          >
            Benefits of
          </p>
          Web App Development <br /> with Dignite Studios
        </h2>
        <p
          className={`text-[18px] lg:w-[60%] my-4 font-normal ${
            theme === "light" && "text-[#2A2A2A]"
          }`}
        >
          The top-notch development team of Dignite Studios bestows
          detail-oriented services to enhance credibility and prioritizes the
          integrity of web applications to protect each phase of web
          development.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {BENEFITS_OF_WEB_APP_DEV.map((benefit, index) => {
          return (
            <div
              className={`h-[280px] xl:h-[310px] 2xl:h-[340px] w-full rounded-[18px]
                   p-5 md:p-8 flex flex-col items-start gap-0 text-start group  ${
                     theme === "dark"
                       ? "bg-[#393939] hover:bg-[#F15C20] text-white transition-all duration-200"
                       : "bg-[#FAFAFA] hover:bg-[#F15C20] text-white transition-all duration-200"
                   }`}
            >
              <h3
                className={`font-bold text-xl md:mb-2 ${
                  theme === "light"
                    ? "text-[#424242] group-hover:text-white"
                    : ""
                }`}
              >
                {benefit?.title}
              </h3>
              <p
                className={`${
                  theme === "dark"
                    ? "text-white "
                    : "text-[#8F8F8F] group-hover:text-white"
                } text-[14px] font-medium`}
              >
                {benefit.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsOfWebAppDev;
