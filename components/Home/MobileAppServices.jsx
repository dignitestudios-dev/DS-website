import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Mobile App Development",
    description:
      "The iOS / iPhone app development is the right choice if your target audience includes iOS users. Using Swift and SwiftUI, we develop iOS applications optimized for user experience. We focus on apps that excel in healthcare, fintech, wellness, and enterprise sectors.",
    image: "/android-app-development-services.webp", // Placeholder/Representative asset
    bgColor: "bg-[#0a0a0a]",
  },
  {
    title: "iOS App Development",
    description:
      "The iOS / iPhone app development is the right choice if your target audience includes iOS users. Using Swift and SwiftUI, we develop iOS applications optimized for user experience. We focus on apps that excel in healthcare, fintech, wellness, and enterprise sectors.",
    image: "/ios-app-development-mockup.png",
    bgColor: "bg-[#0a0a0a]",
  },
  {
    title: "Android app development",
    description:
      "The iOS / iPhone app development is the right choice if your target audience includes iOS users. Using Swift and SwiftUI, we develop iOS applications optimized for user experience. We focus on apps that excel in healthcare, fintech, wellness, and enterprise sectors.",
    image: "/android-turn-mockup.png",
    bgColor: "bg-[#0a0a0a]",
  },
  {
    title: "Web App Development Services",
    description:
      "The iOS / iPhone app development is the right choice if your target audience includes iOS users. Using Swift and SwiftUI, we develop iOS applications optimized for user experience. We focus on apps that excel in healthcare, fintech, wellness, and enterprise sectors.",
    image: "/monitor-1.png",
    bgColor: "bg-[#0a0a0a]",
  },
  {
    title: "Native App Development Company",
    description:
      "Make every tap count with our mobile app design services include iOS app design services and Android app design services, focusing on user-centric interfaces. The goal? Consistent branding. Every design is crafted to make your app engaging.",
    image: "/nykn-mockup-1.png",
    bgColor: "bg-[#0a0a0a]",
  },
  {
    title: "Mobile App Testing Services",
    description:
      "We provide mobile app support & maintenance services, mobile app consulting services, and app testing & QA services to ensure your app remains secure and up-to-date. We support your app launch & deployment to maximize ROI.",
    image: "/mobile-app-testing-services.webp",
    bgColor: "bg-[#0a0a0a]",
  },
];

const MobileAppServices = () => {
  return (
    <section className="w-full pt-20 px-4 -mt-20 md:-mt-28 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 bg-white dark:bg-black rounded-t-[4rem] relative z-40 ">
      <div className="text-center max-w-7xl mx-auto mb-20 pt-8">
        <h2 className="text-4xl md:text-7xl font-bold  mb-6 text-black dark:text-white leading-[1.1] tracking-tighter">
          Offering Custom App Development Solutions For{" "}
          <span className="text-[#F15C20]">Startups</span>
        </h2>
        <p className=" text-lg  leading-relaxed ">
          When you work with Dignite Studios, you're partnering with a partner
          who cares for your success. We designed and created mobile app
          development services according to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 text-white md:grid-cols-12 gap-6">
        <div className="md:col-span-7 bg-black p-8 md:p-12 relative h-[450px] md:h-[500px] rounded-[34px] overflow-hidden group">
          <img
            src="/home-hero/grad-crner.png"
            className="absolute md:block hidden bottom-0 right-0 rounded-br-[34px]"
            alt="Gradient corner decoration"
          />
          <motion.img
            src="/home-hero/P1.png"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-[20%] md:translate-x-0 w-[70%] md:w-auto"
            alt="Mobile app development mockup"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <h3 className="text-lg mb-4 font-bold relative z-10">
            Mobile App Development
          </h3>
          <p className="font-extralight text-sm md:text-base relative z-10">
            The iOS / iPhone app development is the right choice if your target
            audience includes iOS users. Using Swift and SwiftUI, we develop iOS
            applications optimized for user experience. We focus on apps that
            excel in healthcare, fintech, wellness, and enterprise sectors.
          </p>
        </div>
        <div className="md:col-span-5 bg-black p-8 md:p-12 relative h-[450px] md:h-[500px] rounded-[34px] overflow-hidden group">
          <motion.img
            src="/home-hero/p2.png"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-[25%] md:translate-x-0 w-[60%] md:w-auto"
            alt="iOS app development mockup"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />
          <h3 className="text-lg mb-4 font-bold relative z-10">
            iOS App Development
          </h3>
          <p className="font-extralight text-sm md:text-base relative z-10">
            The iOS / iPhone app development is the right choice if your target
            audience includes iOS users. Using Swift and SwiftUI, we develop iOS
            applications optimized for user experience. We focus on apps that
            excel in healthcare, fintech, wellness, and enterprise sectors.
          </p>
        </div>
        <div className="md:col-span-5 bg-black p-8 md:p-12 relative h-[450px] md:h-[500px] rounded-[34px] overflow-hidden group">
          <img
            src="/home-hero/el1.png"
            className="absolute md:block hidden bottom-0 right-0 w-full"
            alt="Android app development background element"
          />
          <motion.img
            src="/home-hero/p3.png"
            className="absolute -bottom-10 md:-bottom-20 left-1/2 -translate-x-1/2 md:left-[20%] md:translate-x-0 w-[70%] md:w-auto"
            alt="Android app development mockup"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />
          <h3 className="text-lg mb-4 font-bold relative z-10">
            Android app development
          </h3>
          <p className="font-extralight text-sm md:text-base relative z-10">
            The iOS / iPhone app development is the right choice if your target
            audience includes iOS users. Using Swift and SwiftUI, we develop iOS
            applications optimized for user experience. We focus on apps that
            excel in healthcare, fintech, wellness, and enterprise sectors.
          </p>
        </div>
        <div className="md:col-span-7 bg-black p-8 md:p-12 relative h-[450px] md:h-[500px] rounded-[34px] overflow-hidden group">
          <img
            src="/home-hero/db.png"
            className="absolute md:block hidden bottom-0 right-0"
            alt="Web app development background element"
          />
          <motion.img
            src="/home-hero/monitor.png"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-5 md:translate-x-0 lg:left-10 w-4/5 md:w-4/5 lg:w-auto"
            alt="Web app development services mockup on monitor"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          />
          <h3 className="text-lg mb-4 font-bold relative z-10">
            Web App Development Services
          </h3>
          <p className="font-extralight text-sm md:text-base relative z-10">
            The iOS / iPhone app development is the right choice if your target
            audience includes iOS users. Using Swift and SwiftUI, we develop iOS
            applications optimized for user experience. We focus on apps that
            excel in healthcare, fintech, wellness, and enterprise sectors.
          </p>
        </div>
        <div className="md:col-span-7 bg-black p-8 md:p-12 relative h-[450px] md:h-[500px] rounded-[34px] overflow-hidden group">
          <img
            src="/home-hero/el2.png"
            className="absolute md:block hidden bottom-0 left-1/2 translate-x-[-50%] rounded-br-[34px]"
            alt="Native app development background element"
          />
          <motion.img
            src="/home-hero/p4.png"
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 md:left-[25%] md:translate-x-0 w-[60%] md:w-auto"
            alt="Native app development company mockup"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />
          <h3 className="text-lg mb-4 font-bold relative z-10">
            Native App Development Company
          </h3>
          <p className="font-extralight text-sm md:text-base relative z-10">
            Make every tap count with our mobile app design services include iOS
            app design services and Android app design services, focusing on
            user-centric interfaces. The goal? Consistent branding. Every design
            is crafted to make your app engaging.
          </p>
        </div>
        <div className="md:col-span-5 bg-black p-8 md:p-12 relative h-[450px] md:h-[500px] rounded-[34px] overflow-hidden group">
          <img
            src="/home-hero/el3.png"
            className="absolute md:block hidden w-full -bottom-14 left-1/2 translate-x-[-50%]"
            alt="Mobile app testing background element"
          />
          <motion.img
            src="/home-hero/p5.png"
            className="absolute -bottom-10 md:-bottom-36 left-1/2 -translate-x-1/2 md:left-[15%] md:translate-x-0 w-[70%] md:w-auto"
            alt="Mobile app testing services mockup"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: -40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          />
          <h3 className="text-lg mb-4 font-bold relative z-10">
            Mobile App Testing Services
          </h3>
          <p className="font-extralight text-sm md:text-base relative z-10">
            We provide mobile app support & maintenance services, mobile app
            consulting services, and app testing & QA services to ensure your
            app remains secure and up-to-date. We support your app launch &
            deployment to maximize ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileAppServices;
