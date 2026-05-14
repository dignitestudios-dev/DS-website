import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";

const AboutUsPage = lazy(() => import("@/components/AboutUs/AboutUsPage"));
export const metadata = {
  title: "About Dignite Studios | Award-Winning Mobile App Development Company",
  description:
    "Learn about Dignite Studios, a top-rated mobile app development company with 10+ years of experience delivering innovative solutions for startups and enterprises globally.",
  alternates: {
    canonical: 'https://www.dignitestudios.com/about-us',
    languages: {
      'en-ca': 'https://www.dignitestudios.com/about-us',
      'en-us': 'https://www.dignitestudios.com/about-us',
      'en-gb': 'https://www.dignitestudios.com/about-us',
      'x-default': 'https://www.dignitestudios.com/about-us',
    },
  },
  robots: 'index, follow',
  otherBots: 'googlebot: index, follow, max-snippet: -1; bingbot: index, follow, max-snippet: -1',
  openGraph: {
    type: 'website',
    siteName: 'Dignite Studios',
    title: 'About Us | Dignite Studios',
    description: 'Dignite Studios, the top mobile app development company in US, sets new standards in the digital venture of software solutions to lift your core business exclusively.',
    url: 'https://www.dignitestudios.com/about-us',
    images: [
      {
        url: 'https://www.dignitestudios.com/banner-cover-image-of-about-us.webp',
        width: 1200,
        height: 630,
        alt: 'About Us - Dignite Studios',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Dignite Studios',
    site: '@dignitestudios',
    description: 'Dignite Studios, the top mobile app development company in US, sets new standards in the digital venture of software solutions to lift your core business exclusively.',
    images: [
      {
        url: 'https://www.dignitestudios.com/banner-cover-image-of-about-us.webp',
        alt: 'About Us - Dignite Studios',
      },
    ],
  },
};

const page = () => {

};

export default page;
