import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, GraduationCap, Award } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { GoogleGIcon } from "@/components/ui/GoogleGIcon";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Us & Dr. Manjiri Musmade | Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
  description:
    "Meet Dr. Manjiri Musmade (B.A.M.S., PGFC in Panchakarma). Learn about her academic qualifications, clinical expertise, and authentic Ayurvedic therapies at Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center in Kharadi, Pune.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Dr. Manjiri Musmade & Shri Vishwavedhika Ayurvedic Clinic",
    description:
      "A clinic you can trust in Kharadi, Pune. Led by Dr. Manjiri Musmade with specialized PGFC in Panchakarma and authentic classical Ayurvedic care.",
    url: "https://vishwavedhikaayurveda.com/about-us",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/dr-manjiri-musmade.webp",
        width: 768,
        height: 1024,
        alt: "Dr. Manjiri Musmade - Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune",
      },
    ],
  },
};

const treatmentFeaturesLeft = [
  "Stroke & Neuro Rehabilitation",
  "Spine & Disc Herniation Care",
  "Joint & Arthritis Relief",
  "Panchakarma Detoxification",
];

const treatmentFeaturesRight = [
  "Classical Garbhasanskar",
  "Experienced Medical Leadership",
  "Authentic Herbal Formulations",
  "Personalized Nadi Pariksha",
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      {/* Top Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb & Title Section */}
        <section className="bg-[#FDF4E5] pt-5 sm:pt-6 pb-2">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#16231B] tracking-tight mb-2">
              About Us
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400 font-normal">»</span>
              <span className="text-[#145E3F] font-medium">About Us</span>
            </nav>
          </div>
        </section>

        {/* SECTION 1: WHO WE ARE */}
        <section className="bg-[#FDF4E5] pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Doctor's Image with Arched Top-Right Corner */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-tl-[24px] rounded-tr-[110px] rounded-br-[24px] rounded-bl-[24px] overflow-hidden shadow-2xl border-2 border-[#145E3F]/15 bg-white">
                  <Image
                    src="/images/dr-manjiri-musmade.webp"
                    alt="Dr. Manjiri Musmade - Chief Ayurvedic Consultant & Panchakarma Specialist at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#145E3F] uppercase block mb-2">
                    WHO WE ARE
                  </span>
                  <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#16231B] leading-tight">
                    A Clinic You Can Trust
                  </h2>
                </div>

                <p className="text-[#4A4A4A] text-sm sm:text-[15px] leading-relaxed">
                  Founded and led by <strong>Dr. Manjiri Musmade</strong> (B.A.M.S., PGFC in Panchakarma),{" "}
                  <strong>Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center</strong> in Kharadi,
                  Pune provides authentic, personalized Ayurvedic healthcare and traditional Panchakarma
                  therapies. We are dedicated to restoring health naturally through root-cause diagnosis,
                  pure herbal formulations, customized dietary guidance, and gentle holistic rejuvenation.
                </p>

                {/* Warm Beige / Camel Highlight Box */}
                <div className="bg-[#EBDDCB] border border-[#DFCBB5] p-5 sm:p-6 rounded-2xl shadow-sm">
                  <p className="text-[#16231B] font-semibold text-sm sm:text-[15px] leading-relaxed">
                    We Welcome You To Experience Authentic Ayurvedic Treatments &amp; Panchakarma To Rejuvenate
                    Your Body And Mind in Kharadi, Pune.
                  </p>
                </div>

                {/* Sub-heading & Service Line */}
                <div className="pt-1">
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#16231B] mb-1">
                    We Give The Best Treatment To Our Patients
                  </h3>
                  <p className="text-sm text-[#666666]">
                    Compassionate clinical care and friendly support for all your health questions!
                  </p>
                </div>

                {/* Book Appointment CTA Button & Google Trust Badge */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#145E3F] text-white text-sm font-semibold hover:bg-[#0E432D] shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Book Appointment</span>
                    <ChevronRight size={16} />
                  </Link>

                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#DFCBB5] shadow-xs text-xs font-semibold text-[#145E3F]">
                    <GoogleGIcon className="w-4 h-4 shrink-0" />
                    <span>5.0 ★ (20+ Google Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ACADEMIC CREDENTIALS & SPECIALIZED TRAINING */}
        <section className="bg-white py-14 sm:py-18 lg:py-20 border-y border-[#145E3F]/8">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column (5 cols): Overview & Clinical Heritage */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#145E3F] uppercase block mb-2">
                    ACADEMIC CREDENTIALS
                  </span>
                  <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#16231B] leading-tight">
                    Qualified in Classical Ayurveda &amp; Panchakarma
                  </h2>
                </div>

                <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
                  Under the clinical stewardship of <strong>Dr. Manjiri Musmade</strong>, our practice is
                  grounded in formal university medical degree education and specialized post-graduate
                  fellowship training from premier institutions under the Maharashtra University of Health Sciences (MUHS), Nashik.
                </p>

                {/* Warm Beige Highlight Box matching Section 1 style */}
                <div className="bg-[#FAF3E7] border border-[#DFCBB5] p-5 sm:p-6 rounded-2xl shadow-xs">
                  <p className="text-[#16231B] font-semibold text-sm sm:text-[15px] leading-relaxed">
                    Combining authentic university medical scholarship with specialized clinical fellowship to provide safe, root-cause healing and classical Panchakarma in Kharadi, Pune.
                  </p>
                </div>
              </div>

              {/* Right Column (7 cols): Distinct Academic Qualification Plaques */}
              <div className="lg:col-span-7 space-y-4">
                {/* Plaque 1: B.A.M.S. */}
                <div className="bg-[#FAF3E7] border border-[#DFCBB5] border-l-4 border-l-[#145E3F] rounded-2xl p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={18} className="text-[#145E3F]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#145E3F]">
                        Graduation Degree
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#145E3F] bg-white px-2.5 py-0.5 rounded-full border border-[#145E3F]/20">
                      5.5 Years Curriculum
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#16231B] leading-snug">
                    Bachelor of Ayurved Medicine &amp; Surgery (B.A.M.S.)
                  </h3>
                  <p className="text-xs font-semibold text-[#145E3F] uppercase tracking-wide mt-1 mb-3">
                    Ayurvedacharya (आयुर्वेदाचार्य)
                  </p>

                  <div className="space-y-1.5 text-xs sm:text-[13px] text-[#555555] pt-3 border-t border-[#DFCBB5]/70 leading-relaxed">
                    <p>
                      <strong className="text-[#16231B]">College / Institute:</strong> S.V.N.H.T.’s Ayurved Mahavidyalaya, Rahuri, Dist. Ahmednagar
                    </p>
                    <p>
                      <strong className="text-[#16231B]">Awarding University:</strong> Maharashtra University of Health Sciences, Nashik (MUHS)
                    </p>
                  </div>
                </div>

                {/* Plaque 2: PGFC in Panchakarma */}
                <div className="bg-[#FAF3E7] border border-[#DFCBB5] border-l-4 border-l-[#145E3F] rounded-2xl p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-[#145E3F]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#145E3F]">
                        Post Graduate Fellowship
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#145E3F] bg-white px-2.5 py-0.5 rounded-full border border-[#145E3F]/20">
                      Advanced Specialization
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#16231B] leading-snug">
                    PGFC in Panchakarma
                  </h3>
                  <p className="text-xs font-semibold text-[#145E3F] uppercase tracking-wide mt-1 mb-3">
                    Post Graduate Fellowship Course in Panchakarma
                  </p>

                  <div className="space-y-1.5 text-xs sm:text-[13px] text-[#555555] pt-3 border-t border-[#DFCBB5]/70 leading-relaxed">
                    <p>
                      <strong className="text-[#16231B]">Fellowship Institute:</strong> Sumatibhai Shah Ayurved Mahavidyalaya, Hadapsar, Pune
                    </p>
                    <p>
                      <strong className="text-[#16231B]">Conducted Under Aegis Of:</strong> Maharashtra University of Health Sciences, Nashik (MUHS)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: EXPERIENCED CLINICAL CARE & OFFERED TREATMENTS */}
        <section className="bg-[#FDF4E5] py-14 sm:py-18 lg:py-20 border-b border-[#145E3F]/8">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left Column: Experienced Doctors */}
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#145E3F] uppercase block mb-2">
                    EXPERIENCED CLINICAL CARE
                  </span>
                  <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#16231B] leading-tight">
                    Expert In Classical Ayurveda Treatments
                  </h2>
                </div>

                <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
                  Led by <strong>Dr. Manjiri Musmade</strong>, our clinic achieves remarkable results in
                  managing chronic spinal issues, joint disorders, Panchakarma detox, digestive ailments,
                  and holistic Garbhasanskar guidance. Our clinical experience, personalized therapies, and
                  compassionate care ensure long-lasting wellness for every individual.
                </p>
              </div>

              {/* Right Column: Different Treatments Checklist Card */}
              <div className="space-y-5">
                <div>
                  <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#16231B] mb-2">
                    We Offer Comprehensive Treatments
                  </h2>
                  <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
                    At Shri Vishwavedhika Ayurvedic Clinic, experience complete relief for your health
                    issues with customized treatments designed to rejuvenate your vitality.
                  </p>
                </div>

                {/* 2-Column Checklist Card */}
                <div className="bg-[#FAF3E7] border border-[#EFE5D8] rounded-[28px] p-6 sm:p-8 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {/* Left Column Items */}
                    <div className="space-y-3.5">
                      {treatmentFeaturesLeft.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border-2 border-[#145E3F] flex items-center justify-center shrink-0">
                            <div className="w-2 h-2 rounded-full bg-[#145E3F]" />
                          </div>
                          <span className="text-sm sm:text-[15px] font-semibold text-[#16231B]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Right Column Items */}
                    <div className="space-y-3.5">
                      {treatmentFeaturesRight.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border-2 border-[#145E3F] flex items-center justify-center shrink-0">
                            <div className="w-2 h-2 rounded-full bg-[#145E3F]" />
                          </div>
                          <span className="text-sm sm:text-[15px] font-semibold text-[#16231B]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </div>
  );
}
