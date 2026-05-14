import ContactUsPage from "@/components/ContactUs/ContactUsPage";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Contact Dignite Studios | Free Mobile App Development Consultation",
  description:
    "Get in touch with Dignite Studios for a free consultation on your mobile app development project. Our expert team is ready to help you build your next big idea.",
  alternates: {
    canonical: 'https://www.dignitestudios.com/contact-us',
    languages: {
      'en-ca': 'https://www.dignitestudios.com/contact-us',
      'en-us': 'https://www.dignitestudios.com/contact-us',
      'en-gb': 'https://www.dignitestudios.com/contact-us',
      'x-default': 'https://www.dignitestudios.com/contact-us',
    },
  },
  robots: 'index, follow',
  otherBots: 'googlebot: index, follow, max-snippet:-1; bingbot: index, follow, max-snippet: -1',
  openGraph: {
    type: 'website',
    siteName: 'Dignite Studios',
    title: 'Contact Us | Dignite Studios',
    description: 'Get a quick consultation over your project idea with Dignite\'s aspiring team.',
    url: 'https://www.dignitestudios.com/contact-us',
    images: [
      {
        url: 'https://www.dignitestudios.com/banner-cover-image-of-contact-us.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Us - Dignite Studios',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Dignite Studios',
    site: '@dignitestudios',
    description: 'Get a quick consultation over your project idea with Dignite\'s aspiring team.',
    images: [
      {
        url: 'https://www.dignitestudios.com/banner-cover-image-of-contact-us.webp',
        alt: 'Contact Us - Dignite Studios',
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={<ContactUsPage />} />
    </div>
  );
};

export default page;
