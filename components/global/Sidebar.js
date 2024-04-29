import { GlobalContext } from '@/context/GlobalContext'
import React, { useContext, useRef } from 'react'
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const sidebarRef = useRef()
    const toggleModal = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }
    const { palette, theme, setTheme } = useContext(GlobalContext)
    const pathname = usePathname()
    const navigate = useRouter()
    const handleClick = (id) => {
        if (pathname != "/") {
            navigate.push("/")
            setTimeout(() => {

                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 500)
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }

    }
    const navigateTo = (link) => {
        navigate.push(link)
    }
    return (
        <div onClick={(e) => toggleModal(e)} className={`w-screen h-screen z-[10000]  transition-all duration-200 fixed top-0 left-0 flex  items-start justify-end  ${isOpen ? "translate-x-0 lg:translate-x-full" : "translate-x-full"
            }`}>
            <div ref={sidebarRef} className='w-[70%] md:w-1/2 lg:w-1/3  h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-start items-start py-6 px-10  ' style={{ background: palette?.background }}>
                <div className="w-full flex gap-3 justify-between items-center">
                    <Link href="/">
                        <img src={theme == "light" ? "/logo.png" : "/logo-dark.png"} className='h-10' />
                    </Link>
                    <button
                        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
                        className={`${theme == "light" ? "bg-[#00ACFF]/[0.18]" : "bg-[#A9A1D7]/[0.18]"
                            } rounded-full transition-all duration-300 w-[50px] lg:w-[70px] h-[30px] lg:h-[37.5px] p-[4px] flex justify-start items-center`}
                    >
                        <span
                            className={`h-6 w-6 lg:h-8 lg:w-8 text-xl text-white transition-all duration-300 rounded-full flex items-center justify-center ${theme == "light"
                                ? "translate-x-0 bg-[#00ACFF]"
                                : "translate-x-[calc(100%-28%)] lg:translate-x-[calc(100%-3%)] bg-[#342A6D]"
                                } `}
                        >
                            {theme == "light" ? <BsFillBrightnessHighFill className="text-lg" /> : <IoMoon />}
                        </span>
                    </button>



                </div>

                <div className='w-full h-auto flex flex-col justify-start items-start gap-4 mt-12'>
                    <button
                        onClick={() => navigateTo("/")}
                        className={`text-[14px] h-8 font-medium hover:text-orange-600
            } bg-transparent  outline-none`}
                    >
                        Home
                    </button>
                    <button
                        className={`w-full group text-[14px] hover:text-orange-600 relative gap-4 h-auto font-medium flex flex-col    bg-transparent  outline-none`}
                    >
                        <div className='w-full flex  justify-between items-center'>

                            <span>Services</span>
                            <IoIosArrowDown className="text-md group-hover:rotate-180" />
                        </div>
                        <div className={`w-full h-auto px-2  rounded-2xl text-md hidden transition-all duration-150 group-hover:flex  flex-col gap-4 justify-start items-start  `} style={{ color: palette?.color }} >
                            <Link href="/services/mobile-app-development" className={`hover:text-orange-600 `} >Mobile App Development</Link>
                            <Link href="/services/ios-app-development" className={`hover:text-orange-600 `} >IOS App Development</Link>
                            <Link href="/services/android-app-development" className={`hover:text-orange-600 `} >Android App Development</Link>
                            <Link href="/services/web-app-development" className={`hover:text-orange-600 `} >Web App Development</Link>
                        </div>
                    </button>

                    <button
                        onClick={() => handleClick("case-studies")}
                        className={`text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
                    >
                        Case Studies
                    </button>
                    <button
                        onClick={() => navigateTo("/about-us")}
                        className={`text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
                    >
                        About us
                    </button>
                    <button
                        onClick={() => navigateTo("/contact-us")}
                        className={`text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
                    >
                        Contact
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Sidebar