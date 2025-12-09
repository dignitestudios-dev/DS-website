"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {motion} from "framer-motion"
import { Autoplay } from "swiper/modules";

const Wireframes = () => {
  
  const wireframes = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
  ];



  return (
    <div className=" py-16 ">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Wireframe</h1>
          <p className="text-gray-600 max-w-5xl mx-auto leading-relaxed">
            The wireframes were designed to keep interactions effortless for young users, using simple layouts, large icons, and minimal text. Each screen highlights clear paths to Music, Stories, Lip-Sync, and Profile features. A separate parent dashboard was developed to ensure easy management, giving adults clear oversight and control without affecting the child’s streamlined experience.
          </p>
        </motion.div>
        <div className="">
          <Swiper
          //  ref={swiperRef}
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView="auto"
      loop={true}
      speed={2000} // total speed for a full loop; lower = faster
      onInit={(swiper) => {
          swiper.el.querySelector('.swiper-wrapper').style.transitionTimingFunction = 'linear';
        }}

      autoplay={{
        delay: 0, 
        disableOnInteraction: false,
        pauseOnMouseEnter: true, 
      }}
       
      className="my-swiper"
          >
            {[...wireframes, ...wireframes].map((frame, index) => (
              <SwiperSlide key={index} className="!w-auto !flex !justify-center">
                <div className="transition-transform duration-300 ease-in-out hover:!scale-110 cursor-pointer">
                  <img src={`/s${(index % wireframes.length) + 1}.png`} alt="mob" className="!w-48" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

    </div>
  );
};

export default Wireframes;