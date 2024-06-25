"use client"
import { GlobalContext } from '@/context/GlobalContext'
import React, { useContext } from 'react'
import { iostech } from '@/constants/iostech'
import AndroidTechnologiesCard from './AndroidTechnologiesCard'
import { androidtech } from '@/constants/androidtech'

const AndroidTechnologiesSection = () => {
    const {palette, theme} = useContext(GlobalContext)
  return (
    <div
      className={` w-full py-10  px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48  `}
    >
      <div className={` flex flex-col gap-2 justify-start items-start `}>
        
        <div className={`w-full px-0 flex justify-between items-center`}>
          <h1
            className={`lg:font-bold uppercase font-extrabold text-4xl lg:text-5xl xl:text-[72px] 2xl:text-[104px] tracking-tighter xl:font-bold`}
          >
            Technologies we're using
          </h1>
        </div>
        <p
          style={{
            color: palette?.dark_contrast_color,
          }}
          className="text-[16px] lg:my-4  font-normal lg:ml-1 lg:w-[78%]"
        >
          Harness the latest and upgraded technologies holding extraordinary features to create the next level of business application for your brand.
        </p>
      </div>
      <div className="lg:py-2 grid grid-cols-1 gap-6 mt-4 lg:mt-0  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-6 ">
        {androidtech?.map((s, key) => {
            return(
                <AndroidTechnologiesCard title={s.title} icon={s.icon} desc={s.description} key={key} count={key}/>
            )
        })}
        </div>
    </div>
  )
}

export default AndroidTechnologiesSection