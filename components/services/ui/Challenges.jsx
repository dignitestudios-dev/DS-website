"use client";

import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const challengesData = [
  {
    num: "01",
    badge: "CHALLENGE",
    title: "Reaching the Wrong Audience",
    challengeDesc: "Generating website traffic is important. But traffic is not conversion. Many businesses attract visitors who have little interest in their products or services.",
    solutionDesc: "Being a digital marketing expert, we’d offer targeted lead generation strategies that focus on attracting prospects with genuine purchase intent.",
    icon: FiAlertTriangle,
  },
  {
    num: "02",
    badge: "CHALLENGE",
    title: "Reducing Profit Due to High Acquisition Costs",
    challengeDesc: "Your heavy investment in marketing campaigns might affect your profit. The cost of converting a prospect is way higher than it should be.",
    solutionDesc: "We identify the shortcomings in your marketing funnel. We’d then reduce acquisition costs by refining audience targeting and allocating budgets strategically.",
    icon: FiAlertTriangle,
  },
  {
    num: "03",
    badge: "CHALLENGE",
    title: "Low Website Conversion Rates",
    challengeDesc: "The issue arises when the website attracts visitors. But they leave without taking action like completing purchases or filling out forms.",
    solutionDesc: "We improve conversion paths and landing pages. By refining messaging to encourage more actions. This is what is going twebsite visitors into paying customers.",
    icon: FiAlertTriangle,
  },
  {
    num: "04",
    badge: "CHALLENGE",
    title: "Struggling to Appear on Google",
    challengeDesc: "Your ideal customers are probably out there actively searching for products or services like yours online. But you’re not on top of the search engine results.",
    solutionDesc: "The team would offer SEO strategies that increase search rankings. It strengthens your online visibility by optimizing your website structure and your technical SEO performance.",
    icon: FiAlertTriangle,
  },
  {
    num: "05",
    badge: "CHALLENGE",
    title: "Inconsistent Marketing Performance",
    challengeDesc: "Your marketing results fluctuate every month. And it’s difficult to predict outcomes or plan budgets. This inconsistency comes from a lack of strategy.",
    solutionDesc: "The digital marketing strategy consultant create data driven marketing strategies by analyzing results regularly and refining campaigns based on data.",
    icon: FiAlertTriangle,
  },
  {
    num: "06",
    badge: "CHALLENGE",
    title: "Untracked Marketing Results and ROI",
    challengeDesc: "It becomes difficult to understand which marketing efforts are actually bringing results without proper tracking. This lack of clarity leads to inappropriate budget allocation.",
    solutionDesc: "We add attribution tracking that give you complete visibility into performance. This allows you to clearly measure ROI that improves marketing efficiency.",
    icon: FiAlertTriangle,
  },
];

const Challenges = () => {
  return (
    <div className="w-full flex flex-col items-center py-20 bg-white">
      <div className="flex flex-col items-center gap-[50px] w-full max-w-[1200px] px-4 md:px-8 mb-16">
        <h2 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold text-[#1F222E] text-center leading-[105%] tracking-[-0.04em]">
          What Might Be Preventing Your Marketing <br className="hidden md:block" /> From Delivering Results?
        </h2>
        <p className="text-[16px] text-[#0C0C0C] text-center font-light leading-[136%] max-w-[898px] tracking-[-0.014em]">
          Every business wants better visibility and stronger returns with qualified leads. But some challenges can prevent campaigns from reaching their full potential. Some issues are easy to spot but sometimes some issues would go unnoticed until they begin affecting performance. Now, we’ll see the most common digital marketing challenges startups face. How dealing with them through the best digital marketing services can create new opportunities.
        </p>
      </div>

      {/* Cards container with horizontal scroll */}
      <div className="w-full flex overflow-x-auto pb-8 pl-4 md:pl-[calc(50vw-600px)] snap-x gap-[5px] hide-scrollbar">
        {challengesData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative flex-none w-[395px] h-[444px] rounded-[7px] bg-[#F9F9F9] hover:bg-[#F15C20] transition-colors duration-300 overflow-hidden flex flex-col justify-end p-7 snap-start cursor-pointer"
            >
              {/* Number Background */}
              <div className={` ${inter.className}  absolute top-0 font-inter -left-[70px] text-[210px] leading-[105%] font-bold text-[#0C0C0C] transition-all duration-500 group-hover:translate-x-[400px] group-hover:text-white tracking-[-0.04em] select-none pointer-events-none`}>
                {item.num}
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col gap-6">
                {/* Badge */}
                <div className="flex items-center gap-[5px]">
                  <div className="w-[33px] h-[33px] rounded-full bg-[#E5320F]/15 group-hover:bg-white/15 flex items-center justify-center transition-colors duration-300">
                    <Icon className="text-[#E5320F] group-hover:text-white transition-colors duration-300 w-4 h-4" />
                  </div>
                  <span className="text-[14px] font-semibold uppercase text-[#E5320F] group-hover:text-white transition-colors duration-300 tracking-[-0.014em]">
                    {item.badge}
                  </span>
                </div>

                {/* Text Block */}
                <div className="flex flex-col gap-[15px]">
                  <h3 className="text-[16px] font-semibold text-[#0C0C0C] group-hover:text-white transition-colors duration-300 tracking-[-0.014em]">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-[14px] font-normal text-[#0C0C0C] group-hover:text-white transition-colors duration-300 leading-[136%] tracking-[-0.014em]">
                      <strong>Challenge:</strong> {item.challengeDesc}
                    </p>
                    <p className="text-[14px] font-normal text-[#0C0C0C] group-hover:text-white transition-colors duration-300 leading-[136%] tracking-[-0.014em]">
                      <strong>Solution:</strong> {item.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .font-inter {
          font-family: ${inter.style.fontFamily} !important;
        }
      `}} />
    </div>
  );
};

export default Challenges;
