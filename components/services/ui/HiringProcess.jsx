"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

const steps = [
  {
    title: "Project Vision",
    description:
      "Learning platforms scale through structured approaches similar to e-learning app development for better engagement and tracking.",
  },
  {
    title: "Expert Consultation",
    description:
      "We analyze your requirements and recommend the best technical and business approach.",
  },
  {
    title: "Hiring Mobile App Developers",
    description:
      "Choose from a pool of highly skilled Flutter developers tailored to your needs.",
  },
  {
    title: "Developer Biography",
    description:
      "Review developer profiles, expertise, and past experience before onboarding.",
  },
  {
    title: "Collaboration & Development",
    description:
      "Work closely with developers using agile methodologies and transparent communication.",
  },
  {
    title: "Meeting With the Developer",
    description:
      "Regular sync-ups ensure alignment, feedback, and timely delivery.",
  },
];

const HiringProcess = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);

  useEffect(() => {
    const updateCardWidth = () => {
      const container = scrollRef.current;
      if (container?.firstElementChild) {
        const card = container.firstElementChild;
        const style = window.getComputedStyle(card);
        const gap = parseFloat(style.marginRight || "0") || 16;
        setCardWidth(card.clientWidth + gap);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;

    const clampedIndex = Math.max(0, Math.min(index, steps.length - 1));

    scrollRef.current.scrollTo({
      left: clampedIndex * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(clampedIndex);
  };

  const handleNext = () => scrollToIndex(activeIndex + 1);
  const handlePrev = () => scrollToIndex(activeIndex - 1);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const rawIndex = scrollRef.current.scrollLeft / cardWidth;
    setActiveIndex(Math.round(rawIndex));
  };

  return (
    <section className="w-full flex justify-center px-4 py-16 md:px-6 lg:px-10">
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-5 text-center max-w-[860px]">
          <h2 className="font-bold text-[2.75rem] leading-[1.05] tracking-[-0.04em] text-[#1F222E] md:text-[4.5rem]">
            Our Mobile App Developer Hiring Process
          </h2>
          <p className="text-[#0C0C0C] font-light text-base leading-[1.6] md:text-lg">
            Businesses trust us for clarity, performance, and delivery. From
            startups to enterprises, we deliver scalable Flutter solutions.
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full rounded-[62px] bg-[#F1EFEC] p-6 md:p-10">
          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto pb-10 pr-2 scroll-smooth snap-x snap-mandatory"
            >
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="snap-start min-w-[270px] w-[320px] flex-shrink-0 rounded-[27px] border border-[#ECEDF1] bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-full bg-[#F15C20] text-white grid place-items-center text-lg font-semibold">
                      {idx + 1}
                    </div>
                    <div className="h-12 w-12 rounded-full border border-[#ECEDF1] grid place-items-center text-[#0C0C0C]">
                      <AiOutlineArrowRight size={18} />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-[#0C0C0C] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[0.85rem] leading-[1.6] text-[#0C0C0C]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA BUTTON (CENTER BOTTOM) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#F15C20] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#d54f1e]">
              Talk to Our Flutter Experts
              <AiOutlineArrowRight />
            </button>
          </div>

          {/* ARROWS (BOTTOM RIGHT) */}
          <div className="absolute bottom-6 right-6 flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={activeIndex <= 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2E2C29] bg-white shadow-sm transition hover:bg-[#F15C20] hover:text-white disabled:opacity-40"
            >
              <AiOutlineLeft size={18} />
            </button>

            <button
              onClick={handleNext}
              disabled={activeIndex >= steps.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2E2C29] bg-white shadow-sm transition hover:bg-[#F15C20] hover:text-white disabled:opacity-40"
            >
              <AiOutlineRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;