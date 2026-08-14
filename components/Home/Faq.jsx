"use client";

import React, { useContext, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GlobalContext } from "@/context/GlobalContext";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";


const faqs = [
  {
    "question": "Why Choose Dignite Studios As Your Mobile App Development Company?",
    "answer": "Choosing the right mobile app development company is about finding a partner that understands your business and not just your technical requirements. The team at Dignite Studios focuses on building apps that align with business goals and create long term value. Every project begins with a clear strategy to make sure we build the app with the right features,  and a development approach is in place before coding starts. Throughout the process, you're never left guessing about your project's progress."
  },
  {
    "question": "What Mobile App Development Services Do You Offer?",
    "answer": "The team at our mobile application development firm include Android app development, iOS app development, cross-platform app development, web app development, MVP development, UI/UX design, app testing and ongoing maintenance and support.\nThe team also let you build an MVP to validate your concept, offering MVP development. And if you're ready to launch a complete product, we can handle everything for your business. We also help businesses improve existing apps by adding new features, improving performance and keeping them updated."
  },
  {
    "question": "Which Industries Do You Develop Mobile Apps For?",
    "answer": "Dignite Studios develops mobile applications for businesses with a wide range of industries, including; healthcare, ecommerce, real estate, food delivery, travel, education, fintech, social networking. We have built an understanding that every industry comes with different challenges, customer expectations and business goals. We don't really take a one-size-fits-all approach for the same reason. We actually help companies create custom mobile apps that support growth for their users. Our experience after working with different industries helps us understand unique business requirements so we build products that fit specific goals."
  },
  {
    "question": "Can Dignite Studios Help Validate My App Idea Before Development Begins?",
    "answer": "Yes. Dignite Studios can help you validate your app idea before the development phase even begins. Validating an idea early helps you understand whether there is a real need for your app, who your target users are and which features are most important to include.\nWe help you evaluate your concept through market research and MVP strategy. This process allows you to identify potential challenges and create a clear roadmap for development.\nApp validation helps you make informed decisions and reduce unnecessary risks instead of investing time and resources into building an app that is based entirely on assumptions."
  },
  {
    "question": "Can You Build An App Similar To An Existing App?",
    "answer": "Dignite Studios can build a similar app for your business that you’re inspired by. A lot of successful apps actually start with an existing idea and improve with time by offering better features.\nWe begin with analyzing the application and understanding the key features and functionality. The team then created the custom development plan that matches your requirements and business objectives.\nHowever, copying an app isn't the plan as we build a product that offers a better experience, new features or a solution designed for your target audience."
  },
  {
    "question": "Which Technologies Do You Use For Mobile App Development?",
    "answer": "The team at Dignite Studios uses reliable technologies to build secure and high performing mobile applications. We believe that the right technology stack depends on your project requirements and the platforms you want to target.\nHowever, we work with Swift and Objective-C for iOS for mobile development. We build Android apps with Kotlin and Java. Flutter and React Native for cross platform applications. React.js, Next.js, Vue.js and Angular for frontend. While our backend solutions are built using Node.js, Laravel, Python, .NET and PHP. We also use trusted databases like MySQL, PostgreSQL, MongoDB, and Firebase. AWS, Microsoft Azure and Google Cloud to make sure that your application is secure and ready for growth."
  },
  {
    "question": "Do You Provide App Maintenance And Support After Launch?",
    "answer": "Yes. Dignite Studios provide ongoing app maintenance after your app is launched. Launching an app is just the beginning and regular updates are mandatory to keep it secure. The team offers post launch services that include bug fixes, performance optimization, security updates, feature enhancements and continuous monitoring. Your app may need new features, third party integrations, or improvements based on user feedback as your business grows. The maintenance team works with your business to plan and implement these updates while minimizing disruptions for your users."
  }
]

const Faq = () => {
  const { palette, theme } = useContext(GlobalContext);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };

  return (
    <div
      id="faqs"
      className="w-full lg:w-[100%] xl:w-[80%] mx-auto  px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex justify-center items-start h-auto"
    >
      <div className="w-full flex flex-col gap-3 justify-start items-center">
        <h2 className="capitalize font-extrabold md:w-[70%] text-center mx-auto text-4xl lg:text-5xl xl:text-[58px] tracking-tighter lg:font-bold lg:mb-8">
          Everything You Need to Know About Our Mobile App Development Company
        </h2>

        <div className="w-full lg:w-[100%]">
          {faqs.map((faq , idx) => (
            <div
              key={idx}
              onClick={() => handleAccordionClick(idx)}
              className={`flex flex-col w-full mb-4 py-4 lg:py-14 rounded-l-2xl md:rounded-l-full   cursor-pointer ${
                theme === "dark" ? "text-[#e7e7e7]" : "text-[#737373]"
              }  ${
                openAccordion === idx
                  ? "bg-[#F15C20] text-white"
                  : theme === "dark"
                    ? "text-[#e7e7e7]"
                    : "text-black bg-[#F6F6F6]"
              }`}
            >
              <button
                name="faq-question"
                className={`flex items-center justify-between w-full font-medium outline-none relative`}
              >
                <span className="text-base md:text-lg lg:text-xl text-left px-12 ">
                  {faq.question}
                </span>
                {openAccordion === idx ? (
                  <FiMinus className="text-2xl absolute rounded-full shadow-[0_0_15px_0_#F15C2040]  text-[#F15C20] bg-white top-1/2 -right-6 h-12 w-12 p-2" />
                ) : (
                  <FiPlus className="text-2xl absolute rounded-full shadow-[0_0_15px_0_#0C0C0C40]  text-[#929292] bg-white -right-5 h-12 w-12 p-2" />
                )}
              </button>

              <AnimatePresence>
                {openAccordion ===  idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className={`mt-2 text-xs px-12 lg:text-[16px] leading-normal ${openAccordion === idx ? "[&_a]:text-white [&_a]:underline" : "[&_a]:text-[#F15C20] [&_a]:underline"}`}
                      // style={{ color: palette?.dark_contrast_color }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
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
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
};

export default Faq;
