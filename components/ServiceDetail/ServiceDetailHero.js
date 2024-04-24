"use client"
import { GlobalContext } from '@/context/GlobalContext';
import Link from 'next/link';
import React, { useContext } from 'react'
import { BsArrowRight } from "react-icons/bs";
import Navbar from '../global/Navbar';

const ServiceDetailHero = () => {
    const { palette, theme } = useContext(GlobalContext);
    return (
        <div style={{ background: palette?.brandOrange }}>

            <Navbar />
            <div className="w-full grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-y-0 justify-start items-start lg:py-20 px-4 md:px-12 lg:px-28">
                <div className='col-span-5 flex flex-col justify-start text-center lg:text-start items-center lg:items-start gap-2'>

                    <h1
                        style={{
                            color: "white"
                        }}
                        className="lg:block hidden text-3xl font-extrabold lg:text-6xl lg:font-bold uppercase"
                    >
                        award winning mobile <br /> app development <BsArrowRight style={{ color: palette?.brandOrange }} className='inline-flex ' />  <br /> agency
                    </h1>
                    <h1
                        style={{
                            color: "white"
                        }}
                        className="lg:hidden block text-3xl font-extrabold lg:text-6xl lg:font-bold uppercase"
                    >
                        award winning mobile <br /> app development agency
                    </h1>
                    <span
                        style={{
                            color: "#fdfdfd"
                        }}
                        className=" my-2 lg:my-6 text-[16px] lg:text-[18px] font-normal"
                    >
                        Whether it's crafting a visually stunning brand identity, designing
                        immersive <br /> digital experiences, or developing strategic marketing
                    </span>

                    <div className='w-full mt-10 grid grid-cols-3 gap-8'>
                        <div className='w-full h-56 flex flex-col justify-start items-start gap-2 py-6 border-t border-[#fdfdfd]'>
                            <span style={{
                                color: "white"
                            }} className='text-4xl font-extrabold'>
                                1300+
                            </span>
                            <span style={{
                                color: "#fdfdfd"
                            }} className='text-[16px] lg:text-[17px] text-start font-normal'>Applications developed and designed</span>

                        </div>
                        <div className='w-full h-56 flex flex-col justify-start items-start gap-2 py-6 border-t border-[#fdfdfd]'>
                            <span style={{
                                color: "white"
                            }} className='text-4xl font-extrabold'>
                                300+
                            </span>
                            <span style={{
                                color: "#fdfdfd"
                            }} className='text-[16px] lg:text-[17px] text-start font-normal'>Developers & Engineers under one roof</span>

                        </div>
                        <div className='w-full h-56 flex flex-col justify-start items-start gap-2 py-6 border-t border-[#fdfdfd]'>
                            <span style={{
                                color: "white"
                            }} className='text-4xl font-extrabold'>
                                15+
                            </span>
                            <span style={{
                                color: "#fdfdfd"
                            }} className='text-[16px] lg:text-[17px] text-start font-normal'>Years in software development business</span>

                        </div>
                    </div>
                </div>
                <div className='col-span-3 w-full h-auto  bg-white shadow-md rounded-xl px-4 lg:px-10 py-4 lg:py-10'>
                    <div className="w-full h-full flex flex-col lg:col-span-1 justify-start items-start gap-8">
                        <h1
                            className="text-[32px] font-extrabold leading-tight lg:font-bold"
                            style={{ color: "black" }}
                        >Let’s discuss your <br /> project
                        </h1>
                        <div className="w-full h-auto flex flex-col justify-start items-start gap-6">
                            <div className="w-full flex flex-col gap-1 justify-start items-start">
                                <span
                                    className="text-sm font-medium"
                                    style={{ color: "black" }}
                                >
                                    Name
                                </span>
                                <input
                                    type="text"
                                    className="w-full  outline-none focus h-9 bg-transparent "
                                    placeholder="Mike Smith"
                                    style={{
                                        borderBottom: `2px solid #D1D1D1`,
                                    }}
                                />
                            </div>

                            <div className="w-full flex flex-col gap-1 justify-start items-start">
                                <span
                                    className="text-sm font-medium"
                                    style={{ color: "black" }}
                                >
                                    Email
                                </span>
                                <input
                                    type="email"
                                    className="w-full  outline-none focus h-9 bg-transparent "
                                    placeholder="e.g John@gmail.com"
                                    style={{
                                        borderBottom: `2px solid #D1D1D1`,

                                    }}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1 justify-start items-start">
                                <span
                                    className="text-sm font-medium"
                                    style={{ color: "black" }}
                                >
                                    Phone Number
                                </span>
                                <input
                                    type="text"
                                    className="w-full  outline-none focus h-9 bg-transparent "
                                    placeholder="e.g 0491 570 156"
                                    style={{
                                        borderBottom: `2px solid #D1D1D1`,

                                    }}
                                />
                            </div>

                            <div className="w-full flex flex-col gap-1 justify-start items-start">
                                <span
                                    className="text-sm font-medium"
                                    style={{ color: "black" }}
                                >
                                    Message
                                </span>
                                <input
                                    type="text"
                                    className="w-full  outline-none focus h-9 bg-transparent "
                                    placeholder="Enter your message here"
                                    style={{
                                        borderBottom: `2px solid #D1D1D1`,

                                    }}
                                />
                            </div>

                            <button
                                name="submit-contact-us-form"
                                className="w-[134px] h-[64px] rounded-full flex items-center font-semibold justify-center"
                                style={{ background: palette?.brandOrange, color: "white" }}
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
}

export default ServiceDetailHero
