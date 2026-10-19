import React from "react";
import { Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";
import { whyChooseUsFeatures } from "@/data/siteData";

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Sparkles key="1" size={26} className="text-[#F59E0B]" />,
    <HeartHandshake key="2" size={26} className="text-[#F59E0B]" />,
    <ShieldCheck key="3" size={26} className="text-[#F59E0B]" />,
  ];

  return (
    <section
      id="why-choose-us"
      className="py-4 sm:py-8"
      style={{
        background: "linear-gradient(180deg, #FDF4E5 50%, #C0673C 50%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mahogany Dark Container with corner-curve-hero */}
        <div
          className="relative overflow-hidden corner-curve-hero shadow-2xl p-8 sm:p-12 lg:p-16 text-white"
          style={{
            backgroundImage: "url('/images/bg.webp')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundColor: "#20100B",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#20100B]/92 pointer-events-none" />

          <div className="relative z-10 space-y-12">
            {/* Header */}
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <p className="font-serif-heading text-sm sm:text-base font-bold uppercase tracking-[1px] text-[#E8DCC9]">
                Why Choose Us
              </p>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-medium text-white tracking-[0.5px]">
                Experience True Wellness With Ayurveda
              </h2>
            </div>

            {/* 3 Pillars in a Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {whyChooseUsFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center space-y-4 px-4"
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto shadow-inner">
                    {icons[index]}
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="font-sans-body text-sm text-white/85 leading-[24px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
