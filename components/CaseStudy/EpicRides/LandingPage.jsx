"use client";
import React from "react";

const LandingPage = () => {
  return (
    <section className="w-full relative bg-[#000B00] pt-[50px] md:pt-[100px]  pb-[50px] md:pb-[100px] flex flex-col items-center gap-[30px] overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col items-center gap-[10px] w-full  relative z-10">
        <h2 className="w-full text-center text-white text-[32px] md:text-[44px] font-medium leading-[1.48]">
          Landing Page
        </h2>
        <p className="w-full max-w-[560px] text-center text-white text-[15px] font-normal leading-[25px]">
          We Used Cross-Platform Mobile Development For IOS And Android, Supported By A Scalable Backend Architecture For Managing Users, Content, And Transactions
        </p>
      </div>

      {/* Image Container */}
      <div className="relative w-full  flex justify-center  z-0">
        <img 
          src="/epic/landing.webp" 
          alt="Landing Page Mockup" 
          className="w-full h-auto object-contain "
        />

        {/* Bottom Blur Effect */}
        <div className="absolute bottom-[-20px] md:bottom-[-60px] left-[-10%] w-[120%] h-[100px] md:h-[200px] bg-[#000B00] blur-[40px] pointer-events-none z-20"></div>
      </div>

    </section>
  );
};

export default LandingPage;
