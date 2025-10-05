"use client";

import { NextSeo } from "next-seo";
import HelpCenter from "@/component/pages/HelpCenter";

export default function Page() {
  return (
    <>
      <NextSeo
        title="Help Center - Party Ghana"
        description="Find FAQs, guides, and support for Party Ghana bookings and events."
        canonical="https://yourdomain.com/help"
        openGraph={{
          url: "https://yourdomain.com/help",
          title: "Help Center - Party Ghana",
          description:
            "Get support, FAQs, and guides for Party Ghana. Contact us for event and booking help.",
          images: [
            {
              url: "https://yourdomain.com/og-image-help.png",
              width: 1200,
              height: 630,
              alt: "Party Ghana Help Center",
            },
          ],
          siteName: "Party Ghana",
        }}
        twitter={{
          handle: "@partyghana",
          site: "@partyghana",
          cardType: "summary_large_image",
        }}
      />

      {/* Structured data (FAQ schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I book a party in Ghana?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can book a party using the Party Ghana booking system on our website.",
                },
              },
              {
                "@type": "Question",
                name: "How do I contact Party Ghana support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Visit our Help Center or contact us directly at support@partyghana.com.",
                },
              },
            ],
          }),
        }}
      />

      <HelpCenter />
    </>
  );
}
