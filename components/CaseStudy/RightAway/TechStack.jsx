import React from 'react';
import { SiFlutter, SiNodedotjs, SiPostgresql, SiFigma, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';

const TechStack = () => {
  const techs = [
    { name: 'Flutter', icon: <SiFlutter size={36} className="text-white" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={36} className="text-white" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={36} className="text-white" /> },
    { name: 'Figma', icon: <SiFigma size={36} className="text-white" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop size={36} className="text-white" /> },
    { name: 'Illustrator', icon: <SiAdobeillustrator size={36} className="text-white" /> },
  ];

  return (
    <section className="relative w-full bg-[#151515] px-4 flex flex-col items-center overflow-hidden">
      <img src={"/right/ellispe.webp"} alt="Background Ellipse" className="absolute top-0 -right-1/4 w-full md:w-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen" />
      <div className="w-full max-w-[788px] mx-auto flex flex-col items-center text-center gap-[50px]">
        <h2 className="text-white text-[32px] md:text-[44px] font-medium font-poppins leading-[120%] capitalize">
          Technology that Powers Every Journey
        </h2>
        <p className="w-full max-w-[850px] text-center text-white/80 text-[15px] font-normal leading-[160%] font-poppins">
          RightAway was developed using Flutter, Node.js , RESTful APIs, cloud infrastructure, Google Maps integration, secure payment gateways, real -time notifications and scalable database architecture to deliver the reliable, high-performance transportation services.
        </p>
        
        <div className="flex flex-row flex-wrap justify-center items-center gap-[20px] max-w-[600px]">
          {techs.map((tech, index) => (
            <div 
              key={index}
              title={tech.name}
              className="w-[73px] h-[73px] bg-[rgba(34,181,115,0.15)] rounded-[25px] flex items-center justify-center hover:bg-[#22B573] hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0px_0px_20px_rgba(34,181,115,0.4)]"
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
