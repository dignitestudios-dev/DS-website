"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="relative w-full bg-[#151515] mb-20 px-4 flex flex-col items-center overflow-hidden">

      {/* CTA Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-[1200px] h-[450px] md:h-[382px] mb-20 bg-[rgba(34,181,115,0.05)] backdrop-blur-[10px] rounded-[16px] flex flex-col justify-center items-center overflow-hidden border border-white/5"
      >
        <img src={"/right/tcr.webp"} className='absolute top-0 right-0 w-1/2' />
        <img src={"/right/bcr.webp"} className='absolute bottom-0 left-0 w-1/2' />
        {/* Background Blobs (replicating Group 1597884087 and Group 1597884088) */}
        <div className="absolute w-[479px] h-[647px] bg-[rgba(34,181,115,0.04)] blur-[60px] rounded-[50%] -rotate-[157deg] right-[-10%] top-[-50%] pointer-events-none" />
        <div className="absolute w-[479px] h-[647px] bg-[rgba(34,181,115,0.04)] blur-[60px] rounded-[50%] rotate-[21deg] left-[-20%] top-[-30%] pointer-events-none" />

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-[788px] flex flex-col justify-end items-center gap-[30px] px-6 text-center">

          <h2 className="w-full text-white text-[32px] md:text-[44px] font-medium font-poppins leading-[120%] capitalize">
            Ready to Launch Your Transportation
          </h2>

          <p className="w-full max-w-[750px] text-white/90 font-poppins font-normal text-[14px] md:text-[15px] leading-[160%]">
            Whether you are building a ride hailing platform, fleet management system or mobility solution our team can help you create a secure, scalable and future ready digital product.
          </p>

          {/* Custom Button */}
          <Link href="/contact-us" className="flex flex-row justify-between items-center px-2 py-2 gap-[10px] w-[260px] h-[49px] bg-[#22B573] rounded-[100px] hover:bg-[#1e9c63] transition-all hover:scale-105 duration-300">
            <span className="flex-1 text-[#151C19] font-poppins font-medium text-[14px] leading-[120%] tracking-[-0.04em] capitalize text-center pl-4">
              Let's Build Your Platform
            </span>
            <div className="flex flex-row justify-center items-center w-[36px] h-[36px] bg-[#161D1A] rounded-[12px] flex-none">
              <FiArrowUpRight className="text-white text-[18px]" />
            </div>
          </Link>

        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
