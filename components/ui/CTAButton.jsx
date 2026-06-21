import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function CTAButton({
  href,
  variant = "primary",
  fullWidthMobile = true,
  className,
  children,
  ...props
}) {
  const baseClasses = "type-cta inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 transform active:scale-95 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const sizeClasses = "px-8 py-4 min-h-[48px]";
  
  const variantClasses = {
    primary: "bg-ks-green text-ks-white hover:bg-ks-green-dark hover:shadow-cta hover:-translate-y-0.5 focus-visible:ring-ks-green",
    secondary: "bg-transparent border-2 border-ks-white text-ks-white hover:bg-ks-white/10 focus-visible:ring-ks-white",
    outline: "bg-transparent border-2 border-ks-navy text-ks-navy hover:bg-ks-navy hover:text-ks-white hover:-translate-y-0.5 focus-visible:ring-ks-navy",
    whatsapp: "bg-[#25D366] text-ks-white hover:bg-[#20ba5a] hover:shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 focus-visible:ring-[#25D366]"
  };

  const mergedClasses = twMerge(
    clsx(
      baseClasses,
      sizeClasses,
      variantClasses[variant],
      fullWidthMobile && "w-full sm:w-auto",
      className
    )
  );

  if (href) {
    return (
      <Link href={href} className={mergedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={mergedClasses} {...props}>
      {children}
    </button>
  );
}
export default CTAButton;
