"use client";
import React from "react";
import Link from "next/link";
import {
  FaCreditCard,
  FaUserCircle,
  FaBell,
  FaBrain,
  FaMapMarkerAlt,
  FaChartLine,
  FaVideo,
} from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

const ThirdPartyIntegration = () => {
  const integrations = [
    {
      id: 1,
      title: "Payment Gateways",
      description:
        "Our dating apps integrate reliable payment gateways to handle subscriptions and premium features. Users can make transactions quickly and securely while ensuring smooth monetization and enhanced user experience.",
      icon: "/industries/dating-app/icons/card.webp",
    },
    {
      id: 2,
      title: "Social Media Login",
      description:
        "Users can sign up or log in using social media accounts, improving convenience and helping verify authenticity while increasing user retention.",
      icon: "/industries/dating-app/icons/lock.webp",
    },
    {
      id: 3,
      title: "Push Notification Services",
      description:
        "The app integrates push notification services to deliver instant alerts for messages, matches, and updates, keeping users engaged and active.",
      icon: "/industries/dating-app/icons/chat.webp",
    },
    {
      id: 4,
      title: "AI Recommendation Engines",
      description:
        "AI-powered recommendation systems suggest highly relevant matches based on user behavior, improving match accuracy and personalization.",
      icon: "/industries/dating-app/icons/robot.webp",
    },
    {
      id: 5,
      title: "Location Services",
      description:
        "Location-based services help users discover nearby matches, increasing engagement and making real-life connections easier and more relevant.",
      icon: "/industries/dating-app/icons/lolipop.webp",
    },
    {
      id: 6,
      title: "Analytics Tools",
      description:
        "Advanced analytics tools track user behavior and engagement metrics, helping admins optimize platform performance and growth.",
      icon: "/industries/dating-app/icons/graph.webp",
    },
    {
      id: 7,
      title: "Video Calling APIs",
      description:
        "Secure video calling APIs enable real-time interactions between users, allowing deeper and more meaningful connections across devices.",
      icon: "/industries/dating-app/icons/cam.webp",
    },
  ];

  return (
    <section className="w-full ">
      <div className=" mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl tracking-tighter font-bold text-center  leading-[1.05]">
            Third Party Integrations by Top Dating App <span className="text-[#F15C20]">Development Company</span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1200px] text-center text-sm sm:text-lg font-light leading-[1.36]">
            Modern dating apps rely on multiple third party integrations to
            deliver smooth user experiences. These integrations enhance
            location services, AI recommendations, user engagement, and
            overall performance. Dignite Studios connects your app with
            essential systems to ensure seamless operation and better user
            satisfaction.
          </p>
        </div>

        {/* Integration Cards Grid */}
        <div className="mb-12 sm:mb-16 lg:w-[80%] w-full mx-auto lg:mb-20">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap justify-center gap-6 gap-y-20 mb-6">
              {integrations.map((integration) => (
                <IntegrationCard
                  key={integration.id}
                  integration={integration}
                />
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="flex flex-wrap justify-center mt-20 gap-20 sm:gap-8">
              {integrations.map((integration) => (
                <IntegrationCard
                  key={integration.id}
                  integration={integration}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/contact-us"
            className="flex items-center group justify-center"
          >
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full font-normal transition-colors">
              Get a Free Consultation
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

const IntegrationCard = ({ integration }) => {
  return (
    <div className="bg-white relative border-2 border-[#F15C20] rounded-3xl p-6 sm:p-8 w-[250px] h-[280px] flex flex-col items-center text-center hover:shadow-lg transition-all">
      {/* Icon Circle */}
      <div className="w-20 absolute -top-16 h-20 sm:w-24 sm:h-24 bg-white border-4 border-white rounded-full flex items-center justify-center mb-6 text-[#F15C20]">
        <Image
          src={integration.icon}
          alt={integration.title}
          width={60}
          height={60}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-[#1F222E] mb-4">
        {integration.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm font-light text-[#0C0C0C] leading-[1.36]">
        {integration.description}
      </p>
    </div>
  );
};

export default ThirdPartyIntegration;