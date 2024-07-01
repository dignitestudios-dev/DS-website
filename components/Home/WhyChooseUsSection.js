"use client";

import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { chooseus } from "../../constants/whychooseus";
import { GlobalContext } from "@/context/GlobalContext";

const WhyChooseUsSection = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`my-14 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  text-center`}
    >
      <div className="w-full flex flex-col items-center mb-6">
        <h4 className="text-[#F15C20] text-[20px] uppercase font-bold">
          value proposition of
        </h4>
        <img src="/lines2.png" alt="lines2" />
      </div>
      <h1
        style={{
          color: theme == "dark" ? "#fff" : "#0c0c0c",
        }}
        className={`uppercase font-extrabold   text-4xl lg:text-5xl xl:text-[58px] 2xl:text-[74px] tracking-tighter lg:font-bold mb-2 lg:mb-8`}
      >
        Dignite Studios
      </h1>

      <p className="text-base lg:leading-[21.76px] lg:w-[50%] mx-auto lg:text-center mb-6">
        Dignite Studios stands among the top mobile app development companies in
        the US, holding an experienced and skillful dedicated software
        development team to meet the needs of your valuable business, whether
        it's a start-up or a large enterprise we accommodate adeptly and
        productively.
      </p>

      <div className="py-2 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-2 2xl:gap-6">
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
