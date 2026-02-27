"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiDjango,
  SiFirebase,
  SiLaravel,
  SiExpress,
  SiRubyonrails,
  SiSwift,
  SiKotlin,
  SiWordpress,
  SiShopify,
  SiWebflow,
  SiBigcommerce,
  SiSquarespace,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiDigitalocean,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiCloudLine } from "react-icons/ri";

const techData = {
  Frontend: [
    {
      name: "React",
      icon: <SiReact />,
      description:
        "It's a library for building fast and secure web interfaces.",
    },
    {
      name: "Vue.js",
      icon: <SiVuedotjs />,
      description: "Known for being lightweight for creating smooth web apps.",
    },
    {
      name: "Angular",
      icon: <SiAngular />,
      description:
        "Made to organize large web apps and to make it easy to maintain.",
    },
    {
      name: "Flutter",
      icon: <SiFlutter />,
      description: "Allow the user to build mobile apps with one codebase.",
    },
    {
      name: "React Native",
      icon: <SiReact />,
      description:
        "Develop mobile apps quickly with almost-native performance.",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      description: "Speeds up web apps with fast loading and better SEO.",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      description:
        "Lets us handle many users at once with fast and reliable servers.",
    },
    {
      name: "Django",
      icon: <SiDjango />,
      description:
        "Secure framework that helps build web apps quickly and safely.",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      description:
        "Secure and scalable real-time backend and database service.",
    },
    {
      name: "Laravel",
      icon: <SiLaravel />,
      description:
        "Keeps code clean, secure, and easy to scale for growing apps.",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      description: "Lightweight and flexible, ideal for building APIs fast.",
    },
    {
      name: "Ruby on Rails",
      icon: <SiRubyonrails />,
      description:
        "Lets startups build apps quickly while keeping them safe and stable.",
    },
  ],
  Mobile: [
    {
      name: "Swift",
      icon: <SiSwift />,
      description:
        "Native iOS apps with smooth performance and great user experience.",
    },
    {
      name: "Kotlin",
      icon: <SiKotlin />,
      description: "Modern Android development that's safe and fast.",
    },
    {
      name: "Flutter",
      icon: <SiFlutter />,
      description: "Build apps for both iOS and Android with one codebase.",
    },
    {
      name: "React Native",
      icon: <SiReact />,
      description: "Efficient cross-platform apps with near-native speed.",
    },
  ],
  CMS: [
    {
      name: "WordPress",
      icon: <SiWordpress />,
      description: "Highly flexible and widely used for websites and web apps.",
    },
    {
      name: "Shopify",
      icon: <SiShopify />,
      description:
        "Perfect for ecommerce apps with quick setup and store management.",
    },
    {
      name: "Webflow",
      icon: <SiWebflow />,
      description:
        "Visual design + CMS + hosting for seamless web app creation.",
    },
    {
      name: "BigCommerce",
      icon: <SiBigcommerce />,
      description: "Enterprise-ready ecommerce CMS with robust features.",
    },
    {
      name: "Squarespace",
      icon: <SiSquarespace />,
      description: "Easy-to-use platform for startups and content-driven apps.",
    },
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      icon: <SiAmazonaws />,
      description:
        "Scalable infrastructure, reliable hosting, and real-time monitoring.",
    },
    {
      name: "Azure",
      icon: <SiMicrosoftazure />,
      description:
        "Enterprise-ready cloud with strong security and integration.",
    },
    {
      name: "GCP",
      icon: <SiGooglecloud />,
      description: "High-performance cloud services for global apps.",
    },
    {
      name: "Digital Ocean",
      icon: <SiDigitalocean />,
      description: "Simple, cost-effective cloud infrastructure for startups.",
    },
    {
      name: "Cloudinary",
      icon: <RiCloudLine />,
      description: "Optimized media management for web and mobile apps.",
    },
    {
      name: "Google Cloud",
      icon: <SiGooglecloud />,
      description:
        "Redundant infrastructure, high availability, and scaling support.",
    },
  ],
};

const categories = Object.keys(techData);

const TechTools = ({ header, para, tech }) => {
  return (
    <section
      className="
    w-full 
    
    overflow-visible
 
    text-black
  "
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-7xl capitalize leading-[42px] tracking-tighter lg:leading-[1.1] font-bold mb-6">
          {header}
        </h2>
        <p className=" mx-auto mb-16">{para}</p>

        <div className="flex flex-wrap justify-center gap-6 min-h-[500px]">
          <AnimatePresence mode="popLayout">
            {tech?.map((t, idx) => (
              <div key={`${t.name}-${idx}`} className="w-[280px]">
                <TechCard tech={t} />
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ tech }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`relative h-[280px] w-full perspective-1000 ${tech.description ? "cursor-pointer" : "cursor-default"}`}
      onMouseEnter={() => tech.description && setIsFlipped(true)}
      onMouseLeave={() => tech.description && setIsFlipped(false)}
      onClick={() => tech.description && setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-75"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-[#F9F9F9] rounded-lg p-8 flex flex-col items-center justify-center border border-gray-100 shadow-sm">
          <div className="w-24 h-24 bg-[#F15C20] rounded-full flex items-center justify-center text-6xl text-white mb-6 shadow-lg">
            {tech.icon}
          </div>
          <h3 className="text-lg font-medium text-[#212121] uppercase tracking-tight">
            {tech.name}
          </h3>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden bg-[#F15C20] rounded-xl p-8 flex items-center justify-center text-center rotate-y-180 shadow-2xl">
          <p className="text-white leading-relaxed">{tech.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechTools;
