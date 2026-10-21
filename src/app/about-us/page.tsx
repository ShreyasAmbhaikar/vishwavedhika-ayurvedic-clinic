import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  GraduationCap,
  Award,
  Brain,
  Bone,
  Stethoscope,
  Leaf,
  HeartPulse,
  Baby,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { GoogleGIcon } from "@/components/ui/GoogleGIcon";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Dr. Manjiri Musmade | Ayurvedic Doctor Kharadi Pune",
  description:
    "Meet Dr. Manjiri Musmade (BAMS, PGFC Panchakarma, MUHS Nashik) at Shri Vishwavedhika Ayurvedic Clinic in Kharadi, Pune. Classical healing rooted in Samhitas.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Dr. Manjiri Musmade | Ayurvedic Doctor Kharadi Pune",
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

export default function AboutUsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vishwavedhikaayurveda.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://vishwavedhikaayurveda.com/about-us",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
        <section className="bg-white py-14 sm:py-18 lg:py-20 relative overflow-hidden">
          {/* Botanical Leaf Watermark: Top-Right Corner */}
          <div className="absolute -top-12 -right-8 w-48 sm:w-56 h-48 sm:h-56 pointer-events-none select-none opacity-30 rotate-180 z-0">
            <Image
              src="/images/botanical-branch-watermark.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Botanical Leaf Watermark: Middle-Left Margin */}
          <div className="absolute -bottom-16 -left-12 w-48 sm:w-56 h-48 sm:h-56 pointer-events-none select-none opacity-25 -rotate-45 z-0">
            <Image
              src="/images/botanical-branch-watermark.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column (5 cols): Overview & Clinical Heritage */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#145E3F] uppercase block mb-2">
                    ACADEMIC CREDENTIALS
                  </span>
                  <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#16231B] leading-tight">
                    Qualified in Classical Ayurveda &amp; Panchakarma
                  </h2>
                </div>

                <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
                  Under the clinical stewardship of <strong className="text-[#16231B]">Dr. Manjiri Musmade</strong>, our practice is grounded in formal university medical degree education and specialized post-graduate fellowship training from premier institutions under the Maharashtra University of Health Sciences (MUHS), Nashik.
                </p>

                {/* Highlight Card with Circular Cap Icon */}
                <div className="bg-[#FAF6EF] border border-[#E8DEC9] p-5 sm:p-6 rounded-[22px] shadow-2xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EFECE3] flex items-center justify-center shrink-0 text-[#145E3F] shadow-2xs">
                    <GraduationCap size={24} />
                  </div>
                  <p className="text-[#16231B] font-medium text-xs sm:text-[13px] leading-relaxed">
                    Combining authentic university medical scholarship with specialized clinical fellowship to provide safe, root-cause healing and classical Panchakarma in Kharadi, Pune.
                  </p>
                </div>
              </div>

              {/* Right Column (7 cols): The 2 Academic Qualification Plaques */}
              <div className="lg:col-span-7 space-y-5">
                {/* Plaque 1: B.A.M.S. */}
                <div className="bg-[#FAF6EF] rounded-[22px] p-6 sm:p-7 border border-[#E8DEC9] border-l-[5px] border-l-[#145E3F] shadow-sm">
                  {/* Top Row: Icon + Eyebrow on left, Pill badge on right */}
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <div className="flex items-center gap-2 text-[#145E3F]">
                      <GraduationCap className="w-5 h-5 shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[1.8px] text-[#145E3F]">
                        GRADUATION DEGREE
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#145E3F] bg-white px-3.5 py-1 rounded-full border border-[#145E3F]/25 shadow-2xs shrink-0">
                      5.5 Years Curriculum
                    </span>
                  </div>

                  {/* Main Degree Title */}
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#16231B] leading-snug mt-1 mb-1">
                    Bachelor of Ayurved Medicine &amp; Surgery (B.A.M.S.)
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-[13px] font-bold text-[#145E3F] tracking-wide mb-4">
                    AYURVEDACHARYA (आयुर्वेदाचार्य)
                  </p>

                  {/* Thin Divider Line */}
                  <div className="border-t border-[#E8DEC9] pt-4 space-y-2 text-xs sm:text-[13.5px] leading-relaxed">
                    <div>
                      <span className="font-bold text-[#16231B]">College / Institute: </span>
                      <span className="text-[#555555]">S.V.N.H.T.’s Ayurved Mahavidyalaya, Rahuri, Dist. Ahmednagar</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#16231B]">Awarding University: </span>
                      <span className="text-[#555555]">Maharashtra University of Health Sciences, Nashik (MUHS)</span>
                    </div>
                  </div>
                </div>

                {/* Plaque 2: PGFC in Panchakarma */}
                <div className="bg-[#FAF6EF] rounded-[22px] p-6 sm:p-7 border border-[#E8DEC9] border-l-[5px] border-l-[#145E3F] shadow-sm">
                  {/* Top Row: Icon + Eyebrow on left, Pill badge on right */}
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <div className="flex items-center gap-2 text-[#145E3F]">
                      <Award className="w-5 h-5 shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[1.8px] text-[#145E3F]">
                        POST GRADUATE FELLOWSHIP
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#145E3F] bg-white px-3.5 py-1 rounded-full border border-[#145E3F]/25 shadow-2xs shrink-0">
                      Advanced Specialization
                    </span>
                  </div>

                  {/* Main Degree Title */}
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#16231B] leading-snug mt-1 mb-1">
                    PGFC in Panchakarma
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-[13px] font-bold text-[#145E3F] tracking-wide mb-4">
                    POST GRADUATE FELLOWSHIP COURSE IN PANCHAKARMA
                  </p>

                  {/* Thin Divider Line */}
                  <div className="border-t border-[#E8DEC9] pt-4 space-y-2 text-xs sm:text-[13.5px] leading-relaxed">
                    <div>
                      <span className="font-bold text-[#16231B]">Fellowship Institute: </span>
                      <span className="text-[#555555]">Sumatibhai Shah Ayurved Mahavidyalaya, Hadapsar, Pune</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#16231B]">Conducted Under Aegis Of: </span>
                      <span className="text-[#555555]">Maharashtra University of Health Sciences, Nashik (MUHS)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: EXPERIENCED CLINICAL CARE & OFFERED TREATMENTS */}
        <section className="bg-[#FAF6EF] py-14 sm:py-18 lg:py-20 border-t border-[#145E3F]/8 relative overflow-hidden">
          {/* Botanical Leaf Watermark: Bottom-Left Corner */}
          <div className="absolute -bottom-10 -left-10 w-52 sm:w-64 h-52 sm:h-64 pointer-events-none select-none opacity-30 z-0">
            <Image
              src="/images/botanical-branch-watermark.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column (5 cols): Experienced Clinical Care */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#145E3F] uppercase block mb-2">
                    EXPERIENCED CLINICAL CARE
                  </span>
                  <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#16231B] leading-tight">
                    Expert In Classical Ayurveda Treatments
                  </h2>
                </div>

                <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
                  Led by <strong className="text-[#16231B]">Dr. Manjiri Musmade</strong>, our clinic achieves remarkable results in managing chronic spinal issues, joint disorders, Panchakarma detox, digestive ailments, and holistic Garbhasanskar guidance. Our clinical experience, personalized therapies, and compassionate care ensure long-lasting wellness for every individual.
                </p>
              </div>

              {/* Right Column (7 cols): We Offer Comprehensive Treatments 8-Item Plaque Card */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#16231B] mb-2">
                    We Offer Comprehensive Treatments
                  </h2>
                  <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
                    At Shri Vishwavedhika Ayurvedic Clinic, experience complete relief for your health issues with customized treatments designed to rejuvenate your vitality.
                  </p>
                </div>

                {/* 8-Item Treatment Feature Grid in Clean White Plaque Card */}
                <div className="bg-white rounded-[26px] p-6 sm:p-7 border border-[#E8DEC9] shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {/* Item 1: Stroke & Neuro */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#EFECE3] flex items-center justify-center shrink-0 text-[#145E3F]">
                        <Brain size={20} />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#16231B] leading-snug">
                        Stroke &amp; Neuro Rehabilitation
                      </span>
                    </div>

                    {/* Item 5: Classical Garbhasanskar */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#EFECE3] flex items-center justify-center shrink-0 text-[#145E3F]">
                        <Baby size={20} />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#16231B] leading-snug">
                        Classical Garbhasanskar
                      </span>
                    </div>

                    {/* Item 2: Spine & Disc Herniation Care */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#EFECE3] flex items-center justify-center shrink-0 text-[#145E3F]">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#145E3F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <ellipse cx="12" cy="4" rx="2.5" ry="1.5" />
                          <ellipse cx="12" cy="8" rx="3.5" ry="1.5" />
                          <ellipse cx="12" cy="12" rx="4" ry="1.5" />
                          <ellipse cx="12" cy="16" rx="3.5" ry="1.5" />
                          <ellipse cx="12" cy="20" rx="3" ry="1.5" />
                          <path d="M12 2.5v19" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#16231B] leading-snug">
                        Spine &amp; Disc Herniation Care
                      </span>
                    </div>

                    {/* Item 6: Experienced Medical Leadership */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#EFECE3] flex items-center justify-center shrink-0 text-[#145E3F]">
                        <Stethoscope size={20} />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#16231B] leading-snug">
                        Experienced Medical Leadership
                      </span>
                    </div>

                    {/* Item 3: Joint & Arthritis Relief */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#EFECE3] flex items-center justify-center shrink-0 text-[#145E3F]">
                        <Bone size={20} />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#16231B] leading-snug">
                        Joint &amp; Arthritis Relief
                      </span>
                    </div>

                    {/* Item 7: Authentic Herbal Formulations */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#EFECE3] flex items-center justify-center shrink-0 text-[#145E3F]">
                        <Leaf size={20} />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#16231B] leading-snug">
                        Authentic Herbal Formulations
                      </span>
                    </div>

                    {/* Item 4: Panchakarma Detoxification */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#EFECE3] flex items-center justify-center shrink-0 text-[#145E3F]">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#145E3F]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 11a8 8 0 0 0 16 0H4z" />
                          <path d="M14 4l-4 7" />
                          <path d="M7 20h10" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#16231B] leading-snug">
                        Panchakarma Detoxification
                      </span>
                    </div>

                    {/* Item 8: Personalized Nadi Pariksha */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#EFECE3] flex items-center justify-center shrink-0 text-[#145E3F]">
                        <HeartPulse size={20} />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#16231B] leading-snug">
                        Personalized Nadi Pariksha
                      </span>
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
