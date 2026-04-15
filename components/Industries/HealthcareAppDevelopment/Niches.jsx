"use client";

import Link from "next/link";
import React from "react";
import {
  FaShieldAlt,
  FaFileMedical,
  FaLock,
  FaCloud,
  FaDatabase,
  FaExchangeAlt,
  FaUserShield,
  FaUserLock,
  FaNetworkWired,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const niches = [
  {
    title: "HIPAA Compliance",
    description:
      "We’d handle protected health information while maintaining strict privacy and regulatory standards.",
    icon: <FaShieldAlt className="text-white" size={45} />,
  },
  {
    title: "HITECH Act Compliance",
    description:
      "Building secure EHR adoption by strengthening HIPAA enforcement and improving data protection.",
    icon: <FaFileMedical className="text-white" size={45} />,
  },
  {
    title: "FDA SaMD Regulations",
    description:
      "The healthcare software we build meets required safety and reliability standards for secure medical use.",
    icon: <MdVerified className="text-white" size={45} />,
  },
  {
    title: "HL7 Integration Standards",
    description:
      "Makes it easier to exchange consistent data between healthcare systems while improving interoperability and communication.",
    icon: <FaExchangeAlt className="text-white" size={45} />,
  },
  {
    title: "FHIR Interoperability Framework",
    description:
      "Allows secure and efficient data sharing between hospitals, apps, and third-party systems for better connected healthcare services.",
    icon: <FaNetworkWired className="text-white" size={45} />,
  },
  {
    title: "Data Encryption",
    description:
      "We’d protect patient data by encrypting information during storage to prevent unauthorized access.",
    icon: <FaLock className="text-white" size={45} />,
  },
  {
    title: "Multi-Factor Authentication",
    description:
      "Adds extra security layers by requiring multiple verification steps to protect sensitive healthcare data.",
    icon: <FaUserShield className="text-white" size={45} />,
  },
  {
    title: "Access Control",
    description:
      "We’d limit system access based on user roles to ensure only authorized individuals can manage sensitive information.",
    icon: <FaUserLock className="text-white" size={45} />,
  },
  {
    title: "Secure Cloud Infrastructure",
    description:
      "Uses reliable cloud environments to store and manage healthcare data with high availability.",
    icon: <FaCloud className="text-white" size={45} />,
  },
  {
    title: "System Integration",
    description:
      "We’d smoothly connect with electronic health record systems to enable unified healthcare management.",
    icon: <FaDatabase className="text-white" size={45} />,
  },
];

const NicheCard = ({ item }) => (
  <article className="relative w-[250px] h-[250px] bg-white rounded-2xl border border-[#D3D3D8] p-6 pt-14 shadow-sm hover:shadow-lg transition-all">
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#F15C20] shadow-[0_8px_20px_rgba(241,92,32,0.35)]">
      {item.icon}
    </div>

    <h3 className="text-lg font-bold text-[#1F222E] mt-2 text-center">
      {item.title}
    </h3>

    <p className="text-sm text-gray-600 mt-2 text-center">{item.description}</p>
  </article>
);

const Niches = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* H2 */}
        <h2 className="text-4xl tracking-tighter md:text-7xl font-bold leading-[42px] lg:leading-[1.1]">
          Secure & Compliant{" "}
          <span className="text-[#F15C20] text-nowrap">Healthcare Apps</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 text-base md:text-lg mx-auto">
          Dignite Studios make sure that your healthcare app is secure and
          complies with the policies. The healthcare applications we develop at
          our healthcare app development company are secure enough to protect
          user data and maintain the trust. The app aligns with legal
          regulations and has advanced security measures with user
          authentication.
        </p>

        {/* Desktop Grid */}
        <div className="mt-28 hidden lg:flex gap-x-4 gap-y-16 flex-wrap justify-center items-center">
          {niches.map((item) => (
            <NicheCard key={item.title} item={item} />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="mt-28 lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            breakpoints={{
              640: { slidesPerView: 2, centeredSlides: false },
              768: { slidesPerView: 3, centeredSlides: false },
            }}
            className="!pb-12 niches-swiper"
          >
            {niches.map((item) => (
              <SwiperSlide key={item.title} className="!flex !justify-center">
                <NicheCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <Link
          href="/contact-us"
          className="flex items-center mt-8 group justify-center"
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition">
            Speak to Security Expert
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>

      {/* Swiper bullets */}
      <style jsx global>{`
        .niches-swiper .swiper-pagination-bullet {
          background-color: #f15c20 !important;
          opacity: 0.5;
        }

        .niches-swiper .swiper-pagination-bullet-active {
          background-color: #f15c20 !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Niches;
