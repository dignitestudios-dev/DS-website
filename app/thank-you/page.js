import ThankyouPage from '@/components/Thankyou/ThankyouPage'
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
    return (
        <GlobalLayout page={<ThankyouPage />} />
    )
}

export default page