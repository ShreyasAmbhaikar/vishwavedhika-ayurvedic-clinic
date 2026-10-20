"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqSchema } from "@/components/seo/FaqSchema";

export interface FAQItem {
  question: string;
  answer: string;
}

interface TreatmentFAQProps {
  serviceTitle: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: "How do I know if this treatment is suitable for my condition?",
    answer:
      "Dr. Manjiri Musmade conducts a thorough initial examination, including traditional Ayurvedic pulse diagnosis (Nadi Pariksha) and Prakriti evaluation, to tailor the therapies specifically to your bodily constitution and health needs.",
  },
  {
    question: "How many sessions are typically required to see results?",
    answer:
      "While mild or acute symptoms often experience noticeable relief within 3 to 5 sessions, chronic ailments generally benefit most from a structured 7, 14, or 21-day therapeutic course followed by guided lifestyle practices.",
  },
  {
    question: "Are the herbal medicines and therapies safe with no side effects?",
    answer:
      "Yes. All therapies at Shri Vishwavedhika Ayurvedic Clinic & Garbhsanskar, Panchakarma Center utilize 100% authentic, classical herbal oils and plant-based formulations prepared without artificial chemicals or synthetic preservatives.",
  },
  {
    question: "What are the clinic visiting hours in Kharadi, Pune?",
    answer:
      "Our clinic is open Monday to Saturday from 11:30 AM to 5:30 PM, and on Sundays from 11:30 AM to 2:00 PM. We are conveniently located at Flat no.104, IT Park, Parmar Square, near Zensar, above redchilli hotel, Kharadi, Pune.",
  },
  {
    question: "How can I book an appointment or consult with the doctor?",
    answer:
      "You can call us directly at 096049 95998 or 097302 93777, message us on WhatsApp, or visit the clinic during operational hours. Prior appointment booking ensures minimal waiting time.",
  },
];

export const TreatmentFAQ: React.FC<TreatmentFAQProps> = ({ serviceTitle, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mt-10 sm:mt-12" aria-labelledby="treatment-faq-heading">
      <div className="bg-[#145E3F] text-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 shadow-xl border border-[#145E3F]/30 overflow-hidden">
        {/* Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#A4E88C] text-xs font-bold tracking-wider uppercase mb-2">
            <HelpCircle size={13} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2
            id="treatment-faq-heading"
            className="font-serif-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-white leading-tight tracking-[0.5px]"
          >
            Got Questions About {serviceTitle}?
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 text-left flex items-center justify-between gap-3 text-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-heading text-sm sm:text-[15px] font-semibold leading-snug text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#A4E88C] text-[#145E3F] rotate-180"
                        : "bg-white/10 text-[#A4E88C]"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1.5 border-t border-white/10 text-xs sm:text-[13.5px] text-[#FDF4E5]/90 leading-relaxed font-sans-body animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <FaqSchema items={items} />
    </section>
  );
};
