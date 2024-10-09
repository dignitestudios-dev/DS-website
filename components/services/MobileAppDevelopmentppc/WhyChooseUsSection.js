"use client";
import React, { useContext } from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { GlobalContext } from "@/context/GlobalContext";
import { chooseus } from "@/constants/whychooseus";

const WhyChooseUsSection = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`my-14 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  text-center`}
    >
      <h2
        style={{
          color: theme == "dark" ? "#fff" : "#0c0c0c",
        }}
        className={`uppercase font-extrabold text-4xl lg:text-5xl xl:text-[58px] 2xl:text-[74px] tracking-tighter lg:font-bold mb-2 lg:mb-8`}
      >
        why choose us
      </h2>

      <p className="text-base lg:leading-[21.76px] lg:w-[50%] mx-auto lg:text-center mb-6">
      Our revolutionary hybrid app development services bestow a well-organized structure
       to build entirely customized hybrid mobile apps that are highly compatible with 
       various devices. Dignite’s hybrid mobile app developers construct high-powered 
       hybrid software that suits business needs.
      </p>

      <div className="py-2 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-5 2xl:gap-6">
        {chooseus.map((c, index) => {
          return (
            <WhyChooseUsCard
              title={c.title}
              description={c.description}
              icon={c.icon}
              key={index}
              alt={c.alt}
              image_title={c.image_title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
