"use client";

import React, { useRef } from "react";
import { MapPin } from "lucide-react";
import { useGSAPReveal } from "@/hooks/useGSAPReveal";

const cities = [
  "Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Pune",
  "Chennai", "Jaipur", "Raipur", "Ahmedabad", "Lucknow",
  "Bhopal", "Surat", "Nagpur", "Indore", "Chandigarh",
];

const trustBadges = [
  { label: "DPDPA 2023 Compliant", icon: "🛡️" },
  { label: "Indian-Built & Hosted", icon: "🇮🇳" },
  { label: "No Data Shared Abroad", icon: "🔒" },
  { label: "Works on Any Phone", icon: "📱" },
];

export function TrustBarSection() {
  const sectionRef = useRef(null);
  useGSAPReveal(sectionRef, { stagger: 0.06, y: 20 });

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-14 bg-ks-navy border-t border-ks-navy-mid overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-8">

        {/* Heading */}
        <div className="text-center" data-reveal>
          <span className="type-label text-ks-green tracking-widest">
            Trusted Across India
          </span>
          <p className="type-body text-ks-white/70 mt-2 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-ks-green shrink-0" />
            Businesses in 50+ cities already use Karo Simple
          </p>
        </div>

        {/* City Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3" data-reveal>
          {cities.map((city) => (
            <span
              key={city}
              className="px-4 py-1.5 rounded-full bg-ks-navy-mid border border-ks-navy-light text-ks-white/80 type-body-sm font-semibold hover:border-ks-green hover:text-ks-green transition-colors cursor-default"
            >
              {city}
            </span>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-2" data-reveal>
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <span className="text-lg">{badge.icon}</span>
              <span className="type-body-sm font-semibold text-ks-white/60">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default TrustBarSection;
