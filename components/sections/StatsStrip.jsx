"use client";

import React, { useEffect, useRef, useState } from "react";

export function StatsStrip() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#EF4444] border-t border-b border-[#D83A3A] py-12 px-4 md:px-8 lg:px-[60px]"
    >
      <div
        className={`w-full max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } flex flex-col items-center justify-center`}
      >
        {/* Warning Callout Badge (White for high contrast) */}
        <div className="inline-flex items-center gap-3 bg-white border border-white/20 rounded-2xl px-6 py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-full">
          <svg
            className="w-6 h-6 text-[#EF4444] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span className="font-sans font-extrabold italic text-[#EF4444] text-[0.95rem] sm:text-[1.125rem] tracking-wide leading-tight">
            "One bad review can cost you 10-15 customers/week"
          </span>
        </div>

        {/* Subtext description (White for readability on red) */}
        <p className="font-sans text-[0.95rem] sm:text-[1.05rem] text-white max-w-2xl mx-auto leading-relaxed mt-6 font-medium">
          In India's competitive market, your online reputation is your strongest currency. Don't let silent happy customers and vocal unhappy ones define your business.
        </p>
      </div>
    </section>
  );
}

export default StatsStrip;
