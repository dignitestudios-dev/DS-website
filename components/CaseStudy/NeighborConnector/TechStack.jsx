"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { SiFlutter, SiPostgresql, SiFigma, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

const techIcons = [
  { id: 1, Icon: SiFlutter, name: "Flutter" },
  { id: 2, Icon: FaNodeJs, name: "Node.js" },
  { id: 3, Icon: SiPostgresql, name: "PostgreSQL" },
  { id: 4, Icon: SiFigma, name: "Figma" },
  { id: 5, Icon: SiAdobephotoshop, name: "Photoshop" },
  { id: 6, Icon: SiAdobeillustrator, name: "Illustrator" },
];

const TechStack = () => {
  return (
    <section className="w-full relative bg-[#FAFAFA] py-32 flex flex-col items-center">
      <div className="max-w-[888px] w-full px-6 flex flex-col items-center gap-[50px]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-[30px]"
        >
          <h2 className="text-center text-[#1F222E] text-[32px] md:text-[40px] font-bold leading-[120%] tracking-tight capitalize">
            Technology That Powers <span className="text-[#274B01]">Reliable Communities</span>
          </h2>
          <p className="text-center text-[#0C0C0C] font-normal text-[14px] leading-[130%]">
            Neighbor Connector was built using Flutter, Node.js, Firebase, PostgreSQL, secure authentication services, cloud infrastructure, push notifications, calendar integrations and scalable APIs to deliver reliable communication, strong security and consistent platform performance.
          </p>
        </motion.div>

        {/* Tech Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-row flex-wrap justify-center items-center gap-[15px]"
        >
          {techIcons.map((tech, index) => {
            const Icon = tech.Icon;
            return (
              <div
                key={tech.id}
                className="w-[73px] h-[73px] bg-[#619908] rounded-[20px] flex justify-center items-center hover:-translate-y-1 transition-transform cursor-pointer"
                style={{
                  boxShadow: "0px 0px 22px rgba(97, 153, 8, 0.25)",
                }}
                title={tech.name}
              >
                <Icon className="text-white text-[32px]" />
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;
