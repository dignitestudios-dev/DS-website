"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt, FaCreditCard, FaGift, FaUtensils, FaBox, FaBell, FaRoute, FaHistory, FaUserCheck, FaChartLine, FaUsers, FaEye, FaMoneyBillWave, FaBullhorn, FaHeadset, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

import {
  FaCalendarCheck,
  FaVideo,
  // FaBell,
  FaFileMedical,
  FaComments,
  FaHeartbeat,
  FaUserMd,
  FaNotesMedical,
  FaPrescriptionBottleAlt,
  FaCalendarAlt,
  FaFileAlt,
  FaDatabase,
  FaUsersCog,
  // FaMoneyBillWave,
  FaChartBar,
  // FaShieldAlt,
} from "react-icons/fa";

const tabConfig = [
  {
    id: "user",
    title: "User Panel Features",
    image: "/industries/dating-app/mob1.webp",
    features: [
      {
        title: "Profile Management",
        desc: "Users can easily create and personalize their profiles by adding photos, interests, preferences, and personal details. This ensures an engaging and authentic presence on the dating platform.",
        icon: <FaUserCheck />,
      },
      {
        title: "Matching System",
        desc: "Our dating app development company builds intelligent matching systems that connect users based on interests and compatibility, increasing meaningful connections.",
        icon: <FaChartLine />,
      },
      {
        title: "Messaging",
        desc: "Users can chat with matches using texts, emojis, and media, creating engaging communication and keeping connections active.",
        icon: <FaComments />,
      },
      {
        title: "Notifications",
        desc: "Users receive instant alerts for messages, matches, and updates, ensuring they never miss important interactions and stay engaged.",
        icon: <FaBell />,
      },
      {
        title: "Privacy Controls",
        desc: "Through our custom dating application development services USA, users can control profile visibility and manage personal data to ensure safety and comfort.",
        icon: <FaShieldAlt />,
      },
    ],
  },
  {
    id: "admin",
    title: "Admin Panel Features",
    image: "/industries/dating-app/mon1.webp",
    features: [
      {
        title: "User Management",
        desc: "Admins can view, manage, approve, or block user accounts while monitoring activity and interactions across the platform.",
        icon: <FaUsers />,
      },
      {
        title: "Content Moderation",
        desc: "Admins review, approve, or remove inappropriate content to maintain a safe and respectful platform environment.",
        icon: <FaEye />,
      },
      {
        title: "Analytics Dashboard",
        desc: "Admins can view key metrics, track engagement, and analyze user behavior to make informed platform decisions.",
        icon: <FaChartBar />,
      },
      {
        title: "Reporting Tools",
        desc: "Admins can generate detailed reports on users, activity, and subscriptions to support data-driven decision-making.",
        icon: <FaFileAlt />,
      },
    ],
  },
  {
    id: "moderator",
    title: "Moderator Panel Features",
    image: "/industries/dating-app/mon2.webp",
    features: [
      {
        title: "Profile Verification",
        desc: "Moderators review and verify user identities and documents to ensure authenticity and build trust across the platform.",
        icon: <FaUserCheck />,
      },
      {
        title: "Content Moderation",
        desc: "Moderators review messages and media content to ensure a respectful and safe dating environment.",
        icon: <FaShieldAlt />,
      },
      {
        title: "Abuse Reporting Management",
        desc: "Moderators handle user complaints, investigate issues, and ensure misuse is prevented effectively.",
        icon: <FaBell />,
      },
      {
        title: "Fraud Detection",
        desc: "Moderators monitor suspicious behavior patterns and identify fraudulent activity to maintain platform trustworthiness.",
        icon: <FaShieldAlt />,
      },
    ],
  },
];

const DeliveryFeatures = () => {
  const [activeTab, setActiveTab] = useState(tabConfig[0].id);
  const { title, features, image } = tabConfig.find((tab) => tab.id === activeTab);

  const isFourFeatureLayout = features.length === 4;
  const leftFeatures = isFourFeatureLayout ? features.slice(0, 3) : features.slice(0, Math.ceil(features.length / 2));
  const middleFeatures = isFourFeatureLayout ? features.slice(3, 4) : [];
  const rightFeatures = isFourFeatureLayout ? [] : features.slice(leftFeatures.length);

  return (
    <section className="w-full ">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-4">
        <div className="text-center w-[80%] mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tighter leading-tight">Top Features of Modern <span className="text-[#F15C20]">Dating Apps</span></h2>
          <p className="text-sm sm:text-base lg:text-lg opacity-80 mx-auto mt-4 ">
    Our matchmaking app solutions help businesses succeed in the competitive dating industry. We build applications that satisfy the customers by making operations easier and providing a smoother experience for the users. Each app we work on is reliable and designed to meet the unique needs of your industry.
          </p>
        </div>

        <div className="bg-[#F15C20] rounded-2xl w-[80%] mx-auto p-0.5">
          <div className="flex lg:flex-row flex-col gap-0 bg-white rounded-[15px] overflow-hidden">
            {tabConfig.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-white text-black"
                    : "bg-[#F15C20] text-white opacity-90 hover:text-[#1F222E]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-[#F9F9F9] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
          {/* Mobile/Tablet Layout */}
          <div className="block lg:hidden">
            <div className="flex flex-col gap-6">
              {/* Features Grid for Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item) => (
                  <div key={item.title} className="group bg-white rounded-2xl border border-black p-4 sm:p-6 shadow-sm hover:shadow-lg hover:border-[#F15C20] transition-all">
                    <div className="flex items-start gap-3">
                      <div className="text-xl sm:text-2xl mt-0.5 flex-shrink-0 text-black group-hover:text-[#F15C20] transition-colors">{item.icon}</div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-black group-hover:text-[#F15C20] mb-1 transition-colors">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-[#0C0C0C] opacity-80">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Image */}
             
            </div>
          </div>

          {/* Desktop Layout */}
          <div className={`hidden lg:grid lg:grid-cols-8 gap-6 lg:gap-10 relative ${isFourFeatureLayout ? "items-start" : "items-center "}` }>
            {/* Left Features */}
            <div className="flex flex-col gap-4 col-span-3">
              {leftFeatures.map((item) => (
                <div key={item.title} className="group bg-white rounded-2xl border border-black p-7 w-full h-[160px] shadow-sm hover:shadow-lg hover:border-[#F15C20] transition-all">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl mt-0.5 flex-shrink-0 text-black group-hover:text-[#F15C20] transition-colors">{item.icon}</div>
                    <div>
                      <h4 className="text-base font-bold text-black group-hover:text-[#F15C20] mb-1 transition-colors">{item.title}</h4>
                      <p className="text-sm text-[#0C0C0C] opacity-80">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle Column: either features or image */}
            <div className={`flex flex-col gap-4 ${isFourFeatureLayout ? "col-span-3" : "col-span-2"}`}>
              {isFourFeatureLayout ? (
                middleFeatures.map((item) => (
                  <div key={item.title} className="group bg-white w-full h-[160px] rounded-2xl border border-black p-7 shadow-sm hover:shadow-lg hover:border-[#F15C20] transition-all">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-0.5 flex-shrink-0 text-black group-hover:text-[#F15C20] transition-colors">{item.icon}</div>
                      <div>
                        <h4 className="text-base font-bold text-black group-hover:text-[#F15C20] mb-1 transition-colors">{item.title}</h4>
                        <p className="text-sm text-[#0C0C0C] opacity-80">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-start">
                  <div className="relative">
                    <img
                      src={image}
                      alt="Food Delivery App Mobile Interface"
                      className="w-full h-full  object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: either image (for 4 features) or right features (for 6) */}
            <div className={`flex flex-col gap-4 ${isFourFeatureLayout ? "col-span-2" : "col-span-3"}`}>
              {isFourFeatureLayout ? (
                <div className="flex justify-center items-start absolute -right-24 -bottom-5">
                  <div className="relative w-full">
                    <img
                      src={image}
                      alt="Food Delivery App Mobile Interface"
                      className="w-[80%] h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : (
                rightFeatures.map((item) => (
                  <div key={item.title} className="group bg-white w-full h-[160px] rounded-2xl border border-black p-7 shadow-sm hover:shadow-lg hover:border-[#F15C20] transition-all">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-0.5 flex-shrink-0 text-black group-hover:text-[#F15C20] transition-colors">{item.icon}</div>
                      <div>
                        <h4 className="text-base font-bold text-black group-hover:text-[#F15C20] mb-1 transition-colors">{item.title}</h4>
                        <p className="text-sm text-[#0C0C0C] opacity-80">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
          href="/contact-us"
          className="flex items-center mt-8 group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Talk to Our Expert
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default DeliveryFeatures;
