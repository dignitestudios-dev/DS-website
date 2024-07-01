"use client"
import { GlobalContext } from '@/context/GlobalContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaArrowLeft, FaArrowRight, FaHome } from 'react-icons/fa'

const NotFoundPage = () => {
    const { palette } = useContext(GlobalContext)

    return (
        <main className="flex transition-all duration-500 items-center justify-center w-full min-h-screen py-8  page md:py-16 " style={{
            background: palette?.background,
            color: palette?.color
        }}>
            <div className="relative flex flex-col items-center w-full gap-5 px-8 md:px-18 xl:px-40 md:gap-16">
                <h1 className="text-7xl md:text-[150px] w-full select-none  text-center font-black  " style={{
                    color: palette?.brandOrange
                }}>
                    404</h1>
                <p className="text-3xl font-bold capitalize">You have discovered a secret place</p>
                <p className="text-2xl text-center font-medium break-words text-dull">Unfortunately, this is only a 404 page. You may have
                    mistyped the address, or the page has been moved to another URL.</p>
                <div className="flex flex-col justify-center w-full gap-8 md:flex-row md:gap-32 xl:px-16">

                    <Link href="/"
                        className="rounded flex w-full md:w-fit group items-center gap-4 justify-center border-2 border-orange-500 font-semibold hover:bg-orange-500 p-3 md:p-6 capitalize focus:outline-none hover:scale-105 active:scale-90 shadow-lg hover:shadow-xl ">
                        <span className="material-symbols-outlined"><FaHome /></span>
                        Go back to Home Page
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default NotFoundPage