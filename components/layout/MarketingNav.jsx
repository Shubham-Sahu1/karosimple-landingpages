"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { headerNavLinks } from "@/data/navigation";
import { REGISTER_URL } from "@/lib/constants";

export function MarketingNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.style.overflow = "hidden"; // lock scroll
      } else {
        document.body.style.overflow = "unset";
      }
      return next;
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 flex items-center border-b border-[#253559] ${
          isScrolled
            ? "h-[60px] bg-[rgba(27,42,74,0.95)] backdrop-blur-[30px] shadow-nav"
            : "h-[60px] lg:h-[68px] bg-[rgba(27,42,74,0.85)] backdrop-blur-[20px]"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center outline-none">
            <img
              src="/logo-white.svg"
              alt="Karo Simple Logo"
              className="h-[30px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center gap-[32px]">
            {headerNavLinks.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`font-sans font-medium text-[0.9rem] transition-colors duration-200 outline-none ${
                    isActive
                      ? "text-[#3DAA72] underline decoration-[#3DAA72] decoration-2 underline-offset-8 font-semibold"
                      : "text-[#CBD5E1] hover:text-[#3DAA72]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:block">
            <a
              href={REGISTER_URL}
              className="inline-block font-sans font-semibold text-[0.95rem] text-[#FFFFFF] bg-[#3DAA72] px-[24px] py-[10px] rounded-full transition-all duration-300 transform hover:bg-[#2D8A5A] hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(61,170,114,0.35)] outline-none"
            >
              Start Free →
            </a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-[#CBD5E1] hover:text-[#FFFFFF] outline-none cursor-pointer transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-[60px] z-[998] bg-[#1B2A4A] lg:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-between p-6 pb-24 overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            {headerNavLinks.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-lg font-bold py-3 border-b border-[#253559] transition-colors ${
                    isActive
                      ? "text-[#3DAA72] underline decoration-[#3DAA72] decoration-2 underline-offset-4"
                      : "text-[#CBD5E1] hover:text-[#3DAA72]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col space-y-4 pt-8">
            <a
              href={REGISTER_URL}
              className="w-full text-center font-bold text-base text-[#FFFFFF] bg-[#3DAA72] py-[14px] rounded-full hover:bg-[#2D8A5A] transition-colors outline-none"
            >
              Start Free Today →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketingNav;
