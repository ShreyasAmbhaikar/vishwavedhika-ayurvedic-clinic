"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Sparkles, ChevronRight, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const pathname = usePathname() || "";
  const isAbout = pathname === "/about-us";
  const isHome = pathname === "/";
  const isContact = pathname === "/contact-us" || pathname === "/contact";
  const isGallery = pathname.includes("gallery");
  const isServices = pathname.startsWith("/treatments");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FDF4E5]/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3"
          : "bg-[#FDF4E5] py-[18px] sm:py-5"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* 1. Left Brand Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-3.5 shrink-0 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-[66px] lg:h-[66px] shrink-0 rounded-full overflow-hidden shadow-sm border-2 border-[#145E3F]/25 bg-white">
              <Image
                src="/images/logo-emblem.png"
                alt="Shri Vishwavedhika Ayurvedic Clinic &amp; Garbhsanskar, Panchakarma Center Logo"
                fill
                priority
                sizes="(max-width: 640px) 56px, 66px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-heading text-base sm:text-lg lg:text-[20px] font-bold text-[#145E3F] leading-tight tracking-tight">
                Shri Vishwavedhika
              </span>
              <span className="font-serif-heading text-[12.5px] sm:text-[13.5px] lg:text-[14.5px] font-semibold text-[#16231B] leading-tight">
                Ayurvedic Clinic
              </span>
              <span className="text-[10px] sm:text-[11px] lg:text-[11.5px] font-medium text-[#48A547] leading-tight tracking-wide">
                &amp; Garbhsanskar, Panchakarma Center
              </span>
            </div>
          </Link>

          {/* 2. Center Pill Navigation Container (Centered with absolute positioning) */}
          <nav className="hidden xl:flex items-center absolute left-1/2 -translate-x-1/2 bg-[#145E3F]/18 rounded-full px-5 py-1.5 shadow-sm border border-[#145E3F]/10">
            <ul className="flex items-center text-[13px] font-semibold uppercase tracking-wider text-[#145E3F]">
              <li>
                <Link
                  href="/"
                  className={`px-3.5 py-1 transition-colors ${
                    isHome
                      ? "text-[#145E3F] font-extrabold underline underline-offset-4 decoration-2 decoration-[#48A547]"
                      : "hover:text-[#48A547]"
                  }`}
                >
                  Home
                </Link>
              </li>

                <li className="text-[#145E3F]/30 select-none">|</li>

                <li>
                  <Link
                    href="/about-us"
                    className={`px-3.5 py-1 transition-colors ${
                      isAbout
                        ? "text-[#145E3F] font-extrabold underline underline-offset-4 decoration-2 decoration-[#48A547]"
                        : "hover:text-[#48A547]"
                    }`}
                  >
                    About Us
                  </Link>
                </li>

                <li className="text-[#145E3F]/30 select-none">|</li>

                {/* Services Dropdown */}
                <li
                  className="relative py-1 group"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link
                    href="/treatments"
                    className={`px-3.5 py-1 transition-colors inline-flex items-center gap-1 ${
                      isServices
                        ? "text-[#145E3F] font-extrabold underline underline-offset-4 decoration-2 decoration-[#48A547]"
                        : "hover:text-[#48A547]"
                    }`}
                  >
                    <span>Treatments</span>
                    <ChevronDown size={13} className="text-[#145E3F]/70" />
                  </Link>

                {servicesDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[880px] max-w-[94vw] z-50">
                    <div className="bg-[#FAFFF4] rounded-3xl shadow-2xl border border-[#145E3F]/20 p-6 overflow-hidden text-left normal-case tracking-normal">
                      {/* Top Header */}
                      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#145E3F]/15">
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
                            <Image
                              src="/images/leaf-branch.png"
                              alt="Ayurvedic treatments icon"
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                          </div>
                          <span className="font-serif-heading text-[15px] sm:text-base font-bold text-[#145E3F] leading-snug">
                            Ayurvedic Treatments by Category
                          </span>
                          <span className="hidden sm:inline-block text-[11px] text-gray-500 font-normal ml-0.5">
                            (20 Specialized Therapies)
                          </span>
                        </div>
                        <Link
                          href="/treatments"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-semibold text-[#145E3F] hover:text-[#48A547] transition-colors flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#145E3F]/8 hover:bg-[#145E3F]/15"
                        >
                          <span>Explore All Treatments</span>
                          <ChevronRight size={13} />
                        </Link>
                      </div>

                      {/* 3-Column Categorized Grid */}
                      <div className="grid grid-cols-3 gap-6">
                        {/* Col 1: Spine & Joint + Rapid Pain Relief */}
                        <div className="space-y-4">
                          {/* Spine & Joint */}
                          <div>
                            <div className="flex items-center justify-between px-3 py-1.5 mb-2 rounded-xl bg-[#145E3F]/10 border border-[#145E3F]/20">
                              <span className="text-[12.5px] font-extrabold text-[#145E3F] tracking-wide uppercase font-serif-heading">Spine &amp; Joint Care</span>
                              <span className="text-[10px] text-[#145E3F] font-bold bg-white/90 px-2 py-0.5 rounded-md border border-[#145E3F]/15">Orthopedic</span>
                            </div>
                            <div className="space-y-0.5">
                              <Link
                                href="/treatments/kati-basti-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Kati Basti</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Lower back pain &amp; sciatica</span>
                              </Link>
                              <Link
                                href="/treatments/janu-basti-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Janu Basti</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Knee arthritis &amp; joint care</span>
                              </Link>
                              <Link
                                href="/treatments/manya-basti-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Manya Basti</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Cervical &amp; tech neck relief</span>
                              </Link>
                              <Link
                                href="/treatments/patra-pinda-sweda-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Patra Pinda Sweda</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Warm herbal leaf bolus</span>
                              </Link>
                            </div>
                          </div>

                          {/* Rapid Pain Relief & Vascular */}
                          <div className="pt-2 border-t border-[#145E3F]/12">
                            <div className="flex items-center justify-between px-3 py-1.5 mb-2 rounded-xl bg-[#145E3F]/10 border border-[#145E3F]/20">
                              <span className="text-[12.5px] font-extrabold text-[#145E3F] tracking-wide uppercase font-serif-heading">Rapid Pain &amp; Vascular</span>
                              <span className="text-[10px] text-[#145E3F] font-bold bg-white/90 px-2 py-0.5 rounded-md border border-[#145E3F]/15">Fast Relief</span>
                            </div>
                            <div className="space-y-0.5">
                              <Link
                                href="/treatments/agnikarma-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Agnikarma Therapy</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Heel spur &amp; tendon pain</span>
                              </Link>
                              <Link
                                href="/treatments/jalaukavacharana-leech-therapy-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Jalaukavacharana (Leech)</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Varicose veins &amp; blood detox</span>
                              </Link>
                              <Link
                                href="/treatments/takradhara-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Takradhara &amp; Lepa</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Scalp psoriasis &amp; Pitta cooling</span>
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Col 2: Panchakarma & Skin Care */}
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between px-3 py-1.5 mb-2 rounded-xl bg-[#145E3F]/10 border border-[#145E3F]/20">
                              <span className="text-[12.5px] font-extrabold text-[#145E3F] tracking-wide uppercase font-serif-heading">Panchakarma Detox</span>
                              <span className="text-[10px] text-[#145E3F] font-bold bg-white/90 px-2 py-0.5 rounded-md border border-[#145E3F]/15">5-Fold</span>
                            </div>
                            <div className="space-y-0.5">
                              <Link
                                href="/treatments/panchakarma-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Panchakarma (5-Fold)</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Cellular metabolic cleansing</span>
                              </Link>
                              <Link
                                href="/treatments/vamana-therapy-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Vamana Therapy</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Kapha &amp; respiratory detox</span>
                              </Link>
                              <Link
                                href="/treatments/virechana-therapy-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Virechana Therapy</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Pitta &amp; liver purification</span>
                              </Link>
                              <Link
                                href="/treatments/basti-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Basti Karma</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Medicated colon &amp; spine care</span>
                              </Link>
                              <Link
                                href="/treatments/abhyanga-and-swedana-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Abhyanga &amp; Swedana</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Herbal massage &amp; steam detox</span>
                              </Link>
                            </div>
                          </div>

                          {/* Skin & Eye Care */}
                          <div className="pt-2 border-t border-[#145E3F]/12">
                            <div className="flex items-center justify-between px-3 py-1.5 mb-2 rounded-xl bg-[#145E3F]/10 border border-[#145E3F]/20">
                              <span className="text-[12.5px] font-extrabold text-[#145E3F] tracking-wide uppercase font-serif-heading">Skin &amp; Eye Care</span>
                              <span className="text-[10px] text-[#145E3F] font-bold bg-white/90 px-2 py-0.5 rounded-md border border-[#145E3F]/15">Purification</span>
                            </div>
                            <div className="space-y-0.5">
                              <Link
                                href="/treatments/raktamokshana-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Raktamokshana</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Bloodletting &amp; skin cleansing</span>
                              </Link>
                              <Link
                                href="/treatments/netra-tarpana-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Netra Tarpana</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Computer vision &amp; dry eyes</span>
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Col 3: Fertility & Neuro Wellness */}
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between px-3 py-1.5 mb-2 rounded-xl bg-[#145E3F]/10 border border-[#145E3F]/20">
                              <span className="text-[12.5px] font-extrabold text-[#145E3F] tracking-wide uppercase font-serif-heading">Fertility &amp; Women</span>
                              <span className="text-[10px] text-[#145E3F] font-bold bg-white/90 px-2 py-0.5 rounded-md border border-[#145E3F]/15">Specialty</span>
                            </div>
                            <div className="space-y-0.5">
                              <Link
                                href="/treatments/garbha-sanskar-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Garbha Sanskar</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Vedic antenatal classes</span>
                              </Link>
                              <Link
                                href="/treatments/infertility-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Infertility &amp; PCOD Care</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Hormone balance &amp; conception</span>
                              </Link>
                              <Link
                                href="/treatments/uttar-basti-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Uttar Basti</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Tubal block &amp; uterine health</span>
                              </Link>
                            </div>
                          </div>

                          {/* Stress & Neuro Care */}
                          <div className="pt-2 border-t border-[#145E3F]/12">
                            <div className="flex items-center justify-between px-3 py-1.5 mb-2 rounded-xl bg-[#145E3F]/10 border border-[#145E3F]/20">
                              <span className="text-[12.5px] font-extrabold text-[#145E3F] tracking-wide uppercase font-serif-heading">Stress &amp; Neuro Care</span>
                              <span className="text-[10px] text-[#145E3F] font-bold bg-white/90 px-2 py-0.5 rounded-md border border-[#145E3F]/15">Rehab</span>
                            </div>
                            <div className="space-y-0.5">
                              <Link
                                href="/treatments/shirodhara-treatment-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Shirodhara Therapy</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Stress, anxiety &amp; sleep care</span>
                              </Link>
                              <Link
                                href="/treatments/nasya-therapy-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Nasya Therapy</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Migraine, sinus &amp; cervical</span>
                              </Link>
                              <Link
                                href="/treatments/stroke-rehabilitation-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Stroke Rehabilitation</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Pakshaghata neuro-motor care</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Banner */}
                      <div className="mt-5 pt-3.5 border-t border-[#145E3F]/12 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs bg-[#145E3F]/5 rounded-2xl px-4 py-2.5">
                        <div className="flex items-center gap-1.5 text-[11.5px] text-gray-600">
                          <span className="font-semibold text-[#145E3F]">📍 Flat No. 104, Parmar Square, Kharadi, Pune</span>
                          <span className="hidden sm:inline text-gray-400">·</span>
                          <span className="hidden sm:inline text-gray-500">Near Zensar &amp; EON Free Zone</span>
                        </div>
                        <Link
                          href="/contact-us"
                          onClick={() => setServicesDropdown(false)}
                          className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#145E3F] hover:text-[#48A547] transition-colors"
                        >
                          <span>Book Clinical Consultation</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li className="text-[#145E3F]/30 select-none">|</li>

              {/* Gallery Link (Direct to Treatment Gallery) */}
              <li>
                <Link
                  href="/treatment-gallery"
                  className={`px-3.5 py-1 transition-colors ${
                    isGallery
                      ? "text-[#145E3F] font-extrabold underline underline-offset-4 decoration-2 decoration-[#48A547]"
                      : "hover:text-[#48A547]"
                  }`}
                >
                  Gallery
                </Link>
              </li>

              <li className="text-[#145E3F]/30 select-none">|</li>

              <li>
                <Link
                  href="/contact-us"
                  className={`px-3.5 py-1 transition-colors ${
                    isContact
                      ? "text-[#145E3F] font-extrabold underline underline-offset-4 decoration-2 decoration-[#48A547]"
                      : "hover:text-[#48A547]"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* 3. Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact-us"
              className="px-6 py-2.5 rounded-full bg-[#145E3F] text-white text-sm font-semibold hover:bg-[#0E432D] shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="/contact-us"
              className="px-3.5 py-1.5 rounded-full bg-[#145E3F] text-white text-xs font-semibold sm:hidden"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#145E3F] hover:bg-[#145E3F]/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pb-5 pt-3 border-t border-[#145E3F]/15 bg-[#FDF4E5] rounded-b-2xl">
            <div className="flex flex-col space-y-2 text-sm font-semibold uppercase tracking-wider text-[#145E3F]">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg hover:bg-[#145E3F]/10 ${
                  isHome ? "bg-[#145E3F]/15 font-bold" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg hover:bg-[#145E3F]/10 ${
                  isAbout ? "bg-[#145E3F]/15 font-bold" : ""
                }`}
              >
                About Us
              </Link>
              <div>
                <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#145E3F]/10">
                  <Link
                    href="/treatments"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${
                      isServices ? "text-[#48A547] font-bold" : ""
                    }`}
                  >Treatments</Link>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1 text-[#145E3F]"
                    aria-label="Toggle services categories"
                  >
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-3 pr-2 py-2 space-y-3 bg-[#145E3F]/6 rounded-xl my-1 border border-[#145E3F]/10 text-xs normal-case">
                    {/* Spine & Joint */}
                    <div>
                      <div className="px-2.5 py-1 mb-1 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/20">
                        <p className="font-extrabold text-[#145E3F] text-[11px] uppercase tracking-wider">
                          Spine &amp; Joint Care
                        </p>
                      </div>
                      <div className="space-y-1 pl-2">
                        <Link
                          href="/treatments/kati-basti-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Kati Basti (Back Pain &amp; Sciatica)
                        </Link>
                        <Link
                          href="/treatments/janu-basti-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Janu Basti (Knee Joint Arthritis)
                        </Link>
                        <Link
                          href="/treatments/manya-basti-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Manya Basti (Cervical &amp; Tech Neck)
                        </Link>
                        <Link
                          href="/treatments/patra-pinda-sweda-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Patra Pinda Sweda (Elakizhi Bolus)
                        </Link>
                      </div>
                    </div>

                    {/* Panchakarma & Detox */}
                    <div>
                      <div className="px-2.5 py-1 mb-1 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/20">
                        <p className="font-extrabold text-[#145E3F] text-[11px] uppercase tracking-wider">
                          Panchakarma &amp; Detox
                        </p>
                      </div>
                      <div className="space-y-1 pl-2">
                        <Link
                          href="/treatments/panchakarma-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Panchakarma (5-Fold Detox)
                        </Link>
                        <Link
                          href="/treatments/vamana-therapy-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Vamana Therapy (Kapha Detox)
                        </Link>
                        <Link
                          href="/treatments/virechana-therapy-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Virechana (Pitta &amp; Liver Detox)
                        </Link>
                        <Link
                          href="/treatments/basti-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Basti Karma (Medicated Enema)
                        </Link>
                        <Link
                          href="/treatments/abhyanga-and-swedana-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Abhyanga &amp; Swedana (Herbal Steam)
                        </Link>
                      </div>
                    </div>

                    {/* Fertility & Women's Health */}
                    <div>
                      <div className="px-2.5 py-1 mb-1 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/20">
                        <p className="font-extrabold text-[#145E3F] text-[11px] uppercase tracking-wider">
                          Fertility &amp; Women&apos;s Health
                        </p>
                      </div>
                      <div className="space-y-1 pl-2">
                        <Link
                          href="/treatments/garbha-sanskar-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Garbha Sanskar Program
                        </Link>
                        <Link
                          href="/treatments/infertility-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Infertility &amp; PCOD Care
                        </Link>
                        <Link
                          href="/treatments/uttar-basti-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Uttar Basti (Tubal Block Relief)
                        </Link>
                      </div>
                    </div>

                    {/* Stress & Neuro Care */}
                    <div>
                      <div className="px-2.5 py-1 mb-1 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/20">
                        <p className="font-extrabold text-[#145E3F] text-[11px] uppercase tracking-wider">
                          Stress, Neuro &amp; Head Care
                        </p>
                      </div>
                      <div className="space-y-1 pl-2">
                        <Link
                          href="/treatments/shirodhara-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Shirodhara (Stress &amp; Sleep)
                        </Link>
                        <Link
                          href="/treatments/nasya-therapy-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Nasya Therapy (Migraine &amp; Sinus)
                        </Link>
                        <Link
                          href="/treatments/stroke-rehabilitation-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Stroke Rehabilitation (Pakshaghata)
                        </Link>
                      </div>
                    </div>

                    {/* Skin & Eye Care */}
                    <div>
                      <div className="px-2.5 py-1 mb-1 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/20">
                        <p className="font-extrabold text-[#145E3F] text-[11px] uppercase tracking-wider">
                          Skin, Hair &amp; Eye Care
                        </p>
                      </div>
                      <div className="space-y-1 pl-2">
                        <Link
                          href="/treatments/raktamokshana-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Raktamokshana (Blood Cleansing)
                        </Link>
                        <Link
                          href="/treatments/netra-tarpana-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Netra Tarpana (Eye Care &amp; Dry Eyes)
                        </Link>
                      </div>
                    </div>

                    {/* Rapid Pain Relief & Vascular */}
                    <div>
                      <div className="px-2.5 py-1 mb-1 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/20">
                        <p className="font-extrabold text-[#145E3F] text-[11px] uppercase tracking-wider">
                          Rapid Pain Relief &amp; Vascular
                        </p>
                      </div>
                      <div className="space-y-1 pl-2">
                        <Link
                          href="/treatments/agnikarma-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Agnikarma (Instant Pain Relief)
                        </Link>
                        <Link
                          href="/treatments/jalaukavacharana-leech-therapy-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Jalaukavacharana (Leech Therapy)
                        </Link>
                        <Link
                          href="/treatments/takradhara-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-gray-700 hover:text-[#145E3F]"
                        >
                          Takradhara &amp; Lepa (Psoriasis &amp; Scalp)
                        </Link>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#145E3F]/10">
                      <Link
                        href="/treatments"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-bold text-[#145E3F] text-center hover:text-[#48A547]"
                      >
                        View All 20 Treatments &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/treatment-gallery"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg hover:bg-[#145E3F]/10 ${
                  isGallery ? "bg-[#145E3F]/15 font-bold text-[#48A547]" : ""
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg hover:bg-[#145E3F]/10 ${
                  isContact ? "bg-[#145E3F]/15 font-bold text-[#48A547]" : ""
                }`}
              >
                Contact Us
              </Link>

              <div className="pt-3 flex flex-col gap-2">
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-full bg-[#145E3F] text-white font-semibold text-sm"
                >
                  Book Appointment
                </Link>
                <a
                  href={`tel:${siteConfig.phone1}`}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-full border border-[#145E3F] text-[#145E3F] text-sm font-semibold"
                >
                  <Phone size={14} />
                  <span>{siteConfig.phone1}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
