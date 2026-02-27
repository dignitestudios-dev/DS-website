"use client";

import React from "react";
import { motion } from "framer-motion";

const Features = ({ header, header2, para, features }) => {
  return (
    <section className="w-full pb-2 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111827] mb-6 tracking-tight"
          >
            {header} <span className="text-[#F15C20]">{header2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600  leading-relaxed"
          >
            {para}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features?.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 35px -5px rgba(241, 92, 32, 0.1), 0 10px 10px -5px rgba(241, 92, 32, 0.04)",
              }}
              className="bg-white  rounded-[32px] border border-gray-200 p-8 flex flex-col items-center text-center transition-all duration-300 group hover:border-[#F15C20]/20"
            >
              {/* Icon Container */}
              <div className="mb-8 p-4 rounded-2xl bg-white transition-transform duration-300 group-hover:scale-110">
                <div className="text-[#F15C20] text-6xl md:text-7xl">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg  font-bold text-[#111827] leading-snug group-hover:text-[#F15C20] transition-colors duration-300 px-4">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
