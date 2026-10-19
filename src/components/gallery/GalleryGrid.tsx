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
  {
    id: "g1",
    src: "/images/gallery/gallery-01.webp",
    alt: "Ayurvedic Treatment Room & Wooden Droni Table",
    title: "Ayurvedic Treatment Room & Wooden Droni",
  },
  {
    id: "g2",
    src: "/images/gallery/gallery-02.webp",
    alt: "Panchakarma Consultation & Therapy Room",
    title: "Panchakarma Therapy Room",
  },
  {
    id: "g3",
    src: "/images/gallery/gallery-03.webp",
    alt: "Shirodhara & Traditional Herbal Decoctions",
    title: "Traditional Herbal Treatment",
  },
  {
    id: "g4",
    src: "/images/gallery/gallery-04.webp",
    alt: "Shirovasthi Head Therapy with Herbal Leaf Crown",
    title: "Shirovasthi Herbal Crown Therapy",
  },
  {
    id: "g5",
    src: "/images/gallery/gallery-05.webp",
    alt: "Shirodhara Bandage & Therapeutic Alignment",
    title: "Therapeutic Shirovasthi Alignment",
  },
  {
    id: "g6",
    src: "/images/gallery/gallery-06.webp",
    alt: "Hijama Wet Cupping Therapy for Detoxification",
    title: "Hijama Detoxification Cupping",
  },
  {
    id: "g7",
    src: "/images/gallery/gallery-07.webp",
    alt: "Cupping Therapy for Back Pain & Muscle Tension",
    title: "Upper Back & Shoulder Cupping",
  },
  {
    id: "g8",
    src: "/images/gallery/gallery-08.webp",
    alt: "Pada Abhyanga Herbal Foot Massage with Bronze Kasa Bowl",
    title: "Pada Abhyanga Foot Care",
  },
  {
    id: "g9",
    src: "/images/gallery/gallery-09.webp",
    alt: "Janu Basti Therapy for Knee Joint Pain Relief",
    title: "Janu Basti Knee Joint Therapy",
  },
  {
    id: "g10",
    src: "/images/gallery/gallery-10.webp",
    alt: "Kati Basti Warm Medicated Oil Ring for Spine Care",
    title: "Kati Basti Spine Rehabilitation",
  },
  {
    id: "g11",
    src: "/images/gallery/gallery-11.webp",
    alt: "Fresh Herbal Kizhi Poultices (Potli) for Rejuvenation",
    title: "Fresh Herbal Kizhi (Potli)",
  },
  {
    id: "g12",
    src: "/images/gallery/gallery-12.webp",
    alt: "Elakizhi Warm Herbal Leaf Bolus Back Massage",
    title: "Elakizhi Herbal Bolus Massage",
  },
  {
    id: "g13",
    src: "/images/gallery/gallery-13.jpg",
    alt: "Authentic Classical Herbal Kizhi Bundles",
    title: "Traditional Herbal Poultice Bundles",
  },
  {
    id: "g14",
    src: "/images/gallery/gallery-14.jpg",
    alt: "Traditional Medicated Bolus Preparation",
    title: "Medicated Bolus Group Preparation",
  },
  {
    id: "g15",
    src: "/images/gallery/gallery-15.jpg",
    alt: "Navarakizhi Medicated Rice Poultice on Wooden Droni",
    title: "Therapeutic Poultices on Wooden Droni",
  },
  {
    id: "g16",
    src: "/images/gallery/gallery-16.jpg",
    alt: "Herbal Poultices for Neuromuscular Rehabilitation",
    title: "Four Bolus Healing Setup",
  },
  {
    id: "g17",
    src: "/images/gallery/gallery-17.jpg",
    alt: "Handcrafted Ayurvedic Potli Massage Bags",
    title: "Handcrafted Herbal Potlis",
  },
  {
    id: "g18",
    src: "/images/gallery/gallery-18.jpg",
    alt: "Ayurvedic Therapy Potli Set on Teakwood Surface",
    title: "Ayurvedic Therapy Potli Set",
  },
  {
    id: "g19",
    src: "/images/gallery/gallery-19.webp",
    alt: "Mukhalepam Natural Ayurvedic Herbal Facial Mask",
    title: "Mukhalepam Herbal Face Care",
  },
  {
    id: "g20",
    src: "/images/gallery/gallery-20.webp",
    alt: "Acupuncture Therapy for Pain Management",
    title: "Acupuncture Neurological Therapy",
  },
  {
    id: "g21",
    src: "/images/gallery/gallery-21.webp",
    alt: "Ayurvedic Reflexology and Therapeutic Foot Massage",
    title: "Reflexology & Pada Therapy",
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
