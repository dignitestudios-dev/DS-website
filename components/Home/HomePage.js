"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import LazySection from "@/components/global/LazySection";

// Above the fold: statically imported, NOT dynamic(). They are server-rendered,
// but dynamic() left React with nothing to render during hydration until their
// chunk arrived, so the hero collapsed and reappeared — one 0.703 layout shift.
// The old 1 MB shared chunk hid this by having everything loaded already.
// Original note: With `ssr: false` the <h1> only
// existed once JS had run, which is what pushed LCP's render delay to 2.3s and
// caused the layout shift as the placeholder was replaced. These two render
// identically either way — neither touches window/document, and the heading is
// not inside an animated wrapper, so the markup is the same, just earlier.
import Hero from "@/components/Home/Hero";
import MobileAppServices from "@/components/Home/MobileAppServices";

// Below the fold stays client-only: it keeps their JS off the critical path.

const LoadingFallback = () => <div className="w-full min-h-[400px]" />;

const SuccessStories = dynamic(() => import("./SuccessStories"), { ssr: false, loading: LoadingFallback });
const Bussiness = dynamic(() => import("./Bussiness"), { ssr: false, loading: LoadingFallback });
const Process = dynamic(() => import("./Process"), { ssr: false, loading: LoadingFallback });
const Industries = dynamic(() => import("./Industries"), { ssr: false, loading: LoadingFallback });
const TechTools = dynamic(() => import("./TechTools"), { ssr: false, loading: LoadingFallback });
const Impact = dynamic(() => import("./Impact"), { ssr: false, loading: LoadingFallback });
const Testimonials = dynamic(() => import("./Testimonials"), { ssr: false, loading: LoadingFallback });
const ProductDesign = dynamic(() => import("./ProductDesign"), { ssr: false, loading: LoadingFallback });
const GlobalPresence = dynamic(() => import("./GlobalPresence"), { ssr: false, loading: LoadingFallback });
const Faq = dynamic(() => import("@/components/Home/Faq"), { ssr: false, loading: LoadingFallback });
const ContactUs = dynamic(() => import("./ContactUs"), { ssr: false, loading: LoadingFallback });


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
        <Hero />
        <MobileAppServices />
        <LazySection minHeight={600}>
          <SuccessStories />
        </LazySection>
        <LazySection minHeight={600}>
          <Bussiness />
        </LazySection>
        <LazySection minHeight={600}>
          <Process />
        </LazySection>
        <LazySection minHeight={600}>
          <Industries />
        </LazySection>
        <LazySection minHeight={600}>
          <TechTools />
        </LazySection>
        <LazySection minHeight={600}>
          <Impact />
        </LazySection>
        <LazySection minHeight={600}>
          <Testimonials />
        </LazySection>
        <LazySection minHeight={600}>
          <ProductDesign />
        </LazySection>
        <LazySection minHeight={600}>
          <GlobalPresence />
        </LazySection>
        <LazySection minHeight={600}>
          <Faq />
        </LazySection>
        <LazySection minHeight={600}>
          <ContactUs header={"Your Next Big Project is Just a Call Away!"} para={"Big ideas deserve expert execution. Connect with our team and take the first step toward launching your amazing project."} img="/cc.webp" btn={"Schedule a Call"} />
        </LazySection>
      </div>
    </>
  );
}
