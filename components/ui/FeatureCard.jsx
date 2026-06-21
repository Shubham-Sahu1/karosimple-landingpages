import React from "react";
import * as LucideIcons from "lucide-react";

export function FeatureCard({ iconName, title, description }) {
  // Dynamically resolve icon from Lucide
  const IconComponent = LucideIcons[iconName] || LucideIcons.HelpCircle;

  return (
    <div
      className="bg-ks-white rounded-2xl p-8 border border-ks-border shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left group"
      data-reveal
    >
      <div className="bg-ks-green-light p-3.5 rounded-xl text-ks-green mb-5 group-hover:bg-ks-green group-hover:text-ks-white transition-colors duration-300">
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="type-h3 text-ks-navy mb-2">
        {title}
      </h3>
      <p className="type-body text-ks-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
export default FeatureCard;
