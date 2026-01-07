"use client"
import React, { useState } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';

const WhyChoose = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      number: '01',
      title: '100% Custom Development',
      description: 'Every Solution Is Built From Scratch To Match The Exact Business Needs.'
    },
    {
      number: '02',
      title: 'Specialized Engineering Teams',
      description: 'Expert developers with focused technical skills and deep domain knowledge.'
    },
    {
      number: '03',
      title: '24/7 Support',
      description: 'Round-the-clock availability for clients across different time zones and regions.'
    },
    {
      number: '04',
      title: '200+ Skilled Technology Experts',
      description: 'Large pool of talented professionals with diverse technical expertise.'
    },
    {
      number: '05',
      title: 'Flexible Engagement Models',
      description: 'Various collaboration structures tailored to your project requirements.'
    },
    {
      number: '06',
      title: 'Transparent Process',
      description: 'Clear communication and visibility throughout the entire project lifecycle.'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Why Choose <br/> <span className="text-orange-500">Dignite Studios</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className={`
                relative overflow-hidden rounded-lg transition-all duration-300
                bg-[#FAFAFA]
                p-8 h-[300px] flex flex-col justify-between
              `}>
                {/* Number */}
                <div className="text-gray-500 text-sm ">{feature.number}.</div>

                {/* Title */}
                <h3 className={`
                  text-[22px] md:pr-24 font-bold mb-16 transition-colors duration-300
                 
                `}>
                  {feature.title}
                </h3>

                {/* Arrow Icon */}
                <div className="flex items-center justify-between">
                  <div className={`
                    w-8 h-8 rounded border-2 flex items-center justify-center
                    transition-all duration-300
                    ${hoveredCard === index 
                      ? ' bg-orange-500 rotate-180 border-white' 
                      : 'bg-black border-none text-white'
                    }
                  `}>
                  <IoArrowUpOutline />
                  </div>
                  <div></div>
                </div>

                {/* Description - Hidden on Desktop, Shown on Hover */}
                <div className={`
                  mt-4 text-sm transition-all duration-300 overflow-hidden
                  hidden md:block
                  ${hoveredCard === index 
                    ? 'max-h-40 opacity-100 text-[#8F8F8F]' 
                    : 'max-h-0 opacity-0'
                  }
                `}>
                  {feature.description}
                </div>

                {/* Description - Always Shown on Mobile */}
                <div className=" text-sm mt-3 md:hidden">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;