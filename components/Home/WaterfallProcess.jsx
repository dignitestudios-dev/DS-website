"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import VerticalTimeline from "../Locations/mobile-app-california/VerticalTimeline";

const WaterfallProcess = () => {
  const { palette } = useContext(GlobalContext);

  return (
    <>
      <div className="w-full my-6 px-2 lg:px-10 xl:px-14 h-auto hidden lg:flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[49%] h-auto grid grid-rows-4 grid-cols-1 gap-3">
          
          {/* 01 */}
          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start pb-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              01.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Plan
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Building the Roadmap
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              We define your goals, understand needs, and outline every feature
              to create a clear roadmap for successful web app development.
            </p>
          </div>

          {/* 03 */}
          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start pb-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              03.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Develop
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Functional Development
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Following the plan, our developers build precisely as designed,
              making sure functionality and performance are delivered
              efficiently.
            </p>
          </div>

          {/* 05 */}
          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start pb-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              05.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Validate
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Collecting Feedback
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Stakeholders review working versions, providing feedback that
              guides improvement before the final release.
            </p>
          </div>

          {/* 07 */}
          <div className="group w-full h-auto flex flex-col justify-center items-start pb-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              07.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Support
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Maintenance & Support
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              The team provides ongoing support through monitoring, fixing
              issues, releasing updates, and enhancing features to keep the app
              running smoothly.
            </p>
          </div>
        </div>

        <VerticalTimeline palette={palette} />

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[49%] h-auto lg:mt-44 grid grid-rows-3 grid-cols-1 gap-3">
          
          {/* 02 */}
          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start pb-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              02.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Design
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              UI/UX and Wireframes
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Before coding begins, we map out the system structure, UI/UX, and
              technical planning to ensure scalable and smooth development.
            </p>
          </div>

          {/* 04 */}
          <div className="group w-full h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start pb-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              04.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Test
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Quality Assurance
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              The QA team tests every feature and ensures a smooth experience for
              users by catching bugs early.
            </p>
          </div>

          {/* 06 */}
          <div className="group w-full h-auto flex flex-col justify-center items-start pb-10">
            <p className="text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold">
              06.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitialize">
              Launch
            </h4>
            <h5 className="text-[30px] lg:text-[36px] font-semibold text-[#F15C20]">
              Deployment
            </h5>
            <p
              className="text-[14px] 2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Once final testing is complete, we deploy your web app and ensure
              everything works perfectly in the live environment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaterfallProcess;
