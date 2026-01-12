"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
const services = [
  {
    icon: "database",
    title: "iOS App Development",
    description: (
      <>
        The{" "}
        <Link href="/ios-app-development" className="underline text-[#F15C20] group-hover:text-white ">
          iOS / iPhone app development
        </Link>{" "}
        is the right choice if your target audience includes iOS users. Using
        Swift and SwiftUI, we develop iOS applications optimized for user
        experience. We focus on apps that excel in healthcare, fintech, wellness,
        and enterprise sectors.
      </>
    ),
  },
  {
    icon: "setting",
    title: "Android App Development",
    description: (
      <>
        If you're seeking{" "}
        <Link href="/android-app-development" className="underline text-[#F15C20] group-hover:text-white">
          Android app development services
        </Link>{" "}
        in California, you can trust us with your Android app development. We
        ensure applications are optimized for devices like Samsung, Pixel, and
        OnePlus.
      </>
    ),
  },
  {
    icon: "pipe",
    title: "Cross-Platform / Hybrid App Development",
    description: (
      <>
        Thanks to Flutter and React Native, we deliver up to 40% faster. Our{" "}
        <Link href="/hybrid-app-development" className="underline text-[#F15C20] group-hover:text-white">
          hybrid mobile app development services
        </Link>{" "}
        keep your project running smoothly while delivering quality results
        without blowing the budget.
      </>
    ),
  },
  {
    icon: "icon",
    title: "Custom Solutions / Native & Web Apps",
    description: (
      <>
        When it comes to building custom solutions, we are the best{" "}
        <Link href="/mobile-app-development" className="underline text-[#F15C20] group-hover:text-white">
          mobile app development company
        </Link>{" "}
        in California. Our services include{" "}
        <Link href="/mobile-app-development" className="underline text-[#F15C20] group-hover:text-white">
          mobile app development
        </Link>
        , <Link href="/ui-ux-design" className="underline text-[#F15C20] group-hover:text-white">UI/UX design</Link>,{" "}
        <Link href="/pwa-development" className="underline text-[#F15C20] group-hover:text-white">PWA development</Link>
        ,{" "}
        <Link href="/hybrid-app-development" className="underline text-[#F15C20] group-hover:text-white">
          hybrid app development
        </Link>
        , and{" "}
        <Link href="/web-app-development" className="underline text-[#F15C20] group-hover:text-white">
          web app development
        </Link>
        .
      </>
    ),
  },
  {
    icon: "pen",
    title: "Design Services",
    description: (
      <>
        Make every tap count with our{" "}
        <Link href="/mobile-app-design" className="underline text-[#F15C20] group-hover:text-white">
          mobile app design services
        </Link>{" "}
        including{" "}
        <Link href="/ios-app-design" className="underline text-[#F15C20] group-hover:text-white">
          iOS app design
        </Link>{" "}
        and{" "}
        <Link href="/android-app-design" className="underline text-[#F15C20] group-hover:text-white">
          Android app design services
        </Link>
        . We focus on user-centric interfaces and consistent branding to create
        engaging experiences.
      </>
    ),
  },
  {
    icon: "chat",
    title: "Maintenance, Consulting & Testing",
    description: (
      <>
        We provide{" "}
        <Link href="/app-support" className="underline text-[#F15C20] group-hover:text-white">
          mobile app support & maintenance services
        </Link>
        , mobile app consulting services, and app testing & QA services to ensure
        your app remains secure and up-to-date. We also support app launch and
        deployment to maximize ROI.
      </>
    ),
  },
];

const Services = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start py-32 ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-5xl leading-10 tracking-tighter md:text-7xl font-bold ">
          Our Mobile App Development Services {" "}
          <span className="text-[#F15C20]">in California</span>{" "}
        </h1>
        <p className="text-base my-6 w-[65%] mx-auto dark:text-white text-[#0C0C0C]">
         When you work with Dignite Studios, you’re working with a partner who takes full ownership. We designed our mobile app development services according to your needs so that it can help you develop an app you envision.
        </p>

      </div>
      <div className="grid grid-cols-3 gap-4 w-[80%] mx-auto" >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 flex py-12 shadow-[#f8d8ca] bg-white shadow-2xl flex-col gap-6 items-center border-gray-200 group transition-all ease-linear hover:bg-[#F15C20] hover:text-white rounded-[45px]  hover:shadow-md "
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="flex justify-center items-center p-3 shadow-2xl group-hover:shadow-white shadow-[#F15C20]  rounded-[22px] group-hover:border-t-white group-hover:border-b-white bg-white/20 border-b border-b-[#F15C20] border-t-[#F15C20] mx-auto w-[20%] border-t" >
              <img src={`/location/mobile-california/icons/${service.icon}.png`} alt={service.title} className="group-hover:grayscale" />
              </div>
              <h3 className="text-base font-semibold text-center">{service.title}</h3>
            
            <p className="text-sm text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
