"use client"
import React from 'react';
import { FaUser, FaStore, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Research = () => {
  const cards = [
    {
      title: 'Understanding User Behavior',
      icon: <FaUser className="text-white text-[16px]" />,
      desc: 'Before starting development, we studied how customers, suppliers, delivery personnel and administrators handled construction material procurement and daily operations. Customers wanted the convenient way to browse products, compare prices, place orders and receive accurate delivery updates. Suppliers needed the better tools for managing inventory, product pricing and order fulfillment while reducing manual tasks. Delivery personnel required an easy to use application for managing the assigned deliveries, accessing navigation and confirming the completed orders. Administrators also needed the centralized system to monitor suppliers, users, deliveries, disputes and overall platform activities efficiently. ',
    },
    {
      title: 'Market Analysis',
      icon: <FaStore className="text-white text-[16px]" />,
      desc: 'Due to our analysis, a large number of construction material companies continued to rely on the separate delivery procedures, manual inventory tracking and disjointed ordering systems. These antiquated processes frequently  resulted in delays, inaccurate inventory and problems with supplier, customers and delivery team communication. We saw a chance to create a straightforward platform which links all stakeholders via a single, simplified ecosystem. ',
    },
    {
      title: 'Insights Gathered',
      icon: <FaLightbulb className="text-white text-[16px]" />,
      desc: 'The research helped shape RightAway into a connected construction materials marketplace which simplifies purchasing, improves supplier management, simplified delivery coordination and provides the administrators through the complete operational visibility to support the efficient day to day platform management and future business growth. ',
    }
  ];

  return (
    <section className="relative w-full bg-[#151515] px-4 flex flex-col items-center overflow-hidden">
      <img src={"/right/ellispe.webp"} alt="Background Ellipse" className="absolute top-0 -right-1/4 w-full md:w-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen" />
<img src={"/right/Pattern.webp"} alt='Pattern below research' className='absolute bottom-0' />
      {/* Sub Title */}
      <h2 className="text-white text-[32px] md:text-[44px] font-medium font-poppins text-center mb-16 w-full max-w-screen-xl leading-[120%] tracking-tight">
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
                <span className="text-white text-[14px] font-medium font-poppins tracking-tight leading-[120%]">
                  {card.title}
                </span>
              </div>

              {/* Description */}
              <p className="text-white text-[14px] font-normal font-poppins leading-[150%] opacity-85">
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
