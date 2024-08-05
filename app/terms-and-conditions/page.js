import TermsPage from "@/components/TermsAndConditions/TermsPage";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";
export const metadata = {
  title: "Terms And Conditions | Dignite Studios",
  description:
    "Dignite Studios, the top mobile app development company in US, sets new standards in the digital venture of software solutions to lift your core business exclusively.",
};

const page = () => {
  return <GlobalLayout page={<TermsPage />} />;
};

export default page;
