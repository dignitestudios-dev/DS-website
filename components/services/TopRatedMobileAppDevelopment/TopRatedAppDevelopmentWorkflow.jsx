import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const TopRatedAppDevelopmentWorkflow = () => {
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-start w-full my-6 md:my-12 lg:my-24">
      <div className="w-full flex justify-between items-center">
        <div className={` flex flex-col gap-2 justify-start items-start `}>
          <p className={`text-xl font-bold text-[#8F8F8F] uppercase `}>
            Our mobile app development
          </p>
          <div className={`w-full px-0 flex justify-between items-center`}>
            <h1
              className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-5xl xl:text-[72px] xl:font-bold`}
            >
              work flow
            </h1>
          </div>
        </div>
        <button className="lg:py-6 lg:px-9 bg-[#F15C20] rounded-full text-white text-xl font-semibold flex items-center justify-center gap-3">
          Get in Touch <FiArrowUpRight className="text-xl" />
        </button>
      </div>

      <div className="border border-[#E7E7E7] w-full my-4" />

      <div className="w-full hidden lg:block relative">
        <div className="w-full grid grid-cols-3">
          <div className="border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pt-0 flex flex-col items-start justify-start relative pb-16">
            <div className="w-[70%] bg-gradient-to-r from-[#FAFAFA] h-full absolute top-0 z-10 left-0 opacity-[0.8]" />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">01</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">
              brainstorming
            </h1>
            <p className="text-base text-[#F15C20] uppercase z-20">
              think tank
            </p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
            <div className="w-[70%] bg-gradient-to-r from-[#FAFAFA] h-full absolute top-0 z-10 left-0 opacity-[0.8]" />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">03</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">Aesthetics</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">ui design</p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
            <div className="w-[70%] bg-gradient-to-r from-[#FAFAFA] h-full absolute top-0 z-10 left-0 opacity-[0.8]" />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">05</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">back end</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">beta</p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 relative -top-12">
          <div className=""></div>
          <div className="border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pb-2 flex flex-col items-start justify-end relative pt-16">
            <div className="w-[70%] bg-gradient-to-r from-[#FAFAFA] h-full absolute top-0 z-10 left-0 opacity-[0.8]" />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">01</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">
              brainstorming
            </h1>
            <p className="text-base text-[#F15C20] uppercase z-20">
              think tank
            </p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 top-3 z-20"></span>
          </div>
          <div className="border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pb-2 flex flex-col items-start justify-end relative pt-16">
            <div className="w-[70%] bg-gradient-to-r from-[#FAFAFA] h-full absolute top-0 z-10 left-0 opacity-[0.8]" />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">03</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">Aesthetics</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">ui design</p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 top-3 z-20"></span>
          </div>
          <div className="border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pb-2 flex flex-col items-start justify-end relative pt-16">
            <div className="w-[70%] bg-gradient-to-r from-[#FAFAFA] h-full absolute top-0 z-10 left-0 opacity-[0.8]" />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">05</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">back end</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">beta</p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 top-3 z-20"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedAppDevelopmentWorkflow;
