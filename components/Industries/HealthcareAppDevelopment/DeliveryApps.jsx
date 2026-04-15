"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";

import {
  FaBrain,
  FaRobot,
  FaChartLine,
  FaHeartbeat,
  FaMicrophone,
  FaStethoscope,
  FaUserMd,
  FaHospital,
} from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const CARDS = [
  {
    title: "Diagnosis Assistance",
    description:
      "AI analyzes patient data to support more accurate medical diagnoses and improve overall treatment outcomes.",
    icon: <FaBrain className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "AI Medical Chatbots",
    description:
      "We’d provide 24/7 support that includes appointment scheduling to enhance patient engagement.",
    icon: <FaRobot className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Predictive Health Analytics",
    description:
      "Uses patient data to predict disease risks and anticipate complications. It would guide more effective treatment decisions.",
    icon: <FaChartLine className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Smart Patient Monitoring",
    description:
      "Continuously monitors vital signs that can alert caregivers to enable early intervention and better outcomes.",
    icon: <FaHeartbeat className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Voice Assistants",
    description:
      "Create record updates and smooth patient interactions. It reduces administrative workload.",
    icon: <FaMicrophone className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Medical Device Integrations",
    description:
      "This will connect wearable devices to healthcare apps for continuous monitoring.",
    icon: <FaStethoscope className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Treatment Recommendations",
    description:
      "This can suggest personalized treatment plans by analyzing patient data for better results.",
    icon: <FaUserMd className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Resource Optimization",
    description:
      "Optimizes hospital staffing and resource allocation to increase operational efficiency and patient care quality.",
    icon: <FaHospital className="text-5xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
];

const FlipCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[236px] w-[233px]  perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.01 }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-100"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div
          className={`absolute inset-0 backface-hidden rounded-[25px] ${card.bg} ${card.border || ""} border-[1px] border-[#F15C20]/20 p-6 flex flex-col items-center justify-center gap-4`}
        >
          <div className="w-14 h-14  flex items-center justify-center text-7xl ">
            {card.icon}
          </div>
          <h3
            className="text-lg font-semibold text-center text-[#FFFFFF] dark:text-current"
            style={{
              color: card.text === "text-white" ? "#FFFFFF" : "#0C0C0C",
            }}
          >
            {card.title}
          </h3>
        </div>

        <div className="absolute inset-0 backface-hidden rounded-[25px] bg-[#F15C20] p-6 flex items-center justify-center text-center text-white rotate-y-180 shadow-2xl">
          <p className="text-sm leading-6">{card.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DeliveryApps = () => {
  return (
    <section className="relative mt-16 mx-auto px-4 max-w-[1100px] flex flex-col items-center gap-12">
      <div className="text-center ">
        <h2 className="text-4xl md:text-7xl font-bold leading-[1.05] tracking-tighter ">
          Smart Healthcare Apps Powered by AI and{" "}
          <span className="text-[#F15C20]">Advanced Tech</span>
        </h2>
        <p className="mt-4 text-base md:text-lg font-light leading-[1.36] text-[#0C0C0C]">
          AI and emerging technologies are changing the entire healthcare app
          industry by making it better through faster and more efficient
          responses. These technologies improve patient care by integrating AI
          features that help healthcare providers make better decisions. It
          enhances accuracy and delivers better healthcare experiences across
          digital platforms.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-8">
        {CARDS.map((card) => (
          <FlipCard key={card.title} card={card} />
        ))}
      </div>
      <Link
        href="/contact-us"
        className="flex items-center group justify-center "
      >
        <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
          Speak to Security Expert
        </button>
        <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
          <MdArrowOutward />
        </button>
      </Link>
    </section>
  );
};

export default DeliveryApps;
