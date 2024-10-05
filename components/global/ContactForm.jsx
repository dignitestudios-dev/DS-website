"use client";
import Alert from "@/components/global/Alert";
import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { usePathname } from "next/navigation";
import customLoader from "@/lib/custom-loader";
import { LuArrowUpRight } from "react-icons/lu";

const ContactForm = () => {
  const { palette, theme, setIsSidebarOpen, setError, error } =
    useContext(GlobalContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [countryCode, setCountryCode] = useState("");
  const [isValid, setIsValid] = useState(true);
  const pathname = usePathname();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    return name.length > 0;
  };

  const validateMessage = (message) => {
    return message.length > 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    } else if (phone.length < 11) {
      newErrors.phone = "Phone number cannot be less than 10 digits.";
    } else if (phone.length > 15) {
      newErrors.phone = "Phone number cannot be more than 15 digits.";
    }
    if (message === "") {
      newErrors.message = "Message cannot be left empty.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const data1 = new URLSearchParams();
      //Using entry ids from Google forms config
      data1.append("entry.1883330900", name); // Name field
      data1.append("entry.39421230", email); // Email field
      data1.append("entry.769267793", phone); // Phone field
      data1.append("entry.1280467825", message); // Message field
      data1.append("entry.764492805", pathname); // Page field

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

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (!validateName(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name cannot be left empty.",
      }));
    } else {
      setErrors((prevErrors) => {
        const { name, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email must be a valid email.",
      }));
    } else {
      setErrors((prevErrors) => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    if (!validateMessage(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message cannot be left empty.",
      }));
    } else {
      setErrors((prevErrors) => {
        const { message, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handlePhoneChange = (value, country) => {
    setPhone(value);
    setCountryCode(country.dialCode);

    if (!value.startsWith(`+${country.dialCode}`)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-start items-start w-full">
      <div className={`w-full`}>
        <form
          id="service-page-lead-form"
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-5 p-4 2xl:gap-10 lg:p-12 2xl:p-24"
        >
          <span className="hidden">Name:</span>{" "}
          <input type="text" name="name" className="hidden" />
          <input
            type="hidden"
            id="gclid_field"
            name="gclid_field"
            value=""
            className="hidden"
          />
          <input
            type="submit"
            value="Submit Form"
            name="btnSubmit"
            className="hidden"
          />
          <div className="w-full flex flex-col items-start gap-9">
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Full Name<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                className={`text-sm font-normal outline-none w-full py-4 2xl:py-6 px-6 rounded-full ${
                  theme === "light" ? "bg-[#FAFAFA]" : "bg-[#2d2d2d]"
                }`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="email" className="text-base font-medium">
                Email Address<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className={`text-sm font-normal outline-none w-full py-4 2xl:py-6 px-6 rounded-full ${
                  theme === "light" ? "bg-[#FAFAFA]" : "bg-[#2d2d2d]"
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-1">
            <label htmlFor="phone" className="text-base font-medium">
              Phone Number<span className="text-[#E94C42]">*</span>
            </label>
            <div className="flex w-full">
              <PhoneInput
                country={"us"}
                value={phone}
                name="phone"
                onChange={handlePhoneChange}
                containerStyle={{
                  width: "100%",
                  paddingRight: "0px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "200px",
                  background: theme === "light" ? "#FAFAFA" : "#2d2d2d",
                  textAlign: "start",
                  color: "black",
                }}
                inputStyle={{
                  width: "90%",
                  height: "100%",
                  outline: "none",
                  border: "none",
                  fontSize: "14px",
                  color: "gray",
                  padding: "10px 50px",
                  margin: "0",
                  background: theme === "light" ? "#FAFAFA" : "#2d2d2d",
                }}
                className="text-sm font-normal outline-none w-full py-2 2xl:py-6 px-6 rounded-full "
              />
              <style jsx>{`
                .invalid input {
                  border: none !important;
                }
              `}</style>
            </div>
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>
          <div className="w-full flex flex-col items-start gap-1">
            <label htmlFor="message" className="text-base font-medium">
              Message<span className="text-[#E94C42]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              className={`text-sm font-normal outline-none w-full py-3 2xl:py-6 px-4 rounded-[16px] h-[148px] ${
                theme === "light" ? "bg-[#FAFAFA]" : "bg-[#2d2d2d]"
              }`}
              style={{ resize: "none" }}
            ></textarea>
            {/* <input
              type="text"
              name="message"
              value={message}
              onChange={handleMessageChange}
              className="text-sm font-normal outline-none w-full py-2 2xl:py-6 px-6 rounded-[16px] bg-[#FAFAFA] h-[148px]"
            /> */}
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>
          <div className="w-full">
            <button
              type="submit"
              name="form-submit-button"
              className="bg-[#F15C20] text-white rounded-[12px] text-center py-8 px-24 hover:bg-black transition-all duration-300 relative group inline-block overflow-hidden text-white text-[16px] font-semibold px-8 py-4 w-full rounded-full flex justify-center gap-1 transition-all duration-300 hover:opacity-[1] "
              style={{ background: "#F15C20" }}
            >
              <span className="block absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
        Send Message <LuArrowUpRight className="text-white text-xl" />
      </span>
      <span className="block absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
       Contact Us  <LuArrowUpRight className="text-white text-xl" />
      </span>              
            </button>
          </div>
          {error && <Alert />}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
