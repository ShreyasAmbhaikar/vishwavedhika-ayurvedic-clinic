"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceDetail, SERVICE_CATEGORIES } from "@/data/servicesData";

interface ServicesDirectoryProps {
  services: ServiceDetail[];
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "Spine & Joint Orthopedic Care":
    "Non-surgical, classical Ayurvedic treatments for lower back pain, sciatica, knee osteoarthritis, cervical spondylosis, and joint stiffness.",
  "Panchakarma & Detoxification":
    "Root-cause 5-fold classical cellular bio-cleansing therapies designed to eradicate deep-seated Ama toxins and restore metabolic equilibrium.",
  "Fertility & Women's Health":
    "Sacred Vedic antenatal Garbha Sanskar, specialized Uttar Basti, and holistic Ayurvedic care for PCOD/PCOS and natural conception.",
  "Stress, Neuro & Head Care":
    "Targeted Ayurvedic neurological rehabilitation, mind-calming Shirodhara, ENT Nasya therapy, and neuro-motor restoration.",
  "Skin, Hair & Blood Purification":
    "Classical chronic dermatological care (Eczema, Psoriasis), Ayurvedic bloodletting, and Netra Tarpana eye rejuvenation.",
  "Rapid Pain Relief & Vascular Therapies":
    "Fast-acting, non-surgical classical interventions including Agnikarma thermal micro-cautery, Jalaukavacharana leech therapy, and cooling Takradhara for acute joint, tendon, vascular, and inflammatory skin relief.",
};

export const ServicesDirectory: React.FC<ServicesDirectoryProps> = ({ services }) => {
  // Use services directly (guaranteed to be the 20 canonical services)
  const canonicalServices = useMemo(() => {
    const seen = new Set<string>();
    return services.filter((s) => {
      if (!s || !s.slug || seen.has(s.slug)) return false;
      seen.add(s.slug);
      return true;
    });
  }, [services]);

  // Group services by category according to defined SERVICE_CATEGORIES order
  const categorizedServices = useMemo(() => {
    return SERVICE_CATEGORIES.map((category) => ({
      category,
      description: CATEGORY_DESCRIPTIONS[category] || "",
      items: canonicalServices.filter((s) => s.category === category),
    })).filter((group) => group.items.length > 0);
  }, [canonicalServices]);

  return (
    <div className="space-y-16 sm:space-y-20">
      {categorizedServices.map((group) => (
        <section
          key={group.category}
          id={group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          className="space-y-6 scroll-mt-28"
        >
          {/* Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[#145E3F]/20">
            <div>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#16231B] tracking-tight">
                {group.category}
              </h2>
              {group.description && (
                <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
                  {group.description}
                </p>
              )}
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-[#145E3F] bg-[#145E3F]/10 border border-[#145E3F]/15">
                <span>
                  {group.items.length}{" "}
                  {group.items.length === 1 ? "Treatment" : "Treatments"}
                </span>
              </span>
            </div>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {group.items.map((service) => (
              <Link
                key={service.slug}
                href={`/treatments/${service.slug}`}
                className="group block focus:outline-none h-full"
              >
                <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#145E3F]/12 group-hover:border-[#145E3F]/35 transition-all duration-300 flex flex-col h-full">
                  {/* Card Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#16231B] group-hover:text-[#145E3F] transition-colors line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 mt-2.5 leading-relaxed">
                        {service.description.replace(/<[^>]*>/g, "")}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#145E3F]/10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#145E3F] group-hover:text-[#48A547] transition-colors group-hover:translate-x-1 duration-200">
                        <span>Explore Treatment</span>
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
