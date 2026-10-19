import React from "react";

interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "dark" | "light" | "gold";
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  children,
  variant = "dark",
  className = "",
}) => {
  const variantStyles = {
    dark: "text-[#145E3F] bg-[#145E3F]/10 border-[#145E3F]/20",
    light: "text-[#D4EDDA] bg-white/15 border-white/20",
    gold: "text-[#B8860B] bg-[#FDF4E5] border-[#E8DCC9]",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${variantStyles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      <span>{children}</span>
    </div>
  );
};
