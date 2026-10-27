"use client";

import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

interface PopularServiceTickerItem {
  label: string;
  href: string;
}

const popularServices: PopularServiceTickerItem[] = [
  {
    label: "Panchakarma Treatment",
    href: "/treatments/panchakarma-treatment-in-kharadi",
  },
  {
    label: "Garbha Sanskar Program",
    href: "/treatments/garbha-sanskar-in-kharadi",
  },
  {
    label: "Suvarna Prashan (Child Immunity)",
    href: "/treatments/suvarna-prashan-in-kharadi",
  },
  {
    label: "Kati Basti (Spine & Sciatica)",
    href: "/treatments/kati-basti-treatment-in-kharadi",
  },
  {
    label: "Shirodhara Therapy (Stress & Sleep)",
    href: "/treatments/shirodhara-treatment-in-kharadi",
  },
  {
    label: "Janu Basti (Knee Arthritis)",
    href: "/treatments/janu-basti-treatment-in-kharadi",
  },
  {
    label: "Infertility & PCOD Care",
    href: "/treatments/infertility-treatment-in-kharadi",
  },
  {
    label: "Vamana & Virechana Detox",
    href: "/treatments/virechana-therapy-in-kharadi",
  },
  {
    label: "Agnikarma Pain Relief",
    href: "/treatments/agnikarma-treatment-in-kharadi",
  },
  {
    label: "Nasya Therapy (Migraine & ENT)",
    href: "/treatments/nasya-therapy-in-kharadi",
  },
  {
    label: "Stroke Rehabilitation",
    href: "/treatments/stroke-rehabilitation-in-kharadi",
  },
];

export const TreatmentTickerStrip: React.FC = () => {
  return (
    <section
      aria-label="Popular Ayurvedic Treatments and Specializations"
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
          animation: tickerMarquee 50s linear infinite !important;
          will-change: transform;
        }
        .animate-ticker-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="animate-ticker-marquee flex items-center whitespace-nowrap">
        {/* Render 4 sets (2 identical halves) for seamless, non-stop loop across all screen sizes */}
        {[...popularServices, ...popularServices, ...popularServices, ...popularServices].map(
          (service, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 sm:gap-6 px-4 shrink-0 font-sans-body text-xs sm:text-[13.5px] font-semibold tracking-wide"
            >
              <Link
                href={service.href}
                className="hover:underline transition-all hover:text-[#0A3D27] cursor-pointer"
              >
                {service.label}
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
    </section>
  );
};
