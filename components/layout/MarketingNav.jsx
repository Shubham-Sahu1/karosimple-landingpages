"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { headerNavLinks } from "@/data/navigation";
import { LOGIN_URL, REGISTER_URL } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { CTAButton } from "../ui/CTAButton";
import { useTheme } from "next-themes";

export function MarketingNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Extract hash links if we are on the homepage
  const spyIds = headerNavLinks
    .filter((link) => link.isHash)
    .map((link) => link.href.replace("/#", ""));

  const activeSection = useScrollSpy(spyIds);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  const isLinkActive = (link) => {
    if (link.isHash) {
      return pathname === "/" && activeSection === link.href.replace("/#", "");
    }
    return pathname === link.href;
  };

  const logoSrc = isScrolled || isMobileMenuOpen
    ? (resolvedTheme === "dark" ? "/logo-white.svg" : "/logo.svg")
    : "/logo-white.svg"; // always white on transparent hero

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-16 flex items-center md:h-16 ${
          isScrolled || isMobileMenuOpen
            ? "bg-ks-white border-b border-ks-border shadow-nav"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center outline-none">
            <img
              src={mounted ? logoSrc : "/logo-white.svg"}
              alt="Karo Simple Logo"
              className="h-7 w-auto md:h-8 object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {headerNavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`type-body-sm font-semibold transition-colors duration-200 outline-none ${
                  isLinkActive(link)
                    ? "text-ks-green"
                    : isScrolled
                    ? "text-ks-navy hover:text-ks-green"
                    : "text-ks-white/80 hover:text-ks-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full hover:bg-ks-navy/5 dark:hover:bg-ks-white/10 transition-colors outline-none cursor-pointer ${
                isScrolled ? "text-ks-navy" : "text-ks-white"
              }`}
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <Link
              href={LOGIN_URL}
              className={`type-body-sm font-semibold transition-colors duration-200 outline-none ${
                isScrolled ? "text-ks-navy hover:text-ks-green" : "text-ks-white/80 hover:text-ks-white"
              }`}
            >
              Sign In
            </Link>
            <CTAButton href={REGISTER_URL} variant="primary" fullWidthMobile={false}>
              Get Started <ArrowRight className="w-4 h-4 ml-1.5" />
            </CTAButton>
          </div>

          {/* Hamburger button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 outline-none cursor-pointer transition-colors ${
              isScrolled || isMobileMenuOpen ? "text-ks-navy" : "text-ks-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-ks-white lg:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col justify-between p-6 overflow-y-auto">
          <nav className="flex flex-col space-y-5">
            {headerNavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`text-lg font-bold py-2 border-b border-ks-border ${
                  isLinkActive(link) ? "text-ks-green" : "text-ks-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col space-y-4 pb-20">
            {/* Mobile Theme Toggle Row */}
            <div className="flex items-center justify-between py-3 border-b border-ks-border mb-2">
              <span className="text-sm font-bold text-ks-navy">Theme</span>
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-ks-border text-ks-navy text-sm font-semibold outline-none cursor-pointer"
              >
                {mounted && resolvedTheme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4 text-yellow-400" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-ks-navy" /> Dark Mode
                  </>
                )}
              </button>
            </div>

            <CTAButton href={LOGIN_URL} variant="outline" className="w-full">
              Sign In
            </CTAButton>
            <CTAButton href={REGISTER_URL} variant="primary" className="w-full">
              Get Started Free <ArrowRight className="w-4 h-4 ml-1.5" />
            </CTAButton>
          </div>
        </div>
      </div>
    </>
  );
}
export default MarketingNav;
