"use client"
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="max-w-7xl  mx-auto relative rounded-3xl z-10 my-24 pt-10 text-white bg-gradient-to-r from-[#000086] to-[#CEA3D8]">
      <img src="/hl-cta1.png" className="absolute top-0" />
      <div className="flex items-center justify-between">
        <div className="p-12 space-y-4 w-full md:w-[60%]">
          <h1 className="font-bold text-2xl">Got a kid-friendly app idea? Discuss Your Idea!</h1>
          <p>
           Talk to our experts and figure out what actually works for kids and parents without overcomplicating things.
          </p>
          <button className="flex items-center gap-3 relative z-50 bg-transparent p-4 border hover:border-black hover:bg-black hover:text-white transition-all ease-linear border-white text-white rounded-full capitalize">
            Discuss Your Idea
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.700012 4.4543C0.313413 4.4543 1.22527e-05 4.7677 1.2219e-05 5.1543C1.21852e-05 5.5409 0.313413 5.8543 0.700012 5.8543L0.700012 5.1543L0.700012 4.4543ZM17.195 5.64927C17.4684 5.37591 17.4684 4.93269 17.195 4.65932L12.7402 0.20455C12.4668 -0.0688166 12.0236 -0.0688166 11.7503 0.20455C11.4769 0.477918 11.4769 0.921133 11.7503 1.1945L15.7101 5.1543L11.7503 9.1141C11.4769 9.38746 11.4769 9.83068 11.7503 10.104C12.0236 10.3774 12.4668 10.3774 12.7402 10.104L17.195 5.64927ZM0.700012 5.1543L0.700012 5.8543L16.7 5.8543L16.7 5.1543L16.7 4.4543L0.700012 4.4543L0.700012 5.1543Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        {/* ✅ Animated Image */}
        <motion.div
          initial={{ rotate: 15, x: 120, opacity: 0 }}
          whileInView={{ rotate: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src="/hl-cta.png" alt="cta" className="rounded-br-3xl relative md:block hidden -z-10" />
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;
