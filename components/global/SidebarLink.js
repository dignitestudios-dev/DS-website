import { GlobalContext } from '@/context/GlobalContext'
import React, { useContext } from 'react'

const SidebarLink = ({ link, name, number }) => {
    const { palette } = useContext(GlobalContext)
    return (
        <div className='w-auto flex justify-start items-center gap-3 '>
            <span className='text-xl lg:text-4xl font-semibold' style={{ color: palette?.brandOrange }}>0{number}</span>
            <span className='text-xl lg:text-4xl capitalize font-semibold' style={{ color: palette?.color }}>{name}</span>
        </div>
    )
}

export default SidebarLink