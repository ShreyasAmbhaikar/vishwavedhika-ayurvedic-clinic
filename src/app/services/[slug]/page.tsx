import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { TreatmentFAQ } from "@/components/services/TreatmentFAQ";
import { MoreServicesCard } from "@/components/services/MoreServicesCard";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found | Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center",
    };
  }

  return {
    title: `${service.title} | Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center`,
    description: service.description.slice(0, 160) + "...",
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center`,
      description: service.description.slice(0, 160) + "...",
      url: `https://vishwavedhikaayurveda.com/services/${slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 800,
          alt: service.imageAlt,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://vishwavedhikaayurveda.com/services/${slug}#webpage`,
        url: `https://vishwavedhikaayurveda.com/services/${slug}`,
        name: service.title,
        description: service.description,
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patients seeking authentic Ayurvedic therapies in Kharadi, Pune",
        },
        about: {
          "@type": "MedicalProcedure",
          name: service.title,
          procedureType: "NonInvasiveProcedure",
        },
      },
      ...(service.faqs && service.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `https://vishwavedhikaayurveda.com/services/${slug}#faq`,
              mainEntity: service.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      {/* Schema.org Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Title & Breadcrumb Header Section */}
        <section className="pt-8 sm:pt-10 pb-4 sm:pb-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {service.category && (
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#145E3F]/10 text-[#145E3F] border border-[#145E3F]/20">
                  {service.category}
                </span>
              </div>
            )}
            <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#16231B] tracking-tight mb-2">
              {service.title}
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm">
              <Link
                href="/"
                className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400 font-normal">»</span>
              <Link
                href="/services"
                className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
              >
                Services
              </Link>
              {service.category && (
                <>
                  <span className="text-gray-400 font-normal">»</span>
                  <Link
                    href="/services"
                    className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
                  >
                    {service.category}
                  </Link>
                </>
              )}
              <span className="text-gray-400 font-normal">»</span>
              <span className="text-[#145E3F] font-medium">
                {service.breadcrumbLabel}
              </span>
            </nav>
          </div>
        </section>

        {/* Main Content & Sidebar Grid (Left: Content & FAQs, Right: More Services Green Card) */}
        <section className="py-6 sm:py-8 pb-16 sm:pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Exactly 4 Rich High-Value Sections (8 cols) */}
              <div className="lg:col-span-8">
                {/* SECTION 1: Featured Image & What is [Service Name]? */}
                <section aria-labelledby="section-intro-heading" className="mb-10">
                  {/* Featured Service Image with Signature Arched Top-Right Corner */}
                  <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[460px] rounded-tl-[20px] rounded-tr-[80px] sm:rounded-tr-[110px] rounded-br-[20px] rounded-bl-[20px] overflow-hidden shadow-lg border border-[#145E3F]/10 mb-6">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Service Heading Below Image */}
                  <h2
                    id="section-intro-heading"
                    className="font-serif-heading text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#16231B] mb-4 leading-tight tracking-[0.3px]"
                  >
                    {service.introHeading || `What is ${service.breadcrumbLabel}?`}
                  </h2>

                  {/* Main Service Description with Bold Key Terms */}
                  <div
                    className="text-[#4A4A4A] text-sm sm:text-[15.5px] leading-relaxed space-y-3"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </section>

                {/* SECTION 2: Comprehensive Clinical Protocol & Modalities */}
                <section aria-labelledby="section-protocol-heading" className="mb-10 pt-6 border-t border-[#145E3F]/10">
                  <h2
                    id="section-protocol-heading"
                    className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#16231B] mb-3 leading-tight"
                  >
                    {service.subheading}
                  </h2>
                  <p className="text-[#4A4A4A] text-sm sm:text-[15px] leading-relaxed mb-6">
                    {service.subcontent}
                  </p>

                  {/* Render Detailed Modality Cards if available, else fallback to checklist */}
                  {service.modalities && service.modalities.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.modalities.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-[#E7DAC8] rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-[#145E3F]/35 transition-all duration-200 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-2.5 mb-2">
                              <div className="w-5 h-5 rounded-full border-2 border-[#145E3F] flex items-center justify-center shrink-0">
                                <div className="w-2 h-2 rounded-full bg-[#145E3F]" />
                              </div>
                              <h3 className="font-serif-heading text-sm sm:text-[15px] font-bold text-[#145E3F] leading-snug">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.checklist.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 bg-white/70 border border-[#145E3F]/15 rounded-xl px-4 py-3 shadow-2xs"
                        >
                          <div className="w-5 h-5 rounded-full border-2 border-[#145E3F] flex items-center justify-center shrink-0">
                            <div className="w-2 h-2 rounded-full bg-[#145E3F]" />
                          </div>
                          <span className="text-sm font-semibold text-[#16231B]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                {/* SECTION 3: Key Clinical Benefits & Healing Outcomes */}
                {service.benefits && service.benefits.length > 0 && (
                  <section aria-labelledby="section-benefits-heading" className="mb-10 pt-6 border-t border-[#145E3F]/10">
                    <h2
                      id="section-benefits-heading"
                      className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#16231B] mb-3 leading-tight"
                    >
                      {service.benefitsHeading || "Key Clinical Benefits"}
                    </h2>
                    {service.benefitsSubcontent && (
                      <p className="text-[#4A4A4A] text-sm sm:text-[15px] leading-relaxed mb-6">
                        {service.benefitsSubcontent}
                      </p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="bg-[#FAF4EA] border border-[#E4D7C5] rounded-2xl p-5 hover:border-[#145E3F]/40 transition-all duration-200"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#145E3F] text-white flex items-center justify-center mb-3 shadow-xs">
                            <span className="text-xs font-bold font-serif-heading">0{idx + 1}</span>
                          </div>
                          <h3 className="font-serif-heading text-base font-bold text-[#16231B] mb-1.5 leading-snug">
                            {benefit.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* SECTION 4: Treatment FAQs */}
                <TreatmentFAQ serviceTitle={service.title} faqs={service.faqs} />
              </div>

              {/* Right Column: More Services Green Card (4 cols) - Sticky */}
              <div className="lg:col-span-4 lg:sticky lg:top-24">
                <MoreServicesCard currentSlug={service.slug} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </div>
  );
}
