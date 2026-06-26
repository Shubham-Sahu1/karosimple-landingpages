import React from "react";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import FAQPageClient from "./FAQPageClient";

export const metadata = {
  title: "Frequently Asked Questions - Karo Simple",
  description:
    "Everything you need to know about Karo Simple's review management system, QR codes, AI review generator, multi-location agency setup, and pricing.",
  alternates: { canonical: "https://karosimple.in/faq" },
};

export default function FAQPage() {
  return (
    <>
      <MarketingNav />
      <main className="bg-[#1B2A4A] text-white min-h-screen">
        <FAQPageClient />
      </main>
      <MarketingFooter />
    </>
  );
}
