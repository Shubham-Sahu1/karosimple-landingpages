"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function SocialProofStrip() {
  const stripRef = useRef(null);

  useGSAP(() => {
    // Check user motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const targets = stripRef.current.querySelectorAll(".count-up-val");
      targets.forEach((el) => {
        el.innerText = el.getAttribute("data-target") + (el.getAttribute("data-suffix") || "");
      });
      return;
    }

    const targets = stripRef.current.querySelectorAll(".count-up-val");
    
    targets.forEach((el) => {
      const targetVal = parseFloat(el.getAttribute("data-target"));
      const isFloat = el.getAttribute("data-float") === "true";
      const suffix = el.getAttribute("data-suffix") || "";
      const obj = { value: 0 };

      gsap.to(obj, {
        value: targetVal,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stripRef.current,
          start: "top 90%",
        },
        onUpdate: () => {
          if (isFloat) {
            el.innerText = obj.value.toFixed(1) + suffix;
          } else {
            el.innerText = Math.floor(obj.value).toLocaleString("en-IN") + suffix;
          }
        },
      });
    });
  }, { scope: stripRef });

  const stats = [
    {
      target: "500",
      suffix: "+",
      label: "Indian Merchants Trust Us",
      isFloat: false,
    },
    {
      target: "25000",
      suffix: "+",
      label: "Google Reviews Generated",
      isFloat: false,
    },
    {
      target: "0.8",
      suffix: "★",
      label: "Avg Rating Gain in 90 Days",
      isFloat: true,
    },
    {
      target: "4.9",
      suffix: "/5",
      label: "Customer Satisfaction Score",
      isFloat: true,
    },
  ];

  return (
    <section
      ref={stripRef}
      className="bg-ks-navy py-16 overflow-hidden border-y border-ks-navy-mid"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center space-y-1">
              <span
                className="count-up-val type-price text-ks-green block font-extrabold md:text-5xl lg:text-6xl tracking-tight"
                data-target={stat.target}
                data-suffix={stat.suffix}
                data-float={stat.isFloat ? "true" : "false"}
              >
                0{stat.suffix}
              </span>
              <span className="type-body-sm text-ks-white/70 max-w-[180px] leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SocialProofStrip;
