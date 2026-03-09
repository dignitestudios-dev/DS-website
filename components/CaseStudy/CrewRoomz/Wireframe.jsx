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
            {/* <img src="/crew/el.webp" alt="ellipse" className="absolute top-10 left-0 w-screen h-[100%]" /> */}
      <div className="text-center relative z-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl max-w-7xl mx-auto  font-bold mb-4"
        >
          Wireframes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="  max-w-5xl mx-auto mb-16 px-4 md:px-0"
        >
      When you use CrewRoomz, everything is designed to get you moving quickly and effortlessly. Our low-fidelity wireframes mapped how you search and filter, book stays, explore property details, and even manage listings or admin reviews. By sketching it all out first, our team at a top Web App Development Company ensured the platform’s structure is solid, intuitive, and user-friendly. These wireframes are a key step in building smart, efficient web-based solutions just for you.
        </motion.p>
       <motion.img
  src="/crew/wireframe.webp"
  alt="wireframe"
  className="w-screen relative z-50"
  initial={{ opacity: 0.2, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
/>

      </div>
    </section>
  );
};

export default Wireframe;
