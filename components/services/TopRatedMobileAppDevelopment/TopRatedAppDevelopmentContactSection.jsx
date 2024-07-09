"use client";
import Alert from "@/components/global/Alert";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext, useState } from "react";

const TopRatedAppDevelopmentContactSection = () => {
  const { palette, theme, setIsSidebarOpen, setError, error } =
    useContext(GlobalContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formatPhoneNumber = (phoneNumber) => {
    const formattedNumber = phoneNumber.replace(
      /^(\d{3})(\d{3})(\d{4})$/,
      "($1) $2-$3"
    );
    return formattedNumber;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const newErrors = {};
    if (name === "") {
      newErrors.name = "Name cannot be left empty.";
    }
    if (email === "") {
      newErrors.email = "Email cannot be left empty.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email must be a valid email.";
    }
    if (phone.length === 0) {
      newErrors.phone = "Phone number cannot be left empty.";
    } else if (phone.length < 10) {
      newErrors.phone = "Phone number can not be less than 10 digits.";
    } else if (phone.length > 11) {
      newErrors.phone = "Phone number can not be more than 11 digits.";
    }
    if (message === "") {
      newErrors.message = "Message cannot be left empty.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formattedNumber = formatPhoneNumber(phone);

      const data1 = new URLSearchParams();
      //Using entry ids from Google forms config
      data1.append("entry.1883330900", name); // Name field
      data1.append("entry.39421230", email); // Email field
      data1.append("entry.769267793", formattedNumber); // Phone field
      data1.append("entry.1280467825", message); // Message field

      fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSey02yWAqdomjEVpP8CPPYgUxb0osp6uu_E6vt_47A_0X12mQ/formResponse",
        { method: "POST", body: data1, mode: "no-cors" }
      )
        .then((response) => {
          window.location.assign("https://www.dignitestudios.com/thank-you");
        })
        .catch((error) => {
          setError("Something went wrong.");
        });
    }
  };
  return (
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-start w-full my-6 md:my-12 lg:my-24">
      <div
        className={`w-full ${
          theme == "dark" ? "bg-[#393939]" : "bg-[#F9F9F9]"
        }  rounded-[28px] grid grid-cols-3 gap-x-10`}
      >
        <form
          id="service-page-lead-form"
          onSubmit={handleSubmit}
          className="col-span-3 lg:col-span-2 flex flex-col items-start gap-8 p-4 2xl:gap-10 lg:p-12 2xl:p-24"
        >
          <h1 className="text-[34px] lg:text-[64px] font-semibold tracking-0 lg:tracking-[-3.2px] leading-normal 2xl:leading-[82px]">
            Let’s build an awesome project together!
          </h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Name<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Enter name"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Email address<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Enter email address"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Phone number<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Enter phone number"
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
            </div>
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="message" className="text-base font-medium">
                Message<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Type here"
              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="bg-[#F15C20] text-white text-[13px] font-semibold px-8 py-4 rounded-full float-end hover:opacity-[.75] transition-all duration-300"
            >
              Submit
            </button>
          </div>
          {error && <Alert />}
        </form>

        <duv className="col-span-3 lg:col-span-1 hidden lg:flex items-center justify-center p-4 pt-0 lg:p-0">
          <img
            src="/top-rated-contact-mockup.webp"
            alt="top-rated-mobile-app-development"
            className="lg:w-[402px] lg:h-[361px] 2xl:h-[400px] 2xl:w-full"
          />
        </duv>
      </div>
    </div>
  );
};

export default TopRatedAppDevelopmentContactSection;
