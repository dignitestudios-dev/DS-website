"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import Alert from "../global/Alert";
import ContactUsAlert from "../global/ContactUsAlert";

const ContactUsPage = () => {
  const { palette, theme, setError, error } = useContext(GlobalContext);
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
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
    <div
      className="w-full h-auto flex flex-col gap-4 justify-start items-start px-4 md:px-12 pt-6 lg:px-28 xl:px-[120px] 2xl:px-48"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <h1 className="text-[45px] font-extrabold lg:text-5xl xl:text-[64px] lg:font-bold uppercase">
        Contact Us
      </h1>
      <p className="text-[18px] w-[70%] font-light ">
        If there is anything you would like to talk about, please feel free to
        contact us. Even if you just want to say hello, we look forward to
        hearing from you.
      </p>

      <div
        className={`w-full h-auto my-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl `}
      >
        <div className="w-full h-full flex flex-col lg:col-span-1 justify-start items-start gap-8 relative">
          <h1
            className="text-[39px] xl:text-[40px] font-extrabold lg:text-[45px] leading-tight lg:font-bold"
            style={{ color: palette?.color }}
          >
            Let’s discuss your <br />{" "}
            <span style={{ color: palette?.brandOrange }}> project</span>
          </h1>
          <form
            id="contact-lead-form"
            onSubmit={handleSubmit}
            className="w-full h-auto flex flex-col justify-start items-start gap-6"
          >
            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Name
              </span>
              <input
                type="text"
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="Enter your name"
                id="name"
                name="name"
                style={{
                  borderBottom: `2px solid ${
                    theme == "light"
                      ? "#D1D1D1"
                      : palette?.dark_contrast_background
                  }`,
                }}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>

            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Email
              </span>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="Enter your email"
                style={{
                  borderBottom: `2px solid ${
                    theme == "light"
                      ? "#D1D1D1"
                      : palette?.dark_contrast_background
                  }`,
                }}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Phone Number
              </span>
              <input
                type="number"
                id="phone"
                name="phone"
                maxLength="11"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="Enter phone number"
                style={{
                  borderBottom: `2px solid ${
                    theme == "light"
                      ? "#D1D1D1"
                      : palette?.dark_contrast_background
                  }`,
                }}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
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
                id="message"
                name="message"
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="Enter your message here"
                style={{
                  borderBottom: `2px solid ${
                    theme == "light"
                      ? "#D1D1D1"
                      : palette?.dark_contrast_background
                  }`,
                }}
              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </div>

            <button
              name="submit-contact-us-form"
              className="orange w-[134px] h-[64px] rounded-full flex items-center font-semibold justify-center"
              style={{ background: palette?.brandOrange, color: "white" }}
            >
              Submit
            </button>
            {error && <ContactUsAlert />}
          </form>
        </div>
        <div className="w-full h-full lg:col-span-2">
          <img src={"/contact-us-main.png"} className="w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
