"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext,useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
const Services = () => {
  const { theme } = useContext(GlobalContext);
  const [hoverColor,setHoverColor]=useState("");

  
  return (
    <section
      className={`px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-6 justify-start items-start w-full my-6 md:my-12 lg:my-20 ${theme === "light" ? "bg-[#fff]" : "bg-transparent"
        } py-16`}
    >
      <div className="w-full flex items-center justify-between">
        <div>
          <h2
            className={`${theme === "dark" ? "text-white" : "text-black"
              } text-4xl font-[600] xl:w-[75%]`}
          >
            <span className='font-[700] text-[20px] text-[#8F8F8F] uppercase' >Our mobile app development</span><br />
            Services
          </h2>
          <p className={`w-[100%] lg:w-[55%] mt-3 text-sm ${theme === "dark" ? "text-white" : "text-[#2A2A2A]"
            }  `}>Our revolutionary hybrid app development services bestow a well-organized
            structure to build entirely customized hybrid mobile apps that are highly
            compatible with various devices. Dignite’s hybrid mobile app developers
            construct high-powered hybrid software that suits business needs.</p>
        </div>
        <div className="hidden xl:block">
          <ContactButton text1={"Schedule a call"} text2={"Let's talk"} />
        </div>
      </div>

      

      <div className="w-full my-4 grid grid-cols-1 md:grid-cols-3 gap-6 ">
      <div
  className={`${theme === "light" ? "bg-[#F9F9F9]" : "bg-[#2d2d2d]"} p-6 rounded-3xl flex flex-col items-start gap-4 hover:bg-[#F15C20] group-hover:text-white group transition-all duration-500`}
  onMouseOver={() => setHoverColor(1)}
  onMouseOut={() => setHoverColor(0)}
>
  <div className="rounded-xl flex items-center">
    {hoverColor === 1 ? ( 
      <img src="/mobile-app-dev-dark.png" alt="" />
    ) : (
      theme === "light" ? ( 
        <img src="/mobile-app-dev-light.png" alt="" />
      ) : (
        <img src="/mobile-app-dev-dark.png" alt="" />
      )
    )}
  </div>
  <h3 className={`text-xl font-[700] group-hover:text-white`}>Mobile App Development</h3>
  <p className={`text-sm font-normal group-hover:text-white ${theme === "light" ? "text-[#8F8F8F]" : "text-white leading-[19.74px]"}`}>
    Dignite Studios bestows highly interactive end-to-end development of your mobile application and deploys your apps in no time. Whereas, our fastest and high-performing app will lead you to the next level of app success. So, hire mobile app developers services from the leading company of mobile solutions.
  </p>
</div>

        <div
          className={`${theme === "light" ? "bg-[#F9F9F9]" : "bg-[#2d2d2d]"
            } p-6 rounded-3xl flex flex-col items-start gap-4 group hover:bg-[#F15C20] transition-all duration-500 `}
            onMouseOver={() => setHoverColor(2)}
            onMouseOut={() => setHoverColor(0)}
        >
          <div className="  rounded-xl  flex items-center ">
          {hoverColor === 2 ? ( 
      <img src="/mobile-app-design-light.png" alt="" />
    ) : (
              theme == "light" ? (
                <img src="/mobile-app-design.png" alt="" />
              ) : (
                <img src="/mobile-app-design-light.png" alt="" />
              ))
            }

          </div>
          <h3 className={`text-xl font-[700] group-hover:text-white`}>Mobile App design</h3>
          <p
            className={`text-sm font-normal group-hover:text-white ${theme === "light"
                ? "text-[#8F8F8F]"
                : "text-white leading-[19.74px]"
              }`}
          >
            We provide unique mobile app design services to create addictive mobile
            features and a full cycle of application design which includes UX/UI interface
            effectively and conveniently. Design and development of mobile applications
            play a vital role in the conversion of products.

          </p>
        </div>
        <div
          className={`${theme === "light" ? "bg-[#F9F9F9]" : "bg-[#2d2d2d]"
            } p-6 rounded-3xl flex flex-col items-start gap-4 hover:bg-[#F15C20] group-hover:text-white group transition-all duration-500`}
            onMouseOver={() => setHoverColor(3)}
            onMouseOut={() => setHoverColor(0)}
        >
          <div className="  rounded-xl  flex items-center ">

          {hoverColor === 3 ? ( 
      <img src="/mobile-app-consultation-dark.png" alt="" />
    ) : (
              theme == "light" ? (
                <img src="/mobile-app-consultation-light.png" alt="" />
              ) : (
                <img src="/mobile-app-consultation-dark.png" alt="" />
              ))
            }
          </div>
          <h3 className={`text-xl font-[700] group-hover:text-white`}>Mobile App consultation</h3>
          <p
            className={`text-sm font-normal group-hover:text-white ${theme === "light"
                ? "text-[#8F8F8F]"
                : "text-white leading-[19.74px]"
              }`}
          >
            Our professional development provides free mobile consulting services
            to advise pragmatic measures in the process of mobile app development
            and bring forth the cost of mobile apps swiftly. They have supreme
            knowledge of mobile learning and serve consumers with appropriate
            mobile app solutions.

          </p>
        </div>

        <div
          className={`${theme === "light" ? "bg-[#F9F9F9]" : "bg-[#2d2d2d]"
            } p-6 rounded-3xl group flex flex-col items-start gap-4 hover:bg-[#F15C20] group-hover:text-white group transition-all duration-500`}
            onMouseOver={() => setHoverColor(4)}
            onMouseOut={() => setHoverColor(0)}
       >
          <div className="  rounded-xl  flex items-center ">
          {hoverColor === 4 ? ( 
      <img src="/mobile-app-prtotyping-white.png" alt="" />
    ) : (
              theme == "light" ? (
                <img src="/mobile-app-prtotyping-light.png" alt="" />
              ) : (
                <img src="/mobile-app-prtotyping-white.png" alt="" />
              ))
            }

          </div>
          <h3 className={`text-xl font-[700] group-hover:text-white`}>Mobile App Prototyping</h3>
          <p
            className={`text-sm font-normal group-hover:text-white ${theme === "light"
                ? "text-[#8F8F8F]"
                : "text-white leading-[19.74px]"
              }`}
          >
            In the arena of digital solutions, prototyping has transposed the entire
            process of optimization and functions easily and efficiently. It has reduced
            the total time consumption Well, the process of prototyping has transposed a
            complex process efficiently

          </p>
        </div>
        <div
          className={`${theme === "light" ? "bg-[#F9F9F9]" : "bg-[#2d2d2d]"
            } p-6 rounded-3xl flex flex-col items-start gap-4 hover:bg-[#F15C20] group-hover:text-white group transition-all duration-500`}
            onMouseOver={() => setHoverColor(5)}
            onMouseOut={() => setHoverColor(0)}
        >
          <div className="  rounded-xl  flex items-center ">

          {hoverColor === 5 ? ( 
      <img src="/mobile-app-maintenance-white.png" alt="" />
    ) : (
              theme == "light" ? (
                <img src="/mobile-app-maintenance-light.png" alt="" />
              ) : (
                <img src="/mobile-app-maintenance-white.png" alt="" />
              ))
            }

          </div>
          <h3 className={`text-xl font-[700] group-hover:text-white`}>Mobile App maintenance</h3>
          <p
            className={`text-sm font-normal group-hover:text-white ${theme === "light"
                ? "text-[#8F8F8F]"
                : "text-white leading-[19.74px]"
              }`}
          >
            Our team proposes complimentary two months of maintenance
            on your mobile app projects from the day of launch
            regardless of the app type whether simple app or enterprise app.
          </p>
        </div>
        <div
          className={`${theme === "light" ? "bg-[#F9F9F9]" : "bg-[#2d2d2d]"
            } p-6 rounded-3xl flex flex-col items-start gap-4 hover:bg-[#F15C20] group-hover:text-white group transition-all duration-500`}
            onMouseOver={() => setHoverColor(6)}
            onMouseOut={() => setHoverColor(0)}
       >
          <div className="  rounded-xl  flex items-center ">
          {hoverColor === 6 ? ( 
      <img src="/mobile-app-integration-white.png" alt="" />
    ) : (
              theme == "light" ? (
                <img src="/mobile-app-integration-light.png" alt="" />
              ) : (
                <img src="/mobile-app-integration-white.png" alt="" />
              ))
            }
          </div>
          <h3 className={`text-xl font-[700] group-hover:text-white`}>Mobile App Integration</h3>
          <p
            className={`text-sm font-normal group-hover:text-white ${theme === "light"
                ? "text-[#8F8F8F]"
                : "text-white leading-[19.74px]"
              }`}
          >We cater world-class mobile app solutions,
            and third-party services to construct
            personalized CRM or HR back-end applications,
            full-cycle mobile app implementation, and
            optimizing device bandwidth as per your requirements. </p>
        </div>

      </div>

      <div className="xl:hidden mt-6 w-full flex justify-center">
        <Link
          href={"/contact-us"}
          className={`px-6 py-5 xl:py-8 xl:px-[26px] border border-[#F15C20] text-[#F15C20] hover:text-white ${theme === "light" ? "bg-[#F9F9F9]" : "bg-[#222222]"
            } hover:bg-[#F15C20] transition-all duration-300 rounded-full text-xl font-medium`}
        >
          Let's Start Your Project
        </Link>
      </div>
    </section>
  );
};

export default Services;
