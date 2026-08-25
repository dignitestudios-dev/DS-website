"use client";
import React from "react";
import { m as motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section className="w-full relative bg-[#151515] flex flex-col items-center gap-[40px] overflow-hidden">
      <img src={"/right/ellispe.webp"} alt="Background Ellipse" className="absolute top-0 -left-1/4 w-full md:w-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen" />
      
      {/* Header */}
      <div className="flex flex-col items-center gap-[20px] w-full max-w-[1280px] px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center text-white text-[32px] md:text-[44px] font-medium leading-[1.2] font-poppins"
        >
         Turning Visitors into Active Platform Users 
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-[850px] text-center text-white/80 text-[15px] font-normal leading-[160%] font-poppins"
        >
       The landing page highlights RightAways’s marketplace capabilities, supplier network, delivery services and business value while encouraging customers and suppliers to register, explore products and start using the platform. 
        </motion.p>
      </div>

      {/* Image Container */}
      <div className="relative w-full  flex justify-center z-0 mt-8">
        
        {/* Top Gradient Effect to blend the top edge */}
        <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#151515] via-[#151515]/80 to-transparent pointer-events-none z-20"></div>

        <motion.img 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="/right/lp.webp" 
          alt="RightAway Landing Page Mockup" 
          className="w-full h-auto object-cover "
        />

      
      </div>

    </section>
  );
};

export default LandingPage;
