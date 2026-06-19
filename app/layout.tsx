import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://blitzimmigration.com"),

  title: {
    default: "Blitz Immigration | Overseas Jobs & Global Recruitment from India",
    template: "%s | Blitz Immigration",
  },

  description:
    "Blitz Immigration is a licensed overseas recruitment agency connecting skilled and unskilled Indian workers with verified employers across the UK, Europe, Canada, Australia, New Zealand, and other global destinations.",

  keywords: [
    "overseas jobs",
    "jobs abroad",
    "international recruitment",
    "global recruitment",
    "overseas employment",
    "work abroad from India",
    "licensed overseas recruiter",
    "Indian manpower recruitment",
    "UK jobs for Indians",
    "Canada jobs",
    "Australia jobs",
    "Europe jobs",
    "New Zealand jobs",
    "overseas placement services",
    "foreign jobs for Indians",
    "international hiring",
    "skilled unskilled workers abroad",
    "Blitz Immigration",
  ],

  authors: [{ name: "Blitz Immigration" }],
  creator: "Blitz Immigration",
  publisher: "Blitz Immigration",

  openGraph: {
    title: "Blitz Immigration | Your Career Beyond Borders Starts Here",
    description:
      "Connecting Indian talent with verified employers worldwide. Explore overseas job opportunities across Europe, the UK, Canada, Australia, New Zealand, and beyond.",
    url: "https://blitzimmigration.com",
    siteName: "Blitz Immigration",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Blitz Immigration - Global Recruitment & Overseas Jobs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blitz Immigration | Overseas Jobs & Global Recruitment",
    description:
      "MEA-licensed recruitment agency connecting Indian workers with global employers.",
    images: ["/hero.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://blitzimmigration.com",
  },

  category: "Recruitment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
