"use client";

import { NextSeo } from "next-seo";
import EventPackages from "@/component/pages/EventPackages";

export default function Page() {
  return (
    <>
      <NextSeo
        title="Event Packages - Party Ghana"
        description="Discover curated event packages from Party Ghana. From birthdays to weddings, we offer tailored planning, venues, and vendor services across Ghana."
        canonical="https://yourdomain.com/event-packages"
        openGraph={{
          url: "https://yourdomain.com/event-packages",
          title: "Event Packages - Party Ghana",
          description:
            "Explore Party Ghana's event packages, including weddings, birthdays, baby naming, and more. Tailored solutions for unforgettable experiences.",
          images: [
            {
              url: "https://yourdomain.com/og-image-event-packages.png", // replace with your OG image
              width: 1200,
              height: 630,
              alt: "Party Ghana Event Packages",
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

      {/* JSON-LD Schema for Event Packages (Product + Offer) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Event Packages",
            description:
              "Party Ghana event packages for birthdays, weddings, baby naming, and more.",
            itemListElement: [
              {
                "@type": "Product",
                name: "Birthday Celebration Package",
                description:
                  "Full planning and vendor services for birthday celebrations in Ghana.",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "GHS",
                  price: "1500",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "Product",
                name: "Wedding Package",
                description:
                  "Customized wedding planning with experienced vendors, venues, and décor.",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "GHS",
                  price: "5000",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "Product",
                name: "Baby Naming Ceremony Package",
                description:
                  "Beautifully organized baby naming ceremonies with local traditions and professional vendors.",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "GHS",
                  price: "2000",
                  availability: "https://schema.org/InStock",
                },
              },
            ],
          }),
        }}
      />

      <EventPackages />
    </>
  );
}
