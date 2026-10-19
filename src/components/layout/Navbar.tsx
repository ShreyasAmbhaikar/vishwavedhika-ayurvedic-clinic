"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteData";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const pathname = usePathname() || "";
  const isAbout = pathname === "/about-us";
  const isHome = pathname === "/";
  const isContact = pathname === "/contact-us" || pathname === "/contact";
  const isGallery = pathname.includes("gallery");
  const isServices = pathname.startsWith("/services");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          ? "bg-[#FDF4E5]/95 backdrop-blur-md shadow-sm py-2.5"
          : "bg-[#FDF4E5] py-4"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* 1. Left Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <div className="relative w-12 h-12 sm:w-13 sm:h-13 shrink-0 rounded-full overflow-hidden shadow-sm border-2 border-[#145E3F]/25 bg-white">
              <Image
                src="/images/logo-emblem.png"
                alt="Shri Vishwawedhika Ayurvedic Center & Panchakarma Garbha Sanskar Center Logo"
                fill
                priority
                sizes="(max-width: 640px) 48px, 52px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-heading text-[15px] sm:text-base lg:text-[17px] font-bold text-[#145E3F] leading-tight tracking-tight">
                Shri Vishwawedhika
              </span>
              <span className="font-serif-heading text-xs sm:text-[13px] font-semibold text-[#16231B] leading-tight">
                Ayurvedic Center
              </span>
              <span className="text-[9.5px] sm:text-[10px] font-medium text-[#48A547] leading-tight tracking-wide">
                &amp; Panchakarma Garbha Sanskar Center
              </span>
            </div>
          </Link>

          {/* 2. Center Pill Navigation Container (Centered with absolute positioning & balanced vertical padding) */}
          <nav className="hidden xl:flex items-center absolute left-1/2 -translate-x-1/2 bg-[#145E3F]/18 rounded-full px-5 py-2 shadow-sm border border-[#145E3F]/10">
            <ul className="flex items-center text-[13px] font-semibold uppercase tracking-wider text-[#145E3F]">
              <li>
                <Link
                  href="/"
                  className={`px-3.5 py-1 transition-colors ${
                    isHome ? "text-[#145E3F] font-bold" : "hover:text-[#48A547]"
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
                  href="/services"
                  className={`px-3.5 py-1 transition-colors inline-flex items-center gap-1 ${
                    isServices
                      ? "text-[#48A547] font-bold underline underline-offset-4 decoration-2 decoration-[#48A547]"
                      : "hover:text-[#48A547]"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown size={13} className="text-[#145E3F]/70" />
                </Link>

                {servicesDropdown && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-[#FAFFF4] rounded-2xl shadow-2xl border border-[#145E3F]/20 py-2.5 overflow-hidden">
                      <Link
                        href="/services/stroke-treatment"
                        onClick={() => setServicesDropdown(false)}
                        className="block px-4 py-2 text-xs font-semibold text-[#383838] hover:bg-[#F8FFEF] hover:text-[#48A547] transition-colors capitalize"
                      >
                        Stroke Treatment
                      </Link>
                      <Link
                        href="/services/back-pain-treatment"
                        onClick={() => setServicesDropdown(false)}
                        className="block px-4 py-2 text-xs font-semibold text-[#383838] hover:bg-[#F8FFEF] hover:text-[#48A547] transition-colors capitalize"
                      >
                        Back Pain Treatment
                      </Link>
                      <Link
                        href="/services/panchakarma-treatment"
                        onClick={() => setServicesDropdown(false)}
                        className="block px-4 py-2 text-xs font-semibold text-[#383838] hover:bg-[#F8FFEF] hover:text-[#48A547] transition-colors capitalize"
                      >
                        Panchakarma Treatment
                      </Link>
                      <Link
                        href="/services/physiotherapy"
                        onClick={() => setServicesDropdown(false)}
                        className="block px-4 py-2 text-xs font-semibold text-[#383838] hover:bg-[#F8FFEF] hover:text-[#48A547] transition-colors capitalize"
                      >
                        Physiotherapy
                      </Link>
                      <Link
                        href="/services/cerebral-palsy"
                        onClick={() => setServicesDropdown(false)}
                        className="block px-4 py-2 text-xs font-semibold text-[#383838] hover:bg-[#F8FFEF] hover:text-[#48A547] transition-colors capitalize"
                      >
                        Cerebral Palsy
                      </Link>
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
                      ? "text-[#48A547] font-bold underline underline-offset-4 decoration-2 decoration-[#48A547]"
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
                      ? "text-[#48A547] font-bold underline underline-offset-4 decoration-2 decoration-[#48A547]"
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
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg hover:bg-[#145E3F]/10 ${
                  isServices ? "bg-[#145E3F]/15 font-bold text-[#48A547]" : ""
                }`}
              >
                Services
              </Link>
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
