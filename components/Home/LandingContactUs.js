'use client'

import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import Alert from "../global/Alert";
import Success from "../global/Success";

const LandingContactUs = () => {
  const { palette, theme, setError, error, success } = useContext(GlobalContext);
  const navigate = useRouter()
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("")
  const formatPhoneNumber = (phoneNumber) => {
    const formattedNumber = phoneNumber.replace(
      /^(\d{3})(\d{3})(\d{4})$/,
      "($1) $2-$3"
    );
    return formattedNumber;
  };

  useEffect(() => {
    setPhone(formatPhoneNumber(phone));
  }, [phone]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (formData.get("name") == "") {
      setError("Name cannot be left empty.")
    } else if (email == "") {
      setError("Email cannot be left empty.")
    } else if (!validateEmail(email)) {
      setError("Email must be a valid email.")
    }
    else if (phone == "") {
      setError("Phone number cannot be left empty.")
    }
    else if (phone.length < 10) {
      setError("Phone number must contain 10 numeric characters.")
    }
    else if (formData.get("message") == "") {
      setError("Message cannot be left empty.")

    } else {

      const data = new URLSearchParams();

      //Using entry ids from Google forms config
      data.append("entry.1883330900", formData.get("name")); // Name field
      data.append("entry.39421230", email); // Email field
      data.append("entry.769267793", formatPhoneNumber(phone)); // Phone field
      data.append("entry.1280467825", formData.get("message")); // message field

      fetch(
        `https://docs.google.com/forms/d/e/${process.env.NEXT_PUBLIC_CONTACT_US_URL}/formResponse`,
        { method: "POST", body: data, mode: "no-cors" }
      )
        .then((response) => {
          if (response) {
            navigate.push("/thank-you")
          }
        })
        .catch((error) => {
          setError("Something went wrong.")

        });
    }
  };

  return (
    <div
      className={`w-full xl:w-[100%] my-14 px-4 md:px-12 lg:px-28 xl:px-48 2xl:px-48  flex justify-center items-start  h-auto`}
    >
      <div
        className={`w-full md:h-[38rem] xl:h-[35rem] grid grid-cols-1 md:grid-cols-2 rounded-3xl ${theme == "light" ? "bg-[#E7E7E7]/[0.24]" : "bg-[#2D2D2D]"
          }`}
      >
        <div className="w-full h-full">
          <img
            loading="lazy"
            alt="cto"
            src={"/cto.webp"}
            className="w-full h-[17rem] md:h-[38rem] xl:h-[35rem] object-cover rounded-3xl "
          />
        </div>
        <div className="w-full h-full flex px-8 py-10 flex-col justify-start items-start gap-8 relative">
          <h1
            className="text-[32px] font-bold"
            style={{ color: palette?.color }}
          >
            Let’s start your project
          </h1>
          <form id="home-lead-form" onSubmit={handleSubmit} className="w-full h-auto flex flex-col justify-start items-start gap-6">
            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Name
              </span>
              <input
                type="text"
                id="name" name="name"
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="Mike Smith"
                style={{
                  borderBottom: `2px solid ${palette?.dark_contrast_color}`,
                }}
              />
            </div>

            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Email
              </span>
              <input
                type="text"
                id="email" name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="e.g John@gmail.com"
                style={{
                  borderBottom: `2px solid ${palette?.dark_contrast_color}`,
                }}
              />
            </div>
            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Phone Number
              </span>
              <input
                type="text"
                id="phone" name="phone"
                maxLength="10"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="e.g +1 491 570 156"
                style={{
                  borderBottom: `2px solid ${palette?.dark_contrast_color}`,
                }}
              />
            </div>

            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Message
              </span>
              <input
                type="text"
                id="message" name="message"
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="Enter your message here"
                style={{
                  borderBottom: `2px solid ${palette?.dark_contrast_color}`,
                }}
              />
            </div>

            <button
              name="submit-contact-us-form"
              className="orange w-[134px] h-[64px] rounded-full flex items-center font-semibold justify-center"
              style={{ background: palette?.brandOrange, color: "white" }}
            >
              Submit
            </button>
            {error && <Alert />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingContactUs;
