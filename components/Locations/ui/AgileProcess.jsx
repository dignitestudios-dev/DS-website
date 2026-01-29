"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { bgVariant, staggerContainer } from "@/lib/motion";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import VerticalTimeline from "../mobile-app-california/VerticalTimeline";

const AgileProcess = ({ steps = [] }) => {
  const { palette } = useContext(GlobalContext);

  return (
    <>
      {/* ================= DESKTOP VIEW ================= */}
      <div className="w-full my-6 px-2 lg:px-10 xl:px-14 h-auto hidden lg:flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        {/* LEFT COLUMN */}
        <div className=" w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
          {[0, 2, 4].map((index) => (
            <div
              key={index}
              className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start py-10"
            >
              <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
                {steps[index]?.step}.
              </p>

              <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold xl:font-medium text-black dark:text-white">
                {steps[index]?.title}
              </h5>

              <p
                className="text-[14px] 2xl:text-[18px]"
                style={{ color: palette?.light_contrast_color }}
              >
                {steps[index]?.desc}
              </p>
            </div>
          ))}
        </div>

        {/* TIMELINE */}
        <VerticalTimeline palette={palette} />

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[49%] h-auto lg:mt-44 grid grid-rows-3 grid-cols-1 gap-3">
          {[1, 3, 5].map((index) => (
            <div
              key={index}
              className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start py-10"
            >
              <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
                {steps[index]?.step}.
              </p>

              <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold xl:font-medium text-black dark:text-white">
                {steps[index]?.title}
              </h5>

              <p
                className="text-[14px] 2xl:text-[18px]"
                style={{ color: palette?.light_contrast_color }}
              >
                {steps[index]?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="w-full my-6 px-2 lg:px-10 h-auto lg:hidden flex flex-col gap-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start pb-3"
          >
            <p className="text-[#F15C20] text-[70px] font-bold leading-[4.5rem]">
              {step.step}.
            </p>

            <h5 className="capitalize text-[30px] font-semibold text-black dark:text-white">
              {step.title}
            </h5>

            <p
              className="text-[14px]"
              style={{ color: palette?.light_contrast_color }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AgileProcess;
