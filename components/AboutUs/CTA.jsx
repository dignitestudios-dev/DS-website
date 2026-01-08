"use client"
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const CTA = () => {
  return (
    <div className='max-w-4xl relative z-50 mx-auto   my-40 text-white'>
        <div className='bg-[#0C0C0C]  md:h-[360px]  group rounded-[30px] py-10' >
        <div className='absolute md:block group-hover:rounded-[35px] -z-10 hidden h-[370px] w-[101%] group-hover:h-[385px] group-hover:w-[103%]  rounded-[30px]  border-black border group-hover:border-8 group-hover:border-gray-400 top-[50%] left-[50%] transition-all ease-linear transform -translate-x-1/2 -translate-y-1/2' />
            <div className='md:w-[70%] w-[90%] mx-auto text-center' >
<h1 className='text-5xl font-bold tracking-tighter'>Let’s Build Something That <br/>

<span className="text-orange-500">Truly Performs</span></h1>   
    <p className='text-sm py-6 font-thin'>Have an idea that is ready to shape? Dignite Studios helps turn it into a high-impact digital solution. We work closely with you at every stage, offering 100% custom development, expert teams, and dependable support. Start a meaningful conversation about your vision and how it can come to your life. Together, we build apps designed for real, measurable business impact.</p>
       </div>
       
       <Link href={"/contact-us"} className='group flex w-[70%] mx-auto [transform:translateZ(0)] rounded-lg overflow-hidden bg-white relative before:absolute before:bg-[#F15C20] before:top-1/2 before:left-1/2 before:h-8 before:w-[18%] before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500' > <span className='relative z-0 rounded-lg py-4 text-start pl-6 text-3xl gap-8 font-bold text-black hover:text-gray-200 justify-center items-center flex w-full'><span>Get in Touch</span> <FaArrowRight size={25} /></span>   </Link>
        </div>
    </div>
  )
}

export default CTA