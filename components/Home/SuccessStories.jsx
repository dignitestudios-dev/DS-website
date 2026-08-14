"use client";
import Link from 'next/link';
import React, { lazy, Suspense } from 'react'

const FlickCardStack = lazy(() => import('@/components/Home/CaseStudiesCaraousel'))

const SuccessStories = ({ header, para, header2 }) => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start  ">
      <div className="flex relative  -mb-28  w-[90%] md:w-[70%] flex-col text-center mx-auto items-center">
        <h2 className="text-4xl   md:text-7xl leading-[42px] lg:leading-[1.1] tracking-tighter font-bold ">
          Here's What We've Been Working On
        </h2>
        <p className="text-lg my-6 dark:text-white text-[#0C0C0C]">
          Every project has its own set of goals. So the team at our expert app development company would take the time to understand what the clients need before the development begins. That’s why the final product is driven by collaboration and attention to detail. Explore our case studies to see how we've turned ideas into products that solve real problems, create better user experiences, and help businesses grow with confidence. The following case studies showcase the challenges we have tackled and the strategies we've followed.
        </p>
      </div>
      <div className='pt-10' >
        <Suspense fallback={<div className="w-full h-96 flex items-center justify-center"><div className="loader"></div></div>}>
          <FlickCardStack />
        </Suspense>
      </div>
    </div>
  )
}

export default SuccessStories
