import { Inter } from 'next/font/google'
import './globals.css'
import { GlobalContextProvider } from '@/context/GlobalContext'
import Script from "next/script"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dignite Studios',
  description: 'An IT Consulting agency.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/23199765.js"></script>
      </head>
      <body className={inter.className}>
        <GlobalContextProvider>

          {children}

        </GlobalContextProvider>
      </body>
    </html>
  )
}
