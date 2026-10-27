"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { patientTestimonials } from "@/data/siteData";
import { GoogleGIcon } from "@/components/ui/GoogleGIcon";

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
          {/* Left Column: Kizhi Poultice Photo with corner-curve-slider (5 cols, hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative w-full max-w-[460px] h-[400px] sm:h-[470px] corner-curve-slider overflow-hidden shadow-2xl bg-white border-2 border-[#E4E4E4]">
              <Image
                src="/images/thumb-testimonials.webp"
                alt="Ayurvedic Treatment & Panchakarma at Shri Vishwavedhika"
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
                Verified recovery experiences from patients treated at our Kharadi clinic for chronic back pain, Panchakarma detox, and Garbha Sanskar.
              </p>
            </div>

            {/* Testimonial Card with signature corner-curve-card-br adjusted for mobile */}
            <div className="bg-[#FDF4E5] rounded-[20px] rounded-br-[65px] sm:rounded-br-[100px] p-5 sm:p-8 lg:p-9 border border-[#DBDBDB] shadow-md flex flex-col justify-between w-full min-h-[290px] sm:h-[330px] lg:h-[310px] select-none">
              <div className="space-y-3 sm:space-y-4 overflow-hidden">
                {/* 5-Star Rating & Google Verified Badge */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-[#FFA300] text-[#FFA300]"
                      />
                    ))}
                  </div>
                  <span className="sr-only">5 star rating</span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E0D5C1] text-xs font-bold text-[#145E3F] shadow-xs">
                    <GoogleGIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>Google Review</span>
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="font-sans-body text-sm sm:text-[15px] text-[#383838] leading-[24px] sm:leading-[26px]">
                  {current.content}
                </blockquote>
              </div>

              {/* Reviewer Details & Navigation */}
              <div className="pt-3.5 sm:pt-4 border-t border-[#E8DCC9] flex items-center justify-between gap-3 sm:gap-4 mt-auto">
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  {current.image && (
                    <Image
                      src={current.image}
                      alt={current.name}
                      width={48}
                      height={48}
                      unoptimized
                      priority
                      className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-[#145E3F]/30 shadow-sm shrink-0 bg-white"
                    />
                  )}
                  <div className="min-w-0 flex flex-col justify-center">
                    <h3 className="font-serif-heading text-base sm:text-xl font-bold text-[#145E3F] leading-snug">
                      {current.name}
                    </h3>
                    {current.isLocalGuide && (
                      <div className="pt-0.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7] leading-none shrink-0">
                          <svg className="w-3 h-3 fill-[#F57C00] text-[#F57C00]" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          Local Guide
                        </span>
                      </div>
                    )}
                    {current.location && current.location.toLowerCase() !== "local guide" && (
                      <p className="font-sans-body text-xs text-[#5E695F] truncate pt-0.5">
                        {current.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Arrows with safe mobile margin inside the curved boundary */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 mr-1 sm:mr-0">
                  <button
                    onClick={prevReview}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#145E3F] hover:bg-[#145E3F] hover:text-white text-[#145E3F] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous patient story"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#145E3F] hover:bg-[#145E3F] hover:text-white text-[#145E3F] flex items-center justify-center transition-colors cursor-pointer"
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
