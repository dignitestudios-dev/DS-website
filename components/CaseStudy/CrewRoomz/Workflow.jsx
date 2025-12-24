"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Project Dimension",
    text: "Understand goals, audience, and technical demands",
  },
  {
    title: "Wireframing",
    text: "Map structure and fix early usability issues",
  },
  {
    title: "Web Application Design",
    text: "Craft clean, intuitive UI/UX",
  },
  {
    title: "Front-End Development",
    text: "Build responsive, smooth interfaces",
  },
  {
    title: "Back-End Development",
    text: "Handle scalability and real-time data",
  },
  {
    title: "Testing & Integration",
    text: "Catch bugs and refine flow",
  },
  {
    title: "Deployment",
    text: "Launch securely and optimize performance",
  },
];

// Card animation
const cardVariant = {
  hidden: { opacity: 0, x: -30 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Timeline line animation
const lineVariant = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const Workflow = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background */}
      {/* <img
        src="/crew/cloud-bg.png"
        alt="background"
        className="absolute w-screen top-[-50%] hidden md:block"
      /> */}
     {/* <img src="/crew/el.png" alt="ellipse" className="absolute top-10 left-0 w-screen h-[100%]" /> */}
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-5"
        >
          WorkFlow <span className="text-[#36C0EF]">Overview</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className=" text-center max-w-5xl mx-auto mb-24"
        >
          While building CrewRoomz, we ran into challenges like time zones and
          travel-based data changes. With our Web Application Development
          Services, every step—from planning to{" "}
          <Link
            href="/services/hybrid-app-development-services"
            className="underline"
          >
            Cross-Platform Web App Development
          </Link>
          —helped deliver a stable, fast product.
        </motion.p>
      </div>

      <div className="">
        <div className="w-[75%] flex justify-between mx-auto px-4 relative">
          {/* Animated vertical timeline */}
       <motion.div
  variants={lineVariant}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="absolute left-4 top-0 bottom-0 w-[2px] my-20 mt-12 bg-[#36C0EF] origin-bottom"
>
  {/* Plane attached to line */}
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
    <svg
              width="40"
              height="46"
              viewBox="0 0 40 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7939 1.24805C21.2299 0.684218 20.4757 0.424105 19.7314 0.519531L19.7227 0.520508C18.4353 0.662709 17.405 1.82013 17.3389 3.26758V3.58398C17.3284 7.43948 17.3329 11.2975 17.3477 15.1533C17.3804 15.7312 17.0982 16.2957 16.5957 16.5889C11.2856 20.1947 5.98054 23.8106 0.680664 27.4326L0.595703 27.4902C0.538354 27.5423 0.492205 27.6316 0.500977 27.7441L0.501953 27.7607L0.50293 27.7764C0.520487 28.887 0.515141 30.0002 0.512695 31.1455L16.6729 25.6328L17.335 25.4072V26.7588C17.335 30.4165 17.3281 34.0734 17.3428 37.7285C17.3868 38.2444 17.131 38.7634 16.6543 39.0059V39.0068C14.8134 40.0843 13.0269 41.1822 11.1768 42.2754L11.1494 42.292L11.1211 42.3037C11.0673 42.327 10.9975 42.4127 11.0098 42.5371L11.0117 42.5547V42.5723C11.0335 43.3222 11.0275 44.0791 11.0234 44.8633C11.5101 44.7518 11.9779 44.6453 12.4443 44.5332C14.8155 43.965 17.1901 43.392 19.5635 42.8301L20.1787 42.6846V42.793C20.2579 42.801 20.3371 42.8138 20.415 42.832H20.416C23.2658 43.5053 26.1138 44.184 28.96 44.8701C28.9621 44.0237 28.9642 43.1981 28.9443 42.373C28.9335 42.3649 28.9213 42.3556 28.9082 42.3467C28.8786 42.3265 28.8475 42.3072 28.8184 42.29L28.8125 42.2861C26.9722 41.1724 25.1278 40.0652 23.2812 38.9648C22.8671 38.7773 22.6332 38.3523 22.6436 37.918H22.6426C22.6573 34.1144 22.6512 30.3119 22.6533 26.5059C22.6534 26.3696 22.6766 26.2107 22.6914 26.0664L23.0596 26.1035L23.3496 25.6436L39.498 31.1543C39.5002 29.9368 39.5045 28.7688 39.4814 27.6016C39.4786 27.598 39.4753 27.594 39.4717 27.5898C39.431 27.5428 39.3726 27.4924 39.3223 27.458L39.3213 27.457C36.6632 25.6368 34.004 23.8189 31.3437 22.0029L23.3594 16.5605C22.8695 16.2734 22.5989 15.7169 22.6406 15.1533C22.6615 11.2698 22.6633 7.3862 22.6465 3.50293V3.48242C22.6774 2.63119 22.3608 1.81699 21.7939 1.24805Z"
                fill="#36C0EF"
                stroke="#36C0EF"
              />
            </svg>
  </div>
</motion.div>

          <div className="flex flex-col gap-4 relative pl-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[53px] top-6 w-3 h-3 rounded-full bg-[#36C0EF]" />

                {/* Card */}
                <div className="bg-gradient-to-r border-l-[6px] border-blue-400 from-[#36C0EF]/30 to-transparent rounded-xl px-6 py-4">
                  <h3 className="text-[#36C0EF] font-medium">{step.title}</h3>
                  <p className="text-sm ">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="md:block hidden">
            <img src="/crew/phone.png" alt="phone" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
