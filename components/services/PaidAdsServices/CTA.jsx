"use client";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const CTA = ({ title, desc, btnText, btnLink, image }) => {
    return (
        <section className="w-full bg-[#FFFFFF] py-20 flex justify-center items-center overflow-hidden">
            <div className="relative w-full max-w-[1240px] px-4 md:px-0">

                {/* Main CTA Container */}
                <div className="w-full min-h-[444px] rounded-[32px] border border-[#EDEFF3] flex flex-col items-start justify-center p-8 lg:p-[60px] relative overflow-hidden shadow-xl"
                    style={{ background: "linear-gradient(250deg, #3D3D3D 0%, #0C0C0C 51%, #3D3D3D 100%)" }}>

                    {/* Radial Gradient Overlay */}
                    <div className="absolute inset-0 pointer-events-none"
                        style={{ background: "radial-gradient(172.32% 354.16% at 5.1% 8.18%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.03) 100%)" }}>
                    </div>

                    {/* Background Image Overlay */}
                    {image && (
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        ></div>
                    )}

                    {/* Content Wrapper */}
                    <div className="flex flex-col items-start justify-center gap-[25px] w-[50%]  relative z-10">

                        {/* Title */}
                        <h2 className="font-bold text-[36px] md:text-[45px] leading-[105%] tracking-[-0.04em] text-white opacity-85 text-start">
                            {title || <>Ready to Accelerate <br className="hidden md:block" /> Your Business Growth?</>}
                        </h2>

                        {/* Paragraph */}
                        <p className="font-normal text-[16px] leading-[120%] tracking-[-0.014em] text-white opacity-70 text-start w-full">
                            {desc || "It’s completely fair to overthink your decision because choosing a team is a big decision. Let’s talk through if you have questions or concerns before moving forward."}
                        </p>

                        {/* Button */}
                        <div className="mt-[10px]">
                            <Link href={btnLink || "/contact-us"} className="flex items-center group w-fit">
                                <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-[14px] font-medium px-[30px] py-[15px] rounded-full transition-colors h-[52px] flex items-center justify-center">
                                    {btnText || "Request a free call"}
                                </button>
                                <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-[52px] h-[52px] rounded-full flex items-center justify-center transition-colors text-lg z-10 border border-[#F15C20]">
                                    <MdArrowOutward />
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
