import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { TreatmentFAQ } from "@/components/services/TreatmentFAQ";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Our Ayurvedic Treatments & Services | Shree Vishwavedhika Ayurvedic Clinic",
  description:
    "Explore authentic Ayurvedic treatments at Shree Vishwavedhika Ayurvedic Clinic in Kharadi, Pune: Panchakarma, Spine & Back Pain, Stroke Rehabilitation, Physiotherapy, and Garbhasanskar.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Ayurvedic Treatments & Services | Shree Vishwavedhika Ayurvedic Clinic",
    description:
      "Authentic Ayurveda treatments and expert Panchakarma care in Kharadi, Pune.",
    url: "https://vishwavedhikaayurveda.com/services",
    siteName: siteConfig.name,
  },
};

export default function ServicesPage() {
  const serviceList = Object.values(servicesData);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E5]">
      <Navbar />

      <main className="flex-1">
        {/* Title Header */}
        <section className="pt-8 sm:pt-10 pb-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#16231B] tracking-tight mb-2">
              Our Treatments & Services
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-[#145E3F] font-semibold hover:text-[#48A547] transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400 font-normal">»</span>
              <span className="text-[#145E3F] font-medium">Services</span>
            </nav>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceList.map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#145E3F]/10 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h2 className="font-serif-heading text-xl font-bold text-[#16231B] group-hover:text-[#145E3F] transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm text-gray-600 line-clamp-3 mt-2.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#145E3F] hover:text-[#48A547] transition-colors group-hover:translate-x-1 duration-200"
                      >
                        <span>Learn More</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Services FAQ Section */}
            <TreatmentFAQ serviceTitle="Our Ayurvedic Treatments" />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
