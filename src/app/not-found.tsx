import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Home } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full text-center">
          {/* Creative Botanical Emblem */}
          <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#145E3F]/15 via-[#48A547]/20 to-[#D4A373]/25 animate-pulse" />
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-md border border-[#145E3F]/15 flex items-center justify-center text-[#145E3F]">
              <span className="text-3xl sm:text-4xl select-none">🌿</span>
            </div>
          </div>

          {/* 404 Display */}
          <h1 className="font-serif-heading text-7xl sm:text-8xl lg:text-9xl font-bold text-[#145E3F] tracking-tight leading-none mb-3">
            404
          </h1>

          {/* Simple Creative Heading */}
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#16231B] mb-3">
            Path Not Found
          </h2>

          {/* Minimal 1-Line Description */}
          <p className="font-sans-body text-sm sm:text-base text-[#5A5A5A] max-w-md mx-auto mb-8 leading-relaxed">
            The page you are looking for has moved or does not exist. Let us guide you back to balance and wellness.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#145E3F] hover:bg-[#0E432D] text-white text-sm font-semibold shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Home size={16} />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-[#FAF3E7] text-[#145E3F] border border-[#145E3F]/25 text-sm font-semibold shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Sparkles size={16} className="text-[#48A547]" />
              <span>View Treatments</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
