"use client";
// import { items } from "@/constants/mobileappdevsectionaccordion";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const MobileAppDevSectionAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { palette, theme } = useContext(GlobalContext);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="w-full xl:w-[895px] mx-auto flex flex-col items-start gap-3"
    >
      {/* 1 */}
      <div
        type="button"
        onClick={() => handleAccordionClick(1)}
        className={`flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right ${
          theme == "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
        } outline-none hover:opacity-95 `}
        style={{
          borderBottom: `2px solid ${palette?.light_contrast_background}`,
        }}
        data-accordion-target="#accordion-collapse-body-1"
      >
        <button
          name="faq-question"
          className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
            openAccordion === 1
              ? "text-[#F15C20]"
              : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
          } gap-3`}
        >
          <div
            className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-4 `}
          >
            <span className="text-base md:text-lg lg:text-[20px] font-bold text-[#B4B4B4]">
              01.
            </span>
            <span className="font-semibold text-base md:text-lg lg:text-[32px]">
              Custom iOS App Development
            </span>
          </div>
          {openAccordion === 1 ? (
            <FiMinus className="text-2xl" />
          ) : (
            <FiPlus className="text-2xl" />
          )}
        </button>

        <div
          id="accordion-1"
          className={`transition-all duration-200 ${
            openAccordion === 1 ? "" : "hidden"
          }`}
        >
          <div className="py-1 rounded-md mt-3 ">
            <p
              className="mb-2  text-xs lg:text-[16px] leading-normal "
              style={{
                color: palette?.dark_contrast_color,
              }}
            >
              Apple’s business is burgeoning expeditiously on a wider scale.
              Despite having a 75% market share of Android users, iOS apps still
              provide the best service with a wide base of paying app consumers
              at competitive rates. Dignite’s professional iOS experts provide
              premium iOS solutions for their custom{" "}
              <Link
                href="/services/ios-app-development-services"
                className="text-orange-600"
              >
                iOS app development services
              </Link>{" "}
              to contribute extraordinarily to leveraging industries,
              development structure, and growth.
            </p>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div
        type="button"
        onClick={() => handleAccordionClick(2)}
        className={`flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right ${
          theme == "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
        } outline-none hover:opacity-95 `}
        style={{
          borderBottom: `2px solid ${palette?.light_contrast_background}`,
        }}
        data-accordion-target="#accordion-collapse-body-1"
      >
        <button
          name="faq-question"
          className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
            openAccordion === 2
              ? "text-[#F15C20]"
              : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
          } gap-3`}
        >
          <div
            className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-4 `}
          >
            <span className="text-base md:text-lg lg:text-[20px] font-bold text-[#B4B4B4]">
              02.
            </span>
            <span className="font-semibold text-base md:text-lg lg:text-[32px]">
              iPhone App Designing
            </span>
          </div>
          {openAccordion === 2 ? (
            <FiMinus className="text-2xl" />
          ) : (
            <FiPlus className="text-2xl" />
          )}
        </button>

        <div
          id="accordion-1"
          className={`transition-all duration-200 ${
            openAccordion === 2 ? "" : "hidden"
          }`}
        >
          <div className="py-1 rounded-md mt-3 ">
            <p
              className="mb-2  text-xs lg:text-[16px] leading-normal "
              style={{
                color: palette?.dark_contrast_color,
              }}
            >
              Multiple fastest and most collaborative tools have robust iOS apps
              for creating UI\UX designs for websites and mobile apps. With an
              attractive user interface, designers can easily build prototypes,
              animations, and wireframes for ultimate iOS apps. Here, our
              ingenious iOS app developers leverage in crafting tailored
              high-quality{" "}
              <Link
                href={"/services/ios-app-design-services"}
                className="text-orange-600"
              >
                iOS mobile app design services
              </Link>{" "}
              for any device. We create seamless user interfaces while
              developing mobile apps.
            </p>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div
        type="button"
        onClick={() => handleAccordionClick(3)}
        className={`flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right ${
          theme == "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
        } outline-none hover:opacity-95 `}
        style={{
          borderBottom: `2px solid ${palette?.light_contrast_background}`,
        }}
        data-accordion-target="#accordion-collapse-body-1"
      >
        <button
          name="faq-question"
          className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
            openAccordion === 3
              ? "text-[#F15C20]"
              : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
          } gap-3`}
        >
          <div
            className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-4 `}
          >
            <span className="text-base md:text-lg lg:text-[20px] font-bold text-[#B4B4B4]">
              03.
            </span>
            <span className="font-semibold text-base md:text-lg lg:text-[32px]">
              Integration Services
            </span>
          </div>
          {openAccordion === 3 ? (
            <FiMinus className="text-2xl" />
          ) : (
            <FiPlus className="text-2xl" />
          )}
        </button>

        <div
          id="accordion-1"
          className={`transition-all duration-200 ${
            openAccordion === 3 ? "" : "hidden"
          }`}
        >
          <div className="py-1 rounded-md mt-3">
            <p
              className="mb-2  text-xs lg:text-[16px] leading-normal "
              style={{
                color: palette?.dark_contrast_color,
              }}
            >
              Do you want to drive more operational expertise to your iOS apps?
              Let’s integrate your app idea with various third-party services.
              We can closely monitor your API’s Integration to secure data
              exchange. Also we construct attractive app features to engage
              higher engagement rates. You can add payment gateways, chatbots,
              social media platforms, or biometric authentication for your
              iPhone app development.
            </p>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div
        type="button"
        onClick={() => handleAccordionClick(4)}
        className={`flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right ${
          theme == "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
        } outline-none hover:opacity-95 `}
        style={{
          borderBottom: `2px solid ${palette?.light_contrast_background}`,
        }}
        data-accordion-target="#accordion-collapse-body-1"
      >
        <button
          name="faq-question"
          className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
            openAccordion === 4
              ? "text-[#F15C20]"
              : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
          } gap-3`}
        >
          <div
            className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-4 `}
          >
            <span className="text-base md:text-lg lg:text-[20px] font-bold text-[#B4B4B4]">
              04.
            </span>
            <span className="font-semibold text-base md:text-lg lg:text-[32px]">
              App Migration and Upgrades
            </span>
          </div>
          {openAccordion === 4 ? (
            <FiMinus className="text-2xl" />
          ) : (
            <FiPlus className="text-2xl" />
          )}
        </button>

        <div
          id="accordion-1"
          className={`transition-all duration-200 ${
            openAccordion === 4 ? "" : "hidden"
          }`}
        >
          <div className="py-1 rounded-md mt-3">
            <p
              className="mb-2  text-xs lg:text-[16px] leading-normal "
              style={{
                color: palette?.dark_contrast_color,
              }}
            >
              It is a process of transforming and extracting data from one
              operating system to another. At Dignite Studios, we transition the
              framework of your app intuitively to maintain its functionalities,
              performance, and vigorous quality underlying smooth procedures. To
              keep your app functional and compatible we use the latest tools
              and technologies to update your app under minimal iOS app
              development costs.
            </p>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div
        type="button"
        onClick={() => handleAccordionClick(5)}
        className={`flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right ${
          theme == "dark" ? "text-[#e7e7e7]" : "text-[#7D7D7D]"
        } outline-none hover:opacity-95 `}
        style={{
          borderBottom: `2px solid ${palette?.light_contrast_background}`,
        }}
        data-accordion-target="#accordion-collapse-body-1"
      >
        <button
          name="faq-question"
          className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${
            openAccordion === 5
              ? "text-[#F15C20]"
              : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
          } gap-3`}
        >
          <div
            className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-4`}
          >
            <span className="text-base md:text-lg lg:text-[20px] font-bold text-[#B4B4B4]">
              05.
            </span>
            <span className="font-semibold text-base md:text-lg lg:text-[32px]">
              Apple TV App Development
            </span>
          </div>
          {openAccordion === 5 ? (
            <FiMinus className="text-2xl" />
          ) : (
            <FiPlus className="text-2xl" />
          )}
        </button>

        <div
          id="accordion-1"
          className={`transition-all duration-200 ${
            openAccordion === 5 ? "" : "hidden"
          }`}
        >
          <div className="py-1 rounded-md mt-3 ">
            <p
              className="mb-2  text-xs lg:text-[16px] leading-normal "
              style={{
                color: palette?.dark_contrast_color,
              }}
            >
              iPhone plays a significant role in capturing Tech-Savvy audiences
              to enhance its reach to the fullest. However, iPhone app
              development companies design multiple iOS applications for Apple
              devices such as TVs, Watches, and wearables to enhance brand
              recognition innovatively. At Dignite Studios, our full-scope
              service creates a strong iOS development process for Apple TVs to
              leave a persisting sway in Apple TV app development among others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevSectionAccordion;
