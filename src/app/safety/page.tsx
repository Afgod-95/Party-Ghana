"use client";

import { NextSeo } from "next-seo";
import SafetyCommitment from "@/component/pages/SafetyCommitment";
import React from "react";

const Page = () => {
  return (
    <>
      <NextSeo
        title="Safety Commitment - Party Ghana"
        description="Learn about Party Ghana's safety commitment. We ensure safe, secure, and enjoyable event experiences by working with verified vendors and trusted venues."
        canonical="https://yourdomain.com/safety"
        openGraph={{
          url: "https://yourdomain.com/safety",
          title: "Safety Commitment - Party Ghana",
          description:
            "Party Ghana is committed to providing safe and reliable event services with vetted vendors, secure venues, and community trust standards.",
          siteName: "Party Ghana",
          images: [
            {
              url: "https://yourdomain.com/og-image-safety.png", // optional OG image
              width: 1200,
              height: 630,
              alt: "Party Ghana Safety Commitment",
            },
          ],
        }}
        twitter={{
          handle: "@partyghana",
          site: "@partyghana",
          cardType: "summary_large_image",
        }}
      />

      {/* JSON-LD Structured Data for Safety Commitment */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Safety Commitment - Party Ghana",
            url: "https://yourdomain.com/safety",
            description:
              "This page outlines Party Ghana's safety policies, ensuring secure and enjoyable events for all customers.",
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

      <SafetyCommitment />
    </>
  );
};

export default Page;
