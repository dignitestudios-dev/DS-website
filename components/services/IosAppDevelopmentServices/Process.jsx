"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ProcessCard from "../AndroidAppDevelopmentServices/ProcessCard";
import { IOS_APP_DEVELOPMENT_PROCESS } from "@/constants/iosappdevelopmentprocess";
import ContactButton from "@/components/global/ContactButton";

const Process = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-12 lg:py-20 global-padding-horizontal lg:mt-0">
      <div className="w-full flex flex-col xl:flex-row items-start justify-between gap-0 md:gap-6">
        <div className="w-full xl:w-[70%]">
          <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
            Dignite’s iOS App Development
          </p>
          <h2 className={`headings-size`}>process</h2>
          <p
            className={`text-[15px] my-4 font-normal ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            We believe in focusing on a rigorous and systematic approach in
            every stage of development. Our consumer-centric strategy affirms
            the most advanced technologies to avoid errors and bugs. Our
            developers ensure the right testing process throughout the
            development phase to provide a unique user experience.
          </p>
        </div>
        <div className="mb-8 lg:mb-0">
          {/* <Link
            href="/contact-us"
            className="py-5 px-6 text-base xl:py-7 xl:px-8 float-start bg-[#F15C20] top-rated-btn-shadow rounded-full text-[#ffff] lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
          >
            Start Your Project <FiArrowUpRight className="text-xl" />
          </Link> */}
          <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
        </div>
      </div>

      <div className="w-full lg:mt-6 xl:mt-0 lg:py-2 grid grid-cols-1 gap-2 lg:gap-0 md:grid-cols-2 xl:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 ">
        {IOS_APP_DEVELOPMENT_PROCESS.map((s, key) => {
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
