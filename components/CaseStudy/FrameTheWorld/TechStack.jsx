import React from 'react';
import { FaReact, FaVuejs, FaAngular } from 'react-icons/fa';
import { SiFlutter, SiNextdotjs } from 'react-icons/si';

const TechStack = () => {
  const techItems = [
    {
      id: 1,
      name: 'REACT',
      icon: <FaReact size={40} className="text-white" />
    },
    {
      id: 2,
      name: 'VUE.JS',
      icon: <FaVuejs size={40} className="text-white" />
    },
    {
      id: 3,
      name: 'ANGULAR',
      icon: <FaAngular size={40} className="text-white" />
    },
    {
      id: 4,
      name: 'FLUTTER',
      icon: <SiFlutter size={35} className="text-white" />
    },
    {
      id: 5,
      name: 'REACT NATIVE',
      icon: <FaReact size={40} className="text-white" />
    },
    {
      id: 6,
      name: 'NEXT.JS',
      icon: <SiNextdotjs size={35} className="text-white" />
    }
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center gap-12">
      
      {/* Heading Container */}
      <div className="flex flex-col items-center justify-end gap-[10px] w-full max-w-[800px] px-4">
        <h2 className="font-inter-tight text-[32px] md:text-[44px] leading-[1.1] text-center text-[#00161D] capitalize">
          <span className="font-bold">Tech</span> <span className="font-normal">Stack</span>
        </h2>
        <p className="font-inter-tight font-normal text-[14px] md:text-[15px] leading-[1.6] text-center capitalize text-[#00161D] max-w-[560px]">
          We Used Cross-Platform Mobile Development For IOS And Android, Supported By A Scalable Backend Architecture For Managing Users, Content, And Transactions
        </p>
      </div>

      {/* Tech Cards Container */}
      <div className="w-full max-w-[1280px] mx-auto px-4 flex flex-col items-center gap-10">
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 w-full">
          {techItems.map((tech) => (
            <div 
              key={tech.id} 
              className="flex flex-col justify-between items-center p-6 pt-10 pb-6 w-[280px] md:w-[310px] h-[200px] bg-[#F6F6F6] rounded-[16px] hover:shadow-md transition-shadow cursor-pointer hover:bg-gray-100"
            >
              {/* Icon Circle */}
              <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#6CACDF] to-[#0000FE] rounded-full flex justify-center items-center flex-none">
                {tech.icon}
              </div>
              
              {/* Label */}
              <h3 className="font-inter-tight font-medium text-[16px] leading-[19px] text-center uppercase text-[#00161D]">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default TechStack;
