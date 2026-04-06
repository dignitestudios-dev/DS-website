"use client"
import React from 'react';
import Link from 'next/link';
import { FaCreditCard, FaMapMarkerAlt, FaBell, FaShoppingCart, FaCloud } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';

const ThirdPartyIntegration = () => {
  const integrations = [
    {
      id: 1,
      title: "Payment Gateways",
      description: "Integrate secure payment gateways like Stripe, PayPal, or local options to enable fast, reliable, and safe transactions for customers.",
      icon: "/industries/food-industry/tird/card.webp"
    },
    {
      id: 2,
      title: "GPS & Mapping Services",
      description: "Connect with Google Maps or Mapbox for real-time route optimization, accurate delivery tracking, and improved logistics efficiency.",
         icon: "/industries/food-industry/tird/clock.webp"
    },
    {
      id: 3,
      title: "SMS & Push Notifications",
      description: "Enable order updates, alerts, and promotional messages directly to users' devices, enhancing engagement and communication.",
        icon: "/industries/food-industry/tird/chat.webp"
    },
    {
      id: 4,
      title: "POS & CRM Systems",
      description: "Integrate point-of-sale and customer relationship management systems to streamline restaurant operations and improve customer interactions.",
           icon: "/industries/food-industry/tird/cart.webp"
    },
    {
      id: 5,
      title: "Cloud Services",
      description: "Leverage cloud platforms like AWS or Google Cloud for app hosting, data storage, scalability, and better performance.",
         icon: "/industries/food-industry/tird/cloud.webp"
    }
  ];

  return (
    <section className="w-full ">
      <div className=" mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl tracking-tighter font-bold text-center text-[#1F222E] leading-[1.05]">
            Third-Party Integrations
          </h2>

          {/* Description */}
          <p className="w-full max-w-[1200px] text-center text-sm sm:text-lg font-light leading-[1.36]">
            Modern food delivery apps rely on multiple third-party integrations to provide seamless experiences. These integrations enhance payment security, delivery efficiency, customer engagement, and backend management. Dignite Studios connects your app with essential services to ensure smooth operations and improved user satisfaction
          </p>
        </div>

        {/* Integration Cards Grid */}
        <div className="mb-12 sm:mb-16 lg:w-[80%] w-full mx-auto lg:mb-20">
          {/* Desktop Layout - 3-2 Grid */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap justify-center gap-6 gap-y-20 mb-6">
              {integrations.map((integration) => (
                <IntegrationCard key={integration.id} integration={integration} />
              ))}
          </div>
          </div>

          {/* Tablet/Mobile Layout - Responsive Grid */}
          <div className="block lg:hidden">
            <div className="flex flex-wrap justify-center mt-20 gap-20 sm:gap-8">
              {integrations.map((integration) => (
                <IntegrationCard key={integration.id} integration={integration} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
              <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
             Get Free Consultation
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
    <div className="bg-white relative border-2 border-[#F15C20] rounded-3xl p-6 sm:p-8 w-[250px] h-[260px] flex flex-col items-center text-center hover:shadow-lg transition-all">
      {/* Icon Circle */}
      <div className="w-20 absolute -top-16 h-20 sm:w-24 sm:h-24 bg-white border-4 border-white rounded-full flex items-center justify-center mb-6 text-[#F15C20]">
        <Image src={integration.icon} alt={integration.title} width={60} height={60} />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-[#1F222E] mb-4">
        {integration.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm font-light text-[#0C0C0C] leading-[1.36] ">
        {integration.description}
      </p>
    </div>
  );
};

export default ThirdPartyIntegration;