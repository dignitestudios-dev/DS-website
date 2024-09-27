"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import ProcessCard from "../AndroidAppDevelopmentServices/ProcessCard";
import { DEVELOPMENT_APP_DEV_PROCESS } from "@/constants/WebAppDevProcess";

const WebAppProcess = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-12 global-padding-horizontal lg:mt-0">
      <div className="w-full flex flex-col items-start text-start gap-3">
        <h2 className={`headings-size`}>
          <p
            className={`text-xl font-bold text-[#8F8F8F] uppercase tracking-normal mb-3`}
          >
            Potent
          </p>
          web app <span className="text-[#F15C20]">process</span>
        </h2>
        <p
          className={`text-[18px] lg:w-[50%] my-4 font-normal ${
            theme === "light" && "text-[#2A2A2A]"
          }`}
        >
          To build web applications strikingly absolute, we create constructive
          methodologies to fabricate a well-organized web app development
          process.
        </p>
      </div>

      <div className="w-full lg:mt-6 xl:mt-0 lg:py-2 grid grid-cols-1 gap-2 lg:gap-0 md:grid-cols-2 xl:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 ">
        {DEVELOPMENT_APP_DEV_PROCESS.map((s, key) => {
          return (
            <ProcessCard
              key={key}
              count={key}
              num={s.count}
              title={s.title}
              desc={s.desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WebAppProcess;
