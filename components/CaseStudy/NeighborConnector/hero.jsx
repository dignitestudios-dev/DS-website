"use client";
import React, { useState } from "react";
import { m as motion } from "framer-motion";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = "Neighbor Connector is a community focused mobile application designed to help the neighbors build safer, stronger and more connected communities through the verified neighborhood circles. The platform enables trusted communication, structured help requests, community event planning and daily safety check-ins within the private groups. Features such as the real time community and daily safety check-ins through the private groups. Features such as real time community chat, shared calendars, recurring reminders, emergency notifications and organized assistance requests encourage meaningful collaboration among the residents. Dignite designed and developed the complete platform, including mobile application development UI/UX design, real-time communication features and the centralized administration dashboard. The solution creates a secure digital space where communities can stay connected, informed and supported every day.";
  const previewText = "Neighbor Connector is a community focused mobile application designed to help the neighbors build safer, stronger and more connected communities through the verified neighborhood circles. The platform enables trusted communication, structured help requests, community event planning and daily safety check-ins within the private groups.";
  return (
    <section className="w-full relative -mt-40   z-20 bg-white overflow-hidden min-h-[120vh] flex flex-col items-center pt-32">
      {/* Background glow effects based on CSS
      <div className="absolute w-[1440px] h-[577px] bottom-0 left-1/2 -translate-x-1/2 bg-black/5 opacity-10 blur-[15px] pointer-events-none z-0" />
      <div className="absolute w-[1440px] h-[663px] left-1/2 -translate-x-1/2 top-[-487px] bg-[#C0F765] blur-[150px] opacity-30 z-0 pointer-events-none" />
      <div className="absolute w-[1440px] h-[663px] left-1/2 -translate-x-1/2 top-[-427px] bg-[#97E954] blur-[150px] opacity-30 z-0 pointer-events-none" />
      <div className="absolute w-[1440px] h-[663px] left-1/2 -translate-x-1/2 top-[-357px] bg-[#65CB11] blur-[150px] opacity-30 z-0 pointer-events-none" /> */}

      {/* Top Content */}
      <div className="relative z-30 w-full flex flex-col -mb-20 lg:mb-0 items-center px-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src="/neighbor/logo.webp" alt="Neighbor Connector Logo" className="w-[184px] h-[105px] object-contain" />
        </div>

        <h1 className="text-[#1F222E] text-[40px] md:text-[66px] font-[700] text-center leading-[120%] mb-4 ">
          Neighbor Connector
        </h1>

        <p className="text-[#0C0C0C] text-[12px] md:text-[18px] font-normal text-center max-w-5xl mb-10 leading-[130%] px-4 tracking-tight">
          {isExpanded ? fullText : previewText}
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-[#65CB11] font-bold ml-2 hover:underline focus:outline-none inline-block"
          >
            {isExpanded ? "See Less" : "See More..."}
          </button>
        </p>

        <div className="flex  items-center   gap-2 mb-16 mx-4">
          <Link href="https://play.google.com/store/apps/details?id=com.cts.neighbour_connector" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3  py-3 w-[160px] lg:w-[180px] rounded-[10px] bg-[#151515] hover:scale-105 transition-transform">
            <FaGooglePlay className="text-white text-xl" />
            <div className="flex flex-col items-start">
              <span className="text-white/60 text-[8px] uppercase leading-none">Get it on</span>
              <span className="text-white font-bold text-[16px] leading-none mt-1">Google Play</span>
            </div>
          </Link>

          <Link href="https://apps.apple.com/us/app/neighbor-connector/id6759636423"
            target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-3 w-[160px] lg:w-[180px] rounded-[10px] bg-[#151515] hover:scale-105 transition-transform">
            <FaApple className="text-white text-2xl" />
            <div className="flex flex-col items-start">
              <span className="text-white/60 text-[8px] uppercase leading-none">Download on the</span>
              <span className="text-white font-bold text-[16px] leading-none mt-1">App Store</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Background Big Text
      <div className="absolute w-full top-[500px] left-1/2 -translate-x-1/2 z-0 pointer-events-none flex justify-center overflow-hidden">
        <h2 className="text-[100px] md:text-[170px] font-bold text-center leading-[120%] opacity-15 whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-[#274B01] to-[#274b0126]">
          Neighbor Connector
        </h2>
      </div> */}

      {/* Grid pattern / Mask Group section */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[542px] w-[800px] h-[1440px] z-0 overflow-hidden opacity-50 flex flex-wrap justify-center pointer-events-none">
        {/* Simplified grid pattern */}
        <div className="w-[1440px] h-[800px] flex flex-wrap border-l border-t border-[#E5E5E5]/50 rotate-90 origin-center">
          {Array.from({ length: 180 }).map((_, i) => (
            <div key={i} className="w-[80px] h-[80px] border-r border-b border-[#E5E5E5]/50" />
          ))}
        </div>
      </div>

      {/* Mockup Image & Effects */}
      <div className="relative z-10 flex justify-center w-full mt-10 md:-mt-56 mb-10 md:-mb-44">
        <img src={"/neighbor/l.webp"} alt="left" className="hidden md:block absolute w-[238px] left-[20%] top-[60%] " />
        <img src={"/neighbor/r.webp"} alt="right" className="hidden md:block absolute w-[233px] right-[20%] top-[30%] " />
        <div className="absolute w-full  bg-[#D5D5D5]/30 blur-[50px] rounded-full top-[10%] z-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center w-full   z-10"
        >
          {/* We will use a placeholder or image user provided for mockup */}
          <img src="/neighbor/mockup.webp" alt="Neighbor Connector Mockup" className="w-full h-auto object-cover object-top relative z-10 scale-150 lg:scale-100" />
        </motion.div>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative z-20 w-full mt-auto py-4 lg:py-0 bg-[#274B01] border-y border-dashed border-white/50">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-20  md:gap-0">

          <div className="flex flex-col items-start justify-center flex-1 md:border-r border-dashed border-white/50 w-full md:w-auto py-4 lg:py-8">
            <span className="text-white text-[15px] mb-2 font-normal">The Milestones</span>
            <span className="text-white text-[16px] font-bold">6-8 Months</span>
          </div>

          <div className="flex flex-col items-start justify-center flex-[1.5] md:border-r border-dashed border-white/50 w-full md:w-auto md:px-10 py-4 lg:py-8">
            <span className="text-white text-[15px] mb-2 font-normal">Industry</span>
            <span className="text-white text-[16px] font-bold">Community Networking & Social Safety Platform</span>
          </div>

          <div className="flex flex-col items-start justify-center flex-[2] w-full md:w-auto md:px-10 py-4 lg:py-8">
            <span className="text-white text-[15px] mb-2 font-normal">What we did</span>
            <span className="text-white text-[16px] font-bold leading-relaxed">
              Mobile App Development, Admin Dashboard.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
