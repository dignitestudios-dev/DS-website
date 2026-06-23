"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaStar } from "react-icons/fa";

const TABLE_DATA = {
  projectType: [
    "MVP App",
    "Startup App",
    "Business App",
    "Enterprise App",
  ],
  timeline: [
    "2-3 Months",
    "3–5 Months",
    "4–8 Months",
    "6–12+ Months",
  ],
  complexity: [
    "Basic Features",
    "Medium Complexity",
    "Integrations & Automation",
    "Advanced Scalability",
  ]
};

const CARD_ONE_DATA = [
  "Feature Complexity",
  "Third Party Integrations",
  "AI & Automation Features",
  "Backend Infrastructure",
  "Security & Compliance",
  "Number Of Platforms",
  "Maintenance Requirements",
];

const CARD_TWO_DATA = [
  "Android App Development",
  "Flutter App Development",
  "React Native Development",
];

const AppDevelopmentCost = () => {
  return (
    <section className="w-full bg-[#FFFFFF]  px-4 md:px-[80px] flex flex-col items-center justify-center">
      <div className="w-full max-w-[1280px] flex flex-col items-center gap-[50px]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-[20px] max-w-[963px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-[40px] md:text-[72px] leading-[105%] tracking-[-0.04em] text-[#1F222E]"
          >
            How Much Does Android App <span className="text-[#F15C20]" >Development Cost?</span> 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-light text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C] max-w-[898px]"
          >
            The cost of building an android application depends on features, complexity, integrations, security needs, design requirements and long term support. Understanding such factors helps businesses plan better development investments.
          </motion.p>
        </div>

        {/* Top Data Grid Container */}
        <div className="w-full flex flex-col md:flex-row items-stretch rounded-[12px] border border-[#0C0C0C]/5 bg-white">
          
          {/* Project Type Column */}
          <div className="flex-1 flex flex-col items-start px-[20px] py-[20px] gap-[10px] md:border-r border-b md:border-b-0 border-[#0C0C0C]/5">
            <div className="w-full h-[55px] flex items-center justify-center border-b border-[#F15C20]">
              <h3 className="font-semibold text-[20px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                Project Type
              </h3>
            </div>
            <div className="w-full flex flex-col mt-[10px]">
              {TABLE_DATA.projectType.map((item, index) => (
                <div key={index} className="w-full h-[66px] py-[15px] flex flex-row items-center gap-[15px] border-b border-[#0C0C0C]/5 last:border-none">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#F9F9F9] flex items-center justify-center shrink-0">
                    <div className="w-[20px] h-[20px] rounded-full border-[1.5px] border-[#68D585] flex items-center justify-center">
                      <FaCheck className="text-[#68D585] text-[10px]" />
                    </div>
                  </div>
                  <span className="font-semibold text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Estimated Timeline Column */}
          <div className="flex-1 flex flex-col items-start px-[20px] py-[20px] gap-[10px] md:border-r border-b md:border-b-0 border-[#0C0C0C]/5">
            <div className="w-full h-[55px] flex items-center justify-center border-b border-[#F15C20]">
              <h3 className="font-semibold text-[20px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                Estimated Timeline
              </h3>
            </div>
            <div className="w-full flex flex-col mt-[10px]">
              {TABLE_DATA.timeline.map((item, index) => (
                <div key={index} className="w-full h-[66px] py-[15px] flex flex-row items-center gap-[15px] border-b border-[#0C0C0C]/5 last:border-none">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#F9F9F9] flex items-center justify-center shrink-0">
                    <div className="w-[20px] h-[20px] rounded-full border-[1.5px] border-[#68D585] flex items-center justify-center">
                      <FaCheck className="text-[#68D585] text-[10px]" />
                    </div>
                  </div>
                  <span className="font-semibold text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Complexity Column */}
          <div className="flex-1 flex flex-col items-start px-[20px] py-[20px] gap-[10px]">
            <div className="w-full h-[55px] flex items-center justify-center border-b border-[#F15C20]">
              <h3 className="font-semibold text-[20px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                Typical Complexity
              </h3>
            </div>
            <div className="w-full flex flex-col mt-[10px]">
              {TABLE_DATA.complexity.map((item, index) => (
                <div key={index} className="w-full h-[66px] py-[15px] flex flex-row items-center gap-[15px] border-b border-[#0C0C0C]/5 last:border-none">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#F9F9F9] flex items-center justify-center shrink-0">
                    <div className="w-[20px] h-[20px] rounded-full border-[1.5px] border-[#68D585] flex items-center justify-center">
                      <FaCheck className="text-[#68D585] text-[10px]" />
                    </div>
                  </div>
                  <span className="font-semibold text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Dark Cards */}
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-[10px]">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 rounded-[16px] bg-[url('/services/android-app/bg.webp')] bg-cover bg-center bg-no-repeat p-[30px_20px] md:p-[50px_40px] flex flex-col gap-[40px] relative overflow-hidden isolate"
          >
            {/* Orange Glow */}
         
            {/* Background Rectangles */}
            <div className="absolute inset-0 flex flex-row items-center z-[1] pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex-1 self-stretch bg-[rgba(14,28,44,0.1)]"></div>
              ))}
            </div>

            <div className="flex flex-col gap-[20px] z-10 relative">
              <h3 className="font-bold text-[24px] leading-[108%] text-white">
                Factors Affecting Development Costs
              </h3>
              <p className="font-normal text-[16px] leading-[136%] tracking-[-0.014em] text-white/90">
                Android app development costs change based on project requirements, feature complexity, third party integrations, backend systems, security standards, automation needs and ongoing maintenance requirements.
              </p>
            </div>

            <div className="flex flex-col gap-[20px]">
              {CARD_ONE_DATA.map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-[15px]">
                  <FaStar className="text-white text-[18px] shrink-0" />
                  <span className="font-bold text-[16px] leading-[144%] text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 rounded-[16px] bg-[url('/services/android-app/bg.webp')] bg-cover bg-center bg-no-repeat p-[30px_20px] md:p-[50px_40px] flex flex-col gap-[40px] relative overflow-hidden isolate"
          >
            {/* Orange Glow */}
            {/* <div className="absolute right-[-26px] top-[225px] w-[317px] h-[317px] bg-[#F15C20] blur-[50px] rounded-[2px] z-0 opacity-80"></div> */}
            {/* Background Rectangles */}
            <div className="absolute inset-0 flex flex-row items-center z-[1] pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex-1 self-stretch bg-[rgba(14,28,44,0.1)]"></div>
              ))}
            </div>

            <div className="flex flex-col gap-[20px] z-10 relative">
              <h3 className="font-bold text-[24px] leading-[108%] text-white">
                Native Vs Cross Platform Considerations
              </h3>
              <p className="font-normal text-[16px] leading-[136%] tracking-[-0.014em] text-white/90">
                The development approach affects budget, timeline, maintenance and scalability. Native solutions provide strong platform performance, while cross platform frameworks which help to reduce costs through shared code and faster delivery.
              </p>
            </div>

            <div className="flex flex-col gap-[20px]">
              {CARD_TWO_DATA.map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-[15px]">
                  <FaStar className="text-white text-[18px] shrink-0" />
                  <span className="font-bold text-[16px] leading-[144%] text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AppDevelopmentCost;
