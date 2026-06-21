"use client";

import React, { useRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { homeFAQs } from "@/data/faq";
import { FAQItem } from "../ui/FAQItem";
import { SectionHeading } from "../ui/SectionHeading";
import { useGSAPReveal } from "@/hooks/useGSAPReveal";

export function FAQSection() {
  const sectionRef = useRef(null);

  // Attach reveal trigger
  useGSAPReveal(sectionRef, { stagger: 0.08 });

  // Generate SEO schema.org JSON-LD
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFAQs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-ks-off-white overflow-hidden"
    >
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-16">
        
        {/* Section Heading */}
        <SectionHeading
          overline="Objections Resolved"
          title="Frequently Asked Questions"
          description="Everything you need to know about setting up, routing, and managing reviews on Karo Simple."
        />

        {/* Accordion Component */}
        <Accordion.Root
          type="single"
          collapsible
          className="space-y-4 max-w-3xl mx-auto text-left"
          data-reveal
        >
          {homeFAQs.map((faq) => (
            <FAQItem
              key={faq.id}
              value={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </Accordion.Root>

      </div>
    </section>
  );
}
export default FAQSection;
