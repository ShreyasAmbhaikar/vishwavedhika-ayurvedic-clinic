import React from "react";
import { Star } from "lucide-react";

interface RatingStarsProps {
  rating?: number;
  maxStars?: number;
  size?: number;
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating = 5,
  maxStars = 5,
  size = 18,
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      {Array.from({ length: maxStars }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={`${
            index < rating
              ? "fill-[#F59E0B] text-[#F59E0B]"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};
