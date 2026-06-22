"use client";

import React, { useRef } from "react";
import { featureCategories } from "@/data/featureCategories";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FeatureCategoriesSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.fromTo(
        ".fcat-heading",
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
          ...(prefersReducedMotion ? { duration: 0 } : {}),
        }
      );

      gsap.fromTo(
        ".fcat-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fcat-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          ...(prefersReducedMotion ? { duration: 0, stagger: 0 } : {}),
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="feature-categories"
      className="py-24 bg-[#1B2A4A]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Heading */}
        <div className="fcat-heading text-center mb-14">
          <span className="inline-block text-[0.72rem] font-semibold text-[#3DAA72] uppercase tracking-[2px] mb-3">
            What Karo Simple Does
          </span>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-white leading-tight mb-4">
            Six things Karo Simple does for your business
          </h2>
          <p className="text-[1.05rem] text-[#CBD5E1] max-w-[560px] mx-auto leading-relaxed">
            Every feature is built around one goal — making sure your real customers become your visible reputation online.
          </p>
        </div>

        {/* 2-col grid */}
        <div className="fcat-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureCategories.map((cat) => (
            <div key={cat.id} className="fcat-card group relative bg-[#253559] border border-[#3D4F72] rounded-2xl p-8
                                          hover:border-[#3DAA72]/50 hover:shadow-[0_4px_24px_rgba(61,170,114,0.1)] hover:scale-[1.02]
                                          transition-all duration-200 ease-in-out overflow-hidden">

              {/* Coming Soon overlay */}
              {cat.isComingSoon && (
                <div className="absolute inset-0 bg-[#253559]/90 backdrop-blur-[2px] rounded-2xl z-10 flex flex-col items-center justify-center">
                  <span className="inline-flex items-center gap-2 bg-[#1B2A4A] text-white text-sm font-semibold px-4 py-2 rounded-full border border-[#3D4F72]">
                    <span>🚀</span> Coming Soon
                  </span>
                  <p className="mt-3 text-[#CBD5E1] text-sm">This feature is in active development.</p>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-[rgba(61,170,114,0.12)] text-[#3DAA72] group-hover:bg-[rgba(61,170,114,0.2)] rounded-xl text-2xl mb-5 transition-colors duration-200">
                {cat.icon}
              </div>

              {/* Name */}
              <h3 className="text-[1.375rem] font-semibold text-white mb-2 leading-snug">
                {cat.name}
              </h3>

              {/* Description */}
              <p className="text-[1rem] text-[#94A3B8] leading-relaxed mb-5">
                {cat.description}
              </p>

              {/* Feature list */}
              {!cat.isComingSoon && cat.features.length > 0 && (
                <ul className="space-y-2.5">
                  {cat.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-[#3DAA72] font-bold text-base leading-none flex-shrink-0">✓</span>
                      <span className="text-[0.9375rem] text-[#CBD5E1] leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCategoriesSection;
