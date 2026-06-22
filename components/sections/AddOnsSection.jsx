"use client";

import React, { useRef } from "react";
import { addOns } from "@/data/addOns";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AddOnsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        ".addon-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".addon-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="add-ons" className="py-24 bg-[#1B2A4A]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[1.875rem] md:text-[2rem] font-bold text-white mb-3">
            Need more? Add exactly what you need.
          </h2>
          <p className="text-[1rem] text-[#CBD5E1] max-w-[520px] mx-auto leading-relaxed">
            All add-ons work on top of any paid plan. Pay only for what you use.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="addon-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((addon) => (
            <div
              key={addon.id}
              className="addon-card bg-[#253559] border border-[#3D4F72] rounded-2xl p-7
                         hover:border-[#3DAA72]/50 hover:shadow-[0_4px_24px_rgba(61,170,114,0.1)] hover:scale-[1.02]
                         transition-all duration-200 ease-in-out"
            >
              {/* Icon + name row */}
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl leading-none">{addon.icon}</span>
                <div>
                  <h3 className="text-[1.125rem] font-semibold text-white leading-snug">
                    {addon.name}
                  </h3>
                  {addon.isOneTime && (
                    <span className="inline-flex mt-1.5 text-[0.68rem] font-semibold uppercase tracking-wide text-[#3DAA72] bg-[rgba(61,170,114,0.15)] border border-[#3DAA72]/20 px-2 py-0.5 rounded-full">
                      One-time
                    </span>
                  )}
                </div>
              </div>

              {/* Price */}
              <p className="text-[1.5rem] font-extrabold text-[#3DAA72] mb-1">
                {addon.price}
              </p>
              <p className="text-[0.8125rem] text-[#94A3B8] mb-4">
                {addon.billingNote}
              </p>

              {/* Description */}
              <p className="text-[0.9375rem] text-[#CBD5E1] leading-relaxed">
                {addon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AddOnsSection;
