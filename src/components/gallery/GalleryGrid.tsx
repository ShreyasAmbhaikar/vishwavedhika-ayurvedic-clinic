"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
}

export const galleryItems: GalleryItem[] = [
  // 1. Clinic Entrance & Arrival
  {
    id: "g1",
    src: "/images/gallery/clinic-entrance-maharishi-charaka-emblem-kharadi.webp",
    alt: "Frosted glass entrance of Shri Vishwavedhika Ayurvedic Clinic featuring Maharishi Charaka artwork and Dr. Manjiri Lawande nameplate in Kharadi Pune",
    title: "Clinic Entrance & Maharishi Charaka Emblem",
  },
  {
    id: "g2",
    src: "/images/gallery/ayurvedic-clinic-door-logo-sanskrit-shloka-kharadi.webp",
    alt: "Shri Vishwavedhika clinic door emblem with Goddess Saraswati and classical Ayurvedic Sanskrit health shloka in Kharadi Pune",
    title: "Ayurvedic Door Emblem & Sanskrit Shloka",
  },
  {
    id: "g3",
    src: "/images/gallery/ayurvedic-clinic-reception-waiting-lounge-kharadi.webp",
    alt: "Air-conditioned patient waiting lounge with comfortable seating and clean reception area at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Patient Waiting Lounge & Reception",
  },
  {
    id: "g4",
    src: "/images/gallery/doctor-consultation-desk-reception-kharadi.webp",
    alt: "Reception counter and doctor consultation desk with Ayurvedic herbal wellness display at Shri Vishwavedhika Clinic Kharadi Pune",
    title: "Doctor Consultation Desk & Reception",
  },

  // 2. Panchakarma & Shirodhara Suite
  {
    id: "g5",
    src: "/images/gallery/shirodhara-medicated-oil-therapy-live-kharadi.webp",
    alt: "Patient receiving classical Shirodhara continuous warm medicated herbal oil therapy on forehead for stress and migraine relief at Shri Vishwavedhika Kharadi Pune",
    title: "Live Shirodhara Medicated Oil Therapy",
  },
  {
    id: "g6",
    src: "/images/gallery/panchakarma-droni-shirodhara-treatment-setup-kharadi.webp",
    alt: "Hygienic Panchakarma treatment room equipped with traditional wooden massage droni and copper Shirodhara apparatus at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Panchakarma Droni & Shirodhara Setup",
  },
  {
    id: "g7",
    src: "/images/gallery/panchakarma-therapy-room-steam-boiler-kharadi.webp",
    alt: "Spacious Panchakarma therapy room with wooden droni bed, herbal steam boiler unit, and clean therapy amenities at Shri Vishwavedhika Clinic Kharadi",
    title: "Panchakarma Therapy Room & Steam Unit",
  },
  {
    id: "g8",
    src: "/images/gallery/ayurvedic-massage-droni-bed-shirodhara-vessel-kharadi.webp",
    alt: "Classical handcrafted wooden Panchakarma droni bed with overhead copper Shirodhara vessel at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Wooden Droni & Copper Shirodhara Vessel",
  },

  // 3. Clinical Procedures (Netra Tarpana, Mukhalepa, Leech Therapy)
  {
    id: "g9",
    src: "/images/gallery/netra-tarpana-eye-care-treatment-kharadi.webp",
    alt: "Patient receiving classical Netra Tarpana treatment with medicated herbal ghee for eye strain, dry eyes, and computer vision syndrome at Shri Vishwavedhika Kharadi",
    title: "Netra Tarpana Medicated Eye Care",
  },
  {
    id: "g10",
    src: "/images/gallery/mukhalepa-ayurvedic-herbal-face-pack-kharadi.webp",
    alt: "Authentic Ayurvedic Mukhalepa herbal paste facial therapy with cooling eye pads for skin radiance, acne, and detox at Shri Vishwavedhika Clinic Kharadi",
    title: "Mukhalepa Herbal Facial Therapy",
  },
  {
    id: "g11",
    src: "/images/gallery/jalaukavacharana-leech-therapy-back-kharadi.webp",
    alt: "Sterile Jalaukavacharana medicinal leech therapy applied on patient back for localized blood purification and chronic pain at Shri Vishwavedhika Clinic Kharadi",
    title: "Jalaukavacharana Leech Therapy on Back",
  },
  {
    id: "g12",
    src: "/images/gallery/jalaukavacharana-leech-therapy-knee-joint-kharadi.webp",
    alt: "Medicinal leech therapy (Jalaukavacharana) applied on knee joint for osteoarthritis swelling and chronic inflammation at Shri Vishwavedhika Ayurvedic Clinic Kharadi",
    title: "Knee Joint Jalaukavacharana Therapy",
  },
  {
    id: "g13",
    src: "/images/gallery/jalaukavacharana-varicose-veins-leg-kharadi.webp",
    alt: "Sterile medicinal leech application on lower leg and ankle for varicose veins and micro-circulation improvement at Shri Vishwavedhika Clinic Kharadi Pune",
    title: "Leech Therapy for Varicose Veins",
  },

  // 4. In-House Pharmacy & Authentic Formulations
  {
    id: "g14",
    src: "/images/gallery/ayurvedic-herbal-pharmacy-dispensary-shelves-kharadi.webp",
    alt: "Authentic Ayurvedic dispensary shelves stocked with classical churnas, gutikas, asavas, and rasashastra medicines at Shri Vishwavedhika Clinic Kharadi",
    title: "Ayurvedic Medicine Dispensary Shelves",
  },
  {
    id: "g15",
    src: "/images/gallery/ayurvedic-medicine-dispensing-counter-kharadi.webp",
    alt: "Organized herbal medicine dispensing counter with authentic botanical extracts and formulations at Shri Vishwavedhika Ayurvedic Clinic Kharadi",
    title: "Herbal Medicine Dispensing Counter",
  },
  {
    id: "g16",
    src: "/images/gallery/ayurvedic-pharmacy-consultation-room-kharadi.webp",
    alt: "In-house Ayurvedic pharmacy and consultation preparation room with wooden cabinets at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Ayurvedic Pharmacy & Preparation Room",
  },
];

export const GalleryGrid: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const showNext = useCallback(() => {
    setActiveLightboxIndex((prev) =>
      prev !== null
        ? prev === galleryItems.length - 1
          ? 0
          : prev + 1
        : null
    );
  }, []);

  const showPrev = useCallback(() => {
    setActiveLightboxIndex((prev) =>
      prev !== null
        ? prev === 0
          ? galleryItems.length - 1
          : prev - 1
        : null
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <div>
      {/* 4-Column Responsive Grid matching media_1792347836728_a976d7f7.png */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative h-[210px] sm:h-[230px] lg:h-[250px] w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 bg-[#145E3F]/5 border border-[#145E3F]/10"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Hover Overlay with Zoom Icon */}
            <div className="absolute inset-0 bg-[#0E432D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <div className="w-10 h-10 rounded-full bg-white/90 text-[#145E3F] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <ZoomIn size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight size={28} />
          </button>

          {/* Active Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
          >
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={galleryItems[activeLightboxIndex].src}
                alt={galleryItems[activeLightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-base sm:text-lg font-semibold font-serif-heading">
                {galleryItems[activeLightboxIndex].title}
              </h3>
              <p className="text-white/60 text-xs mt-1">
                Image {activeLightboxIndex + 1} of {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
