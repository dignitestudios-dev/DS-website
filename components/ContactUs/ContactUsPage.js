"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import Alert from "../global/Alert";
import ContactUsAlert from "../global/ContactUsAlert";
import PhoneInput from "react-phone-input-2";

const ContactUsPage = () => {
  const { palette, theme, setError, error } = useContext(GlobalContext);
  const navigate = useRouter();
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

  // const handlePhoneChange = (value, country) => {
  //   setPhone(value);
  //   setCountryCode(country.dialCode);

  //   if (!value.startsWith(`+${country.dialCode}`)) {
  //     setIsValid(false);
  //   } else {
  //     setIsValid(true);
  //   }
  // };

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
    <div
      className="w-full h-auto flex flex-col gap-4 justify-start items-start px-4 md:px-12 pt-6 lg:px-28 xl:px-[120px] 2xl:px-48"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <h1 className="text-[45px] font-extrabold lg:text-5xl xl:text-[64px] lg:font-bold uppercase">
        Let’s Manifest Your <br /> Dream Project
      </h1>
      <p className="text-[18px] w-[70%] font-light ">
        Dignite Studios is all set to dispense unprecedented services to propel
        your business insights to new heights. Whether you are in the middle of
        your idea or on the verge of your business, we set the seal to explicit
        updated strategies, engaging functions, and producing extraordinary user
        interfaces. Fill out the form below to get started now.
      </p>

      <div
        className={`w-full h-auto my-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl `}
      >
        <div className="w-full h-full flex flex-col lg:col-span-1 justify-start items-start gap-8 relative">
          <h2
            className="text-[39px] xl:text-[40px] font-extrabold lg:text-[45px] leading-tight lg:font-bold"
            style={{ color: palette?.color }}
          >
            Let’s discuss your <br />{" "}
            <span style={{ color: palette?.brandOrange }}> project</span>
          </h2>
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
              {/* <input
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
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>} */}
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="Enter your name"
                id="name"
                style={{
                  borderBottom: `2px solid ${
                    theme == "light"
                      ? "#D1D1D1"
                      : palette?.dark_contrast_background
                  }`,
                }}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>

            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Email
              </span>
              {/* <input
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
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>} */}
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
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
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Phone Number
              </span>
              {/* <input
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
              /> */}
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
                    textAlign: "start",
                    color: "black",
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

            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Message
              </span>
              {/* <input
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
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>} */}
              <input
                type="text"
                name="message"
                value={message}
                onChange={handleMessageChange}
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
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
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

      <div className="w-full mb-6">
        <h2 className="text-3xl font-bold">Follow Us</h2>
        <p className="text-[18px] w-[70%] font-light mt-1">
          Stay connected with us on LinkedIn, Twitter, and Facebook to get the
          latest updates on our forthcoming.
        </p>

        <h2 className="text-3xl font-bold mt-6">Join Us Today</h2>
        <p className="text-[18px] w-[70%] font-light mt-1">
          Dignite Studios is overwhelmed to onboard valuable clients and
          partners to bestow pre-eminent solutions and establish futuristic
          goals with long-lasting relations.
        </p>
      </div>
    </div>
  );
};

export default ContactUsPage;
