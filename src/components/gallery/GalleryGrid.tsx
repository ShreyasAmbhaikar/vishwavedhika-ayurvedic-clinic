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
  // Row 1: Balanced mix of overview, neuro stream, spinal care, and consultation
  {
    id: "g1",
    src: "/images/services/panchakarma-treatment-in-kharadi.webp",
    alt: "Authentic Panchakarma five-fold detoxification therapies administered by Dr. Manjiri Musmade at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Panchakarma Five-Fold Detoxification",
  },
  {
    id: "g2",
    src: "/images/services/shirodhara-treatment-in-kharadi.webp",
    alt: "Authentic classical Shirodhara medicated oil flow therapy for stress insomnia and migraine by Dr. Manjiri Musmade at Shri Vishwavedhika Kharadi Pune",
    title: "Shirodhara Stress & Sleep Care",
  },
  {
    id: "g3",
    src: "/images/services/kati-basti-treatment-in-kharadi.webp",
    alt: "Authentic Kati Basti warm medicated oil pool therapy for lumbar spine and sciatica relief at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Kati Basti Spine & Sciatica Care",
  },
  {
    id: "g4",
    src: "/images/services/infertility-treatment-in-kharadi.webp",
    alt: "Ayurvedic fertility and PCOD clinical consultation with Dr. Manjiri Musmade at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Fertility & PCOD Consultation",
  },

  // Row 2: Potli fomentation, optical care, thermal cautery, and neuro recovery
  {
    id: "g5",
    src: "/images/services/patra-pinda-sweda-treatment-in-kharadi.webp",
    alt: "Patra Pinda Sweda authentic herbal leaf bolus fomentation for neuromuscular and joint relief at Shri Vishwavedhika Clinic Kharadi Pune",
    title: "Patra Pinda Sweda Herbal Potli",
  },
  {
    id: "g6",
    src: "/images/services/netra-tarpana-treatment-in-kharadi.webp",
    alt: "Classical Netra Tarpana eye treatment with medicated herbal ghee for computer vision syndrome at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Netra Tarpana Eye Care",
  },
  {
    id: "g7",
    src: "/images/services/agnikarma-treatment-in-kharadi.webp",
    alt: "Sterile Agnikarma thermal micro-cautery therapy for instant musculoskeletal pain relief under Dr. Manjiri Musmade at Shri Vishwavedhika Clinic Kharadi Pune",
    title: "Agnikarma Thermal Pain Management",
  },
  {
    id: "g8",
    src: "/images/services/stroke-rehabilitation-in-kharadi.webp",
    alt: "Ayurvedic stroke rehabilitation and neuro motor recovery under Dr. Manjiri Musmade at Shri Vishwavedhika Clinic Kharadi Pune",
    title: "Stroke Neurological Recovery",
  },

  // Row 3: Medicated enema apparatus, pregnancy wellness, knee joint care, cranial drops
  {
    id: "g9",
    src: "/images/services/basti-treatment-in-kharadi.webp",
    alt: "Classical Basti karma medicated herbal oil enema therapy using traditional brass vessel apparatus at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Basti Karma Medicated Enema",
  },
  {
    id: "g10",
    src: "/images/services/garbha-sanskar-in-kharadi.webp",
    alt: "Garbha Sanskar prenatal herbal therapy and Ayurvedic pregnancy care under Dr. Manjiri Musmade at Shri Vishwavedhika Clinic Kharadi Pune",
    title: "Garbha Sanskar Prenatal Care",
  },
  {
    id: "g11",
    src: "/images/services/janu-basti-treatment-in-kharadi.webp",
    alt: "Authentic Janu Basti medicated herbal oil therapy for knee osteoarthritis and joint care at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Janu Basti Knee Joint Relief",
  },
  {
    id: "g12",
    src: "/images/services/nasya-therapy-in-kharadi.webp",
    alt: "Classical Ayurvedic Nasya nasal therapy for migraine sinusitis and cervical care by Dr. Manjiri Musmade at Shri Vishwavedhika Kharadi Pune",
    title: "Nasya Cranial & ENT Care",
  },

  // Row 4: Leech therapy, massage & steam box, cervical spine care, purgative detox
  {
    id: "g13",
    src: "/images/services/jalaukavacharana-leech-therapy-in-kharadi.webp",
    alt: "Sterile Jalaukavacharana medicinal leech therapy for varicose veins and skin disorders at Shri Vishwavedhika Clinic Kharadi Pune",
    title: "Jalaukavacharana Leech Therapy",
  },
  {
    id: "g14",
    src: "/images/services/abhyanga-and-swedana-in-kharadi.webp",
    alt: "Authentic full body Abhyanga massage and wooden box herbal steam Swedana at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Abhyanga Massage & Herbal Swedana",
  },
  {
    id: "g15",
    src: "/images/services/manya-basti-treatment-in-kharadi.webp",
    alt: "Classical Manya Basti therapy for cervical spondylosis and neck pain at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Manya Basti Cervical Spine Care",
  },
  {
    id: "g16",
    src: "/images/services/virechana-therapy-in-kharadi.webp",
    alt: "Virechana herbal purgation therapy for Pitta detox and liver cleanse under Dr. Manjiri Musmade at Kharadi Ayurvedic Clinic",
    title: "Virechana Herbal Purgation Therapy",
  },

  // Row 5: Intrauterine care, buttermilk stream & mask, bloodletting, emesis setup
  {
    id: "g17",
    src: "/images/services/uttar-basti-treatment-in-kharadi.webp",
    alt: "Authentic Uttar Basti therapy administered by Dr. Manjiri Musmade for tubal blockage and natural fertility at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Uttar Basti Uterine & Tubal Care",
  },
  {
    id: "g18",
    src: "/images/services/takradhara-lepa-therapy-in-kharadi.webp",
    alt: "Takradhara medicated buttermilk therapy and herbal Lepa application for psoriasis and stress at Shri Vishwavedhika Clinic Kharadi Pune",
    title: "Takradhara & Herbal Lepa Therapy",
  },
  {
    id: "g19",
    src: "/images/services/raktamokshana-treatment-in-kharadi.webp",
    alt: "Classical Raktamokshana bloodletting therapy for chronic skin conditions, eczema, and psoriasis at Shri Vishwavedhika Clinic Kharadi Pune",
    title: "Classical Raktamokshana Bloodletting",
  },
  {
    id: "g20",
    src: "/images/services/vamana-therapy-in-kharadi.webp",
    alt: "Classical Vamana therapeutic emesis clinical setup for Kapha detox at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
    title: "Vamana Classical Emesis Therapy",
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
