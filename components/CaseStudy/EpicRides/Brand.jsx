"use client";
import React from "react";

const fontWeights = [
  { name: "Extra Light", weight: "font-extralight" },
  { name: "Light", weight: "font-light" },
  { name: "Regular", weight: "font-normal" },
  { name: "Semi Bold", weight: "font-semibold" },
  { name: "Bold", weight: "font-bold" },
  { name: "Black", weight: "font-black" },
];

const Brand = () => {
  return (
    <section className="w-full relative bg-[#000B00] py-24 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-[80px] flex flex-col items-center gap-[30px]">
        
        {/* Heading */}
        <h2 className="w-full text-center text-white text-[32px] md:text-[44px] font-medium leading-[1.2]">
          Brand Identity
        </h2>

        {/* Typography Card */}
        <div className="w-full max-w-[1280px] bg-[#124733] rounded-[16px] p-[30px] flex flex-col gap-[30px]">
          
          {/* Top Row: Title and Desc */}
          <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-6">
            <h3 className="text-[#65CB11] text-[48px] md:text-[64px] font-medium leading-[1.2]">
              Poppins
            </h3>
            <p className="text-white text-[15px] font-normal leading-[23px] text-left lg:text-right max-w-[670px]">
              Epic Rides combines clean typography, modern visuals and intuitive interfaces to reflect trust, fairness and accessibility. Every design decision reinforces community-driven transportation while delivering a simple, recognizable and consistent user experience.
            </p>
          </div>

          {/* Alphabet */}
          <div className="w-full text-white text-[20px] md:text-[26.22px] font-medium leading-[1.5] tracking-[-0.02em] break-words">
            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
          </div>

          {/* Bottom Row: Big Aa and Weights */}
          <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-[100px] mt-4">
            
            {/* Giant Aa */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <span className="text-white text-[150px] md:text-[200px] font-medium leading-[0.8] tracking-[-2px] -ml-2">
                Aa
              </span>
            </div>

            {/* Font Weights */}
            <div className="flex-grow w-full flex flex-col justify-center">
              {fontWeights.map((item, idx) => (
                <div 
                  key={idx}
                  className="w-full h-[36px] border-b border-[#65CB11] flex items-center pl-2"
                >
                  <span className={`text-white font text-[24px] md:text-[28px] leading-[1.5] tracking-[-0.02em] ${item.weight}`}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Color Palette Card */}
        <div className="w-full max-w-[1280px] bg-white/5 rounded-[16px] p-[30px] mt-6">
          <div className="w-full h-[250px] flex flex-col md:flex-row rounded-[12px] overflow-hidden">
            
            {/* Primary */}
            <div className="flex-1 bg-[#65CB11] flex flex-col justify-end p-[20px] gap-2">
              <span className="text-[#000B00] text-[24px] font-bold leading-none">
                #65CB11
              </span>
              <span className="text-[#000B00]/50 text-[16px] font-bold uppercase tracking-[3px]">
                Primary
              </span>
            </div>
            
            {/* Secondary */}
            <div className="flex-1 bg-[#000B00] rounded-l-[16px] -ml-4 flex flex-col justify-end p-[20px] gap-2">
              <span className="text-[#65CB11] text-[24px] font-bold leading-none">
                #000B00
              </span>
              <span className="text-[#65CB11]/50 text-[16px] font-bold uppercase tracking-[3px]">
                Secondary
              </span>
            </div>

            {/* Flare */}
            <div className="flex-1 bg-[#124733] rounded-l-[16px] -ml-4 flex flex-col justify-end p-[20px] gap-2">
              <span className="text-[#65CB11] text-[24px] font-bold leading-none">
                #124733
              </span>
              <span className="text-[#65CB11]/50 text-[16px] font-bold uppercase tracking-[3px]">
                Flare
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Brand;
