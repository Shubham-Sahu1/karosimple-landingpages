import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { CTAButton } from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-ks-off-white">
      <MarketingNav />

      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-lg mx-auto space-y-8">

          {/* Big 404 */}
          <div className="relative">
            <span className="text-[10rem] font-extrabold text-ks-navy/5 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-ks-green flex items-center justify-center shadow-cta">
                <span className="text-ks-white font-black text-3xl">K</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-4">
            <h1 className="type-h1 text-ks-navy">Page Not Found</h1>
            <p className="type-body-lg text-ks-muted">
              Oops! The page you&apos;re looking for doesn&apos;t exist or may
              have been moved. Let&apos;s get you back on track.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <CTAButton href="/" variant="primary">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </CTAButton>
            <CTAButton href="/contact" variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Contact Support
            </CTAButton>
          </div>

          {/* Quick Links */}
          <div className="pt-4 border-t border-ks-border">
            <p className="type-body-sm text-ks-muted mb-3 font-semibold">
              Or visit one of these pages:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Pricing", href: "/pricing" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="type-body-sm font-semibold text-ks-green hover:text-ks-green-dark underline underline-offset-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
