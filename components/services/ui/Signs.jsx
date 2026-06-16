"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaExclamationTriangle } from "react-icons/fa";

const Signs = ({ header, header2, subtitle, buttonText, items }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1240px] mx-auto  px-4 xl:px-0 relative z-20">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center max-w-[850px] mb-[50px] gap-[30px]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] md:text-5xl lg:text-[68px] leading-[1.05] tracking-tight font-bold text-[#0C0C0C] capitalize"
        >
          {header} <span className="text-[#F15C20]">{header2}</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[16px] md:text-[18px] leading-[161%] text-[#5C5C5C] w-full"
        >
          {subtitle}
        </motion.p>

        {buttonText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact-us"
              className="flex items-center group justify-center "
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

      {/* Grid Section */}
      <div className="w-full border-[0.5px] border-black/15 rounded-[16px] overflow-hidden bg-[#F9F9F9] backdrop-blur-[25px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="flex flex-col justify-between items-center text-center px-5 py-10 min-h-[400px] border-black/15 border-b-[0.5px] lg:[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:not(:nth-child(3n))]:border-r-[0.5px] md:[&:not(:nth-child(2n))]:border-r-[0.5px]"
            >
              {/* Icon */}
              <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center mt-[30px]">
                <FaExclamationTriangle className="text-[#E5BB00] w-[80px] h-[80px]" />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center gap-1 mt-auto mb-[20px] max-w-[373px] mx-auto">
                <h3 className="font-bold text-[16px] leading-[19px] text-[#0C0C0C] mb-[15px]">
                  {item.title}
                </h3>
                <p className="font-normal text-[15px] leading-[22px] text-[#0C0C0C]">
                  {item.desc || item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signs;
