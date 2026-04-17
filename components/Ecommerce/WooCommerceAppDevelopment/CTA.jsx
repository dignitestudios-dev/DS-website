"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = ({
  header = "If these apps started as ideas, so can yours.",
  para = "Every project started with a simple conversation, and all you need is just a conversation. We help you refine and turn your idea into a working product without confusion or overpromising.",
  btn = "Discuss Your App Idea",
}) => {
 const leftIcons = [
  { src: "/ecommerce/shopify-app/icons/1.webp", top: "18%", left: "20%" },
  { src: "/ecommerce/shopify-app/icons/2.webp", top: "52%", left: "16%" },
  { src: "/ecommerce/shopify-app/icons/3.webp", bottom: "19%", left: "8%" },
  { src: "/ecommerce/shopify-app/icons/4.webp", top: "32%", left: "10%" },
];

const rightIcons = [
  { src: "/ecommerce/shopify-app/icons/5.webp", top: "12%", right: "9%" },
  { src: "/ecommerce/shopify-app/icons/6.webp", top: "48%", right: "9%" },
  { src: "/ecommerce/shopify-app/icons/7.webp", bottom: "20%", right: "16%" },
  { src: "/ecommerce/shopify-app/icons/8.webp", top: "28%", right: "18%" },
];

  return (
    <div className="w-[95%] h-[550px] lg:w-[80%] text-black md:bg-[url('/ecommerce/shopify-app/s-cta.webp')] bg-contain bg-no-repeat bg-center transition-all ease-linear relative md:px-36 px-10 md:my-0 md:py-14 mx-auto overflow-hidden">
      {/* Floating Icons Left */}
      {leftIcons.map((icon, idx) => (
        <motion.div
          key={`left-${idx}`}
          className="absolute z-10 hidden lg:block"
          style={{ top: icon.top, left: icon.left, bottom: icon.bottom }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4 + idx,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={icon.src} alt="Icon for CTA" className="w-16 h-16 object-contain" />
        </motion.div>
      ))}

      {/* Floating Icons Right */}
      {rightIcons.map((icon, idx) => (
        <motion.div
          key={`right-${idx}`}
          className="absolute z-10 hidden lg:block"
          style={{ top: icon.top, right: icon.right, bottom: icon.bottom }}
          animate={{
            y: [0, 20, 0],
            x: [0, -12, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 5 + idx,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={icon.src} alt="Icon for CTA" className="w-16 h-16 object-contain" />
        </motion.div>
      ))}

      <div className="flex items-center h-full justify-center">
        <div className="w-full lg:w-[65%] relative z-30 text-center">
          <h2 className="text-4xl md:text-5xl capitalize font-bold mb-4">
            {header}
          </h2>
          <p>{para}</p>
          <Link
            href="/contact-us"
            className="flex items-center group justify-center pt-4"
          >
            <button
              type="submit"
              className="bg-[#F15C20] border group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
              {btn}
            </button>
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full
                         flex items-center justify-center transition-colors text-lg"
            >
              <MdArrowOutward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
