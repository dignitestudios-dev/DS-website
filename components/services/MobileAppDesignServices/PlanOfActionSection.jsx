"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const PlanOfActionSection = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className={`w-full py-12 global-padding-horizontal`}>
      <div
        className={`w-full ${
          theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#FAFAFA]"
        } rounded-3xl p-6 lg:p-16 relative`}
      >
        <div className="flex flex-col items-start gap-6 xl:w-[50%]">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] 2xl:text-[84px] font-bold tracking-tighter">
            Plan of Action
          </h1>
          <p
            className={`text-[18px] font-normal ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            Unveiling a world-class company Dignite Studios, to thrive your way
            with exceptional sleek design, outstanding features, highly
            optimized app development process, and firm compliance with top
            programming protocols. Dignite’s goal-oriented team aims to deliver
            quality-driven UI/UX design in a snap.
          </p>
          <div className="w-full lg:w-auto lg:block">
            <Link
              href="/contact-us"
              className="py-3 px-5 text-base lg:py-7 lg:px-14 float-start bg-[#F15C20] top-rated-btn-shadow rounded-full text-[#ffff] lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
            >
              Get in Touch <FiArrowUpRight className="text-xl" />
            </Link>
          </div>
        </div>
        <Image
          loader={customLoader}
          width={712.18}
          height={1122.32}
          src="/plan-of-action.webp"
          alt="Plan of action image"
          className="absolute right-0 top-0 bottom-0 h-full rounded-r-3xl hidden xl:block"
        />
      </div>
    </section>
  );
};

export default PlanOfActionSection;
