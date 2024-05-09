"use client"
import { GlobalContext } from '@/context/GlobalContext'
import { useContext } from 'react'
import CaseStudiesSection from '@/components/Home/CaseStudiesSection'
import Faq from '@/components/Home/Faq'
import FindOurOfficesSection from '@/components/Home/FindOurOfficesSection'
import Footer from '@/components/Home/Footer'
import Hero from '@/components/Home/Hero'
import IndustriesSection from '@/components/Home/IndustriesSection'
import LandingContactUs from '@/components/Home/LandingContactUs'
import Process from '@/components/Home/Process'
import ServicesSection from '@/components/Home/ServicesSection'
import Slider from '@/components/Home/Slider'
import Technologies from '@/components/Home/Technologies'
import Testimonials from '@/components/Home/Testimonials'
import WhyChooseUsSection from '@/components/Home/WhyChooseUsSection'
import { IoArrowUpSharp } from "react-icons/io5";

export default function HomePage() {
    const { palette } = useContext(GlobalContext)
    // useEffect(() => {
    //   const scrollers = document.querySelectorAll(".scroller");

    //   // If a user hasn't opted in for recuded motion, then we add the animation
    //   if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    //     addAnimation();
    //   }

    //   function addAnimation() {
    //     scrollers.forEach((scroller) => {
    //       // add data-animated="true" to every `.scroller` on the page
    //       scroller.setAttribute("data-animated", true);

    //       // Make an array from the elements within `.scroller-inner`
    //       const scrollerInner = scroller.querySelector(".scroller__inner");
    //       const scrollerContent = Array.from(scrollerInner.children);

    //       // For each item in the array, clone it
    //       // add aria-hidden to it
    //       // add it into the `.scroller-inner`
    //       scrollerContent.forEach((item) => {
    //         const duplicatedItem = item.cloneNode(true);
    //         duplicatedItem.setAttribute("aria-hidden", true);
    //         item.length > 12 && item.remove()
    //         scrollerInner.appendChild(duplicatedItem);
    //       });
    //     });
    //   }
    // });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Optional: smooth scroll behavior
        });
    }

    return (
        <div className='w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto'>
            <Hero />

            <div className="scroller relative w-full h-auto md:h-96 " data-speed="fast" data-animated="true">
                <Slider />
            </div>

            <Technologies />
            <CaseStudiesSection />
            <ServicesSection />
            <Process />
            <WhyChooseUsSection />
            <IndustriesSection />
            <Testimonials />
            <Faq />
            <LandingContactUs />
            <FindOurOfficesSection />

            <button type='button' name='scroll-to-top' onClick={scrollToTop} className='z-[10000] shadow-lg text-2xl flex justify-center items-center w-14 h-14 rounded-full  text-white fixed bottom-4 left-4' style={{
                background: palette?.brandOrange,
                color: "white"
            }}>
                <IoArrowUpSharp />
            </button>
        </div>

    )
}
