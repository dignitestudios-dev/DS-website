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
  ];

  return (
    <section className="w-full py-24 px-6 relative z-50 ">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Wireframe And{" "}
          <span className="text-[#C0F765]">Information Architecture</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-5xl mx-auto mb-16"
        >
          We designed and wireframed our concept the wireframes from the
          brainstorm to the interface to define early stage visuals and basic
          structural elements. We emphasized on simple usability and clear
          information hierarchy making the core features straightforward. Swt
          w4ires also helped to the iterate quickly steps. We were able to
          polish high levels of engagement and also ensure that we have user,
          navigation, and account setup are intuitive.
        </motion.p>
        <div className="bg-gradient-to-b flex flex-wrap from-white to-[#F0FDDA]">
          {wireframes.map((w, idx) => (
            <div key={idx} className={`${idx %2 && "mt-2"}`}>
              <img src={w} alt="wireframe"  />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wireframe;
