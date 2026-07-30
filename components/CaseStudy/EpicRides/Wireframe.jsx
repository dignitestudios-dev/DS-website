"use client";
import React, { useRef } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const wireframes = [
  { id: 1, image: "/epic/w1.webp", alt: "Wireframe 1" },
  { id: 2, image: "/epic/w2.webp", alt: "Wireframe 2" },
  { id: 3, image: "/epic/w3.webp", alt: "Wireframe 3" },
  { id: 4, image: "/epic/w4.webp", alt: "Wireframe 4" },
  { id: 5, image: "/epic/w5.webp", alt: "Wireframe 5" },
  { id: 6, image: "/epic/w6.webp", alt: "Wireframe 6" },
  { id: 7, image: "/epic/w7.webp", alt: "Wireframe 7" },
];

const Wireframe = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -268, behavior: 'smooth' }); // 248 width + 20 gap roughly
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 268, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full relative bg-[#000B00] py-24 flex flex-col items-center">
      <div className="w-full flex flex-col items-center gap-[60px]">
        
        {/* Heading */}
        <div className="max-w-[1280px] w-full px-6 flex flex-col items-center gap-[20px]">
          <h2 className="w-full text-center text-white text-[32px] md:text-[44px] font-medium leading-[1.2]">
            Information Architecture & Wireframes
          </h2>
          <p className="max-w-[650px] text-center text-white font-normal text-[15px] leading-[23px]">
            Complete rider and driver itineraries were mapped using the low fidelity wireframes, 
            making the onboarding, reservations, payments, tracking and carpooling easier. With 
            the least amount of user effort, quick access to the crucial functions was guaranteed 
            via well organised information architecture and clear navigation.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="w-full relative">
          <div 
            ref={scrollRef}
            className="w-full flex flex-row items-center gap-[20px] overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-10 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {wireframes.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-[248px] h-[414px] bg-white/5 rounded-[16px] flex items-center justify-center snap-center"
              >
                <div 
                  className="w-[200px] h-[380px] flex items-center justify-center " 
                >
                  <img src={item.image} alt={item.alt} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex flex-row justify-center items-center p-[3px] gap-[3px] w-[109px] h-[56px] bg-[#101010] rounded-[16px]">
          <button 
            onClick={scrollLeft}
            className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#000B00] border border-white/5 backdrop-blur-[10px] rounded-[16px] text-[#65CB11] hover:bg-[#65CB11]/10 transition-colors flex-none"
          >
            <HiOutlineArrowLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#000B00] border border-white/5 backdrop-blur-[10px] rounded-[16px] text-[#65CB11] hover:bg-[#65CB11]/10 transition-colors flex-none"
          >
            <HiOutlineArrowRight size={20} />
          </button>
        </div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Wireframe;
