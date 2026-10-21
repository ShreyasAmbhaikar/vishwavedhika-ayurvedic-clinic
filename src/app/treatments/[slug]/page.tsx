import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Leaf, Flame, ShieldCheck, Brain } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { TreatmentFAQ } from "@/components/services/TreatmentFAQ";
import { MoreServicesCard } from "@/components/services/MoreServicesCard";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteData";

const TIMELINE_STAGE_IMAGES = [
  "/images/timeline/stage-1.jpg",
  "/images/timeline/stage-2.jpg",
  "/images/timeline/stage-3.jpg",
  "/images/timeline/stage-4.jpg",
  "/images/timeline/stage-5.jpg",
];

const BENEFIT_THEMES = [
  {
    icon: Leaf,
    gradient: "bg-gradient-to-br from-white via-[#F7FAF7] to-[#E2EFE3]",
    border: "border-[#D0E4D2]",
    badgeBg: "bg-[#E5F0E6] text-[#145E3F] border-[#145E3F]/15",
    numColor: "text-[#145E3F]",
    watermarkColor: "text-[#B6D6BA]/35 group-hover:text-[#145E3F]/20",
    graphic: "/images/benefits/benefit-detox.png",
    alt: "Complete Cellular Detoxification - Ayurvedic Mortar & Pestle",
  },
  {
    icon: Flame,
    gradient: "bg-gradient-to-br from-white via-[#FFF9F2] to-[#FCECD8]",
    border: "border-[#F4DFCA]",
    badgeBg: "bg-[#FCECD8] text-[#B86B35] border-[#B86B35]/20",
    numColor: "text-[#B86B35]",
    watermarkColor: "text-[#E8CA9D]/35 group-hover:text-[#B86B35]/20",
    graphic: "/images/benefits/benefit-digestive.png",
    alt: "Digestive Fire Re-ignition - Ayurvedic Gut Health",
  },
  {
    icon: ShieldCheck,
    gradient: "bg-gradient-to-br from-white via-[#F7FAF8] to-[#E3EFE5]",
    border: "border-[#CFE4D4]",
    badgeBg: "bg-[#E5F0E6] text-[#145E3F] border-[#145E3F]/15",
    numColor: "text-[#145E3F]",
    watermarkColor: "text-[#B6D6BA]/35 group-hover:text-[#145E3F]/20",
    graphic: "/images/benefits/benefit-shield.png",
    alt: "Chronic Ailment Reversal - Natural Immunity Shield",
  },
  {
    icon: Brain,
    gradient: "bg-gradient-to-br from-white via-[#F8FAF8] to-[#E5EFE6]",
    border: "border-[#CFE3D3]",
    badgeBg: "bg-[#E5F0E6] text-[#145E3F] border-[#145E3F]/15",
    numColor: "text-[#145E3F]",
    watermarkColor: "text-[#B6D6BA]/35 group-hover:text-[#145E3F]/20",
    graphic: "/images/benefits/benefit-neuro.png",
    alt: "Mental Calm & Neuro Rejuvenation - Brain Wellness",
  },
];

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
      title: "Service Not Found | Shri Vishwavedhika Ayurvedic Clinic",
    };
  }

  const pageTitle =
    service.metaTitle ||
    `${service.breadcrumbLabel} in Kharadi, Pune | Shri Vishwavedhika`;
  const pageDescription =
    service.metaDescription ||
    service.description.replace(/<[^>]*>?/gm, "").slice(0, 155) + ".";

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/treatments/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://vishwavedhikaayurveda.com/treatments/${slug}`,
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

  const [mainHeading, subHeadingTitle] = service.title.includes(" | ")
    ? service.title.split(" | ")
    : [service.title, ""];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://vishwavedhikaayurveda.com/treatments/${slug}#webpage`,
        url: `https://vishwavedhikaayurveda.com/treatments/${slug}`,
        name: service.title,
        description: service.metaDescription || service.description,
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
      {
        "@type": "BreadcrumbList",
        "@id": `https://vishwavedhikaayurveda.com/treatments/${slug}#breadcrumb`,
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
            name: "Treatments",
            item: "https://vishwavedhikaayurveda.com/treatments",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.breadcrumbLabel,
            item: `https://vishwavedhikaayurveda.com/treatments/${slug}`,
          },
        ],
      },
      ...(service.faqs && service.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `https://vishwavedhikaayurveda.com/treatments/${slug}#faq`,
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
            <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#16231B] tracking-tight mb-1.5">
              {mainHeading}
            </h1>
            {subHeadingTitle && (
              <p className="text-base sm:text-lg text-[#145E3F] font-semibold tracking-wide mb-3 flex items-center gap-2">
                <span className="w-2 h-0.5 bg-[#48A547] rounded-full inline-block" />
                {subHeadingTitle}
              </p>
            )}
            <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm">
              <Link
                href="/"
                className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400 font-normal">»</span>
              <Link
                href="/treatments"
                className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
              >
                Treatments
              </Link>
              {service.category && (
                <>
                  <span className="text-gray-400 font-normal">»</span>
                  <Link
                    href="/treatments"
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
                <section aria-labelledby="section-protocol-heading" className="mb-12 pt-8 border-t border-[#145E3F]/10">
                  <h2
                    id="section-protocol-heading"
                    className="font-serif-heading text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#16231B] mb-2 leading-tight"
                  >
                    {service.subheading}
                  </h2>
                  <p className="text-[#4A4A4A] text-sm sm:text-[15px] leading-relaxed mb-8">
                    {service.subcontent}
                  </p>

                  {/* Render Clinical Procedure Timeline Protocol */}
                  {service.modalities && service.modalities.length > 0 ? (
                    <div className="relative pl-12 sm:pl-16 space-y-4 sm:space-y-5 my-6 before:absolute before:left-[19px] sm:before:left-[23px] before:top-6 before:bottom-6 before:w-[2px] before:bg-[#8CA88B]/40">
                      {service.modalities.map((item, idx) => {
                        const stageImage = TIMELINE_STAGE_IMAGES[idx % TIMELINE_STAGE_IMAGES.length];
                        return (
                          <div key={idx} className="relative group flex items-center">
                            {/* Numbered Step Circle on Timeline Spine */}
                            <div className="absolute -left-[48px] sm:-left-[64px] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1A5632] text-white flex items-center justify-center font-serif-heading text-sm sm:text-base font-bold shadow-md z-10 shrink-0 group-hover:scale-105 transition-transform duration-300">
                              <span>0{idx + 1}</span>
                            </div>

                            {/* Horizontal Connector Line & Node Dot from Spine to Card */}
                            <div className="absolute -left-[14px] sm:-left-[18px] w-3.5 sm:w-4.5 h-[1.5px] bg-[#8CA88B]/60" />
                            <div className="absolute -left-[2px] w-1.5 h-1.5 rounded-full bg-[#1A5632]" />

                            {/* Stage Card */}
                            <div className="w-full bg-[#FCFAF5]/95 hover:bg-white border border-[#E9E1D2] hover:border-[#145E3F]/40 rounded-[22px] sm:rounded-[24px] p-3.5 sm:p-4.5 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4.5 group">
                              {/* Botanical Leaf Watermark Graphic in Bottom Right */}
                              <div className="absolute -bottom-4 -right-4 w-32 sm:w-40 h-32 sm:h-40 pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity select-none z-0">
                                <Image
                                  src="/images/botanical-branch-watermark.png"
                                  alt=""
                                  fill
                                  className="object-contain object-bottom-right"
                                />
                              </div>

                              {/* Stage Thumbnail Photo */}
                              <div className="relative w-full sm:w-[145px] lg:w-[155px] h-[125px] sm:h-[105px] rounded-[16px] sm:rounded-[18px] overflow-hidden shrink-0 shadow-xs border border-[#145E3F]/10 z-10">
                                <Image
                                  src={stageImage}
                                  alt={`${item.title} - Clinical Stage 0${idx + 1}`}
                                  fill
                                  sizes="165px"
                                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                              </div>

                              {/* Middle Content */}
                              <div className="flex-1 min-w-0 z-10 text-left">
                                <h3 className="font-serif-heading text-base sm:text-[17px] font-bold text-[#16231B] leading-snug group-hover:text-[#145E3F] transition-colors mb-1.5">
                                  {item.title}
                                </h3>
                                <p className="text-xs sm:text-[13.5px] text-[#5A5A5A] leading-relaxed line-clamp-2 sm:line-clamp-none">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
                  <section aria-labelledby="section-benefits-heading" className="mb-12 pt-8 border-t border-[#145E3F]/10">
                    <h2
                      id="section-benefits-heading"
                      className="font-serif-heading text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#16231B] mb-2 leading-tight"
                    >
                      {service.benefitsHeading || "Key Clinical Benefits of " + service.breadcrumbLabel}
                    </h2>
                    {service.benefitsSubcontent && (
                      <p className="text-[#4A4A4A] text-sm sm:text-[15px] leading-relaxed mb-8">
                        {service.benefitsSubcontent}
                      </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      {service.benefits.map((benefit, idx) => {
                        const theme = BENEFIT_THEMES[idx % BENEFIT_THEMES.length];
                        const IconComponent = theme.icon;
                        return (
                          <div
                            key={idx}
                            className={`relative rounded-[26px] p-6 sm:p-7 ${theme.gradient} ${theme.border} border shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[220px] sm:min-h-[235px] group`}
                          >
                            {/* 3D Illustration Graphic in Top Right */}
                            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 pointer-events-none select-none z-10 transition-transform duration-500 group-hover:scale-105">
                              <Image
                                src={theme.graphic}
                                alt={theme.alt}
                                fill
                                sizes="144px"
                                className="object-contain"
                              />
                            </div>

                            {/* Large Translucent Watermark Number in Bottom Right */}
                            <span
                              aria-hidden="true"
                              className={`absolute -bottom-3 right-2 sm:right-3 font-serif-heading font-extrabold text-[76px] sm:text-[88px] ${theme.watermarkColor} leading-none select-none pointer-events-none z-0 tracking-tighter transition-colors`}
                            >
                              0{idx + 1}
                            </span>

                            {/* Top Row: Circular Icon Badge & Step Number */}
                            <div className="flex items-center gap-3 mb-4 relative z-20">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center border shadow-2xs ${theme.badgeBg}`}
                              >
                                <IconComponent size={19} />
                              </div>
                              <span className={`font-serif-heading font-bold text-sm sm:text-[15px] ${theme.numColor} tracking-wider`}>
                                0{idx + 1}
                              </span>
                            </div>

                            {/* Bottom Content (constrain max-width so it leaves room for the graphic) */}
                            <div className="relative z-20 max-w-[65%] sm:max-w-[70%]">
                              <h3 className="font-serif-heading text-base sm:text-[17.5px] font-bold text-[#16231B] group-hover:text-[#145E3F] transition-colors mb-2 leading-snug">
                                {benefit.title}
                              </h3>
                              <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                                {benefit.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
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
