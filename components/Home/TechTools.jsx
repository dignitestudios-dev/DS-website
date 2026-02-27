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

const TechTools = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section
      className="
    w-full bg-[#0A0A0A]
    py-24 sm:py-32
    overflow-visible
    [clip-path:ellipse(350%_100%_at_50%_100%)]
    sm:[clip-path:ellipse(350%_100%_at_50%_100%)]
    md:[clip-path:ellipse(200%_100%_at_50%_100%)]
    text-white
  "
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-7xl leading-[42px] tracking-tighter lg:leading-[1.1] font-bold mb-6">
          The Tech Behind Secure Mobile Application
          <span className="text-[#F15C20]"> Development</span>
        </h2>
        <p className="font-extralight mx-auto mb-16 text-lg">
          Do you ever wonder what exactly makes some apps feel so smooth while
          some apps look like a mess? Our mobile app development services make
          sure yours runs smoothly, every time.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-16 bg-transparent lg:bg-black/50 p-1.5 rounded-full w-fit mx-auto lg:border lg:border-gray-800 backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 md:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[#F15C20] text-white shadow-[0_0_20px_rgba(241,92,32,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 min-h-[500px]">
          <AnimatePresence mode="popLayout">
            {techData[activeTab].map((tech, idx) => (
              <div key={`${activeTab}-${tech.name}`} className="w-[280px]">
                <TechCard tech={tech} />
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative min-h-[360px] pb-12 flex justify-center">
          <div className="w-full max-w-[320px] px-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-white",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-[#F15C20]",
              }}
              className="!pb-12"
            >
              {techData[activeTab].map((tech, idx) => (
                <SwiperSlide key={`${activeTab}-${idx}`}>
                  <TechCard tech={tech} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
        <div className="absolute inset-0 backface-hidden bg-white rounded-lg p-8 flex flex-col items-center justify-center border border-gray-100 shadow-sm">
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
