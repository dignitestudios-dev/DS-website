'use client'

import React, { useContext, useState, useRef } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProcessContainer from "./ProcessContainer";

const Process = () => {
  const { palette } = useContext(GlobalContext);
  const [openedTab, setOpenedTab] = useState(1);

  return (
    <div
      className={` w-full py-10`}
      style={{ background: palette?.dark_contrast_background }}
    >
      <div className={`px-4 md:px-12 lg:px-28`}>
        <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
          6 step agile process
        </p>
        <div className={`w-full px-0 flex justify-between items-center`}>
          <h1
            className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-6xl`}
          >
            our process
          </h1>
        </div>
        <div className="w-full h-auto my-6 grid grid-cols-3 grid-rows-1">
          <button
            type="button"
            onClick={() => setOpenedTab(1)}
            className={`w-full font-medium text-lg gap-3 transition-all duration-300 h-16  border-b-2  ${openedTab == 1
                ? "border-[#F15C20] text-[#f15c20]"
                : "border-[#B4B4B4]/[0.5] text-[#b4b4b4]"
              } focus:border-[#F15C20] capitalize flex items-center justify-start px-3`}
          >
            <span
              className={`w-9 h-9  rounded-full flex justify-center items-center   ${openedTab == 1
                  ? "bg-[#F15C20]/[0.08] -rotate-0"
                  : "bg-[#E7E7E7] -rotate-90"
                }`}
            >
              <MdKeyboardArrowDown className="text-2xl" />
            </span>
            <h1>agile</h1>
          </button>
          <button
            type="button"
            onClick={() => setOpenedTab(2)}
            className={`w-full font-medium text-lg gap-3 transition-all duration-300 h-16  border-b-2  ${openedTab == 2
                ? "border-[#F15C20] text-[#f15c20]"
                : "border-[#B4B4B4]/[0.5] text-[#b4b4b4]"
              } focus:border-[#F15C20] capitalize flex items-center justify-start px-3`}
          >
            <span
              className={`w-9 h-9  rounded-full flex justify-center items-center   ${openedTab == 2
                  ? "bg-[#F15C20]/[0.08] -rotate-0"
                  : "bg-[#E7E7E7] -rotate-90"
                }`}
            >
              <MdKeyboardArrowDown className="text-2xl" />
            </span>
            <h1>waterfall</h1>
          </button>
          <button
            type="button"
            onClick={() => setOpenedTab(3)}
            className={`w-full font-medium text-lg gap-3 transition-all duration-300 h-16  border-b-2  ${openedTab == 3
                ? "border-[#F15C20] text-[#f15c20]"
                : "border-[#B4B4B4]/[0.5] text-[#b4b4b4]"
              } focus:border-[#F15C20] capitalize flex items-center justify-start px-3`}
          >
            <span
              className={`w-9 h-9  rounded-full flex justify-center items-center   ${openedTab == 3
                  ? "bg-[#F15C20]/[0.08] -rotate-0"
                  : "bg-[#E7E7E7] -rotate-90"
                }`}
            >
              <MdKeyboardArrowDown className="text-2xl" />
            </span>
            <h1>hybrid</h1>
          </button>
        </div>

        <ProcessContainer />
      </div>
    </div>
  );
};

export default Process;
