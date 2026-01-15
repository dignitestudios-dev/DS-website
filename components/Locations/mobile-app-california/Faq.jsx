"use client";

import React, { useContext, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GlobalContext } from "@/context/GlobalContext";
import Script from "next/script";

const Faq = () => {
  const { palette, theme } = useContext(GlobalContext);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };

  const faqs = [
    {
      id: 1,
      question: "How much does mobile app development cost in California?",
      answer:
        "Mobile app development costs vary based on features, platform, design complexity, and integrations. Simple apps cost less, while advanced and enterprise-grade applications require higher investment. Our mobile app developers in California provide transparent pricing after defining the project scope. Request a project estimate for exact numbers.",
    },
    {
      id: 2,
      question: "How long does it take to develop a mobile app in California?",
      answer:
        "Timelines depend on app complexity and features. A basic app can take a few weeks, while feature-rich applications may take several months. With our expert mobile app developers in California, you can move faster with a clear roadmap and start your app in as little as 7 days.",
    },
    {
      id: 3,
      question: "Do you develop apps for both iOS and Android?",
      answer:
        "Yes. Our professional mobile app developers in California build high-performance iOS and Android applications. We help you choose the right tech stack to ensure scalability, performance, and long-term reliability.",
    },
    {
      id: 4,
      question: "Can you build cross-platform mobile apps?",
      answer:
        "Absolutely. Our expert mobile app developers in California use Flutter and React Native to build cross-platform apps that feel fully native. This approach allows faster launches, lower costs, and wider audience reach without compromising performance.",
    },
    {
      id: 5,
      question: "Do you provide post-launch maintenance and support?",
      answer:
        "Yes. We offer ongoing post-launch maintenance, including updates, bug fixes, enhancements, and performance optimization. You can hire mobile app developers in California for a custom maintenance plan to ensure consistent performance.",
    },
    {
      id: 6,
      question: "Can you help refine my mobile app idea?",
      answer:
        "Definitely. Our strategists and skilled app developers in California help refine your idea, define features, and map user flows. We create a clear product roadmap so you can confidently start your app within 7 days.",
    },
    {
      id: 7,
      question: "What industries do you serve in California?",
      answer:
        "We serve a wide range of industries, including healthcare, fintech, retail, real estate, logistics, education, and more. Our California-based mobile app developers bring industry-specific expertise for both new builds and modernization projects.",
    },
    {
      id: 8,
      question: "Do you comply with HIPAA for healthcare apps?",
      answer:
        "Yes. Our mobile app developers in California follow HIPAA compliance standards, including PHI protection, encryption, and secure data handling. Healthcare apps are built with compliance and security from day one.",
    },
    {
      id: 9,
      question: "Can you integrate fintech payment gateways?",
      answer:
        "Yes. We integrate secure payment gateways such as Stripe, Plaid, PayPal, and bank-level systems. Our fintech app developers in California ensure compliance, security, and smooth transaction flows.",
    },
    {
      id: 10,
      question: "How do you ensure mobile app security?",
      answer:
        "Security is implemented at every stage of development. We use encryption, secure APIs, infrastructure hardening, and continuous testing. Our California app development agency follows enterprise-grade security standards to eliminate vulnerabilities.",
    },
  ];

  return (
    <div
      id="faqs"
      className="w-full lg:w-[100%] xl:w-[80%] mx-auto  px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex justify-center items-start h-auto"
    >
      <div className="w-full flex flex-col gap-3 justify-start items-center">
        <h2 className="uppercase font-extrabold md:w-[70%] text-center mx-auto text-4xl lg:text-5xl xl:text-[58px] tracking-tighter lg:font-bold lg:mb-8">
          Frequently asked{" "}
          <span className="text-[#F15C20]">questions</span>
        </h2>

        <div className="w-full lg:w-[85%]">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              onClick={() => handleAccordionClick(faq.id)}
              className={`flex flex-col w-full py-4 cursor-pointer ${
                theme === "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
              }`}
              style={{
                borderBottom: `2px solid ${palette?.light_contrast_background}`,
              }}
            >
              <button
                name="faq-question"
                className={`flex items-center justify-between w-full font-medium outline-none ${
                  openAccordion === faq.id
                    ? "text-[#F15C20]"
                    : theme === "dark"
                    ? "text-[#e7e7e7]"
                    : "text-black"
                }`}
              >
                <span className="text-base md:text-lg lg:text-xl text-left">
                  {faq.question}
                </span>
                {openAccordion === faq.id ? (
                  <FiMinus className="text-2xl" />
                ) : (
                  <FiPlus className="text-2xl" />
                )}
              </button>

              <div
                className={`transition-all duration-200 ${
                  openAccordion === faq.id ? "" : "hidden"
                }`}
              >
                <p
                  className="mt-2 text-xs lg:text-[16px] leading-normal"
                  style={{ color: palette?.dark_contrast_color }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
};

export default Faq;
