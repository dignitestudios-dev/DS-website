import { GlobalContext } from '@/context/GlobalContext'
import React, { useContext, useRef } from 'react'
import Link from "next/link"
import SidebarLink from './SidebarLink'

const Sidebar = ({ isOpen, setIsOpen }) => {
    const sidebarRef = useRef()
    const toggleModal = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }
    const { palette, theme } = useContext(GlobalContext)
    return (
        <div onClick={(e) => toggleModal(e)} className={`w-screen h-screen z-[10000]  transition-all duration-300 fixed top-0 left-0 flex items-start justify-end  ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            <div ref={sidebarRef} className='w-1/2 h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-start items-start py-6 px-10  ' style={{ background: palette?.background }}>
                <Link href="/">
                    <img src={theme == "light" ? "/logo.png" : "logo-dark.png"} />
                </Link>
                <div className='w-auto h-auto flex flex-col justify-start items-start gap-8 mt-12'>
                    <SidebarLink name={"Home"} number={"1"} />
                    <SidebarLink name={"Case Studies"} number={"1"} />
                    <SidebarLink name={"Our Services"} number={"1"} />
                    <SidebarLink name={"Our Process"} number={"1"} />
                    <SidebarLink name={"Why Choose Us?"} number={"1"} />
                    <SidebarLink name={"FAQ"} number={"1"} />



                </div>
            </div>
        </div>
    )
}

export default Sidebar