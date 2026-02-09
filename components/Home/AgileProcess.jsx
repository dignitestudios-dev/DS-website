"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { bgVariant, staggerContainer } from "@/lib/motion";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import VerticalTimeline from "../Locations/mobile-app-california/VerticalTimeline";

const AgileProcess = () => {
  const { palette } = useContext(GlobalContext);

  return (
    <>
      <div className="w-full my-6 px-2 lg:px-10 xl:px-14 h-auto hidden lg:flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        <div className=" w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              01.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase">
              Research
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Discovery
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Step one focuses on understanding your business goals and user
              needs. We analyze requirements, define scope, and create a clear
              strategy to ensure app development success.
            </p>
          </div>

          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              03.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase">
              Agile Development
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Development
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Features are developed in short agile sprints. Our QA team
              continuously tests functionality to ensure fast delivery, smooth
              integrations, and a stable product.
            </p>
          </div>

          <div className="group w-full h-auto flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              05.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase">
              Sprint Demos
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Review
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Sprint demos showcase progress quickly. We gather client feedback,
              review outcomes, and adjust features to align with user needs and
              market demands.
            </p>
          </div>
        </div>

        <VerticalTimeline palette={palette} />

        <div className="w-full lg:w-[49%] h-auto lg:mt-44 grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              02.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase">
              UI/UX & Wireframes
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Design
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              We create wireframes and interactive prototypes early to visualize
              the app, collect client feedback, and refine the user experience
              before development begins.
            </p>
          </div>

          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              04.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase">
              Quality Assurance
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Testing
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Detailed QA processes and frequent usability checks ensure your app
              runs reliably across all platforms with optimal performance.
            </p>
          </div>

          <div className="group w-full h-auto flex flex-col justify-center items-start py-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              06.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase">
              Deployment
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Launch
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Final testing is completed before app store release. After launch,
              we monitor performance closely to ensure a smooth and successful
              deployment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgileProcess;
