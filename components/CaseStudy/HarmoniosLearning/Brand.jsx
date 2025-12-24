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
    <div className=" max-w-screen-2xl mx-auto py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
         initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Brand <span className=" dark:text-[#CEA3D8] text-purple-600">Identity</span>
          </h1>
          <p className=" max-w-5xl mx-auto leading-relaxed ">
           Building the brand identity was a bit challenging and needed to be considered properly before we start working on the logo and visual identity, there were a few things on our minds. The mobile app needed to be soft, light, and friendly for the kids, but at the same time, it needed to look clear and structured, so we went with a soft, calming color palette that instantly sets a comforting vibe, paired with friendly, rounded typography that works across both kid and parent screens. 
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex md:flex-row flex-col gap-12 mt-16">
          {/* Left Column - Typography */}
          <motion.div
            ref={leftColumnRef}
            initial={{ opacity: 0, x: -30 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[50%]"
          >
            <h2 className="text-4xl font-bold mb-8">Manrope</h2>
            
            <div className="space-y-8">
              {/* Headline */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold ">Headline</span>
                  <span className="text-xs ">Font Size: 18px | Line Height: 100%</span>
                </div>
                {/* <div className=" pt-2">
                  <p className="text-lg font-bold text-gray-900">Sample Headline Text</p>
                </div> */}
              </div>

              {/* Title */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold ">Title</span>
                  <span className="text-xs ">Font Size: 14px | Line Height: 100%</span>
                </div>
                <div className=" pt-2">
                  <h3 className="text-2xl font-bold  leading-tight">
                    Friendly Typography Shaping a<br />Calm, Child-Focused Identity
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold ">Body</span>
                  <span className="text-xs ">Font Size: 12px | Line Height: 100%</span>
                </div>
                <div className=" pt-2">
                  <p className="text-sm  leading-relaxed">
                    We chose a clean, friendly type style to ensure a comfortable 
                    reading experience for both kids and parents. The consistent 
                    use of Manrope across all touch points, texts, and easy navigation, giving 
                    the interface a warm, child-centered feel while still maintaining 
                    a polished, modern look.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
<div className='w-1 h-[400px] md:block hidden bg-gradient-to-t from-white  to-[#000086]' />
          {/* Right Column - Color Palette */}
          <motion.div
            ref={rightColumnRef}
            initial={{ opacity: 0, x: 30 }}
            animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-[50%]"
          >
            <h2 className="text-4xl font-bold mb-8">Palette</h2>
            
            <div className="grid grid-cols-2 gap-10">
              {colors.map((color, index) => (
                <motion.div
                  key={color.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={rightInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    // delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`relative , ${index % 2 && "mt-12"}`}
                >
                  {/* Main Color Block */}
                  <div 
                    className=" h-20 w-20 rounded-2xl shadow-lg relative overflow-hidden"
                    style={{ backgroundColor: color.hex }}
                  >
                    {/* <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                      <div className="text-xs font-medium opacity-90">{color.name}</div>
                      <div className="text-xs font-mono opacity-75">{color.hex}</div>
                    </div> */}
                  </div>
                  
                  {/* Light Variant Overlay */}
                  <motion.div 
                    className="absolute top-[30%] left-[20%] text-white w-20 h-20 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-xl shadow-md"
                    // style={{ backgroundColor: color.light }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 text-xs flex flex-col justify-end items-center   pb-2">
                      <h3>{color.name}</h3>
                      <span className="text-[10px] font-mono  opacity-75">
                        {color.light}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BrandIdentity;