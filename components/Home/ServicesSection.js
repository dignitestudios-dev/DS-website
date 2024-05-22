'use client'

import React, { useContext } from "react";
import { styles } from "../../styles/styles";
import { GlobalContext } from "@/context/GlobalContext";
import { services } from "@/constants/services";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className={` w-full my-14 px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48 `}>
      <h1
        className={` uppercase font-extrabold text-center lg:text-start text-4xl lg:text-5xl xl:text-[72px] lg:font-bold mb-2 lg:mb-6`}
      >
        Our Services
      </h1>
      <div className="w-full  lg:py-2 grid grid-cols-1 gap-2 lg:gap-0 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 ">
        {services.map((s, key) => {
          return (
            <ServiceCard
              key={key}
              count={key}
              title={s.title}
              desc={s.description}
              light_icon={s.icon_white}
              dark_icon={s.icon_dark}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
