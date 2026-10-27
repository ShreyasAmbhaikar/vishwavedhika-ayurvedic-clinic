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

  // Close mobile menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-[#FDF4E5] shadow-sm py-2.5 sm:py-3"
          : "bg-[#FDF4E5] py-[18px] sm:py-5"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* 1. Left Brand Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-3.5 shrink-0 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-[66px] lg:h-[66px] shrink-0 rounded-full overflow-hidden shadow-sm border-2 border-[#145E3F]/25 bg-white">
              <Image
                src="/images/logo-emblem.webp"
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
                            (21 Specialized Therapies)
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
                                href="/treatments/suvarna-prashan-in-kharadi"
                                onClick={() => setServicesDropdown(false)}
                                className="block px-2.5 py-1.5 rounded-xl hover:bg-[#145E3F]/8 transition-colors group"
                              >
                                <div className="text-[12.5px] font-semibold text-[#16231B] group-hover:text-[#145E3F] transition-colors leading-tight">Suvarna Prashan</div>
                                <span className="text-[10.5px] text-gray-500 font-normal leading-tight">Child immunity &amp; memory drops</span>
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
          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="/contact-us"
              className="px-6 py-2.5 rounded-full bg-[#145E3F] text-white text-sm font-semibold hover:bg-[#0E432D] shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#145E3F] hover:bg-[#145E3F]/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-2 pt-2.5 pb-8 border-t border-[#145E3F]/15 bg-[#FDF4E5] max-h-[calc(100dvh-75px)] overflow-y-auto overscroll-contain pr-1">
            <div className="flex flex-col space-y-1.5 text-sm font-semibold uppercase tracking-wider text-[#145E3F]">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[42px] flex items-center px-3.5 py-2 rounded-xl transition-colors ${
                  isHome ? "bg-[#145E3F]/15 font-bold text-[#145E3F]" : "text-[#145E3F] hover:bg-[#145E3F]/10"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[42px] flex items-center px-3.5 py-2 rounded-xl transition-colors ${
                  isAbout ? "bg-[#145E3F]/15 font-bold text-[#145E3F]" : "text-[#145E3F] hover:bg-[#145E3F]/10"
                }`}
              >
                About Us
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full min-h-[42px] flex items-center justify-between px-3.5 py-2 rounded-xl transition-colors text-left uppercase tracking-wider text-sm ${
                    isServices || mobileServicesOpen
                      ? "bg-[#145E3F]/15 font-bold text-[#145E3F]"
                      : "font-semibold text-[#145E3F] hover:bg-[#145E3F]/10"
                  }`}
                  aria-expanded={mobileServicesOpen}
                >
                  <span>Treatments</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#145E3F] transform transition-transform duration-200 shrink-0 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-2 mb-1 p-3 rounded-2xl bg-white/75 backdrop-blur-sm border border-[#145E3F]/15 shadow-sm space-y-3.5 text-xs normal-case">
                    {/* Spine & Joint Care */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/15">
                        <span className="font-serif-heading text-[11.5px] font-bold text-[#145E3F] uppercase tracking-wider">
                          Spine &amp; Joint Care
                        </span>
                        <span className="text-[10px] font-semibold text-[#145E3F]/70 bg-white/70 px-1.5 py-0.5 rounded">
                          4 Therapies
                        </span>
                      </div>
                      <div className="flex flex-col divide-y divide-[#145E3F]/8">
                        <Link
                          href="/treatments/kati-basti-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Kati Basti (Back Pain &amp; Sciatica)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/janu-basti-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Janu Basti (Knee Joint Arthritis)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/manya-basti-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Manya Basti (Cervical &amp; Tech Neck)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/patra-pinda-sweda-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Patra Pinda Sweda (Elakizhi Bolus)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                      </div>
                    </div>

                    {/* Panchakarma & Detox */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/15">
                        <span className="font-serif-heading text-[11.5px] font-bold text-[#145E3F] uppercase tracking-wider">
                          Panchakarma &amp; Detox
                        </span>
                        <span className="text-[10px] font-semibold text-[#145E3F]/70 bg-white/70 px-1.5 py-0.5 rounded">
                          5-Fold
                        </span>
                      </div>
                      <div className="flex flex-col divide-y divide-[#145E3F]/8">
                        <Link
                          href="/treatments/panchakarma-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Panchakarma (5-Fold Detox)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/vamana-therapy-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Vamana Therapy (Kapha Detox)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/virechana-therapy-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Virechana (Pitta &amp; Liver Detox)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/basti-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Basti Karma (Medicated Enema)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/abhyanga-and-swedana-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Abhyanga &amp; Swedana (Herbal Steam)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                      </div>
                    </div>

                    {/* Fertility & Women's Health */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/15">
                        <span className="font-serif-heading text-[11.5px] font-bold text-[#145E3F] uppercase tracking-wider">
                          Fertility &amp; Women&apos;s Health
                        </span>
                        <span className="text-[10px] font-semibold text-[#145E3F]/70 bg-white/70 px-1.5 py-0.5 rounded">
                          4 Therapies
                        </span>
                      </div>
                      <div className="flex flex-col divide-y divide-[#145E3F]/8">
                        <Link
                          href="/treatments/garbha-sanskar-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Garbha Sanskar Program</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/suvarna-prashan-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Suvarna Prashan (Child Immunity)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/infertility-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Infertility &amp; PCOD Care</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/uttar-basti-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Uttar Basti (Tubal Block Relief)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                      </div>
                    </div>

                    {/* Stress, Neuro & Head Care */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/15">
                        <span className="font-serif-heading text-[11.5px] font-bold text-[#145E3F] uppercase tracking-wider">
                          Stress, Neuro &amp; Head Care
                        </span>
                        <span className="text-[10px] font-semibold text-[#145E3F]/70 bg-white/70 px-1.5 py-0.5 rounded">
                          3 Therapies
                        </span>
                      </div>
                      <div className="flex flex-col divide-y divide-[#145E3F]/8">
                        <Link
                          href="/treatments/shirodhara-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Shirodhara (Stress &amp; Sleep)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/nasya-therapy-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Nasya Therapy (Migraine &amp; Sinus)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/stroke-rehabilitation-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Stroke Rehabilitation (Pakshaghata)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                      </div>
                    </div>

                    {/* Skin, Hair & Eye Care */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/15">
                        <span className="font-serif-heading text-[11.5px] font-bold text-[#145E3F] uppercase tracking-wider">
                          Skin, Hair &amp; Eye Care
                        </span>
                        <span className="text-[10px] font-semibold text-[#145E3F]/70 bg-white/70 px-1.5 py-0.5 rounded">
                          2 Therapies
                        </span>
                      </div>
                      <div className="flex flex-col divide-y divide-[#145E3F]/8">
                        <Link
                          href="/treatments/raktamokshana-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Raktamokshana (Blood Cleansing)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/netra-tarpana-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Netra Tarpana (Eye Care &amp; Dry Eyes)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                      </div>
                    </div>

                    {/* Rapid Pain Relief & Vascular */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#145E3F]/10 border border-[#145E3F]/15">
                        <span className="font-serif-heading text-[11.5px] font-bold text-[#145E3F] uppercase tracking-wider">
                          Rapid Pain Relief &amp; Vascular
                        </span>
                        <span className="text-[10px] font-semibold text-[#145E3F]/70 bg-white/70 px-1.5 py-0.5 rounded">
                          3 Therapies
                        </span>
                      </div>
                      <div className="flex flex-col divide-y divide-[#145E3F]/8">
                        <Link
                          href="/treatments/agnikarma-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Agnikarma (Instant Pain Relief)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/jalaukavacharana-leech-therapy-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Jalaukavacharana (Leech Therapy)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                        <Link
                          href="/treatments/takradhara-treatment-in-kharadi"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2 px-2.5 text-[13px] font-medium text-gray-700 hover:text-[#145E3F] hover:bg-[#145E3F]/8 active:bg-[#145E3F]/12 rounded-lg transition-colors"
                        >
                          <span>Takradhara &amp; Lepa (Psoriasis &amp; Scalp)</span>
                          <ChevronRight size={13} className="text-[#145E3F]/40 shrink-0" />
                        </Link>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#145E3F]/15">
                      <Link
                        href="/treatments"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#145E3F] hover:bg-[#0E432D] text-white text-xs font-bold tracking-wide uppercase shadow-sm transition-colors"
                      >
                        <span>View All 21 Treatments Directory</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/treatment-gallery"
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[42px] flex items-center px-3.5 py-2 rounded-xl transition-colors ${
                  isGallery ? "bg-[#145E3F]/15 font-bold text-[#145E3F]" : "text-[#145E3F] hover:bg-[#145E3F]/10"
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[42px] flex items-center px-3.5 py-2 rounded-xl transition-colors ${
                  isContact ? "bg-[#145E3F]/15 font-bold text-[#145E3F]" : "text-[#145E3F] hover:bg-[#145E3F]/10"
                }`}
              >
                Contact Us
              </Link>

              <div className="pt-3.5 mt-2 border-t border-[#145E3F]/15 flex flex-col gap-2">
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-full bg-[#145E3F] hover:bg-[#0E432D] text-white font-bold text-sm tracking-wide shadow-sm transition-colors"
                >
                  Book Appointment
                </Link>
                <a
                  href={`tel:${siteConfig.phone1}`}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-full border border-[#145E3F] text-[#145E3F] hover:bg-[#145E3F]/10 text-sm font-semibold transition-colors"
                >
                  <Phone size={14} />
                  <span>Call: {siteConfig.phone1}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
