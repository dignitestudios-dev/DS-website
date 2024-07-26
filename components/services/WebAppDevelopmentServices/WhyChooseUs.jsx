"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import WhyChooseUsCard from "../IosAppDevelopmentServices/WhyChooseUsCard";
import { WEB_APP_DEV_CHOOSE_US } from "@/constants/WebAppDevChooseUs";

const WhyChooseUs = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`mt-14 mb-24 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 text-center`}
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
      Leveraging the field of web application development services for years, Dignite Studios has excelled in its services regardless of web apps, we’ve nestled multiple web solutions not only subjected to web apps but also web portals. The company ensures a strong framework for the development process of your web project. Our supreme design features and layout will blow your app dimension in just a go.
      </p>

      <div className="mt-7 py-2 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 lg:gap-2 2xl:gap-6">
        {WEB_APP_DEV_CHOOSE_US.map((c, index) => {
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
