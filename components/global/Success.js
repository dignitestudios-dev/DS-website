import { GlobalContext } from '@/context/GlobalContext'
import React, { useContext, useEffect } from 'react'

const Success = () => {
    const { success, setSuccess } = useContext(GlobalContext)
    useEffect(() => {
        setTimeout(() => {
            setSuccess(false)
        }, 5000)
    }, [success])
    return (

        <div className={`animate-pulse absolute top-12 right-0 ${success ? "flex" : "hidden"} transition-all duration-500 w-full h-16  bg-orange-500 text-white text-sm font-medium z-[5000] uppercase flex gap-3 justify-start items-center px-6`}>
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span>
                {success}
            </span>
            <button className='ml-auto' onClick={() => setSuccess(false)}>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    )
}

export default Success