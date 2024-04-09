'use client'

import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { chooseus } from "../../constants/whychooseus";
import { GlobalContext } from "@/context/GlobalContext";

const WhyChooseUsSection = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className={`my-5 px-4 md:px-12 lg:px-28 text-center`}>
      <h1
        style={{
          color: palette?.color,
        }}
        className={`uppercase font-extrabold text-4xl lg:text-5xl lg:font-bold mb-2 lg:mb-8`}
      >
        why choose us
      </h1>
      <div className="py-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 gap-6">
        {chooseus.map((c) => {
          return (
            <WhyChooseUsCard
              title={c.title}
              description={c.description}
              icon={c.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
