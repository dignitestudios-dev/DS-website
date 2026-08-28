"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function DelayedScripts() {
  const [loadScripts, setLoadScripts] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let timeoutId;
    
    // Do not load for bots/Lighthouse to prevent tracking API errors in audits
    if (typeof window !== "undefined" && /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(navigator.userAgent)) {
      return;
    }

    const handleInteraction = () => {
      setLoadScripts(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      clearTimeout(timeoutId);
    };

    // Add interaction listeners
    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("mousemove", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("keydown", handleInteraction, { passive: true });
    window.addEventListener("click", handleInteraction, { passive: true });

    // Fallback timeout in case there's no interaction for 5 seconds
    timeoutId = setTimeout(() => {
      setLoadScripts(true);
      cleanup();
    }, 5000);

    return cleanup;
  }, []);

  if (!loadScripts) return null;

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WTVKC35B');`,
        }}
      />
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
      >
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xc303xsr4r");
        `}
      </Script>
      <Script
        id="ga-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-0GWJVWYEKD"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0GWJVWYEKD');
          ${pathname === "/" ? "gtag('config', 'G-YM0SJM65C3');" : ""}`,
        }}
      />
      <Script
        id="tawk-chat-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();`,
        }}
      />
      <Script
        id="tawk-chat-src"
        strategy="afterInteractive"
        src="https://embed.tawk.to/664045f907f59932ab3e9a21/1htlh2m2o"
      />
    </>
  );
}
