"use client";
// import { items } from "@/constants/mobileappdevsectionaccordion";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const MobileAppDevelopmentServicesSection = () => {
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
              Product Market Research
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
              We conduct in-depth research for your target market to accumulate
              all the information required by your consumer. Thus, it will help
              to evaluate the precise idea of the mobile app roadmap and its
              effectiveness in the long run.
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
              Mobile App Consulting
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
              Our professional development provides free mobile consulting
              services to advise pragmatic measures in the process of mobile app
              development and bring forth the cost of mobile apps swiftly. They
              have supreme knowledge of mobile learning and serve consumers with
              appropriate mobile app solutions.create seamless user interfaces
              while developing mobile apps.
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
              Mobile App Development
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
              Dignite Studios bestows highly interactive end-to-end development
              of your mobile application and deploys your apps in no time.
              Whereas, our fastest and high-performing app will lead you to the
              next level of app success. So, Hire mobile app developers services
              from the leading company of mobile solution.
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
              Mobile App design
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
              We provide unique mobile app design services to create addictive
              mobile features and a full cycle of application design which
              includes UX/UI interface effectively and conveniently. Design and
              development of mobile applications play a vital role in the
              conversion of products.
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
              Web Development
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
              Here at Dignite Studios, we offer you complete development of web
              and mobile applications that possess coding, scripting, CMS
              development, and network configuration. Also, we create highly
              favorable web portals, SaaS, or online stores for more engagement.
            </p>
          </div>
        </div>
      </div>
      {/* 6 */}
      <div
        type="button"
        onClick={() => handleAccordionClick(6)}
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
            openAccordion === 6
              ? "text-[#F15C20]"
              : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
          } gap-3`}
        >
          <div
            className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-4`}
          >
            <span className="text-base md:text-lg lg:text-[20px] font-bold text-[#B4B4B4]">
              06.
            </span>
            <span className="font-semibold text-base md:text-lg lg:text-[32px]">
              Mobile App Integration
            </span>
          </div>
          {openAccordion === 6 ? (
            <FiMinus className="text-2xl" />
          ) : (
            <FiPlus className="text-2xl" />
          )}
        </button>

        <div
          id="accordion-1"
          className={`transition-all duration-200 ${
            openAccordion === 6 ? "" : "hidden"
          }`}
        >
          <div className="py-1 rounded-md mt-3 ">
            <p
              className="mb-2  text-xs lg:text-[16px] leading-normal "
              style={{
                color: palette?.dark_contrast_color,
              }}
            >
              We cater world-class mobile app solutions, and third-party
              services to construct personalized CRM or HR back-end
              applications, full-cycle mobile app implementation, and optimizing
              device bandwidth as per your requirements.
            </p>
          </div>
        </div>
      </div>
      {/* 7 */}
      <div
        type="button"
        onClick={() => handleAccordionClick(7)}
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
            openAccordion === 6
              ? "text-[#F15C20]"
              : `${theme == "dark" ? "text-[#e7e7e7]" : "text-black"}`
          } gap-3`}
        >
          <div
            className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-4`}
          >
            <span className="text-base md:text-lg lg:text-[20px] font-bold text-[#B4B4B4]">
              07.
            </span>
            <span className="font-semibold text-base md:text-lg lg:text-[32px]">
              Testing App Functionality
            </span>
          </div>
          {openAccordion === 7 ? (
            <FiMinus className="text-2xl" />
          ) : (
            <FiPlus className="text-2xl" />
          )}
        </button>

        <div
          id="accordion-1"
          className={`transition-all duration-200 ${
            openAccordion === 7 ? "" : "hidden"
          }`}
        >
          <div className="py-1 rounded-md mt-3 ">
            <p
              className="mb-2  text-xs lg:text-[16px] leading-normal "
              style={{
                color: palette?.dark_contrast_color,
              }}
            >
              At the step of our renowned mobile app development platform, we
              implement constructive mobile application testing services to
              ensure the performance, design, features, accessibility, and
              security of mobile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopmentServicesSection;
