import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Ayurvedic Treatment Gallery | Kharadi, Pune Clinic",
  description:
    "View authentic Panchakarma, Shirodhara, and Basti therapy facilities at Shri Vishwavedhika Ayurvedic Clinic in Kharadi, Pune. Clean, classical healing setup.",
  alternates: {
    canonical: "/treatment-gallery",
  },
  openGraph: {
    title: "Ayurvedic Treatment Gallery | Kharadi, Pune Clinic",
    description:
      "Visual journey into authentic Ayurvedic treatments, herbal therapies, and patient care in Kharadi, Pune.",
    url: "https://vishwavedhikaayurveda.com/treatment-gallery",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/services/panchakarma-treatment-in-kharadi.webp",
        width: 1024,
        height: 682,
        alt: "Authentic Five-Fold Panchakarma Therapies at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
      },
    ],
  },
};

export default function TreatmentGalleryPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vishwavedhikaayurveda.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Treatment Gallery",
        item: "https://vishwavedhikaayurveda.com/treatment-gallery",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Sticky Top Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Title & Breadcrumb Header matching screenshot */}
        <section className="pt-8 sm:pt-10 pb-6 sm:pb-8">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#16231B] tracking-tight mb-2">
              Treatment Gallery
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400 font-normal">»</span>
              <span className="text-[#145E3F] font-medium">Treatment Gallery</span>
            </nav>
          </div>
        </section>

        {/* 20-Image Authentic Clinical Gallery Section */}
        <section className="pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <GalleryGrid />
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
