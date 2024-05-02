'use client'

import React, { useContext, useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { IoCaretDownCircleOutline } from "react-icons/io5";
import { styles } from "../../styles/styles";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GlobalContext } from "@/context/GlobalContext";

const Faq = () => {
  const { palette } = useContext(GlobalContext);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };
  return (
    <div
      className={`w-full lg:w-[100%] my-14 px-4 md:px-12 lg:px-28 flex justify-center items-start  h-auto`}
    >
      <div className="w-full h-auto  flex flex-col gap-3 justify-start items-center">
        <h1
          className={`uppercase font-extrabold text-center lg:text-start  text-4xl lg:text-5xl lg:font-bold lg:mb-8`}
        >
          Frequently asked questions
        </h1>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
        >
          <div
            type="button"
            onClick={() => handleAccordionClick(1)}
            className="flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 "
            style={{
              borderBottom: `2px solid ${palette?.light_contrast_background}`,
            }}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 1 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <button
              name="faq-question"
              className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${openAccordion === 1 ? "text-[#F15C20]" : "text-[#7D7D7D]"
                } gap-3`}
            >
              <div
                className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
              >
                <span className="font-medium">
                  WHO OWNS THE LEGAL RIGHTS TO THE TECHNOLOGY DEVELOPED BY A DIGNITE
                  STUDIOS DEVELOPER?
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
              className={`transition-all duration-200 ${openAccordion === 1 ? "" : "hidden"
                }`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="py-1 rounded-md mt-1 ">
                <p
                  className="mb-2  text-xs lg:text-[16px] leading-normal "
                  style={{
                    color: palette?.dark_contrast_color,
                  }}
                >
                  The legal rights to the technology produced by Dignite Studios developers are owned by the client. All
                  development done by our firm is the client's sole property.
                </p>
              </div>
            </div>
          </div>
          <div
            type="button"
            onClick={() => handleAccordionClick(2)}
            className="flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 "
            style={{
              borderBottom: `2px solid ${palette?.light_contrast_background}`,
            }}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 2 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <button
              name="faq-question"
              className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${openAccordion === 2 ? "text-[#F15C20]" : "text-[#7D7D7D]"
                } gap-3`}
            >
              <div
                className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
              >
                <span className="font-medium">
                  HOW DO YOU ENSURE DATA SECURITY OF MOBILE APPS AND WEBSITES?
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
              className={`transition-all duration-200 ${openAccordion === 2 ? "" : "hidden"
                }`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="py-1 rounded-md mt-1 ">
                <p
                  className="mb-2  text-xs lg:text-[16px] leading-normal "
                  style={{
                    color: palette?.dark_contrast_color,
                  }}
                >
                  For the purpose of creating highly secure mobile apps and websites, we adhere to suitable encryption
                  and the most recent data security protocols.
                </p>
              </div>
            </div>
          </div>
          <div
            type="button"
            onClick={() => handleAccordionClick(3)}
            className="flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 "
            style={{
              borderBottom: `2px solid ${palette?.light_contrast_background}`,
            }}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 3 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <button
              name="faq-question"
              className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${openAccordion === 3 ? "text-[#F15C20]" : "text-[#7D7D7D]"
                } gap-3`}
            >
              <div
                className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
              >
                <span className="font-medium">
                  HOW FREQUENTLY DO YOU SHARE AN UPDATE ON THE PROCESS?
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
              className={`transition-all duration-200 ${openAccordion === 3 ? "" : "hidden"
                }`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="py-1 rounded-md mt-1 ">
                <p
                  className="mb-2  text-xs lg:text-[16px] leading-normal "
                  style={{
                    color: palette?.dark_contrast_color,
                  }}
                >
                  We have a designed process to keep you informed utilizing the best project management tools as soon
                  as you assign us with your app concept. Our staff stays in touch with you to go through different crucial
                  issues pertaining to your projects and company. We keep you informed of even the tiniest
                  advancements pertaining to your project, and we welcome your criticism.
                </p>
              </div>
            </div>
          </div>
          <div
            type="button"
            onClick={() => handleAccordionClick(4)}
            className="flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 "
            style={{
              borderBottom: `2px solid ${palette?.light_contrast_background}`,
            }}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 4 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <button
              name="faq-question"
              className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${openAccordion === 4 ? "text-[#F15C20]" : "text-[#7D7D7D]"
                } gap-3`}
            >
              <div
                className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
              >
                <span className="font-medium">
                  WHO WILL BE WORKING ON MY PROJECT?
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
              className={`transition-all duration-200 ${openAccordion === 4 ? "" : "hidden"
                }`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="py-1 rounded-md mt-1 ">
                <p
                  className="mb-2  text-xs lg:text-[16px] leading-normal "
                  style={{
                    color: palette?.dark_contrast_color,
                  }}
                >
                  A proficient project manager will be assigned to oversee your project, acting as a crucial link between
                  clients and the development team. This experienced professional will facilitate clear communication and
                  provide regular, comprehensive updates on the project's progress, ensuring a successful and timely
                  execution.
                </p>
              </div>
            </div>
          </div>
          <div
            type="button"
            onClick={() => handleAccordionClick(5)}
            className="flex flex-col items-start justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 "
            style={{
              borderBottom: `2px solid ${palette?.light_contrast_background}`,
            }}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 5 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <button
              name="faq-question"
              className={`flex  items-center justify-between w-full  font-medium rtl:text-right  outline-none hover:opacity-95 ${openAccordion === 5 ? "text-[#F15C20]" : "text-[#7D7D7D]"
                } gap-3`}
            >
              <div
                className={`w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2 `}
              >
                <span className="font-medium">
                  HOW WILL I BE MAKING THE PAYMENTS?
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
              className={`transition-all duration-200 ${openAccordion === 5 ? "" : "hidden"
                }`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="py-1 rounded-md mt-1 ">
                <p
                  className="mb-2  text-xs lg:text-[16px] leading-normal "
                  style={{
                    color: palette?.dark_contrast_color,
                  }}
                >
                  You will make payments according to your installment plan. Upon the completion of each deliverable,
                  our team will send you a payment link redirecting you to the Dignite Studios payment portal, where you
                  can complete the transaction. We accept all major debit and credit cards, including Visa, Mastercard,
                  Discover, and American Express.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
