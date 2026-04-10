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
    id: "patient",
    title: "Patient App Features",
    image: "/industries/healthcare/patient.webp",
    features: [
      {
        title: "Appointment",
        desc: "Should be easy to book, reschedule, or cancel appointments at any time with a quick process through mobile app development for healthcare.",
        icon: <FaCalendarCheck />,
      },
      {
        title: "Online Consultations",
        desc: "Better accessibility to connect with doctors through a secure connection for virtual medical consultations.",
        icon: <FaVideo />,
      },
      {
        title: "Reminders",
        desc: "Should provide timely alerts to take medications and stay consistent with prescribed treatment plans.",
        icon: <FaBell />,
      },
      {
        title: "Health Record Access",
        desc: "You should be able to access lab results and medical history securely anytime in one place.",
        icon: <FaFileMedical />,
      },
      {
        title: "Better Messaging",
        desc: "Should be able to send and receive secure messages with doctors for quick support.",
        icon: <FaComments />,
      },
      {
        title: "Health Tracking",
        desc: "Track health data and connect wearable devices to monitor vitals in real time.",
        icon: <FaHeartbeat />,
      },
    ],
  },
  {
    id: "doctor",
    title: "Doctor App Features",
    image: "/industries/healthcare/doctor.webp",
    features: [
      {
        title: "Patient Medical History Access",
        desc: "Quickly access complete patient records to support accurate diagnosis and treatment decisions.",
        icon: <FaNotesMedical />,
      },
      {
        title: "Virtual Consultation Tools",
        desc: "Conduct secure online consultations with patients through video or chat anytime remotely.",
        icon: <FaVideo />,
      },
      {
        title: "Prescription Management",
        desc: "Manage and send digital prescriptions quickly and securely to patients.",
        icon: <FaPrescriptionBottleAlt />,
      },
      {
        title: "Appointment Management",
        desc: "Smoothly schedule and manage patient appointments with better calendar and booking tools.",
        icon: <FaCalendarAlt />,
      },
      {
        title: "Clinical Notes and Documentation",
        desc: "Organize patient notes and medical documentation in a structured and accessible format.",
        icon: <FaFileAlt />,
      },
      {
        title: "EHR System Integration",
        desc: "Smoothly add systems with existing systems to access and update patient data in real time.",
        icon: <FaDatabase />,
      },
    ],
  },
  {
    id: "admin",
    title: "Admin Panel Features",
    image: "/industries/healthcare/admin.webp",
    features: [
      {
        title: "Staff Management",
        desc: "Manage doctors and admin roles in a smooth way to keep healthcare operations.",
        icon: <FaUsersCog />,
      },
      {
        title: "Billing and Payment Tracking",
        desc: "Track payments and transactions easily for accurate and simple financial management.",
        icon: <FaMoneyBillWave />,
      },
      {
        title: "Analytics Dashboards",
        desc: "View KPIs and operational metrics in one clear and simple dashboard.",
        icon: <FaChartBar />,
      },
      {
        title: "Compliance and Access Control",
        desc: "Ensure secure access while maintaining full regulatory compliance without complications.",
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
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tighter leading-tight">Powerful Features for Real Estate App Development</h2>
          <p className="text-sm sm:text-base lg:text-lg opacity-80 mx-auto mt-4 ">
            A modern app needs smart features to improve user experience and simplify business tasks. As a trusted real estate app builder, we build apps with practical tools for buyers, agents and admins, helping manage listings, improve communication, and support smooth property transactions.
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
                      className="w-[55%] h-full object-cover"
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
