"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import DeferUntilNear from "@/components/global/DeferUntilNear";

// Above the fold: server-rendered on purpose. With `ssr: false` the <h1> only
// existed once JS had run, which is what pushed LCP's render delay to 2.3s and
// caused the layout shift as the placeholder was replaced. These two render
// identically either way — neither touches window/document, and the heading is
// not inside an animated wrapper, so the markup is the same, just earlier.
const Hero = dynamic(() => import("@/components/Home/Hero"));
const MobileAppServices = dynamic(() => import("@/components/Home/MobileAppServices"));

// Below the fold stays client-only: it keeps their JS off the critical path.

const SuccessStories = dynamic(() => import("./SuccessStories"), { ssr: false });
const Bussiness = dynamic(() => import("./Bussiness"), { ssr: false });
const Process = dynamic(() => import("./Process"), { ssr: false });
const Industries = dynamic(() => import("./Industries"), { ssr: false });
const TechTools = dynamic(() => import("./TechTools"), { ssr: false });
const Impact = dynamic(() => import("./Impact"), { ssr: false });
const Testimonials = dynamic(() => import("./Testimonials"), { ssr: false });
const ProductDesign = dynamic(() => import("./ProductDesign"), { ssr: false });
const GlobalPresence = dynamic(() => import("./GlobalPresence"), { ssr: false });
const Faq = dynamic(() => import("@/components/Home/Faq"), { ssr: false });
const ContactUs = dynamic(() => import("./ContactUs"), { ssr: false });

const LoadingFallback = () => <div className="w-full min-h-[400px]" />;

export default function HomePage() {
  const { palette, theme } = useContext(GlobalContext);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // The full-screen loader that used to sit here was on a fixed 1000 ms timer,
  // not on anything actually loading. It existed because every section was
  // `ssr: false` and the page really was blank; now the hero is server-rendered
  // it was covering content that had already painted, and no metric could be
  // recorded until it went away.

  return (
    <>
      <div className="w-full max-w-screen-2xl mx-auto h-auto flex flex-col items-center justify-center gap-20 md:gap-28 pb-20" style={{ overflowAnchor: 'none' }}>
        {/* Above the fold: rendered immediately and server-rendered. */}
        <Hero />
        <MobileAppServices />

        {/* Everything below mounts as it approaches the viewport. Each of these
            mounts a large number of framer-motion components, and doing all of
            it during load is what dominated the main thread. */}
        <DeferUntilNear minHeight={600}><SuccessStories /></DeferUntilNear>
        <DeferUntilNear minHeight={600}><Bussiness /></DeferUntilNear>
        <DeferUntilNear minHeight={600}><Process /></DeferUntilNear>
        <DeferUntilNear minHeight={600}><Industries /></DeferUntilNear>
        <DeferUntilNear minHeight={600}><TechTools /></DeferUntilNear>
        <DeferUntilNear minHeight={400}><Impact /></DeferUntilNear>
        <DeferUntilNear minHeight={600}><Testimonials /></DeferUntilNear>
        <DeferUntilNear minHeight={600}><ProductDesign /></DeferUntilNear>
        <DeferUntilNear minHeight={600}><GlobalPresence /></DeferUntilNear>
        <DeferUntilNear minHeight={600}><Faq /></DeferUntilNear>
        <DeferUntilNear minHeight={400}>
          <ContactUs header={"Your Next Big Project is Just a Call Away!"} para={"Big ideas deserve expert execution. Connect with our team and take the first step toward launching your amazing project."} img="/cc.webp" btn={"Schedule a Call"} />
        </DeferUntilNear>
      </div>
    </>
  );
}
