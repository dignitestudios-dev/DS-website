"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const DigniteServiceScope = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <section
      id="dignite studios services scope"
      className="w-full relative px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48 mt-7 md:mt-12 lg:mt-16 xl:mt-28 pb-10 2xl:mt-32"
      style={{ background: palette?.background }}
    >
      <div
        className={`w-full ${
          theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#F9F9F9]"
        } rounded-[28px] flex flex-col lg:flex-row items-start lg:items-center justify-between h-auto lg:h-[343px] xl:h-[443px] relative`}
      >
        <div className="py-7 px-6 xl:px-16 flex flex-col items-start gap-6">
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-[#F15C20] uppercase">
              want to know
            </p>
            <Image
              loader={customLoader}
              width={141}
              height={8}
              src="/lines.png"
              alt="design-lines"
            />
          </div>

          <h2 className="font-extrabold text-3xl lg:text-4xl xl:text-[64px] 2xl:text-[80px] tracking-tighter xl:font-bold uppercase lg:leading-[47px] xl:leading-[77.45px] 2xl:leading-[87.45px]">
            Dignite’s Service <br /> Scope?
          </h2>

          <div className="w-full lg:w-auto flex justify-start">
            <Link
              href="/contact-us"
              className="py-3 px-5 text-base xl:py-[28px] xl:px-[60px] float-end top-rated-btn-shadow rounded-full text-white lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
              style={{background:'#F15C20'}}
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
          className="md:absolute md:bottom-0 md:right-7 ml-7 md:ml-0 md:w-[320px] md:h-[320px] xl:h-[557.42px] xl:w-[544.12px]"
        />
      </div>
    </section>
  );
};

export default DigniteServiceScope;
