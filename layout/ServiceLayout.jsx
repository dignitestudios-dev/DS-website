"use client";
import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/global/Sidebar";
import Footer from "@/components/Home/Footer";
import FixedSocials from "@/components/global/FixedSocials";
import Cursor from "@/components/global/Cursor";

const ServicesLayout = ({ page }) => {
  // Sidebar states and ref:
  const { palette, isSidebarOpen, setIsSidebarOpen } =
    useContext(GlobalContext);
  // const [showModal, setShowModal] = useState(false);
  // const [scrolledToBottom, setScrolledToBottom] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //       setScrolledToBottom(true);
  //     }
  //   };

  //   const handleMouseLeave = (e) => {
  //     if (scrolledToBottom) {
  //       setShowModal(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   document.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     document.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, [scrolledToBottom]);

  // useEffect(() => {
  //   console.log(showModal);
  // }, [showModal]);

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };
  return (
    <div
      className="w-full transition-all duration-700"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      {/* {showModal && (
        <div
          className={`fixed top-[50vh] w-auto h-auto  z-50  `}
          style={{
            position: "fixed",
            top: "15%",
            left: "38%",
            zIndex: "5000",
            transition: "all",
            scale: showModal ? "1" : "0",
            transitionDuration: "5s",
          }}
        >
          <div id="registration-form">
            <div class="fieldset">
              <legend>Wanna be Cool?!</legend>
              <form action="#" method="post" data-validate="parsley">
                <div class="row">
                  <label for="firstname">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    id="firstname"
                    data-required="true"
                    data-error-message="Your First Name is required"
                  />
                </div>
                <div class="row">
                  <label for="email">E-mail</label>
                  <input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    data-required="true"
                    data-type="email"
                    data-error-message="Your E-mail is required"
                  />
                </div>
                <div class="row">
                  <label for="cemail">Confirm your E-mail</label>
                  <input
                    type="text"
                    placeholder="Confirm your E-mail"
                    name="cemail"
                    data-required="true"
                    data-error-message="Your E-mail must correspond"
                  />
                </div>
                <input type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      )} */}
      <Cursor />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="overflow-x-hidden w-full h-auto flex flex-col justify-start items-center gap-4">
        {page}
        <Footer />
        <FixedSocials />
      </div>
    </div>
  );
};

export default ServicesLayout;
