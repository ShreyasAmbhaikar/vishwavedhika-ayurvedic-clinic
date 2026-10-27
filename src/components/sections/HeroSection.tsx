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
            Extended min-height ensures the hero section seamlessly fills the initial viewport,
            matching Image Attachment 1 without revealing lower sections until scrolling. */}
        <div className="relative overflow-hidden corner-curve-hero shadow-2xl p-6 sm:p-10 lg:p-14 xl:p-16 py-10 sm:py-12 lg:py-14 xl:py-16 text-white min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-50px)] flex flex-col justify-center bg-[#145E3F]">
          {/* LCP Discoverable High-Priority Background Image */}
          <Image
            src="/images/bg.webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center pointer-events-none -z-0"
          />
          {/* 92% Forest Green Overlay */}
          <div className="absolute inset-0 bg-[#145E3F]/92 pointer-events-none z-[1]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Clinic Image Carousel (5 cols) - Order 1 on mobile to sit at top */}
            <div className="lg:col-span-5 order-1 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[480px] h-[260px] sm:h-[450px] lg:h-[490px] xl:h-[530px] corner-curve-slider overflow-hidden shadow-2xl bg-black/20">
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
                      fetchPriority={index === 0 ? "high" : "auto"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 480px"
                      className="object-cover corner-curve-slider"
                    />
                  </div>
                ))}

                {/* Subtle Accessible Slide Indicators (40x40 touch target with 8px gap) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className="w-10 h-10 p-2 cursor-pointer flex items-center justify-center rounded-full touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <span
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentSlide
                            ? "w-6 bg-[#48A547]"
                            : "w-2 bg-white/60 hover:bg-white"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content & Expanded Typography (7 cols) - Order 2 on mobile */}
            <div className="lg:col-span-7 order-2 lg:order-2 space-y-5 lg:space-y-6">
              {/* Eyebrow */}
              <p className="font-serif-heading text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[1.5px] text-[#A4E88C]">
                Authentic Ayurveda, Panchakarma &amp; Garbhsanskar In Kharadi, Pune
              </p>

              {/* Main Heading H1 in El Messiri */}
              <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.16] font-medium text-white capitalize tracking-[0.5px]">
                Best Ayurvedic Clinic In Kharadi Pune For Panchakarma &amp; Garbhsanskar
              </h1>

              {/* Layout Below Heading: Side-by-Side Content & Medicines Photo matching Image 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 lg:gap-6 items-end pt-2 sm:pt-3">
                {/* Left Sub-column: Description, Button & Google Reviews */}
                <div className="sm:col-span-7 space-y-4 sm:space-y-4.5">
                  <p className="font-sans-body text-xs sm:text-[13.5px] lg:text-[14px] font-light text-white/95 leading-[22px]">
                    Led by experienced Ayurvedic physician{" "}
                    <strong className="font-semibold text-white">Dr. Manjiri Musmade / Lawande</strong>, we provide
                    root-cause healing through authentic{" "}
                    <strong className="font-semibold text-white">Nadi Pariksha</strong> (pulse diagnosis),
                    customized{" "}
                    <strong className="font-semibold text-white">Panchakarma detox</strong>, and classical{" "}
                    <strong className="font-semibold text-white">Garbh Sanskar</strong>. Located at{" "}
                    <strong className="font-semibold text-white">Parmar Square near Zensar &amp; EON IT Park</strong>, Kharadi.
                  </p>

                  {/* Make Appointment Pill Button */}
                  <div className="pt-1">
                    <Link
                      href="/contact-us"
                      className="inline-block px-7 sm:px-8 py-3.5 rounded-full bg-white text-[#145E3F] hover:bg-[#000000] hover:text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-200 capitalize transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      Book Consultation
                    </Link>
                  </div>

                  {/* Google Reviews Badge with Google 'G' logo & Review Count */}
                  <div className="pt-2 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="flex items-center gap-0.5" aria-hidden="true">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-[#FFA300] text-[#FFA300]"
                          />
                        ))}
                      </div>
                      <span className="sr-only">5 out of 5 stars</span>
                      <div className="flex items-center gap-1.5 font-bold text-white text-sm sm:text-base">
                        <GoogleGIcon className="w-4 h-4 shrink-0 drop-shadow-sm" />
                        <span>5.0</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-[13px] text-white/90 font-medium tracking-wide">
                      20+ Verified Patient Reviews on Google
                    </p>
                  </div>
                </div>

                {/* Right Sub-column: Prominent Medicines Photo with corner-curve-medicine */}
                <div className="sm:col-span-5 flex justify-center sm:justify-end min-h-[165px] sm:min-h-0 pt-4 sm:pt-0">
                  <div className="relative w-full max-w-[340px] sm:w-full sm:max-w-none h-[180px] sm:h-[190px] lg:h-[210px] xl:h-[225px] shrink-0 corner-curve-medicine overflow-hidden shadow-2xl border-2 border-white/25 bg-[#0E422C]/40">
                    <Image
                      src="/images/medicines.webp"
                      alt="Authentic Ayurvedic Medicines & Therapies"
                      fill
                      priority
                      fetchPriority="high"
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
