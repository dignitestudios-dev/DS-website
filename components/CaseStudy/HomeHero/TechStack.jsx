"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const TechStack = () => {
  const containerRef = useRef(null);
  const iconsRef = useRef(null);
  
  const containerInView = useInView(containerRef, { once: true, amount: 0.3 });
  const iconsInView = useInView(iconsRef, { once: true, amount: 0.5 });
  const techIcons = [
    { name: 'Flutter', icon: '/flutter.png', color: '#02569B' },
    { name: 'React', icon: '/bioyap/node.png', color: '#61DAFB' },
    { name: 'Firebase', icon: '/bioyap/post.png', color: '#FFCA28' },
    { name: 'Node.js', icon: '/bioyap/figma.png', color: '#339933' },
    { name: 'Node.js', icon: '/bioyap/ps.png', color: '#339933' },
    { name: 'Node.js', icon: '/bioyap/ai.png', color: '#339933' },
  ];
  return (
    <div className=" flex py-24 justify-center items-center ">
        {/* <img
        src="/wing/hearts.png"
        alt="hero"
        className="absolute w-screen z-10"
      /> */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-[40px] font-bold mb-6">
            Tech <span className="dark:text-[#D9BBF9] text-[#64486D]">Stack</span>
          </h2>
          <p className=" max-w-5xl relative z-50 mx-auto leading-relaxed text-base">
           <>
     The app was built using React Native for fast mobile performance or Flutter for unified development. The backend used Node.js or Laravel with PostgreSQL or MongoDB for data handling. Real-time messaging and bidding were implemented using socket.io or Firebase. Subscriptions were managed through Stripe and were built into the mobile payment options.
This setup supported <Link href={"/services/android-app-development-services"} className="underline" > Android app development </Link> and <Link href={"/services/ios-app-development-services"} className="underline" > iOS app development </Link> services, with secure authentication via JWT or OAuth. 
     </>
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
                   <div className="w-20 h-20 bg-white rounded-2xl shadow-xl shadow-[#64486D]/20 flex items-center justify-center transition-all duration-300 group-hover:shadow-[#64486D]/20 group-hover:shadow-xl">
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