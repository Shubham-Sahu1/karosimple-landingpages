import React from "react";
import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { footerLinkGroups } from "@/data/navigation";
import { CONTACT_EMAIL, WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function MarketingFooter() {
  return (
    <footer className="bg-ks-navy text-ks-white border-t border-ks-navy-mid pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <Link href="/" className="inline-block outline-none">
              <span className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-ks-green flex items-center justify-center text-ks-white font-black text-base">
                  K
                </span>
                <span>Karo <span className="text-ks-green">Simple</span></span>
              </span>
            </Link>
            <p className="type-body-sm text-ks-white/70 max-w-sm">
              Helping local Indian businesses increase their Google reputation effortlessly. Instantly capture happy reviews and filter negative feedback privately.
            </p>
            <div className="flex flex-col space-y-3 pt-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center text-ks-white/80 hover:text-ks-green transition-colors text-sm"
              >
                <Mail className="w-4.5 h-4.5 mr-2" />
                {CONTACT_EMAIL}
              </a>
              {/* WhatsApp mobile button */}
              <div className="w-full pt-1">
                <WhatsAppButton className="w-full sm:w-auto text-sm px-6 py-3 min-h-[44px]">
                  WhatsApp Support
                </WhatsAppButton>
              </div>
            </div>
          </div>

          {/* Links Cols */}
          {footerLinkGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="text-left space-y-4">
              <h4 className="type-label text-ks-green tracking-wider font-bold">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="type-body-sm text-ks-white/80 hover:text-ks-green transition-colors outline-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-ks-navy-mid my-8" />

        {/* Bottom Metadata & Compliance */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="type-body-sm text-ks-white/60">
              &copy; {new Date().getFullYear()} Karo Simple (A product of Karo Simple Tech Solutions Pvt Ltd). All rights reserved.
            </p>
            <p className="text-[11px] text-ks-white/40 tracking-wider">
              CIN: U72900DL2026PTC390123 &bull; GSTIN: 07AAAAA0000A1Z2
            </p>
          </div>
          <div className="type-body-sm text-ks-white/60 flex items-center gap-1.5 font-medium">
            Made with 💚 in India, for India.
          </div>
        </div>
      </div>
    </footer>
  );
}
export default MarketingFooter;
