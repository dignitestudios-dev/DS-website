

"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaCreditCard, FaUserShield, FaShieldAlt, FaRegCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiLetsencrypt, SiTryhackme, SiWebauthn } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GrCompliance } from "react-icons/gr";

const CARDS = [
  {
    title: "Data Encryption",
    description:
      "Including user data and payment details, all sensitive information is encrypted in our applications using advanced protocols to prevent unauthorized access.",

    icon: <SiLetsencrypt  className="text-8xl text-[#F15C20]" />,

       bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Secure Payment Gateways",
    description:
      "We integrate trusted payment gateways with PCI DSS compliance. It makes sure that the transactions are safe and smooth for users.",
       icon: <RiSecurePaymentLine  className="text-8xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "User Authentication",
    description:
      "We use strong login and authentication methods, including OTP and two-factor authentication, and secure password policies.",
    icon: <SiWebauthn className="text-8xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Fraud Prevention",
    description:
      "We implement fraud detection systems that identify suspicious transactions and prevent misuse or unauthorized activities.",
    icon: <SiTryhackme className="text-8xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "GDPR Regulations",
    description:
      "We make sure your food apps align with GDPR regulations so users can control their data while business operations remain compliant.",
    icon: <AiOutlineFileProtect className="text-8xl text-[#F15C20]" />,
    bg: "bg-white",
    text: "text-[#0C0C0C]",
    border: "border border-[#DCDCDC]",
  },
  {
    title: "Local Compliance",
    description:
      "All food applications follow local data protection and privacy laws relevant to the region of operation so your business is legally secure.",
    icon: <GrCompliance className="text-8xl text-[#F15C20]" />,
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
          <h3 className="text-lg font-semibold text-center text-[#FFFFFF] dark:text-current" style={{ color: card.text === "text-white" ? "#FFFFFF" : "#0C0C0C" }}>
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
          Secure & Compliant Food <span className="text-[#F15C20]"> Delivery Apps</span>
        </h2>
        <p className="mt-4 text-base md:text-lg font-light leading-[1.36] text-[#0C0C0C]">
          Dignite Studios make sure that your delivery app is secure and complies with the policies. The applications we develop are secure enough to protect user data and maintain trust. The app aligns with legal regulations and has advanced security measures with encrypted payments and user authentication.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-8">
        {CARDS.map((card) => (
          <FlipCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
};

export default DeliveryApps;
