import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Vishwavedhika Ayurvedic Clinic | Kharadi, Pune",
  description:
    "Visit Shri Vishwavedhika Ayurvedic Clinic at Parmar Square, near Zensar, Kharadi, Pune. Call 076203 41397 / 096049 95998 / 097302 93777 or book your doctor consultation online today.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Vishwavedhika Ayurvedic Clinic | Kharadi, Pune",
    description:
      "Visit Shri Vishwavedhika Ayurvedic Clinic at Parmar Square, near Zensar, Kharadi, Pune. Call 076203 41397 / 096049 95998 / 097302 93777 or book your doctor consultation online today.",
    url: "https://vishwavedhikaayurveda.com/contact-us",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/ogimage-1.jpg",
        width: 1200,
        height: 630,
        alt: "Shri Vishwavedhika Ayurvedic Clinic Location and Contact",
      },
    ],
  },
};

export default function ContactUsPage() {
  const googleMapsUrl = siteConfig.googleMapsUrl;
  const mapQuery = encodeURIComponent(
    "Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center Kharadi Pune"
  );

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
        name: "Contact Us",
        item: "https://vishwavedhikaayurveda.com/contact-us",
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
      {/* Top Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* TOP HEADER SECTION */}
        <section className="pt-8 sm:pt-10 pb-6 sm:pb-8">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16 xl:gap-20">
              {/* Left Side: Heading & Breadcrumb */}
              <div className="w-full lg:max-w-[480px] space-y-2.5">
                <span className="text-xs font-bold tracking-[0.2em] text-[#145E3F] uppercase block">
                  GET IN TOUCH
                </span>
                <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#16231B] leading-[1.18]">
                  Feel Free To Drop Us A Message
                </h1>
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-2 text-sm pt-1"
                >
                  <Link
                    href="/"
                    className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-gray-400 font-normal">»</span>
                  <span className="text-[#145E3F] font-medium">Contact Us</span>
                </nav>
              </div>

              {/* Right Side: Narrative Description */}
              <div className="w-full lg:max-w-[540px]">
                <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
                  Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center is committed to delivering authentic,
                  results-driven Ayurvedic treatment in Kharadi, Pune. We provide
                  strong personalized care for our patients. You can schedule an
                  in-person or online consultation with our expert Ayurvedic
                  doctors who are available to assist your healing journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOUR CONTACT CARDS ROW - Clearly distinguishable with white background, clear borders and bold serif headings */}
        <section className="py-4 sm:py-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: LOCATE US (linked to Google Maps) */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#E4D7C5] rounded-2xl p-6 sm:p-7 flex items-start gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#145E3F] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#0E432D] transition-colors">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="font-serif-heading text-lg sm:text-[19px] font-bold text-[#145E3F] leading-snug mb-1.5">
                    Locate Us
                  </h2>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#16231B] leading-relaxed group-hover:text-[#145E3F] transition-colors">
                    Flat no.104, IT Park, Parmar Square, near Zensar, above
                    Hotel Kwality, Kharadi, Pune, Maharashtra 411014
                  </p>
                </div>
              </a>

              {/* Card 2: OPENING HOURS */}
              <div className="bg-white border border-[#E4D7C5] rounded-2xl p-6 sm:p-7 flex items-start gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-[#145E3F] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="font-serif-heading text-lg sm:text-[19px] font-bold text-[#145E3F] leading-snug mb-2">
                    Opening Hours
                  </h2>
                  <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-xs sm:text-[13px] leading-relaxed">
                    <span className="text-[#666666] font-medium whitespace-nowrap">
                      Mon – Sat:
                    </span>
                    <span className="text-[#16231B] font-semibold whitespace-nowrap">
                      11:30 AM – 5:30 PM
                    </span>
                    <span className="text-[#666666] font-medium whitespace-nowrap">
                      Sunday:
                    </span>
                    <span className="text-red-700 font-bold uppercase tracking-wider text-xs px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200 inline-block w-fit">
                      Closed
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: CALL US */}
              <div className="bg-white border border-[#E4D7C5] rounded-2xl p-6 sm:p-7 flex items-start gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-[#145E3F] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="font-serif-heading text-lg sm:text-[19px] font-bold text-[#145E3F] leading-snug mb-2">
                    Call Us
                  </h2>
                  <div className="space-y-1">
                    <a
                      href={`tel:${siteConfig.phone1}`}
                      className="text-sm sm:text-[15px] font-semibold text-[#16231B] hover:text-[#145E3F] transition-colors block leading-snug"
                    >
                      {siteConfig.phone1}
                    </a>
                    <a
                      href={`tel:${siteConfig.phone2}`}
                      className="text-sm sm:text-[15px] font-semibold text-[#16231B] hover:text-[#145E3F] transition-colors block leading-snug"
                    >
                      {siteConfig.phone2}
                    </a>
                    <a
                      href={`tel:${siteConfig.phone3}`}
                      className="text-sm sm:text-[15px] font-semibold text-[#16231B] hover:text-[#145E3F] transition-colors block leading-snug"
                    >
                      {siteConfig.phone3}
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4: EMAIL US */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="bg-white border border-[#E4D7C5] rounded-2xl p-6 sm:p-7 flex items-start gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#145E3F] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#0E432D] transition-colors">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="font-serif-heading text-lg sm:text-[19px] font-bold text-[#145E3F] leading-snug mb-2">
                    Email Us
                  </h2>
                  <p className="text-xs sm:text-[13.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-relaxed break-all">
                    {siteConfig.email}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* BIG GREEN CARD WITH GOOGLE MAP EMBED */}
        <section className="py-8 sm:py-12 mb-12 sm:mb-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0F5A38] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-xl border border-[#145E3F]/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Side: Call to Action Statement */}
                <div className="lg:col-span-5">
                  <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-[28px] font-semibold text-[#FDF4E5] leading-relaxed max-w-md">
                    Start Your Healing Journey With Authentic Ayurveda. Share Your Details And Our Team
                    Will Guide You With The Right Treatment Plan.
                  </h2>
                </div>

                {/* Right Side: Google Maps Card Embed */}
                <div className="lg:col-span-7">
                  <div className="w-full rounded-[20px] overflow-hidden shadow-2xl border-2 border-white/20 relative bg-white h-[420px] sm:h-[480px] lg:h-[500px]">
                    {/* Google Map Iframe */}
                    <iframe
                      title="Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune Location Map"
                      src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
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
