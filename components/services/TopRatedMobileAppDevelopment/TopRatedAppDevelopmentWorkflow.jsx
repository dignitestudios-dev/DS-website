"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const TopRatedAppDevelopmentWorkflow = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-start w-full my-6 md:my-12 lg:my-14">
      <div className="w-full flex flex-col lg:flex-row justify-between items-end gap-y-6">
        <div
          className={`w-full lg:w-auto flex flex-col gap-2 justify-start items-start `}
        >
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
        <Link
          href={"/contact-us"}
          className="py-3 px-5 lg:py-7 lg:px-14 bg-[#F15C20] rounded-full text-white top-rated-btn-shadow text-base lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
        >
          Get in Touch <FiArrowUpRight className="text-xl" />
        </Link>
      </div>

      <div className="border border-[#E7E7E7] w-full mt-6 mb-4" />

      {/* large devices */}
      <div className="w-full hidden lg:block relative">
        <div className="w-full flex items-center justify-center">
          <div className="border border-l w-[33%] border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pt-0 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">01</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">
              brainstorming
            </h1>
            <p className="text-base text-[#F15C20] uppercase z-20">
              think tank
            </p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-[33%] border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">03</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">Aesthetics</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">ui design</p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-[33%] border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">05</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">back end</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">beta</p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
        </div>
        <div className="w-full flex justify-center relative lg:-top-[48px]">
          <div className="w-[17%] relative overflow-hidden">
            <div
              className={`w-full border-2 border-dashed absolute top-5 ${
                theme === "dark" ? "border-gray-500" : "border-gray-300"
              }`}
            />
          </div>
          <div className="w-[33%] border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pb-2 flex flex-col items-start justify-end relative pt-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <div
              className={`w-full border-2 border-dashed absolute top-5 ${
                theme === "dark" ? "border-gray-500" : "border-gray-300"
              }`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">02</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">structure</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">
              wireframes
            </p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 top-3 z-20"></span>
          </div>
          <div className="w-[35%] border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pb-2 flex flex-col items-start justify-end relative pt-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <div
              className={`w-full border-2 border-dashed absolute top-5 ${
                theme === "dark" ? "border-gray-500" : "border-gray-300"
              }`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">05</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">Front End</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">alpha</p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 top-3 z-20"></span>
          </div>
          <div className="w-[15%] border border-l border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pb-2 flex flex-col items-start justify-end relative pt-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <div
              className={`w-full border-2 border-dashed absolute top-5 ${
                theme === "dark" ? "border-gray-500" : "border-gray-300"
              }`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">06</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">jackpot</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">
              deployment
            </p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 top-3 z-20"></span>
          </div>
        </div>
      </div>

      {/* mobile responsive */}
      <div className="w-full lg:hidden">
        <div className="w-full flex flex-col lg:flex-row items-start px-2 lg:items-center justify-center">
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pt-0 flex flex-col items-start justify-start relative pb-16">
            <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">01</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">
              brainstorming
            </h1>
            <p className="text-base text-[#F15C20] uppercase z-20">
              think tank
            </p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
          <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">02</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">Structure</h1>
            <p className="text-base text-[#F15C20] uppercase z-20 flex">
              wireframe
            </p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
          <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">03</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">aesthetics</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">ui design</p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 px-3 pt-0 flex flex-col items-start justify-start relative pb-16">
          <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">04</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">front end</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">alpha</p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
          <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">05</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">backend</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">beta</p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
          <div className="border border-l w-full border-[#F15C20] border-t-0 border-r-0 border-b-0 p-3 flex flex-col items-start justify-start relative pb-16">
          <div
              className={`w-[70%] h-full absolute top-0 z-10 left-0 opacity-[0.8] ${
                theme === "dark" ? "" : " bg-gradient-to-r from-[#FAFAFA] "
              }}`}
            />
            <h5 className="text-[#B4B4B499] text-[24px] font-bold z-20">06</h5>
            <h1 className="text-[24px] font-bold uppercase z-20">jackpot</h1>
            <p className="text-base text-[#F15C20] uppercase z-20">
              deployment
            </p>
            <span className="bg-white circle-shadow w-[24px] h-[24px] rounded-full absolute -left-3 bottom-3 z-20"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedAppDevelopmentWorkflow;
