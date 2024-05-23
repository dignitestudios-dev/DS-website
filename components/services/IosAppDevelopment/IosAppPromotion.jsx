"use client"
import { GlobalContext } from '@/context/GlobalContext'
import React, { useContext } from 'react'
import Link from 'next/link'

const IosAppPromotion = () => {
    const {palette, theme} = useContext(GlobalContext)
  return (
    <div className='bg-black bg-mobile-promo h-auto py-10 lg:py-0 lg:h-[calc(100vh-5rem)] flex w-full flex-col gap-3 justify-center items-center px-3'><h1
    style={{
      color: "#fff",
    }}
    className=" text-2xl font-extrabold lg:text-4xl xl:text-[72px] text-center xl:leading-[67.84px] lg:font-bold xl:font-semibold tracking-tight uppercase"
  >
    We developed more than <br/> 100+ projects
  </h1>
  <span
          style={{
            color: "#fff",
          }}
          className="lg:w-[55%] my-2 lg:my-6 text-center text-[13px] lg:text-[14px] font-normal"
        >
        Being a world-class iOS app development company we aim to bring your thriving Apple Store with unbeatable iOS mobile applications to bring your dream to life.
        </span>
        <div className="w-auto flex gap-4 justify-start items-center">
          <Link href={"/contact-us"}
            name="schedule-a-meeting"
            style={{
              background: palette?.brandOrange,
              color: "white",
            }}
            className="orange w-[150px] lg:w-[171px] xl:w-[189px] xl:h-[64px] h-14 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90  shadow-sm text-sm lg:text-md font-semibold tracking-wide shadow-[#F15C20]/[0.3] flex items-center justify-center"
          >
           Start Your Project
          </Link>

        </div>
        </div>
  )
}

export default IosAppPromotion