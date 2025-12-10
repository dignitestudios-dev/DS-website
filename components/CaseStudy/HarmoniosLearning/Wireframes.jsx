"use client";
import "swiper/css";
import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";

const Wireframes = () => {
  
  const wireframes = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  return (
    <div className=" py-16 ">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wireframe
          </h1>
          <p className="text-gray-600 max-w-5xl mx-auto leading-relaxed">
            The wireframes were designed to keep interactions effortless for
            young users, using simple layouts, large icons, and minimal text.
            Each screen highlights clear paths to Music, Stories, Lip-Sync, and
            Profile features. A separate parent dashboard was developed to
            ensure easy management, giving adults clear oversight and control
            without affecting the child’s streamlined experience.
          </p>
        </motion.div>
          <div
      className="overflow-hidden w-full"
      
    >
      <Marquee
       pauseOnHover={true}
        className="flex py-8 "
      >
        {[...wireframes, ...wireframes].map((frame, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <img
              src={`/s${(index % wireframes.length) + 1}.png`}
              alt="mob"
              className="w-48"
            />
          </div>
        ))}
      </Marquee>
    </div>
      </div>
    </div>
  );
};

export default Wireframes;
