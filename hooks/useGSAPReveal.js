"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reusable scroll trigger reveal hook using GSAP.
 * @param {Object} containerRef React Ref of container element
 * @param {Object} options animation properties
 */
export function useGSAPReveal(containerRef, options = {}) {
  const {
    y = 30,
    stagger = 0.08,
    duration = 0.6,
    start = "top 85%",
    delay = 0,
  } = options;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Handle user motion preference
      if (typeof window !== "undefined") {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReducedMotion) {
          const targets = containerRef.current.querySelectorAll("[data-reveal]");
          gsap.set(targets, { opacity: 1, y: 0 });
          return;
        }
      }

      const targets = containerRef.current.querySelectorAll("[data-reveal]");

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );
}
