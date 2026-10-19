import React from "react";
import { siteConfig, servicesList } from "@/data/siteData";

export const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Hospital", "MedicalBusiness"],
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: "https://vishwavedhikaayurveda.com",
    logo: "https://vishwavedhikaayurveda.com/images/logo-emblem.png",
    image: "https://vishwavedhikaayurveda.com/images/slider-01.webp",
    description: siteConfig.description,
    telephone: siteConfig.phone1,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: "Kharadi, Pune",
      addressRegion: "Maharashtra",
      postalCode: "411014",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5538",
      longitude: "73.9477",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "11:30",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:30",
        closes: "14:00",
      },
    ],
    hasMap: siteConfig.googleMapsUrl,
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "20",
    },
    medicalSpecialty: [
      "Ayurvedic Medicine",
      "Neurology",
      "Physiotherapy",
      "Panchakarma",
    ],
    availableService: servicesList.map((service) => ({
      "@type": "MedicalTherapy",
      name: service,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
