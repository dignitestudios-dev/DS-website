"use client";
import React from "react";
import { m as motion } from "framer-motion";

const Challenges = () => {
  const leftItems = [
    {
      title: "Building Trust Within Local Communities",
      desc: "A careful and reliable user experience was necessary to create a platform where locals feel comfortable communicating with the certified neighbours while preserving the privacy, security and the significant community participation."
    },
    {
      title: "Encouraging Community Participation",
      desc: "We needed to design features which naturally encouraged neighbors to communicate regularly, support one another and actively participate in local events and discussions."
    },
    {
      title: "Organizing Local Assistance",
      desc: "Providing structured ways for the residents to request and offer the help without any overwhelming community conversations which required carefully designed workflows and categorized request systems."
    },
    {
      title: "Improving Community Safety",
      desc: "For the vulnerable members of the community, regular reminders, automated alerts and reliable emergency notifications were also needed to build a quite reliable daily safety check in system."
    },
    {
      title: "Creating An Intuitive User Experience",
      desc: "The application needed to remain simple and accessible for the users of all ages while supporting multiple community focused features without creating the unnecessary complexity."
    },
    {
      title: "Building A Scalable Community Platform",
      desc: "Building the protected infrastructure which is capable of supporting thousands of private communities, easy access to messaging, notification and future platform expansion is important."
    }
  ];

  const rightItems = [
    {
      title: "Verified Community Circles",
      desc: "We developed secure invite-only neighborhood groups which allow trusted residents to communicate, collaborate and build stronger relationships within a safe digital environment."
    },
    {
      title: "Structured Community Assistance",
      desc: "Categorized request templates made it easier for residents to ask for household assistance, transportation, appointments, community support and everyday help without creating disorganized conversations."
    },
    {
      title: "Daily Safety Monitoring",
      desc: "Automated daily check-ins, reminder notifications and missed check-in alerts help trusted community members quickly when someone may need additional assistance."
    },
    {
      title: "Smarter Community Planning",
      desc: "Shared calendars, recurring reminders, availability scheduling and event management features simplify neighbourhood coordination while encouraging greater participation in the local activities"
    },
    {
      title: "Secure Community Experience",
      desc: "Reporting tools, member blocking, moderation capabilities and administrative controls promote respectful interactions while maintaining the safe and welcoming community environment."
    },
    {
      title: "Centralized Platform Administration",
      desc: "A comprehensive admin dashboard allows administrators to manage users, moderate reports, monitor the community activity, oversee the notifications, review safety alerts and maintain the overall platform performance."
    }
  ];

  // Simple custom SVG icons to match the design's frown and smile
  const FrownIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
      <line x1="9" y1="9" x2="9.01" y2="9"></line>
      <line x1="15" y1="9" x2="15.01" y2="9"></line>
    </svg>
  );

  const SmileIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
      <line x1="9" y1="9" x2="9.01" y2="9"></line>
      <line x1="15" y1="9" x2="15.01" y2="9"></line>
    </svg>
  );

  return (
    <section className="w-full relative bg-[#FAFAFA]  flex justify-center z-10">
      <div className="max-w-[1144px] w-full px-4 md:px-0 flex flex-col items-center gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-center max-w-[700px] mx-auto"
        >
          <h2 className="text-[#1F222E] text-[32px] md:text-[40px] font-bold leading-[120%] tracking-tight">
            Challenges That Required Smart <span className="text-[#274B01]">Community Solutions</span>
          </h2>
        </motion.div>

        {/* Content Container */}
        <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch justify-center">
          {/* Left Column - Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-white rounded-[17px] p-8 md:p-12 flex flex-col gap-10 shadow-sm"
          >
            {leftItems.map((item, index) => (
              <div key={index} className="flex flex-row items-start gap-6">
                <div className="w-[42px] h-[42px] rounded-[4.75px] bg-[#F45D5D] flex items-center justify-center shrink-0 mt-1">
                  <FrownIcon />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#1F222E] text-[16px] font-semibold leading-[120%]">
                    {item.title}
                  </h3>
                  <p className="text-[#0C0C0C] text-[13px] font-normal leading-[130%]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column - Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-white rounded-[17px] p-8 md:p-12 flex flex-col gap-10 shadow-sm"
          >
            {rightItems.map((item, index) => (
              <div key={index} className="flex flex-row items-start gap-6">
                <div className="w-[42px] h-[42px] rounded-[4.75px] bg-[#619908] flex items-center justify-center shrink-0 mt-1">
                  <SmileIcon />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#1F222E] text-[16px] font-semibold leading-[120%]">
                    {item.title}
                  </h3>
                  <p className="text-[#0C0C0C] text-[13px] font-normal leading-[130%]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
