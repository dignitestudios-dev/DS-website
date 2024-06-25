"use client";
import React, { useContext } from "react";
import InfluentialNavbar from "./InfluentialNavbar";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";

const InfluentialHero = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="w-full">
      <InfluentialNavbar />
      <div className="w-full h-full global-padding-horizontal flex flex-col items-center justify-center text-center gap-8 py-28 lg:py-32">
        <h1 className="text-4xl lg:text-[68px] font-bold lg:leading-[70.72px] hidden lg:block">
          <span className="text-[#F15C20]">Influential</span> Mobile App <br />{" "}
          Consulting Services
        </h1>
        <h1 className="text-4xl lg:text-[68px] font-bold lg:leading-[70.72px] lg:hidden">
          <span className="text-[#F15C20]">Influential</span> Mobile App
          Consulting Services
        </h1>
        <p className={`text-base font-medium leading-[20.81px]`}>
          Get a chance to experience top-notch free consultancy from a <br />{" "}
          leading mobile platform.
        </p>
        <Link
          href={"/contact-us"}
          className="py-[19px] px-[28px] bg-[#F15C20] text-white rounded-full text-center text-base font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default InfluentialHero;
