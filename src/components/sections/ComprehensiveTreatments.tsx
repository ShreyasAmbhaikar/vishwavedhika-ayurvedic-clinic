import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { comprehensiveTreatments } from "@/data/siteData";

export const ComprehensiveTreatments: React.FC = () => {
  return (
    <section id="treatments" className="py-16 sm:py-24 bg-white border-y border-[#E4E4E4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header Row with Title on Left, Subtitle & Button on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-2 max-w-xl">
            <p className="font-serif-heading text-sm sm:text-base font-bold uppercase tracking-[1px] text-[#48A547]">
              Specialized Clinical Care
            </p>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-medium text-black tracking-[0.5px]">
              Root-Cause Ayurvedic Treatments In Kharadi
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="font-sans-body text-sm sm:text-[15px] text-[#383838] leading-relaxed">
              Targeted, evidence-backed therapies for chronic spinal disorders, neurological rehabilitation, and fertility wellness without surgical risk or steroid dependency.
            </p>
            <div>
              <Link
                href="/treatments"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#145E3F] text-white text-sm font-semibold hover:bg-[#0E432D] transition-colors capitalize shadow-sm"
              >
                <span>Explore All Treatments</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comprehensiveTreatments.map((treatment) => (
            <Link
              key={treatment.id}
              href={treatment.link}
              className="group bg-white corner-curve-card-tr border border-[#E4E4E4] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden pb-8 cursor-pointer block"
            >
              <div className="space-y-5">
                {/* Image with signature corner-curve-image-tr */}
                <div className="relative w-full h-[360px] sm:h-[400px] corner-curve-image-tr overflow-hidden bg-gray-50">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover corner-curve-image-tr group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2.5 text-center px-5">
                  <h3 className="font-serif-heading text-2xl font-medium text-black group-hover:text-[#48A547] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="font-sans-body text-sm text-[#383838] leading-[24px]">
                    {treatment.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#145E3F] group-hover:text-[#48A547] transition-colors">
                  <span>Discover More</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
