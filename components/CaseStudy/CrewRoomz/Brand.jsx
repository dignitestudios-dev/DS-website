"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BrandIdentity = () => {
  const headerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const leftInView = useInView(leftColumnRef, { once: true, amount: 0.3 });
  const rightInView = useInView(rightColumnRef, { once: true, amount: 0.3 });

  const colors = [
    { name: 'Deep Navy', hex: '#000084', light: '#A5A5D8' },
    { name: 'Lavender', hex: '#CEABD8', light: '#CEABD8' },
    { name: 'Ink Blue', hex: '#00010D', light: '#00010D' },
    { name: 'Dark Gray', hex: '#282828', light: '#282828' }
  ];

  return (
    <div className=" py-24 relative" >
    {/* <img src="/crew/el.png" alt="ellipse" className="absolute top-10 left-0 w-screen h-[100%]" /> */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
         initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-[40px] font-bold mb-6">
            Brand <span className="text-[#36C0EF]">Identity</span>
          </h1>
          <p className=" max-w-5xl px-2 relative z-50 mx-auto leading-relaxed ">
   When you think of CrewRoomz, imagine a brand that speaks your language. Professional, modern, and clean, just like the aviation world itself. The name blends “Crew” and “Roomz” to highlight community and a place to stay. Travel, airports, and comfort inspire colors, while typography is super clear and easy to read. And the tone is Friendly, supportive, and trustworthy, so you know CrewRoomz is your go-to partner whenever you’re on the move.  
          </p>
        </motion.div>
        <div className='flex h-[40vh] md:h-[100vh] relative justify-center items-center' >
<img src='/crew/brand.png' alt='brand' className='absolute ' />
       </div>
  

      </div>
    </div>
  );
};

export default BrandIdentity;