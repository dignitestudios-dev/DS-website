"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
// import { motion } from "framer-motion";
const FinalOutcome = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);
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
            Harmonious Learning successfully delivered a smooth, kid-friendly
            audio environment supported by clear and reliable parent controls.
            The redesigned experience made navigation effortless for children,
            helping them explore music, meditation, and stories with confidence.
            Lip-sync quickly emerged as one of the most engaging features,
            offering playful expression without adding complexity.
            Community-driven bedtime stories inspired creativity and
            participation, giving families a richer, more personal content
            library. Parents responded positively to the transparent activity
            visibility, easy profile setup, and the sense of safety built into
            every flow.
          </p>
        </motion.div>
        <div className="w-full py-12 overflow-hidden relative left-[0%] md:left-[30%] flex gap-2 items-center justify-center">
          {/* ARROWS CONTAINER - LEFT SIDE */}
          
          <div className="w-full relative  flex flex-col pl-12 gap-3 z-50 ml-14">
            <div className="absolute md:block hidden w-[500px] top-[-250%] left-0 h-[1000px] bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
            {/* FORWARD ARROW (TOP) */}
            <div
            ref={prevRef}
              className="swiper-button-prev !z-50 custom-prev-btn !w-12 !h-12 !bg-gradient-to-t !from-[#CEA3D8] !to-[#000086] 
                 text-white flex items-center justify-center rounded-full cursor-pointer"
            >
              <IoArrowBack />
            </div>
            <div
            ref={nextRef}
              className="swiper-button-next !z-50 custom-next-btn !w-12 !h-12 !bg-[#FAEFFF] 
                 !text-black !flex !items-center !justify-center !rounded-full !cursor-pointer"
            >
              <IoArrowForward />
            </div>

            {/* BACKWARD ARROW (BOTTOM) */}
          </div>

          {/* RIGHT ARROW
  <div
    className="swiper-button-next custom-next-right z-50 absolute -right-12 top-[50%] -translate-y-1/2 
               w-10 h-10 bg-[#FAEFFF] 
               text-black flex items-center justify-center rounded-full cursor-pointer opacity-0"
  >
    <IoArrowForward />
  </div> */}

          {/* SWIPER */}
          {swiperReady && 
          
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next-btn",
              prevEl: ".custom-prev-btn",
            }}
             onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
            grabCursor={true}
            loop={true}
            loopedSlides={wireframes.length}
            className="!w-[100%] wireframe-swiper-custom"
          >
            {wireframes.map((frame, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                {({ isActive, isNext, isPrev }) => (
                  <motion.div
                    className="cursor-pointer transition-all duration-300"
                    style={{
                      opacity: isActive ? 1 : isPrev ? 0 : 1,
                      transform: isNext ? "scale(1.10)" : "scale(1)",
                    }}
                  >
                    <img
                      src={`/ph${index + 1}.png`}
                      width={400}
                      height={400}
                      alt="mob"
                      className="transition-all w-[50%] md:w-full ease-linear"
                    />
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          }
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
