import ContactButton from '@/components/global/ContactButton'
import React from 'react'
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
export default function DevelopmentCard() {
    return (
        <div className="global-padding-horizontal" >
            <div className="w-full grid grid-cols-1 px-20 lg:grid-cols-2 gap-x-6 gap-y-10  py-6 mt-5 lg:mt-10">
                <div
                    className="flex flex-col items-start text-start justify-center gap-5 order-1 lg:order-1 "
                    data-aos="slide-up"
                    data-aos-offset="100"
                    data-aos-delay="100"
                    data-aos-duration="400"
                    data-aos-easing="ease-in"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="">
                        <img src="/andriod_icon.png" alt="" srcset="" />
                    </div>
                    <h3 className="text-[28px] font-semibold leading-tight">
                        Andorid App Development
                    </h3>
                    <p className="text-xs font-normal w-[100%]  lg:w-[80%] text-start mb-3">
                        Struggling to find an innovative partner for your mobile
                        app development? Here we offer the best mobile app solutions
                        to propel your business in the world of the mobile stratosphere
                        with our eccentric development approach. Whereas, Android apps
                        are the cornerstone of the transformative development process.
                    </p>
                    <div>
                        <ContactButton text1={"Start your project"} text2={"Let's talk"} />
                    </div>
                </div>
                <div className="order-2 lg:order-2 overflow-hidden mb-6 lg:mb-0 flex justify-center lg:justify-center bg-red-img ">
                    <Image
                        width={400}
                        height={200}
                        loader={customLoader}
                        src="/android-turn-mockup.png"
                        alt="two mobile mock screens shows the testing of streaming applications"
                        className="md:h-[200px] lg:h-[200px] xl:h-[auto]"
                        data-aos="slide-left"
                        data-aos-offset="100" // Adjusted offset to trigger animation earlier
                        data-aos-delay="0" // No delay for immediate animation start
                        data-aos-duration="400"
                        data-aos-easing="ease-in"
                        data-aos-mirror="false"
                        data-aos-once="false" // Set to false to repeat animation on scroll up
                        data-aos-anchor-placement="center-bottom"
                    />
                </div>
            </div>
            <div className="w-full grid px-20 grid-cols-1 p-10 lg:grid-cols-2 gap-6  py-6">

                <div className="flex md:justify-center lg:justify-center bg-purple-img">
                    <Image
                        width={330}
                        height={380}
                        loader={customLoader}
                        src="/hybrid-app-development-services-screen-1.webp"
                        alt=" two mobile mock screens shows the testing of application layout"
                        className="md:h-[350px] lg:h-[380px] xl:h-auto"
                        data-aos="slide-right"
                        data-aos-offset="100"
                        data-aos-delay="0"
                        data-aos-duration="400"
                        data-aos-easing="ease-in"
                        data-aos-mirror="false"
                        data-aos-once="false"
                        data-aos-anchor-placement="center-bottom"
                    />
                </div>
                <div
                    className="flex flex-col items-start relative left-[40px] justify-center gap-5 text-start"
                    data-aos="slide-up"
                    data-aos-offset="100"
                    data-aos-delay="0"
                    data-aos-duration="400"
                    data-aos-easing="ease-in"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div>
                        <img src="/apple-icon-bg.png" />
                    </div>
                    <h3 className="text-[28px] font-semibold leading-tight">
                        iOS app development
                    </h3>
                    <p className="text-xs w-[100%]  lg:w-[80%] font-normal text-start mb-3">
                        Have you ever heard that an IOS application is running very slowly? Yes,
                        you’ve been familiar with the term, as our experts built powerful, stable,
                        highly functional, operational, and systemized app versions of the IOS mobile
                        applications to satisfy their clients in the process of mobile development.
                        And that’s how our development efforts create rapid mobile app conversions in no time.
                    </p>
                    <div>
                        <ContactButton text1={"Start your project"} text2={"Let's talk"} />
                    </div>
                </div>
            </div>
            <div className="w-full grid px-20 grid-cols-1 p-10 lg:grid-cols-2 gap-6 py-6  ">

                <div
                    className="flex flex-col items-start justify-center gap-5 order-1 lg:order-1 text-start"
                    data-aos="slide-up"
                    data-aos-offset="100"
                    data-aos-delay="0"
                    data-aos-duration="400"
                    data-aos-easing="ease-in"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className="flex items-center justify-center md:justify-start">
                        <img src="/flutter-bg.png" alt=" " srcset="" />
                        <img src="/react-bg.png" alt="" className='ml-3' srcset="" />
                        <img src="/slide-bg.png" alt="" className='ml-3' srcset="" />
                    </div>
                    <h3 className="text-[28px] font-semibold leading-tight">
                        Cross-platform
                    </h3>
                    <p className="text-xs w-[100%]  lg:w-[80%] font-normal text-start mb-3">
                        React Native, Xamarin, and Flutter are the most popular
                        languages to increase a project's versatility, efficiency,
                        and speed. Thus, that can be delivered promptly through
                        our mobile application services.
                    </p>
                    <div>
                        <ContactButton text1={"Start your project"} text2={"Let's talk"} />
                    </div>
                </div>
                <div className="order-2 md:h-[350px] lg:h-[380px] xl:h-auto lg:order-2 flex justify-center bg-gray-img lg:justify-center"

                >
                    <div data-aos="slide-left"
                        data-aos-offset="100"
                        data-aos-delay="0"
                        data-aos-duration="400"
                        data-aos-easing="ease-in"
                        data-aos-mirror="false"
                        data-aos-once="false"
                        data-aos-anchor-placement="center-bottom" className='flex mx-auto relative left-[0px] md:left-[80px] items-center justify-center' >
                        <img
                            width={300}
                            height={380}
                            src="/tecknov-bg.png"
                            alt="two mock screens shows the testing of application structure"
                            className="md:h-[350px] relative lg:h-[380px] left-[70px] md:left-[0px] xl:h-auto"

                        />
                        <img
                            width={300}
                            height={380}
                            src="/tecknov-bg2.png"
                            alt="two mock screens shows the testing of application structure"
                            className="md:h-[350px] lg:h-[380px] xl:h-auto relative  -left-[40px] md:-left-[120px] -z-[1]"

                        />
                    </div>



                </div>
            </div>
        </div>
    )
}
