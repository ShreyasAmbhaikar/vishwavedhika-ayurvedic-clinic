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
    question: "Which health conditions are treated at Shri Vishwavedhika Ayurvedic Clinic in Kharadi?",
    answer:
      "Under Dr. Manjiri Musmade's clinical guidance, we specialize in chronic spine & back pain (sciatica, lumbar slip disc, cervical spondylosis), joint arthritis, Panchakarma detoxification, Garbha Sanskar & infertility management (PCOD/PCOS), stroke & neurological rehabilitation, chronic migraines, digestive disorders, and skin ailments.",
  },
  {
    question: "What is Panchakarma detoxification and how many days does it take?",
    answer:
      "Panchakarma is an authentic five-fold purification therapy (Vamana, Virechana, Basti, Nasya, and Raktamokshana) designed to remove accumulated deep-tissue toxins (Ama) and rebalance the doshas. Depending on your Nadi Pariksha assessment and health goals, programs range from 7, 14, to 21 days with convenient outpatient scheduling for IT professionals in Kharadi.",
  },
  {
    question: "Do you provide Garbhsanskar and Infertility treatments in Kharadi, Pune?",
    answer:
      "Yes. Dr. Manjiri Musmade is a certified specialist in Garbha Sanskar and Ayurvedic infertility care. We provide classical Beej Shuddhi (pre-conception detox), natural ovulation and hormonal balancing (Uttar Basti), and trimester-wise antenatal care, mantra meditation, and sattvic nutritional guidance for expectant parents.",
  },
  {
    question: "Where is the clinic located in Kharadi and what are the consultation hours?",
    answer:
      "We are conveniently located at Flat no.104, IT Park, Parmar Square, near Zensar, above Red Chilli Hotel, Kharadi, Pune 411014 — easily accessible from EON IT Park, Chandan Nagar, Viman Nagar, and Wadgaon Sheri. Visiting hours are Monday to Saturday from 11:30 AM to 5:30 PM, and Sundays from 11:30 AM to 2:00 PM.",
  },
  {
    question: "How can I book an appointment with Dr. Manjiri Musmade?",
    answer:
      "You can book directly by calling 096049 95998 or 097302 93777, via WhatsApp (+91 96049 95998), or by clicking the 'Book Consultation' button on this website. Prior appointments ensure dedicated, unhurried consultation time with zero waiting.",
  },
  {
    question: "Are Ayurvedic medicines and therapies safe without side effects?",
    answer:
      "Absolutely. All formulations prescribed at our clinic are 100% natural, prepared strictly from authentic classical texts without synthetic steroids, chemical additives, or adulterants. Treatments are personalized to your unique Prakriti (body constitution) for safe, lasting healing.",
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
              alt="Ayurvedic Mind & Body Wellness at Shri Vishwavedhika Ayurvedic Clinic Kharadi Pune"
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
