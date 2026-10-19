import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/siteData";

export const BlogSection: React.FC = () => {
  // 6 posts matching the 2-row layout shown in the full-page screenshot
  const allBlogPosts = [
    ...blogPosts,
    {
      id: "panchakarma-guide",
      title: "Panchakarma Detoxification: Complete Natural Rejuvenation Therapy",
      image: "/images/young-woman-measuring-her-thin-waist-with-tape-measure-3-1-768x513.jpg",
      link: "#contact",
    },
    {
      id: "spine-relief",
      title: "Natural Spine Care & Disc Herniation Relief with Authentic Therapies",
      image: "/images/man-struggles-with-back-pain-kidney-stones-home-amidst-inflammation-disease-challenges-1-768x578.jpg",
      link: "#contact",
    },
    {
      id: "neuro-rehab",
      title: "Ayurvedic Neurological Rehabilitation for Stroke and Paralysis",
      image: "/images/senior-man-wheelchair-looking-through-window-covid19-lockdown-1-768x512.jpg",
      link: "#contact",
    },
  ];

  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#FDF4E5]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <p className="font-serif-heading text-sm sm:text-base font-bold uppercase tracking-[1px] text-[#48A547]">
            Blog Post
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-medium text-black tracking-[0.5px]">
            Ayurvedic Insights
          </h2>
        </div>

        {/* 6 Blog Cards (2 rows of 3) matching the original screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts.map((post, index) => (
            <article
              key={`${post.id}-${index}`}
              className="group bg-white corner-curve-card-tr border border-[#DBDBDB] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden pb-6"
            >
              <div>
                {/* Blog Image with corner-curve-image-tr */}
                <div className="relative w-full h-56 corner-curve-image-tr overflow-hidden bg-gray-50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover corner-curve-image-tr group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif-heading text-lg sm:text-[19px] font-medium text-black leading-snug group-hover:text-[#48A547] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pt-1">
                <Link
                  href={post.link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#145E3F] hover:text-[#48A547] transition-colors group/link"
                >
                  <span>Read More</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
