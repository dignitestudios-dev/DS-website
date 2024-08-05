import PrivacyPolicyPage from "@/components/PrivacyPolicy/PrivacyPolicyPage";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Privacy Policy | Dignite Studios",
  description:
    "Dignite Studios, the top mobile app development company in US, sets new standards in the digital venture of software solutions to lift your core business exclusively.",
};

const page = () => {
  return <GlobalLayout page={<PrivacyPolicyPage />} />;
};

export default page;
