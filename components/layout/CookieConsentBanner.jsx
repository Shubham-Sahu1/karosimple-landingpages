"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import { CTAButton } from "../ui/CTAButton";
import { GA4_ID } from "@/lib/constants";

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ks_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    if (!GA4_ID || typeof window === "undefined") return;

    if (document.getElementById("google-analytics")) return;

    // Google Tag script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    script.id = "google-analytics";
    script.async = true;
    document.head.appendChild(script);

    // Initializer
    const inlineScript = document.createElement("script");
    inlineScript.id = "google-analytics-init";
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA4_ID}', { page_path: window.location.pathname });
    `;
    document.head.appendChild(inlineScript);
  };

  const handleAccept = () => {
    localStorage.setItem("ks_cookie_consent", "accepted");
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem("ks_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-45 p-4 bg-ks-white border-t border-ks-border shadow-[0_-8px_32px_rgba(27,42,74,0.1)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start space-x-3 text-left">
          <div className="bg-ks-green-light p-2 rounded-lg text-ks-green shrink-0 mt-0.5">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="type-body font-bold text-ks-navy mb-0.5">Cookie & Consent Settings</h4>
            <p className="type-body-sm text-ks-muted leading-relaxed">
              We use analytics cookies to optimize user metrics. Under India's **DPDPA 2023** regulation, we request your consent before initiating scripts. View our{" "}
              <Link href="/privacy" className="text-ks-green underline hover:text-ks-green-dark">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full sm:w-auto">
          <CTAButton
            onClick={handleDecline}
            variant="outline"
            className="px-6 py-2.5 min-h-[40px] text-sm w-full sm:w-auto"
            fullWidthMobile={false}
          >
            Decline
          </CTAButton>
          <CTAButton
            onClick={handleAccept}
            variant="primary"
            className="px-6 py-2.5 min-h-[40px] text-sm w-full sm:w-auto"
            fullWidthMobile={false}
          >
            Accept All
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
export default CookieConsentBanner;
