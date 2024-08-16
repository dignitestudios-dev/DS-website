import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const AnimatedBarChart = () => {
  return (
    <>
      <div className="w-[280px] h-[210px] 2xl:w-[350px] 2xl:h-[240px] rounded-[24px] p-6 xl:flex flex-col items-start justify-between shadow-2xl absolute left-[4%] top-20 2xl:top-52 hidden slide-right-on-load bg-white z-30">
        <div className="w-full flex items-center justify-between z-30">
          <h3 className="text-[13.96px] font-bold">Users Activity</h3>
          <p className="text-[#9197A0] text-[10px] flex items-center">
            This Week <MdOutlineArrowDropDown className="text-lg" />
          </p>
        </div>
        <div className="w-full mt-1 h-[79%] relative flex items-end justify-between gap-x-5 pt-2 pr-3 z-30">
          <div className="flex flex-col items-center justify-between h-full">
            <span className="text-[9px] font-semibold text-[#A3A3AC]">300</span>
            <span className="text-[9px] font-semibold text-[#A3A3AC]">200</span>
            <span className="text-[9px] font-semibold text-[#A3A3AC]">100</span>
            <span className="text-[9px] font-semibold text-[#A3A3AC]">0</span>
          </div>
          <div className="h-[2px] bg-gray-200 absolute w-[89%] right-0"></div>
          <div className="h-[2px] bg-gray-200 absolute w-[89%] right-0 bottom-[32.5%]"></div>
          <div className="h-[2px] bg-gray-200 absolute w-[89%] right-0 bottom-[62%]"></div>
          <div className="h-[2px] bg-gray-200 absolute w-[89%] right-0 top-3.5"></div>
          {/* bar 1 */}
          <div className="w-[8px] h-[113px] 2xl:h-[140px] rounded-t-full overflow-hidden bg-[#FFD0BB] relative">
            <div className="w-[8px] h-[100px] 2xl:h-[120px] bg-[#A851FF] rounded-t-full animated-bar"></div>
          </div>
          {/* bar 3 */}
          <div className="w-[8px] h-[45px] rounded-t-full overflow-hidden bg-[#FFD0BB] relative">
            <div className="w-[8px] h-[40px] bg-[#A851FF] rounded-t-full animated-bar3"></div>
          </div>
          {/* bar 2 */}
          <div className="w-[8px] h-[95px] rounded-t-full overflow-hidden bg-[#FFD0BB] relative">
            <div className="w-[8px] h-[100px] bg-[#A851FF] rounded-t-full animated-bar2"></div>
          </div>
          {/* bar 2 */}
          <div className="w-[8px] h-[95px] rounded-t-full overflow-hidden bg-[#FFD0BB] relative">
            <div className="w-[8px] h-[100px] bg-[#A851FF] rounded-t-full animated-bar2"></div>
          </div>
          {/* bar 5 */}
          <div className="w-[8px] h-[63px] rounded-t-full overflow-hidden bg-[#FFD0BB] relative">
            <div className="w-[8px] h-[60px] bg-[#A851FF] rounded-t-full animated-bar5"></div>
          </div>
          {/* bar 3 */}
          <div className="w-[8px] h-[45px] rounded-t-full overflow-hidden bg-[#FFD0BB] relative">
            <div className="w-[8px] h-[40px] bg-[#A851FF] rounded-t-full animated-bar3"></div>
          </div>
          {/* bar 2 */}
          <div className="w-[8px] h-[95px] rounded-t-full overflow-hidden bg-[#FFD0BB] relative">
            <div className="w-[8px] h-[100px] bg-[#A851FF] rounded-t-full animated-bar2"></div>
          </div>
        </div>
        <div className="w-full pt-1 z-30">
          <div className="w-[85%] float-end flex items-center justify-between pr-[14px] pl-[2px]">
            <span className="text-[9px] font-semibold text-[#A3A3AC]">M</span>
            <span className="text-[9px] font-semibold text-[#A3A3AC]">T</span>
            <span className="text-[9px] font-semibold text-[#A3A3AC]">W</span>
            <span className="text-[9px] font-semibold text-[#A3A3AC]">T</span>
            <span className="text-[9px] font-semibold text-[#A3A3AC]">F</span>
            <span className="text-[9px] font-semibold text-[#A3A3AC]">S</span>
            <span className="text-[9px] font-semibold text-[#A3A3AC]">S</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedBarChart;
