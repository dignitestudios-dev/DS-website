"use client";
import React, { useRef } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const wireframes = [
  { id: 1, image: "/right/w1.webp", alt: "Wireframe 1" },
  { id: 2, image: "/right/w2.webp", alt: "Wireframe 2" },
  { id: 3, image: "/right/w3.webp", alt: "Wireframe 3" },
  { id: 4, image: "/right/w4.webp", alt: "Wireframe 4" },
  { id: 5, image: "/right/w5.webp", alt: "Wireframe 5" },
  { id: 6, image: "/right/w6.webp", alt: "Wireframe 6" },
  { id: 7, image: "/right/w7.webp", alt: "Wireframe 7" },
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
    <section className="w-full relative bg-[#151515] flex flex-col items-center overflow-hidden">
      <img src={"/right/ellispe.webp"} alt="Background Ellipse" className="absolute top-0 -right-1/4 w-full md:w-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen" />
      <div className="w-full flex flex-col items-center gap-[60px]">
        
        {/* Heading */}
        <div className="max-w-[1280px] w-full px-6 flex flex-col items-center gap-[20px]">
          <h2 className="w-full text-center text-white text-[32px] md:text-[44px] font-medium leading-[1.2] capitalize">
            Wireframes & Information Architecture
          </h2>
          <p className="max-w-[850px] text-center text-white/80 font-normal text-[15px] leading-[26px]">
            Low-fidelity wireframes mapped complete rider, driver, business and administrator journeys, simplifying navigation, reducing booking steps, improving transportation management and creating smooth experiences across both mobile and web platforms.
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
                className="flex-shrink-0 w-[248px] h-[414px] bg-white/5 rounded-[16px] flex items-center justify-center snap-center border border-white/5"
              >
                <div 
                  className="w-[220px] h-[390px] flex items-center justify-center rounded-lg overflow-hidden" 
                >
                  <img src={item.image} alt={item.alt} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex flex-row justify-center items-center p-[3px] gap-[3px] w-[109px] h-[56px] bg-[#22B573]/20 rounded-[16px] border border-[#22B573]/30 backdrop-blur-md">
          <button 
            onClick={scrollLeft}
            className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#151515] rounded-[14px] text-white hover:bg-[#22B573] hover:text-white transition-all duration-300 flex-none"
          >
            <HiOutlineArrowLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#151515] rounded-[14px] text-white hover:bg-[#22B573] hover:text-white transition-all duration-300 flex-none"
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
