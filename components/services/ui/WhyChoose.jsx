"use client";
import React, { useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const WhyChoose = ({header, para, features}) => {
  const [hoveredCard, setHoveredCard] = useState(null);

 

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center leading-[4] mb-10">
          <h2 className="text-4xl md:text-5xl tracking-tighter  lg:text-7xl font-bold">
            {header}
          </h2>
         
        </div>
<div className="text-center md:w-[80%] mx-auto text-lg mb-10">{para}</div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div
                className={`
                relative overflow-hidden rounded-lg transition-all dark:bg-black/50 duration-300
                bg-[#FAFAFA]
                p-8 h-[300px] flex flex-col justify-between
              `}
              >
                {/* Number */}
                <div className="text-gray-500 text-sm ">{feature.number}.</div>

                {/* Title */}
                <h3
                  className={`
                  text-[22px] md:pr-24 font-bold mb-16 transition-colors duration-300
                 
                `}
                >
                  {feature.title}
                </h3>

                {/* Arrow Icon */}
                <div className="flex items-center justify-between">
                  <div
                    className={`
                    w-8 h-8 rounded border-2 flex items-center justify-center
                    transition-all duration-300
                    ${
                      hoveredCard === index
                        ? " bg-orange-500 rotate-180 border-orange-500 "
                        : "bg-black border-none text-white"
                    }
                  `}
                  >
                    <IoArrowUpOutline />
                  </div>
                  <div></div>
                </div>

                {/* Description - Hidden on Desktop, Shown on Hover */}
                <div
                  className={`
                  mt-4 text-sm transition-all duration-300 overflow-hidden
                  hidden md:block
                  ${
                    hoveredCard === index
                      ? "max-h-40 opacity-100 text-[#8F8F8F]"
                      : "max-h-0 opacity-0"
                  }
                `}
                >
                  {feature.description}
                </div>

                {/* Description - Always Shown on Mobile */}
                <div className=" text-sm mt-3 md:hidden">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
