"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const FinalOutcome = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const wireframes = [
    { id: 1, rotation: -8, offset: -20 },
    { id: 2, rotation: -4, offset: -10 },
    { id: 3, rotation: 0, offset: 0 },
    { id: 4, rotation: 4, offset: 10 },
    { id: 5, rotation: 8, offset: 20 },
    { id: 6, rotation: 8, offset: 20 },
    { id: 7, rotation: 8, offset: 20 },
    { id: 8, rotation: 8, offset: 20 },
    { id: 9, rotation: 8, offset: 20 },
    { id: 10, rotation: 8, offset: 20 },
  ];

  // Update navigation after swiper initializes
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="py-16">
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
          <p className="text-gray-600 max-w-5xl mx-auto leading-relaxed px-4">
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

        <div className="w-full py-12 overflow-hidden relative left-[20%] md:left-[30%] flex gap-2 items-center justify-center">
          {/* GRADIENT OVERLAY */}
          <div className="absolute md:block hidden w-[300px] top-0 left-0 h-full bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
          
          {/* NAVIGATION ARROWS - LEFT SIDE */}
          <div className="relative flex flex-col gap-3 z-50 ml-14">
            {/* PREV ARROW (TOP) */}
            <button
              ref={prevRef}
              className="w-12 h-12 bg-gradient-to-t from-[#CEA3D8] to-[#000086] text-white flex items-center justify-center rounded-full cursor-pointer hover:opacity-80 transition-opacity "
              aria-label="Previous slide"
            >
              <IoArrowBack className="w-5 h-5" />
            </button>

            {/* NEXT ARROW (BOTTOM) */}
            <button
              ref={nextRef}
              className="w-12 h-12 bg-[#FAEFFF] text-black flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition-colors "
              aria-label="Next slide"
            >
              <IoArrowForward className="w-5 h-5" />
            </button>
          </div>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
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
            className="!w-full wireframe-swiper-custom"
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
                      alt={`Wireframe ${index + 1}`}
                      className="transition-all w-[50%] md:w-full ease-linear"
                    />
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FinalOutcome;