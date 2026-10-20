import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { CANONICAL_SERVICES } from "@/data/servicesData";
import { siteConfig } from "@/data/siteData";

interface MoreServicesCardProps {
  currentSlug: string;
}

export const MoreServicesCard: React.FC<MoreServicesCardProps> = ({ currentSlug }) => {
  // Filter out the current service to display the rest of the other services, limited to exactly 5 services
  const seen = new Set<string>();
  const otherServices = CANONICAL_SERVICES
    .filter((service) => {
      if (service.slug === currentSlug || seen.has(service.slug)) return false;
      seen.add(service.slug);
      return true;
    })
    .slice(0, 5);

  return (
    <aside
      aria-label="More Ayurvedic Services"
      className="bg-[#145E3F] rounded-[28px] p-6 sm:p-7 text-white shadow-xl border border-[#145E3F]/30 overflow-hidden"
    >
      {/* Card Header */}
      <div className="mb-4">
        <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white tracking-[0.5px]">
          More Services
        </h3>
        <p className="font-sans-body text-xs text-[#FDF4E5]/80 mt-1 leading-relaxed">
          Explore other specialized classical healing treatments at Shri Vishwavedhika Ayurvedic Clinic.
        </p>
      </div>

      {/* List of 5 Other Services */}
      <nav aria-label="Other treatments list" className="space-y-2 mb-6">
        {otherServices.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all duration-200 group"
          >
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A4E88C] shrink-0 group-hover:scale-125 transition-transform" />
              <span className="font-serif-heading text-xs sm:text-[13px] font-medium text-white group-hover:text-[#A4E88C] transition-colors truncate">
                {service.breadcrumbLabel || service.title}
              </span>
            </div>
            <ArrowRight
              size={14}
              className="text-[#A4E88C] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        ))}
      </nav>

      {/* Quick Consultation CTA at bottom of card */}
      <div className="pt-4 border-t border-white/15">
        <p className="text-xs font-semibold text-[#A4E88C] uppercase tracking-wider mb-1">
          Need Guidance?
        </p>
        <p className="text-xs text-[#FDF4E5]/80 mb-3 leading-snug">
          Consult Dr. Manjiri Musmade (B.A.M.S., PGFC in Panchakarma) to discuss your symptoms and customize a tailored therapy plan.
        </p>
        <div className="flex flex-col gap-2">
          <a
            href={`tel:${siteConfig.phone1}`}
            className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/20 transition-colors"
          >
            <Phone size={13} className="text-[#A4E88C]" />
            <span>Call 096049 95998</span>
          </a>
          <a
            href={`https://wa.me/91${siteConfig.phone1.replace(/\D/g, "")}?text=${encodeURIComponent(
              "Hello Doctor, I would like to inquire about Ayurvedic treatments at Shri Vishwavedhika Clinic."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold transition-colors shadow-sm"
          >
            <MessageSquare size={13} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
