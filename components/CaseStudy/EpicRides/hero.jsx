"use client";
import React, { useState } from "react";
import { m as motion } from "framer-motion";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = "Epic Rides is a Florida based ride hailing platform which is created to deliver the fair, affordable and community focused transportation experience. Through specialised smartphone applications, the platform links drivers and passengers to make daily travel easier while increasing driver income. In comparison to standard ride hailing services, commuters can also save money through the integrated carpooling alternatives, drivers keep 100% of their fares and riders enjoy regulated peak pricing. The entire solution, including rider and driver apps, UI/UX design, branding and the centralized admin dashboard was created by the Dignite Studios.";
  const previewText = "Epic Rides is a Florida based ride hailing the platform which is created to deliver the fair, affordable and community focused transportation experience. Through specialised smartphone applications, the platform links drivers and passengers to make daily travel easier while increasing driver income.";

  const carAnimations = [
    {
      id: 1,
      className: "absolute w-8 md:w-16 top-[20%] -left-[10%] md:left-[15%] z-20",
      initial: { opacity: 0, x: -300, y: -300 },
      animate: { opacity: 1, x: 0, y: 0 },
      rotate: -85,
      delay: 0.5,
    },
    {
      id: 2,
      className: "absolute w-10 md:w-20 top-[15%] -right-[5%] md:right-[20%] z-20",
      initial: { opacity: 0, x: 300, y: -300 },
      animate: { opacity: 1, x: 0, y: 0 },
      rotate: 0,
      delay: 0.7,
    },
    {
      id: 3,
      className: "absolute w-8 md:w-16 top-[55%] -left-[15%] md:left-[20%] z-20",
      initial: { opacity: 0, x: -400, y: 150 },
      animate: { opacity: 1, x: 0, y: 0 },
      rotate: 200,
      delay: 0.9,
    },

    // {
    //   id: 5,
    //   className: "absolute w-6 md:w-14 bottom-[5%] left-[5%] md:-left-[10%] z-20",
    //   initial: { opacity: 0, x: -150, y: 300 },
    //   animate: { opacity: 1, x: 0, y: 0 },
    //   rotate: 30,
    //   delay: 1.3,
    // },
    {
      id: 6,
      className: "absolute w-8 md:w-16 top-[65%] -right-[10%] md:right-[20%] z-20",
      initial: { opacity: 0, x: 400, y: 50 },
      animate: { opacity: 1, x: 0, y: 0 },
      rotate: 70,
      delay: 1.5,
    }
  ];

  return (
    <section className="w-full relative -mt-40  z-20 bg-[#000B00] overflow-hidden min-h-[120vh] flex flex-col justify-between pt-32">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(101, 204, 13, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(101, 204, 13, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Background Glow */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[189px] h-[345px] bg-[#6FB40F] blur-[150px] rounded-[30px] z-0 pointer-events-none" />
      <img src="/epic/aura.webp" alt="Aura Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none z-0" />
      
      {/* Top Content */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 max-w-screen-2xl mx-auto">
        <div className="w-[100px] h-[100px] bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center justify-center mb-6">
          <img src="/epic/logo.webp" alt="Epic Rides Logo" className="w-[70px] h-auto object-contain" />
        </div>
        
        <h1 className="text-white text-[40px] md:text-[66px] font-bold text-center uppercase leading-tight mb-4 tracking-wide">
          EPIC RIDES
        </h1>
        
        <p className="text-white/90 text-[14px] md:text-[15px] font-medium text-center max-w-4xl mb-10 leading-relaxed px-4">
          {isExpanded ? fullText : previewText}
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-[#65CB11] font-bold ml-2 hover:underline focus:outline-none inline-block"
          >
            {isExpanded ? "See Less" : "See More..."}
          </button>
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-16">
          <Link href="https://apps.apple.com/us/app/epic-rides/id6759365655" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 w-[246px] rounded-2xl border border-white/10 bg-gradient-to-b from-[#61cb081f] via-[#61cb080a] to-[#61cb0812] backdrop-blur-[42px] hover:scale-105 transition-transform">
            <FaApple className="text-white text-2xl" />
            <span className="text-white font-medium text-[14px]">Rider App for iPhone</span>
          </Link>

          {/* <Link href="https://apps.apple.com/us/app/epic-rides-driver/id6759365615" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 w-[246px] rounded-2xl border border-white/10 bg-gradient-to-b from-[#61cb081f] via-[#61cb080a] to-[#61cb0812] backdrop-blur-[42px] hover:scale-105 transition-transform">
            <FaApple className="text-white text-2xl" />
            <span className="text-white font-medium text-[14px]">Driver App for iPhone</span>
          </Link> */}
          
          <Link href="https://play.google.com/store/apps/details?id=com.dignitestudios.epicrides&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 w-[254px] rounded-2xl border border-[#0A0A0A] bg-[#65CB11] hover:scale-105 transition-transform">
            <FaGooglePlay className="text-[#0A0A0A] text-2xl" />
            <span className="text-[#0A0A0A] font-medium text-[14px]">Download for Android</span>
          </Link>
        </div>
      </div>
      
      {/* Mockup Image & Animated Cars */}
      <div className="relative z-10 flex justify-center w-full mt-auto  lg:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center w-[90%] md:w-[70%] max-w-[1000px]"
        >
          <img src="/epic/mockup.webp" alt="Epic Rides Mockup" className="w-full h-auto object-contain object-bottom relative z-10 scale-125 lg:scale-100" />

          {/* Render driving cars */}
          {carAnimations.map((car) => (
            <motion.img
              key={car.id}
              src="/epic/car.webp"
              alt="Floating car"
              className={`${car.className} lg:block hidden `}
              initial={{ ...car.initial, rotate: car.rotate }}
              animate={{ ...car.animate, rotate: car.rotate }}
              transition={{
                duration: 1.5,
                delay: car.delay,
                type: "spring",
                stiffness: 40,
                damping: 15,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative z-20 lg:-mt-28 w-full border-y border-dashed border-[#65CC0D] bg-[#0A0A0A]/10 backdrop-blur-xl">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-8 px-6 md:px-20 gap-8 md:gap-0">
          
          <div className="flex flex-col items-start flex-1 md:border-r border-dashed border-[#65CC0D] w-full md:w-auto pb-4 md:pb-0 border-b md:border-b-0">
            <span className="text-white/80 text-[15px] mb-2 font-normal">The Milestones</span>
            <span className="text-white text-[16px] font-bold">6-8 Months</span>
          </div>
          
          <div className="flex flex-col items-start flex-1 md:border-r border-dashed border-[#65CC0D] w-full md:w-auto md:px-10 pb-4 md:pb-0 border-b md:border-b-0">
            <span className="text-white/80 text-[15px] mb-2 font-normal">The Sector</span>
            <span className="text-white text-[16px] font-bold">Ride Hailing & Shared Mobility</span>
          </div>
          
          <div className="flex flex-col items-start flex-[1.5] w-full md:w-auto md:px-10">
            <span className="text-white/80 text-[15px] mb-2 font-normal">What we did</span>
            <span className="text-white text-[16px] font-bold leading-relaxed">
              Mobile App Development, Driver & Rider Applications, Carpool System, UI/UX Design, Branding, Admin Dashboard.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
