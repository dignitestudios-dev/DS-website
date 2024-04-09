"use client"
import Navbar from '@/components/global/Navbar'
import { GlobalContext } from '@/context/GlobalContext'
import Image from 'next/image'
import { useContext } from 'react'

export default function Home() {
  const { palette } = useContext(GlobalContext)
  return (
    <div
      className="w-full transition-all duration-700"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <div className="overflow-x-hidden w-full h-auto flex flex-col justify-start items-center gap-4">
        <Navbar />
      </div>
    </div>
  )
}
