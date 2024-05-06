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
        {/* Google Tag Manager script */}
        <Script
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l] = w[l] || [];
                w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WTVKC35B');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WTVKC35B"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <GlobalContextProvider>

          {children}

        </GlobalContextProvider>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/23199765.js"></script>
      </body>
    </html>
  )
}
