"use client";
import React, { useRef, useState, useEffect } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const Challenges = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Verifying Professional Users",
      desc: "Creating a secure onboarding process that only provides access to verified travel professionals through industry credentials was a major challenge.",
      icon: "/frame/ic1.webp"
    },
    {
      id: 2,
      title: "Maintaining Authentic Content",
      desc: "Ensuring the authenticity of every uploaded travel image was also a challenge. We had to keep the image authentic and legally suitable for professional marketing.",
      icon: "/frame/ic2.webp"
    },
    {
      id: 3,
      title: "Organizing Large Content Libraries",
      desc: "Designing a system that lets travel professionals efficiently manage thousands of destination images was quite a challenge for us.",
      icon: "/frame/ic3.webp"
    },
    {
      id: 4,
      title: "AI Powered Content Compliance",
      desc: "Implementing the automated human detection and image editing workflows all without affecting image quality and adding complexity to the content.",
      icon: "/frame/ic4.webp"
    },
    // {
    //   id: 5,
    //   title: "Delivering a Seamless Cross Platform Experience",
    //   desc: "Creating a consistent experience on both mobile and web platforms while supporting uploads, downloads, subscriptions and content management.",
    //   icon: "/frame/ic5.webp"
    // },
    // {
    //   id: 6,
    //   title: "Building a Scalable Subscription Ecosystem",
    //   desc: "Developing an infrastructure that is capable of supporting user accounts, subscription management, AI processing, secure downloads and platform administration.",
    //   icon: "/frame/ic6.webp"
    // }
  ];

  const scrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < cards.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
  };

  // Scroll to active index smoothly
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 768 ? 340 : 420;
      scrollRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <section className="w-full relative bg-[#F4F4F4] py-16 flex flex-col items-center overflow-hidden z-10">
      
      {/* Title */}
      <div className="w-full max-w-screen-xl mx-auto px-4 text-center mb-16">
        <h2 className="text-[32px] md:text-[44px] font-medium text-[#00161D] leading-[1.2] font-satoshi">
          The <span className="font-bold">Challenges</span> Behind Building Frame<br className="hidden md:block"/> The World
        </h2>
      </div>

      {/* Carousel */}
      <div className="w-full relative">
        <div 
          ref={scrollRef}
          className="w-full flex flex-row items-stretch overflow-x-hidden hide-scrollbar px-[max(1rem,calc(50vw-170px))] md:px-20 py-10 -my-10 gap-0"
        >
          {cards.map((card, index) => {
            return (
              <div 
                key={card.id}
                className="group relative flex-none w-[340px] md:w-[420px] h-[400px] md:h-[450px] p-8 md:p-12 flex flex-col justify-between transition duration-500 rounded-[16px] bg-white border-r-2 border-[#F4F4F4] hover:bg-gradient-to-br hover:from-[#6CACDF] hover:to-[#0000FE] hover:scale-[1.02] hover:z-20 cursor-pointer"
              >
                {/* Optional glow for active card */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[190px] h-[350px] bg-[#01C2FE] blur-[75px] rounded-[30px] z-0 pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative z-10 w-[80px] h-[80px] flex items-center justify-center transition-colors duration-500 p-3">
                  <img 
                    src={card.icon} 
                    alt={card.title} 
                    className="w-full h-full object-contain transition duration-500 group-hover:brightness-0 group-hover:invert" 
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4 transform group-hover:translate-x-2 transition-transform duration-500">
                  <h3 className="font-medium text-[20px] md:text-[24px] leading-[1.4] text-[#00161D] group-hover:text-white transition-colors duration-500">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-[#00161D]/70 group-hover:text-white/90 transition-colors duration-500">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-row justify-center items-center p-[3px] gap-[3px] w-[109px] h-[56px] bg-white rounded-[16px] mt-16 shadow-sm border border-gray-100">
        <button 
          onClick={scrollLeft}
          disabled={activeIndex === 0}
          className={`flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#F4F4F4] border border-black/5 backdrop-blur-[10px] rounded-[16px] transition-colors ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
        >
          <HiOutlineArrowLeft size={20} className="text-[#3E63EC]" />
        </button>
        <button 
          onClick={scrollRight}
          disabled={activeIndex === cards.length - 1}
          className={`flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#F4F4F4] border border-black/5 backdrop-blur-[10px] rounded-[16px] transition-colors ${activeIndex === cards.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
        >
          <HiOutlineArrowRight size={20} className="text-[#3E63EC]" />
        </button>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Challenges;
