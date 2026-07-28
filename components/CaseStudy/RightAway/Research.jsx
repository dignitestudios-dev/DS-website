"use client"
import React from 'react';
import { FaUser, FaStore, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Research = () => {
  const cards = [
    {
      title: 'Understanding User Behavior',
      icon: <FaUser className="text-white text-[16px]" />,
      desc: 'Our research focused on understanding the expectations of riders, drivers and transportation businesses. Riders wanted fast bookings, accurate driver arrival times, transparent pricing and secure payment options. Drivers needed an easy to use platform for accepting the rides, tracking earnings and managing the daily trips without unnecessary complexity. Businesses also required the centralized tools to monitor the transportation activities, manage employee travel and improve the operational visibility. These findings also helped us to identify the core features needed to deliver a smooth transportation experience for every type of user.',
    },
    {
      title: 'Market Analysis',
      icon: <FaStore className="text-white text-[16px]" />,
      desc: 'We analyzed leading ride hailing platforms to evaluate their strength and identify the opportunities for improvement. While many other competitors offered reliable ride booking experiences, few provided a fully connected ecosystem which combines rider applications, driver management, business portals and centralized administrative controls with a single platform. This also revealed the strong opportunity to create the complete transportation solution.',
    },
    {
      title: 'Insights Gathered',
      icon: <FaLightbulb className="text-white text-[16px]" />,
      desc: 'The research guided the development of Rightaway as a scalable transportation ecosystem focused on the efficiency, reliability and operational control. We also prioritized intelligent driver matching, real time GPS tracking, secure digital payments, simplified trip management, centralized business monitoring and advanced administrative tools. These insights helped create the platform which delivers fluent transportation experiences who support the long term business growth and operational efficiency.',
    }
  ];

  return (
    <section className="relative w-full bg-[#151515] px-4 flex flex-col items-center overflow-hidden">
      <img src={"/right/ellispe.webp"} alt="Background Ellipse" className="absolute top-0 -right-1/4 w-full md:w-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen" />
<img src={"/right/Pattern.webp"} alt='Pattern below research' className='absolute bottom-0' />
      {/* Sub Title */}
      <h2 className="text-white text-[32px] md:text-[44px] font-medium font-poppins text-center mb-16 capitalize w-full max-w-screen-xl leading-[120%] tracking-tight">
        Discovery & Research
      </h2>

      {/* Cards Row */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-2">

        {cards.map((card, index) => (
          <div key={index} className="flex-1 w-full lg:max-w-[386px] h-auto lg:h-[524px] bg-[rgba(34,181,115,0.15)] rounded-[42px] p-[30px] relative overflow-hidden flex flex-col items-start mx-auto">
            {/* Screen Reflection Overlay */}
            <div
              className="absolute top-0 left-0 w-[716px] h-[164px] pointer-events-none rounded-[15px] z-10"
           
            />

            {/* Gradient Border */}
            <div 
              className="absolute inset-0 rounded-[42px] pointer-events-none z-20"
              style={{
                padding: '1.5px',
                background: 'linear-gradient(149.04deg, #22B573 1.72%, rgba(34, 181, 115, 0.15) 48.87%), linear-gradient(0deg, rgba(253, 253, 253, 0.05), rgba(253, 253, 253, 0.05))',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-start w-full h-full">
              {/* Badge */}
              <div className="flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] h-[49px] bg-[#22B573] rounded-[100px] mb-[49px]">
                {card.icon}
                <span className="text-white text-[14px] font-medium font-poppins capitalize tracking-tight leading-[120%]">
                  {card.title}
                </span>
              </div>

              {/* Description */}
              <p className="text-white text-[14px] font-normal font-poppins leading-[130%] opacity-85">
                {card.desc}
              </p>
            </div>

            {/* Wavy lines SVG background */}
            <div className="absolute bottom-0 left-0 w-full flex items-end pointer-events-none z-0">
              <img src={`/right/wave${index + 1}.svg`} className="w-full h-auto opacity-70" alt="wave" />
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Research;
