"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaAndroid, FaApple, FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const COMPARISON_DATA = [
  {
    factor: "Development Cost",
    android: "Medium",
    ios: "Medium–High",
    flutter: "Lower",
    reactNative: "Lower",
  },
  {
    factor: "Time to Market",
    android: "Moderate",
    ios: "Moderate",
    flutter: "Fast",
    reactNative: "Fast",
  },
  {
    factor: "Performance",
    android: "Excellent",
    ios: "Excellent",
    flutter: "Very Good",
    reactNative: "Good",
  },
  {
    factor: "UI/UX Flexibility",
    android: "High",
    ios: "High",
    flutter: "Very High",
    reactNative: "High",
  },
  {
    factor: "Scalability",
    android: "Excellent",
    ios: "Excellent",
    flutter: "Very Good",
    reactNative: "Good",
  },
  {
    factor: "Maintenance Cost",
    android: "Medium",
    ios: "Medium",
    flutter: "Low",
    reactNative: "Low",
  },
  {
    factor: "Code Reusability",
    android: "No",
    ios: "No",
    flutter: "Yes (90%+)",
    reactNative: "Yes (80%+)",
  },
  {
    factor: "Platform Coverage",
    android: "Android Only",
    ios: "iOS Only",
    flutter: "Android + iOS",
    reactNative: "Android + iOS",
  },
  {
    factor: "Best For",
    android: "Android-First Apps",
    ios: "Premium iOS Audience",
    flutter: "Startups & MVPs",
    reactNative: "Cross-Platform Apps",
  },
  {
    factor: "User Experience",
    android: "Native Experience",
    ios: "Native Experience",
    flutter: "Near-Native",
    reactNative: "Near-Native",
  },
];

const AppComparison = ({ header, para,header2 }) => {
  return (
    <section className="w-full bg-[#FFFFFF]  px-4 md:px-[80px] flex flex-col items-center justify-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[50px]">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-[50px] max-w-[963px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-[40px] md:text-[72px] leading-[105%] tracking-[-0.04em] text-[#1F222E]"
          >
            {header} {" "} <span className="text-[#F15C20]" >{header2}</span>
          </motion.h2>
          {para && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-light text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C] max-w-[898px]"
            >
              {para}
            </motion.p>
          )}
        </div>

        {/* Comparison Table Grid Container */}
        <div className="w-full max-w-[1280px] overflow-x-auto hidden-scrollbar mt-[20px]">
          <div className="flex flex-row items-start gap-[10px] min-w-[1280px]">
            {/* Factor Column */}
            <div className="w-[250px] flex flex-col items-start p-[20px_0px] gap-[10px] border border-[#0C0C0C]/5 rounded-[12px] bg-white shrink-0">
              {/* Factor Header */}
              <div className="w-full px-[20px] pb-[20px] h-[44px] flex flex-row items-center gap-[20px] border-b border-[#0C0C0C]/10">
                <span className="font-semibold text-[20px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                  Factor
                </span>
              </div>
              
              {/* Factor Rows */}
              <div className="w-full flex flex-col px-[20px]">
                {COMPARISON_DATA.map((item, index) => (
                  <div
                    key={index}
                    className={`w-full py-[20px] h-[60px] flex flex-row items-center gap-[8px] ${
                      index !== COMPARISON_DATA.length - 1
                        ? "border-b border-[#0C0C0C]/10"
                        : ""
                    }`}
                  >
                    <div className="w-[20px] h-[20px] bg-[#F15C20] rounded-full flex justify-center items-center shrink-0">
                      <div className="w-[4px] h-[4px] bg-[#FFFFFF] rounded-full"></div>
                    </div>
                    <span className="font-semibold text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                      {item.factor}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Columns Container */}
            <div className="w-[1020px] flex flex-row items-center bg-[#F9F9F9] rounded-[12px] shrink-0 border border-[#0C0C0C]/5">
              
              {/* Android Column */}
              <div className="w-[255px] flex flex-col items-start p-[20px_0px] gap-[10px] border-r border-[#0C0C0C]/5">
                <div className="w-full px-[20px] pb-[20px] h-[44px] flex flex-row items-center gap-[10px] border-b border-[#0C0C0C]/10">
                  <FaAndroid className="text-[#A4C439] text-[24px]" />
                  <span className="font-semibold text-[20px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                    Android (Native)
                  </span>
                </div>
                <div className="w-full flex flex-col px-[10px]">
                  {COMPARISON_DATA.map((item, index) => (
                    <div
                      key={index}
                      className={`w-full py-[20px] h-[60px] flex flex-row items-center gap-[8px] ${
                        index !== COMPARISON_DATA.length - 1
                          ? "border-b border-[#0C0C0C]/10"
                          : ""
                      }`}
                    >
                      <div className="w-[20px] h-[20px] bg-[#FFFFFF] rounded-full flex justify-center items-center shrink-0">
                        <div className="w-[4px] h-[4px] bg-[#F15C20] rounded-full"></div>
                      </div>
                      <span className="font-normal text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                        {item.android}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* iOS Column */}
              <div className="w-[255px] flex flex-col items-start p-[20px_0px] gap-[10px] border-r border-[#0C0C0C]/5">
                <div className="w-full px-[20px] pb-[20px] h-[44px] flex flex-row items-center gap-[10px] border-b border-[#0C0C0C]/10">
                  <FaApple className="text-[#000000] text-[24px]" />
                  <span className="font-semibold text-[20px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                    iOS (Native)
                  </span>
                </div>
                <div className="w-full flex flex-col px-[10px]">
                  {COMPARISON_DATA.map((item, index) => (
                    <div
                      key={index}
                      className={`w-full py-[20px] h-[60px] flex flex-row items-center gap-[8px] ${
                        index !== COMPARISON_DATA.length - 1
                          ? "border-b border-[#0C0C0C]/10"
                          : ""
                      }`}
                    >
                      <div className="w-[20px] h-[20px] bg-[#FFFFFF] rounded-full flex justify-center items-center shrink-0">
                        <div className="w-[4px] h-[4px] bg-[#F15C20] rounded-full"></div>
                      </div>
                      <span className="font-normal text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                        {item.ios}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flutter Column */}
              <div className="w-[255px] flex flex-col items-start p-[20px_0px] gap-[10px] border-r border-[#0C0C0C]/5">
                <div className="w-full px-[20px] pb-[20px] h-[44px] flex flex-row items-center gap-[10px] border-b border-[#0C0C0C]/10">
                  <SiFlutter className="text-[#02569B] text-[24px]" />
                  <span className="font-semibold text-[20px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                    Flutter
                  </span>
                </div>
                <div className="w-full flex flex-col px-[10px]">
                  {COMPARISON_DATA.map((item, index) => (
                    <div
                      key={index}
                      className={`w-full py-[20px] h-[60px] flex flex-row items-center gap-[8px] ${
                        index !== COMPARISON_DATA.length - 1
                          ? "border-b border-[#0C0C0C]/10"
                          : ""
                      }`}
                    >
                      <div className="w-[20px] h-[20px] bg-[#FFFFFF] rounded-full flex justify-center items-center shrink-0">
                        <div className="w-[4px] h-[4px] bg-[#F15C20] rounded-full"></div>
                      </div>
                      <span className="font-normal text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                        {item.flutter}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* React Native Column */}
              <div className="w-[255px] flex flex-col items-start p-[20px_0px] gap-[10px]">
                <div className="w-full px-[20px] pb-[20px] h-[44px] flex flex-row items-center gap-[10px] border-b border-[#0C0C0C]/10">
                  <FaReact className="text-[#61DAFB] text-[24px]" />
                  <span className="font-semibold text-[20px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                    React Native
                  </span>
                </div>
                <div className="w-full flex flex-col px-[10px]">
                  {COMPARISON_DATA.map((item, index) => (
                    <div
                      key={index}
                      className={`w-full py-[20px] h-[60px] flex flex-row items-center gap-[8px] ${
                        index !== COMPARISON_DATA.length - 1
                          ? "border-b border-[#0C0C0C]/10"
                          : ""
                      }`}
                    >
                      <div className="w-[20px] h-[20px] bg-[#FFFFFF] rounded-full flex justify-center items-center shrink-0">
                        <div className="w-[4px] h-[4px] bg-[#F15C20] rounded-full"></div>
                      </div>
                      <span className="font-normal text-[16px] leading-[136%] tracking-[-0.014em] text-[#0C0C0C]">
                        {item.reactNative}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppComparison;
