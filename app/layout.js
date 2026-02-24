import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/context/GlobalContext";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import DisplayIp from "@/components/global/DisplayIp";
import AOSInit from "@/components/global/AosInit";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        <AOSInit />
        <GlobalContextProvider>{children}</GlobalContextProvider>
        <Script
          id="tawk-chat"
          strategy="lazyOnload"
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
      </body>
    </html>
  );
}
