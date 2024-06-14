"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import TopRatedNavbar from "./TopRatedNavbar";
import { GlobalContext } from "@/context/GlobalContext";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Alert from "@/components/global/Alert";

const TopRatedHero = () => {
  const { palette, setIsSidebarOpen, setError, error, theme } =
    useContext(GlobalContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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

    if (name === "") {
      setError("Name cannot be left empty.");
    } else if (email === "") {
      setError("Email cannot be left empty.");
    }
    // else if (!validateEmail(email)) {
    //     setError("Email must be a valid email.");
    // }
    else if (phone === "") {
      setError("Phone number cannot be left empty.");
    } else if (phone.length < 10) {
      setError("Phone number must contain 10 numeric characters.");
    } else if (message === "") {
      setError("Message cannot be left empty.");
    } else {
      const formData = new FormData(event.target);

      const data1 = new URLSearchParams();

      const formattedNumber = formatPhoneNumber(formData.get("phone"));
      // console.log(formattedNumber);
      //Using entry ids from Google forms config
      data1.append("entry.1883330900", formData.get("name")); // Name field
      data1.append("entry.39421230", formData.get("email")); // Email field
      data1.append("entry.769267793", formattedNumber); // Phone field
      data1.append("entry.1280467825", formData.get("message")); // message field

      fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSey02yWAqdomjEVpP8CPPYgUxb0osp6uu_E6vt_47A_0X12mQ/formResponse",
        { method: "POST", body: data1, mode: "no-cors" }
      )
        .then((response) => {
          window.location.assign("https://www.dignitestudios.com/thank-you");
        })
        .catch((error) => {
          setError("something went wrong");
        });
    }
  };

  return (
    <div className="top-rated-bg bg-black w-full lg:h-screen flex flex-col justify-start items-start z-0 relative">
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
              className={`lg:block hidden text-3xl md:text-4xl font-extrabold lg:text-[70px] xl:text-[70px] 2xl:text-[104px] md:leading-[70px] xl:leading-[72.8px]  2xl:leading-[102.8px] lg:font-bold xl:font-semibold tracking-[-2.8px] z-10 `}
            >
              <span style={{ color: palette?.brandOrange }}>Top-Rated</span>{" "}
              <span
                className={`${theme === "light" ? "text-black" : "text-white"}`}
              >
                Mobile <br /> App Development
                <br /> Agency
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
                <br /> Agency
              </span>
            </h1>
            <span
              className={`lg:w-[80%] my-2 lg:my-6 text-[13px] lg:text-base font-normal ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              Transform your mobile app development strategy with our customized
              first-class solutions. Our experts will ensure seamless
              integration, performance, and innovative features to twice your
              app's worth.
            </span>
          </div>
          <div className="w-full lg:w-[40%] flex items-center justify-center lg:justify-start">
            <div
              className={`glass-effect h-[477px] 2xl:h-[517px] w-[95%] md:w-[397px] 2xl:w-[487px] rounded-[24px] p-6 md:px-12 md:py-14 flex flex-col justify-center items-start gap-y-10`}
            >
              <h1 className="uppercase font-normal text-base 2xl:text-lg text-gray-200 z-10">
                Get in Touch With Us!
              </h1>
              <form
                id="service-page-lead-form"
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-start gap-6"
              >
                <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                  <IoPerson className="text-[#F15C20] w-[16px] h-[16px]" />
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-[#D3D3D3] text-[13px] py-2 w-full bg-transparent border-none outline-none"
                  />
                </div>
                <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                  <MdEmail className="text-[#F15C20] w-[16px] h-[16px]" />
                  <input
                    type="text"
                    placeholder="Email address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-[#D3D3D3] text-[13px] py-2 w-full bg-transparent border-none outline-none"
                  />
                </div>
                <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                  <FaPhone className="text-[#F15C20] w-[16px] h-[16px]" />
                  <input
                    type="text"
                    placeholder="Phone number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-[#D3D3D3] text-[13px] py-2 w-full bg-transparent border-none outline-none"
                  />
                </div>
                <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                  <MdEmail className="text-[#F15C20] w-[16px] h-[16px]" />
                  <input
                    type="text"
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-[#D3D3D3] text-[13px] py-2 w-full bg-transparent border-none outline-none"
                  />
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
