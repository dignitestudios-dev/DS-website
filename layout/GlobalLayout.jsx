"use client";
import React, { useState, useContext, useEffect, useRef } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/global/Sidebar";
import Footer from "@/components/Home/Footer";
import FixedSocials from "@/components/global/FixedSocials";
import Cursor from "@/components/global/Cursor";
import { FaCross, FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import Alert from "@/components/global/Alert";
import ContactUsAlert from "@/components/global/ContactUsAlert";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";
import ScrollToTopButton from "@/components/global/ScrollToTopButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import useDeviceType from "@/components/global/DeviceTypeFunction";
import Link from "next/link";

const GlobalLayout = ({ page }) => {
  // Sidebar states and ref:
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const { palette, isSidebarOpen, setIsSidebarOpen } =
    useContext(GlobalContext);
  const { theme, setError, error, success } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const pathname = usePathname();
  console.log("pathname >> ", pathname);
  const deviceType = useDeviceType();

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && window.innerWidth > 1000) {
        setShowModal(true);
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  useEffect(() => {
    if (window.innerWidth < 780) {
      setTimeout(() => {
        setShowModal(true);
      }, 7000);
    }
  }, []);

  const formRef = useRef();
  const handleCloseModal = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const validateName = (name) => {
    return name.length > 0;
  };

  const validatePhone = (phone) => {
    return phone.length === 10;
  };

  const validateMessage = (message) => {
    return message.length > 0;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formatPhoneNumber = (phoneNumber) => {
    const formattedNumber = phoneNumber.replace(
      /^(\d{3})(\d{3})(\d{4})$/,
      "($1) $2-$3",
    );
    return formattedNumber;
  };

  const [countryCode, setCountryCode] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handlePhoneChange = (value, country) => {
    setPhone(value);
    setCountryCode(country.dialCode);

    // Validate the phone number
    if (!value.startsWith(`+${country.dialCode}`)) {
      setIsValid(false);
      console.log("phone >> ", phone);
    } else {
      setIsValid(true);
      console.log("phone >> ", phone);
    }
  };

  const handleIsAgreedChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    // const phone = formData.get("phone");
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
    } else if (phone.length < 11) {
      newErrors.phone = "Phone number can not be less than 10 digits.";
    } else if (phone.length > 15) {
      newErrors.phone = "Phone number can not be more than 11 digits.";
    }
    if (message === "") {
      newErrors.message = "Message cannot be left empty.";
    }
    if (!isAgreed) {
      newErrors.isAgreed = "Please check the box.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // const formattedNumber = formatPhoneNumber(phone);

      const data1 = new URLSearchParams();
      //Using entry ids from Google forms config
      data1.append("entry.1883330900", name); // Name field
      data1.append("entry.39421230", email); // Email field
      data1.append("entry.769267793", phone); // Phone field
      data1.append("entry.1280467825", message); // Message field
      data1.append("entry.764492805", `Popup Form - ${pathname}`); // Page field
      data1.append("entry.1359192276", `Device Type - ${deviceType}`); // Device type field
      data1.append("entry.357568185", `URL Parameter - _blank`); // URL Parameter field

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
  return (
    <div
      className="w-full transition-all relative  duration-700"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <Cursor />
      <ScrollToTopButton />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="w-full h-auto  flex flex-col justify-start items-center">
        <Navbar setIsOpen={setIsSidebarOpen} />
        <div className="pt-20" />
        <div
          onClick={handleCloseModal}
          className={`screen-form ${showModal ? "show" : "hide"}`}
        >
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="container-form"
            id="popup-form"
          >
            <div className="side-promo">
              <Image
                loader={customLoader}
                width={400}
                height={540}
                src="/form-promo3.webp"
                alt="popup form image"
                title="popup form image"
                className=""
              />
            </div>
            <div className="main-promo overflow-y-auto hide-scrollbar">
              <div className="promo2">
                <h2 className="heading_promo2">before you leave</h2>
                <span className="sub_promo2">Sign up now for a free quote</span>
                <span className="box_promo2">Upto 25% OFF</span>
              </div>
              {error && <ContactUsAlert />}
              <span onClick={() => setShowModal(false)} className="close_icon">
                <RxCross2 />
              </span>
              {/* <span className="hidden">Name:</span>{" "}
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
              /> */}
              <div className="input_field">
                <label className="label_field">Name</label>
                <button type="button" className="input_flex">
                  <span className="input_span">
                    <FaUser
                      className={`${
                        isFocused1 ? "text-orange-500" : "text-gray-400"
                      }`}
                    />
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setIsFocused1(true)}
                    onBlur={() => setIsFocused1(false)}
                    className="input_box text-black"
                    placeholder="e.g. Mike Smith"
                  />
                </button>
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>
              <div className="input_field">
                <label className="label_field">Email Address</label>
                <button type="button" className="input_flex">
                  <span className="input_span">
                    <MdMail
                      className={`${
                        isFocused2 ? "text-orange-500" : "text-gray-400"
                      }`}
                    />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused2(true)}
                    onBlur={() => setIsFocused2(false)}
                    className="input_box text-black"
                    placeholder="Type your email here"
                  />
                </button>
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
              <div className="input_field">
                <label className="label_field">Phone Number 231</label>
                <button type="button" className="input_flex">
                  {/* <span className="input_span">
                    <BsTelephoneFill
                      className={`${
                        isFocused3 ? "text-orange-500" : "text-gray-400"
                      }`}
                    />
                  </span> */}
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    name="phone"
                    onChange={handlePhoneChange}
                    onFocus={() => setIsFocused3(true)}
                    onBlur={() => setIsFocused3(false)}
                    containerStyle={{
                      width: "100%",
                      paddingRight: "0px",
                      fontSize: "16px",
                      border: "none",
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
                      padding: "10px 30px",
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
                  {/* <input
                    type="number"
                    maxLength="11"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onFocus={() => setIsFocused3(true)}
                    onBlur={() => setIsFocused3(false)}
                    className="input_box text-black"
                    placeholder="e.g +1 491 570 156"
                  /> */}
                </button>
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>
              <div className="input_field">
                <label className="label_field">Message</label>
                <button type="button" className="input_flex2">
                  <textarea
                    type="text"
                    className="input_box2 text-black"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    placeholder="Type your message here."
                  ></textarea>
                </button>
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message}</span>
                )}
              </div>

              <div>
                <div className="flex items-start gap-2">
                  <label
                    htmlFor="agree"
                    className="text-sm flex items-start gap-2"
                  >
                    <input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      checked={isAgreed}
                      onChange={handleIsAgreedChange}
                      className="mt-1 text-base"
                    />
                    <p>
                      By checking this box, I consent to receive SMS messages
                      from Dignite Studios at the phone number I provided.
                      Message and data rates may apply. Message frequency may
                      vary. For assistance, reply HELP or email us at
                      hello@dignitestudios.com. You may opt out at any time by
                      replying STOP. See our{" "}
                      <Link
                        href="/terms-and-conditions"
                        className="text-blue-600"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy" className="text-blue-600">
                        Privacy Policy
                      </Link>{" "}
                      for more details.
                    </p>
                  </label>
                </div>
                {errors.isAgreed && (
                  <span className="text-red-500 text-sm">
                    {errors.isAgreed}
                  </span>
                )}
              </div>

              <button type="submit" className="sub_button">
                Submit
              </button>
            </div>
          </form>
        </div>

        {page}

        <Footer />
        {/* <FixedSocials /> */}
      </div>
    </div>
  );
};

export default GlobalLayout;
