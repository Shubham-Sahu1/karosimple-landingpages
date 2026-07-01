import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinkGroups } from "@/data/navigation";

export function MarketingFooter() {
  return (
    <footer className="bg-[#1B2A4A] text-[#F1F5F9] border-t border-[#253559] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <Link href="/" className="inline-block outline-none">
              <Image
                src="/logo-white.svg"
                alt="Karo Simple Logo"
                width={160}
                height={32}
                className="h-8 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="type-body-sm text-[#94A3B8] max-w-sm">
              Helping local Indian businesses grow customer reviews on Google, Zomato, Swiggy, and 5+ other platforms effortlessly. Instantly capture 5-star feedback and route low ratings privately.
            </p>
          </div>

          {/* Links Cols */}
          {footerLinkGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="text-left space-y-4">
              <h4 className="type-label text-[#F5A623] tracking-wider font-bold">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="type-body-sm text-[#94A3B8] hover:text-white transition-colors outline-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-[#253559] my-8" />

        {/* Bottom Metadata & Compliance */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="type-body-sm text-[#94A3B8]">
              &copy; {new Date().getFullYear()} Karo Simple. All rights reserved.
            </p>
          </div>
          <div className="type-body-sm text-[#94A3B8] flex items-center gap-1.5 font-medium">
            Made with 💚 in India, for Indian.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MarketingFooter;
