"use client"
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const CTA = () => {
  return (
    <div className='max-w-4xl relative mx-auto   my-40 text-white'>
        <div className='bg-[#0C0C0C] md:h-[360px] group rounded-[30px] py-10' >
        <div className='absolute md:block hidden h-[368px] rounded-[30px] border-black group-hover:border-gray-200 group-hover:border-8 group-hover:-top-3 group-hover:rounded-[35px] group-hover:-left-3 group-hover:h-[384px] group-hover:w-[102.5%]  transition-all ease-linear  w-[101%]  border -top-1 -left-1' />
            <div className='md:w-[70%] w-[90%] mx-auto text-center' >
<h1 className='text-5xl font-bold'>Let’s Build Something That <br/>

<span className="text-orange-500">Truly Performs</span></h1>   
    <p className='text-sm py-6 font-thin'>Have an idea that is ready to shape? Dignite Studios helps turn it into a high-impact digital solution. We work closely with you at every stage, offering 100% custom development, expert teams, and dependable support. Start a meaningful conversation about your vision and how it can come to your life. Together, we build apps designed for real, measurable business impact.</p>
       </div>
       
       <button className='group flex w-[70%] mx-auto [transform:translateZ(0)] rounded-lg overflow-hidden bg-white relative before:absolute before:bg-[#F15C20] before:top-1/2 before:left-1/2 before:h-8 before:w-[18%] before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500' > <span className='relative z-0 rounded-lg py-4 text-start pl-6 text-3xl gap-8 font-bold text-black hover:text-gray-200 justify-center items-center flex w-full'><span>Get in Touch</span> <FaArrowRight size={25} /></span>   </button>
        </div>
    </div>
  )
}

export default CTA