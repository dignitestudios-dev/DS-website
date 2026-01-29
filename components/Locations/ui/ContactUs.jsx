"use client";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import PhoneInput from "react-phone-input-2";

const ContactUs = ({pathname , header , header2 , para , btn})   => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [countryCode, setCountryCode] = useState("");
  const [isValid, setIsValid] = useState(true);

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
        { method: "POST", body: data1, mode: "no-cors" },
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
    <div className="w-full bg-gradient-to-t from-[#FFFDFA] to-[#FFFBFA] relative grid grid-cols-1  justify-start items-start md:py-20 ">
      <img
        src="/location/mobile-california/grad.png"
        width={900}
        height={900}
        alt="mobile"
        className="absolute top-0 left-0"
      />
      <div className="flex justify-center w-[80%] mx-auto lg:justify-between items-center">
        <div className="lg:w-[50%]">
          <h1 className="text-4xl font-bold">{header}</h1>
          <h1 className="text-4xl font-bold text-[#F15C20]">Let’s Talk</h1>
          <p>
            {para}
          </p>

          <div>
            <div className="space-y-6 max-w-lg mt-12">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                  className="peer w-full rounded-xl border border-orange-400 bg-transparent px-4 py-3 text-gray-800
                 focus:outline-none focus:border-orange-500"
                />
                <label
                  className="pointer-events-none absolute left-4 top-3 bg-white px-1 text-sm text-gray-700
                 transition-all duration-150
                 peer-focus:-top-2 peer-focus:scale-90 peer-focus:text-orange-500
                 peer-valid:-top-2 peer-valid:scale-90"
                >
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
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="peer w-full rounded-xl border border-orange-400 bg-transparent px-4 py-3 text-gray-800
                 focus:outline-none focus:border-orange-500"
                />
                <label
                  className="pointer-events-none absolute left-4 top-3 bg-white px-1 text-sm text-gray-700
                 transition-all duration-150
                 peer-focus:-top-2 peer-focus:scale-90 peer-focus:text-orange-500
                 peer-valid:-top-2 peer-valid:scale-90"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div class="relative"> <input type="tel"   value={phone}
                  name="phone"
                  onChange={handlePhoneChange} required class="peer w-full rounded-xl border border-orange-400 bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:border-orange-500" /> <label class="pointer-events-none absolute left-4 top-3 bg-white px-1 text-sm text-gray-700 transition-all duration-150 peer-focus:-top-2 peer-focus:text-orange-500 peer-focus:scale-90 peer-valid:-top-2 peer-valid:scale-90" > Contact No. </label> </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  rows="4"
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                  className="peer w-full rounded-xl border border-orange-400 bg-transparent px-4 py-3 text-gray-800
                 focus:outline-none focus:border-orange-500 resize-none"
                />
                <label
                  className="pointer-events-none absolute left-4 top-3 bg-white px-1 text-sm text-gray-700
                 transition-all duration-150
                 peer-focus:-top-2 peer-focus:scale-90 peer-focus:text-orange-500
                 peer-valid:-top-2 peer-valid:scale-90"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex items-center group justify-start  pt-4">
                <button
                  type="submit"
                  className="bg-[#F15C20] group-hover:bg-orange-600 text-white text-sm px-7 py-3 rounded-full transition-colors"
                >
                  {btn}
                </button>
                <button
                  type="submit"
                  className="bg-[#F15C20] group-hover:bg-orange-600 text-white w-11 h-11 rounded-full
                 flex items-center justify-center transition-colors text-lg"
                >
                  <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img
            src="/location/mobile-california/mobile.png"
            alt="mobile"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
