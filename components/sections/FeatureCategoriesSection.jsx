"use client";

import React, { useRef } from "react";
import { featureCategories } from "@/data/featureCategories";
import Image from "next/image";
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

      // Eyebrow and header fade-in
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

      // Alternating scroll entry/exit animations for card columns
      const cards = gsap.utils.toArray(".fcat-card");
      cards.forEach((card) => {
        const leftEl = card.querySelector(".fcat-left");
        const rightEl = card.querySelector(".fcat-right");

        if (leftEl) {
          gsap.fromTo(
            leftEl,
            { opacity: 0, x: -80 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
              },
              ...(prefersReducedMotion ? { duration: 0, x: 0 } : {}),
            }
          );
        }

        if (rightEl) {
          gsap.fromTo(
            rightEl,
            { opacity: 0, x: 80 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
              },
              ...(prefersReducedMotion ? { duration: 0, x: 0 } : {}),
            }
          );
        }
      });
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
        <div className="fcat-heading text-center mb-16">
          <span className="inline-block text-[0.72rem] font-semibold text-[#3DAA72] uppercase tracking-[2px] mb-3">
            What Karo Simple Does
          </span>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-white leading-tight mb-4">
            Six things Karo Simple does for your business
          </h2>
          <p className="text-[1.05rem] text-[#CBD5E1] max-w-[560px] mx-auto leading-relaxed">
            Every feature is built around one goal: making sure your real customers become your visible reputation online.
          </p>
        </div>

        {/* Stack of Alternating Feature Sections */}
        <div className="fcat-grid space-y-12">
          {featureCategories.map((cat, index) => {
            const isImageLeft = index % 2 === 1; // Alternate layout pattern

            return (
              <div
                key={cat.id}
                className="fcat-card group bg-[#253559]/40 backdrop-blur-sm border border-[#3D4F72] rounded-[2.5rem] p-8 lg:p-14
                           hover:border-[#3DAA72]/30 hover:shadow-[0_4px_24px_rgba(61,170,114,0.05)]
                           transition-all duration-300 ease-in-out overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  
                  {/* Left Column */}
                  <div className={`fcat-left lg:col-span-6 space-y-6 ${isImageLeft ? "order-2 lg:order-1" : "order-1"}`}>
                    {isImageLeft ? (
                      /* Image is on the left */
                      <div className="relative w-full aspect-[4/3] sm:aspect-[1.5] rounded-3xl overflow-hidden border border-[#3D4F72]/50 shadow-2xl bg-[#1B2A4A]/50">
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ) : (
                      /* Content is on the left */
                      <div className="space-y-5">
                        <h3 className="text-[1.375rem] font-semibold text-white mb-2 leading-snug">
                          {cat.name}
                        </h3>
                        <p className="text-[1rem] text-[#94A3B8] leading-relaxed mb-5">
                          {cat.description}
                        </p>
                        {cat.features.length > 0 && (
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
                    )}
                  </div>

                  {/* Right Column */}
                  <div className={`fcat-right lg:col-span-6 space-y-6 ${isImageLeft ? "order-1 lg:order-2" : "order-2"}`}>
                    {isImageLeft ? (
                      /* Content is on the right */
                      <div className="space-y-5">
                        <h3 className="text-[1.375rem] font-semibold text-white mb-2 leading-snug">
                          {cat.name}
                        </h3>
                        <p className="text-[1rem] text-[#94A3B8] leading-relaxed mb-5">
                          {cat.description}
                        </p>
                        {cat.features.length > 0 && (
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
                    ) : (
                      /* Image is on the right */
                      <div className="relative w-full aspect-[4/3] sm:aspect-[1.5] rounded-3xl overflow-hidden border border-[#3D4F72]/50 shadow-2xl bg-[#1B2A4A]/50">
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureCategoriesSection;
