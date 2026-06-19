"use client";

import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const AppMarketingServicesCTA = () => {
    return (
        <section className="w-full bg-white py-20 overflow-hidden">
            <div className="max-w-[1340px] mx-auto px-4">
                <div
                    className="relative overflow-hidden rounded-[32px]  px-8 md:px-14 lg:px-20 py-12"
                    style={{
                        background:
                            "linear-gradient(90deg, #1C1C1C 0%, #060606 45%, #2E2E2E 100%)",
                    }}
                >
                    {/* Orange Glow */}
                    <div className="absolute -bottom-32 -right-24 w-[500px] h-[350px] rounded-full bg-[#F15C20]/80 blur-[130px]" />

                    {/* Dots */}
                    <div
                        className="absolute bottom-0 right-0 w-[55%] h-[60%] opacity-20 pointer-events-none"
                        style={{
                            backgroundImage:
                                "radial-gradient(#ffffff 1px, transparent 1px)",
                            backgroundSize: "8px 8px",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
                        {/* Left */}
                        <div className="max-w-[540px] text-center lg:text-left">
                            <h2 className="text-white text-[45px] md:text-[55px] font-bold leading-[1.05]">
                                Ready to Grow Your
                                <br />
                                <span className="text-[#F15C20]">Mobile App?</span>
                            </h2>

                            <p className="text-white/70 mt-5 text-base leading-relaxed">
                                It’s completely fair to overthink your decision because
                                choosing a mobile application development Boston team is a big
                                decision. Let’s talk through if you have questions or concerns
                                before moving forward.
                            </p>

                            <Link
                                href="/contact-us"
                                className="inline-flex items-center mt-8 group"
                            >
                                <span className="h-[54px] px-8 rounded-full bg-[#F15C20] text-white font-medium flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#F15C20]">
                                    Request a free call
                                </span>

                                <span className="ml-2 w-[54px] h-[54px] rounded-full bg-[#F15C20] text-white flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#F15C20]">
                                    <MdArrowOutward size={20} />
                                </span>
                            </Link>
                        </div>

                        {/* Right Image */}
                        <div className="hidden lg:flex justify-end items-end self-end">
                            <Image
                                src="/services/app-marketing-services/cta.webp"
                                alt="Mobile App"
                                width={450}
                                height={620}
                                priority
                                className="w-[450px] h-auto object-contain translate-y-20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppMarketingServicesCTA;