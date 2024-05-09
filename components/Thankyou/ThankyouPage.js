"use client"
import { GlobalContext } from '@/context/GlobalContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const ThankyouPage = () => {
    const { palette } = useContext(GlobalContext)
    return (
        <div className='w-full h-auto flex flex-col gap-4 justify-center items-center py-16 px-4 md:px-12 lg:px-28' style={{
            background: palette?.background,
            color: palette?.color
        }}>
            <span className='w-[80px] h-[80px] rounded-full flex justify-center items-center bg-[#FEEFE9]'>
                <img src='/check.webp' className='w-9' />
            </span>
            <h1 className='text-[45px] font-extrabold lg:text-[64px]  lg:font-bold text-center  uppercase'>Thank You</h1>
            <p className='text-[18px] font-light text-center'>We have received your form. We will contact you on your email soon.</p>
            <Link href="/" name="view-all-case-studies" className="w-[120px] lg:w-[160px] h-12 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90 bg-[#F15C20] shadow-xl text-white text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center gap-4">
                Go Home
            </Link>
        </div>
    )
}

export default ThankyouPage