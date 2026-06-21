import React from "react";
import { MarketingNav } from "./MarketingNav";
import { MarketingFooter } from "./MarketingFooter";

export function LegalPageLayout({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingNav />
      <main className="flex-grow bg-[#F5F7FA] pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 bg-ks-white border border-[#EEF1F5] rounded-2xl p-8 md:p-12 shadow-sm text-left">
          <h1 className="type-h1 text-ks-navy mb-2">{title}</h1>
          {lastUpdated && (
            <p className="type-body-sm text-ks-muted mb-8 font-semibold">
              Last updated: {lastUpdated}
            </p>
          )}
          <hr className="border-[#EEF1F5] mb-8" />
          <div className="type-body text-ks-navy leading-relaxed space-y-6">
            {children}
          </div>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}
export default LegalPageLayout;
