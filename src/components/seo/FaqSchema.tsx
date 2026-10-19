import React from "react";

export interface FaqSchemaItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  items: FaqSchemaItem[];
}

export const FaqSchema: React.FC<FaqSchemaProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
