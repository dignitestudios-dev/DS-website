'use client'

import { offices } from "@/constants/findouroffices";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useState } from "react";
import FindOurOfficeCard from "./FindOurOfficeCard";

const FindOurOfficesSection = () => {
  const { palette } = useContext(GlobalContext);

  return (
    <div
      className={`px-4 md:px-12 lg:px-28 w-full flex flex-col items-center gap-y-4 my-5`}
    >
      <h1
        className={`${palette.color} uppercase font-extrabold text-center lg:text-start text-4xl lg:text-6xl lg:font-bold mb-2 lg:mb-6`}
      >
        find our offices
      </h1>

      <div
        className={`w-full lg:w-[70%] h-auto my-5   flex justify-center items-start `}
      >
        {offices.map((office, index) => (
          <FindOurOfficeCard office={office} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FindOurOfficesSection;
