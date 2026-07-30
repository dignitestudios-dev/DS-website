"use client";
import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section className="w-full relative bg-[#FAFAFA]  flex flex-col items-center overflow-hidden">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-[30px] w-full max-w-[888px] px-6 relative z-10"
      >
        <h2 className="w-full text-center text-[#1F222E] text-[32px] md:text-[40px] font-bold leading-[120%] tracking-tight">
          Showcasing Every Feature <span className="text-[#274B01]">With Clarity</span>
        </h2>
        <p className="w-full text-center text-[#0C0C0C] font-normal text-[14px] leading-[130%]">
          The landing page was carefully designed to present Neighbor Connector's features in a much simpler way. Every section including community communication, safety tools, event planning and assistance requests was designed to help visitors understand the benefits of platform.
        </p>
      </motion.div>

      {/* Image Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full max-w-[1440px] mt-16 flex justify-center z-0 "
      >
        <img 
          src="/neighbor/landing.webp" 
          alt="Landing Page Mockup" 
          className="w-full h-auto object-cover scale-[2] lg:scale-100 mt-10 lg:-mt-24  -mb-12 lg:-mb-96  rounded-t-[20px] "
        />

        {/* Bottom Blur Effect */}
        <div className="absolute bottom-[-20px] md:bottom-[-60px] left-[-10%] w-[120%] h-[50px] md:h-[200px] bg-[#FAFAFA] blur-[40px] pointer-events-none z-20"></div>
      </motion.div>

    </section>
  );
};

export default LandingPage;
