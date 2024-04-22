import CookiePolicyPage from '@/components/CookiePolicy/CookiePolicyPage'
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
    return (
        <GlobalLayout page={<CookiePolicyPage />} />
    )
}

export default page