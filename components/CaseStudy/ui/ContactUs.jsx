"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdArrowOutward } from "react-icons/md";

const ContactUs = ({ pathname, header, img, header2, para, btn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validation Logic
    if (!name.trim()) newErrors.name = "Name cannot be left empty.";
    if (!email.trim()) {
      newErrors.email = "Email cannot be left empty.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email must be a valid email.";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number cannot be left empty.";
    } else if (phone.length < 10 || phone.length > 15) {
      newErrors.phone = "Phone number must be between 10 and 15 digits.";
    }
    if (!message.trim())
      newErrors.message = "Description cannot be left empty.";

    setErrors(newErrors);

    // If no errors, proceed with fetch
    if (Object.keys(newErrors).length === 0) {
      const data1 = new URLSearchParams();
      data1.append("entry.1883330900", name);
      data1.append("entry.39421230", email);
      data1.append("entry.769267793", phone);
      data1.append("entry.1280467825", message);
      data1.append("entry.764492805", pathname);

      try {
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSey02yWAqdomjEVpP8CPPYgUxb0osp6uu_E6vt_47A_0X12mQ/formResponse",
          { method: "POST", body: data1, mode: "no-cors" },
        );
        window.location.assign("/thank-you");
      } catch (error) {
        console.error("Submission error", error);
      }
    }
  };

  // Helper to remove error while typing
  const handleChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[field];
        return newErrs;
      });
    }
  };

  const handlePhoneChange = (value, country) => {
    setPhone(value);
    setCountryCode(country?.dialCode || "");

    if (country && !value.startsWith(`+${country.dialCode}`)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className="w-full bg-[#0A0A0A] mt-24 pt-24 -mb-32 sm:pt-32 [clip-path:ellipse(250%_100%_at_50%_100%)] md:[clip-path:ellipse(120%_100%_at_50%_100%)] relative grid grid-cols-1 pb-44 overflow-hidden md:py-32">
      <div className="flex justify-center w-[80%] mx-auto lg:justify-between items-center">
        <div className="lg:w-[50%]">
          <h1 className="text-4xl text-white font-bold">{header}</h1>
          <h1 className="text-4xl font-bold text-[#F15C20] mb-4">{header2}</h1>
          <p className="text-white">{para}</p>

          {/* Form wrapper is essential for the submit button to work */}
          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mt-12">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={handleChange(setName, "name")}
                className={`peer w-full rounded-xl border ${errors.name ? "border-red-500" : "border-white"} bg-transparent px-4 py-3 text-white focus:outline-none`}
                placeholder=" "
              />
              <label   className="
    pointer-events-none absolute left-4 
    bg-[#0A0A0A] px-1 text-sm text-white 
    transition-all duration-150
    

    top-3 

    peer-focus:-top-2 peer-focus:text-xs

    peer-[&:not(:placeholder-shown)]:-top-2
    peer-[&:not(:placeholder-shown)]:text-xs
  ">
                Full Name <span className="text-red-500">*</span>
              </label>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={handleChange(setEmail, "email")}
                className={`peer w-full rounded-xl border ${errors.email ? "border-red-500" : "border-white"} bg-transparent px-4 py-3 text-white focus:outline-none`}
                placeholder=" "
              />
              <label
                className="
    pointer-events-none absolute left-4 
    bg-[#0A0A0A] px-1 text-sm text-white 
    transition-all duration-150
    

    top-3 

    peer-focus:-top-2 peer-focus:text-xs

    peer-[&:not(:placeholder-shown)]:-top-2
    peer-[&:not(:placeholder-shown)]:text-xs
  "
              >
                Email <span className="text-red-500">*</span>
              </label>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="relative">
              <div
                className="peer w-full rounded-xl"
                style={{
                  width: "100%",
                  borderRadius: "0.75rem",
                  border: errors.phone
                    ? "2px solid #E94C42"
                    : "1px solid rgba(255,255,255,1)",
                  padding: "4px",
                }}
              >
                <PhoneInput
                  country={"us"}
                  value={phone}
                  name="phone"
                  onChange={handlePhoneChange}
                  containerStyle={{ width: "100%", background: "transparent" }}
                  inputStyle={{
                    width: "100%",
                    height: "100%",
                    outline: "none",
                    border: "none",
                    fontSize: "14px",
                    color: "white",
                    padding: "10px 12px 10px 64px",
                    margin: 0,
                    background: "transparent",
                  }}
                  buttonStyle={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    margin: 0,
                  }}
                  dropdownStyle={{ color: "black" }}
                  enableSearch={true}
                  specialLabel={""}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="4"
                value={message}
                onChange={handleChange(setMessage, "message")}
                className={`peer w-full rounded-xl border ${errors.message ? "border-red-500" : "border-white"} bg-transparent px-4 py-3 text-white focus:outline-none resize-none`}
                placeholder=" "
              />
              <label
                className="
    pointer-events-none absolute left-4 
    bg-[#0A0A0A] px-1 text-sm text-white 
    transition-all duration-150
    

    top-3 

    peer-focus:-top-2 peer-focus:text-xs

    peer-[&:not(:placeholder-shown)]:-top-2
    peer-[&:not(:placeholder-shown)]:text-xs
  "
              >
                Description <span className="text-red-500">*</span>
              </label>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center group justify-start pt-4">
              <button
                type="submit"
                className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
              >
                {btn}
              </button>
              <button
                type="submit"
                className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg border-l border-white/20"
              >
                <MdArrowOutward />
              </button>
            </div>
          </form>
        </div>

        <div className="lg:w-[40%] lg:block hidden">
          <img
            src={img}
            width={320}
            height={320}
            alt="mobile"
            className="bottom-12 absolute right-28 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
