import React from "react";

export function Loader({ size = "md", color = "green", className }) {
  const sizeClasses = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4"
  };

  const colorClasses = {
    green: "border-ks-green/20 border-t-ks-green",
    white: "border-ks-white/20 border-t-ks-white",
    navy: "border-ks-navy/20 border-t-ks-navy"
  };

  return (
    <div
      className={`rounded-full animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className || ""}`}
      role="status"
      aria-label="loading spinner"
    />
  );
}

export default Loader;
