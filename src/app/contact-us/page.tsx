import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Clock, Phone, ExternalLink, Navigation } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Us | Shri Vishwawedhika Ayurvedic Center & Panchakarma Garbha Sanskar Center",
  description:
    "Get in touch with Shri Vishwawedhika Ayurvedic Center in Kharadi, Pune. Contact our expert Ayurvedic doctors for authentic treatments, Panchakarma therapies, and Garbha Sanskar consultations.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Shri Vishwawedhika Ayurvedic Center & Panchakarma Garbha Sanskar Center",
    description:
      "Feel free to drop us a message. Reach Shri Vishwawedhika Ayurvedic Center in Kharadi, Pune via phone, WhatsApp, or visit our centre at Parmar Square.",
    url: "https://vishwavedhikaayurveda.com/contact-us",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/ogimage-1.jpg",
        width: 1200,
        height: 630,
        alt: "Shri Vishwawedhika Ayurvedic Center Location and Contact",
      },
    ],
  },
};

export default function ContactUsPage() {
  const googleMapsUrl = siteConfig.googleMapsUrl;
  const mapQuery = encodeURIComponent(
    "Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchkarma centre Kharadi Pune"
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      {/* Top Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* TOP HEADER SECTION */}
        <section className="pt-8 sm:pt-10 pb-6 sm:pb-8">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              {/* Left Column: Heading & Breadcrumb */}
              <div className="lg:col-span-6 space-y-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#145E3F] uppercase block">
                  GET IN TOUCH
                </span>
                <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#16231B] leading-tight">
                  Feel Free To <br className="hidden sm:inline" />
                  Drop Us A Message
                </h1>
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm pt-1">
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

              {/* Right Column: Narrative Description */}
              <div className="lg:col-span-6 lg:pt-5">
                <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed max-w-xl">
                  Shree Vishwavedhika Ayurvedic Clinic &amp; Panchakarma Garbhasanskar Center is committed to delivering
                  authentic, results-driven Ayurvedic treatment in Kharadi, Pune. We provide strong personalized care for
                  our patients. You can schedule an in-person or online consultation with our expert Ayurvedic doctors who are
                  available to assist your healing journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THREE CONTACT CARDS ROW */}
        <section className="py-4 sm:py-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: LOCATE US (linked to Google Maps) */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FAF3E7] border border-[#EFE5D8] rounded-2xl p-6 sm:p-7 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#182B20] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#145E3F] transition-colors">
                  <MapPin size={20} className="text-[#FDF4E5]" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#145E3F] uppercase block mb-1">
                    LOCATE US
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#444444] font-medium leading-relaxed group-hover:text-[#145E3F] transition-colors">
                    Flat no.104, IT Park, Parmar Square, near Zensar, above redchilli hotel, Kharadi, Pune, Maharashtra 411014
                  </p>
                </div>
              </a>

              {/* Card 2: OPENING HOURS */}
              <div className="bg-[#FAF3E7] border border-[#EFE5D8] rounded-2xl p-6 sm:p-7 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-[#182B20] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock size={20} className="text-[#FDF4E5]" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#145E3F] uppercase block mb-1.5">
                    OPENING HOURS
                  </span>
                  <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs sm:text-[13px] leading-relaxed">
                    <span className="font-semibold text-[#145E3F] whitespace-nowrap">Mon – Sat:</span>
                    <span className="text-[#444444] font-medium whitespace-nowrap">11:30 AM – 5:30 PM</span>
                    <span className="font-semibold text-[#145E3F] whitespace-nowrap">SUN:</span>
                    <span className="text-[#444444] font-medium whitespace-nowrap">11:30 AM – 2:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Card 3: CALL US */}
              <div className="bg-[#FAF3E7] border border-[#EFE5D8] rounded-2xl p-6 sm:p-7 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-[#182B20] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone size={20} className="text-[#FDF4E5]" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#145E3F] uppercase block mb-1">
                    CALL US
                  </span>
                  <a
                    href={`tel:${siteConfig.phone1}`}
                    className="text-sm font-semibold text-[#145E3F] hover:underline transition-colors block leading-tight"
                  >
                    {siteConfig.phone1}
                  </a>
                  <a
                    href={`tel:${siteConfig.phone2}`}
                    className="text-sm font-semibold text-[#145E3F] hover:underline transition-colors block leading-tight mt-1"
                  >
                    {siteConfig.phone2}
                  </a>
                </div>
              </div>
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

                    {/* Google Maps Floating Info Badge Matching Screenshot */}
                    <div className="absolute top-3 left-3 z-10 max-w-[290px] sm:max-w-[320px] bg-white rounded-xl shadow-lg border border-gray-200 p-3.5 text-xs text-gray-700 pointer-events-auto">
                      <div className="font-bold text-gray-900 text-sm leading-tight mb-1">
                        Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchkarma centre
                      </div>
                      <p className="text-[11px] text-gray-500 leading-snug mb-1.5">
                        Flat no.104, IT Park, Parmar Square, near Zensar, above redchilli hotel, Kharadi, Pune, Maharashtra 411014
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] mb-2.5">
                        <span className="font-bold text-gray-800">5.0</span>
                        <span className="text-[#FFA300]">★</span>
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1a73e8] hover:underline font-semibold"
                        >
                          (20 Google reviews)
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1a73e8] text-white font-medium hover:bg-[#1558b0] transition-colors text-[11px]"
                        >
                          <ExternalLink size={11} />
                          <span>Open in Maps</span>
                        </a>
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-[#1a73e8] hover:bg-blue-100 transition-colors"
                          title="Get Directions"
                        >
                          <Navigation size={12} />
                        </a>
                      </div>
                    </div>
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
