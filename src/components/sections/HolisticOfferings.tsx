import React from "react";
import Image from "next/image";
import Link from "next/link";
import { holisticOfferings } from "@/data/siteData";

export const HolisticOfferings: React.FC = () => {
  return (
    <section id="offerings" className="py-14 sm:py-20 bg-[#FDF4E5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <p className="font-serif-heading text-sm sm:text-base font-bold uppercase tracking-[1px] text-[#48A547]">
            Core Ayurvedic Specialties
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-medium text-black tracking-[0.5px]">
            Our Signature Clinical Offerings
          </h2>
          <p className="font-sans-body text-sm sm:text-[15px] text-[#555555] max-w-2xl mx-auto pt-1 leading-relaxed">
            Time-tested classical therapies administered in strict accordance with Ayurvedic texts for long-term health, immunity, and vitality.
          </p>
        </div>

        {/* 2x2 Grid of Distinctively Shaped Cards matching media_1792349803325_989f09ee.png */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {holisticOfferings.map((offering) => (
            <Link
              key={offering.id}
              href={offering.link}
              className="group bg-white rounded-[24px] rounded-br-[64px] sm:rounded-br-[76px] border border-[#EAE1D2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row overflow-hidden cursor-pointer block"
            >
              {/* Left Column: Treatment Photo with Arched Top-Right Curve */}
              <div className="relative w-full sm:w-[42%] md:w-[40%] shrink-0 h-52 sm:h-auto sm:self-stretch overflow-hidden rounded-t-[23px] sm:rounded-t-none sm:rounded-tl-[24px] sm:rounded-bl-[24px] sm:rounded-tr-[80px] rounded-br-[14px]">
                <Image
                  src={offering.image}
                  alt={offering.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 260px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Right Column: Compact Content snug to card bounds */}
              <div className="flex-1 p-5 sm:p-6 lg:p-6 flex flex-col justify-between text-left">
                <div>
                  {/* Green Outline Icon */}
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 mb-2 sm:mb-2.5 shrink-0">
                    <Image
                      src={offering.icon}
                      alt={`${offering.title} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-heading text-[19px] sm:text-[21px] lg:text-[22px] font-bold text-[#16231B] leading-snug mb-2 group-hover:text-[#48A547] transition-colors">
                    {offering.title}
                  </h3>

                  {/* Snug Description */}
                  <p className="font-sans-body text-xs sm:text-[13px] lg:text-[13.5px] text-[#4A4A4A] leading-[1.6] mb-3">
                    {offering.description}
                  </p>
                </div>

                {/* Discover More Link */}
                <div className="pt-1">
                  <span className="inline-block text-[13.5px] font-semibold text-[#145E3F] group-hover:text-[#48A547] group-hover:underline transition-colors">
                    Discover More &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
