import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Home, Heart, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#093F29] text-white border-t border-[#145E3F] pt-12 sm:pt-14 pb-6 sm:pb-8">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid Layout matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand & Intro (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-13 h-13 sm:w-16 sm:h-16 shrink-0 rounded-full overflow-hidden shadow-sm border-2 border-[#A4E88C]/35 bg-white">
                <Image
                  src="/images/logo-emblem.webp"
                  alt="Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center Logo"
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-heading text-lg sm:text-xl font-bold text-white leading-tight tracking-tight">
                  Shri Vishwavedhika
                </span>
                <span className="font-serif-heading text-sm sm:text-base font-semibold text-[#FDF4E5] leading-tight">
                  Ayurvedic Clinic
                </span>
                <span className="text-[10.5px] sm:text-xs font-medium text-[#A4E88C] leading-tight tracking-wide">
                  &amp; Garbhsanskar, Panchakarma Center
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#FDF4E5]/80 font-sans-body leading-relaxed max-w-sm">
              Heal naturally with Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center! Providing personalized Ayurvedic healing, Panchakarma detoxification, and Garbha Sanskar care in Kharadi, Pune.
            </p>

            <p className="text-xs text-[#A4E88C] font-serif-heading italic">
              &ldquo;स्वस्थस्य स्वास्थ्यरक्षणम् । आतुरस्य व्याधिपरिमोक्षे :॥&rdquo;
            </p>
          </div>

          {/* Column 2: Useful Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <div>
              <h3 className="font-serif-heading text-lg font-semibold text-white mb-4">
                Useful Links
              </h3>
              <ul className="space-y-2.5 text-sm text-[#FDF4E5]/80 font-sans-body">
                <li>
                  <Link href="/" className="hover:text-[#A4E88C] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-[#A4E88C] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/treatments" className="hover:text-[#A4E88C] transition-colors">
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/treatment-gallery" className="hover:text-[#A4E88C] transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-[#A4E88C] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Main Treatments Single Column (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif-heading text-lg font-semibold text-white mb-4">
              Our Treatments
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FDF4E5]/80 font-sans-body">
              <li>
                <Link href="/treatments/panchakarma-treatment-in-kharadi" className="hover:text-[#A4E88C] transition-colors block">
                  Panchakarma (5-Fold Detox)
                </Link>
              </li>
              <li>
                <Link href="/treatments/garbha-sanskar-in-kharadi" className="hover:text-[#A4E88C] transition-colors block">
                  Garbha Sanskar Program
                </Link>
              </li>
              <li>
                <Link href="/treatments/kati-basti-treatment-in-kharadi" className="hover:text-[#A4E88C] transition-colors block">
                  Kati Basti (Back &amp; Sciatica)
                </Link>
              </li>
              <li>
                <Link href="/treatments/janu-basti-treatment-in-kharadi" className="hover:text-[#A4E88C] transition-colors block">
                  Janu Basti (Knee Joint Care)
                </Link>
              </li>
              <li>
                <Link href="/treatments/shirodhara-treatment-in-kharadi" className="hover:text-[#A4E88C] transition-colors block">
                  Shirodhara (Stress &amp; Sleep)
                </Link>
              </li>
              <li>
                <Link href="/treatments/infertility-treatment-in-kharadi" className="hover:text-[#A4E88C] transition-colors block">
                  Infertility &amp; PCOD Care
                </Link>
              </li>
              <li>
                <Link href="/treatments/stroke-rehabilitation-in-kharadi" className="hover:text-[#A4E88C] transition-colors block">
                  Stroke Rehabilitation
                </Link>
              </li>
            </ul>
            <div className="mt-3.5 pt-2.5 border-t border-white/10">
              <Link
                href="/treatments"
                className="text-xs font-semibold text-[#A4E88C] hover:underline inline-flex items-center gap-1"
              >
                <span>View All Treatments Directory &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif-heading text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-[#FDF4E5]/80 font-sans-body">
              {/* Opening Hours (2-column layout) */}
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#A4E88C] shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm text-[#FDF4E5]/90">
                  <span className="font-semibold text-[#A4E88C] block">
                    Opening Hours
                  </span>
                  <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs sm:text-[13px] leading-snug pt-0.5">
                    <span className="text-[#FDF4E5]/80 whitespace-nowrap">Mon – Sat:</span>
                    <span className="text-white font-medium whitespace-nowrap">11:30 AM – 5:30 PM</span>
                    <span className="text-[#FDF4E5]/80 whitespace-nowrap">Sun:</span>
                    <span className="text-amber-300 font-semibold uppercase tracking-wider text-[11px] px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30 inline-block w-fit">Closed</span>
                  </div>
                </div>
              </div>

              {/* Phone / WhatsApp - Green font color matching content */}
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#A4E88C] shrink-0 mt-0.5" />
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#FDF4E5]/90">
                  <a
                    href={`tel:${siteConfig.phone1}`}
                    className="hover:text-[#A4E88C] transition-colors"
                  >
                    {siteConfig.phone1}
                  </a>
                  <span className="text-[#A4E88C]/60">/</span>
                  <a
                    href={`tel:${siteConfig.phone2}`}
                    className="hover:text-[#A4E88C] transition-colors"
                  >
                    {siteConfig.phone2}
                  </a>
                  <span className="text-[#A4E88C]/60">/</span>
                  <a
                    href={`tel:${siteConfig.phone3}`}
                    className="hover:text-[#A4E88C] transition-colors"
                  >
                    {siteConfig.phone3}
                  </a>
                </div>
              </div>

              {/* Address linked to Google Maps */}
              <div className="flex items-start gap-3">
                <Home size={18} className="text-[#A4E88C] shrink-0 mt-0.5" />
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-[#FDF4E5]/90 hover:text-[#A4E88C] transition-colors underline-offset-2 hover:underline"
                  title="View on Google Maps"
                >
                  Flat no.104, IT Park, Parmar Square, near Zensar, above Hotel Kwality, Kharadi, Pune, Maharashtra 411014
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card Container with Rounded Corners (Harmoniously Blended Brand Green) */}
        <div className="bg-[#145E3F] border border-white/15 rounded-2xl p-4 sm:px-7 sm:py-3.5 shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-xs sm:text-sm text-white/90 font-sans-body text-center sm:text-left">
            {/* Left: Copyright */}
            <p className="leading-relaxed">
              Copyright &copy; 2026 <span className="font-semibold text-white">Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</span>, All rights reserved.
            </p>

            {/* Mobile Divider */}
            <hr className="w-full border-t border-white/20 my-1 sm:hidden" />

            {/* Right: Developed with Love by Quantum Reach Media with WhatsApp link & hover green */}
            <p className="flex items-center justify-center gap-1.5 text-white/90">
              <span>Developed with</span>
              <Heart className="w-4 h-4 fill-[#FF4D4D] text-[#FF4D4D] inline-block shrink-0 animate-pulse" />
              <span>by</span>
              <a
                href="https://wa.me/919284394722?text=Hello%20Quantum%20Reach%20Media"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold tracking-wide hover:text-[#A4E88C] transition-colors cursor-pointer"
                title="Connect with Quantum Reach Media on WhatsApp (9284394722)"
              >
                Quantum Reach Media
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
