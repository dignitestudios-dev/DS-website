"use client";

import React from "react";
import { FiCheck } from "react-icons/fi";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Challenges = ({ header, para, items }) => {
  if (!items) return null;

  return (
    <div className="w-full flex flex-col items-center py-20 bg-white">
      <div className="flex flex-col items-center gap-[50px] w-full max-w-[1200px] px-4 md:px-8 mb-16">
        <h2 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold text-[#1F222E] text-center leading-[105%] tracking-[-0.04em]">
          {header}
        </h2>
        <p className="text-[16px] text-[#0C0C0C] text-center font-light leading-[136%] max-w-[898px] tracking-[-0.014em]">
          {para}
        </p>
      </div>

      {/* Cards container with horizontal scroll */}
      <div className="w-full flex overflow-x-auto pb-8 pl-4 flex-wrap justify-center  snap-x gap-[5px] hide-scrollbar">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative flex-none w-[395px] h-[444px] rounded-[7px] bg-[#F9F9F9] hover:bg-[#F15C20] transition-colors duration-300 overflow-hidden flex flex-col justify-end p-7 snap-start cursor-pointer"
            >
              {/* Number Background */}
              <div className={` ${inter.className}  absolute top-0 font-inter -left-[70px] text-[210px] leading-[105%] font-bold text-[#0C0C0C] transition-all duration-500 group-hover:translate-x-[400px] group-hover:text-white tracking-[-0.04em] select-none pointer-events-none`}>
                {item.num}
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col justify-start gap-6">
                {/* Badge */}
                <div className="flex items-center gap-[5px]">
                  <div className="w-[33px] h-[33px] rounded-full bg-[#E5320F]/15 group-hover:bg-white/15 flex items-center justify-center transition-colors duration-300">
                    <Icon className="text-[#E5320F] block group-hover:hidden w-4 h-4" />
                    <FiCheck className="text-white hidden group-hover:block w-4 h-4" />
                  </div>
                  <span className="text-[14px] font-semibold uppercase text-[#E5320F] block group-hover:hidden tracking-[-0.014em]">
                    {item.badge}
                  </span>
                  <span className="text-[14px] font-semibold uppercase text-white hidden group-hover:block tracking-[-0.014em]">
                    SOLUTION
                  </span>
                </div>

                {/* Text Block */}
                <div className="flex flex-col gap-[15px]">
                  <h3 className="text-[16px] font-semibold text-[#0C0C0C] group-hover:text-white transition-colors duration-300 tracking-[-0.014em]">
                    {item.title}
                  </h3>
                  <div className="grid">
                    <p className="col-start-1 row-start-1 text-[14px] font-normal text-[#0C0C0C] opacity-100 group-hover:opacity-0 transition-opacity duration-300 leading-[136%] tracking-[-0.014em]">
                      {item.challengeDesc}
                    </p>
                    <p className="col-start-1 row-start-1 text-[14px] font-normal text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-[136%] tracking-[-0.014em] pointer-events-none group-hover:pointer-events-auto">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .font-inter {
          font-family: ${inter.style.fontFamily} !important;
        }
      `}} />
    </div>
  );
};

export default Challenges;
