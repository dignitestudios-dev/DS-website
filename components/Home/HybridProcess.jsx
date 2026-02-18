"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import VerticalTimeline from "../Locations/mobile-app-california/VerticalTimeline";

const HybridProcess = () => {
  const { palette } = useContext(GlobalContext);

  return (
    <>
      {/* DESKTOP */}
      <div className="w-full my-6 px-2 lg:px-10 xl:px-14 h-auto hidden lg:flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        {/* LEFT */}
        <div className="w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
          
          {/* 01 */}
          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              01.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Core First
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Focused on Functionality
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              We focus on building the most critical functionality first,
              creating a strong, scalable foundation before designing every
              interface detail.
            </p>
          </div>

          {/* 03 */}
          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              03.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Design
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              UI/UX Design
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Once core features work, we refine the user experience by creating
              interfaces that enhance usability, not just visual appeal.
            </p>
          </div>

          {/* 05 */}
          <div className="group w-full h-auto flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              05.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Phased Launch
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Sprint Demos
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Working versions are released gradually, delivering value to users
              while enabling continuous improvements.
            </p>
          </div>
        </div>

        <VerticalTimeline palette={palette} />

        {/* RIGHT */}
        <div className="w-full lg:w-[49%] h-auto lg:mt-44 grid grid-rows-3 grid-cols-1 gap-3">
          
          {/* 02 */}
          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              02.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Test Early
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              QA
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Functionality is validated as it’s developed, catching issues
              early to save time, reduce rework, and maintain smooth progress.
            </p>
          </div>

          {/* 04 */}
          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              04.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Real Feedback
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Testing
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              We gather input from users or stakeholders on working versions,
              iterating based on real needs rather than assumptions.
            </p>
          </div>

          {/* 06 */}
          <div className="group w-full h-auto flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              06.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Scaling
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Optimization
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Once you’ve launched, we refine and optimize based on real-world
              usage, ensuring your software grows with your business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HybridProcess;
