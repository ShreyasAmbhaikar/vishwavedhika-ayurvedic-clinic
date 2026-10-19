import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "dark" | "light";
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  theme = "dark",
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-3 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}
    >
      <h2
        className={`font-serif-heading text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium ${
          isDark ? "text-[#145E3F]" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-[#5E695F]" : "text-[#FDF4E5]/85"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
