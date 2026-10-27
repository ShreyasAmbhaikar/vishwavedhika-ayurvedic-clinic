import React from "react";
import Image from "next/image";
import { healingSteps } from "@/data/siteData";

export const HealingProcess: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#FDF4E5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Numbered Process Steps (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-2">
              <p className="font-serif-heading text-sm sm:text-base font-bold uppercase tracking-[1px] text-[#48A547]">
                Our Clinical Methodology
              </p>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-medium text-black tracking-[0.5px]">
                Simple, Systematic &amp; Evidence-Based Healing
              </h2>
            </div>

            {/* Mobile Image: Positioned below heading and above the 3 points on mobile screens only */}
            <div className="block lg:hidden pt-2 pb-2">
              <div className="relative w-full max-w-[460px] mx-auto h-[260px] sm:h-[340px] corner-curve-slider overflow-hidden shadow-xl bg-white border-2 border-white/60">
                <Image
                  src="/images/services/shirodhara-treatment-in-kharadi.webp"
                  alt="Ayurvedic Shirodhara Therapy and Healing Process"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover corner-curve-slider"
                />
              </div>
            </div>

            {/* Steps List */}
            <div className="space-y-8">
              {healingSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-6 group"
                >
                  {/* Number Badge */}
                  <span className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#145E3F] shrink-0 leading-none pt-1">
                    {step.number}
                  </span>

                  {/* Step Description */}
                  <div className="space-y-1">
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-semibold text-black">
                      {step.title}
                    </h3>
                    <p className="font-sans-body text-sm sm:text-[15px] text-[#383838] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Shirodhara Treatment Image with corner-curve-slider (5 cols, hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative w-full max-w-[460px] h-[400px] sm:h-[480px] corner-curve-slider overflow-hidden shadow-2xl bg-white border-2 border-white/60">
              <Image
                src="/images/services/shirodhara-treatment-in-kharadi.webp"
                alt="Ayurvedic Shirodhara Therapy and Healing Process"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover corner-curve-slider hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
