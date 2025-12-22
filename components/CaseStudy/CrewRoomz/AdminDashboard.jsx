"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const AdminDashboard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center py-20 overflow-hidden "
    >
    {/* <img src="/crew/el.png" alt="ellipse" className="absolute top-10 left-0 w-screen h-[100%]" /> */}

      {/* HEADER */}
      <div className="text-center max-w-4xl mb-20 px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Admin <span className="text-[#36C0EF]">Dashboard</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-gray-600"
        >
        Our skilled team designed the Admin Dashboard after thorough planning and research. The dashboard was designed so that everything could feel easily manageable for the team. Through the admin dashboard, the admin can easily check user profiles without any unseen hurdles. The options for editing details, or stepping in (In case of any account deactivation or review) were also added to keep everything secure. Property owners and their listings are simple to approve, update, or pause when needed. Our skilled developers made sure to add the options for the quick tracking of Payments and subscriptions, like invoices, refunds, and disputes. So, in the end, the dashboard offers clean, visual insights. Showing trends, popular properties, and downloadable reports to keep decision-making effortless.
        </motion.p>
      </div>

      <div className="relative w-full max-w-6xl px-4">

        {/* LEFT CONNECTOR */}
        <svg
          className="absolute md:block hidden left-[-5%] top-[42%] w-[460px] h-[120px] z-10"
          viewBox="0 0 260 120"
          fill="none"
        >
          <motion.path
            d="M260 10 L-40 10 Q-60 10 -60 30 L-60 160"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeDasharray="2 10"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* End Dot */}
          <motion.circle
            cx="-60"
            cy="114"
            r="6"
            fill="#60A5FA"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
        </svg>

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3, duration: 0.4 }}
          className="absolute md:block hidden -left-8 top-[64%] w-56 z-20"
        >
          <div className="rounded-xl p-4 ">
            <h3 className="font-semibold text-sm mb-2 text-gray-800">
              Visual Property Gallery
            </h3>
            <p className="text-xs text-gray-700">
              High-quality image previews of rooms, interiors and properties.
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONNECTOR */}
        <svg
          className="absolute md:block hidden right-[-3%] top-[20%] w-[400px] h-[120px] z-10"
          viewBox="0 0 260 120"
          fill="none"
        >
          <motion.path
            d="M0 10 L180 10 Q200 10 200 30 L200 100"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeDasharray="2 10"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          />

          <motion.circle
            cx="200"
            cy="100"
            r="6"
            fill="#60A5FA"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.3 }}
          />
        </svg>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.4 }}
          className="absolute -right-28 md:block hidden top-[38%] w-56 z-20"
        >
          <div className="rounded-xl p-4  ">
            <h3 className="font-semibold text-sm mb-2 text-gray-800">
              Property Status Control
            </h3>
            <p className="text-xs text-gray-700">
              Activate, edit, deactivate or delete properties instantly.
            </p>
          </div>
        </motion.div>

        {/* LAPTOP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-0 mx-auto max-w-4xl"
        >
          <img src="/crew/laptop.png" alt="laptop" className="w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
