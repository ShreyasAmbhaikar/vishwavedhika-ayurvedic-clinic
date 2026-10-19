import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { AboutTestimonialsCard } from "@/components/about/AboutTestimonialsCard";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Us | Shree Vishwavedhika Ayurvedic Clinic | Kharadi Pune",
  description:
    "Shree Vishwavedhika Ayurvedic Clinic & Panchakarma Garbhasanskar Center in Kharadi, Pune offers authentic Ayurvedic care, traditional Panchakarma therapies, and Garbhasanskar guidance.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Shree Vishwavedhika Ayurvedic Clinic & Panchakarma Garbhasanskar Center",
    description:
      "A clinic you can trust. Shree Vishwavedhika Ayurvedic Clinic in Kharadi, Pune offers authentic Ayurvedic treatments, experienced doctors, and personalized holistic care.",
    url: "https://vishwavedhikaayurveda.com/about-us",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/how.jpg",
        width: 1200,
        height: 800,
        alt: "Shree Vishwavedhika Ayurvedic Clinic",
      },
    ],
  },
};

const treatmentFeaturesLeft = [
  "Stroke Treatment",
  "Back Pain Treatment",
  "Neck Pain Treatment",
  "Physiotherapy",
];

const treatmentFeaturesRight = [
  "24 -Hours Services",
  "Experienced Doctors",
  "Excellent Accommodation",
  "Free Online consultation",
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      {/* Top Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb & Title Section */}
        <section className="bg-[#FDF4E5] pt-6 sm:pt-8 pb-4">
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
        <section className="bg-[#FDF4E5] py-10 sm:py-14 lg:py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Image with Arched Top-Right Corner */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[480px] h-[460px] sm:h-[540px] rounded-tl-[20px] rounded-tr-[110px] rounded-br-[20px] rounded-bl-[20px] overflow-hidden shadow-lg border border-[#145E3F]/10">
                  <Image
                    src="/images/how.jpg"
                    alt="Authentic Ayurvedic consultation and Panchakarma therapies at Shree Vishwavedhika Ayurvedic Clinic"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
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
                  Shree Vishwavedhika Ayurvedic Clinic & Panchakarma Garbhasanskar Center in Kharadi,
                  Pune provides authentic, personalized Ayurvedic healthcare and traditional Panchakarma
                  therapies. We are dedicated to restoring health naturally through root-cause diagnosis,
                  pure herbal formulations, customized dietary guidance, and gentle holistic rejuvenation.
                </p>

                {/* Warm Beige / Camel Highlight Box */}
                <div className="bg-[#EBDDCB] border border-[#DFCBB5] p-5 sm:p-6 rounded-2xl shadow-sm">
                  <p className="text-[#16231B] font-semibold text-sm sm:text-[15px] leading-relaxed">
                    We Welcome You To Experience Authentic Ayurvedic Treatments & Panchakarma To Rejuvenate
                    Your Body And Mind in Kharadi, Pune.
                  </p>
                </div>

                {/* Sub-heading & Service Line */}
                <div className="pt-1">
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#16231B] mb-1">
                    We Give The Best Treatment To Our Patients
                  </h3>
                  <p className="text-sm text-[#666666]">
                    Friendly customer service staff for your all questions!
                  </p>
                </div>

                {/* Book Appointment CTA Button */}
                <div className="pt-2">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#145E3F] text-white text-sm font-semibold hover:bg-[#0E432D] shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Book Appointment</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: EXPERIENCED DOCTORS & OFFERED TREATMENTS */}
        <section className="bg-white py-16 sm:py-20 lg:py-24 border-y border-[#145E3F]/8">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column: Experienced Doctors */}
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#145E3F] uppercase block mb-2">
                    EXPERIENCED DOCTORS
                  </span>
                  <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#16231B] leading-tight">
                    Expert In Classical Ayurveda Treatments
                  </h2>
                </div>

                <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
                  Led by experienced Ayurvedic physicians dedicated to comprehensive patient care,
                  our clinic achieves remarkable results in managing chronic spinal issues, joint disorders,
                  Panchakarma detox, digestive ailments, and holistic Garbhasanskar guidance. Our experience
                  and compassionate care ensure long-lasting wellness for every individual.
                </p>
              </div>

              {/* Right Column: Different Treatments Checklist Card */}
              <div className="space-y-5">
                <div>
                  <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#16231B] mb-2">
                    We Offer Comprehensive Treatments
                  </h2>
                  <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
                    At Shree Vishwavedhika Ayurvedic Clinic, experience complete relief for your health
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
                          {/* Green Bullseye Icon */}
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
                          {/* Green Bullseye Icon */}
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

        {/* SECTION 3: TESTIMONIALS */}
        <section className="bg-[#FDF4E5] py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Testimonial Kizhi Treatment Photo with Arched Corner */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[480px] h-[460px] sm:h-[520px] rounded-tl-[20px] rounded-tr-[110px] rounded-br-[20px] rounded-bl-[20px] overflow-hidden shadow-lg border border-[#145E3F]/10">
                  <Image
                    src="/images/thumb-testimonials.webp"
                    alt="Authentic Ayurvedic Kizhi Poultice Massage and Panchakarma at Shree Vishwavedhika Ayurvedic Clinic"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Heading and Patient Review Card */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#145E3F] uppercase block mb-2">
                    TESTIMONIALS
                  </span>
                  <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#16231B] leading-tight mb-3">
                    Healing Stories From Our Patients
                  </h2>
                  <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed">
                    A smooth and results-driven healing journey that feels natural, comfortable, and
                    truly transformative.
                  </p>
                </div>

                {/* Patient Testimonial Card */}
                <AboutTestimonialsCard />
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
