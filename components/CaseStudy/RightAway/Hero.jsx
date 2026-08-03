"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = "RightAway is a complete construction materials marketplace built to simplify how customers purchase the building supplies while helping suppliers and delivery teams work more efficiently. The platform connects, suppliers and delivery teams work quite more efficiently. The platform connects customers, suppliers, riders and administrators through one simplified system. Customers can explore products, compare prices, place orders and choose the delivery or the supplier pickup. Suppliers manage products, stock and incoming orders and the live status updates. Secure online payments, real time order tracking and the centralized admin dashboard give every user complete visibility which makes the construction material procurement faster, quite more organized and much easier to manage.";
  const previewText = "RightAway is a complete construction materials marketplace built to simplify how customers purchase the building supplies while helping suppliers and delivery teams work more efficiently. The platform connects, suppliers and delivery teams work quite more efficiently.";

  return (
    <section className="relative w-full  z-30 pt-20 min-h-[120vh] bg-[#151515] overflow-hidden flex flex-col items-center ">
      <img src={"/right/corner.webp"} alt='corner ' className='absolute top-0 right-0 z-10' />
      <img src={"/right/top.webp"} alt='corner ' className='absolute top-0 left-1/2 -translate-x-[50%] w-full z-10 ' />
      {/* Background Blurs
      <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[374px] h-[374px] bg-[#22B573] opacity-30 blur-[225px] rounded-full z-0" />
      <div className="absolute top-[800px] left-1/2 -translate-x-1/2 w-[721px] h-[706px] bg-[rgba(101,203,17,0.25)] blur-[2px] rounded-full z-0 pointer-events-none" /> */}

      {/* Main Content */}
      <div className="relative z-20 w-full flex flex-col items-center px-4 max-w-screen-2xl mx-auto mt-20 text-center">
        <img src="/right/logo.webp" alt="rigjt away logo " className='w-[120px]' />

        <h1 className="text-white w-[80%] mx-auto text-[40px] md:text-[66px] font-bold text-center uppercase leading-[72px] mb-4 tracking-wide ">
          Right Away
        </h1>

        <p className="text-white relative z-20 text-[14px] md:text-[16px] font-medium text-center max-w-4xl mb-10 leading-relaxed px-4">
          {isExpanded ? fullText : previewText}
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-[#22B573] font-bold ml-2 hover:underline focus:outline-none inline-block"
          >
            {isExpanded ? "See Less" : "See More..."}
          </button>
        </p>

        {/* Buttons
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href="#" className="flex items-center justify-center gap-3 px-6 py-4 w-[300px] rounded-[12px] bg-gradient-to-b from-[rgba(34,181,115,0.12)] via-[rgba(34,181,115,0.04)] to-[rgba(34,181,115,0.07)] backdrop-blur-[42px] hover:scale-105 transition-transform border border-white/5">
            <FaApple className="text-white text-2xl" />
            <span className="text-white font-medium text-[16px] font-poppins">Download for Iphone</span>
          </Link>

          <Link href="#" className="flex items-center justify-center gap-3 px-6 py-4 w-[300px] rounded-[16px] bg-[#22B573] border border-white/15 hover:scale-105 transition-transform">
            <FaGooglePlay className="text-white text-2xl" />
            <span className="text-white font-medium text-[16px] font-poppins">Download for Android</span>
          </Link>
        </div> */}

      </div>

      {/* Hero Image Mockup Container */}
      <div className="relative z-10 w-full flex justify-center mt-10 px-4">
        <img src={"/right/grad.webp"} className='absolute scale-90 -top-[150px] z-0 pointer-events-none' alt="gradient image" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[1200px] h-[100px] md:h-[700px] flex justify-center items-center rounded-3xl"
        >
          <img src={"/right/mockup.webp"} className='w-full scale-125' />
        </motion.div>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative z-20  max-w-screen-2xl w-[90%] mx-auto mt-20 bg-[rgba(34,181,115,0.05)] backdrop-blur-[10px] rounded-2xl border border-white/5 px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4 w-full">

          <div className="flex flex-col items-start flex-1 w-full md:w-auto pb-4 md:pb-0">
            <span className="text-white/80 text-[15px] font-normal mb-1 font-poppins">
              Project Duration
            </span>
            <span className="text-white text-[16px] font-bold font-poppins">6-8 Months</span>
          </div>

          <div className="flex flex-col items-start flex-1 w-full md:w-auto pb-4 md:pb-0">
            <span className="text-white/80 text-[15px] font-normal mb-1 font-poppins">Industry</span>
            <span className="text-white text-[16px] font-bold font-poppins">Construction Materials Marketplace & Logistics </span>
          </div>

          <div className="flex flex-col items-start flex-[1.5] w-full md:w-auto">
            <span className="text-white/80 text-[15px] font-normal mb-1 font-poppins">Services Provided</span>
            <span className="text-white text-[16px] font-bold leading-[25px] font-poppins">
          UI/UX Design, Customer Mobile App, Rider App, Supplier Portal, Super Admin Dashboard, Payment Integration. 
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
