"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { heroSlides } from "@/data/siteData";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="py-2 sm:py-4">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Container with signature curved top-right corner */}
        <div
          className="relative overflow-hidden corner-curve-hero shadow-2xl p-6 sm:p-10 lg:p-16 text-white"
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
            {/* Left Column: Hospital Building Image Carousel (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[460px] h-[360px] sm:h-[430px] lg:h-[470px] corner-curve-slider overflow-hidden shadow-2xl bg-black/20">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
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
                      className={`h-1.5 rounded-full transition-all duration-300 ${
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

            {/* Right Column: Hero Content & Exact Typography (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              {/* Eyebrow */}
              <p className="font-serif-heading text-sm sm:text-base font-bold uppercase tracking-[1px] text-white">
                Welcome to Shri Vishwawedhika Ayurvedic Center
              </p>

              {/* Main Heading H1 in El Messiri */}
              <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-[62px] leading-[1.12] font-medium text-white capitalize tracking-[0.5px]">
                Discover The Healing Power Of Ayurveda In Kharadi, Pune
              </h1>

              {/* Description in Plus Jakarta Sans */}
              <p className="font-sans-body text-sm sm:text-[15px] font-light text-white/90 leading-[22px] max-w-xl">
                Authentic Ayurvedic therapies guided by experienced practitioners
                for holistic wellness and natural healing.
              </p>

              {/* Make Appointment Pill Button */}
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-block px-8 py-3.5 rounded-full bg-white text-[#145E3F] hover:bg-[#000000] hover:text-white text-base font-semibold shadow-lg transition-all duration-200 capitalize transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Make Appointment
                </Link>
              </div>

              {/* Bottom Feature Widget: Rating on Left, Medicines photo on Right */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-6 max-w-lg">
                {/* 5.0 Rating */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-[#FFA300] text-[#FFA300]"
                      />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-[#FFA300] tracking-wider">
                    5.0 ★ 20 Google reviews
                  </p>
                </div>

                {/* Small Medicines Image with signature corner-curve-medicine */}
                <div className="relative w-36 sm:w-44 h-20 sm:h-22 corner-curve-medicine overflow-hidden shadow-xl border border-white/30">
                  <Image
                    src="/images/medicines.webp"
                    alt="Authentic Ayurvedic Medicines & Therapies"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
