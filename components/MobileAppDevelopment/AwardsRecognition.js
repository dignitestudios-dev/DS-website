"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const AwardsRecognition = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className="px-4 md:px-12 lg:px-28 flex flex-col gap-4 justify-start items-start w-full my-6 md:my-12 lg:my-16">
      <h1
        style={{
          color: palette?.color,
        }}
        className="text-3xl font-extrabold lg:text-6xl lg:font-bold uppercase"
      >
        awards & recognition
      </h1>
      <p
        className="lg:w-[70%] my-2 text-[16px] lg:text-[18px] font-normal"
        style={{
          color: palette?.dark_contrast_color,
        }}
      >
        We leverage the latest technologies and craft industry-leading solutions
        for startups and enterprises. We help companies level up their game with
        top-notch mobile apps.
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-4">
        <img src="/award-1.png" />
        <img src="/award-2.png" />
        <img src="/award-3.png" />
        <img src="/award-4.png" />
        <img src="/award-5.png" />
        <img src="/award-6.png" />
      </div>
    </div>
  );
};

export default AwardsRecognition;
