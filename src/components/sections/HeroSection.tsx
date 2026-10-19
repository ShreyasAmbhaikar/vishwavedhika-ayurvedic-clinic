"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { heroSlides } from "@/data/siteData";
import { GoogleGIcon } from "@/components/ui/GoogleGIcon";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="pt-2 sm:pt-4 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Container with signature curved top-right corner.
            Extended min-height ensures on the initial viewport (first screen),
            the card extends beyond the bottom fold so the background below is not seen until scrolling. */}
        <div
          className="relative overflow-hidden corner-curve-hero shadow-2xl p-6 sm:p-10 lg:p-14 xl:p-16 py-10 sm:py-14 lg:py-16 xl:py-20 text-white min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-50px)] flex flex-col justify-center"
          style={{
            backgroundImage: "url('/images/bg.webp')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundColor: "#145E3F",
          }}
        >
          {/* 92% Forest Green Overlay */}
          <div className="absolute inset-0 bg-[#145E3F]/92 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Clinic Image Carousel (5 cols) - kept intact without the building photo */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[480px] h-[400px] sm:h-[480px] lg:h-[520px] xl:h-[560px] corner-curve-slider overflow-hidden shadow-2xl bg-black/20">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      className="object-cover corner-curve-slider"
                    />
                  </div>
                ))}

                {/* Subtle Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-1.5">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide
                          ? "w-6 bg-[#48A547]"
                          : "w-2 bg-white/50"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content & Expanded Typography (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 lg:space-y-7">
              {/* Eyebrow */}
              <p className="font-serif-heading text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[1.5px] text-white/95">
                Welcome to Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center
              </p>

              {/* Main Heading H1 in El Messiri - Increased font size per user request */}
              <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-[50px] xl:text-[56px] leading-[1.12] font-medium text-white capitalize tracking-[0.5px]">
                Discover The Healing Power Of Ayurveda In Kharadi, Pune
              </h1>

              {/* Layout Below Heading matching Image Attachment 2: Side-by-Side Content & Medicines Photo */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 lg:gap-6 items-end pt-2 sm:pt-3">
                {/* Left Sub-column: Description, Button & Google Reviews */}
                <div className="sm:col-span-7 space-y-4 sm:space-y-5">
                  <p className="font-sans-body text-xs sm:text-[14px] lg:text-[15px] font-light text-white/90 leading-[23px]">
                    Authentic Ayurvedic therapies guided by experienced
                    practitioners for holistic wellness, root-cause diagnosis,
                    and natural healing.
                  </p>

                  {/* Make Appointment Pill Button */}
                  <div className="pt-1">
                    <Link
                      href="/contact-us"
                      className="inline-block px-7 sm:px-8 py-3.5 rounded-full bg-white text-[#145E3F] hover:bg-[#000000] hover:text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-200 capitalize transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      Make Appointment
                    </Link>
                  </div>

                  {/* Google Reviews Badge with Google 'G' logo & Review Count */}
                  <div className="pt-2 sm:pt-3 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div
                        className="flex items-center gap-0.5"
                        aria-label="5 out of 5 stars"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-[#FFA300] text-[#FFA300]"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 font-bold text-white text-sm sm:text-base">
                        <GoogleGIcon className="w-4 h-4 shrink-0 drop-shadow-sm" />
                        <span>5.0</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-[13px] text-white/90 font-medium tracking-wide">
                      20+ Google Reviews
                    </p>
                  </div>
                </div>

                {/* Right Sub-column: Prominent Medicines Photo with corner-curve-medicine */}
                <div className="sm:col-span-5 flex justify-center sm:justify-end">
                  <div className="relative w-full max-w-[280px] sm:max-w-none h-[170px] sm:h-[195px] lg:h-[215px] xl:h-[230px] corner-curve-medicine overflow-hidden shadow-2xl border-2 border-white/25 bg-[#0E422C]/40">
                    <Image
                      src="/images/medicines.webp"
                      alt="Authentic Ayurvedic Medicines & Therapies"
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover corner-curve-medicine hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
