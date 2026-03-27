"use client"
import React from 'react';
import Link from 'next/link';
import { FaPercent, FaTruck, FaUser, FaStore } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const Monetization = () => {
  const monetizationModels = [
    {
      id: 1,
      title: "Restaurant Commission Model",
      description: "During this model, restaurants would pay a fixed percentage on every order placed through the app. This would help platforms earn consistent revenue as order volume increases over time.",
      icon: <FaPercent className="text-white text-3xl" />
    },
    {
      id: 2,
      title: "Subscription Model",
      description: "Customers pay a monthly or yearly fee to get benefits like free delivery and exclusive offers. This model creates recurring revenue and improves customer retention.",
      icon: <FaTruck className="text-white text-3xl" />
    },
    {
      id: 3,
      title: "Delivery Fees Model",
      description: "In this model, customers would pay a fixed delivery fee based on distance or order value. This model ensures consistent revenue that covers delivery costs and maintains service efficiency.",
      icon: <FaUser className="text-white text-3xl" />
    },
    {
      id: 4,
      title: "Advertising & Featured Listings",
      description: "Restaurants would pay to promote their listings within the app in this model. This attracts more customers while generating additional revenue for the platform.",
      icon: <FaStore className="text-white text-3xl" />
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Title */}
          <div className="w-full">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center tracking-tighter leading-[1.05]">
            Monetization Models for Food Delivery Apps
            </h2>
          </div>

          {/* Description */}
          <p className="w-full text-base text-center  font-light leading-[1.36]">
            Food delivery apps rely on multiple revenue streams to ensure consistent profitability while delivering value to users and restaurant partners. By combining transactional, subscription-based, and promotional strategies, these apps create scalable income opportunities. Choosing the right monetization model depends on target audience behavior, market competition, and the overall business strategy of the platform.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-0 mb-12 sm:mb-16 lg:mb-20">
          {/* Desktop Layout - 2x2 Grid */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-0">
              {monetizationModels.map((model, index) => (
                <div
                  key={model.id}
                  className={`relative w-full h-[185px] bg-white p-8 flex gap-5 items-start ${
                    index === 0 ? 'border-r border-b border-[#E4E4E4]' :
                    index === 1 ? 'border-b border-[#E4E4E4]' :
                    index === 2 ? 'border-r border-[#E4E4E4]' :
                    ''
                  }`}
                >
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-[71px] h-[71px] bg-[#F15C20] rounded-full flex items-center justify-center">
                        {model.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 pt-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1F222E] leading-[1.2]">
                      {model.title}
                    </h3>
                    <p className="text-sm  font-light text-[#0C0C0C] leading-[1.2] max-w-[416px]">
                      {model.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout - Single Column */}
          <div className="block lg:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {monetizationModels.map((model) => (
                <div
                  key={model.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E4E4E4]"
                >
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-[103px] h-[103px] bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-[71px] h-[71px] bg-[#F15C20] rounded-full flex items-center justify-center">
                        {model.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1F222E] leading-[1.2]">
                      {model.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-[#0C0C0C] leading-[1.2]">
                      {model.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
           <Link
            href="/contact-us"
            className="flex items-center group justify-center pt-4"
          >
            <button
              type="submit"
              className="bg-[#F15C20] border border-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
           Lets discuss your project
            </button>
            <button
              type="submit"
              className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full
                         flex items-center justify-center transition-colors text-lg"
            >
              <MdArrowOutward />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Monetization;