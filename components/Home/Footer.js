"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";

const Footer = () => {
  const { palette } = useContext(GlobalContext);

  const footerLinks = {
    services: [
      {
        name: "Android App Development Services",
        href: "/services/android-app-development-services",
      },
      {
        name: "Android App Design Services",
        href: "/services/android-mobile-app-design-services",
      },
      {
        name: "IOS App Development Services",
        href: "/services/ios-app-development-services",
      },
      {
        name: "IOS App Design Services",
        href: "/services/ios-app-design-services",
      },
      {
        name: "Web App Development Services",
        href: "/services/web-application-development-services",
      },
      {
        name: "PWA Development Services",
        href: "/services/pwa-development-services",
      },
      {
        name: "Mobile App Support And Maintenance Services",
        href: "/services/mobile-application-support-and-maintenance-services",
      },
      {
        name: "Hybrid App Development Services",
        href: "/services/hybrid-app-development-services",
      },
      {
        name: "Mobile App Development Services",
        href: "/services/mobile-app-development-services",
      },
      {
        name: "Mobile App Consulting Services",
        href: "/services/mobile-app-consulting-services",
      },
      {
        name: "Mobile App Design Services",
        href: "/services/mobile-app-design-services",
      },
      {
        name: "Mobile App Testing Services",
        href: "/services/mobile-app-testing-services",
      },
      {
        name: "Native App Development Services",
        href: "/services/native-app-development-services",
      },
      {
        name: "Hire Mobile App Developers",
        href: "/services/hire-mobile-app-developers",
      },
      {
        name: "Hire Android App Developers",
        href: "/services/hire-android-app-developers",
      },
      {
        name: "Hire IOS App Developers",
        href: "/services/hire-ios-app-developers",
      },
    ],
    technology: [
      { name: "iOS", href: "#" },
      { name: "Andriod", href: "#" },
      { name: "Flutter", href: "#" },
      { name: "React Native", href: "#" },
      { name: "Cross Platform", href: "#" },
      { name: "Cloud Application", href: "#" },
    ],
    quickLinks: [
      { name: "About us", href: "/about-us" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Blog", href: "/blogs" },
    ],
    industries: [
      { name: "Real State", href: "#" },
      { name: "Dating", href: "#" },
      { name: "Food", href: "#" },
      { name: "HealthCare", href: "#" },
      { name: "Fintech", href: "#" },
      { name: "eLearning", href: "#" },
      { name: "Education", href: "#" },
      { name: "Logistics", href: "#" },
    ],
    state: [
      { name: "California", href: "#" },
      { name: "Washington", href: "#" },
      { name: "Texas", href: "#" },
    ],
    ecommerce: [
      { name: "Shopify Development", href: "#" },
      { name: "Shopify App Development", href: "#" },
      { name: "Shopify Migration", href: "#" },
      { name: "Shopify integration", href: "#" },
      { name: "WooCommerce", href: "#" },
      { name: "WooCommerce Development", href: "#" },
      { name: "BigCommerce", href: "#" },
      { name: "BigCommerce Development", href: "#" },
    ],
    support: [
      { name: "Testimonials", href: "/#testimonials" },
      { name: "FAQS", href: "/#faqs" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Contact Us", href: "/contact-us" },
    ],
    location: [
      { name: "Chicago", href: "#" },
      { name: "Seattle", href: "#" },
      { name: "Boston", href: "#" },
      { name: "Miami", href: "#" },
      { name: "Charlotte", href: "#" },
      { name: "New York", href: "#" },
      { name: "Tampa", href: "#" },
    ],
    connect: [
      { name: "Facebook", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  };

  return (
    <div className="bg-black  -mt-10">
      <div className="w-full h-auto backdrop-blur-[50px] -mt-20  relative z-50 transition-all duration-300 flex flex-col pt-20 pb-10 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-48 rounded-t-[50px] md:rounded-t-[100px] ">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[#F15C20]/10 blur-[120px] pointer-events-none" />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-x-8 gap-y-12 mb-16 relative z-10">
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-3 flex flex-col gap-6">
            <Link href="/">
              <Image
                loader={customLoader}
                src="/logo-dark.webp"
                alt="Dignite Studios Logo"
                width={200}
                height={60}
                className="w-48 h-auto"
              />
            </Link>
            <p className="text-white font-extralight text-[13px] leading-relaxed max-w-xs">
              Don't compromise on your app's success. Gain a competitive edge.
              Our professional app developers California provide expertise,
              creativity, and reliability.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 flex flex-col gap-0">
            <h4 className="text-[#F15C20] font-bold text-sm capitialize tracking-wider mb-2">
              Services
            </h4>
            <ul className="flex flex-col ">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white font-extralight hover:text-[#F15C20]  text-[12px] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col gap-10">
            <div>
              <h4 className="text-[#F15C20] font-bold text-sm capitialize tracking-wider mb-2">
                Technology
              </h4>
              <ul className="flex flex-col ">
                {footerLinks.technology.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-white font-extralight hover:text-[#F15C20] text-[12px] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#F15C20] font-bold text-sm capitialize tracking-wider mb-2 text-nowrap">
                Quick Links
              </h4>
              <ul className="flex flex-col ">
                {footerLinks.quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-white font-extralight hover:text-[#F15C20] text-[12px] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries & State */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col gap-10">
            <div>
              <h4 className="text-[#F15C20] font-bold text-sm capitialize tracking-wider mb-2">
                Industries
              </h4>
              <ul className="flex flex-col ">
                {footerLinks.industries.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-white font-extralight hover:text-[#F15C20] text-[12px] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#F15C20] font-bold text-sm capitialize tracking-wider mb-2">
                State
              </h4>
              <ul className="flex flex-col ">
                {footerLinks.state.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-white font-extralight hover:text-[#F15C20] text-[12px] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ecommerce & Support */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2 flex flex-col gap-10">
            <div>
              <h4 className="text-[#F15C20] font-bold text-sm capitialize tracking-wider mb-2">
                Ecommrece
              </h4>
              <ul className="flex flex-col ">
                {footerLinks.ecommerce.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-white font-extralight hover:text-[#F15C20] text-[12px] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#F15C20] font-bold text-sm capitialize tracking-wider mb-2">
                Support
              </h4>
              <ul className="flex flex-col ">
                {footerLinks.support.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-white font-extralight hover:text-[#F15C20] text-[12px] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Location & Connect */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2 flex flex-col gap-10">
            <div>
              <h4 className="text-[#F15C20] font-bold text-sm capitialize tracking-wider mb-2">
                Location
              </h4>
              <ul className="flex flex-col ">
                {footerLinks.location.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-white font-extralight hover:text-[#F15C20] text-[12px] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#F15C20] font-bold text-sm capitialize tracking-wider mb-2">
                Connect With Us
              </h4>
              <ul className="flex flex-col ">
                {footerLinks.connect.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-white font-extralight hover:text-[#F15C20] text-[12px] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
    
          <div className="w-[18%] mb-4 bg-gradient-to-r from-transparent via-[#FFFFFF9A] to-transparent h-[1px]" />
          <p className="text-white ml-2 font-extralight text-[11px] capitialize ">
            © 2024 Dignite Studio. All rights reserved.
          </p>
    
      </div>
    </div>
  );
};

export default Footer;
