"use client";

import React, { useContext, useState, useRef } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProcessContainer from "./ProcessContainer";
import Link from "next/link";
import ContactButton from "../global/ContactButton";

const Process = () => {
  const [currentTab, setCurrentTab] = useState("Agile");
  const { palette, theme } = useContext(GlobalContext);
  const [openedTab, setOpenedTab] = useState(1);

  const handleAgileClick = () => {
    setOpenedTab(1);
    setCurrentTab("Agile");
  };

  const handleWaterfallClick = () => {
    setOpenedTab(2);
    setCurrentTab("Waterfall");
  };

  const handleHybridClick = () => {
    setOpenedTab(3);
    setCurrentTab("Hybrid");
  };

  return (
    <div
      id="process"
      className={` w-full py-10`}
      style={{ background: palette?.dark_contrast_background }}
    >
      <div
        className={`px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  flex flex-col items-center justify-start`}
      >
        <div
          className={`w-full px-0 flex flex-col justify-between items-start`}
        >
          <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
            6 step {currentTab}
          </p>
          <h2
            className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-5xl xl:text-[72px] 2xl:text-[104px] tracking-tighter xl:font-bold`}
          >
            mobile app development <br /> process
          </h2>
          <p
            className={`text-sm lg:text-[16px] my-3 lg:leading-[24.48px] font-[400] lg:w-[35%] ${
              theme === "light" && "text-[#2A2A2A]"
            }`}
          >
            Our mobile app development agency articulates the brand’s voice and
            values through a systematic approach below:
          </p>
        </div>
        <div className="w-full h-auto mt-6 lg:my-6 grid grid-cols-3 grid-rows-1">
          <button
            type="button"
            name="open-tab"
            onClick={() => handleAgileClick()}
            className={`w-full font-medium text-md lg:text-lg gap-1 lg:gap-3 transition-all duration-300 h-16  border-b-[1px]  ${
              openedTab == 1
                ? "border-[#F15C20] text-[#f15c20]"
                : "border-[#B4B4B4]/[0.5] text-[#b4b4b4]"
            } focus:border-[#F15C20] capitalize flex items-center justify-start lg:px-3`}
          >
            <span
              className={`w-7 h-7 lg:w-9 lg:h-9 xl:w-[44px] xl:h-[44px]  rounded-full flex justify-center items-center   ${
                openedTab == 1
                  ? "bg-[#F15C20]/[0.08] -rotate-0"
                  : theme == "light"
                  ? "bg-[#E7E7E7] -rotate-90"
                  : "bg-[#1c1c1c] -rotate-90"
              }`}
            >
              <MdKeyboardArrowDown className="text-2xl" />
            </span>
            <h3>agile</h3>
          </button>
          <button
            type="button"
            name="open-tab"
            onClick={() => handleWaterfallClick()}
            className={`w-full font-medium text-md lg:text-lg gap-1 lg:gap-3 transition-all duration-300 h-16  border-b-[1px]  ${
              openedTab == 2
                ? "border-[#F15C20] text-[#f15c20]"
                : "border-[#B4B4B4]/[0.5] text-[#b4b4b4]"
            } focus:border-[#F15C20] capitalize flex items-center justify-start lg:px-3`}
          >
            <span
              className={`w-7 h-7 lg:w-9 lg:h-9 xl:w-[44px] xl:h-[44px]  rounded-full flex justify-center items-center   ${
                openedTab == 2
                  ? "bg-[#F15C20]/[0.08] -rotate-0"
                  : theme == "light"
                  ? "bg-[#E7E7E7] -rotate-90"
                  : "bg-[#1c1c1c] -rotate-90"
              }`}
            >
              <MdKeyboardArrowDown className="text-2xl" />
            </span>
            <h3>waterfall</h3>
          </button>
          <button
            type="button"
            name="open-tab"
            onClick={() => handleHybridClick()}
            className={`w-full font-medium text-md lg:text-lg gap-1 lg:gap-3 transition-all duration-300 h-16  border-b-[1px]  ${
              openedTab == 3
                ? "border-[#F15C20] text-[#f15c20]"
                : "border-[#B4B4B4]/[0.5] text-[#b4b4b4]"
            } focus:border-[#F15C20] capitalize flex items-center justify-start lg:px-3`}
          >
            <span
              className={`w-7 h-7 lg:w-9 lg:h-9 xl:w-[44px] xl:h-[44px]  rounded-full flex justify-center items-center   ${
                openedTab == 3
                  ? "bg-[#F15C20]/[0.08] -rotate-0"
                  : theme == "light"
                  ? "bg-[#E7E7E7] -rotate-90"
                  : "bg-[#1c1c1c] -rotate-90"
              }`}
            >
              <MdKeyboardArrowDown className="text-2xl" />
            </span>
            <h3>hybrid</h3>
          </button>
        </div>

        <ProcessContainer openedTab={openedTab} />
        {/* <Link
          href="/contact-us"
          name="start-your-project"
          style={{
            background: palette?.brandOrange,
            color: "white",
          }}
          className="orange w-[150px] lg:w-[206px] xl:w-[312px] h-14 lg:h-20 xl:h-[104px] rounded-full transition-all duration-150 hover:opacity-90  shadow-xl text-sm lg:text-lg font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center"
        >
          Start Your Project
        </Link> */}
        <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
      </div>
    </div>
  );
};

export default Process;
