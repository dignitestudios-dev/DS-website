"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";

const Wireframe = () => {
  const wireframes = [
    "/bioyap/w1.png",
    "/bioyap/w2.png",
    "/bioyap/w3.png",
    "/bioyap/w4.png",
    "/bioyap/w5.png",
    "/bioyap/w6.png",
    "/bioyap/w7.png",
    "/bioyap/w8.png",
    "/bioyap/w9.png",
    "/bioyap/w10.png",
    "/bioyap/w11.png",
    "/bioyap/w12.png",
    "/bioyap/w13.png",
    "/bioyap/w14.png",
    "/bioyap/w15.png",
  ];
  9;

  return (
    <section className="w-full py-24  relative z-50 ">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl max-w-7xl mx-auto  font-bold mb-4"
        >
          Wireframe 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600  max-w-5xl mx-auto mb-16 px-4 md:px-0"
        >
          Wireframes create the platform's structure for fluent usability. The key elements included: Homepage highlighting the AI Builder Step-by-Step AI PC Builder flow FPS calculator input/output screens Component selection and filtering The product detail pages Admin Panel interface for the product and game management Wireframes validate navigation and ensure clarity before moving into full-scale web app development. It helps us maintain an intuitive cross-platform web app development experience. 
        </motion.p>
        <div className="flex justify-center items-center" >
       <img src="/gamesfun/w-lap.png" alt="lap"  />
      </div>
      </div>
    </section>
  );
};

export default Wireframe;
