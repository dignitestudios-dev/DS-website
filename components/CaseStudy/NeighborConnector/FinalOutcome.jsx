"use client";
import React, { useRef } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const finalImages = [
  { id: 1, image: "/neighbor/s1.webp", alt: "Final UI 1" },
  { id: 2, image: "/neighbor/s2.webp", alt: "Final UI 2" },
  { id: 3, image: "/neighbor/s3.webp", alt: "Final UI 3" },
  { id: 4, image: "/neighbor/s4.webp", alt: "Final UI 4" },
  { id: 5, image: "/neighbor/s5.webp", alt: "Final UI 5" },
  { id: 6, image: "/neighbor/s6.webp", alt: "Final UI 6" },
  { id: 7, image: "/neighbor/s7.webp", alt: "Final UI 7" },
];

const FinalOutcome = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -268, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 268, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full relative bg-[#FAFAFA] flex flex-col items-center">
      <div className="w-full flex flex-col items-center gap-[60px]">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1280px] w-full px-6 flex flex-col items-center gap-[20px]"
        >
          <h2 className="w-full text-center text-[#1F222E] text-[32px] md:text-[40px] font-bold leading-[120%] tracking-tight">
            Stronger Communities, <span className="text-[#274B01]">Better Connections</span>
          </h2>
          <p className="max-w-[888px] text-center text-[#0C0C0C] font-normal text-[14px] leading-[130%]">
            Neighbor Connector successfully delivers a secure and engaging platform which strengthens neighborhood relationships through the trusted communication, organized assistance and proactive safety features. The solution simplifies community coordination, encourages meaningful participation, improves resident safety and provides a scalable foundation for the long term community growth to support future platform enhancements.  
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full relative"
        >
          <div 
            ref={scrollRef}
            className="w-full flex flex-row items-center gap-[10px] overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-10 py-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {finalImages.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-[248px] h-[414px] bg-[#65CB11]/5 rounded-[16px] flex items-center justify-center snap-center px-4"
              >
                <div 
                  className="w-[160px] h-[346px] flex items-center justify-center overflow-hidden transition-transform duration-300" 
                >
                  <img src={item.image} alt={item.alt} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-row justify-center -mt-10 items-center gap-[3px]"
        >
          <button 
            onClick={scrollLeft}
            className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#274B01] border border-white/5 backdrop-blur-[10px] rounded-[16px] text-white hover:bg-[#325200] transition-colors flex-none"
          >
            <HiOutlineArrowLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#274B01] border border-white/5 backdrop-blur-[10px] rounded-[16px] text-white hover:bg-[#325200] transition-colors flex-none"
          >
            <HiOutlineArrowRight size={20} />
          </button>
        </motion.div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FinalOutcome;
