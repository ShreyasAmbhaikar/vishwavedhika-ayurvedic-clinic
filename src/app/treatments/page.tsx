import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ServicesDirectory } from "@/components/services/ServicesDirectory";
import { CANONICAL_SERVICES } from "@/data/servicesData";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Ayurvedic Treatments in Kharadi Pune | Shri Vishwavedhika",
  description:
    "Explore 20 authentic Ayurvedic & Panchakarma treatments in Kharadi, Pune: Kati Basti, Shirodhara, Garbha Sanskar & detox care at Shri Vishwavedhika Clinic.",
  alternates: {
    canonical: "/treatments",
  },
  openGraph: {
    title: "Ayurvedic Treatments in Kharadi Pune | Shri Vishwavedhika",
    description:
      "Explore 20 authentic Ayurvedic & Panchakarma treatments in Kharadi, Pune: Kati Basti, Shirodhara, Garbha Sanskar & detox care at Shri Vishwavedhika Clinic.",
    url: "https://vishwavedhikaayurveda.com/treatments",
    siteName: siteConfig.name,
  },
};

export default function TreatmentsPage() {
  const serviceList = CANONICAL_SERVICES;

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
        name: "Treatments",
        item: "https://vishwavedhikaayurveda.com/treatments",
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
      <Navbar />

      <main className="flex-1">
        {/* Title Header */}
        <section className="pt-8 sm:pt-10 pb-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#16231B] tracking-tight mb-2">
              Our Ayurvedic Treatments
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400 font-normal">»</span>
              <span className="text-[#145E3F] font-medium">Treatments</span>
            </nav>
          </div>
        </section>

        {/* Categorized Treatments Directory */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesDirectory services={serviceList} />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
