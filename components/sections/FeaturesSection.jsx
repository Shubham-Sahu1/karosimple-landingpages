"use client";

import React, { useRef } from "react";
import { featuresData } from "@/data/features";
import { FeatureCard } from "../ui/FeatureCard";
import { SectionHeading } from "../ui/SectionHeading";
import { useGSAPReveal } from "@/hooks/useGSAPReveal";

export function FeaturesSection() {
  const sectionRef = useRef(null);

  // Attach stagger reveal
  useGSAPReveal(sectionRef, { stagger: 0.08 });

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 bg-ks-off-white border-b border-ks-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center space-y-16">
        
        {/* Section Heading */}
        <SectionHeading
          overline="Engineered for Reputation"
          title="Everything You Need to Rank #1 on Google"
          description="A powerful review management engine designed to convert standard physical customers into digital advocates."
        />

        {/* Features Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              iconName={feature.iconName}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
export default FeaturesSection;
