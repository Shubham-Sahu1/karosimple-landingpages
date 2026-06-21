"use client";

import { useEffect, useState } from "react";

/**
 * Monitors active layout section on scroll.
 * @param {string[]} sectionIds Element ids to observe.
 * @param {Object} options IntersectionObserver configuration.
 * @returns {string} ID of current visible section.
 */
export function useScrollSpy(sectionIds, options = { rootMargin: "-20% 0px -60% 0px" }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [sectionIds, options]);

  return activeId;
}
export default useScrollSpy;
