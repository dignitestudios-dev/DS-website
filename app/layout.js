import { Inter } from 'next/font/google'
import './globals.css'
import { GlobalContextProvider } from '@/context/GlobalContext'
import Cursor from '@/components/global/Cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dignite Studios',
  description: 'An IT Consulting agency.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Cursor />

          {children}

        </GlobalContextProvider>
      </body>
    </html>
  )
}
