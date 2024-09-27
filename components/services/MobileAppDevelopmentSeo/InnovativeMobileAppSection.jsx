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
      className="w-full relative px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48 mt-10 md:mt-24 xl:mt-36 py-10"
      style={{ background: palette?.background }}
    >
      <div
        className={`w-full ${
          theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#F9F9F9]"
        } rounded-[28px] flex flex-col md:flex-row items-start md::items-center justify-between h-auto md:h-[220px] lg:h-auto xl:h-[443px] relative`}
      >
        <div className="py-7 px-6 xl:px-16 flex flex-col items-start gap-4 lg:gap-6">
          <h2 className="font-extrabold text-3xl lg:text-4xl xl:text-[64px] 2xl:text-[80px] tracking-tighter xl:font-bold uppercase lg:leading-[47px] xl:leading-[77.45px] 2xl:leading-[87.45px]">
            <div className="flex flex-col items-start mb-4">
              <h3 className="text-xl font-bold text-[#8F8F8F] uppercase tracking-normal">
                Empower Your Vision
              </h3>
            </div>
            into an Innovative <br /> Mobile App. 
          </h2>

          <div className="w-full lg:w-auto flex justify-start">
            <Link
              href="/contact-us"
              className="py-3 px-5 lg:py-[20px] lg:px-[30px] xl:py-[28px] xl:px-[60px] float-end bg-[#F15C20] top-rated-btn-shadow rounded-full text-white text-base xl:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
            >
              Schedule a call <FiArrowUpRight className="text-xl" />
            </Link>
          </div>
        </div>
        <Image
          loader={customLoader}
          loading="lazy"
          width={544.12}
          height={557.42}
          src="/dignite-service-scope-mockup.webp"
          alt="dignite-service-scope-mockup"
          className="md:absolute md:bottom-0 md:right-0 md:h-[300px] md:w-[50%] lg:h-[360px] xl:h-[557.42px] xl:w-[544.12px]"
        />
      </div>
    </section>
  );
};

export default InnovativeMobileAppSection;
