import PrivacyPolicyPage from "@/components/PrivacyPolicy/PrivacyPolicyPage";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Privacy Policy | Dignite Studios - Data Security & Protection",
  description:
    "Learn how we collect and protect your personal data at Dignite Studios. Read our Privacy Policy for details on security and data handling practices.",
  alternates: {
    canonical: 'https://www.dignitestudios.com/privacy-policy',
  },
};

const page = () => {
  return <GlobalLayout page={<PrivacyPolicyPage />} />;
};

export default page;
