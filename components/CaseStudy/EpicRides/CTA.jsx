"use client";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="-mt-12 lg:-mt-28 -mb-8 lg:-mb-16 w-full bg-[#000B00] py-[50px] px-6 md:px-[80px] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Container Card */}
      <div className="relative w-full max-w-[1280px] min-h-[450px] bg-white/5 rounded-[32px] flex flex-col lg:flex-row items-center justify-between p-[30px] md:pl-[50px] md:pr-[20px] md:py-[40px] lg:py-0 overflow-hidden">
        
        {/* Background Glowing Effects (Simulated) */}
        <div className="absolute top-0 right-[20%] w-[400px] h-[500px] opacity-30 pointer-events-none rotate-[25deg] z-0">
          <div className="absolute left-[50%] top-[-20%] w-[200px] h-[800px] bg-gradient-to-b from-[#61CB08]/40 to-transparent blur-[40px]"></div>
          <div className="absolute left-[20%] top-[-10%] w-[100px] h-[800px] bg-gradient-to-b from-[#61CB08]/50 to-transparent blur-[30px]"></div>
        </div>

        {/* Left Content */}
        <div className="relative z-10 flex flex-col items-start gap-[30px] w-full max-w-[555px] lg:mt-0 mt-[20px]">
          
          <div className="flex flex-col items-start gap-[15px]">
            <h2 className="text-white text-[28px] md:text-[36px] font-normal leading-[1.11]">
              Ready To Build The Future Of Transportation?
            </h2>
            <p className="text-white text-[14px] md:text-[15px] font-normal leading-[1.67] max-w-[500px]">
              Whether You're Launching A Ride Hailing Platform, Carpooling Solution Or On Demand Mobility Application, Our Team Can Also Turn Your Vision Into A Scalable, High Performance Digital Product.
            </p>
          </div>

          {/* CTA Button */}
          <Link href="/contact-us">
            <button className="flex flex-row items-center justify-between gap-[20px] pl-[15px] pr-[8px] py-[8px] bg-[#124733] border border-white/5 rounded-[8px] hover:bg-[#124733]/80 transition-colors">
              <span className="text-white text-[15px] font-bold leading-[22px]">
                Start Your Mobility Project
              </span>
              <div className="w-[32px] h-[32px] bg-[#61CB08] rounded-[8px] flex items-center justify-center">
                <FiArrowUpRight className="text-[#101D2D] w-[18px] h-[18px]" />
              </div>
            </button>
          </Link>
          
        </div>

        {/* Right Image */}
        <div className="relative  hidden z-10 w-full pt-5 pr-20 lg:w-[450px] mt-10 lg:mt-0 lg:flex justify-center lg:justify-end">
          <img 
            src="/epic/cta.webp" 
            alt="Epic Rides Mobile Apps" 
            className="w-full max-w-[350px] lg:max-w-[400px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default CTA;
