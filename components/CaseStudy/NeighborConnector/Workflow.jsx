"use client";
import React from "react";
import { motion } from "framer-motion";

const Workflow = () => {
  return (
    <section className="w-full relative bg-[#FAFAFA] flex justify-center z-10">
      <div className="max-w-[1144px] w-full px-4 md:px-0 flex flex-col items-center gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-[888px] gap-6"
        >
          <h2 className="text-[#1F222E] text-[32px] md:text-[40px] font-bold leading-[120%] tracking-tight capitalize">
            Agile Methodology That Maintained <span className="text-[#325200]">Progress</span>
          </h2>
          <p className="text-[#0C0C0C] text-[14px] leading-[130%] font-normal">
            Using an Agile development technique, we worked directly with the client on strategy, design, programming, testing and feedback sessions during the project. This helped us build a secure, scalable and user friendly platform which stayed aligned with the client’s target at every step.
          </p>
        </motion.div>

        {/* Workflow Graphic Area */}
        <div className="relative w-full max-w-[1144px] h-auto min-h-[800px] lg:min-h-[600px] flex flex-col lg:block items-center gap-6 mt-10">
          
          {/* Desktop Circular Elements */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 pointer-events-none">
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[321px] h-[321px] rounded-full border-2 border-dashed border-[#A0D702]" />
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[149px] h-[149px] rounded-full border-2 border-dashed border-[#A0D702]" />
             {/* Center Bulb */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[80px]">
               <img src="/neighbor/bulb.webp" alt="Bulb" className="w-full h-full object-contain" />
             </div>
          </div>

          {/* Cards */}
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:absolute lg:top-0 lg:left-0 w-full max-w-[456px] relative"
          >
            <div className="bg-[#FCFFF2] rounded-[33px] p-8 ml-4 mt-4 relative z-0">
               <h3 className="text-[#1F222E] text-[18px] font-bold mb-4">Discovery and Planning</h3>
               <p className="text-[#0C0C0C] text-[14px] font-normal leading-[130%]">The team had clear communication with the client to be able to understand the goals of the platform and identify the challenges.</p>
            </div>
            <div className="absolute top-0 left-0 w-[60px] h-[60px] bg-[#619908] rounded-full flex items-center justify-center z-10 shadow-lg">
               <span className="text-white text-[24px] font-bold">1</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:absolute lg:top-0 lg:right-0 w-full max-w-[456px] relative mt-6 lg:mt-0"
          >
            <div className="bg-[#FCFFF2] rounded-[33px] p-8 ml-4 mt-4 relative z-0">
               <h3 className="text-[#1F222E] text-[18px] font-bold mb-4">UI/UX Design</h3>
               <p className="text-[#0C0C0C] text-[14px] font-normal leading-[130%]">The design team created smooth user flows, wireframes and interface designs. Each screen was designed to provide a simple and accessible experience.</p>
            </div>
            <div className="absolute top-0 left-0 lg:left-auto lg:right-[-20px] w-[60px] h-[60px] bg-[#619908] rounded-full flex items-center justify-center z-10 shadow-lg">
               <span className="text-white text-[24px] font-bold">2</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:absolute lg:bottom-0 lg:left-0 w-full max-w-[456px] relative mt-6 lg:mt-0 lg:top-[280px]"
          >
            <div className="bg-[#FCFFF2] rounded-[33px] p-8 ml-4 mt-4 relative z-0">
               <h3 className="text-[#1F222E] text-[18px] font-bold mb-4">Agile Development</h3>
               <p className="text-[#0C0C0C] text-[14px] font-normal leading-[130%]">The platform was developed in repetitive sprints using an agile approach while maintaining regular communication with the client.</p>
            </div>
            <div className="absolute top-0 left-0 w-[60px] h-[60px] bg-[#619908] rounded-full flex items-center justify-center z-10 shadow-lg">
               <span className="text-white text-[24px] font-bold">3</span>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:absolute lg:bottom-0 lg:right-0 w-full max-w-[456px] relative mt-6 lg:mt-0 lg:top-[280px]"
          >
            <div className="bg-[#FCFFF2] rounded-[33px] p-8 ml-4 mt-4 relative z-0">
               <h3 className="text-[#1F222E] text-[18px] font-bold mb-4">Testing & Deployment</h3>
               <p className="text-[#0C0C0C] text-[14px] font-normal leading-[130%]">The team did the comprehensive quality assurance testing to check performance and reliability on different devices and usage scenarios.</p>
            </div>
            <div className="absolute top-0 left-0 lg:left-auto lg:right-[-20px] w-[60px] h-[60px] bg-[#619908] rounded-full flex items-center justify-center z-10 shadow-lg">
               <span className="text-white text-[24px] font-bold">4</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Workflow;
