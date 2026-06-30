"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

export function FeatureCard({ iconName, title, description }) {
  const IconComponent = LucideIcons[iconName] || LucideIcons.HelpCircle;

  return (
    <div
      className="group bg-[#253559] rounded-2xl p-6 border border-[#3D4F72] hover:border-[#3DAA72]/50 hover:shadow-[0_4px_24px_rgba(61,170,114,0.1)] hover:scale-[1.02] transition-all duration-200 ease-in-out flex flex-col items-start text-left cursor-default"
      data-reveal
    >
      {/* Green icon tray */}
      <div className="flex items-center justify-center rounded-xl p-2.5 bg-[rgba(61,170,114,0.12)] text-[#3DAA72] mb-4 w-11 h-11 group-hover:bg-[rgba(61,170,114,0.2)] transition-colors duration-200">
        <IconComponent className="w-6 h-6" strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="font-sans font-bold text-[1.125rem] text-white mb-2 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-[0.875rem] text-[#94A3B8] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
