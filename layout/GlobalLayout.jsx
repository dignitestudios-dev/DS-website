"use client";
import React, { useState, useContext, useEffect, useRef } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/global/Sidebar";
import Footer from "@/components/Home/Footer";
import FixedSocials from "@/components/global/FixedSocials";
import Cursor from "@/components/global/Cursor";
import { FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import Alert from "@/components/global/Alert";
import ContactUsAlert from "@/components/global/ContactUsAlert";

const GlobalLayout = ({ page }) => {
  // Sidebar states and ref:
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { palette, theme, setError, error, success } =
    useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(0);

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

  const formRef = useRef();
  const handleCloseModal = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
    <div
      className="w-full transition-all duration-700"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <Cursor />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="overflow-x-hidden w-full h-auto flex flex-col justify-start items-center gap-4">
        <Navbar setIsOpen={setIsSidebarOpen} />

        <div
          onClick={handleCloseModal}
          className={`screen-form ${showModal ? "show" : "hide"}`}
        >
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="container-form"
          >
            <div className="side-promo">
              <img src="/form_promo.png" alt="sidebar_promo" className="" />
            </div>
            <div className="main-promo">
              {error && <ContactUsAlert />}
              <div className="input_field">
                <label className="label_field">Name</label>
                <button type="button" className="input_flex">
                  <span className="input_span">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input_box"
                    placeholder="e.g. Mike Smith"
                  />
                </button>
              </div>
              <div className="input_field">
                <label className="label_field">Email Address</label>
                <button type="button" className="input_flex">
                  <span className="input_span">
                    <MdMail />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input_box"
                    placeholder="Type your email here"
                  />
                </button>
              </div>
              <div className="input_field">
                <label className="label_field">Phone Number</label>
                <button type="button" className="input_flex">
                  <span className="input_span">
                    <BsTelephoneFill />
                  </span>
                  <input
                    type="text"
                    maxLength="11"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input_box"
                    placeholder="e.g +1 491 570 156"
                  />
                </button>
              </div>
              <div className="input_field">
                <label className="label_field">Message</label>
                <button type="button" className="input_flex2">
                  <textarea
                    type="text"
                    className="input_box2"
                    id="message"
                    name="message"
                    placeholder="Type your message here."
                  ></textarea>
                </button>
              </div>

              <button type="submit" className="sub_button">
                Submit
              </button>
            </div>
          </form>
        </div>
        {page}
        <Footer />
        <FixedSocials />
      </div>
    </div>
  );
};

export default GlobalLayout;
