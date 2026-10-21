import React from "react";
import { siteConfig, servicesList } from "@/data/siteData";

export const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Hospital", "HealthAndBeautyBusiness"],
    name: siteConfig.name,
    alternateName: [
      siteConfig.shortName,
      "Vishwavedhika Ayurvedic Clinic Kharadi",
      "Vishwavedhika Panchkarma Centre",
      "Dr Manjiri Musmade Ayurvedic Clinic",
    ],
    url: "https://vishwavedhikaayurveda.com",
    logo: "https://vishwavedhikaayurveda.com/images/logo-emblem.png",
    image: "https://vishwavedhikaayurveda.com/images/medicines.webp",
    description: siteConfig.description,
    telephone: siteConfig.phone1,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-96049-95998",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-97302-93777",
        contactType: "appointments",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: "Kharadi",
      addressRegion: "Maharashtra",
      postalCode: "411014",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5503972",
      longitude: "73.9390361",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Kharadi, Pune" },
      { "@type": "AdministrativeArea", name: "Chandan Nagar, Pune" },
      { "@type": "AdministrativeArea", name: "Viman Nagar, Pune" },
      { "@type": "AdministrativeArea", name: "Wadgaon Sheri, Pune" },
      { "@type": "AdministrativeArea", name: "Keshav Nagar, Pune" },
      { "@type": "AdministrativeArea", name: "Mundhwa, Pune" },
      { "@type": "AdministrativeArea", name: "Kalyani Nagar, Pune" },
      { "@type": "AdministrativeArea", name: "Hadapsar, Pune" },
      { "@type": "AdministrativeArea", name: "Wagholi, Pune" },
      { "@type": "AdministrativeArea", name: "Pune, Maharashtra" },
    ],
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
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "20",
      bestRating: "5",
      worstRating: "1",
    },
    medicalSpecialty: [
      "Ayurvedic Medicine",
      "Panchakarma",
      "Garbha Sanskar",
      "Infertility & Reproductive Health",
      "Spine and Joint Orthopedics",
      "Neurological Rehabilitation",
      "Physiotherapy",
    ],
    founder: {
      "@type": "Physician",
      name: "Dr. Manjiri Musmade",
      jobTitle: "Chief Ayurvedic Physician & Panchakarma Specialist",
      medicalSpecialty: "Ayurvedic Medicine",
      description:
        "BAMS, PGFC in Panchakarma, Fellowship in Garbhasanskar & Infertility with over a decade of clinical experience in root-cause healing.",
    },
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
