"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiSearch, FiMic } from "react-icons/fi";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";

const FlexibleHiring = ({ header, para , header2,cards }) => {
  const [activeCard, setActiveCard] = useState(0);

//   const cards = [
//     {
//       title: "Dedicated Developer",
//       desc: "Our team also delivers the modern mobile products which are built with the flutter for the speed, performance and the scalability. Dignite studios designs the top flutter app development services for the startups and enterprises that want the long term value and reliable cross platform experiences.",
//       icon:"/services/test.webp" ,
//     },
//     {
//       title: "Hourly Hiring",
//       desc: "Hire developers on an hourly basis for specific tasks or ongoing support. This model offers the most flexibility for evolving requirements and smaller budgets.",
//       icon: "/services/sb.webp",
//       illustration: "hourly",
//     },
//     {
//       title: "Project-Based Hiring",
//       desc: "Ideal for well-defined projects. We provide an end-to-end team to deliver your product on time and within a fixed budget.",
//       icon: "/services/mob.webp",
//       illustration: "project",
//     },
//   ];

  return (
    <section className="w-full py-20 px-4 md:px-12 bg-white font-inter">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 lg:gap-20">
        {/* Header Section */}
        <div className="max-w-4xl text-center flex flex-col gap-8">
          <h2 className="text-4xl md:text-7xl font-bold text-[#1F222E] tracking-tighter leading-none">
          {header || "Flexible Hiring Models"}{" "}{header2 && <span className="text-[#F15C20]">{header2}</span>}
          </h2>
          <p className="text-base md:text-lg font-light text-[#0C0C0C] leading-relaxed max-w-5xl mx-auto">
            {para || "Our team also delivers the modern mobile products which are built with the flutter for the speed, performance and the scalability. Dignite studios designs the top flutter app development services for the startups and enterprises that want the long term value and reliable cross platform experiences."}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full flex flex-col  lg:flex-row gap-6 items-start justify-center">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 rounded-[46px] p-4 h-[270px] hover:h-[330px] flex flex-col gap-6 w-full lg:w-1/3 border
              ${
                activeCard === idx
                  ? "bg-[#F15C20] border-[#F15C20] text-white shadow-xl"
                  : "bg-white border-[#B1B1B1] text-[#1F222E]"
              }`}
            >
              {/* Card Icon */}
              <div className="">
        {activeCard === idx ? (
          <div className="border w-16 bg-[#F15C20] text-white h-16 flex justify-center items-center p-2 rounded-full"> <FaMinus size={25} /> </div>
        ): (
          <div className="border w-16 h-16 flex bg-[#F15C20] text-white  justify-center items-center p-2 rounded-full" > <FaPlus size={25} /> </div>
        )
    }
    </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-4 px-6">
                <h3 className="text-2xl font-semibold tracking-tight leading-tight">
                  {card.title}
                </h3>
                
                {/* Description View (shown consistently for active) */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    activeCard === idx ? "opacity-100 max-h-64 mt-2" : "opacity-0 max-h-0"
                  }`}
                >
                  <p className="text-sm font-normal leading-relaxed opacity-90">
                    {card.desc}
                  </p>
                </div>

                {/* Illustrations for inactive state */}
                <div
                  className={`absolute flex justify-center items-end  left-1/2 translate-x-[-50%] transition-all duration-500 mt-auto ${
                    activeCard === idx ? "opacity-0 max-h-0" : "opacity-100 h-48 w-[90%] mx-auto mt-4"
                  } ${idx === 2 ? "bottom-0" : "bottom-10"} ${idx === 0 && "w-fit"}`}
                >
                
                <Image src={card.icon} alt="icons" width={600} height={600} className="w-[300px] object-contain" />
             
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Illustration Components */

const HourlyIllustration = () => {
  return (
    <div className="w-full flex justify-start pt-4">
      <div className="bg-[#000000]/06 bg-gray-50 border border-gray-100 w-full max-w-[300px] rounded-full py-3 px-5 flex items-center gap-3 shadow-sm">
        <FiSearch className="text-[#F15C20] text-xl" />
        <span className="text-gray-300 text-sm flex-grow font-normal">Find the best talent.....</span>
        <FiMic className="text-[#F15C20] text-xl" />
        <div className="w-8 h-8 rounded-full bg-blue-500 overflow-hidden shrink-0">
          <Image src="/services/mob-hire/search-avatar.webp" alt="Avatar" width={32} height={32} />
        </div>
      </div>
    </div>
  );
};

const ProjectIllustration = () => {
  return (
    <div className="relative w-full flex justify-center pt-8 overflow-hidden h-40">
        {/* Mock Mobile UI */}
        <div className="bg-[#1F222E]/10 rounded-t-3xl border-x-4 border-t-4 border-[#1F222E] h-48 w-48 relative top-4">
            <div className="flex flex-col p-4 gap-2">
                <div className="bg-[#F15C20] rounded-lg p-2 text-[10px] font-bold text-white text-center">
                    Project 1
                </div>
                <div className="bg-white rounded-lg p-2 text-[10px] font-bold text-[#1F222E] text-center border border-gray-200">
                    Project 2
                </div>
                <div className="bg-gray-100 rounded-lg h-12 w-full mt-2"></div>
            </div>
        </div>
    </div>
  );
};

export default FlexibleHiring;