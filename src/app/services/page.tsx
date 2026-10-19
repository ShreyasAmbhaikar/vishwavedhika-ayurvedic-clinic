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
  title: "Our Ayurvedic Treatments & Services | Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center",
  description:
    "Explore authentic Ayurvedic treatments at Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center in Kharadi, Pune: Panchakarma, Spine & Back Pain, Stroke Rehabilitation, Infertility, and Garbha Sanskar.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Ayurvedic Treatments & Services | Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center",
    description:
      "Authentic Ayurveda treatments and expert Panchakarma care in Kharadi, Pune.",
    url: "https://vishwavedhikaayurveda.com/services",
    siteName: siteConfig.name,
  },
};

export default function ServicesPage() {
  const serviceList = CANONICAL_SERVICES;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      <Navbar />

      <main className="flex-1">
        {/* Title Header */}
        <section className="pt-8 sm:pt-10 pb-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#16231B] tracking-tight mb-2">
              Our Treatments & Services
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400 font-normal">»</span>
              <span className="text-[#145E3F] font-medium">Services</span>
            </nav>
          </div>
        </section>

        {/* Categorized Services Directory */}
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
