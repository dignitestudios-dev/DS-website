"use client";
import React from "react";
import { motion } from "framer-motion";

const Discovery = () => {
  const stackItems = [
    {
      id: 1,
      title: "Understanding User Behavior",
      desc: "Our discovery phase focused on understanding the expectations of both the riders and drivers. Research showed that drivers were increasingly dissatisfied with the high commission fees which reduced their earnings, while riders wanted transparent pricing and a faster, more reliable booking experience. We also found an increasing interest in the affordable daily commuting, making shared transportation and carpooling valued features while decreasing the travel costs to stop convenience.",
      bg: "bg-[#124733]",
      textColor: "text-white",
      rounded: "rounded-t-[16px]"
    },
    {
      id: 2,
      title: "Market Analysis",
      desc: "We analyzed leading ride hailing platforms to identify gaps in the market and opportunities for differentiation. While well established competitors similar transportation services, the majority prioritized growing their user base over increasing driver payment or pricing transparency. Few platforms promoted a community first approach or provided meaningful benefits through fair pricing models and shared mobility options.",
      bg: "bg-[#0E6544]",
      textColor: "text-white",
      rounded: "rounded-none"
    },
    {
      id: 3,
      title: "Insights Gathered",
      desc: "The research shaped Epic Rides into a platform built around fairness, affordability and community trust. We also prioritized a driver first earning model that allows drivers to keep 100% of their fares, introduced capped surge pricing to improve the cost transparency and integrated smart carpooling for affordable shared travel. Combined with intuitive ride booking, real time GPS tracking, secure in app payments and dedicated rider and driver applications, such insights established the foundation for the reliable, scalable and user focused transportation platform.",
      bg: "bg-[#65CB11]",
      textColor: "text-[#1A3A00]",
      rounded: "rounded-b-[16px]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "",
        stiffness: 120,
        damping: 14
      }
    }
  };

  return (
    <section className="w-full relative  py-24 z-30 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[221px] h-[403px] bg-[#65CB11] blur-[150px] rounded-[30px] z-0 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full text-center mb-12"
        >
          <h2 className="text-white text-[32px] md:text-[44px] font-medium capitalize tracking-wide">
            Discovery & Research
          </h2>
        </motion.div>

        {/* Stack Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col items-center"
        >
          {stackItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`w-full flex flex-col md:flex-row items-start p-8 md:px-10 md:py-12 gap-6 md:gap-10 ${item.bg} ${item.rounded} shadow-2xl relative z-${10 - item.id}`}
            >
              <h3 className={`w-full md:w-[440px] text-[28px] md:text-[36px] font-bold leading-tight capitalize ${item.textColor} shrink-0`}>
                {item.title}
              </h3>
              <p className={`w-full md:flex-1 text-[14px] leading-[22px] ${item.textColor}`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Discovery;
