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
          Wireframe And{" "}
          <span className="text-[#C0F765]">Information Architecture</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="  max-w-5xl mx-auto mb-16 px-4 md:px-0"
        >
          We started with low-fidelity wireframes that covered the whole journey
          from the home feed to the marketplace wallet notifications and the
          profile sections. User journeys were also mapped for buying coins,
          posting updates, browsing news, and listing products. Each action was
          reduced to the fewest possible steps. We were able to sustain high
          levels of engagement and quite fluent app navigation, which yielded
          the best results.
        </motion.p>
        <div className="dark:bg-none bg-gradient-to-b from-white to-[#F0FDDA]">
          <div className=" flex justify-center max-w-7xl mx-auto  flex-wrap ">
            {wireframes.slice(0, 5).map((w, idx) => (
              <div key={idx} className={`${idx % 2 && "mt-8"}`}>
                <img src={w} alt="wireframe" />
              </div>
            ))}
            {wireframes.slice(5, 10).map((w, idx) => (
              <div key={idx} className={`${idx % 2 && "mt-8"}`}>
                <img src={w} alt="wireframe" />
              </div>
            ))}
            {wireframes.slice(10, 15).map((w, idx) => (
              <div key={idx} className={`${idx % 2 && "mt-8"}`}>
                <img src={w} alt="wireframe" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wireframe;
