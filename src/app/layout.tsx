import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PartyGhana | Online Gift & Event Management",
  description:
    "PartyGhana is Ghana’s first and most trusted online gift management system. Easily plan events, manage presents, and let guests book gifts hassle-free.",
  keywords: [
    "PartyGhana",
    "Gift Management",
    "Event Planning Ghana",
    "Wedding Gifts",
    "Birthday Gifts",
    "Funeral Donations",
    "Outdooring Gifts",
    "Event Booking",
    "Ghana Events",
  ],
  authors: [{ name: "PartyGhana Team", url: "https://partyghana.com" }],
  openGraph: {
    title: "PartyGhana | Online Gift & Event Management",
    description:
      "Plan weddings, birthdays, outdooring ceremonies, and funerals with ease. PartyGhana helps you manage gifts and bookings stress-free.",
    url: "https://partyghana.com",
    siteName: "PartyGhana",
    images: [
      {
        url: "/og-image.png", // place SEO preview image inside public
        width: 1200,
        height: 630,
        alt: "PartyGhana Event & Gift Management",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PartyGhana | Online Gift & Event Management",
    description:
      "Simplify event planning and gift management with PartyGhana. Ghana’s most trusted system for weddings, birthdays, and more.",
    images: ["/og-image.png"],
    creator: "@PartyGhana",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
