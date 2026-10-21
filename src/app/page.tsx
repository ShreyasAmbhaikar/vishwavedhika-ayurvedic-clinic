import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { HeroSection } from "@/components/sections/HeroSection";
import { TreatmentTickerStrip } from "@/components/sections/TreatmentTickerStrip";
import { HolisticOfferings } from "@/components/sections/HolisticOfferings";
import { ComprehensiveTreatments } from "@/components/sections/ComprehensiveTreatments";
import { HealingProcess } from "@/components/sections/HealingProcess";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Best Ayurvedic Clinic in Kharadi, Pune | Shri Vishwavedhika",
  description:
    "Shri Vishwavedhika Ayurvedic Clinic in Kharadi, Pune offers authentic Panchakarma, Garbha Sanskar & spine joint pain care by Dr. Manjiri Musmade (BAMS).",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Ayurvedic Clinic in Kharadi, Pune | Shri Vishwavedhika",
    description:
      "Shri Vishwavedhika Ayurvedic Clinic in Kharadi, Pune offers authentic Panchakarma, Garbha Sanskar & spine joint pain care by Dr. Manjiri Musmade (BAMS).",
    url: "https://vishwavedhikaayurveda.com",
    siteName: "Shri Vishwavedhika Ayurvedic Clinic",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        <HeroSection />
        <TreatmentTickerStrip />
        <HolisticOfferings />
        <ComprehensiveTreatments />
        <HealingProcess />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Controls (WhatsApp, Call, Scroll-to-top) */}
      <FloatingActions />
    </div>
  );
}
