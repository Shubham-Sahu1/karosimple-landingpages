import React from "react";
import { Star } from "lucide-react";

export function TestimonialCard({ name, role, businessName, city, quote, stars = 5, initials }) {
  return (
    <div
      className="bg-ks-white rounded-2xl p-8 shadow-card border-l-4 border-ks-green flex flex-col justify-between h-full text-left"
      data-reveal
    >
      <div className="space-y-4">
        {/* Stars */}
        <div className="flex items-center space-x-1 text-yellow-400">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <p className="type-body text-ks-navy italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="mt-8 border-t border-ks-border pt-5 flex items-center space-x-4">
        {/* Avatar badge */}
        <div className="w-12 h-12 rounded-full bg-ks-green text-ks-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0">
          {initials}
        </div>

        <div>
          <h4 className="type-body font-bold text-ks-navy leading-none mb-1">
            {name}
          </h4>
          <p className="type-body-sm text-ks-muted leading-tight">
            {role}, {businessName} &bull; <span className="text-ks-navy-light">{city}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default TestimonialCard;
