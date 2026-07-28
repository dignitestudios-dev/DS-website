"use client";
import React, { useRef } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const Results = () => {
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

  const cards = [
    { id: 1, rotation: '2deg' },
    { id: 2, rotation: '2deg' },
    { id: 3, rotation: '-4deg' },
    { id: 4, rotation: '-3deg' },
    { id: 5, rotation: '1deg' },
    { id: 6, rotation: '2deg' },
    { id: 7, rotation: '2deg' },
    { id: 8, rotation: '-2deg' },
  ];

  return (
    <section className="w-full bg-white flex flex-col justify-center items-center   gap-12 overflow-hidden font-poppins">
      
      {/* Heading Content */}
      <div className="flex flex-col justify-center items-center text-center gap-6 w-full max-w-5xl px-4">
        <h2 className="font-medium text-[32px] md:text-[44px] text-[#0C0C0C] leading-[1.2]">
          <span className="font-bold">Results</span> and Business Impact
        </h2>
        
        <p className="font-normal text-[14px] md:text-[15px] leading-[25px] text-[#0C0C0C] max-w-4xl mx-auto">
          Frame The World successfully created a trusted platform where verified travel professionals can discover and share authentic destination photography. AI powered image validation improved content quality. The modern organization tools made managing travel assets simple. Access based on subscription provided a way to download content. The platform is well equipped to support future growth and the evolving needs of the travel industry.
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full relative mt-8">
        {/* Hiding scrollbar using custom class */}
        <div 
          ref={scrollRef} 
          className="w-full flex flex-row items-center gap-[10px] overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4 md:px-20 py-4"
        >
          {cards.slice(0, 7).map((card) => (
            <div 
              key={card.id} 
              className="flex-none w-[248px] h-[416px] rounded-[16px] bg-black/5 flex justify-center items-center snap-center hover:scale-[1.02] transition-transform duration-300"
            >
              <img 
                src={`/frame/l${card.id}.webp`}
                alt={`Result ${card.id}`}
                className="w-[160px] h-auto object-contain drop-shadow-xl"
                style={{ transform: `rotate(${card.rotation})` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex flex-row items-center p-[3px] gap-[3px] w-[109px] h-[56px] bg-[#F2F2F2] rounded-[16px]">
        <button 
          onClick={scrollLeft}
          className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-white border border-black/5 backdrop-blur-[10px] rounded-[16px] hover:bg-gray-50 transition-colors shadow-sm"
        >
          <HiOutlineArrowLeft size={20} className="text-[#3E63EC]" />
        </button>
        <button 
          onClick={scrollRight}
          className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-white border border-black/5 backdrop-blur-[10px] rounded-[16px] hover:bg-gray-50 transition-colors shadow-sm"
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

export default Results;
