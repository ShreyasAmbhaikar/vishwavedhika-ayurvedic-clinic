"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FaqSchema } from "@/components/seo/FaqSchema";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What health conditions are treated at Shri Vishwawedhika Ayurvedic Center?",
    answer:
      "We provide specialized treatments for chronic spine & back pain, sciatica, slip disc, joint arthritis, stroke & neurological rehabilitation, migraine, digestive issues, and personalized Garbha Sanskar care for expecting mothers.",
  },
  {
    question: "How does Panchakarma detoxification work and how many days are required?",
    answer:
      "Panchakarma is an authentic five-fold cleansing therapy that eliminates accumulated deep-tissue toxins (Ama). Based on your pulse diagnosis (Nadi Pariksha) and Prakriti, treatment packages generally range from 7, 14, to 21 days.",
  },
  {
    question: "Are Ayurvedic medicines natural and safe with no side effects?",
    answer:
      "Yes. All our herbal remedies and medicated oils are 100% natural, prepared strictly following classical Ayurvedic texts without chemical adulterants or harmful synthetic additives, ensuring safe, long-term healing.",
  },
  {
    question: "What are the clinic visiting hours in Kharadi, Pune?",
    answer:
      "Our clinic is open Monday to Saturday from 11:30 AM to 5:30 PM, and on Sundays from 11:30 AM to 2:00 PM. We are located at Flat no.104, IT Park, Parmar Square, near Zensar, above redchilli hotel, Kharadi, Pune.",
  },
  {
    question: "What is Garbha Sanskar and who can benefit from it?",
    answer:
      "Garbha Sanskar is traditional Ayurvedic prenatal and postnatal care designed for couples planning for pregnancy and expectant mothers. It fosters the child's physical and mental development through sattvic nutrition, mantra meditation, and herbal wellness.",
  },
];

export const ContactSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FDF4E5]">
      {/* Target anchor for existing appointment navigation links */}
      <div id="contact" className="sr-only" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Card with signature corner-curve-contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 corner-curve-contact overflow-hidden shadow-2xl bg-[#145E3F]">
          {/* Left Container: FAQ Cards (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 text-white flex flex-col justify-center space-y-6">
            <div className="space-y-1.5">
              <p className="font-serif-heading text-xs sm:text-sm font-bold uppercase tracking-[1.5px] text-[#A4E88C]">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 className="font-serif-heading text-2xl sm:text-4xl font-medium leading-tight text-white tracking-[0.5px]">
                Got Questions? We Have Answers.
              </h2>
              <p className="font-sans-body text-xs sm:text-sm text-white/80 max-w-xl">
                Explore common questions about our classical Ayurvedic treatments, Panchakarma therapy, and clinic consultations in Kharadi, Pune.
              </p>
            </div>

            {/* 5 FAQ Cards Accordion */}
            <div className="space-y-3 pt-1">
              {faqData.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full px-4 sm:px-5 py-3.5 text-left flex items-center justify-between gap-3 text-white transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif-heading text-sm sm:text-[15px] font-semibold leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#A4E88C] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-white/10 text-xs sm:text-[13px] text-[#FDF4E5]/85 leading-relaxed font-sans-body animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Container: Plant & Meditation Photography (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
            <Image
              src="/images/cta.webp"
              alt="Ayurvedic Mind & Body Wellness at Shri Vishwawedhika"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
      <FaqSchema items={faqData} />
    </section>
  );
};
