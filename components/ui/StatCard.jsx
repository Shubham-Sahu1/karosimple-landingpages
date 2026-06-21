import React from "react";

export function StatCard({ number, label }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center" data-reveal>
      <span className="type-price text-ks-green block mb-2 font-extrabold md:text-5xl lg:text-6xl tracking-tight">
        {number}
      </span>
      <span className="type-body text-ks-white/90 font-medium">
        {label}
      </span>
    </div>
  );
}
export default StatCard;
