"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if the loader has already run in the current browser session
    const hasLoaded = sessionStorage.getItem("karo_loader_played");

    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    // Wait 2 seconds (animation completes a full cycle) before fading out
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      
      // Remove loader completely from DOM after fade-out transition (500ms)
      const removeTimer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("karo_loader_played", "true");
      }, 500);

      return () => clearTimeout(removeTimer);
    }, 2000);

    return () => clearTimeout(fadeTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#111111] md:bg-[#0c0c0c] transition-opacity duration-500 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Mobile Portrait Animation (360x640) */}
        <div className="block md:hidden w-full max-w-[360px] aspect-[9/16] relative">
          <Image
            src="/Logo Animation/logo_loader_portrait_optimized.webp"
            alt="Loading Karo Simple..."
            width={360}
            height={640}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Desktop Landscape Animation (640x360) */}
        <div className="hidden md:block w-full max-w-[640px] aspect-[16/9] relative">
          <Image
            src="/Logo Animation/logo_loader_optimized.webp"
            alt="Loading Karo Simple..."
            width={640}
            height={360}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default SiteLoader;
