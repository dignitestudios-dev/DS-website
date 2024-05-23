"use client";

import React, { useContext, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { GlobalContext } from "@/context/GlobalContext";
import { usePathname, useRouter } from "next/navigation";
import Image  from "next/image";
import Alert from "../global/Alert";
import Success from "../global/Success";
import SubscribeAlert from "../global/SubscribeAlert";
import customLoader from "@/lib/custom-loader";

const Footer = () => {
  const { palette, theme, setSubscribeError, setSuccess, success, subscribeError } = useContext(GlobalContext);
  const navigate = useRouter()
  const pathname = usePathname()
  const handleClick = (id) => {
    if (pathname != "/") {
      navigate.push("/")
      setTimeout(() => {

        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500)
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

  }
  const navigateTo = (link) => {
    navigate.push(link)
  }
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = document.getElementById("subscribe")
    const formData = new FormData(event.target);
    if (formData.get("email") == "") {
      setSubscribeError("Email cannot be left empty.")
    } else if (!validateEmail(formData.get("email"))) {
      setSubscribeError("Email must be a valid email.")
    } else {


      const data = new URLSearchParams();

      //Using entry ids from Google forms config
      data.append("entry.87343768", formData.get("email")); // Email field

      fetch(
        `https://docs.google.com/forms/d/e/${process.env.NEXT_PUBLIC_SUBSCRIBE_URL}/formResponse`,
        { method: "POST", body: data, mode: "no-cors" }
      )
        .then((response) => {
          if (response) {
            setSuccess("Thankyou for subscribing.")
            form.reset()
          }
        })
        .catch((error) => {
          setSubscribeError("Something went wrong.")
        });
    }

  };
  return (
    <div
      className={`w-full h-auto transition-all duration-300 flex flex-col gap-3 lg:gap-10 py-6 lg:py-12 justify-start items-start px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 `}
      style={{
        background: palette?.dark_contrast_background,
      }}
    >
      <div className="flex flex-col gap-2">
        <h1
          className="text-3xl md:text-5xl font-extrabold lg:text-6xl lg:font-bold "
          style={{ color: palette?.color }}
        >
          Have an idea?
        </h1>
        <h1 className="text-3xl md:text-5xl text-[#F15C20] font-extrabold lg:text-[65px] lg:font-bold ">
          Let’s talk!
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-end">
        <div className="w-full lg:w[50%] flex flex-col gap-3 lg:gap-10">
          <span
            className="text-xl md:text-3xl lg:text-[45px] font-light"
            style={{ color: palette?.color }}
          >
            +1 877 714 1770
          </span>

          <Link
            href="tel:+18777141770"
            name="call-now-btn"
            style={{
              background: `${palette?.brandOrange}`,
              color: "white",
            }}
            className="orange w-[100px] md:w-[140px] lg:w-[168px] h-12 md:h-14 lg:h-16 mt-2 lg:mt-0 rounded-full transition-all duration-100 hover:scale-105 text-sm md:text-md lg:text-lg font-medium  flex items-center justify-center gap-2 animate-bounce"
          >
            <BsFillTelephoneFill />
            <span>Call Now</span>
          </Link>
        </div>
        <div className="w-full lg:w[50%] flex justify-end">
          <form id="subscribe" onSubmit={handleSubmit} className=" h-auto w-full lg:w-auto  text-md lg:text-lg font-normal flex flex-col uppercase gap-4 py-6 px-2 justify-start lg:col-start-4  items-start col-span-2">
            <span
              className="text-3xl md:text-[42px] font-bold"
              style={{ color: palette?.color }}
            >
              Subscribe
            </span>
            <div className="w-full lg:w-96 relative">
              <input
                type="text"
                id="email2" name="email"
                className="w-full  outline-none h-12 bg-transparent px-2"
                placeholder="E-mail"
                style={{ borderBottom: `2px solid ${palette?.brandOrange}` }}
              />
              {
                subscribeError && <SubscribeAlert />
              }
              {success && <Success />}
              <button type="submit">

                <GoArrowRight
                  className="absolute top-2 right-2  text-2xl"
                  style={{ color: palette?.brandOrange }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-5 gap-2">
        <Link aria-label="button" href={"https://www.trustpilot.com/review/dignitestudios.com"} className="col-span-5 lg:col-span-2 flex flex-col gap-2">
          {theme == "dark" ? (
            <Link aria-label="button" href={"https://www.trustpilot.com/review/dignitestudios.com"}>
              <Image loader={customLoader} width={140} height={30} alt="trust-pilot" src="/trust-pilot-white.webp" className="w-[140px] md:w-[200px] lg:w-[236px]" />
            </Link>
          ) : (
            <Link aria-label="button" href={"https://www.trustpilot.com/review/dignitestudios.com"}>
              <Image loader={customLoader} width={140} height={30} alt="trust-pilot" src="/trustpilot-logo.webp" className="w-[140px] md:w-[200px] lg:w-[236px]" />
            </Link>
          )}

          <Image loader={customLoader} width={140} height={30} alt="trust-pilot" src="/footer-stars.webp" className="w-[140px] md:w-[200px] lg:w-[236px]" />
        </Link>
        <div className="col-span-2 lg:col-span-1 uppercase text-xs md:text-md lg:text-sm font-normal flex flex-col gap-3 py-6 px-2 justify-start items-start">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <button onClick={() => handleClick("process")} className=" uppercase hover:text-orange-500">
            Our Process
          </button>
          <button onClick={() => handleClick("case-studies")} className="uppercase hover:text-orange-500">
            Case Study
          </button>
        </div>
        <div className="col-span-3 lg:col-span-1 uppercase text-xs md:text-md lg:text-sm font-normal flex flex-col gap-3 py-6 px-2 justify-start items-start">
          <button onClick={() => handleClick("testimonials")} className="uppercase hover:text-orange-500">
            Testimonials
          </button>
          <Link href="/terms-and-conditions" className="hover:text-orange-500">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy" className="hover:text-orange-500">
            Privacy Policy
          </Link>
        </div>
        <div className="col-span-5 lg:col-span-1 uppercase text-xs md:text-md lg:text-sm font-normal flex flex-col gap-3 pb-6 lg:py-6 px-2 justify-start items-start">
          <Link href="/services/android-app-development" className="hover:text-orange-500">
            Android App Development
          </Link>
          <Link href="/services/ios-app-development" className="hover:text-orange-500">
            IOS App Development

          </Link>
          <Link href="/services/web-app-development" className="hover:text-orange-500">
            Web App Development

          </Link>
        </div>
      </div>

      <div className="w-full flex items-center justify-between">
        <span
          className="text-xs lg:text-base uppercase"
          style={{ color: palette?.light_contrast_color }}
        >
          © 2024 dignite studios
        </span>
        <Link
          href="mailto:info@dignitestudios.com"
          className="text-xs lg:text-base font-normal"
          style={{ color: palette?.light_contrast_color }}
        >
          info@dignitestudios.com
        </Link>
      </div>
    </div>
  );
};

export default Footer;
