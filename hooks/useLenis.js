"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { connectLenisToGSAP } from "@/lib/gsap";

export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Disable smooth scroll on older iOS browsers
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent;
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      const isOldSafari = isIOS && /Safari/.test(ua) && !/Chrome/.test(ua) && parseFloat(ua.substring(ua.indexOf("Version/") + 8)) < 15;

      if (isOldSafari) return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard exponential easing
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Connect Lenis scroll callbacks to GSAP
    connectLenisToGSAP(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  return lenisRef.current;
}
