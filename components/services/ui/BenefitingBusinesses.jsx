"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

const BenefitingBusinesses = ({ header,header2, para, items, buttonText, buttonLink }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center  px-4 md:px-[80px] bg-white gap-[50px]">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-[50px] w-full max-w-[963px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${inter.className} w-full text-center text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[105%] tracking-[-0.04em] text-[#1F222E]`}
        >
          {header}{" "} <span className="text-[#F15C20]">{header2}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`${inter.className} w-full max-w-[898px] text-center text-[16px] font-light leading-[136%] tracking-[-0.014em] text-[#0C0C0C]`}
        >
          {para}
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-[20px] w-full max-w-[1280px]">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col items-center justify-start p-[50px_15px] gap-[50px] w-full md:w-[305px] min-h-[400px] bg-[#F9F9F9] border border-[#0C0C0C]/10 rounded-[16px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-transparent"
          >
            {/* Hover Background Effects */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
              <div className="absolute -right-[26px] top-[235px] w-[281px] h-[281px] bg-[#F15C20] blur-[50px] rounded-[2px]" />
              <div className="absolute bottom-0 left-0 w-full h-[500px] flex">
                <div className="flex-1 h-full bg-[#F15C20]/10 border-r border-white/5" />
                <div className="flex-1 h-full bg-[#F15C20]/10 border-r border-white/5" />
                <div className="flex-1 h-full bg-[#F15C20]/10 border-r border-white/5" />
                <div className="flex-1 h-full bg-[#F15C20]/10 border-r border-white/5" />
                <div className="flex-1 h-full bg-[#F15C20]/10 border-r border-white/5" />
                <div className="flex-1 h-full bg-[#F15C20]/10" />
              </div>
            </div>

            {/* Icon */}
            <div className="relative z-10 w-[70px] h-[70px] flex items-center justify-center">
              <div dangerouslySetInnerHTML={{ __html: item.svg }} />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center gap-[20px] w-full max-w-[275px]">
              <h3 className={`${inter.className} text-[16px] font-bold leading-[19px] text-center capitalize text-[#1F222E] group-hover:text-black transition-colors duration-300`}>
                {item.title}
              </h3>
              <p className={`${inter.className} text-[14px] font-normal leading-[136%] text-center text-[#1F222E] group-hover:text-black transition-colors duration-300`}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional CTA Button */}
      {buttonText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href={buttonLink || "/contact-us"}
            className="flex mt-4 items-center group justify-center relative z-10"
          >
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full font-normal transition-colors">
              {buttonText}
            </button>
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
              <MdArrowOutward />
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default BenefitingBusinesses;
