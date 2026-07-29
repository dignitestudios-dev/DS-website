"use client";
import React from "react";

import { FaReact, FaVuejs, FaAngular } from "react-icons/fa";
import { SiFlutter, SiNextdotjs } from "react-icons/si";

const row1 = [
  { name: "React", Icon: FaReact },
  { name: "Vue.js", Icon: FaVuejs },
  { name: "Angular", Icon: FaAngular },
  { name: "Flutter", Icon: SiFlutter },
];

const row2 = [
  { name: "React Native", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
];

const TechCard = ({ name, Icon }) => (
  <div className="group flex flex-col justify-between items-center pt-[40px] px-[20px] pb-[20px] gap-[10px] w-full md:w-[312.5px] h-[200px] bg-white/5 rounded-[16px] hover:-translate-y-2 hover:bg-white/10 transition duration-300 cursor-pointer border border-transparent hover:border-[#65CB11]/30 hover:shadow-[0_10px_30px_rgba(101,203,17,0.15)]">
    <div className="w-[80px] h-[80px] bg-[#65CB11] rounded-full flex items-center justify-center p-[10px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
      <Icon className="text-[#124733] w-[45px] h-[45px] transition-transform duration-300 group-hover:-rotate-[5deg]" aria-label={name} title={name} role="img" />
    </div>
    <span className="text-white text-[16px] font-medium leading-[24px] uppercase text-center transition-colors duration-300 group-hover:text-[#65CB11]">
      {name}
    </span>
  </div>
);

const TechStack = () => {
  return (
    <section className="w-full relative bg-[#000B00] py-[50px] md:py-[100px] px-6 md:px-[80px] flex flex-col items-center gap-[30px]">
      
      {/* Header */}
      <div className="flex flex-col items-center gap-[10px] w-full max-w-[800px]">
        <h2 className="w-full text-center text-white text-[32px] md:text-[44px] font-medium leading-[1.48] capitalize">
          Tech Stack
        </h2>
        <p className="w-full max-w-[560px] text-center text-white text-[15px] font-normal leading-[25px] capitalize">
          We Used Cross-Platform Mobile Development For IOS And Android, Supported By A Scalable Backend Architecture For Managing Users, Content, And Transactions
        </p>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-[1280px] flex flex-col items-center gap-[10px] mt-[10px]">
        
        {/* Row 1 */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-[10px]">
          {row1.map((tech, idx) => (
            <TechCard key={`r1-${idx}`} name={tech.name} Icon={tech.Icon} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[10px]">
          {row2.map((tech, idx) => (
            <TechCard key={`r2-${idx}`} name={tech.name} Icon={tech.Icon} />
          ))}
        </div>

      </div>

    </section>
  );
};

export default TechStack;
