"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaExclamationTriangle } from "react-icons/fa";

const Signs = ({ header, header2, subtitle, buttonText, items }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1240px] mx-auto  px-4 xl:px-0 relative z-20">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center max-w-[1050px] mb-[50px] gap-[30px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] md:text-5xl lg:text-[68px] leading-[1.05] tracking-tight font-bold text-[#0C0C0C] capitalize"
        >
          {header} <span className="text-[#F15C20]">{header2}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[16px] md:text-[18px] leading-[161%] text-[#5C5C5C] w-full"
        >
          {subtitle}
        </motion.p>


      </div>

      {/* Grid Section */}
      <div className="w-full border-[0.5px] border-black/15 rounded-[16px] overflow-hidden bg-[#F9F9F9] backdrop-blur-[25px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="flex flex-col justify-start items-center text-center px-5 py-10 h-full min-h-[400px] border-black/15 border-b-[0.5px] lg:[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:not(:nth-child(3n))]:border-r-[0.5px] md:[&:not(:nth-child(2n))]:border-r-[0.5px]"
            >
              {/* Icon */}
              <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center mt-[30px]">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="16.5" fill="#E5320F" fill-opacity="0.1" />
                  <path d="M29.4725 12.2201C28.8958 11.1301 27.1025 11.1301 26.5258 12.2201L11.5258 40.5534C11.3913 40.8074 11.3248 41.0919 11.3327 41.3792C11.3406 41.6666 11.4226 41.947 11.5709 42.1932C11.7192 42.4394 11.9286 42.6431 12.1789 42.7845C12.4291 42.9259 12.7117 43.0002 12.9992 43.0001H42.9992C43.2866 43.0007 43.5692 42.9268 43.8196 42.7856C44.07 42.6444 44.2795 42.4408 44.4277 42.1945C44.5759 41.9483 44.6578 41.6678 44.6654 41.3805C44.6729 41.0932 44.6059 40.8088 44.4708 40.5551L29.4725 12.2201ZM29.6658 38.0001H26.3325V34.6668H29.6658V38.0001ZM26.3325 31.3334V23.0001H29.6658L29.6675 31.3334H26.3325Z" fill="#E5320F" />
                </svg>
              </div>
              <div className="text-[#E5320F] uppercase font-bold tracking-wide -mt-4 text-sm">challenge</div>

              {/* Content */}
              <div className="flex flex-col items-center justify-start gap-1 mt-[30px] mb-[20px] max-w-[373px] mx-auto">
                <h3 className="font-bold text-[16px] leading-[19px] text-[#0C0C0C] mb-[15px]">
                  {item.title}
                </h3>
                <p className="font-normal text-[15px] leading-[22px] text-[#0C0C0C]">
                  {item.desc || item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {buttonText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/contact-us"
            className="flex mt-10 items-center group justify-center "
          >
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full font-normal transition-colors">
              {buttonText}
            </button>
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
              <MdArrowOutward />
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Signs;
