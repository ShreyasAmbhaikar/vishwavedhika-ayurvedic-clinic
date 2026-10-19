import React from "react";
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
