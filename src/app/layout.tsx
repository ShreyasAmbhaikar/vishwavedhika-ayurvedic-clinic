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
  title: {
    default: "Shri Vishwavedhika Ayurvedic Clinic | Kharadi, Pune",
    template: "%s",
  },
  description:
    "Top-rated classical Ayurvedic clinic & Panchakarma centre in Kharadi, Pune. Expert consultations by Dr. Manjiri Musmade (BAMS, PGFC). Book an appointment.",
  keywords: [
    "Ayurvedic clinic in Kharadi Pune",
    "Best Ayurvedic doctor in Kharadi",
    "Panchakarma treatment in Kharadi",
    "Garbhsanskar centre in Kharadi Pune",
    "Shri Vishwavedhika Ayurvedic Clinic",
    "Dr Manjiri Musmade Ayurvedic Doctor",
    "Panchakarma Pune",
    "Ayurvedic clinic near me",
    "Ayurvedic clinic near Zensar Kharadi",
    "Ayurvedic clinic near EON IT Park",
    "Ayurvedic doctor Chandan Nagar Pune",
    "Ayurvedic clinic Viman Nagar Pune",
    "Kati Basti sciatica treatment Pune",
    "Shirodhara treatment Kharadi",
    "Nadi Pariksha Pune",
    "Infertility Ayurvedic treatment Pune",
  ],
  authors: [{ name: "Dr. Manjiri Musmade — Shri Vishwavedhika Ayurvedic Clinic" }],
  creator: "Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchkarma Centre",
  metadataBase: new URL("https://vishwavedhikaayurveda.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shri Vishwavedhika Ayurvedic Clinic | Kharadi, Pune",
    description:
      "Authentic Ayurvedic healing, traditional Panchakarma therapies, and Garbha Sanskar care in Kharadi, Pune under Dr. Manjiri Musmade at Parmar Square.",
    url: "https://vishwavedhikaayurveda.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/ogimage-1.jpg",
        width: 1200,
        height: 630,
        alt: "Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchkarma Centre Kharadi Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Vishwavedhika Ayurvedic Clinic | Kharadi, Pune",
    description:
      "Authentic Ayurvedic healing, Panchakarma therapies, and Garbha Sanskar care in Kharadi, Pune near Zensar & EON IT Park.",
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
