"use client";
import React from "react";
import { motion } from "framer-motion";

const Discovery = () => {
  const cards = [
    {
      id: 1,
      title: "Understanding Community Needs",
      desc: "Our study showed us to understand the common problems that people experience during the interaction of their local communities.Many residents wanted stronger neighborhood relationships but also lacked reliable ways to communicate through the nearby households. We also identified growing concerns around requesting help, organizing local activities and checking on elderly or vulnerable neighbors during the emergencies. These insights highlighted the need for the secure platform that encourages trusted communication while making community support simple and accessible.",
    },
    {
      id: 2,
      title: "Market Analysis",
      desc: "We evaluated existing messaging and social networking platforms to understand their limitations. Although they supported conversations, they also lacked community focused capabilities such as verified neighbourhood groups, structured assistance requests, daily safety check-ins and coordinated local event planning. This presented an opportunity to build a dedicated platform focused on trust, collaboration and meaningful neighborhood engagement.",
    },
    {
      id: 3,
      title: "Insights Gathered",
      desc: "Our findings shaped Neighbor Connector into a secure community platform built around verified neighborhood circles, organized communication, structured assistance, proactive safety monitoring, shared calendars and simplified event planning. Every feature was designed to strengthen local relationships while delivering an intuitive, accessible and dependable user experience.",
    }
  ];

  return (
    <section className="w-full relative bg-[#FAFAFA] pb-24 flex justify-center z-10 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[370px] h-[466px] bg-[#A1D700] opacity-65 border border-black blur-[175px] -rotate-[117deg] pointer-events-none" />
      <div className="absolute left-[5%] bottom-[5%] w-[498px] h-[133px] bg-white blur-[22px] pointer-events-none" />

      <div className="max-w-[1440px] w-full px-4 md:px-10 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-center mb-16"
        >
          <h2 className="text-[#1F222E] text-[32px] md:text-[40px] font-bold capitalize tracking-tight">
            Discovery & <span className="text-[#274B01]">Research</span>
          </h2>
        </motion.div>

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-20 relative z-10">
          {/* Left Mockup Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[462px] flex justify-center relative"
          >
            <img src="/neighbor/discovery-mockup.webp" alt="Discovery Mockup" className="w-full h-auto object-contain relative z-10" />
          </motion.div>

          {/* Right Cards Stack */}
          <div className="w-full max-w-[743px] flex flex-col gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-full border-[1.5px] border-[#619908] rounded-[28px] p-8 md:px-10 md:py-8 bg-white/50 backdrop-blur-sm"
              >
                <div className="flex flex-col gap-6">
                  <h3 className="text-[#1F222E] text-[18px] md:text-[20px] font-bold capitalize leading-[120%] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#0C0C0C] text-[14px] leading-[130%] font-normal">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discovery;
