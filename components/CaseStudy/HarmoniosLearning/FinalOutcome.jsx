"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { motion } from "framer-motion";
const FinalOutcome = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const wireframes = [
    { id: 1, rotation: -8, offset: -20 },
    { id: 2, rotation: -4, offset: -10 },
    { id: 3, rotation: 0, offset: 0 },
    { id: 4, rotation: 4, offset: 10 },
    { id: 5, rotation: 8, offset: 20 },
    { id: 5, rotation: 8, offset: 20 },
    { id: 5, rotation: 8, offset: 20 },
    { id: 5, rotation: 8, offset: 20 },
    { id: 5, rotation: 8, offset: 20 },
    { id: 5, rotation: 8, offset: 20 },
    // { id: 5, rotation: 8, offset: 20 },
    // { id: 5, rotation: 8, offset: 20 },
  ];

  return (
    <div className="py-16 ">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
            <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                  >
                   Final <span className="text-[#000086]">Outcome</span>
                  </motion.h2>
          <p className="text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Harmonious Learning successfully delivered a smooth, kid-friendly audio environment supported by clear and reliable parent controls. The redesigned experience made navigation effortless for children, helping them explore music, meditation, and stories with confidence. Lip-sync quickly emerged as one of the most engaging features, offering playful expression without adding complexity. Community-driven bedtime stories inspired creativity and participation, giving families a richer, more personal content library. Parents responded positively to the transparent activity visibility, easy profile setup, and the sense of safety built into every flow.
          </p>
        </motion.div>

        <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 3 }, // show multiple on desktop
          1024: { slidesPerView: 6 },
        }}
        centeredSlides={true}
        grabCursor={true}
        loop={false}
        className="!w-full"
      >
         {/* <SwiperSlide  className="!flex !justify-center">

         </SwiperSlide> */}
        {wireframes.map((frame, index) => (
          <SwiperSlide key={index} className="!flex !justify-center">
            <motion.div
              // initial={{ opacity: 1, scale: 1, x: +100 }}
              // whileHover={{ scale: 1.1 }}
              // transition={{
              //   duration: 0.6,
              //   delay: index * 0.1,
              //   type: "spring",
              //   stiffness: 100
              // }}
              className="cursor-pointer"
            >
              <img
                src={`/ph${index + 1}.png`}
                width={250}
                height={250}
                alt="mob"
                className='hover:scale-110 transition-all ease-linear'
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        {/* <div className='flex md:hidden flex-wrap gap-4 justify-center' >
          {wireframes.map((_,index)=>(
            <img src={`/ph${index+1}.png`} width={150} height={150} alt='mob'  />
          ))}

        </div> */}
      </div>
    </div>
  );
};

export default FinalOutcome;