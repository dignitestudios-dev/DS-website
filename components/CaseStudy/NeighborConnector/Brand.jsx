"use client";
import React from "react";
import { motion } from "framer-motion";

const Brand = () => {
  return (
    <section className="w-full relative bg-[#FAFAFA]  flex flex-col items-center overflow-hidden">
      <div className="max-w-[1200px] w-full px-6 flex flex-col items-center gap-[80px]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-center max-w-[888px] mx-auto"
        >
          <h2 className="text-[#1F222E] text-[32px] md:text-[40px] font-bold capitalize leading-[120%] tracking-tight mb-[30px]">
            Building A <span className="text-[#274B01]">Trusting Brand</span>
          </h2>
          <p className="text-[#0C0C0C] text-[14px] font-normal leading-[130%]">
            Through simple layouts, approachable fonts, soothing colours and user friendly interactions, Neighbour Connector’s visual identity reflects the trust, safety, collaboration and belonging by creating a welcoming digital environment for each and every member of the community.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 lg:gap-0 mt-0 lg:-mt-20">
          
          {/* Left: Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-[40px] z-10"
          >
            <h3 className="text-[#0C0C0C] font-bold tracking-tighter" style={{ fontSize: 'clamp(100px, 15vw, 188px)', lineHeight: '0.8' }}>
              Inter
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-2 border border-black/20 rounded-full flex items-center justify-center">
                <span className="text-[#0C0C0C] text-[18px] font-light">Regular</span>
              </div>
              <div className="px-5 py-2 border border-black/20 rounded-full flex items-center justify-center">
                <span className="text-[#0C0C0C] text-[18px] font-medium">Medium</span>
              </div>
              <div className="px-5 py-2 border border-black/20 rounded-full flex items-center justify-center">
                <span className="text-[#0C0C0C] text-[18px] font-semibold">Semibold</span>
              </div>
              <div className="px-5 py-2 border border-black/20 rounded-full flex items-center justify-center">
                <span className="text-[#0C0C0C] text-[18px] font-bold">Bold</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Color Stack */}
          <div className="relative w-full max-w-[585px] h-[250px] lg:h-[450px] flex items-end justify-start lg:justify-start scale-[0.6] sm:scale-[0.8] lg:scale-100 origin-left">
             {/* The origin for the stack animation will be the bottom-left of this container */}
             <div className="relative w-[150px] lg:w-[285px] h-[150px] lg:h-[204px] lg:ml-0 lg:mt-[200px]">
               
               {/* Card 5: #FFFFFF */}
               <motion.div 
                 initial={{ x: 0, y: 0 }} 
                 whileInView={{ x: 300, y: -200 }} 
                 viewport={{ once: true }} 
                 transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} 
                 className="absolute inset-0 z-50"
               >
                 <div className="w-full h-full bg-white border-[1.5px] border-dashed border-[#A4A4A4] rounded-[29px]" />
                 <span className="absolute -bottom-8 right-0 text-[#0C0C0C] text-[14px]">#FFFFFF</span>
               </motion.div>

               {/* Card 4: #CCCCCC */}
               <motion.div 
                 initial={{ x: 0, y: 0 }} 
                 whileInView={{ x: 225, y: -150 }} 
                 viewport={{ once: true }} 
                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
                 className="absolute inset-0 z-40"
               >
                 <div className="w-full h-full bg-[#CCCCCC] rounded-[29px]" />
                 <span className="absolute -bottom-8 right-0 text-[#0C0C0C] text-[14px]">#CCCCCC</span>
               </motion.div>

               {/* Card 3: #E7F5CC */}
               <motion.div 
                 initial={{ x: 0, y: 0 }} 
                 whileInView={{ x: 150, y: -100 }} 
                 viewport={{ once: true }} 
                 transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} 
                 className="absolute inset-0 z-30"
               >
                 <div className="w-full h-full bg-[#E7F5CC] rounded-[29px]" />
                 <span className="absolute -bottom-8 right-0 text-[#0C0C0C] text-[14px]">#E7F5CC</span>
               </motion.div>

               {/* Card 2: #88CE00 */}
               <motion.div 
                 initial={{ x: 0, y: 0 }} 
                 whileInView={{ x: 75, y: -50 }} 
                 viewport={{ once: true }} 
                 transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} 
                 className="absolute inset-0 z-20"
               >
                 <div className="w-full h-full bg-[#88CE00] rounded-[29px]" />
                 <span className="absolute -bottom-8 right-0 text-[#0C0C0C] text-[14px]">#88CE00</span>
               </motion.div>

               {/* Card 1: #619908 */}
               <motion.div 
                 initial={{ x: 0, y: 0 }} 
                 whileInView={{ x: 0, y: 0 }} 
                 viewport={{ once: true }} 
                 transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} 
                 className="absolute inset-0 z-10"
               >
                 <div className="w-full h-full bg-[#619908] rounded-[29px]" />
                 <span className="absolute -bottom-8 right-0 text-[#0C0C0C] text-[14px]">#619908</span>
               </motion.div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Brand;
