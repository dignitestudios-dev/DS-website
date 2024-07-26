"use client";

import { offices } from "@/constants/findouroffices";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import FindOurOfficeCard from "./FindOurOfficeCard";
import FindOurOfficesSwiper from "./FindOurOfficesSwiper";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
  },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    750: {
      slidesPerView: 3,
    },

    1100: {
      slidesPerView: 4,
    },
  },
};

const FindOurOfficesSection = () => {
  const { palette } = useContext(GlobalContext);

  return (
    <div
      className={`px-4 md:px-12 lg:px-28 w-full flex flex-col items-center gap-y-4 my-5`}
    >
      <h2
        className={`${palette.color} uppercase font-extrabold text-center lg:text-start  text-4xl lg:text-5xl xl:text-[54px] tracking-tighter lg:font-bold mb-2 lg:mb-6`}
      >
        find our offices
      </h2>

      <div
        className={`w-full lg:w-[90%] xl:w-[70%] h-auto my-5 flex justify-center items-start `}
      >
        <FindOurOfficesSwiper offices={offices} />

        <div className="w-full h-auto hidden lg:flex justify-center items-start">
          {offices.map((office, index) => (
            <FindOurOfficeCard office={office} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindOurOfficesSection;
