"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import Alert from "../global/Alert";
import ContactUsAlert from "../global/ContactUsAlert";
import PhoneInput from "react-phone-input-2";
import useDeviceType from "../global/DeviceTypeFunction";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Impact from "./ui/Impact";
import GlobalPresence from "./ui/GlobalPresence";

const ContactUsPage = () => {
  const { palette, theme, setError, error } = useContext(GlobalContext);
  const navigate = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [countryCode, setCountryCode] = useState("");
  const [isValid, setIsValid] = useState(true);
  const pathname = usePathname();
  const deviceType = useDeviceType();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
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
    if (!message.trim()) newErrors.message = "Message cannot be left empty.";
    if (!isAgreed) {
      newErrors.isAgreed = "Please check the box to proceed.";
    }

    // Additional validation for new fields if required

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const data1 = new URLSearchParams();
      data1.append("entry.1883330900", name);
      data1.append("entry.39421230", email);
      data1.append("entry.769267793", phone);
      data1.append("entry.1280467825", message);
      data1.append("entry.764492805", pathname);
      data1.append("entry.1359192276", `Device Type - ${deviceType}`);
      // Assuming new entry IDs for the new fields or appending to message/notes
      data1.append("entry.357568185", `Service: ${service}`);

      try {
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSey02yWAqdomjEVpP8CPPYgUxb0osp6uu_E6vt_47A_0X12mQ/formResponse",
          { method: "POST", body: data1, mode: "no-cors" },
        );
        window.location.assign("/thank-you");
      } catch (error) {
        setError("Something went wrong.");
      }
    }
  };

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
    setIsValid(!country || value.startsWith(`+${country.dialCode}`));
  };

  const labelClasses = `
    pointer-events-none absolute left-4 
    bg-white px-1 text-sm text-gray-500 
    transition-all duration-150
    top-3.5 
    peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#F15C20]
    peer-[&:not(:placeholder-shown)]:-top-2
    peer-[&:not(:placeholder-shown)]:text-xs
  `;

  const inputClasses = (error) => `
    peer w-full rounded-xl border-2 ${error ? "border-red-500" : "border-[#F15C20]"} 
    bg-transparent px-4 py-3.5 text-black focus:border-[#F15C20] focus:outline-none transition-colors
  `;

  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Section */}
      <img src="/shad.png" alt="shad " className="absolute top-0 left-0" />
      <div className="flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
          We Are Curious About <br />
          <span className="text-[#F15C20]">You & Your Ideas</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed">
          Share your ideas with our team. As your trusted tech partner, we’ll
          guide you clearly, confidently, and collaboratively from the strategy
          to success
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={handleChange(setName, "name")}
                className={inputClasses(errors.name)}
                placeholder=" "
              />
              <label className={labelClasses}>Full Name</label>
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
                className={inputClasses(errors.email)}
                placeholder=" "
              />
              <label className={labelClasses}>Email</label>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Contact No. */}
            <div className="relative">
              <div
                className={`peer w-full rounded-xl border-2 ${errors.phone ? "border-red-500" : "border-[#F15C20]"} p-1`}
              >
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={handlePhoneChange}
                  containerStyle={{ width: "100%", background: "transparent" }}
                  inputStyle={{
                    width: "100%",
                    height: "100%",
                    outline: "none",
                    border: "none",
                    fontSize: "14px",
                    color: "black",
                    padding: "15px 12px 10px 64px",
                    background: "transparent",
                  }}
                  buttonStyle={{ background: "transparent", border: "none" }}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Choose a Service */}
            <div className="relative">
              <select
                value={service}
                onChange={handleChange(setService, "service")}
                className={`peer w-full rounded-xl border-2 border-[#F15C20] bg-transparent px-4 py-3.5 text-black appearance-none focus:border-[#F15C20] focus:outline-none transition-colors`}
              >
                <option value="" disabled hidden></option>
                <option value="Android App Development Services">
                  Android App Development Services
                </option>
                <option value="Android App Design Services">
                  Android App Design Services
                </option>
                <option value="IOS App Development Services">
                  IOS App Development Services
                </option>
                <option value="IOS App Design Services">
                  IOS App Design Services
                </option>
                <option value="Web App Development Services">
                  Web App Development Services
                </option>
                <option value="PWA Development Services">
                  PWA Development Services
                </option>
                <option value="Mobile App Support And Maintenance Services">
                  Mobile App Support And Maintenance Services
                </option>
                <option value="Hybrid App Development Services">
                  Hybrid App Development Services
                </option>
                <option value="Mobile App Development Services">
                  Mobile App Development Services
                </option>
                <option value="Mobile App Consulting Services">
                  Mobile App Consulting Services
                </option>
                <option value="Mobile App Design Services">
                  Mobile App Design Services
                </option>
                <option value="Mobile App Testing Services">
                  Mobile App Testing Services
                </option>
                <option value="Native App Development Services">
                  Native App Development Services
                </option>
              </select>
              <label className={labelClasses}>Choose a Service</label>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-[#F15C20]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Description (Project Details) */}
          <div className="relative">
            <textarea
              rows="4"
              value={message}
              onFocus={() => {
                setIsAgreed(true);
                if (errors.isAgreed) {
                  setErrors((prev) => {
                    const newErrs = { ...prev };
                    delete newErrs.isAgreed;
                    return newErrs;
                  });
                }
              }}
              onChange={handleChange(setMessage, "message")}
              className={`${inputClasses(errors.message)} resize-none`}
              placeholder=" "
            />
            <label className={labelClasses}>Description</label>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agree"
                checked={isAgreed}
                onChange={(e) => {
                  setIsAgreed(e.target.checked);
                  if (errors.isAgreed) {
                    setErrors((prev) => {
                      const newErrs = { ...prev };
                      delete newErrs.isAgreed;
                      return newErrs;
                    });
                  }
                }}
                className="mt-1.5 w-10 h-10 rounded border-gray-300 text-[#F15C20] focus:ring-[#F15C20]"
              />
              <label
                htmlFor="agree"
                className="text-sm text-gray-600 leading-relaxed cursor-pointer"
              >
                By checking this box, I consent to receive SMS messages from
                Dignite Studios at the phone number I provided. Message and data
                rates may apply. Message frequency may vary. For assistance,
                reply HELP or email us at{" "}
                <a
                  href="mailto:hello@dignitestudios.com"
                  className="text-[#F15C20] hover:underline"
                >
                  hello@dignitestudios.com
                </a>
                . You may opt out at any time by replying STOP. See our{" "}
                <Link
                  href="/terms-and-conditions"
                  className="text-[#F15C20] hover:underline"
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#F15C20] hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                for more details.
              </label>
            </div>
            {errors.isAgreed && (
              <p className="text-red-500 text-xs">{errors.isAgreed}</p>
            )}
          </div>

          <div className="flex w-full items-center group justify-center pt-4">
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:border group-hover:border-orange-600 group-hover:bg-white group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
              Talk to our experts
            </button>
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:border group-hover:border-orange-600 group-hover:bg-white group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg border-l border-white/20"
            >
              <MdArrowOutward />
            </button>
          </div>
        </form>
      </div>
      <Impact />
      <GlobalPresence />
    </div>
  );
};

export default ContactUsPage;
