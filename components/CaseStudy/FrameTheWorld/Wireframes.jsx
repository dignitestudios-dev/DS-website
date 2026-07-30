"use client";
import React, { useRef } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const Wireframes = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = 248;
      const gap = 10;
      scrollRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = 248;
      const gap = 10;
      scrollRef.current.scrollBy({ left: (cardWidth + gap), behavior: 'smooth' });
    }
  };


  return (
    <section className="w-full bg-white flex flex-col justify-center items-center gap-12 overflow-hidden">
      
      {/* Heading Content */}
      <div className="flex flex-col justify-center items-center text-center gap-6 w-full max-w-5xl px-4">
        <h2 className="font-inter-tight text-[32px] md:text-[44px] text-[#00161D] leading-[1.1]">
          <span className='font-bold'> Wireframe </span> & Information Architecture
        </h2>
        
        <div className="flex flex-col items-center gap-2 max-w-3xl">
          <p className="font-inter-tight font-normal text-[15px] leading-[23px] text-[#00161D]">
            The team began with low-fidelity wireframes to plan the platform's core user journeys and feature interactions. This included account verification, content uploads, AI image validation, Frames creation, downloads and personal storage with account settings.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full relative">
        {/* Hiding scrollbar using custom class */}
        <div 
          ref={scrollRef} 
          className="w-full flex flex-row items-center gap-[10px] overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4 md:px-20 py-4"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((id) => (
            <div 
              key={id} 
              className="flex-none w-[248px] h-[416px] rounded-[16px] bg-gradient-to-br from-[#6CACDF] to-[#0000FE] flex justify-center items-center snap-center hover:scale-[1.02] transition-transform duration-300"
            >
              <img 
                src={`/frame/c${id}.webp`}
                alt={`Wireframe ${id}`}
                className="w-[160px] h-auto object-contain drop-shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex flex-row items-center p-[3px] gap-[3px] w-[109px] h-[56px] bg-[#DCDCDC] rounded-[16px]">
        <button 
          onClick={scrollLeft}
          className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-white rounded-[16px] hover:bg-gray-50 transition-colors shadow-sm"
        >
          <HiOutlineArrowLeft size={20} className="text-black" />
        </button>
        <button 
          onClick={scrollRight}
          className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-white rounded-[16px] hover:bg-gray-50 transition-colors shadow-sm"
        >
          <HiOutlineArrowRight size={20} className="text-black" />
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

export default Wireframes;
