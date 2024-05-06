"use client"
import { GlobalContext } from '@/context/GlobalContext'
import React, { useContext } from 'react'

const ContactUsPage = () => {
    const { palette, theme } = useContext(GlobalContext)
    return (
        <div className='w-full h-auto flex flex-col gap-4 justify-start items-start px-4 md:px-12 lg:px-28' style={{
            background: palette?.background,
            color: palette?.color
        }}>
            <h1 className='text-[45px] font-extrabold lg:text-[64px]  lg:font-bold uppercase'>Contact Us</h1>
            <p className='text-[18px] font-light '>

                If there is anything you would like to talk about, please feel free to contact us. Even if you just want to say hello, we look forward to hearing from you.
            </p>


            <div
                className={`w-full h-auto my-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl `}
            >
                <div className="w-full h-full flex flex-col lg:col-span-1 justify-start items-start gap-8">
                    <h1
                        className="text-[39px] font-extrabold lg:text-[45px] leading-tight lg:font-bold"
                        style={{ color: palette?.color }}
                    >Let’s discuss your <br /> <span style={{ color: palette?.brandOrange }}> project</span>
                    </h1>
                    <div className="w-full h-auto flex flex-col justify-start items-start gap-6">
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
                                placeholder="Mike Smith"
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
                    </div>

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