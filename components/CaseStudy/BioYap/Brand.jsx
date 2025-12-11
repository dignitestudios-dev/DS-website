"use client"
import React from 'react'
import {motion} from "framer-motion"
const Brand = () => {
  return (
   <section className="w-full py-24  relative z-50">
      <img src="/bioyap/w-bg.png" alt="hero" className="absolute w-screen -z-10" />
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Brand <span className="text-[#C0F765]">Identity</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-5xl mx-auto mb-12"
        >
          The main challenge is to deliver the mobile app development services which created the safe, modern and reliable experience for pharmaceutical professionals while making sure that the platform remained simple, fluent and also trustworthy. To solve this, we also focused on the strong UI/UX design for the interactive mobile app interface which was supported by the insecure in app coin system making sure that every challenge was addressed through the fluent and dependable user flow.
        </motion.p>
<div className='flex justify-between gap-12  items-center max-w-7xl mx-auto px-6 py-5'>
  <img src='/bioyap/brand.png' alt='brand'  />
  
  <div className='flex-1 text-start w-[50%] ml-12'>
    <h2 className='text-5xl  font-bold mb-8' >
      General Sans
    </h2>
    
    <div className='space-y-6'>
      {/* Title Row */}
      <div className='grid grid-cols-3 gap-4 pb-4 -2 border-gray-800'>
        <span className='font-bold text-xl'>Title</span>
        <span className='font-semibold text-xl'>Semibold</span>
        <span className='font-semibold text-xl'>24px</span>
      </div>
      
      {/* Buttons Row */}
      <div className='grid grid-cols-3 gap-4 pb-4  border-gray-300'>
        <span className='text-lg'>Buttons</span>
        <span className='font-semibold text-lg'>Semibold</span>
        <span className='text-lg'>14px</span>
      </div>
      
      {/* Subtitle Row */}
      <div className='grid grid-cols-3 gap-4 pb-4  border-gray-300'>
        <span className='text-sm'>Subtitle</span>
        <span className='font-semibold text-sm'>Semibold</span>
        <span className='text-sm'>13px</span>
      </div>
      
      {/* Button 2 Row */}
      <div className='grid grid-cols-3 gap-4 pb-4  border-gray-300'>
        <span className='text-sm text-gray-500'>Button 2</span>
        <span className='text-sm text-gray-500'>Regular</span>
        <span className='text-sm text-gray-500'>13px</span>
      </div>
      
      {/* Subtitle 2 Row */}
      <div className='grid grid-cols-3 gap-4 pb-4'>
        <span className='text-sm text-gray-500'>Subtitle 2</span>
        <span className='text-sm text-gray-500'>Regular</span>
        <span className='text-sm text-gray-500'>12px</span>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default Brand