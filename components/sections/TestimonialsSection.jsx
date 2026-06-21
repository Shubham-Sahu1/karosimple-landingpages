"use client";

import React, { useRef } from "react";
import { testimonialsData } from "@/data/testimonials";
import { TestimonialCard } from "../ui/TestimonialCard";
import { SectionHeading } from "../ui/SectionHeading";
import { useGSAPReveal } from "@/hooks/useGSAPReveal";

export function TestimonialsSection() {
  const sectionRef = useRef(null);

  // Attach scroll reveal
  useGSAPReveal(sectionRef, { stagger: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-ks-white border-b border-ks-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center space-y-16">
        
        {/* Section Heading */}
        <SectionHeading
          overline="Customer Success Stories"
          title="Loved by 500+ Indian Businesses"
          description="Read how restaurant, salon, and medical owners across India optimized their Google listings using Karo Simple."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonialsData.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              role={item.role}
              businessName={item.businessName}
              city={item.city}
              quote={item.quote}
              stars={item.stars}
              initials={item.initials}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
export default TestimonialsSection;
