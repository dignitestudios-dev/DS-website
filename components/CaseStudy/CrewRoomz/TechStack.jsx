"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TechStack = () => {
  const containerRef = useRef(null);
  const iconsRef = useRef(null);
  
  const containerInView = useInView(containerRef, { once: true, amount: 0.3 });
  const iconsInView = useInView(iconsRef, { once: true, amount: 0.5 });

  const techIcons = [
    // { name: 'MongoDB', icon: '/mongo.png', color: '#4DB33D' },
    { name: 'Flutter', icon: '/flutter.png', color: '#02569B' },
    { name: 'React', icon: '/bioyap/node.png', color: '#61DAFB' },
    { name: 'Firebase', icon: '/bioyap/post.png', color: '#FFCA28' },
    { name: 'Node.js', icon: '/bioyap/figma.png', color: '#339933' },
    { name: 'Node.js', icon: '/bioyap/ps.png', color: '#339933' },
    { name: 'Node.js', icon: '/bioyap/ai.png', color: '#339933' },
  ];

  return (
    <div className=" py-20 relative overflow-hidden ">
       {/* <img src="/crew/el.png" alt="ellipse" className="absolute top-10 left-0 w-screen h-[50%]" /> */}
      <div className="max-w-5xl relative z-50 mx-auto">
        {/* Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tech <span className="text-[#36C0EF]">Stack</span>
          </h2>
          <p className=" max-w-5xl mx-auto leading-relaxed text-base">
          Using CrewRoomz feels effortless. smooth, fast, and reliable. Behind a successful app like Crewroomz, our web app developers ensured they delivered the best web-based solutions. So, we designed Crewroomz, we made sure that all the tools and the tech stack behind is built on modern tech, so it’s scalable and works smoothly all over the world. For the frontend, React/Native and TailwindCSS were used to keep the interface smooth and responsive. For the backend, Node.js/Express and REST APIs made sure that the experience of the app is seamless. Data is managed, with payments are handled through and integrations like Google Maps and cloud storage making the entire experience seamless and user-friendly.
          </p>
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          ref={iconsRef}
          className="flex justify-center items-center gap-6 flex-wrap"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={iconsInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.15, y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative">
                {/* Icon Container */}
                <div className="w-20 h-20 bg-white rounded-2xl shadow-xl  flex items-center justify-center transition-all duration-300  group-hover:shadow-xl">
                  <span className="text-4xl"><img src={tech.icon} alt='icon'  /></span>
                </div>
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-xs font-semibold text-gray-600">{tech.name}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

     
      </div>
    </div>
  );
};

export default TechStack;