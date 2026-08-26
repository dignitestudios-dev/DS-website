import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/context/GlobalContext";
import Script from "next/script";
import MotionProvider from "@/components/global/MotionProvider";
import DisplayIp from "@/components/global/DisplayIp";
import AOSInit from "@/components/global/AosInit";
import DelayedScripts from "@/components/global/DelayedScripts";

export const metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap",
  preload: true,
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTVKC35B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        <AOSInit />
        <GlobalContextProvider><MotionProvider><main id="main-content">{children}</main></MotionProvider></GlobalContextProvider>
        
        <DelayedScripts />
      </body>
    </html>
  );
}
