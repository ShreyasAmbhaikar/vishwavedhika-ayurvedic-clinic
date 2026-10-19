"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { patientTestimonials } from "@/data/siteData";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + patientTestimonials.length) % patientTestimonials.length
    );
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % patientTestimonials.length);
  };

  const current = patientTestimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white border-y border-[#E4E4E4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Kizhi Poultice Photo with corner-curve-slider (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[460px] h-[400px] sm:h-[470px] corner-curve-slider overflow-hidden shadow-2xl bg-white border-2 border-[#E4E4E4]">
              <Image
                src="/images/thumb-testimonials.webp"
                alt="Ayurvedic Treatment & Panchakarma at Shree Vishwavedhika"
                fill
                className="object-cover corner-curve-slider hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Right Column: Testimonial Content & Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <p className="font-serif-heading text-sm sm:text-base font-bold uppercase tracking-[1px] text-[#48A547]">
                Testimonials
              </p>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-medium text-black tracking-[0.5px]">
                Healing Stories From Our Patients
              </h2>
              <p className="font-sans-body text-sm sm:text-[15px] text-[#383838] leading-relaxed max-w-xl">
                A smooth and results-driven healing journey that feels natural,
                comfortable, and truly transformative.
              </p>
            </div>

            {/* Testimonial Card with signature corner-curve-card-br */}
            <div className="bg-[#FDF4E5] corner-curve-card-br p-8 sm:p-10 border border-[#DBDBDB] shadow-md space-y-5">
              {/* 5-Star Rating */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#FFA300] text-[#FFA300]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-sans-body text-sm sm:text-[15px] text-[#383838] leading-[26px]">
                {current.content}
              </blockquote>

              {/* Reviewer Details & Navigation */}
              <div className="pt-4 border-t border-[#E8DCC9] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  {current.image && (
                    <Image
                      src={current.image}
                      alt={current.name}
                      width={52}
                      height={52}
                      unoptimized
                      priority
                      className="w-13 h-13 rounded-full object-cover border-2 border-[#145E3F]/30 shadow-sm shrink-0 bg-white"
                    />
                  )}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-serif-heading text-lg sm:text-xl font-bold text-[#145E3F]">
                        {current.name}
                      </h4>
                      {current.isLocalGuide && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]">
                          <svg className="w-3.5 h-3.5 fill-[#F57C00] text-[#F57C00]" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          Local Guide
                        </span>
                      )}
                    </div>
                    {current.location && (
                      <p className="font-sans-body text-xs text-[#5E695F]">
                        {current.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={prevReview}
                    className="w-9 h-9 rounded-full border border-[#145E3F] hover:bg-[#145E3F] hover:text-white text-[#145E3F] flex items-center justify-center transition-colors"
                    aria-label="Previous patient story"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-9 h-9 rounded-full border border-[#145E3F] hover:bg-[#145E3F] hover:text-white text-[#145E3F] flex items-center justify-center transition-colors"
                    aria-label="Next patient story"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
