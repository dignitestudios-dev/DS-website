"use client";
import Alert from "@/components/global/Alert";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext, useState } from "react";

const TopRatedAppDevelopmentContactSection = () => {
  const { palette, theme, setIsSidebarOpen, setError, error } = useContext(GlobalContext);
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
    <div className="px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-4 justify-start items-start w-full my-6 md:my-12 lg:my-24">
      <div className={`w-full ${theme == "dark" ? "bg-[#393939]" : "bg-[#F9F9F9]"} p-4 lg:p-12 rounded-[28px] grid grid-cols-3 gap-10`}>
        <form onSubmit={handleSubmit} className="col-span-3 lg:col-span-2 flex flex-col items-start gap-8">
          <h1 className="text-[34px] lg:text-[64px] font-semibold tracking-0 lg:tracking-[-3.2px]">
            Let’s build an awesome project together!
          </h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Name<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Enter name"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Email address<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="name" className="text-base font-medium">
                Phone number<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Enter phone number"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-1">
              <label htmlFor="message" className="text-base font-medium">
                Message<span className="text-[#E94C42]">*</span>
              </label>
              <input
                type="text"
                name="message"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                className="text-sm font-normal placeholder:text-[#838383] outline-none w-full border border-t-0 border-r-0 border-l-0 py-2 px-1 border-b bg-transparent"
                placeholder="Type here"
              />
            </div>
          </div>
          <div className="w-full">
            <button type="submit" className="bg-[#F15C20] text-white text-[13px] font-semibold px-8 py-4 rounded-full float-end hover:opacity-[.75] transition-all duration-300">
              Submit
            </button>
          </div>
          {error && <Alert/>}
        </form>

        <duv className="col-span-3 lg:col-span-1 flex items-center justify-center">
          <Image
            src={"/top-rated-contact-mockup.png"}
            loader={customLoader}
            width={402}
            height={361}
          />
        </duv>
      </div>
    </div>
  );
};

export default TopRatedAppDevelopmentContactSection;
