"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";
import { MdArrowOutward } from "react-icons/md";

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
      { name: "Android", href: "#" },
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
    <>
      {/* MOBILE FOOTER */}
      <div className="md:hidden w-full h-auto bg-black relative -mt-24 z-50 transition-all duration-300 flex flex-col pt-20 pb-10 px-6 rounded-t-[50px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full bg-gradient-to-r from-transparent via-[#FFFFFF9A] to-transparent h-[1px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[#F15C20]/10 blur-[120px] pointer-events-none" />

        {/* Sticky Logo Section - Mobile */}
        <div className="sticky top-0 pt-5 z-30 bg-black py-6 -mx-6 px-6 border-b border-white/10">
          <div className="flex flex-col gap-4 items-center text-center">
            <Link href="/">
              <Image
                loader={customLoader}
                src="/logo-dark.webp"
                alt="Dignite Studios Logo"
                width={200}
                height={200}
                className="w-32 h-auto"
              />
            </Link>
            <p className="text-white uppercase font-bold leading-relaxed max-w-xs text-sm">
              Don't compromise on your app's success.{" "}
              <span className="text-[#F15C20]">Gain a competitive edge.</span>
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                className="bg-[#F15C20] hover:bg-white hover:text-[#F15C20] text-white text-sm px-6 py-2.5 rounded-full transition-colors"
              >
                Discuss Your Idea
              </button>
              <button
                type="button"
                className="bg-[#F15C20] hover:bg-white hover:text-[#F15C20] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <MdArrowOutward />
              </button>
            </div>
            <div className="flex flex-col items-center gap-1 text-sm">
              <a
                href="mailto:info@dignitestudios.com"
                className="text-white hover:text-[#F15C20] transition"
              >
                E : info@dignitestudios.com
              </a>
              <a
                href="tel:+18777141770"
                className="text-white hover:text-[#F15C20] transition"
              >
                P : +1 877 714 1770
              </a>
            </div>
          </div>
        </div>

        {/* Scrollable Content - Mobile */}
        <div className="flex flex-col gap-12 pt-8 z-10">
          {/* Services */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-3">
              Services
            </h4>
            <ul className="flex flex-col items-center gap-1">
              {footerLinks.services.map((link, idx) => (
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

          {/* Technology */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-3">
              Technology
            </h4>
            <ul className="flex flex-col items-center gap-1">
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

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="flex flex-col items-center gap-1">
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

          {/* Industries */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-3">
              Industries
            </h4>
            <ul className="flex flex-col items-center gap-1">
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

          {/* State */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-3">
              State
            </h4>
            <ul className="flex flex-col items-center gap-1">
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

          {/* Ecommerce */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-3">
              Ecommerce
            </h4>
            <ul className="flex flex-col items-center gap-1">
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

          {/* Support */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-3">
              Support
            </h4>
            <ul className="flex flex-col items-center gap-1">
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

          {/* Location */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-3">
              Location
            </h4>
            <ul className="flex flex-col items-center gap-1">
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

          {/* Connect With Us */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-3">
              Connect With Us
            </h4>
            <ul className="flex flex-col items-center gap-1">
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

        {/* Bottom Bar - Mobile */}
        <div className="flex flex-col items-center mt-12">
          <div className="w-full mb-4 bg-gradient-to-r from-transparent via-[#FFFFFF9A] to-transparent h-[1px]" />
          <p className="text-white font-extralight text-[11px] capitalize">
            © {new Date().getFullYear()} Dignite Studio. All rights reserved.
          </p>
        </div>
      </div>

      {/* DESKTOP FOOTER */}
      <div className="hidden md:block w-full h-auto bg-black relative -mt-24 z-50 transition-all duration-300 pt-20 pb-10 px-12 lg:px-16 xl:px-28 rounded-t-[100px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full bg-gradient-to-r from-transparent via-[#FFFFFF9A] to-transparent h-[.8px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[#F15C20]/10 blur-[120px] pointer-events-none" />

        <div className="w-full grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-11 gap-x-8 gap-y-12 mb-16 relative z-10">
          {/* Logo and Description */}
          <div className="col-span-3 lg:col-span-2 xl:col-span-3 flex flex-col gap-6 sticky top-0 z-30  py-6">
            <Link href="/">
              <Image
                loader={customLoader}
                src="/logo-dark.webp"
                alt="Dignite Studios Logo"
                width={200}
                height={200}
                className="w-36 h-auto"
              />
            </Link>
            <p className="text-white uppercase font-bold leading-relaxed max-w-xs">
              Don't compromise on your app's success.{" "}
              <span className="text-[#F15C20]">Gain a competitive edge.</span>
            </p>
            <div className="flex items-center group pt-4">
              <button
                type="button"
                className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
              >
                Discuss Your Idea
              </button>
              <button
                type="button"
                className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg"
              >
                <MdArrowOutward />
              </button>
            </div>
            <div className="flex flex-col">
              <a
                href="mailto:info@dignitestudios.com"
                className="text-white hover:text-[#F15C20] transition"
              >
                E : info@dignitestudios.com
              </a>
              <a
                href="tel:+18777141770"
                className="text-white hover:text-[#F15C20] transition"
              >
                P : +1 877 714 1770
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 lg:col-span-2 xl:col-span-2 flex flex-col">
            <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-2">
              Services
            </h4>
            <ul className="flex flex-col">
              {footerLinks.services.map((link, idx) => (
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

          {/* Technology & Quick Links */}
          <div className="col-span-1 flex flex-col gap-10">
            <div className="flex flex-col xl:min-h-[170px]">
              <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-2">
                Technology
              </h4>
              <ul className="flex flex-col">
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
            <div className="flex flex-col">
              <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-2">
                Quick Links
              </h4>
              <ul className="flex flex-col">
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
          <div className="col-span-1 flex flex-col gap-10">
            <div className="flex flex-col xl:min-h-[170px]">
              <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-2">
                Industries
              </h4>
              <ul className="flex flex-col">
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
            <div className="flex flex-col">
              <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-2 -mt-6">
                State
              </h4>
              <ul className="flex flex-col">
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
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-10">
            <div className="flex flex-col xl:min-h-[170px]">
              <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-2">
                Ecommerce
              </h4>
              <ul className="flex flex-col">
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
            <div className="flex flex-col">
              <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-2 -mt-6">
                Support
              </h4>
              <ul className="flex flex-col">
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
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-10">
            <div className="flex flex-col xl:min-h-[170px]">
              <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-2">
                Location
              </h4>
              <ul className="flex flex-col">
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
            <div className="flex flex-col">
              <h4 className="text-[#F15C20] font-bold text-sm capitalize tracking-wider mb-2">
                Connect With Us
              </h4>
              <ul className="flex flex-col">
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

        {/* Bottom Bar - Desktop */}
        <div className="flex flex-col">
          <div className="w-[18%] mb-4 bg-gradient-to-r from-transparent via-[#FFFFFF9A] to-transparent h-[1px]" />
          <p className="text-white font-extralight text-[11px] capitalize">
            © {new Date().getFullYear()} Dignite Studio. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
