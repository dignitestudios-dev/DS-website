"use client";
import Alert from "@/components/global/Alert";
import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { usePathname } from "next/navigation";
import customLoader from "@/lib/custom-loader";

const TopRatedAppDevelopmentContactSection = () => {
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
  console.log("pathname >> ", pathname);

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
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-start w-full my-6 md:my-12 lg:my-24">
      <div
        className={`w-full ${
          theme == "dark" ? "bg-[#393939]" : "bg-[#F9F9F9]"
        }  rounded-[28px] grid grid-cols-3 gap-x-10`}
      >
        <form
          id="service-page-lead-form"
          onSubmit={handleSubmit}
          className="col-span-3 xl:col-span-2 flex flex-col items-start gap-8 p-4 2xl:gap-10 lg:p-12 2xl:p-24"
        >
          <h1 className="text-[34px] lg:text-[56px] 2xl:text-[60px] font-semibold tracking-0 lg:tracking-[-3.2px] leading-normal lg:leading-[65.35px] 2xl:leading-[70px]">
          Let’s Transform Your Business In The Digital Arena Of Latest Technologies
          </h1>
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
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Name<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 bg-transparent"
                placeholder="Enter name"
                style={{ borderBottom: "1px solid silver" }}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="email" className="text-base font-medium">
                Email address<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 bg-transparent"
                placeholder="Enter email address"
                style={{ borderBottom: "1px solid silver" }}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="phone" className="text-base font-medium">
                Phone number<span className="text-[#E94C42]">*</span>
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
                    borderBottom: "1px solid silver",
                    borderRadius: "0px",
                    background: "transparent",
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
                    background: "transparent",
                  }}
                  className="text-sm font-normal outline-none py-0 px-1 bg-transparent border border-t-0 border-r-0 border-l-0 border-b"
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
              <input
                type="text"
                name="message"
                value={message}
                onChange={handleMessageChange}
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 bg-transparent"
                placeholder="Type here"
                style={{ borderBottom: "1px solid silver" }}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              name="form-submit-button"
              className=" text-white text-[13px] font-semibold px-8 py-4 rounded-full float-end hover:opacity-[.75] transition-all duration-300"
              style={{ background: "#F15C20" }}
            >
              Submit
            </button>
          </div>
          {error && <Alert />}
        </form>

        <div className="col-span-3 lg:col-span-1 hidden xl:flex items-center justify-center p-4 pt-0 lg:p-0">
          <Image
            loader={customLoader}
            src="/top-rated-contact-mockup.webp"
            width={402}
            height={361}
            alt="top-rated-contact-mockup"
            className="lg:w-[402px] lg:h-[361px] 2xl:h-[400px] 2xl:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopRatedAppDevelopmentContactSection;
