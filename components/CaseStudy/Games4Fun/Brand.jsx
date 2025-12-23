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
            Brand <span className="text-[#C100FF]">Identity</span>
          </h1>
          <p className=" max-w-5xl px-2 relative z-50 mx-auto leading-relaxed ">
 The visual direction highlights the energy and the clarity needed for a strong gamer-focused web-based solution. The branding is energetic, modern, and gamer-focused, reflecting the speed, power, and tech genius of the custom web application. Bold RGB inspired the colors, futuristic typography, and high-contrast layouts, creating an advanced yet quite approachable identity for the web-based solution.   
          </p>
        </motion.div>
        <div className='flex h-[40vh] md:h-[110vh] relative justify-center items-center' >
<img src='/gamesfun/brand.png' alt='brand' className='absolute ' />
       </div>
  

      </div>
    </div>
  );
};

export default BrandIdentity;