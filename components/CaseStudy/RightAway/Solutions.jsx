"use client";
import React, { useRef } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { m as motion } from "framer-motion";

const userScreens = [
  { id: 1, image: "/right/u1.webp", alt: "User Screen 1" },
  { id: 2, image: "/right/u2.webp", alt: "User Screen 2" },
  { id: 3, image: "/right/u3.webp", alt: "User Screen 3" },
  { id: 4, image: "/right/u4.webp", alt: "User Screen 4" },
  { id: 5, image: "/right/u5.webp", alt: "User Screen 5" },
  { id: 6, image: "/right/u6.webp", alt: "User Screen 6" },
  { id: 7, image: "/right/u7.webp", alt: "User Screen 7" },
];

const riderScreens = [
  { id: 1, image: "/right/r1.webp", alt: "Rider Screen 1" },
  { id: 2, image: "/right/r2.webp", alt: "Rider Screen 2" },
  { id: 3, image: "/right/r3.webp", alt: "Rider Screen 3" },
  { id: 4, image: "/right/r4.webp", alt: "Rider Screen 4" },
  { id: 5, image: "/right/r5.webp", alt: "Rider Screen 5" },
  { id: 6, image: "/right/r6.webp", alt: "Rider Screen 6" },
  { id: 7, image: "/right/r7.webp", alt: "Rider Screen 7" },
];

const Slider = ({ title, data }) => {
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
    <div className="w-full flex flex-col gap-6  mx-auto mt-20 relative z-10">
      {/* App Badge */}
      <div className="px-6 flex w-full">
        <div className="bg-white/5 px-6 py-2 rounded-[12px] border border-white/10 ml-0 md:ml-10">
          <span className="text-white font-poppins font-medium text-[16px]">{title}</span>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="w-full relative">
        <div 
          ref={scrollRef}
          className="w-full flex flex-row items-center gap-[20px] overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-16 py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-[248px] h-[500px] bg-white/5 rounded-[16px] flex items-center justify-center snap-center hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="w-[220px] h-[460px] flex items-center justify-center">
                <img src={item.image} alt={item.alt} className="w-full h-full object-contain drop-shadow-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="w-full flex justify-center mt-2">
        <div className="flex flex-row justify-center items-center p-[3px] gap-[3px] w-[109px] h-[56px] bg-[#101010] rounded-[16px]">
          <button 
            onClick={scrollLeft}
            className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#151515] border border-white/5 backdrop-blur-[10px] rounded-[16px] text-[#22B573] hover:bg-[#22B573]/10 transition-colors flex-none"
          >
            <HiOutlineArrowLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="flex flex-row justify-center items-center w-[50px] h-[50px] bg-[#151515] border border-white/5 backdrop-blur-[10px] rounded-[16px] text-[#22B573] hover:bg-[#22B573]/10 transition-colors flex-none"
          >
            <HiOutlineArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  return (
    <section className="w-full relative bg-[#151515] flex flex-col items-center overflow-hidden">
      <img src={"/right/ellispe.webp"} alt="Background Ellipse" className="absolute top-0 -right-1/4 w-full md:w-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen" />
      {/* Background glowing blurs */}
      <div className="absolute top-0 right-[-100px] w-[500px] h-[500px] bg-[#22B573]/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[20%] left-[-100px] w-[500px] h-[500px] bg-[#22B573]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="w-full flex flex-col items-center z-10">
        
        {/* Heading */}
        <div className="max-w-[780px] w-full px-6 flex flex-col items-center gap-[20px]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full text-center text-white text-[32px] md:text-[44px] font-medium leading-[1.2] font-poppins"
          >
             Delivering a Smarter Construction Supply Platform 
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full max-w-[850px] text-center text-white/80 text-[15px] font-normal leading-[160%] font-poppins"
          >
        RightAway provides a connected construction materials marketplace that simplifies purchasing, supplier operations and delivery management within one platform. Customers enjoy a smoother buying experience, suppliers efficiently manage inventory and orders, riders complete deliveries with greater accuracy and administrators oversee platform operations through centralized controls which support sustainable business growth.
          </motion.p>
        </div>

        {/* User App Slider */}
        <Slider title="User App" data={userScreens} />

        {/* Rider App Slider */}
        <Slider title="Rider App" data={riderScreens} />

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Solutions;
