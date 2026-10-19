import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles, Phone, Compass } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { siteConfig } from "@/data/siteData";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145E3F]/10 border border-[#145E3F]/15 text-[#145E3F] text-xs font-bold uppercase tracking-wider mb-6">
            <Compass size={14} />
            <span>404 Error • Page Not Found</span>
          </div>

          {/* 404 Title */}
          <h1 className="font-serif-heading text-6xl sm:text-7xl lg:text-8xl font-extrabold text-[#145E3F] tracking-tight mb-4">
            404
          </h1>

          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#16231B] mb-4">
            Let Us Guide You Back to Wellness
          </h2>

          <p className="font-sans-body text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-lg mx-auto mb-8">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Browse our authentic Ayurvedic treatments or get in touch with our clinic in Kharadi, Pune.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#145E3F] hover:bg-[#0f462f] text-white text-sm font-semibold shadow-md transition-all duration-200 hover:scale-105"
            >
              <Home size={16} />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-white/80 text-[#145E3F] border border-[#145E3F]/25 text-sm font-semibold shadow-sm transition-all duration-200"
            >
              <Sparkles size={16} className="text-[#48A547]" />
              <span>Explore Treatments</span>
            </Link>

            <a
              href={`tel:${siteConfig.phone1}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF3E7] hover:bg-[#f0e4d2] text-[#16231B] border border-[#E5DACB] text-sm font-semibold shadow-sm transition-all duration-200"
            >
              <Phone size={16} className="text-[#145E3F]" />
              <span>Call Clinic</span>
            </a>
          </div>

          {/* Quick Treatment Links */}
          <div className="bg-[#FAF3E7] border border-[#E5DACB] rounded-2xl p-6 sm:p-7 max-w-xl mx-auto shadow-sm text-left">
            <h3 className="font-serif-heading text-xs font-bold tracking-wider text-[#145E3F] uppercase mb-3">
              Popular Treatments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium">
              <Link
                href="/services/panchakarma-treatment"
                className="text-[#16231B] hover:text-[#145E3F] hover:underline flex items-center gap-2"
              >
                <span className="text-[#48A547]">✦</span> Panchakarma Therapy
              </Link>
              <Link
                href="/services/stroke-treatment"
                className="text-[#16231B] hover:text-[#145E3F] hover:underline flex items-center gap-2"
              >
                <span className="text-[#48A547]">✦</span> Stroke Rehabilitation
              </Link>
              <Link
                href="/services/back-pain-treatment"
                className="text-[#16231B] hover:text-[#145E3F] hover:underline flex items-center gap-2"
              >
                <span className="text-[#48A547]">✦</span> Spine &amp; Back Pain Care
              </Link>
              <Link
                href="/treatment-gallery"
                className="text-[#16231B] hover:text-[#145E3F] hover:underline flex items-center gap-2"
              >
                <span className="text-[#48A547]">✦</span> Treatment Gallery
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
