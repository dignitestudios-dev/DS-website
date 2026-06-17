"use client";
import React from "react";
import { motion } from "framer-motion";

const ToolsAndTech = ({ header, header2, subtitle, tools }) => {
  return (
    <div className="w-full bg-white  flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 md:px-[80px] flex flex-col items-center gap-[50px]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-[30px] max-w-[915px]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-[40px] md:text-[72px] leading-[105%] tracking-[-0.04em] text-[#1F222E] text-center"
          >
            {header} {header2 && <span className="text-[#F15C20]">{header2}</span>}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-light text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C] text-center max-w-[909px]"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="w-full max-w-[1240px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] justify-center items-center">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="w-full h-[146px] bg-[#F9F9F9] rounded-[4.11px] flex flex-col justify-center items-center gap-3 group hover:shadow-sm transition-shadow duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <span className="text-[14px] font-semibold text-[#0C0C0C] text-center px-2">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ToolsAndTech;
