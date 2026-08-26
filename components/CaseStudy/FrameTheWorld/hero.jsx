"use client";
import React, { useState } from "react";
import { m as motion } from "framer-motion";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = "Frame The World is a premium mobile and web platform exclusively for verified travel professionals to share authentic travel photography. The platform gives travel agents access to high quality visual content that they can actually use in promotional campaigns. Frame The World creates a trusted ecosystem where authenticity remains the core of all the interaction. The platform features an onboarding process that verifies travel professionals before granting access. Verified users can upload travel photography into personalized Frames and discover content shared by other professionals through flexible subscription plans. AI assisted image processing works on validating uploaded content before publication. A centralized admin platform further helps with user verification, content moderation, subscription management and reporting within platform operations.";
  const previewText = "Frame The World is a premium mobile and web platform exclusively for verified travel professionals to share authentic travel photography. The platform gives travel agents access to high quality visual content that they can actually use in promotional campaigns. Frame The World creates a trusted ecosystem where authenticity remains the core of all the interaction.";

  return (
    <section className="w-full relative -mt-40 pt-40 z-20 bg-white overflow-hidden min-h-[120vh] flex flex-col justify-between  pb-20">

<img src={"/frame/bg.webp"} alt="map of world" className="absolute  -top-40"  />

      {/* Top Content */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 max-w-screen-2xl mx-auto">
        <div className="w-[100px] h-[100px] bg-transparent  rounded-md p-2 flex items-center justify-center mb-6">
          <img src="/frame/logo.webp" alt="Frame The World Logo" className="w-[100px] h-auto object-contain" onError={(e) => { e.target.src = '/epic/logo.webp'; }} />
        </div>
        
        <h1 className="text-black text-[40px] md:text-[66px] font-bold text-center uppercase leading-tight mb-4 tracking-wide">
        Frame The World
        </h1>
        
        <p className="text-gray-700 text-[14px] md:text-[16px] font-medium text-center max-w-4xl mb-10 leading-relaxed px-4">
          {isExpanded ? fullText : previewText}
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-blue-500 font-bold ml-2 hover:underline focus:outline-none inline-block"
          >
            {isExpanded ? "See Less" : "See More..."}
          </button>
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-16">
          <Link href="https://apps.apple.com/us/app/frame-the-world/id6762137371" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 w-[254px] rounded-2xl border border-blue-500 bg-[#4285F4] hover:bg-[#3367d6] transition-colors shadow-lg shadow-blue-500/20">
            <FaApple className="text-white text-2xl" />
            <span className="text-white font-medium text-[14px]">Download for iPhone</span>
          </Link>
          
          <Link href="https://play.google.com/store/apps/details?id=com.dignitestudios.frametheworld" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 w-[254px] rounded-2xl border border-[#0A0A0A] bg-[#65CB11] hover:bg-[#5bb410] transition-colors shadow-lg shadow-[#65CB11]/20">
            <FaGooglePlay className="text-[#0A0A0A] text-2xl" />
            <span className="text-[#0A0A0A] font-medium text-[14px]">Download for Android</span>
          </Link>
        </div>
      </div>
      
      {/* Mockup Image */}
      <div className="relative z-10 flex justify-center w-full mt-auto lg:pt-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center w-[90%] md:w-[70%] max-w-[800px]"
        >
          <img src="/frame/mockup.webp" alt="Frame The World Mockup" className="w-[400px] md:w-[1400px] h-auto object-contain object-bottom relative z-10 scale-125" onError={(e) => { e.target.src = '/frame/mockup.webp'; }} />
        </motion.div>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative z-20 w-full -mt-16 lg:-mt-36 border-y border-dashed border-blue-200 bg-white/20 backdrop-blur-lg py-2">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-6 px-6 md:px-10 lg:px-20 gap-8 md:gap-0">
          
          <div className="flex flex-col items-start flex-1 md:border-r border-dashed border-blue-200 w-full md:w-auto pb-4 md:pb-0 border-b md:border-b-0">
            <span className="text-gray-500 text-[14px] mb-2 font-normal">The Milestone:</span>
            <span className="text-black text-[16px] font-bold">Built In 240+ Days Of Collaboration</span>
          </div>
          
          <div className="flex flex-col items-start flex-[1.2] md:border-r border-dashed border-blue-200 w-full md:w-auto md:px-10 pb-4 md:pb-0 border-b md:border-b-0">
            <span className="text-gray-500 text-[14px] mb-2 font-normal">The Sector:</span>
            <span className="text-black text-[16px] font-bold">Travel Technology & Digital Content<br className="hidden lg:block"/> Management</span>
          </div>
          
          <div className="flex flex-col items-start flex-[2] w-full md:w-auto md:px-10">
            <span className="text-gray-500 text-[14px] mb-2 font-normal">What We Did</span>
            <span className="text-black text-[16px] font-bold leading-relaxed">
              Mobile App Development, Web Platform Development, UI/UX Design, Admin Dashboard
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
