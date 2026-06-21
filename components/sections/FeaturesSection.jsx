"use client";

import React, { useRef } from "react";
import { featuresData } from "@/data/features";
import { FeatureCard } from "../ui/FeatureCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FeaturesSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set("[data-reveal]", { opacity: 1, y: 0 });
        return;
      }

      // Heading fade-up
      gsap.fromTo(
        ".features-heading",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards staggered fade-up from bottom
      gsap.fromTo(
        ".feature-card-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 bg-[#1B2A4A] border-b border-[#253559] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Section Heading */}
        <div className="features-heading text-center mb-14 space-y-3">
          <span className="inline-block font-sans font-bold text-[0.72rem] text-[#3DAA72] uppercase tracking-[2px]">
            Engineered for Reputation
          </span>
          <h2 className="font-sans font-bold text-[2rem] md:text-[2.75rem] leading-tight text-white tracking-tight">
            Everything You Need to{" "}
            <span className="text-[#3DAA72]">Rank #1 and Maintain Your Reputation</span>
          </h2>
          <p className="font-sans text-[1.05rem] text-[#CBD5E1] max-w-[600px] mx-auto leading-relaxed">
            Every tool you need to collect more reviews, protect your rating, and stay ahead of the competition.
          </p>
        </div>

        {/* Features Grid — 1 col → 2 col sm → 3 col lg */}
        <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card-item">
              <FeatureCard
                iconName={feature.iconName}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;
