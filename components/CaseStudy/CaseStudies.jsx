'use client';

import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';
import ContactUs from './ui/ContactUs';

const cards = [
  {
    image: "/case-studies/hl.png",
    icon: "/case-studies/icons/hl.png",
    title: "Harmonious Learning",
    description: "A calm, creative audio world for kids.",
    pathname: "/case-studies/harmonious-learning"
  },
  {
    image: "/case-studies/w.png",
    icon: "/case-studies/icons/w.png",
    title: "Wing",
    description: "Redefining dating through friend-powered matchmaking.",
    pathname: "/case-studies/wing"
  },
  {
    image: "/case-studies/hh.png",
    icon: "/case-studies/icons/hh.png",
    title: "Home Dashboard",
    description: "A simplified daily overview with smart task organization.",
    pathname: "/case-studies/home-dashboard"
  },
  {
    image: "/case-studies/by.png",
    icon: "/case-studies/icons/by.png",
    title: "Energy",
    description: "Monitor home energy usage across devices in real time.",
    pathname: "/case-studies/energy"
  },

  // new ones
  {
    image: "/case-studies/cr.png",
    icon: "/case-studies/icons/cr.png",
    title: "CrewRoomz",
    description: "Building a tailored digital diary for cabin owners.",
    pathname: "/case-studies/crew-roomz"
  },
  {
    image: "/case-studies/gf.png",
    icon: "/case-studies/icons/gf.png",
    title: "Games4Fun",
    description: "Game app development, branding, and UI/UX design.",
    pathname: "/case-studies/games4fun"
  }
];



const CaseStudies = () => {
  return (
     <div className="w-full bg-white pb-32">
      {/* Hero Section */}
      <img src="/shad.png" alt="shad " className="absolute top-0 left-0" />
      <div className="flex flex-col items-center justify-center  pb-12 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
          Case Studies
        </h1>
      </div>
      <div className='w-[95%] mx-auto lg:w-[90%]  flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-12 '>
        {cards.map((card, idx) => (
          <Link key={idx} href={card.pathname} className='w-full  lg:w-[48%]'>
            <motion.div 
              className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <img 
                src={card.image} 
                alt={card.title} 
                className="absolute inset-0 w-full border-none h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Blur Overlay on Hover */}
              <motion.div 
                className="absolute inset-0 bg-black/20 h-full w-full backdrop-blur-sm flex items-center justify-center"
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                whileHover={{ opacity: 1, backdropFilter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "backInOut" }}
              >
                <motion.img 
                  src={card.icon} 
                  alt={`${card.title} icon`} 
                  fill
                //   className="  group-hover:scale-90  "
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </motion.div>
            </motion.div>
            
            <div className="mt-2  items-center flex gap-2 bg-[#FCFAF7] border border-[#EDEDED] rounded-lg p-2 md:p-3 px-3 md:px-4">
                <div className='flex gap-2 items-center' >
              <h3 className="text-sm md:text-xl font-bold text-black">{card.title}</h3>
              <p className="text-xs md:text-sm text-gray-700">{card.description}</p>
            </div>
            <button className="ml-auto text-sm font-medium group-hover:underline transition-colors">View Now</button>
            </div>
          </Link>
        ))}
      </div>
      <ContactUs header={"Ready to Build Your App? "} header2={"Let’s Talk"} para={"Don’t compromise on your app’s success. Gain a competitive edge. Our professional app developers California provide expertise, creativity, and reliability. Partner with a dedicated team of skilled app developers in California to launch your app faster and smarter."} btn={"Connect with Experts Now"} img={"/case-studies/cc.png"} />
      </div>
  )
}

export default CaseStudies