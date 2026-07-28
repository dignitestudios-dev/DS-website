"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaLightbulb } from 'react-icons/fa';

const Challenges = () => {
  const problems = [
    {
      num: "01",
      title: "Creating Fast and Reliable Ride Matching",
      desc: "We needed to connect riders with nearby drivers instantly while minimizing wait times and ensuring accurate driver availability during peak demand."
    },
    {
      num: "02",
      title: "Providing Real Time Trip Visibility",
      desc: "Delivering accurate GPS tracking, live trip updates and route monitoring required highly responsive technology that maintained reliability throughout every journey."
    },
    {
      num: "03",
      title: "Managing Multiple User Roles",
      desc: "Supporting riders, drivers, businesses and administrators required dedicated interfaces that simplified each user’s responsibilities while maintaining a consistent platform experience."
    },
    {
      num: "04",
      title: "Building Secure Payment Workflows",
      desc: "Integrating secure payment processing demanded reliable transaction management, strong data protection and frictionless checkout experience for every ride."
    },
    {
      num: "05",
      title: "Scaling Transportation Operations",
      desc: "The platform needed to support growing numbers of users, trips, pricing configurations, operational analytics and administrative controls without compromising performance."
    }
  ];

  const solutions = [
    {
      num: "01",
      title: "Intelligent Ride Management",
      desc: "We developed a real time booking system which combines the automated driver matching, GPS tracking and route optimization to improve ride efficiency and reduce the passenger wait times."
    },
    {
      num: "02",
      title: "Connected Mobile Expertise",
      desc: "Dedicated rider and driver applications simplify ride booking, navigation, earnings management, trip history and communication through the intuitive mobile experiences."
    },
    {
      num: "03",
      title: "Secure Digital Payments",
      desc: "Reliable payment gateway integration enables secure, fast and smooth transactions while protecting the sensitive financial information throughout the booking process."
    },
    {
      num: "04",
      title: "Business Operations Portal",
      desc: "A centralized web portal allows businesses to monitor the employee transportation, review trip and activity, manage the travel expenses and oversee the daily transportation operations from the one location."
    },
    {
      num: "05",
      title: "Advanced Administrative Control",
      desc: "A comprehensive administration platform enables the operators to manage the riders, drivers, live trips, picnic rules, payment records, analytics and platform security through the centralized dashboard."
    }
  ];

  return (
    <section className="relative w-full bg-[#151515] px-4 flex flex-col items-center overflow-hidden">
      <img src={"/right/ellispe.webp"} alt="Background Ellipse" className="absolute top-0 -left-1/4 w-full md:w-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen" />
      {/* Header */}
      <div className="w-full max-w-[788px] mx-auto flex flex-col items-center text-center gap-6 mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-[32px] md:text-[44px] font-medium font-poppins leading-[120%] capitalize"
        >
        Providing a Dependable Transportation System
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white text-[15px] font-poppins leading-[160%] capitalize max-w-[900px]"
        >
        
          A scalable architecture which could provide consistent performance across all the user experiences was quite necessary which provided the connected platform accommodate drivers, riders, businesses and administrators. 
        </motion.p>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1200px] bg-[rgba(34,181,115,0.15)] rounded-[42px] mx-auto p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-10 md:gap-0">

        {/* Central Glow Pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[646px] h-[300px] md:h-[631px] bg-[#22B573] opacity-30 blur-[100px] pointer-events-none rounded-full" />

        {/* Central Vertical Line (Desktop only) */}
        <div className="hidden md:block absolute top-[10%] bottom-[10%] left-1/2 w-[1px] bg-gradient-to-r from-transparent via-[#22B573] to-transparent -translate-x-1/2 pointer-events-none" />

        {/* Problems Column */}
        <div className="flex-1 flex flex-col relative z-10 md:pr-10 lg:pr-16">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 mb-12">
            <div className="w-[50px] h-[50px] rounded-[30px] bg-[rgba(255,255,255,0.25)] shadow-[0px_0px_21.4286px_rgba(235,40,40,0.45)] flex items-center justify-center">
              <FaExclamationTriangle className="text-red-500 text-[20px]" />
            </div>
            <h3 className="text-white text-[26px] font-medium font-poppins leading-[120%] capitalize">
              Challenges We Overcame
            </h3>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-[20px]">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`w-full max-w-[332px] bg-[rgba(57,76,67,0.25)] rounded-[15px] p-6 relative overflow-hidden backdrop-blur-sm ${index % 2 === 1 ? 'self-end' : 'self-start'}`}
              >
                {/* Screen Reflection Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(138.48deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 55.2%)',
                    opacity: 0.5
                  }}
                />
                <div className="relative z-10 flex flex-col gap-[20px]">
                  <h4 className="text-white text-[14px] font-medium font-poppins leading-[120%] tracking-[-0.04em] capitalize">
                    {item.num}. {item.title}
                  </h4>
                  <p className="text-white/95 text-[12px] font-poppins font-normal leading-[130%] tracking-[-0.0041em]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Divider */}
        <div className="w-full h-[1px] bg-white/20 md:hidden my-4 relative z-10" />

        {/* Solutions Column */}
        <div className="flex-1 flex flex-col relative z-10 md:pl-10 lg:pl-16">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 mb-12">
            <div className="w-[50px] h-[50px] rounded-[30px] bg-[rgba(255,255,255,0.25)] shadow-[0px_0px_21.4286px_rgba(34,181,115,0.45)] flex items-center justify-center">
              <FaLightbulb className="text-[#22B573] text-[20px]" />
            </div>
            <h3 className="text-white text-[26px] font-medium font-poppins leading-[120%] capitalize">
              Smart Solutions That Powered RightAway
            </h3>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-[20px]">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`w-full max-w-[332px] bg-[rgba(57,76,67,0.25)] rounded-[15px] p-6 relative overflow-hidden backdrop-blur-sm ${index % 2 === 1 ? 'self-end' : 'self-start'}`}
              >
                {/* Screen Reflection Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(138.48deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 55.2%)',
                    opacity: 0.5
                  }}
                />
                <div className="relative z-10 flex flex-col gap-[20px]">
                  <h4 className="text-white text-[14px] font-medium font-poppins leading-[120%] tracking-[-0.04em] capitalize">
                    {item.num}. {item.title}
                  </h4>
                  <p className="text-white/95 text-[12px] font-poppins font-normal leading-[130%] tracking-[-0.0041em]">
                    {item.desc}
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

export default Challenges;
