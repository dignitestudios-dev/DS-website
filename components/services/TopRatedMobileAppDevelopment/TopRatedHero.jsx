"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import TopRatedNavbar from "./TopRatedNavbar";
import { GlobalContext } from "@/context/GlobalContext";
import { IoCall, IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Alert from "@/components/global/Alert";
import { FiArrowUpRight } from "react-icons/fi";
import { usePathname } from "next/navigation";

const TopRatedHero = () => {
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
      console.log("name >> ", name);
      console.log("email >> ", email);
      console.log("phone >> ", phone);
      console.log("message >> ", message);
      console.log("pathname >> ", pathname);

      fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSey02yWAqdomjEVpP8CPPYgUxb0osp6uu_E6vt_47A_0X12mQ/formResponse",
        { method: "POST", body: data1, mode: "no-cors" },
      )
        .then((response) => {
          console.log("response >> ", response);
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
    <div className="top-rated-bg bg-black w-full flex flex-col justify-start items-start pt-28 md:pt-40 z-0 relative">
      {theme === "light" ? (
        <div className="apply-overlay-light" />
      ) : (
        <div className="apply-overlay-dark" />
      )}
      <TopRatedNavbar setIsOpen={setIsSidebarOpen} />
      <div className="w-full flex lg:h-[calc(100%-5rem)] py-6 lg:py-0 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 z-10 relative">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-y-12">
          <div className="w-full lg:w-[60%] h-full flex flex-col justify-center text-center lg:text-start items-center lg:items-start gap-2 ">
            <h1
              style={{
                color: "#fff",
              }}
              className={`lg:block hidden text-3xl md:text-4xl font-extrabold lg:text-[70px] xl:text-[70px] 2xl:text-[104px] md:leading-[70px] xl:leading-[72.8px]  2xl:leading-[102.8px] lg:font-bold xl:font-semibold 2xl:font-bold tracking-[-2.8px] z-10 `}
            >
              <span style={{ color: palette?.brandOrange }}>Top-Rated</span>{" "}
              <span
                className={`${theme === "light" ? "text-black" : "text-white"}`}
              >
                Mobile <br /> App Development
                <br /> Services
              </span>
            </h1>
            <h1
              style={{
                color: "#fff",
              }}
              className="lg:hidden block text-3xl font-extrabold lg:text-5xl lg:font-bold "
            >
              <span style={{ color: palette?.brandOrange }}>Top-Rated</span>{" "}
              <span
                className={`${theme === "light" ? "text-black" : "text-white"}`}
              >
                Mobile <br /> App Development
                <br /> Services
              </span>
            </h1>
            <span
              className={`lg:w-[80%] my-2 lg:my-6 text-[13px] lg:text-base 2xl:text-lg font-normal ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              Transform your mobile app development strategy with our customized
              first-class solutions. Our experts will ensure seamless
              integration, performance, and innovative features to twice your
              app's worth.
            </span>
            <div className="w-full flex items-center justify-center gap-4 mt-1 lg:hidden">
              <Link
                href={"tel:877714-1770"}
                // onClick={() => navigateTo("/contact-us")}
                className={`text-sm rounded-full font-medium text-white bg-orange-600 w-[147px] h-[48px] outline-none flex items-center justify-center gap-1`}
              >
                <IoCall className="text-base" /> (877) 714-1770
              </Link>
              <Link
                href={"/contact-us"}
                className={`text-sm rounded-full font-medium text-white bg-orange-600 w-[147px] h-[48px] outline-none flex items-center justify-center gap-1`}
              >
                Contact Us <FiArrowUpRight className="text-base" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex items-center justify-center lg:justify-start relative">
            <div
              className={`glass-effect min-h-[477px] 2xl:min-h-[517px] w-[95%] md:w-[397px] 2xl:w-[487px] rounded-[24px] p-6 md:px-12 md:py-14 flex flex-col justify-center items-start gap-y-10`}
            >
              <h1 className="uppercase font-normal text-base 2xl:text-lg text-gray-200 z-10">
                Get in Touch With Us!
              </h1>
              <form
                id="service-page-lead-form"
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-start gap-6"
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
                <div className="w-full">
                  <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                    <IoPerson className="text-[#F15C20] w-[16px] h-[16px]" />
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleNameChange}
                      className="text-sm font-normal text-[#D3D3D3] outline-none w-full py-2 px-1 bg-transparent"
                      placeholder="Enter name"
                    />
                  </div>
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name}</span>
                  )}
                </div>
                <div className="w-full">
                  <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                    <MdEmail className="text-[#F15C20] w-[16px] h-[16px]" />
                    <input
                      type="email"
                      name="email"
                      id="ppc_email"
                      value={email}
                      onChange={handleEmailChange}
                      className="text-sm font-normal text-[#D3D3D3] outline-none w-full py-2 px-1 bg-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>
                <div className="w-full">
                  <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                    <FaPhone className="text-[#F15C20] w-[16px] h-[16px]" />
                    <input
                      type="text"
                      id="ppc_phoneNumber"
                      placeholder="Phone number"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="text-[#D3D3D3] text-[13px] py-2 w-full bg-transparent border-none outline-none"
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone}</span>
                  )}
                </div>
                <div className="w-full">
                  <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                    <MdEmail className="text-[#F15C20] w-[16px] h-[16px]" />
                    {/* <input
                    type="text"
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-[#D3D3D3] text-[13px] py-2 w-full bg-transparent border-none outline-none"
                  /> */}
                    <input
                      type="text"
                      name="message"
                      value={message}
                      onChange={handleMessageChange}
                      className="text-sm font-normal text-[#D3D3D3] outline-none w-full py-2 px-1 bg-transparent"
                      placeholder="Type here"
                      // style={{ borderBottom: "1px solid silver" }}
                    />
                  </div>
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message}
                    </span>
                  )}
                </div>
                <div className="w-full mt-3">
                  <button
                    type="submit"
                    className="w-full text-white bg-[#F15C20] py-[12px] rounded-full"
                  >
                    Submit
                  </button>
                </div>
                {error && <Alert />}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedHero;
