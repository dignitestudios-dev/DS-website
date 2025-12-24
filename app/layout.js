
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/context/GlobalContext";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import DisplayIp from "@/components/global/DisplayIp";
// import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

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

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTVKC35B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <GoogleTagManager gtmId="GTM-WTVKC35B" />
        {/* <DisplayIp /> */}
        <GoogleAnalytics gaId="G-0GWJVWYEKD" />
        <GlobalContextProvider>{children}</GlobalContextProvider>
        <Script
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{ }, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/664045f907f59932ab3e9a21/1htlh2m2o';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();`,
          }}
        />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init()</script>
      </body>
    </html>
  );
}
