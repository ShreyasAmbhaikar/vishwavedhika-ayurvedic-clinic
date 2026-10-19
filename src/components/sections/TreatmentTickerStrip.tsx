"use client";

import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

const treatmentsList = [
  "Expert Ayurvedic Consultation",
  "Traditional Panchakarma & Garbhasanskar Therapy",
  "Stroke Rehabilitation",
  "Spine & Disc Care",
  "Physiotherapy Combined with Ayurveda",
  "Cerebral Palsy Care",
  "Back & Neck Pain Treatment",
  "Joint & Arthritis Management",
  "Ayurvedic Neurological Care",
  "Authentic Classical Herbal Therapies",
  "5000+ Happy Patients Treated",
  "Complete Detox & Rejuvenation",
];

export const TreatmentTickerStrip: React.FC = () => {
  return (
    <div
      aria-label="List of Ayurvedic Treatments and Specializations"
      className="relative w-full bg-[#D4EE5C] text-[#145E3F] border-y border-[#BBDC36] py-3 sm:py-3.5 overflow-hidden shadow-sm z-20 select-none"
    >
      <style>{`
        @keyframes tickerMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-ticker-marquee {
          display: inline-flex !important;
          width: max-content !important;
          animation: tickerMarquee 55s linear infinite !important;
          will-change: transform;
        }
        .animate-ticker-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="animate-ticker-marquee flex items-center whitespace-nowrap">
        {/* Render 4 sets (2 identical halves) for seamless, non-stop loop across all screen sizes */}
        {[...treatmentsList, ...treatmentsList, ...treatmentsList, ...treatmentsList].map(
          (treatment, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 sm:gap-6 px-4 shrink-0 font-sans-body text-xs sm:text-[13.5px] font-semibold tracking-wide"
            >
              <Link
                href="/#contact"
                className="hover:underline transition-all hover:text-[#0A3D27] cursor-pointer"
              >
                {treatment}
              </Link>
              <Heart
                size={14}
                className="text-[#145E3F] shrink-0 fill-none"
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
