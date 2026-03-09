"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Wireframe = () => {
  const wireframes = [
    "/bioyap/w1.webp",
    "/bioyap/w2.webp",
    "/bioyap/w3.webp",
    "/bioyap/w4.webp",
    "/bioyap/w5.webp",
    "/bioyap/w6.webp",
    "/bioyap/w7.webp",
    "/bioyap/w8.webp",
    "/bioyap/w9.webp",
    "/bioyap/w10.webp",
    "/bioyap/w11.webp",
    "/bioyap/w12.webp",
    "/bioyap/w13.webp",
    "/bioyap/w14.webp",
    "/bioyap/w15.webp",
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
          className="  max-w-5xl mx-auto mb-16 px-4 md:px-0"
        >
          Wireframes create the platform's structure for fluent usability. The key elements included: Homepage highlighting the AI Builder Step-by-Step AI PC Builder flow FPS calculator input/output screens Component selection and filtering The product detail pages Admin Panel interface for the product and game management Wireframes validate navigation and ensure clarity before moving into full-scale web app development. It helps us maintain an intuitive cross-platform web app development experience. 
        </motion.p>
        <div className="flex justify-center items-center" >
       <img src="/gamesfun/w-lap.webp" alt="lap"  />
      </div>
      </div>
    </section>
  );
};

export default Wireframe;
