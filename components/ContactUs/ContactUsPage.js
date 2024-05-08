"use client"
import { GlobalContext } from '@/context/GlobalContext'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const ContactUsPage = () => {
    const { palette, theme, setError } = useContext(GlobalContext)
    const navigate = useRouter()
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        if (formData.get("name") == "") {
            setError("Name cannot be left empty.")
        } else if (formData.get("email") == "") {
            setError("Email cannot be left empty.")
        } else if (!validateEmail(formData.get("email"))) {
            setError("Email must be a valid email.")
        }
        else if (formData.get("phone") == "") {
            setError("Phone number cannot be left empty.")
        }
        else if (formData.get("message") == "") {
            setError("Message cannot be left empty.")

        } else {

            const data = new URLSearchParams();

            //Using entry ids from Google forms config
            data.append("entry.1883330900", formData.get("name")); // Name field
            data.append("entry.39421230", formData.get("email")); // Email field
            data.append("entry.769267793", formData.get("phone")); // Phone field
            data.append("entry.1280467825", formData.get("message")); // message field

            fetch(
                `https://docs.google.com/forms/d/e/${process.env.NEXT_PUBLIC_SUBSCRIBE_URL}/formResponse`,
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
        <div className='w-full h-auto flex flex-col gap-4 justify-start items-start px-4 md:px-12 lg:px-28 xl:px-48' style={{
            background: palette?.background,
            color: palette?.color
        }}>
            <h1 className='text-[45px] font-extrabold lg:text-5xl xl:text-5xl lg:font-bold uppercase'>Contact Us</h1>
            <p className='text-[18px] font-light '>

                If there is anything you would like to talk about, please feel free to contact us. Even if you just want to say hello, we look forward to hearing from you.
            </p>


            <div
                className={`w-full h-auto my-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl `}
            >
                <div className="w-full h-full flex flex-col lg:col-span-1 justify-start items-start gap-8">
                    <h1
                        className="text-[39px] xl:text-[34px] font-extrabold lg:text-[45px] leading-tight lg:font-bold"
                        style={{ color: palette?.color }}
                    >Let’s discuss your <br /> <span style={{ color: palette?.brandOrange }}> project</span>
                    </h1>
                    <form id='contact-lead-form' onSubmit={handleSubmit} className="w-full h-auto flex flex-col justify-start items-start gap-6">
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
                                placeholder="e.g. Mike Smith"
                                id="name" name="name"
                                style={{
                                    borderBottom: `2px solid ${theme == "light" ? "#D1D1D1" : palette?.dark_contrast_background}`,
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
                                type="email"
                                id="email" name="email"
                                className="w-full  outline-none focus h-9 bg-transparent "
                                placeholder="e.g John@gmail.com"
                                style={{
                                    borderBottom: `2px solid ${theme == "light" ? "#D1D1D1" : palette?.dark_contrast_background}`,

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
                                className="w-full  outline-none focus h-9 bg-transparent "
                                placeholder="e.g 0491 570 156"
                                style={{
                                    borderBottom: `2px solid ${theme == "light" ? "#D1D1D1" : palette?.dark_contrast_background}`,

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
                                    borderBottom: `2px solid ${theme == "light" ? "#D1D1D1" : palette?.dark_contrast_background}`,

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
                    </form>

                </div>
                <div className="w-full h-full lg:col-span-2">
                    <img
                        src={"/contact-us-main.png"}
                        className="w-full h-full "
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage