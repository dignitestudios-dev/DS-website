"use server";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const DriveBusiness = () => {
  return (
    <section className="w-full py-12 global-padding-horizontal md:mt-16 lg:mt-32 2xl:mt-20">
      <div className="w-full bg-[#F15C201A] rounded-[28px] relative xl:h-[418px]">
        <div className="flex flex-col items-start text-start gap-8 p-6 lg:p-8 xl:p-16 2xl:p-24 2xl:gap-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] 2xl:text-[80px] font-bold lg:leading-[57px] xl:leading-[72.45px] 2xl:leading-[77.45px] tracking-tighter">
            Let’s Talk and Drive <br /> Business Together
          </h2>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] font-semibold text-base lg:text-xl text-white rounded-full py-4 px-8 lg:py-[20px] lg:px-[30px] xl:py-[28px] xl:px-[60px] flex items-center justify-center gap-2 hover:opacity-[.75] transition-all duration-300 top-rated-btn-shadow"
          >
            Schedule a call <HiMiniArrowUpRight className="text-2xl" />
          </Link>
        </div>
        <img
          src="/mobile-app-consultation-services.webp"
          alt="A person holding a laptop and providing mobile app consultation services"
          title="mobile app consultation services"
          className="w-[90%] md:w-[45%] lg:w-[40%] ms-3 xl:w-[530px] xl:h-[504px] 2xl:w-[600px] 2xl:h-[584px] md:absolute bottom-0 md:right-4"
        />
      </div>
    </section>
  );
};

export default DriveBusiness;
