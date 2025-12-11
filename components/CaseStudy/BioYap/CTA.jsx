"use client";
import { motion } from "framer-motion";
import React from "react";

const CTA = () => {
  return (
    <div className="bg-[#E6FFBC73] overflow-hidden">
      <div className="max-w-screen-2xl w-[80%] pt-16 mx-auto flex justify-between">
        <div className="flex flex-col gap-4 items-start justify-center w-[50%]">
          <h1 className="text-3xl capitalize">
            Ready to build your mobile app with a community focused experience? 
          </h1>
          <p>
            Let our team give you a clean smooth market ready product according
            to your idea. 
          </p>
          <button className="px-8 py-3 text-sm rounded-full border capitalize border-black">
            Reach out today
          </button>
        </div>

        <div className="">
          <motion.img
            src="/bioyap/cta.png"
            alt="cta"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
