"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  {
    id: "01",
    title: "Driver First Earnings",
    shortTitle: "Driver First Earnings",
    desc: "We created a commission free earning model which allows drivers to keep 100% of every fare, making Epic Rides an attractive alternative for driver partners."
  },
  {
    id: "02",
    title: "Transparent Pricing System",
    shortTitle: "Transparent Pricing System",
    desc: "Our team implemented capped surge pricing, helping the riders enjoy predictable fares while maintaining operational efficiency during the periods of high demand."
  },
  {
    id: "03",
    title: "Built In Carpool Experience",
    shortTitle: "Built In Carpool Experience",
    desc: "The carpool system matches the passengers travelling into the similar direction, which reduces the travel costs meanwhile to encourage the efficient environment and the transportation."
  },
  {
    id: "04",
    title: "Seamless Ride Management",
    shortTitle: "Seamless Ride Management",
    desc: "With quick booking, real time GPS tracking, live trip updates, safe in app payments and simplified trip management, this created a comprehensive riding experience."
  },
  {
    id: "05",
    title: "Secure Platform Experience",
    shortTitle: "Secure Platform Experience",
    desc: "Identify verification, secure payment processing, ride history, ratings and account protection features strengthened trust between riders and drivers across every trip."
  },
  {
    id: "06",
    title: "Centralized Administrative Control",
    shortTitle: "Centralized Administrative Control",
    desc: "A powerful admin dashboard enables administrators to verify drivers, monitor rides, configure fare rules, resolve disputes, oversee payments and analyze platform performance through the real time reporting."
  }
];

const Solutions = () => {
  const [activeId, setActiveId] = useState("01");

  return (
    <section className="w-full relative bg-[#000B00] py-24 flex flex-col items-center">
      <div className="max-w-[1440px] w-full px-6 md:px-[80px] flex flex-col items-center gap-[50px]">
        {/* Title */}
        <h2 className="w-full text-center text-white text-[32px] md:text-[44px] font-medium leading-[1.2]">
          Smart Solutions That Powered Epic Rides
        </h2>

        {/* Accordion Container */}
        <div className="w-full max-w-[1280px] h-auto md:h-[510px] flex flex-col md:flex-row gap-[10px]">
          {solutions.map((item) => {
            const isActive = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveId(item.id)}
                className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-[16px] w-full ${
                  isActive ? "bg-[#65CB11] h-[350px] md:h-full md:w-[590px]" : "bg-[#124733] h-[80px] md:h-full md:w-[128px]"
                }`}
              >
                {/* Active Content */}
                <AnimatePresence mode="popLayout">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute inset-0 p-[24px] md:p-[30px] flex flex-col justify-between w-full md:min-w-[590px]"
                    >
                      <div className="flex flex-col gap-[12px] md:gap-[30px] w-full md:w-[530px] max-w-full">
                        <h3 className="text-[#124733] text-[22px] md:text-[36px] font-bold leading-[1.2] md:leading-[1.1]">
                          {item.title}
                        </h3>
                        <p className="text-[#124733] text-[14px] md:text-[20px] font-normal leading-[1.5] md:leading-[1.4]">
                          {item.desc}
                        </p>
                      </div>
                      <div className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] bg-[#124733] rounded-full flex items-center justify-center flex-shrink-0 mt-auto md:mt-0">
                        <span className="text-[#65CB11] text-[16px] md:text-[20px] font-bold leading-[1.25]">
                          {item.id}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Inactive Content */}
                <AnimatePresence mode="popLayout">
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute inset-0 px-[24px] py-[15px] md:py-[30px] flex flex-row md:flex-col items-center justify-between w-full md:min-w-[128px]"
                    >
                      <div className="w-[45px] h-[45px] md:hidden bg-[#65CB11] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-[#1A3A00] text-[16px] font-bold leading-[1.25]">
                          {item.id}
                        </span>
                      </div>
                      
                      <div className="flex-grow relative w-full flex justify-start md:justify-center items-center h-full">
                         <span 
                           className="md:absolute text-[#65CB11] text-[16px] md:text-[20px] font-bold md:origin-center md:-rotate-90 md:whitespace-nowrap w-full md:w-auto leading-[1.2]"
                         >
                           {item.shortTitle}
                         </span>
                      </div>
                      
                      <div className="hidden md:flex w-[55px] h-[55px] bg-[#65CB11] rounded-full items-center justify-center flex-shrink-0">
                        <span className="text-[#1A3A00] text-[20px] font-bold leading-[1.25]">
                          {item.id}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
