"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { patientTestimonials } from "@/data/siteData";
import { GoogleGIcon } from "@/components/ui/GoogleGIcon";

export const AboutTestimonialsCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = patientTestimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? patientTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === patientTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white rounded-[24px] p-7 sm:p-9 shadow-lg border border-[#145E3F]/10 transition-all duration-300">
      {/* 5 Golden Stars & Google Rating Badge */}
      <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-1.5" aria-label="5 star rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-[#FFA300] text-[#FFA300]"
            />
          ))}
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F4FAF6] border border-[#CDE9D4] text-xs font-bold text-[#145E3F] shadow-xs">
          <GoogleGIcon className="w-3.5 h-3.5 shrink-0" />
          <span>5.0 on Google</span>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-[#4A4A4A] text-[15px] sm:text-[16px] leading-relaxed mb-6 min-h-[90px]">
        &ldquo;{current.content}&rdquo;
      </p>

      {/* Author and Navigation Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#145E3F] hover:bg-[#145E3F] hover:text-white transition-colors"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-3.5">
          {current.image && (
            <Image
              src={current.image}
              alt={current.name}
              width={48}
              height={48}
              unoptimized
              priority
              className="w-12 h-12 rounded-full object-cover border-2 border-[#145E3F]/20 shadow-sm shrink-0 bg-white"
            />
          )}
          <div className="text-left">
            <h4 className="font-serif-heading text-base sm:text-lg font-bold text-[#145E3F] leading-tight">
              {current.name}
            </h4>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              {current.isLocalGuide && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#D97706] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  <span>★</span>
                  <span>Local Guide</span>
                </span>
              )}
              {current.location && !current.isLocalGuide && (
                <p className="text-xs text-gray-500">{current.location}</p>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#145E3F] hover:bg-[#145E3F] hover:text-white transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
