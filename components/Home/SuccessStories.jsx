"use client";
import Link from 'next/link';
import React, { lazy, Suspense } from 'react'

const FlickCardStack = lazy(() => import('@/components/Home/CaseStudiesCaraousel'))

const SuccessStories = ({ header, para, header2 }) => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start  ">
      <div className="flex relative  -mb-28  w-[90%] md:w-[70%] flex-col text-center mx-auto items-center">
        <h2 className="text-4xl   md:text-7xl leading-[42px] lg:leading-[1.1] tracking-tighter font-bold ">
          Latest Projects of Our App Development Agency
        </h2>
        <p className="text-lg my-6 dark:text-white text-[#0C0C0C]">
          We believe no two projects have the same challenges. Our case studies highlight how we analyze each requirement and solve product-specific problems through a structured and customized development approach.
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
