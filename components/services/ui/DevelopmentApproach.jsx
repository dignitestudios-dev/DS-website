"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DevelopmentApproach = ({ header, header2, subtitle, para, buttonText, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(436); // 406 + 30 gap
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile width (e.g. 100vw - padding + gap)
        setSlideWidth(window.innerWidth - 32 + 20); // roughly padding 16px sides, gap 20
      } else {
        setSlideWidth(436);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full bg-[#0C0C0C] py-24  relative flex flex-col items-center overflow-hidden">
      {/* Background vector lines (Placeholder to match UI) */}


      <div className="w-full max-w-[1440px] px-4 md:px-[80px] flex flex-col items-center gap-[80px] z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-[984px] gap-[30px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[68px] leading-[1.05] tracking-tight font-bold text-white capitalize"
          >
            {header} {header2 && <span className="text-[#F15C20]">{header2}</span>}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] leading-[161%] font-light text-white max-w-[850px]"
          >
            {subtitle || para}
          </motion.p>
          {buttonText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact-us"
                className="flex items-center group justify-center mt-2"
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

        {/* Carousel Section */}
        <div className="w-full relative max-w-[1310px] mx-auto" ref={containerRef}>
          <div className="w-full py-4">
            <motion.div
              className="flex gap-[20px] md:gap-[30px]"
              animate={{ x: `calc(-${currentIndex * slideWidth}px)` }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
            >
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="group w-full md:w-[406.67px] h-[404px] bg-[#F4F4F4] hover:bg-[#F15C20] transition-colors duration-300 rounded-[16px] p-[30px_20px] flex flex-col justify-between items-start shrink-0"
                  >
                    {/* Icon Container */}
                    <div className="w-[50px] h-[50px] flex justify-start items-center text-[#F15C20] group-hover:text-white transition-colors duration-300">
                      {item.icon ? item.icon : <div className="w-5 h-5 bg-current" />}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-[10px]">
                      <h3 className="font-semibold text-[32px] leading-[40px] text-[#00161D] group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-normal text-[16px] leading-[19px] text-[#00161D] group-hover:text-white transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center w-[280px] md:w-[414px] mx-auto mt-[60px] relative z-20">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-[50px] h-[50px] flex justify-center items-center rounded-xl bg-white/5 border border-white/50 backdrop-blur-md text-[#F15C20] disabled:opacity-50 transition-all hover:bg-white/20 cursor-pointer"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-[4px]">
              {items.map((_, index) => (
                <div
                  key={index}
                  className={`h-[16px] rounded-full transition-all duration-300 ${currentIndex === index
                      ? "w-[30px] bg-white"
                      : "w-[16px] bg-white/50"
                    }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentIndex >= items.length - 1}
              className="w-[50px] h-[50px] flex justify-center items-center rounded-xl bg-white/5 border border-white/50 backdrop-blur-md text-[#F15C20] disabled:opacity-50 transition-all hover:bg-white/20 cursor-pointer"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DevelopmentApproach;
