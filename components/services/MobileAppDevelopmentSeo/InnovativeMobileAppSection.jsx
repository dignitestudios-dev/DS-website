"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const InnovativeMobileAppSection = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <section
      id="dignite studios services scope"
      className="w-full relative px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48 mt-32 pb-10"
      style={{ background: palette?.background }}
    >
      <div
        className={`w-full ${
          theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#F9F9F9]"
        } rounded-[28px] flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[443px] relative`}
      >
        <div className="py-7 px-6 md:px-16 flex flex-col items-start gap-6">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#8F8F8F] uppercase">
            Empower Your Vision
            </h3>
          </div>

          <h1 className="font-extrabold text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[80px] tracking-tighter xl:font-bold uppercase lg:leading-[77.45px] 2xl:leading-[87.45px]">
          into an Innovative <br /> Mobile App. 
          
          </h1>

          <div className="w-full lg:w-auto hidden lg:block">
            <Link
              href="/contact-us"
              className="py-3 px-5 text-base lg:py-[28px] lg:px-[60px] float-end bg-[#F15C20] top-rated-btn-shadow rounded-full text-white lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
            >
              Schedule a call <FiArrowUpRight className="text-xl" />
            </Link>
          </div>
        </div>
        <Image
          loader={customLoader}
          width={544.12}
          height={557.42}
          src="/dignite-service-scope-mockup.webp"
          alt="dignite-service-scope-mockup"
          title="dignite-service-scope-mockup"
          className="lg:absolute lg:bottom-0 lg:right-7 ml-7 lg:ml-0"
        />
      </div>
    </section>
  );
};

export default InnovativeMobileAppSection;
