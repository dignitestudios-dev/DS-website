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
    <div className=" flex justify-center items-center ">
        <img
        src="/wing/hearts.png"
        alt="hero"
        className="absolute w-screen z-10"
      />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tech <span className="text-[#5BAFEB]">Stack</span>
          </h2>
          <p className="text-gray-700 max-w-5xl relative z-50 mx-auto leading-relaxed text-base">
         The backend of Wing is built on Node.js or Laravel with clean REST APIs. Data lives safely in PostgreSQL or MongoDB, chat happens in real time via Socket.io or Firebase, and subscriptions flow smoothly through Stripe or in-app purchases. Everything’s wrapped in secure encryption to keep user data private and profiles safe. We made sure that the client is satisfied with our mobile app development services. 
          </p>
        </motion.div>

     {/* Tech Icons */}
           <motion.div
             ref={iconsRef}
             className="flex justify-center relative z-50 items-center gap-6 flex-wrap"
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
                 <div className="relative z-50">
                   {/* Icon Container */}
                   <div className="w-20 h-20 bg-white rounded-2xl shadow-xl shadow-[#5BAFEB40] flex items-center justify-center transition-all duration-300 group-hover:shadow-[#5BAFEB40] group-hover:shadow-xl">
                     <span className="text-4xl"><img src={tech.icon} alt='icon'  /></span>
                   </div>
                   
                   
                 </div>
               </motion.div>
             ))}
           </motion.div>

     
      </div>
    </div>
  );
};

export default TechStack;