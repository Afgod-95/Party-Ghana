"use client";

import { NextSeo } from "next-seo";
import TermsOfService from "@/component/pages/Terms";
import React from "react";

const Page: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Terms of Service - Party Ghana"
        description="Read the Terms of Service for Party Ghana. Learn about our rules, user responsibilities, event booking policies, and vendor agreements."
        canonical="https://yourdomain.com/terms-of-service"
        openGraph={{
          url: "https://yourdomain.com/terms-of-service",
          title: "Terms of Service - Party Ghana",
          description:
            "Party Ghana's Terms of Service outline the rules for using our platform, booking events, and working with vendors.",
          siteName: "Party Ghana",
          images: [
            {
              url: "https://yourdomain.com/og-image-terms.png", // optional OG image
              width: 1200,
              height: 630,
              alt: "Party Ghana Terms of Service",
            },
          ],
        }}
        twitter={{
          handle: "@partyghana",
          site: "@partyghana",
          cardType: "summary_large_image",
        }}
      />

      {/* JSON-LD Structured Data for Terms of Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service - Party Ghana",
            url: "https://yourdomain.com/terms-of-service",
            description:
              "This Terms of Service page outlines Party Ghana's rules, responsibilities, and policies for event bookings and vendor partnerships.",
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

      <TermsOfService />
    </>
  );
};

export default Page;
