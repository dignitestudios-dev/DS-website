import WebAppPage from '@/components/services/WebDevelopment/WebAppPage'
import GlobalLayout from '@/layout/GlobalLayout'
import Head from 'next/head'
import React from 'react'

const page = () => {
    <Head>
        <meta name="robots" content="noindex, nofollow" />
    </Head>
    return (
        <GlobalLayout page={<WebAppPage />} />
    )
}

export default page
