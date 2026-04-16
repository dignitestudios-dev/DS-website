"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

const steps = [
  { title: "Project Vision", description: "Structured planning and clarity." },
  { title: "Expert Consultation", description: "Technical & business alignment." },
  { title: "Hiring Developers", description: "Choose best-fit talent." },
  { title: "Developer Biography", description: "Review profiles and skills." },
  { title: "Collaboration", description: "Agile execution and transparency." },
  { title: "Meet Developer", description: "Regular sync & updates." },
];

const HiringProcess = ({header,para,button , steps,header2}) => {
  const scrollRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);

  // Drag states
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // Measure card width
  useEffect(() => {
    const updateCardWidth = () => {
      const container = scrollRef.current;
      if (container?.firstElementChild) {
        const card = container.firstElementChild;
        const gap = 16;
        setCardWidth(card.clientWidth + gap);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Snap to exact card
  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;

    const clamped = Math.max(0, Math.min(index, steps.length - 1));

    scrollRef.current.scrollTo({
      left: clamped * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(clamped);
  };

  const handleNext = () => scrollToIndex(activeIndex + 1);
  const handlePrev = () => scrollToIndex(activeIndex - 1);

  // Sync index on scroll end
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  // 🖱️ Drag Handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollLeftStart.current - dx;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // snap to nearest card AFTER drag
    const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
    scrollToIndex(index);
  };

  return (
    <section className="w-full flex justify-center px-4 py-16">
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-12">

        {/* Heading */}
        <div className="text-center max-w-[860px]">
          <h2 className="font-bold tracking-tighter mb-10 text-4xl md:text-7xl">
            {header} {" "} <span className="text-[#F15C20]">{header2}</span>
          </h2>
          <p className="text-lg text-[#1F222E]">
            {para}
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full rounded-[62px] bg-[#F1EFEC] p-6 md:p-10 pb-20">

          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onMouseUp={handleMouseUp}
              className="flex gap-4 overflow-x-auto pb-10 scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing no-scrollbar"
            >
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="snap-start w-full sm:w-[80%] md:w-[24%] flex-shrink-0 rounded-[27px] bg-white p-8 shadow-sm"
                >
                  <div className="mb-20 ">
                 <Image src={step.icon} alt="" width={40} height={40} />
                  </div>
                  
                  <h3 className="font-semibold mb-2">   {idx + 1}. {step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA CENTER */}
          <div className="flex justify-center items-center w-full" >
         <Link href={"/contact-us"} className="flex items-center w-fit  group justify-center ">
          <button className="bg-[#F15C20] border group-hover:bg-white group-hover:border  group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
         {button }
          </button>
          <button className="bg-[#F15C20] border group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
</div>
          {/* ARROWS RIGHT */}
          <div className="absolute bottom-6 left-1/2 -translate-x-[50%] lg:-translate-x-[-80%]  lg:right-6 flex gap-3">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="h-10 w-10 flex items-center justify-center border rounded-full bg-white"
            >
              <AiOutlineLeft />
            </button>

            <button
              onClick={handleNext}
              disabled={activeIndex === steps.length - 1}
              className="h-10 w-10 flex items-center justify-center border rounded-full bg-white"
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HiringProcess;