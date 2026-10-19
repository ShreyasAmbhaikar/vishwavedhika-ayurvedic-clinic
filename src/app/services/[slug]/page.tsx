import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { TreatmentFAQ } from "@/components/services/TreatmentFAQ";
import { MoreServicesCard } from "@/components/services/MoreServicesCard";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found | Shree Vishwavedhika Ayurvedic Clinic",
    };
  }

  return {
    title: `${service.title} | Shree Vishwavedhika Ayurvedic Clinic`,
    description: service.description.slice(0, 160) + "...",
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Shree Vishwavedhika Ayurvedic Clinic`,
      description: service.description.slice(0, 160) + "...",
      url: `https://vishwavedhikaayurveda.com/services/${slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 800,
          alt: service.imageAlt,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Title & Breadcrumb Header Section */}
        <section className="pt-8 sm:pt-10 pb-4 sm:pb-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#16231B] tracking-tight mb-2">
              {service.title}
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400 font-normal">»</span>
              <Link
                href="/services"
                className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
              >
                Services
              </Link>
              <span className="text-gray-400 font-normal">»</span>
              <span className="text-[#145E3F] font-medium">
                {service.breadcrumbLabel}
              </span>
            </nav>
          </div>
        </section>

        {/* Main Content & Sidebar Grid (Left: Content & FAQs, Right: More Services Green Card) */}
        <section className="py-6 sm:py-8 pb-16 sm:pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Image, Narrative, Checklist & Treatment FAQs (8 cols) */}
              <div className="lg:col-span-8">
                {/* Featured Service Image with Signature Arched Top-Right Corner */}
                <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[460px] rounded-tl-[20px] rounded-tr-[80px] sm:rounded-tr-[110px] rounded-br-[20px] rounded-bl-[20px] overflow-hidden shadow-lg border border-[#145E3F]/10 mb-8">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Main Service Description */}
                <p className="text-[#4A4A4A] text-sm sm:text-[15px] leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Subheading */}
                <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#16231B] mb-3">
                  {service.subheading}
                </h2>

                {/* Subcontent */}
                <p className="text-[#4A4A4A] text-sm sm:text-[15px] leading-relaxed mb-6">
                  {service.subcontent}
                </p>

                {/* 5 Karmas Checklist with Bullseye Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {service.checklist.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 bg-white/70 border border-[#145E3F]/15 rounded-xl px-4 py-3 shadow-2xs"
                    >
                      <div className="w-5 h-5 rounded-full border-2 border-[#145E3F] flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#145E3F]" />
                      </div>
                      <span className="text-sm font-semibold text-[#16231B]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Treatment FAQs on the Left-Hand Side */}
                <TreatmentFAQ serviceTitle={service.title} faqs={service.faqs} />
              </div>

              {/* Right Column: More Services Green Card (4 cols) - Sticky */}
              <div className="lg:col-span-4 lg:sticky lg:top-24">
                <MoreServicesCard currentSlug={service.slug} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </div>
  );
}
