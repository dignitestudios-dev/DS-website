"use client";
import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { ANDROID_APP_DESIGN_CHOOSE_US } from "@/constants/AndroidAppDesignChooseUs";
import WhyChooseUsCard from "../IosAppDevelopmentServices/WhyChooseUsCard";

const WhyChooseUs = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`py-16 lg:py-20 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  text-center`}
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
        We construct strategic, creative, and technical methodologies to produce
        an exceptional user experience that transcends the client’s requisites.
        Our phenomenal Android mobile app design services leverage top-notch app
        solutions to accelerate the brand’s volume and revenue generation.
      </p>

      <div className="mt-7 py-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 2xl:gap-6">
        {ANDROID_APP_DESIGN_CHOOSE_US.map((c, index) => {
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
