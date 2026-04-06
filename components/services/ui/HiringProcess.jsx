"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

const steps = [
  { title: "Project Vision", description: "Structured planning and clarity." },
  { title: "Expert Consultation", description: "Technical & business alignment." },
  { title: "Hiring Developers", description: "Choose best-fit talent." },
  { title: "Developer Biography", description: "Review profiles and skills." },
  { title: "Collaboration", description: "Agile execution and transparency." },
  { title: "Meet Developer", description: "Regular sync & updates." },
];

const HiringProcess = () => {
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
          <h2 className="font-bold text-4xl md:text-6xl text-[#1F222E]">
            Hiring Process
          </h2>
        </div>

        {/* Slider */}
        <div className="relative w-full rounded-[62px] bg-[#F1EFEC] p-6 md:p-10">

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
                  className="snap-start min-w-[270px] w-1/4 flex-shrink-0 rounded-[27px] bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 text-lg font-semibold">
                    {idx + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA CENTER */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <button className="flex items-center gap-2 bg-[#F15C20] text-white px-6 py-3 rounded-full">
              Talk to Experts <AiOutlineArrowRight />
            </button>
          </div>

          {/* ARROWS RIGHT */}
          <div className="absolute bottom-6 right-6 flex gap-3">
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