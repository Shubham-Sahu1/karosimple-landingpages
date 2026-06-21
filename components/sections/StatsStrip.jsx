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

  const stats = [
    {
      value: "5 Min",
      label: "Average Setup Time",
    },
    {
      value: "8+",
      label: "Platforms Supported",
    },
    {
      value: "0",
      label: "App Downloads or Logins Needed",
    },
    {
      value: "Local",
      label: "Language Reviews Supported",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#253559] border-t border-b border-[#3D4F72] py-9 px-4 md:px-8 lg:px-[60px]"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-row flex-wrap justify-center gap-10 md:gap-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-center flex-1 min-w-[200px] transition-all duration-700 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="font-sans font-extrabold text-[2.2rem] md:text-[2.4rem] text-[#3DAA72] leading-none">
              {stat.value}
            </div>
            <div className="font-sans font-medium text-[0.8rem] text-[#CBD5E1] tracking-[0.5px] mt-2 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsStrip;
