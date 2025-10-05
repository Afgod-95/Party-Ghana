"use client";

import { NextSeo } from "next-seo";
import PrivacyPolicy from "@/component/pages/PrivacyPolicy";
import React from "react";

const Page: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Privacy Policy - Party Ghana"
        description="Read the Party Ghana Privacy Policy to learn how we collect, use, and protect your data when booking events, contacting vendors, or using our services."
        canonical="https://yourdomain.com/privacy-policy"
        openGraph={{
          url: "https://yourdomain.com/privacy-policy",
          title: "Privacy Policy - Party Ghana",
          description:
            "Learn how Party Ghana safeguards your personal information and ensures your privacy while using our event services.",
          siteName: "Party Ghana",
          images: [
            {
              url: "https://yourdomain.com/og-image-privacy.png", // optional OG image
              width: 1200,
              height: 630,
              alt: "Party Ghana Privacy Policy",
            },
          ],
        }}
        twitter={{
          handle: "@partyghana",
          site: "@partyghana",
          cardType: "summary_large_image",
        }}
      />

      {/* JSON-LD Structured Data for Privacy Policy */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy - Party Ghana",
            url: "https://yourdomain.com/privacy-policy",
            description:
              "This Privacy Policy describes how Party Ghana collects, uses, and protects customer data.",
            publisher: {
              "@type": "Organization",
              name: "Party Ghana",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png",
              },
            },
          }),
        }}
      />

      <PrivacyPolicy />
    </>
  );
};

export default Page;
