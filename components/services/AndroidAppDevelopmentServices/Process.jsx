'use client'
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ProcessCard from "./ProcessCard";
import { process } from "@/constants/mobileappdevelopmentprocess";

const Process = () => {
    const {theme} = useContext(GlobalContext)
  return (
    <section className="w-full py-12 global-padding-horizontal mt-[450px] lg:mt-0">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-6">
        <div className="w-full lg:w-[73%]">
          <h3 className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
            mobile app development
          </h3>
          <h1
            className={`font-extrabold text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[74px] tracking-tighter xl:font-bold uppercase lg:leading-[77.45px]`}
          >
            process
          </h1>
          <p
            className={`text-[15px] my-4 font-normal ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            World-class mobile app development company Dignite Studios,
            compelling custom Android app development services encumber a
            vigorous approach to frame practical Android app development
            solutions to build highly fortified custom Android apps for your
            rapid business elevation.
          </p>
        </div>
        <div className="">
          <Link
            href="/contact-us"
            className="py-3 px-5 text-base lg:py-7 lg:px-14 float-start bg-[#F15C20] top-rated-btn-shadow rounded-full text-[#ffff] lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
          >
            Schedule a call <FiArrowUpRight className="text-xl" />
          </Link>
        </div>
      </div>

      <div className="w-full  lg:py-2 grid grid-cols-1 gap-2 lg:gap-0 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 ">
        {process.map((s, key) => {
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

export default Process;
