import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/siteData";

export const viewport: Viewport = {
  themeColor: "#145E3F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shri Vishwawedhika Ayurvedic Center & Panchakarma Garbha Sanskar Center",
  description:
    "Shri Vishwawedhika Ayurvedic Center & Panchakarma Garbha Sanskar Center in Kharadi, Pune. Authentic Ayurvedic healing, Panchakarma therapies, and Garbha Sanskar care.",
  keywords: [
    "Shri Vishwawedhika Ayurvedic Center",
    "Vishwavedhika Ayurvedic Clinic",
    "Panchakarma Pune",
    "Garbha Sanskar Center Kharadi",
    "Ayurvedic Clinic in Kharadi Pune",
    "Best Ayurvedic doctor Pune",
    "Panchakarma treatment Kharadi",
    "Garbhasanskar Pune",
  ],
  authors: [{ name: "Shri Vishwawedhika Ayurvedic Center & Panchakarma Garbha Sanskar Center" }],
  creator: "Shri Vishwawedhika Ayurvedic Center",
  metadataBase: new URL("https://vishwavedhikaayurveda.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shri Vishwawedhika Ayurvedic Center & Panchakarma Garbha Sanskar Center",
    description:
      "Authentic Ayurvedic healing, traditional Panchakarma therapies, and Garbha Sanskar care in Kharadi, Pune under expert Ayurvedic doctors.",
    url: "https://vishwavedhikaayurveda.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/ogimage-1.jpg",
        width: 1200,
        height: 630,
        alt: "Shri Vishwawedhika Ayurvedic Center & Panchakarma Garbha Sanskar Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Vishwawedhika Ayurvedic Center & Panchakarma Garbha Sanskar Center",
    description:
      "Authentic Ayurvedic healing, traditional Panchakarma therapies, and Garbha Sanskar care in Kharadi, Pune.",
    images: ["/images/ogimage-1.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/images/logo-emblem.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="bg-[#FDF4E5] text-[#383838] min-h-screen antialiased selection:bg-[#145E3F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
