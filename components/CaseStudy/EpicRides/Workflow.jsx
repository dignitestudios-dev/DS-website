"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({ card, index, scrollYProgress, isDesktop }) => {
  const startY = isDesktop ? card.offsetY : 50;
  const y = useTransform(scrollYProgress, [0, 1], [startY, 0]);

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="w-full md:w-[310px] h-[350px] bg-[#535353]/10 backdrop-blur-[25px] rounded-2xl relative flex flex-col p-6 overflow-hidden border border-white/5"
    >
      <div className="absolute top-0 right-0 w-[56px] h-[56px] bg-[#65CB11] rounded-bl-2xl flex items-center justify-center">
        <span className="text-[#081208] text-[24px] font-normal">{card.id}</span>
      </div>

      <div className="mt-16 flex-1 flex flex-col justify-start">
        <h3 className="text-white text-[24px] font-bold mb-4 capitalize">{card.title}</h3>
        <p className="text-white/90 text-[14px] leading-[19px]">{card.desc}</p>
      </div>
    </motion.div>
  );
};

const Workflow = () => {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center center"]
  });

  const cards = [
    {
      id: "01",
      title: "Discovery & Strategy",
      desc: "The procedure began by researching the ride hailing market and the needs of both riders and drivers.",
      offsetY: 0
    },
    {
      id: "02",
      title: "UI/UX Design",
      desc: "The team designed quite clean and user friendly interfaces for both the rider and driver applications.",
      offsetY: 200
    },
    {
      id: "03",
      title: "Development",
      desc: "The team developed the entire Epic Rides platform including the rider app, driver app and admin dashboard.",
      offsetY: 300
    },
    {
      id: "04",
      title: "Testing & Launch",
      desc: "The team thoroughly tested the platform to make sure that every feature worked smoothly across different devices.",
      offsetY: 400
    }
  ];

  return (
    <section ref={containerRef} className="w-full relative bg-[#000B00] py-24 z-30">
      <img src={"/epic/w-bg.webp"} className="w-full absolute top-10" />
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-[80%] mx-auto"
        >
          <h2 className="text-white text-[32px] md:text-[44px] font-medium mb-6 capitalize leading-tight">
            Agile Workflow That Kept Development Moving
          </h2>
          <p className="text-white/80  text-[14px] leading-[23px]">
            Using an Agile approach, we planned, designed, developed, tested and refined Epic Rides through sprint based on the releases, ensuring the continuous feedback, quality improvements, scalable architecture and timely delivery across every stage of product development.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-5 ">
          {cards.map((card, index) => (
            <Card 
              key={card.id} 
              card={card} 
              index={index} 
              scrollYProgress={scrollYProgress} 
              isDesktop={isDesktop} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
