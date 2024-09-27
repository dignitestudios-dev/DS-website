"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import WhyChooseUsCard from "../IosAppDevelopmentServices/WhyChooseUsCard";
import { MOBILE_APP_MAINTENANCE_CHOOSE_US } from "@/constants/MobileAppMaintenanceChooseUs";
import { NATIVE_APP_DEVELOPMENT_CHOOSE_US } from "@/constants/NativeAppDevChooseUs";

const WhyChooseUs = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`my-14 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  text-center`}
    >
      <h2
        style={{
          color: theme == "dark" ? "#fff" : "#0c0c0c",
        }}
        className={`uppercase text-4xl lg:text-5xl xl:text-[58px] 2xl:text-[74px] tracking-tighter font-bold mb-2 lg:mb-8`}
      >
        why choose us
      </h2>

      <p className="text-base lg:leading-[21.76px] lg:w-[50%] mx-auto lg:text-center mb-6">
        Since Dignite Studios stepped into the world of digitalization, it has
        been marking a prestigious reputation in the leading industry of mobile
        apps. Prevailing a dominance with unmatchable expertise, our mobile app
        development dispenses top-notch native apps that follow the latest
        trends and development tools. Throughout the process of native app
        development, we capture growth advantages and resolve rising business
        challenges.
      </p>

      <div className="mt-7 py-2 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-2 2xl:gap-6">
        {NATIVE_APP_DEVELOPMENT_CHOOSE_US.map((c, index) => {
          return (
            <WhyChooseUsCard
              title={c.title}
              description={c.description}
              icon={c.icon}
              key={index}
              alt={c.alt}
              img_title={c.image_title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
