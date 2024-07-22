"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import WhyChooseUsCard from "../IosAppDevelopmentServices/WhyChooseUsCard";
import { MOBILE_APP_MAINTENANCE_CHOOSE_US } from "@/constants/MobileAppMaintenanceChooseUs";

const WhyChooseUs = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`my-14 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  text-center`}
    >
      <h1
        style={{
          color: theme == "dark" ? "#fff" : "#0c0c0c",
        }}
        className={`uppercase text-4xl lg:text-5xl xl:text-[58px] 2xl:text-[74px] tracking-tighter font-bold mb-2 lg:mb-8`}
      >
        why choose us
      </h1>

      <p className="text-base lg:leading-[21.76px] lg:w-[50%] mx-auto lg:text-center mb-6">
        In the modern times of technological enhancement software mobile app
        support and maintenance is as necessary as a penny, to keep the IT
        environment healthy and viable. So, are you wondering about hiring app
        support and maintenance partners? At Dignite Studios, we not only update
        mobile applications but also discover and implement new launch processes
        to scale apps in a split second.
      </p>

      <div className="mt-7 py-2 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-2 2xl:gap-6">
        {MOBILE_APP_MAINTENANCE_CHOOSE_US.map((c, index) => {
          return (
            <WhyChooseUsCard
              title={c.title}
              description={c.description}
              icon={c.icon}
              key={index}
              alt={c.alt}
            />
          );
        })}
      </div>

      <div className="w-full flex justify-center">
        <Link
          href="/contact-us"
          className="py-5 px-6 text-base xl:py-7 mt-8 mb-14 mx-auto text-center xl:px-8 float-start bg-[#F15C20] top-rated-btn-shadow rounded-full text-[#ffff] lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
        >
          Start Your Project <FiArrowUpRight className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default WhyChooseUs;
