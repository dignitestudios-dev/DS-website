"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";


const Services = ({services , header , header2 , para}) => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start py-32 ">
      <div className="flex relative z-20  w-[90%] md:w-[80%] flex-col text-center mx-auto items-center">
        <h1 className="text-5xl leading-10 tracking-tighter md:text-7xl font-bold ">
          {header} {" "}
          <span className="text-[#F15C20]">{header2}</span>{" "}
        </h1>
        <p className="text-base my-6 md:w-[65%] mx-auto dark:text-white text-[#0C0C0C]">
         {para}
        </p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] mx-auto" >
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
              <img src={`/location/mobile-california/icons/${service.icon}.png`} alt={service.title}    className=" group-hover:hidden   transition duration-300"/>
              <img src={`/location/mobile-california/icons/${service.icon2}.png`} alt={service.title}    className=" group-hover:block hidden   transition duration-300"/>

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
